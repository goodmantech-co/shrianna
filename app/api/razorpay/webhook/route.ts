import { NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/razorpay";
import { appendOrderRow } from "@/lib/sheets";

/**
 * Razorpay webhook backstop. Configure a `payment.captured` (and optionally
 * `order.paid`) webhook in the Razorpay dashboard pointing at this route, with
 * the same secret as RAZORPAY_WEBHOOK_SECRET. Guarantees an order lands in the
 * sheet even if the customer's browser closed before the verify call ran.
 * The Apps Script dedupes on order id, so this never double-writes.
 */

interface RazorpayPaymentEntity {
  id?: string;
  order_id?: string;
  amount?: number;
  email?: string;
  contact?: string;
  notes?: Record<string, string>;
}

export async function POST(req: Request) {
  const raw = await req.text();
  const signature = req.headers.get("x-razorpay-signature") ?? "";

  if (!verifyWebhookSignature(raw, signature)) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  let event: { event?: string; payload?: { payment?: { entity?: RazorpayPaymentEntity } } };
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  if (event.event === "payment.captured" || event.event === "order.paid") {
    const payment = event.payload?.payment?.entity ?? {};
    const notes = payment.notes ?? {};
    try {
      await appendOrderRow({
        orderId: payment.order_id ?? "",
        paymentId: payment.id ?? "",
        status: "paid",
        source: "webhook",
        name: notes.name ?? "",
        phone: notes.phone ?? payment.contact ?? "",
        email: notes.email ?? payment.email ?? "",
        address: notes.address ?? "",
        city: "",
        pincode: "",
        items: notes.items ?? "",
        itemCount: notes.item_count ?? "",
        amount: notes.amount_inr ?? (payment.amount ? payment.amount / 100 : ""),
        note: "recorded via webhook",
      });
    } catch (e) {
      console.error("[razorpay/webhook] sheet append failed:", e);
      // Return 500 so Razorpay retries the webhook later.
      return NextResponse.json({ error: "Logging failed." }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
