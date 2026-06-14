/**
 * Appends an order row to the Google Sheet via a bound Apps Script web app.
 * The web app accepts a POST, checks a shared token, and appends/dedupes a row.
 * See scripts/google-sheets-order-log.gs and RAZORPAY_SHEETS_SETUP.md.
 */

const WEBAPP_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL ?? "";
const WEBAPP_TOKEN = process.env.GOOGLE_SHEETS_WEBAPP_TOKEN ?? "";

export function sheetsConfigured(): boolean {
  return Boolean(WEBAPP_URL && WEBAPP_TOKEN);
}

export interface OrderRow {
  orderId: string;
  paymentId: string;
  status: string;
  source: "checkout" | "webhook";
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  items: string;
  itemCount: number | string;
  amount: number | string; // rupees
  note?: string;
}

export async function appendOrderRow(row: OrderRow): Promise<void> {
  if (!sheetsConfigured()) {
    throw new Error("Google Sheets web app is not configured (GOOGLE_SHEETS_WEBAPP_URL / _TOKEN).");
  }

  const res = await fetch(WEBAPP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: WEBAPP_TOKEN, ...row }),
    redirect: "follow", // Apps Script web apps 302 to script.googleusercontent.com
  });

  if (!res.ok) {
    throw new Error(`Sheets append failed (${res.status}): ${await res.text()}`);
  }
  const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (data && data.ok === false) {
    throw new Error(`Sheets append rejected: ${data.error ?? "unknown error"}`);
  }
}
