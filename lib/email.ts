import type { Customer, ResolvedLine } from "@/lib/order";
import { formatPrice } from "@/lib/utils";

/**
 * Resend transactional email (server-side only). Uses the REST API via fetch so
 * we don't add the `resend` SDK. The customer-facing "order confirmed" email is
 * sent from here at payment time. Later fulfilment-stage emails (packed/shipped/
 * delivered) are sent from the Google Apps Script when the team updates the sheet.
 */

const API_KEY = process.env.RESEND_API_KEY ?? "";
const FROM = process.env.RESEND_FROM ?? "Narmada Millets <orders@shriannafederation.in>";

export function emailConfigured(): boolean {
  return Boolean(API_KEY);
}

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  if (!emailConfigured()) {
    throw new Error("Resend is not configured (RESEND_API_KEY).");
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM,
      to: [params.to],
      subject: params.subject,
      html: params.html,
      ...(params.replyTo ? { reply_to: params.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend send failed (${res.status}): ${await res.text()}`);
  }
}

// ---------------------------------------------------------------------------
// Templates
// ---------------------------------------------------------------------------

const BRAND = "#4d7c0f";

function shell(heading: string, intro: string, body: string): string {
  return `<!doctype html><html><body style="margin:0;background:#f6f6f4;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <div style="max-width:560px;margin:0 auto;padding:24px;">
    <div style="background:#fff;border:1px solid #eee;border-radius:16px;overflow:hidden;">
      <div style="background:${BRAND};padding:20px 28px;">
        <span style="color:#fff;font-size:18px;font-weight:600;letter-spacing:.2px;">Narmada Millets</span>
        <span style="color:#e6efce;font-size:12px;"> · by Shrianna Federation</span>
      </div>
      <div style="padding:28px;">
        <h1 style="margin:0 0 8px;font-size:22px;">${heading}</h1>
        <p style="margin:0 0 20px;color:#555;font-size:14px;line-height:1.6;">${intro}</p>
        ${body}
      </div>
      <div style="padding:18px 28px;border-top:1px solid #f0f0f0;color:#999;font-size:12px;">
        Shrianna Federation · Madhya Pradesh · Reply to this email if you need help.
      </div>
    </div>
  </div></body></html>`;
}

function lineItemsTable(lines: ResolvedLine[], total: number): string {
  const rows = lines
    .map(
      (l) => `<tr>
        <td style="padding:8px 0;font-size:14px;">${l.name} <span style="color:#888;">· ${l.weight} × ${l.quantity}</span></td>
        <td style="padding:8px 0;font-size:14px;text-align:right;white-space:nowrap;">${formatPrice(l.lineTotal)}</td>
      </tr>`
    )
    .join("");
  return `<table style="width:100%;border-collapse:collapse;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin:4px 0 16px;">
    ${rows}
    <tr>
      <td style="padding:12px 0 0;font-size:15px;font-weight:700;">Total</td>
      <td style="padding:12px 0 0;font-size:15px;font-weight:700;text-align:right;">${formatPrice(total)}</td>
    </tr>
  </table>`;
}

export function orderConfirmationEmail(params: {
  customer: Customer;
  lines: ResolvedLine[];
  total: number;
  orderId: string;
}): { subject: string; html: string } {
  const { customer, lines, total, orderId } = params;
  const address = `${customer.address}, ${customer.city} — ${customer.pincode}`;
  const body = `
    ${lineItemsTable(lines, total)}
    <p style="margin:0 0 4px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:.08em;">Delivering to</p>
    <p style="margin:0 0 16px;font-size:14px;line-height:1.5;">${customer.name}<br>${address}<br>${customer.phone}</p>
    <p style="margin:0;font-size:12px;color:#999;">Order ref: ${orderId}</p>`;
  return {
    subject: "Your Narmada Millets order is confirmed",
    html: shell(
      "Thank you for your order!",
      "We've received your payment and our team is getting your millets ready. We'll email you again when it ships.",
      body
    ),
  };
}
