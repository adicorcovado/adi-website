import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "zod";
import {
  HEADCOUNT_FIELDS,
  ID_TYPES,
  MEAL_TYPES,
  MIN_ENTRANCE_FEE_PROOFS,
  PAYMENT_METHODS,
  type HeadcountField,
  type MealType,
} from "../../utils/contactFormSchema";
import {
  calculateBookingPricing,
  calculateNights,
} from "../../utils/bookingPricing";
import {
  buildBookingAdminEmail,
  buildBookingGuestEmail,
} from "../../utils/email/bookingEmails";
import { getTranslations } from "../../utils/translations";
import { getClientIp, verifyTurnstileToken } from "../../utils/turnstile";

export const prerender = false;

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const headcountSchema = z.coerce.number().int().min(0);
const headcountShape = HEADCOUNT_FIELDS.reduce(
  (shape, field) => {
    shape[field] = headcountSchema;
    return shape;
  },
  {} as Record<HeadcountField, typeof headcountSchema>,
);

const mealHeadcountShape = HEADCOUNT_FIELDS.reduce(
  (shape, field) => {
    shape[field] = headcountSchema.default(0);
    return shape;
  },
  {} as Record<HeadcountField, z.ZodDefault<typeof headcountSchema>>,
);

const mealCategorySchema = z.object(mealHeadcountShape);
const mealDayShape = MEAL_TYPES.reduce(
  (shape, meal) => {
    shape[meal] = mealCategorySchema;
    return shape;
  },
  {} as Record<MealType, typeof mealCategorySchema>,
);
const mealDaySchema = z.object(mealDayShape);

const bookingRequestSchema = z
  .object({
    name: z.string().trim().min(1),
    email: z.string().trim().min(1).email(),
    companyName: z.string().trim().optional(),
    idType: z.enum(ID_TYPES),
    idNumber: z.string().trim().min(1),
    paymentMethod: z.enum(PAYMENT_METHODS),
    checkInDate: z.string().min(1),
    checkOutDate: z.string().min(1),
    lang: z.enum(["en", "es"]).default("es"),
    turnstileToken: z.string().trim().min(1),
    ...headcountShape,
    meals: z.record(z.string(), mealDaySchema),
  })
  .refine((data) => new Date(data.checkOutDate) >= new Date(data.checkInDate), {
    message: "checkOutDate must be on or after checkInDate",
    path: ["checkOutDate"],
  });

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ error: "Invalid form submission." }, 400);
  }

  let meals: unknown;
  try {
    const rawMeals = formData.get("meals");
    meals = rawMeals ? JSON.parse(String(rawMeals)) : undefined;
  } catch {
    return jsonResponse({ error: "Invalid meals payload." }, 400);
  }

  const parsed = bookingRequestSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    companyName: formData.get("companyName") || undefined,
    idType: formData.get("idType"),
    idNumber: formData.get("idNumber"),
    paymentMethod: formData.get("paymentMethod"),
    checkInDate: formData.get("checkInDate"),
    checkOutDate: formData.get("checkOutDate"),
    lang: formData.get("lang") || "es",
    turnstileToken: formData.get("turnstileToken"),
    adults: formData.get("adults"),
    children: formData.get("children"),
    guides: formData.get("guides"),
    volunteers: formData.get("volunteers"),
    researchers: formData.get("researchers"),
    meals,
  });

  if (!parsed.success) {
    return jsonResponse(
      { error: "Please check the required fields and try again." },
      400,
    );
  }

  const clientIp = getClientIp(request);
  const isHuman = await verifyTurnstileToken(
    parsed.data.turnstileToken,
    clientIp,
  );
  if (!isHuman) {
    return jsonResponse(
      { error: "Captcha verification failed. Please try again." },
      400,
    );
  }

  const entranceFeeProofs = formData
    .getAll("entranceFeeProofs")
    .filter((value): value is File => value instanceof File && value.size > 0);

  if (entranceFeeProofs.length < MIN_ENTRANCE_FEE_PROOFS) {
    return jsonResponse(
      {
        error:
          MIN_ENTRANCE_FEE_PROOFS <= 1
            ? "Please attach the park entrance fee confirmation document."
            : `Please attach at least ${MIN_ENTRANCE_FEE_PROOFS} park entrance fee confirmation documents.`,
      },
      400,
    );
  }
  if (entranceFeeProofs.some((file) => file.size > MAX_FILE_SIZE)) {
    return jsonResponse(
      { error: "Each attached file must be 10 MB or smaller." },
      400,
    );
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail = import.meta.env.BOOKING_FROM_EMAIL;
  if (!resendApiKey || !fromEmail) {
    console.error(
      "Booking API is missing RESEND_API_KEY and/or BOOKING_FROM_EMAIL configuration.",
    );
    return jsonResponse(
      {
        error:
          "Booking requests are temporarily unavailable. Please try again later.",
      },
      500,
    );
  }

  const data = parsed.data;
  const lang = data.lang;
  const t = getTranslations(lang);
  const notificationEmail =
    import.meta.env.BOOKING_NOTIFICATION_EMAIL || t.footer.email;

  const nights = calculateNights(data.checkInDate, data.checkOutDate);
  const sameDayTrip = data.checkInDate === data.checkOutDate;
  const pricing = calculateBookingPricing(
    data,
    data.meals,
    nights,
    !sameDayTrip,
  );
  const attachments = await Promise.all(
    entranceFeeProofs.map(async (file, index) => ({
      filename: file.name || `entrance-fee-confirmation-${index + 1}`,
      content: Buffer.from(await file.arrayBuffer()),
    })),
  );

  const resend = new Resend(resendApiKey);
  // Admin notifications always go out in Spanish, regardless of the guest's language.
  const adminEmail = buildBookingAdminEmail({
    data,
    pricing,
    t: getTranslations("es"),
    lang: "es",
  });
  const guestEmail = buildBookingGuestEmail({ data, pricing, t, lang });

  const [adminResult, guestResult] = await Promise.allSettled([
    resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: data.email,
      subject: adminEmail.subject,
      html: adminEmail.html,
      attachments,
    }),
    resend.emails.send({
      from: fromEmail,
      to: data.email,
      replyTo: notificationEmail,
      subject: guestEmail.subject,
      html: guestEmail.html,
    }),
  ]);

  // The Resend SDK resolves (rather than rejects) on API errors, returning
  // `{ data: null, error }` — so a successful `allSettled` outcome still
  // needs its `.error` field checked.
  if (adminResult.status === "rejected" || adminResult.value.error) {
    console.error(
      "Failed to send booking notification email:",
      adminResult.status === "rejected"
        ? adminResult.reason
        : adminResult.value.error,
    );
    return jsonResponse(
      { error: "We couldn't submit your request. Please try again later." },
      502,
    );
  }

  if (guestResult.status === "rejected" || guestResult.value.error) {
    console.error(
      "Failed to send booking confirmation email:",
      guestResult.status === "rejected"
        ? guestResult.reason
        : guestResult.value.error,
    );
  }

  return jsonResponse({ success: true }, 200);
};
