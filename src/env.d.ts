/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Server-only Resend API key used to send booking/contact emails. */
  readonly RESEND_API_KEY: string;
  /** Verified "from" address used when sending booking emails via Resend. */
  readonly BOOKING_FROM_EMAIL: string;
  /** Inbox that receives new booking requests. Falls back to the footer contact email. */
  readonly BOOKING_NOTIFICATION_EMAIL?: string;
  /** Server-only Cloudflare Turnstile secret key used to verify captcha tokens. */
  readonly TURNSTILE_SECRET_KEY: string;
  /** Public Cloudflare Turnstile site key used to render the captcha widget. */
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
