import { NextResponse } from "next/server";
import {
  computeOrder,
  itemsSummary,
  validateCustomer,
  type CartLineInput,
  type Customer,
} from "@/lib/order";
import { createRazorpayOrder, razorpayConfigured, razorpayKeyId } from "@/lib/razorpay";

export async function POST(req: Request) {
  if (!razorpayConfigured()) {
    return NextResponse.json(
      { error: "Payments are not configured on the server yet." },
      { status: 503 }
    );
  }

  let body: { items?: CartLineInput[]; customer?: Customer };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const customerError = validateCustomer(body.customer ?? {});
  if (customerError) {
    return NextResponse.json({ error: customerError }, { status: 400 });
  }
  const customer = body.customer as Customer;

  const order = computeOrder(body.items ?? []);
  if (order.lines.length === 0) {
    return NextResponse.json(
      { error: "Your basket is empty or those items are unavailable." },
      { status: 400 }
    );
  }

  // Notes ride along with the Razorpay order so the webhook backstop can
  // reconstruct the order even if the customer's browser drops after paying.
  // Each note value must stay under 256 chars.
  const notes: Record<string, string> = {
    name: customer.name.slice(0, 255),
    phone: customer.phone.slice(0, 255),
    email: (customer.email ?? "").slice(0, 255),
    address: `${customer.address}, ${customer.city} ${customer.pincode}`.slice(0, 255),
    items: itemsSummary(order.lines).slice(0, 255),
    item_count: String(order.itemCount),
    amount_inr: String(order.amount),
  };

  try {
    const rzpOrder = await createRazorpayOrder({
      amountPaise: order.amountPaise,
      receipt: `rcpt_${Date.now()}`,
      notes,
    });

    return NextResponse.json({
      orderId: rzpOrder.id,
      amount: rzpOrder.amount,
      currency: rzpOrder.currency,
      keyId: razorpayKeyId,
      itemCount: order.itemCount,
      amountInr: order.amount,
      skipped: order.unresolved,
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 502 });
  }
}
