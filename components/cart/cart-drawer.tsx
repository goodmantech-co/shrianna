"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, useCartTotal } from "./cart-provider";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, close, remove, setQty } = useCart();
  const total = useCartTotal();
  const router = useRouter();

  const goToCheckout = () => {
    close();
    router.push("/checkout");
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-card shadow-2xl transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl">Your basket</h2>
          </div>
          <button
            onClick={close}
            className="rounded-full p-2 hover:bg-foreground/5"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-4 h-12 w-12 text-muted-foreground/40" />
              <p className="text-muted-foreground">Your basket is empty.</p>
              <Button asChild variant="link" onClick={close} className="mt-2">
                <Link href="/shop">Browse millets →</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={`${item.productSlug}-${item.weight}`}
                  className="flex gap-4"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-medium leading-tight">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {item.weight}
                        </p>
                      </div>
                      <button
                        onClick={() => remove(item.productSlug, item.weight)}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          onClick={() =>
                            setQty(item.productSlug, item.weight, item.quantity - 1)
                          }
                          className="flex h-9 w-9 items-center justify-center"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            setQty(item.productSlug, item.weight, item.quantity + 1)
                          }
                          className="flex h-9 w-9 items-center justify-center"
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-border px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-serif text-2xl">{formatPrice(total)}</span>
            </div>
            <Button size="lg" className="w-full" onClick={goToCheckout}>
              Checkout
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Secure payments by Razorpay.
            </p>
          </footer>
        )}
      </aside>
    </>
  );
}
