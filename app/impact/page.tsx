import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { site } from "@/lib/site";

const reports = [
  { title: "Annual Report", period: "FY 2025–26" },
  { title: "Procurement Progress Update", period: "FY 2025–26" },
  {
    title: "Member FPO Directory",
    period: "Updated 2026",
    href: "/farmers#fpos",
    cta: "View the directory",
  },
  { title: "Audited Financial Statements", period: "FY 2024–25" },
];

export const metadata = {
  title: "Impact",
  description:
    "The measurable impact of Shrianna Federation — ~28,300 quintals of Kodo and Kutki procured across Madhya Pradesh and ₹7.28 Cr paid directly to farmers via DBT in FY 2025–26.",
  alternates: { canonical: "/impact" },
};

const milestones = [
  {
    year: "2024",
    title: "Federation incorporated",
    body: "Shrianna Protsahan Consortium registered on 9 March under the MP Companies Act, with smallholder farmers nominated from member FPOs on the founding board.",
  },
  {
    year: "2024",
    title: "₹80 cr fund secured",
    body: "State Price Stabilization Fund approves an interest-free loan to underwrite procurement.",
  },
  {
    year: "2025",
    title: "First procurement under the scheme",
    body: "Procurement begins across Mandla, Dindori and neighbouring districts through FPO networks, with all payments routed via DBT.",
  },
  {
    year: "2026",
    title: "2025–26 procurement",
    body: "~28,300 quintals of Kodo & Kutki procured across 16 districts via the E-Uparjan Portal; ₹7.28 Cr transferred directly to farmers through the JIT/DBT mechanism.",
  },
  {
    year: "2026",
    title: "Narmada Millets brand launched",
    body: "10 value-added Kodo & Kutki products developed — cookies, rice, poha and ready-to-cook mixes — launched under the federation's Narmada Millets brand.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <Section variant="hero">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Eyebrow>Impact</Eyebrow>
              <h1 className="mt-4 type-h1">
                Numbers that turn into harvests.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Every figure on this page traces back to a farmer&apos;s bank
                account, a quintal weighed at a procurement centre, or a grain
                polished at the Bhopal mill.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/photos/procurement-centre.jpg"
                alt="Kodo and Kutki bags at a procurement centre under the scheme"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="flush">
        <Container size="wide">
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

      <Section className="bg-muted/40">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Timeline</Eyebrow>
              <h2 className="mt-3 type-h2">
                How we got here.
              </h2>
              <p className="mt-5 text-muted-foreground">
                A federation built in eighteen months — and still finding its
                shape with every passing harvest.
              </p>
            </div>

            <ol className="space-y-10">
              {milestones.map((m, i) => (
                <li key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background font-serif text-sm text-primary">
                      {m.year}
                    </div>
                    {i !== milestones.length - 1 && (
                      <div className="mt-2 h-full w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="type-h4 tracking-tight">
                      {m.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {m.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <div className="overflow-hidden rounded-2xl bg-secondary">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px]">
                <Image
                  src="/photos/harvest-carry.jpg"
                  alt="Winnowing the millet harvest before aggregation"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-8 py-14 text-secondary-foreground sm:px-12 lg:px-14">
                <Eyebrow className="text-accent">Looking ahead</Eyebrow>
                <h2 className="mt-4 type-h2">
                  Next: 40,000 MT across about 20 districts.
                </h2>
                <p className="mt-5 text-secondary-foreground/80">
                  In FY 2026–27 the federation aims to procure around 40,000 MT
                  of millets across roughly 20 districts, directly benefiting an
                  estimated 50,000 farmers — with about 60% processed into rice
                  and 500 MT of value-added Narmada Millets products, supported
                  by ICAR-CIAE and ICAR-IIMR.
                </p>
                <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm text-secondary-foreground/80 sm:grid-cols-2">
                  {[
                    "Sustainable markets for millet products",
                    "Higher incomes and better livelihoods for millet farmers",
                    "Stronger, economically viable FPOs",
                    "Growth in millet processing and value addition",
                    "Nutrition security and climate-resilient agriculture",
                    "MP as India's leading millet state",
                  ].map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-0.5 text-accent">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="reports" className="scroll-mt-24 pt-0">
        <Container size="wide">
          <Eyebrow>Reports & downloads</Eyebrow>
          <h2 className="mt-3 max-w-2xl type-h2">
            Built on transparency.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            As a farmer-owned, scheme-backed federation, our records are open.
            Reports are available on request while we move them online.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reports.map((r) => (
              <Link
                key={r.title}
                href={r.href ?? "/contact"}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="mt-5 type-h6">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.period}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {r.cta ?? "Request a copy"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
