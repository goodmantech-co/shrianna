import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice, cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const startingPrice = Math.min(...product.packSizes.map((p) => p.price));
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
        <div className="absolute left-4 top-4">
          <Badge variant="muted" className="bg-background/90 backdrop-blur">
            {product.millet}
          </Badge>
        </div>
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg leading-tight">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              From
            </p>
            <p className="font-serif text-xl">{formatPrice(startingPrice)}</p>
          </div>
          <p className="text-xs text-muted-foreground">{product.district}</p>
        </div>
      </div>
    </Link>
  );
}
