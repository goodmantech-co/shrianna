import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Leaf,
  Truck,
  ShieldCheck,
  Wallet,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { ProductRail } from "@/components/product/product-rail";
import { CategoryGrid } from "@/components/home/category-grid";
import { HeroProductCard } from "@/components/home/hero-product-card";
import { Reviews } from "@/components/home/reviews";
import { TrustStrip } from "@/components/layout/trust-strip";
import { getBestsellers, getNewArrivals, getProduct } from "@/lib/products";
import { site } from "@/lib/site";

const heroTrust = [
  { icon: Leaf, label: "Gluten-free" },
  { icon: Wallet, label: "DBT-direct to farmers" },
  { icon: ShieldCheck, label: "FSSAI certified" },
  { icon: Truck, label: "COD available" },
];

export default function HomePage() {
  const bestsellers = getBestsellers();
  const newArrivals = getNewArrivals();
  const heroProduct = getProduct("little-millet-rice") ?? bestsellers[0];
  const hamper = getProduct("harvest-gift-hamper");

  return (
    <>
      {/* Hero — shoppable */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-60" />
        <Container size="wide" className="relative">
          <div className="grid gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-20">
            <div>
              <Eyebrow>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Kharif 2025 · Fresh harvest live
              </Eyebrow>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Ancient millets,
                <br />
                <span className="text-primary italic">grown by women.</span>
                <br />
                On your plate today.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Kodo, Kutki and other millets from sixteen districts of Madhya
                Pradesh — milled in Bhopal, traceable to a farmer collective,
                delivered across India.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/shop">
                    Shop the harvest <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/farmers">Meet the farmers</Link>
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-7">
                {heroTrust.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon className="h-4 w-4 text-secondary" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-xl">
                <Image
                  src="https://feminisminindia.com/wp-content/uploads/2022/09/women-farmer-in-field.jpg"
                  alt="Women farmer in a Kodo-Kutki field"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute -right-3 -top-3 hidden rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground shadow-md lg:block">
                  Kharif 2025 · Live
                </div>
              </div>

              {/* Floating shoppable card */}
              <div className="absolute inset-x-4 -bottom-6 lg:-left-6 lg:right-auto lg:w-80">
                <HeroProductCard product={heroProduct} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Shop by category */}
      <Section className="pt-16 sm:pt-20">
        <Container size="wide">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Shop by category</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                Find your millet.
              </h2>
            </div>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link href="/shop">
                All products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <CategoryGrid />
        </Container>
      </Section>

      {/* Bestsellers rail */}
      <Section className="bg-muted/40 py-16 sm:py-20">
        <Container size="wide">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>
                <Star className="h-3.5 w-3.5" fill="currentColor" />
                Most-loved
              </Eyebrow>
              <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                Our bestselling millets.
              </h2>
            </div>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link href="/shop">
                Shop all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ProductRail products={bestsellers} />
        </Container>
      </Section>

      {/* Offer / merch banner */}
      {hamper && (
        <Section className="py-16 sm:py-20">
          <Container size="wide">
            <div className="relative overflow-hidden rounded-3xl bg-secondary text-secondary-foreground">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div className="p-8 sm:p-12 lg:p-16">
                  <Eyebrow className="text-accent">Festive & corporate gifting</Eyebrow>
                  <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                    The Harvest Gift Hamper
                  </h2>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-secondary-foreground/80">
                    Five millets in a handwoven sabai-grass basket, with a card
                    naming the farmer collective behind your grains. Gifting that
                    gives back.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button asChild size="lg" variant="accent">
                      <Link href={`/shop/${hamper.slug}`}>Shop the hamper</Link>
                    </Button>
                    <p className="text-sm text-secondary-foreground/70">
                      From ₹1,850 · ships pan-India
                    </p>
                  </div>
                </div>
                <div className="relative min-h-64 lg:min-h-full">
                  <Image
                    src={hamper.hero}
                    alt={hamper.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* New this harvest rail */}
      <Section className="bg-muted/40 py-16 sm:py-20">
        <Container size="wide">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>New this harvest</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                Fresh off the mill.
              </h2>
            </div>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link href="/shop">
                Shop new <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ProductRail products={newArrivals} />
        </Container>
      </Section>

      {/* Why buy */}
      <TrustStrip />

      {/* Condensed story band */}
      <Section className="py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="https://usingdiversity.keystone-foundation.org/wp-content/uploads/2020/09/IMG-20200324-WA0012-1024x768.jpg"
                  alt="Baiga women training"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="https://feminisminindia.com/wp-content/uploads/2022/09/Processing-plant-of-federation.jpg"
                  alt="Federation processing plant"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <Eyebrow>A federation, not a brand</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl text-balance">
                Owned by the women who grow the grain.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Incorporated under the Rani Durgavati Shrianna Protsahan Yojana,
                Shrianna is governed by farmer-members from Mandla, Dindori,
                Shahdol and beyond. Every kilo you buy pays them directly via DBT.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {site.impact.slice(0, 3).map((item) => (
                  <div key={item.label}>
                    <p className="font-serif text-3xl text-primary">
                      {item.stat}
                      <span className="text-base text-muted-foreground">
                        {item.suffix}
                      </span>
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <Button asChild variant="link" className="mt-6 px-0">
                <Link href="/farmers">
                  Read the federation story <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reviews / social proof */}
      <Section className="bg-muted/40 py-16 sm:py-20">
        <Container size="wide">
          <div className="mb-10 text-center">
            <Eyebrow className="justify-center">Loved across India</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              10,000+ kilos delivered. 4.8★ average.
            </h2>
          </div>
          <Reviews />
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section className="py-16 sm:py-20">
        <Container size="wide">
          <div className="rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:px-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl text-balance">
                  Eat ancient. Pay the people who feed you.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
                  Every kilo bought through Shrianna goes back to the women whose
                  families have farmed millets for generations.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" variant="accent">
                  <Link href="/shop">Shop millets</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/impact">See our impact</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
