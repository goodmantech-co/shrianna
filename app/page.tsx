import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { getFeatured } from "@/lib/products";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-60" />
        <Container size="wide" className="relative">
          <div className="grid gap-10 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <Eyebrow>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Rani Durgavati Shri Anna Protsahan Yojana
              </Eyebrow>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Ancient millets.
                <br />
                <span className="text-primary italic">Grown by women.</span>
                <br />
                From the heart of MP.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Shrianna Federation is a consortium of tribal farmer-producer
                organisations reviving Kodo, Kutki and Ragi across eleven
                districts of Madhya Pradesh — and getting them onto your plate.
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

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
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
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-xl border border-border bg-card p-5 shadow-lg lg:block">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  This harvest
                </p>
                <p className="mt-2 font-serif text-2xl leading-tight">
                  Kodo from Mandla, hand-cleaned and milled in Bhopal.
                </p>
              </div>
              <div className="absolute -right-4 -top-4 hidden rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground shadow-md lg:block">
                Kharif 2025 · Live
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured products */}
      <Section className="bg-background">
        <Container size="wide">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>From the shop</Eyebrow>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">
                Six millets. Every grain traceable to a farmer.
              </h2>
            </div>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link href="/shop">
                View all millets <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section className="bg-muted/50">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://feminisminindia.com/wp-content/uploads/2022/09/Kodo-Kutki-field-2048x1152.jpg"
                alt="Kodo-Kutki field"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl text-balance">
                Procured fairly. Milled honestly. Paid directly.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We procure millets from tribal smallholders at ₹3,500/quintal
                for Kutki and ₹2,500/quintal for Kodo — with a further
                ₹1,000/quintal incentive paid directly to farmers' bank
                accounts via DBT.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    icon: Sprout,
                    title: "Rain-fed harvest",
                    body: "Kharif crops, sun-dried on the field.",
                  },
                  {
                    icon: Leaf,
                    title: "Federation milled",
                    body: "Cleaned and de-husked in Bhopal.",
                  },
                  {
                    icon: Users,
                    title: "Farmer-owned",
                    body: "Five women + one man on the board.",
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title}>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Story strip */}
      <Section className="bg-secondary text-secondary-foreground">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <Eyebrow className="text-accent">A federation, not a brand</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Shrianna is owned by the women who grow the grain.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary-foreground/80">
                Incorporated under the Rani Durgavati Shri Anna Protsahan
                Yojana, our federation is governed by farmer-members from
                Mandla, Dindori, Shahdol, Anuppur, Umaria and Chhindwara —
                tribal districts where Kodo and Kutki have sustained
                communities for centuries.
              </p>
              <Button
                asChild
                size="lg"
                variant="accent"
                className="mt-8"
              >
                <Link href="/farmers">
                  Read the federation story <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
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
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section className="bg-background">
        <Container size="wide">
          <div className="rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:px-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl text-balance">
                  Eat ancient. Pay the people who feed you.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
                  Every kilo bought through Shrianna goes back to the women
                  whose families have farmed millets for generations.
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
