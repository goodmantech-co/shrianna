import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Farmers & FPOs",
  description:
    "The 24 member farmer producer organisations of Shrianna Federation across Madhya Pradesh — over 5,000 millet farmers paid fairly via DBT.",
  alternates: { canonical: "/farmers" },
};

// Member FPO directory — source: federation FPO list, 2026.
const fpos = [
  { name: "Amarkantak Horticulture Producer Company Limited", district: "Anuppur" },
  { name: "Baiga Chak Mahila Kishan Utpadak Producer Company Limited", district: "Dindori / Mandla" },
  { name: "Bajag Natural Farming Producer Company Limited", district: "Dindori" },
  { name: "Bandhawgarh Krishi Vanopaj Producer Company Limited", district: "Umaria" },
  { name: "Bhojpur Aajivika Producer Company Limited", district: "Raisen" },
  { name: "Bichhiya Progressive Farmer Producer Company Limited", district: "Mandla" },
  { name: "Bilveshwar Natural Farming Producer Company Limited", district: "Dindori" },
  { name: "Birsa Crop Producer Company Limited", district: "Balaghat" },
  { name: "Jai Dongardev Karirat Farmer Producer Company Limited", district: "Seoni" },
  { name: "Kahnapas Progressive Farmer Producer Company Limited", district: "Seoni" },
  { name: "Karanjiya Millets Farmer Producer Company Limited", district: "Dindori" },
  { name: "Kharmer Mahila Kishan Producer Company Limited", district: "Dindori" },
  { name: "Kundam Crop Producer Company Limited", district: "Jabalpur" },
  { name: "Maihar Farmers Producer Company Limited", district: "Maihar" },
  { name: "Manganwa Unnati Kishan Producer Company Limited", district: "Rewa" },
  { name: "Raghurajnagar Farmers Producer Company Limited", district: "Satna" },
  { name: "Sangambd Farmer Producer Company Limited", district: "Katni" },
  { name: "Satpura Mahila Kishan Producer Company Limited", district: "Chhindwara" },
  { name: "Singdev Mahila Kishan Producer Company Limited", district: "Singrauli / Sidhi" },
  { name: "Satpudanchal Farmer Producer Company Limited", district: "Betul" },
  { name: "Somnadi Farmer Producer Company Limited", district: "Shahdol" },
  { name: "Sonpat Producer Company Limited", district: "Sidhi" },
  { name: "Uday Farmers Producer Company Limited", district: "Chhindwara" },
  { name: "Vindhyanchal Crop Producer Company Limited", district: "Rewa" },
];

const fpoDistricts = [
  ...new Set(fpos.flatMap((f) => f.district.split(" / "))),
].sort();

const stories = [
  {
    name: "Rukmani Bai",
    village: "Dindori",
    quote:
      "Earlier we sold Kutki at the village mandi for whatever the trader offered. Through the federation, the same harvest now earns us double — and the payment lands in our bank within ten days.",
    image:
      "/photos/farmers-weighing.jpg",
  },
  {
    name: "Asha Uikey",
    village: "Raisen",
    quote:
      "When the cabinet announced the scheme, no one knew how it would actually reach farmers like us. The federation is what made it real.",
    image:
      "/photos/onboarding-2.jpg",
  },
];

export default function FarmersPage() {
  return (
    <>
      <Section variant="hero">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Eyebrow>The farmers</Eyebrow>
              <h1 className="mt-4 type-h1">
                5,000+ farmers. Across Madhya Pradesh. One federation.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Shrianna pools the harvests of farmer producer organisations
                across Madhya Pradesh. Most of our farmer-members grow on under
                two hectares, and most have been farming millets longer than
                India has been a republic.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/photos/farmers-weighing.jpg"
                alt="Farmers weighing millet at a block-level procurement centre"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="flush" className="pb-0">
        <Container size="wide">
          <div className="grid gap-6 rounded-2xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Eyebrow>Why millets</Eyebrow>
              <p className="mt-4 max-w-3xl leading-relaxed text-foreground/85">
                Millets — particularly Kodo and Kutki — have traditionally
                occupied an important place in the agricultural systems of
                Madhya Pradesh. Their high nutritional value, gluten-free
                nature, climate resilience and low water requirement have
                earned them significant global recognition.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 lg:max-w-xs">
              {[
                "High nutrition",
                "Gluten-free",
                "Climate-resilient",
                "Low water need",
              ].map((tag) => (
                <li key={tag}>
                  <Badge variant="muted">{tag}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section variant="flush" id="fpos" className="scroll-mt-24">
        <Container size="wide">
          <Eyebrow>Member FPOs</Eyebrow>
          <h2 className="mt-3 max-w-3xl type-h2">
            The {fpos.length} producer companies behind the federation.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every member is a farmer-owned producer company — together they
            span {fpoDistricts.length} districts of Madhya Pradesh.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {fpoDistricts.map((d) => (
              <li key={d}>
                <Badge variant="muted">{d}</Badge>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {fpos.map((f) => (
              <div
                key={f.name}
                className="flex flex-col justify-between gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <p className="text-sm font-medium leading-snug">{f.name}</p>
                <p className="type-eyebrow text-muted-foreground">
                  {f.district}
                </p>
              </div>
            ))}
            <Link
              href="/contact"
              className="group flex flex-col justify-between gap-3 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 transition-colors hover:border-primary hover:bg-primary/10"
            >
              <p className="text-sm font-medium leading-snug text-primary">
                Represent an FPO? Join the consortium.
              </p>
              <p className="type-eyebrow text-primary">
                Contact us
                <ArrowRight className="ml-1 inline h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/50">
        <Container size="wide">
          <Eyebrow>In their words</Eyebrow>
          <h2 className="mt-3 type-h2">
            Stories from the harvest.
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {stories.map((s) => (
              <article
                key={s.name}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="type-h5 leading-relaxed text-foreground/90">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <p className="mt-5 text-sm font-medium text-foreground">
                    {s.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {s.village} · Director, Shrianna Federation
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/photos/quality-inspection.jpg"
                alt="Quality inspection of millet grain before purchase"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow>From field to mill</Eyebrow>
              <h2 className="mt-3 type-h2">
                How a grain becomes a kilo of Kodo.
              </h2>
              <ol className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Sown and harvested",
                    body: "Kharif sowing in June; harvest in October-November. All rain-fed.",
                  },
                  {
                    step: "02",
                    title: "Aggregated at the FPO",
                    body: "Member-collectives pool the harvest at the block level.",
                  },
                  {
                    step: "03",
                    title: "Procured by the federation",
                    body: "We buy at MSP+₹1,000/qtl incentive, paid via DBT.",
                  },
                  {
                    step: "04",
                    title: "Milled in Bhopal",
                    body: "De-husked, cleaned, graded and packed for retail.",
                  },
                  {
                    step: "05",
                    title: "Direct to your kitchen",
                    body: "Shipped across India under the Shrianna name.",
                  },
                ].map((s) => (
                  <li key={s.step} className="flex gap-5">
                    <span className="type-h4 text-primary">{s.step}</span>
                    <div>
                      <h3 className="type-h5">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
