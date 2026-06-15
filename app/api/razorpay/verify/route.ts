import { NextResponse } from "next/server";
import { computeOrder, itemsSummary, type CartLineInput, type Customer } from "@/lib/order";
import { verifyPaymentSignature } from "@/lib/razorpay";
import { appendOrderRow } from "@/lib/sheets";
import { emailConfigured, orderConfirmationEmail, sendEmail } from "@/lib/email";

interface VerifyBody {
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  razorpay_signature?: string;
  customer?: Customer;
  items?: CartLineInput[];
}

export async function POST(req: Request) {
  let body: VerifyBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: "Missing payment confirmation fields." }, { status: 400 });
  }

  const valid = verifyPaymentSignature({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
  });
  if (!valid) {
    return NextResponse.json({ error: "Payment could not be verified." }, { status: 400 });
  }

  // Payment is genuine. Log it to the sheet (deduped server-side on order id).
  const order = computeOrder((body.items ?? []) as CartLineInput[]);
  const c = (body.customer ?? {}) as Customer;
  try {
    await appendOrderRow({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      status: "paid",
      source: "checkout",
      name: c.name ?? "",
      phone: c.phone ?? "",
      email: c.email ?? "",
      address: c.address ?? "",
      city: c.city ?? "",
      pincode: c.pincode ?? "",
      items: itemsSummary(order.lines),
      itemCount: order.itemCount,
      amount: order.amount,
    });
  } catch (e) {
    // The payment succeeded — never fail the customer because logging hiccuped.
    // The Razorpay webhook is the backstop that will still record this order.
    console.error("[razorpay/verify] sheet append failed:", e);
  }

  // Send the order-confirmation email (best-effort — never fail the request on it).
  if (c.email && emailConfigured()) {
    try {
      const { subject, html } = orderConfirmationEmail({
        customer: c,
        lines: order.lines,
        total: order.amount,
        orderId: razorpay_order_id,
      });
      await sendEmail({ to: c.email, subject, html, replyTo: "orders@shriannafederation.in" });
    } catch (e) {
      console.error("[razorpay/verify] confirmation email failed:", e);
    }
  }

  return NextResponse.json({ ok: true });
}
