"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { useCart, useCartTotal } from "@/components/cart/cart-provider";
import type { Customer } from "@/lib/order";
import { formatPrice } from "@/lib/utils";

// Minimal typing for the Razorpay Checkout widget loaded from their CDN.
interface RazorpayHandlerResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
interface RazorpayInstance {
  open: () => void;
  on: (event: string, cb: (resp: unknown) => void) => void;
}
declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => RazorpayInstance;
  }
}

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

const emptyCustomer: Customer = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
};

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const total = useCartTotal();
  const [customer, setCustomer] = React.useState<Customer>(emptyCustomer);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [placed, setPlaced] = React.useState(false);

  const set = (field: keyof Customer) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setCustomer((c) => ({ ...c, [field]: e.target.value }));

  const cartPayload = () =>
    items.map((i) => ({
      productSlug: i.productSlug,
      weight: i.weight,
      quantity: i.quantity,
    }));

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const sdkReady = await loadRazorpay();
      if (!sdkReady) {
        throw new Error("Couldn't load the payment window. Check your connection and retry.");
      }

      const orderRes = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer, items: cartPayload() }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        throw new Error(orderData.error || "Could not start checkout. Please try again.");
      }

      const rzp = new window.Razorpay!({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Narmada Millets",
        description: `${orderData.itemCount} item(s) · Shrianna Federation`,
        order_id: orderData.orderId,
        prefill: {
          name: customer.name,
          email: customer.email,
          contact: customer.phone,
        },
        notes: { address: `${customer.address}, ${customer.city} ${customer.pincode}` },
        theme: { color: "#4d7c0f" },
        handler: async (resp: RazorpayHandlerResponse) => {
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...resp, customer, items: cartPayload() }),
            });
            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
              throw new Error(verifyData.error || "We couldn't confirm your payment.");
            }
            clear();
            setPlaced(true);
          } catch (err) {
            setError((err as Error).message);
          } finally {
            setSubmitting(false);
          }
        },
        modal: { ondismiss: () => setSubmitting(false) },
      });

      rzp.on("payment.failed", () => {
        setError("Payment failed or was declined. No money was taken — please try again.");
        setSubmitting(false);
      });

      rzp.open();
    } catch (err) {
      setError((err as Error).message);
      setSubmitting(false);
    }
  };

  if (placed) {
    return (
      <Section>
        <Container size="narrow">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-secondary" />
            <h1 className="mt-6 font-serif text-4xl tracking-tight">
              Payment received — thank you!
            </h1>
            <p className="mt-4 text-muted-foreground">
              Your order is confirmed and our team has been notified. We&rsquo;ll
              pack your millets and reach out on the phone number you provided to
              arrange delivery.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild>
                <Link href="/shop">Continue browsing</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container size="wide">
        <Eyebrow>Checkout</Eyebrow>
        <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
          Almost there.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <form
            onSubmit={handlePay}
            className="space-y-8 rounded-2xl border border-border bg-card p-8"
          >
            <div>
              <h2 className="mb-4 font-serif text-2xl">Delivery details</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full name"
                  required
                  value={customer.name}
                  onChange={set("name")}
                  autoComplete="name"
                />
                <Field
                  label="Phone"
                  required
                  type="tel"
                  value={customer.phone}
                  onChange={set("phone")}
                  autoComplete="tel"
                />
                <Field
                  label="Email"
                  type="email"
                  className="sm:col-span-2"
                  value={customer.email}
                  onChange={set("email")}
                  autoComplete="email"
                />
                <Field
                  label="Address"
                  required
                  className="sm:col-span-2"
                  value={customer.address}
                  onChange={set("address")}
                  autoComplete="street-address"
                />
                <Field
                  label="City"
                  required
                  value={customer.city}
                  onChange={set("city")}
                  autoComplete="address-level2"
                />
                <Field
                  label="Pincode"
                  required
                  inputMode="numeric"
                  value={customer.pincode}
                  onChange={set("pincode")}
                  autoComplete="postal-code"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl">Payment</h2>
              <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-6">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  You&rsquo;ll pay securely through Razorpay — UPI, cards, net
                  banking and wallets are all supported. Your card details never
                  touch our servers.
                </p>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={items.length === 0 || submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Opening secure payment…
                </>
              ) : items.length === 0 ? (
                "Basket is empty"
              ) : (
                `Pay ${formatPrice(total)}`
              )}
            </Button>
            {error && (
              <p className="text-center text-sm text-destructive">{error}</p>
            )}
          </form>

          {/* Summary */}
          <aside className="space-y-5 rounded-2xl border border-border bg-muted/40 p-8">
            <h2 className="font-serif text-2xl">Order summary</h2>
            {items.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Your basket is empty.{" "}
                <Link href="/shop" className="text-primary hover:underline">
                  Pick something up
                </Link>
                .
              </p>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={`${item.productSlug}-${item.weight}`}
                    className="flex gap-3"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between text-sm">
                      <p className="font-medium leading-tight">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.weight} × {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            <div className="space-y-2 border-t border-border pt-5 text-sm">
              <Row label="Subtotal" value={formatPrice(total)} />
              <Row label="Shipping" value="Free" />
            </div>
            <div className="flex items-baseline justify-between border-t border-border pt-5">
              <span className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                Total
              </span>
              <span className="font-serif text-3xl">{formatPrice(total)}</span>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={`block text-sm ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <input
        {...rest}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
