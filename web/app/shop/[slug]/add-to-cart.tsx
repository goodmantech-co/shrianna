"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice, cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

export function AddToCart({ product }: { product: Product }) {
  const [selected, setSelected] = React.useState(0);
  const { add } = useCart();
  const pack = product.packSizes[selected];

  return (
    <div className="mt-8 space-y-5 rounded-xl border border-border bg-muted/40 p-5">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
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

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Price
          </p>
          <p className="font-serif text-3xl">{formatPrice(pack.price)}</p>
        </div>
        <Button
          size="lg"
          onClick={() =>
            add({
              productSlug: product.slug,
              name: product.name,
              weight: pack.weight,
              price: pack.price,
              image: product.hero,
            })
          }
        >
          <Plus className="h-4 w-4" /> Add to basket
        </Button>
      </div>
    </div>
  );
}
