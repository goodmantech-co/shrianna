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
}: {
  product: Product;
  className?: string;
}) {
  const cheapest = product.packSizes.reduce((min, p) =>
    p.price < min.price ? p : min
  );
  const hasMrp = cheapest.mrp && cheapest.mrp > cheapest.price;
  const discount = hasMrp
    ? Math.round(((cheapest.mrp! - cheapest.price) / cheapest.mrp!) * 100)
    : 0;

  return (
    <Link
      href={`/shop/${product.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg",
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
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.tagline}
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              From {cheapest.weight}
            </p>
            <div className="flex items-baseline gap-2">
              <p className="font-serif text-xl">{formatPrice(cheapest.price)}</p>
              {hasMrp && (
                <p className="text-xs text-muted-foreground line-through">
                  {formatPrice(cheapest.mrp!)}
                </p>
              )}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{product.district}</p>
        </div>
      </div>
    </Link>
  );
}
