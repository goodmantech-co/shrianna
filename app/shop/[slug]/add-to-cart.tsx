"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice, cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

export function AddToCart({ product }: { product: Product }) {
  const [selected, setSelected] = React.useState(0);
  const [qty, setQty] = React.useState(1);
  const { add } = useCart();
  const pack = product.packSizes[selected];
  const hasMrp = pack.mrp && pack.mrp > pack.price;
  const discount = hasMrp
    ? Math.round(((pack.mrp! - pack.price) / pack.mrp!) * 100)
    : 0;

  return (
    <div className="mt-8 space-y-5 rounded-xl border border-border bg-muted/40 p-5">
      <div>
        <p className="mb-3 type-eyebrow text-foreground/70">
          Pack size
        </p>
        <div className="flex flex-wrap gap-2">
          {product.packSizes.map((p, i) => (
            <button
              key={p.weight}
              onClick={() => setSelected(i)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all",
                selected === i
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-foreground/40"
              )}
            >
              {p.weight} · {formatPrice(p.price)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Price
          </p>
          <div className="flex items-baseline gap-3">
            <p className="type-h3">{formatPrice(pack.price * qty)}</p>
            {hasMrp && (
              <>
                <p className="text-sm text-muted-foreground line-through">
                  {formatPrice(pack.mrp! * qty)}
                </p>
                <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive">
                  {discount}% off
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border bg-card">
            <button
              type="button"
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="flex h-11 w-11 items-center justify-center"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-[2.5rem] text-center font-medium">{qty}</span>
            <button
              type="button"
              onClick={() => setQty(qty + 1)}
              className="flex h-11 w-11 items-center justify-center"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <Button
            size="lg"
            disabled={!product.inStock}
            onClick={() => {
              for (let i = 0; i < qty; i++) {
                add({
                  productSlug: product.slug,
                  name: product.name,
                  weight: pack.weight,
                  price: pack.price,
                  image: product.hero,
                });
              }
            }}
          >
            {product.inStock ? (
              <>
                <Plus className="h-4 w-4" /> Add to basket
              </>
            ) : (
              "Out of stock"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
