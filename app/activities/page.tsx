import Image from "next/image";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Activities",
  description:
    "What Shrianna Federation does — procurement at fair prices, milling and processing in Bhopal, direct DBT payments, capacity building, the Narmada Millets brand and market linkage for smallholder millet farmers across Madhya Pradesh.",
  alternates: { canonical: "/activities" },
};

const activities = [
  {
    eyebrow: "01 · Procurement",
    title: "Buying millets directly, at fair prices.",
    body: "We procure Kodo, Kutki and other millets straight from member FPOs at the minimum support price plus a ₹1,000 per quintal incentive — cutting out the traders who once set the terms. Aggregation happens at the block level through the E-Uparjan portal, so every quintal is weighed and recorded transparently.",
    image: "/photos/procurement-centre.jpg",
  },
  {
    eyebrow: "02 · Processing",
    title: "Milling and grading under one roof.",
    body: "At the federation's own unit at Beej Bhawan, Bhopal, millets are cleaned, de-husked, graded and packed — with capacity for 8 MT a day. Owning the mill keeps margins inside the federation and lets us hold a consistent quality bar from grain to packet.",
    image: "/photos/winnowing.jpg",
  },
  {
    eyebrow: "03 · Direct payments",
    title: "Every rupee, straight to a bank account.",
    body: "Payments to farmers are routed through the JIT/DBT mechanism — no cash, no intermediaries, no delays. In FY 2025–26 the federation transferred ₹7.28 crore directly to farmers this way.",
    image: "/photos/onboarding-1.jpg",
  },
  {
    eyebrow: "04 · Capacity building",
    title: "Strengthening the collectives we rely on.",
    body: "We train member producer organisations on quality standards, aggregation, record-keeping and good agricultural practice — so the FPOs grow stronger and more self-reliant with every harvest, supported by ICAR-CIAE and ICAR-IIMR.",
    image: "/photos/awareness-rath.jpg",
  },
  {
    eyebrow: "05 · Narmada Millets",
    title: "Turning raw grain into products people buy.",
    body: "Under the Narmada Millets brand, the federation has developed value-added Kodo and Kutki products — rice, instant mixes, poha and cookies — that bring fair-trade millets onto kitchen shelves across India.",
    image: "/photos/real-pack-range.jpg",
  },
  {
    eyebrow: "06 · Market linkage",
    title: "Reaching markets a smallholder never could.",
    body: "From neighbourhood grocers to institutional and gifting buyers, the federation opens retail channels that no individual farmer could access alone — and routes the value back to the people who grew the grain.",
    image: "/photos/expo-stall.jpg",
  },
  {
    eyebrow: "07 · Research & partnerships",
    title: "Research, innovation and partnerships.",
    body: "Working with ICAR-CIAE, ICAR-IIMR and institutional stakeholders across the millet value chain, the federation invests in product innovation, digital platforms for programme management, and strategic partnerships that keep Madhya Pradesh millets competitive — from the field to global markets.",
    image: "/photos/quality-inspection.jpg",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <Section variant="hero">
        <Container size="narrow" className="text-center">
          <Eyebrow>Our activities</Eyebrow>
          <h1 className="mt-4 type-h1">
            One umbrella, from seed to shelf.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The federation handles every link in the millet chain — so that
            smallholder farmers across Madhya Pradesh don&apos;t have to face the
            market alone.
          </p>
        </Container>
      </Section>

      <Section variant="flush">
        <Container size="wide">
          <div className="space-y-16 lg:space-y-24">
            {activities.map((a, i) => (
              <div
                key={a.title}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <Eyebrow>{a.eyebrow}</Eyebrow>
                  <h2 className="mt-4 type-h3">
                    {a.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {a.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container size="wide">
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <p className="flex-1 type-quote">
              See where these activities translate into numbers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/impact">Our impact</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/farmers">Meet the farmers</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
