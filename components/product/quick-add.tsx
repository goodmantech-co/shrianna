"use client";

import * as React from "react";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

export function QuickAdd({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { add } = useCart();
  const [adding, setAdding] = React.useState(false);

  if (!product.inStock) {
    return (
      <button
        disabled
        className={cn(
          "inline-flex items-center justify-center gap-1.5 rounded-full bg-muted px-4 py-2.5 text-xs font-medium text-muted-foreground",
          className
        )}
      >
        Out of stock
      </button>
    );
  }

  const cheapest = product.packSizes.reduce((min, p) =>
    p.price < min.price ? p : min
  );

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        add({
          productSlug: product.slug,
          name: product.name,
          weight: cheapest.weight,
          price: cheapest.price,
          image: product.hero,
        });
        setAdding(true);
        setTimeout(() => setAdding(false), 1400);
      }}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-xs font-medium text-background transition-all hover:bg-foreground/90 active:scale-95",
        className
      )}
    >
      {adding ? (
        <>
          <Check className="h-3.5 w-3.5" /> Added
        </>
      ) : (
        <>
          <Plus className="h-3.5 w-3.5" /> Quick add
        </>
      )}
    </button>
  );
}
