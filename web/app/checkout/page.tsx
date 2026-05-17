"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { useCart, useCartTotal } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const total = useCartTotal();
  const [placed, setPlaced] = React.useState(false);

  if (placed) {
    return (
      <Section>
        <Container size="narrow">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-secondary" />
            <h1 className="mt-6 font-serif text-4xl tracking-tight">
              Thank you, that&rsquo;s a wrap.
            </h1>
            <p className="mt-4 text-muted-foreground">
              This is a showcase site — no real order has been placed and no
              payment was taken. On the live store, you&rsquo;d see a real
              order confirmation here and an email on its way.
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
          {/* Form (mock) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPlaced(true);
              clear();
            }}
            className="space-y-8 rounded-2xl border border-border bg-card p-8"
          >
            <div>
              <h2 className="mb-4 font-serif text-2xl">Delivery details</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required />
                <Field label="Phone" required type="tel" />
                <Field label="Email" type="email" className="sm:col-span-2" />
                <Field
                  label="Address"
                  required
                  className="sm:col-span-2"
                />
                <Field label="City" required />
                <Field label="Pincode" required />
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl">Payment</h2>
              <div className="rounded-lg border border-dashed border-border bg-muted/40 p-6 text-center">
                <Lock className="mx-auto mb-2 h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Payment is disabled on this showcase site.
                  <br /> Click below to simulate a successful order.
                </p>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={items.length === 0}
            >
              {items.length === 0 ? "Basket is empty" : "Place mock order"}
            </Button>
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
