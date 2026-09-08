/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Server-only Resend API key used to send booking/contact emails. */
  readonly RESEND_API_KEY: string;
  /** Verified "from" address used when sending booking emails via Resend. */
  readonly BOOKING_FROM_EMAIL: string;
  /** Inbox that receives new booking requests. Falls back to the footer contact email. */
  readonly BOOKING_NOTIFICATION_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
