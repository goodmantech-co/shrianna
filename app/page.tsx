import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { OurWork } from "@/components/home/our-work";
import { Coverage } from "@/components/home/coverage";
import { site } from "@/lib/site";
import { news } from "@/lib/news";

export default function HomePage() {
  const recent = news.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-60" />
        <Container size="wide" className="relative">
          <div className="grid gap-10 py-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <Eyebrow>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Farmer-owned millet federation · Madhya Pradesh
              </Eyebrow>
              <h1 className="mt-6 type-display text-balance">
                Reviving the ancient millets of central India.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Shrianna Federation unites 25+ farmer producer organisations
                across Madhya Pradesh to procure Kodo, Kutki and other millets at
                fair prices, process them in Bhopal, and pay farmers directly via
                DBT — under the Rani Durgavati Shrianna Protsahan Yojana.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/about">
                    Our story <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/farmers">Meet the farmers</Link>
                </Button>
              </div>
            </div>

            <HeroCarousel />
          </div>
        </Container>
      </section>

      {/* Overview band */}
      <div className="border-y border-border bg-card">
        <Container size="wide" className="py-6">
          <div className="grid gap-6 text-sm sm:grid-cols-3">
            <div>
              <p className="font-semibold">Incorporated 9 March 2024</p>
              <p className="text-muted-foreground">Under the MP Companies Act</p>
            </div>
            <div>
              <p className="font-semibold">CIN · {site.cin}</p>
              <p className="text-muted-foreground">{site.legalName}</p>
            </div>
            <div>
              <p className="font-semibold">{site.scheme.name}</p>
              <p className="text-muted-foreground">
                Government of Madhya Pradesh
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Vision & Mission */}
      <Section className="py-16 sm:py-20">
        <Container size="wide">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <Eyebrow>Our vision</Eyebrow>
            <p className="mt-5 max-w-4xl type-h5 leading-relaxed">
              {site.vision}
            </p>
          </div>
          <div className="mt-6">
            <Eyebrow>Our mission</Eyebrow>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {site.missionPillars.map((p, i) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <p className="font-serif text-2xl text-primary/60">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 type-h6">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Affiliations */}
      <Section className="py-10 sm:py-12 lg:py-12">
        <Container size="wide">
          <div className="rounded-2xl border border-border bg-card px-8 py-9">
            <p className="text-center type-eyebrow text-muted-foreground">
              Backed by
            </p>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {site.affiliations.map((a) =>
                a.logo ? (
                  <li key={a.name} className="flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.logo}
                      alt={a.name}
                      title={a.name}
                      className="h-14 w-auto max-w-[180px] object-contain"
                    />
                  </li>
                ) : (
                  <li
                    key={a.name}
                    className="max-w-[13rem] text-center text-sm font-medium leading-tight text-foreground/70"
                  >
                    {a.name}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Impact stats */}
      <Section className="bg-muted/40 py-16 sm:py-20">
        <Container size="wide">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>By the numbers</Eyebrow>
            <h2 className="mt-3 type-h3">
              Impact you can trace to a bank account.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.impact.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <p className="font-serif text-5xl leading-none text-primary">
                  {s.stat}
                  <span className="ml-1 text-xl text-muted-foreground">
                    {s.suffix}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our work */}
      <Section className="py-16 sm:py-20">
        <Container size="wide">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-3 type-h3">
              One umbrella, from seed to shelf.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The federation handles every link in the millet chain so that
              smallholder farmers don&apos;t have to face the market alone.
            </p>
          </div>
          <OurWork />
        </Container>
      </Section>

      {/* Coverage */}
      <Section className="bg-muted/40 py-16 sm:py-20">
        <Container size="wide">
          <Coverage />
        </Container>
      </Section>

      {/* Recent activities */}
      <Section className="py-16 sm:py-20">
        <Container size="wide">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Recent activities</Eyebrow>
              <h2 className="mt-3 type-h3">
                What&apos;s happening at Shrianna.
              </h2>
            </div>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link href="/news">
                All news <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {recent.map((n) => (
              <article
                key={n.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={n.cardImage ?? n.image}
                    alt={n.title}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Badge variant="muted">{n.type}</Badge>
                    <span>{n.date}</span>
                  </div>
                  <h3 className="mt-3 type-h6">
                    {n.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          <Button asChild variant="link" className="mt-6 px-0 sm:hidden">
            <Link href="/news">
              All news <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Container>
      </Section>

      {/* Shop CTA band */}
      <Section className="pb-16 pt-0 sm:pb-20">
        <Container size="wide">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:px-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <Eyebrow className="text-accent">Narmada Millets</Eyebrow>
                <h2 className="mt-4 type-h2 text-balance">
                  Taste the harvest. Pay the people who grow it.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
                  Kodo rice, instant mixes and millet cookies — milled and baked
                  in Bhopal, delivered across India. Every order sends income
                  straight back to the farmers behind the federation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" variant="accent">
                  <Link href="/shop">
                    Shop Narmada Millets <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
