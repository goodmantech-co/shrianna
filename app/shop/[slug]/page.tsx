import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MapPin } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { ProductCard } from "@/components/product/product-card";
import { products, getProduct } from "@/lib/products";
import { AddToCart } from "./add-to-cart";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Section className="pb-0 pt-8 sm:pt-12">
        <Container size="wide">
          <Link
            href="/shop"
            className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" /> Back to shop
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={product.hero}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              {product.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.gallery.slice(0, 3).map((src, i) => (
                    <div
                      key={i}
                      className="relative aspect-square overflow-hidden rounded-md bg-muted"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <Eyebrow>{product.millet}</Eyebrow>
              <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                {product.tagline}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <StarRating
                  rating={product.rating}
                  reviews={product.reviews}
                  size="md"
                />
                {product.dietary.map((d) => (
                  <Badge key={d} variant="outline" className="text-xs">
                    {d}
                  </Badge>
                ))}
              </div>

              <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Sourced from {product.origin}
              </p>

              <AddToCart product={product} />

              <div className="mt-10 border-t border-border pt-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">
                  About this grain
                </h2>
                <p className="leading-relaxed text-foreground/80">
                  {product.description}
                </p>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">
                  Why this millet
                </h2>
                <ul className="space-y-2.5">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.nutrition.length > 0 && (
                <div className="mt-8 border-t border-border pt-8">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">
                    Nutrition · per 100g
                  </h2>
                  <dl className="grid grid-cols-3 gap-y-4 gap-x-6">
                    {product.nutrition.map((n) => (
                      <div key={n.label}>
                        <dt className="text-xs text-muted-foreground">{n.label}</dt>
                        <dd className="font-serif text-lg">{n.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {product.recipes.length > 0 && (
                <div className="mt-8 border-t border-border pt-8">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">
                    Goes well with
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.recipes.map((r) => (
                      <Badge key={r} variant="outline">
                        {r}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container size="wide">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              You might also like
            </h2>
            <Link
              href="/shop"
              className="text-sm text-primary hover:underline"
            >
              See all millets →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
