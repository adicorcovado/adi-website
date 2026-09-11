import type { Language, Translations } from "../translations";
import type {
  BookingCurrency,
  BookingPricing,
  HeadcountTotals,
  MealTotals,
} from "../bookingPricing";
import {
  EMAIL_COLORS,
  escapeHtml,
  renderEmailLayout,
  renderKeyValueTable,
  renderLineItemsTable,
  renderSectionTitle,
} from "./layout";

export interface BookingSubmission extends HeadcountTotals {
  name: string;
  email: string;
  companyName?: string;
  checkInDate: string;
  checkOutDate: string;
  meals: MealTotals;
}

interface BuildBookingEmailInput {
  data: BookingSubmission;
  pricing: BookingPricing;
  t: Translations;
  lang: Language;
}

interface BookingEmail {
  subject: string;
  html: string;
}

function formatMoney(amount: number, currency: BookingCurrency, lang: Language): string {
  const locale = lang === "es" ? "es-CR" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "CRC" ? 0 : 2,
  }).format(amount);
}

function formatDate(dateValue: string, lang: Language): string {
  const locale = lang === "es" ? "es-CR" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${dateValue}T00:00:00Z`));
}

function renderSummaryBody(input: BuildBookingEmailInput): string {
  const { data, pricing, t, lang } = input;
  const shared = t.emails.booking.shared;
  const categoryLabels = t.booking.form.step2.fields;
  const mealLabels = t.booking.form.step2.mealTypes;

  const tripDetailRows: Array<[string, string]> = [
    [shared.guestLabel, data.name],
    [shared.emailLabel, data.email],
  ];
  if (data.companyName) {
    tripDetailRows.push([shared.companyLabel, data.companyName]);
  }
  const sameDayTrip = data.checkInDate === data.checkOutDate;
  tripDetailRows.push(
    [shared.checkInLabel, formatDate(data.checkInDate, lang)],
    [shared.checkOutLabel, formatDate(data.checkOutDate, lang)],
    [shared.nightsLabel, sameDayTrip ? "--" : String(pricing.nights)],
  );

  let html = renderSectionTitle(shared.tripDetailsTitle);
  html += renderKeyValueTable(tripDetailRows);

  if (pricing.lodgingLines.length > 0) {
    html += renderSectionTitle(shared.lodgingTitle);
    html += renderLineItemsTable(
      [
        shared.categoryColumn,
        shared.guestsColumn,
        shared.rateColumn,
        shared.subtotalColumn,
      ],
      pricing.lodgingLines.map((line) => [
        categoryLabels[line.category].label,
        String(line.count),
        formatMoney(line.unitPrice, line.currency, lang),
        formatMoney(line.total, line.currency, lang),
      ]),
    );
  }

  if (pricing.mealLines.length > 0) {
    html += renderSectionTitle(shared.mealsTitle);
    html += renderLineItemsTable(
      [
        shared.dateColumn,
        shared.mealColumn,
        shared.categoryColumn,
        shared.guestsColumn,
        shared.mealRateColumn,
        shared.subtotalColumn,
      ],
      pricing.mealLines.map((line) => [
        formatDate(line.date, lang),
        mealLabels[line.mealType].title,
        categoryLabels[line.category].label,
        String(line.count),
        formatMoney(line.unitPrice, line.currency, lang),
        formatMoney(line.total, line.currency, lang),
      ]),
    );
  }

  const totalEntries = Object.entries(pricing.totalsByCurrency) as Array<
    [BookingCurrency, number]
  >;
  if (totalEntries.length > 0) {
    html += `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 8px;">
      ${totalEntries
        .map(
          ([currency, amount]) => `
      <tr>
        <td style="padding:4px 0;font-size:15px;font-weight:700;color:${EMAIL_COLORS.accent900};">${escapeHtml(shared.totalLabel)} (${currency})</td>
        <td style="padding:4px 0;font-size:15px;font-weight:700;color:${EMAIL_COLORS.accent900};text-align:right;">${formatMoney(amount, currency, lang)}</td>
      </tr>`,
        )
        .join("")}
    </table>`;

    if (totalEntries.some(([currency]) => currency === "CRC")) {
      html += `<p style="margin:8px 0 0;font-size:12px;color:${EMAIL_COLORS.accent400};">${escapeHtml(shared.exchangeNote)}</p>`;
    }
  }

  return html;
}

export function buildBookingAdminEmail(input: BuildBookingEmailInput): BookingEmail {
  const { data, t } = input;
  const admin = t.emails.booking.admin;

  const bodyHtml = `
    <h1 style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:${EMAIL_COLORS.accent900};">${escapeHtml(admin.heading)}</h1>
    <p style="margin:0 0 24px;color:${EMAIL_COLORS.accent700};">${escapeHtml(admin.intro)}</p>
    ${renderSummaryBody(input)}
    <p style="margin:24px 0 0;font-size:13px;color:${EMAIL_COLORS.accent400};">${escapeHtml(t.emails.booking.shared.attachmentNote)}</p>
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

export function buildBookingGuestEmail(input: BuildBookingEmailInput): BookingEmail {
  const { data, t } = input;
  const guest = t.emails.booking.guest;
  const greeting = t.emails.booking.shared.greeting.replace("{name}", data.name);

  const bodyHtml = `
    <h1 style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:${EMAIL_COLORS.accent900};">${escapeHtml(guest.heading)}</h1>
    <p style="margin:0 0 4px;color:${EMAIL_COLORS.accent700};">${escapeHtml(greeting)}</p>
    <p style="margin:0 0 24px;color:${EMAIL_COLORS.accent700};">${escapeHtml(guest.intro)}</p>
    ${renderSummaryBody(input)}
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
