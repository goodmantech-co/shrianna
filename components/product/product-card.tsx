import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { QuickAdd } from "./quick-add";
import { formatPrice, cn } from "@/lib/utils";
import type { Product, ProductBadge } from "@/lib/products";

const badgeLabel: Record<ProductBadge, string> = {
  bestseller: "Bestseller",
  new: "New",
  limited: "Limited",
  sale: "Sale",
};

const badgeStyle: Record<ProductBadge, string> = {
  bestseller: "bg-foreground text-background",
  new: "bg-secondary text-secondary-foreground",
  limited: "bg-accent text-accent-foreground",
  sale: "bg-destructive text-destructive-foreground",
};

export function ProductCard({
  product,
  className,
  view = "grid",
}: {
  product: Product;
  className?: string;
  view?: "grid" | "list";
}) {
  const cheapest = product.packSizes.reduce((min, p) =>
    p.price < min.price ? p : min
  );
  const hasMrp = cheapest.mrp && cheapest.mrp > cheapest.price;
  const discount = hasMrp
    ? Math.round(((cheapest.mrp! - cheapest.price) / cheapest.mrp!) * 100)
    : 0;

  const Price = (
    <div className="flex items-baseline gap-2">
      <p className="text-lg font-semibold tracking-tight tabular-nums text-foreground">
        {formatPrice(cheapest.price)}
      </p>
      {hasMrp && (
        <p className="text-sm tabular-nums text-muted-foreground line-through">
          {formatPrice(cheapest.mrp!)}
        </p>
      )}
      {hasMrp && (
        <span className="text-xs font-semibold text-destructive">
          {discount}% off
        </span>
      )}
    </div>
  );

  const PackSizes = (
    <div className="flex flex-wrap gap-1.5">
      {product.packSizes.map((s) => (
        <span
          key={s.weight}
          className="rounded-md border border-border bg-muted/40 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
        >
          {s.weight}
        </span>
      ))}
    </div>
  );

  // --- List view -----------------------------------------------------------
  if (view === "list") {
    return (
      <Link
        href={`/shop/${product.slug}`}
        className={cn(
          "group flex gap-4 overflow-hidden rounded-xl border border-border bg-card p-3 transition-all hover:shadow-md sm:gap-5 sm:p-4",
          className
        )}
      >
        <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-lg bg-muted sm:w-40">
          <Image
            src={product.hero}
            alt={product.name}
            fill
            sizes="160px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.badges?.[0] && (
            <span
              className={cn(
                "absolute left-2 top-2 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider shadow-sm",
                badgeStyle[product.badges[0]]
              )}
            >
              {badgeLabel[product.badges[0]]}
            </span>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="muted" className="text-[10px]">
              {product.millet}
            </Badge>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
          <h3 className="mt-2 font-serif text-lg leading-tight">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {product.tagline}
          </p>
          <div className="mt-2 hidden sm:block">{PackSizes}</div>
          <div className="mt-auto flex items-end justify-between gap-3 pt-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                From {cheapest.weight} · {product.district}
              </p>
              <div className="mt-0.5">{Price}</div>
            </div>
            <QuickAdd product={product} />
          </div>
        </div>
      </Link>
    );
  }

  // --- Grid view -----------------------------------------------------------
  return (
    <Link
      href={`/shop/${product.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg",
        !product.inStock && "opacity-70",
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={product.hero}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {product.badges?.map((b) => (
            <span
              key={b}
              className={cn(
                "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm",
                badgeStyle[b]
              )}
            >
              {badgeLabel[b]}
            </span>
          ))}
        </div>

        {hasMrp && (
          <div className="absolute right-3 top-3 rounded-full bg-destructive px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-destructive-foreground shadow-sm">
            {discount}% off
          </div>
        )}

        <div className="absolute inset-x-3 bottom-3 flex justify-end opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
          <QuickAdd product={product} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="muted" className="text-[10px]">
            {product.millet}
          </Badge>
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>

        <h3 className="mt-3 font-serif text-lg leading-tight">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {product.tagline}
        </p>

        <div className="mt-3">{PackSizes}</div>

        <div className="mt-4 flex items-end justify-between border-t border-border/60 pt-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              From {cheapest.weight}
            </p>
            <div className="mt-0.5">{Price}</div>
          </div>
          <p className="text-xs text-muted-foreground">{product.district}</p>
        </div>
      </div>
    </Link>
  );
}
