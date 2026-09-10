import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "zod";
import {
  HEADCOUNT_FIELDS,
  MEAL_TYPES,
  type HeadcountField,
  type MealType,
} from "../../utils/contactFormSchema";
import { calculateBookingPricing, calculateNights } from "../../utils/bookingPricing";
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

const mealCategorySchema = z.object(headcountShape);
const mealsShape = MEAL_TYPES.reduce(
  (shape, meal) => {
    shape[meal] = mealCategorySchema;
    return shape;
  },
  {} as Record<MealType, typeof mealCategorySchema>,
);

const bookingRequestSchema = z
  .object({
    name: z.string().trim().min(1),
    email: z.string().trim().min(1).email(),
    companyName: z.string().trim().optional(),
    checkInDate: z.string().min(1),
    checkOutDate: z.string().min(1),
    lang: z.enum(["en", "es"]).default("en"),
    turnstileToken: z.string().trim().min(1),
    ...headcountShape,
    meals: z.object(mealsShape),
  })
  .refine(
    (data) => new Date(data.checkOutDate) >= new Date(data.checkInDate),
    { message: "checkOutDate must be on or after checkInDate", path: ["checkOutDate"] },
  );

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
    checkInDate: formData.get("checkInDate"),
    checkOutDate: formData.get("checkOutDate"),
    lang: formData.get("lang") || "en",
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

  const entranceFeeProof = formData.get("entranceFeeProof");
  if (!(entranceFeeProof instanceof File) || entranceFeeProof.size === 0) {
    return jsonResponse(
      { error: "Please attach the park entrance fee confirmation." },
      400,
    );
  }
  if (entranceFeeProof.size > MAX_FILE_SIZE) {
    return jsonResponse(
      { error: "The attached file must be 10 MB or smaller." },
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
      { error: "Booking requests are temporarily unavailable. Please try again later." },
      500,
    );
  }

  const data = parsed.data;
  const lang = data.lang;
  const t = getTranslations(lang);
  const notificationEmail = import.meta.env.BOOKING_NOTIFICATION_EMAIL || t.footer.email;

  const nights = calculateNights(data.checkInDate, data.checkOutDate);
  const sameDayTrip = data.checkInDate === data.checkOutDate;
  const pricing = calculateBookingPricing(data, data.meals, nights, !sameDayTrip);
  const attachmentBuffer = Buffer.from(await entranceFeeProof.arrayBuffer());

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
      attachments: [
        {
          filename: entranceFeeProof.name || "entrance-fee-confirmation",
          content: attachmentBuffer,
        },
      ],
    }),
    resend.emails.send({
      from: fromEmail,
      to: data.email,
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
      adminResult.status === "rejected" ? adminResult.reason : adminResult.value.error,
    );
    return jsonResponse(
      { error: "We couldn't submit your request. Please try again later." },
      502,
    );
  }

  if (guestResult.status === "rejected" || guestResult.value.error) {
    console.error(
      "Failed to send booking confirmation email:",
      guestResult.status === "rejected" ? guestResult.reason : guestResult.value.error,
    );
  }

  return jsonResponse({ success: true }, 200);
};
