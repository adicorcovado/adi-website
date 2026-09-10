import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "zod";
import {
  buildContactAdminEmail,
  buildContactGuestEmail,
} from "../../utils/email/contactEmails";
import { getTranslations } from "../../utils/translations";

export const prerender = false;

const contactRequestSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().min(1).email(),
  comment: z.string().trim().optional(),
  lang: z.enum(["en", "es"]).default("en"),
  turnstileToken: z.string().trim().min(1),
});

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function verifyTurnstileToken(
  token: string,
  remoteIp: string | null,
): Promise<boolean> {
  const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("Contact API is missing TURNSTILE_SECRET_KEY configuration.");
    return false;
  }

  const body = new URLSearchParams({ secret: secretKey, response: token });
  if (remoteIp) body.append("remoteip", remoteIp);

  try {
    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body },
    );
    const outcome = (await result.json()) as { success: boolean };
    return outcome.success;
  } catch (error) {
    console.error("Failed to verify Turnstile token:", error);
    return false;
  }
}

export const POST: APIRoute = async ({ request }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid form submission." }, 400);
  }

  const parsed = contactRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return jsonResponse(
      { error: "Please check the required fields and try again." },
      400,
    );
  }

  const clientIp =
    request.headers.get("CF-Connecting-IP") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    null;
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

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail = import.meta.env.CONTACT_FROM_EMAIL;
  if (!resendApiKey || !fromEmail) {
    console.error(
      "Contact API is missing RESEND_API_KEY and/or CONTACT_FROM_EMAIL configuration.",
    );
    return jsonResponse(
      { error: "Contact requests are temporarily unavailable. Please try again later." },
      500,
    );
  }

  const data = parsed.data;
  const lang = data.lang;
  const t = getTranslations(lang);
  const notificationEmail = import.meta.env.CONTACT_NOTIFICATION_EMAIL || t.footer.email;

  const resend = new Resend(resendApiKey);
  // Admin notifications always go out in Spanish, regardless of the sender's language.
  const adminEmail = buildContactAdminEmail({ data, t: getTranslations("es") });
  const guestEmail = buildContactGuestEmail({ data, t });

  const [adminResult, guestResult] = await Promise.allSettled([
    resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: data.email,
      subject: adminEmail.subject,
      html: adminEmail.html,
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
      "Failed to send contact notification email:",
      adminResult.status === "rejected" ? adminResult.reason : adminResult.value.error,
    );
    return jsonResponse(
      { error: "We couldn't send your message. Please try again later." },
      502,
    );
  }

  if (guestResult.status === "rejected" || guestResult.value.error) {
    console.error(
      "Failed to send contact auto-reply email:",
      guestResult.status === "rejected" ? guestResult.reason : guestResult.value.error,
    );
  }

  return jsonResponse({ success: true }, 200);
};
