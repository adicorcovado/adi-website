import type { Translations } from "../translations";
import {
  EMAIL_COLORS,
  escapeHtml,
  renderEmailLayout,
  renderKeyValueTable,
  renderSectionTitle,
} from "./layout";

export interface ContactSubmission {
  name: string;
  email: string;
  comment?: string;
}

interface BuildContactEmailInput {
  data: ContactSubmission;
  t: Translations;
}

interface ContactEmail {
  subject: string;
  html: string;
}

function renderMessageBody(data: ContactSubmission, t: Translations): string {
  const shared = t.emails.contact.shared;

  let html = renderSectionTitle(shared.detailsTitle);
  html += renderKeyValueTable([
    [shared.nameLabel, data.name],
    [shared.emailLabel, data.email],
  ]);

  if (data.comment) {
    html += renderSectionTitle(shared.messageTitle);
    html += `<p style="margin:0;white-space:pre-wrap;color:${EMAIL_COLORS.accent700};">${escapeHtml(data.comment)}</p>`;
  }

  return html;
}

export function buildContactAdminEmail(input: BuildContactEmailInput): ContactEmail {
  const { data, t } = input;
  const admin = t.emails.contact.admin;

  const bodyHtml = `
    <h1 style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:${EMAIL_COLORS.accent900};">${escapeHtml(admin.heading)}</h1>
    <p style="margin:0 0 24px;color:${EMAIL_COLORS.accent700};">${escapeHtml(admin.intro)}</p>
    ${renderMessageBody(data, t)}
  `;

  return {
    subject: `${admin.subjectPrefix} — ${data.name}`,
    html: renderEmailLayout({
      previewText: `${admin.subjectPrefix} — ${data.name}`,
      bodyHtml,
      footerAddress: t.footer.address,
      footerRights: t.footer.rights,
    }),
  };
}

export function buildContactGuestEmail(input: BuildContactEmailInput): ContactEmail {
  const { data, t } = input;
  const guest = t.emails.contact.guest;
  const greeting = t.emails.contact.shared.greeting.replace("{name}", data.name);

  const bodyHtml = `
    <h1 style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:${EMAIL_COLORS.accent900};">${escapeHtml(guest.heading)}</h1>
    <p style="margin:0 0 4px;color:${EMAIL_COLORS.accent700};">${escapeHtml(greeting)}</p>
    <p style="margin:0 0 24px;color:${EMAIL_COLORS.accent700};">${escapeHtml(guest.intro)}</p>
    ${renderMessageBody(data, t)}
    <p style="margin:24px 0 0;font-size:13px;color:${EMAIL_COLORS.accent400};">${escapeHtml(guest.footerNote)}</p>
  `;

  return {
    subject: guest.subject,
    html: renderEmailLayout({
      previewText: guest.subject,
      bodyHtml,
      footerAddress: t.footer.address,
      footerRights: t.footer.rights,
    }),
  };
}
