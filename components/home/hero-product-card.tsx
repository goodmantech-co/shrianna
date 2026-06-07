"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { StarRating } from "@/components/ui/star-rating";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/utils";
import { startingPrice, type Product } from "@/lib/products";

export function HeroProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = React.useState(false);
  const cheapest = product.packSizes.reduce((m, p) =>
    p.price < m.price ? p : m
  );

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur">
      <Link
        href={`/shop/${product.slug}`}
        className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-muted"
      >
        <Image
          src={product.hero}
          alt={product.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Bestseller
        </p>
        <Link
          href={`/shop/${product.slug}`}
          className="block truncate font-serif text-sm leading-tight hover:text-primary"
        >
          {product.name}
        </Link>
        <div className="mt-0.5 flex items-center gap-2">
          <StarRating rating={product.rating} showCount={false} />
          <span className="text-sm font-semibold tabular-nums">
            {formatPrice(startingPrice(product))}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          add({
            productSlug: product.slug,
            name: product.name,
            weight: cheapest.weight,
            price: cheapest.price,
            image: product.hero,
          });
          setAdded(true);
          setTimeout(() => setAdded(false), 1400);
        }}
        aria-label={`Add ${product.name} to cart`}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
      >
        {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      </button>
    </div>
  );
}
