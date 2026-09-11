/**
 * Email HTML is sent as-is through Resend, so it can't consume Tailwind
 * classes or CSS variables from src/styles/global.css — most email clients
 * strip <style> blocks and don't support custom properties. These hex values
 * mirror the `@theme` tokens there; keep them in sync if the theme changes.
 */
export const EMAIL_COLORS = {
  primary50: "#e8f1ea",
  primary500: "#1d6f2e",
  primary700: "#154f21",
  accent050: "#e9e9ef",
  accent400: "#4d4e7c",
  accent700: "#171841",
  accent900: "#0e0e26",
  white: "#ffffff",
};

const LOGO_URL = "https://adicorcovado.org/logo-adi.png";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface EmailLayoutOptions {
  previewText: string;
  bodyHtml: string;
  footerAddress: string;
  footerRights: string;
}

export function renderEmailLayout({
  previewText,
  bodyHtml,
  footerAddress,
  footerRights,
}: EmailLayoutOptions): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ADI Corcovado Carate</title>
  </head>
  <body style="margin:0;padding:0;background-color:${EMAIL_COLORS.primary50};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(previewText)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${EMAIL_COLORS.primary50};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="700" cellpadding="0" cellspacing="0" style="max-width:700px;width:100%;background-color:${EMAIL_COLORS.white};border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background-color:${EMAIL_COLORS.accent900};padding:24px 32px;text-align:center;">
                <img src="${LOGO_URL}" alt="ADI Corcovado" height="100" style="height:100px;width:auto;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px;color:${EMAIL_COLORS.accent700};font-size:15px;line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background-color:${EMAIL_COLORS.primary50};padding:20px 32px;text-align:center;color:${EMAIL_COLORS.accent400};font-size:12px;line-height:1.5;">
                <p style="margin:0 0 4px;">${escapeHtml(footerAddress)}</p>
                <p style="margin:0;">© ${new Date().getFullYear()} ADI Corcovado Carate. ${escapeHtml(footerRights)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderKeyValueTable(rows: Array<[string, string]>): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border-collapse:collapse;">
    ${rows
      .map(
        ([label, value]) => `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid ${EMAIL_COLORS.accent050};color:${EMAIL_COLORS.accent400};font-size:13px;width:40%;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 0;border-bottom:1px solid ${EMAIL_COLORS.accent050};color:${EMAIL_COLORS.accent900};font-size:14px;font-weight:600;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`,
      )
      .join("")}
  </table>`;
}

export function renderSectionTitle(title: string): string {
  return `<h2 style="margin:0 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:16px;font-weight:700;color:${EMAIL_COLORS.accent900};">${escapeHtml(title)}</h2>`;
}

export function renderLineItemsTable(
  headers: string[],
  rows: string[][],
): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border-collapse:collapse;">
    <tr>
      ${headers
        .map(
          (header, index) => `
      <td style="padding:6px 8px;background-color:${EMAIL_COLORS.primary50};color:${EMAIL_COLORS.primary700};font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;${index === 0 ? "border-radius:6px 0 0 6px;" : ""}${index === headers.length - 1 ? "border-radius:0 6px 6px 0;text-align:right;" : ""}">${escapeHtml(header)}</td>`,
        )
        .join("")}
    </tr>
    ${rows
      .map(
        (row) => `
    <tr>
      ${row
        .map(
          (cell, index) => `
      <td style="padding:8px;border-bottom:1px solid ${EMAIL_COLORS.accent050};color:${EMAIL_COLORS.accent700};font-size:13px;${index === row.length - 1 ? "text-align:right;font-weight:600;color:" + EMAIL_COLORS.accent900 + ";" : ""}">${escapeHtml(cell)}</td>`,
        )
        .join("")}
    </tr>`,
      )
      .join("")}
  </table>`;
}
