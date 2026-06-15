import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "The Farmers",
  description:
    "Shrianna Federation pools the harvests of farmer producer organisations across sixteen districts of Madhya Pradesh — over 5,000 mostly-women millet farmers paid fairly via DBT.",
  alternates: { canonical: "/farmers" },
};

const districts = [
  { name: "Mandla", crop: "Kodo · Kutki", members: 820 },
  { name: "Dindori", crop: "Kutki · Ragi", members: 740 },
  { name: "Shahdol", crop: "Kodo · Mixed", members: 410 },
  { name: "Anuppur", crop: "Kutki · Sama", members: 380 },
  { name: "Umaria", crop: "Kodo · Bajra", members: 350 },
  { name: "Chhindwara", crop: "Ragi · Jowar", members: 530 },
  { name: "Balaghat", crop: "Kodo · Kutki", members: 460 },
  { name: "Sidhi", crop: "Kodo · Kutki", members: 290 },
  { name: "Singrauli", crop: "Kodo", members: 230 },
  { name: "Mandsaur", crop: "Bajra · Jowar", members: 540 },
  { name: "Burhanpur", crop: "Jowar · Mixed", members: 320 },
];

const stories = [
  {
    name: "Vimala Prajapati",
    village: "Dindori",
    quote:
      "Earlier we sold Kutki at the village mandi for whatever the trader offered. Through the federation, the same harvest now earns us double — and the payment lands in our bank within ten days.",
    image:
      "/editorial/women-farmer-field.jpg",
  },
  {
    name: "Asha Uikey",
    village: "Mandla",
    quote:
      "When the cabinet announced the scheme, no one knew how it would actually reach women like us. The federation is what made it real.",
    image:
      "/editorial/baiga-women-training.jpg",
  },
];

export default function FarmersPage() {
  return (
    <>
      <Section className="pb-0">
        <Container size="narrow">
          <Eyebrow>The farmers</Eyebrow>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            5,000+ farmers. Sixteen districts. One federation.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Shrianna pools the harvests of farmer producer organisations
            across central Madhya Pradesh. Most of our farmer-members are
            women, most grow on under two hectares, and most have been farming
            millets longer than India has been a republic.
          </p>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <Eyebrow>Where our members farm</Eyebrow>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A snapshot of member collectives across the federation&rsquo;s
            sixteen districts of Madhya Pradesh.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {districts.map((d) => (
              <div
                key={d.name}
                className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-2xl">{d.name}</h3>
                  <Badge variant="muted">{d.members} members</Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{d.crop}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/50">
        <Container size="wide">
          <Eyebrow>In their words</Eyebrow>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
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
                  <p className="font-serif text-xl leading-relaxed text-foreground/90">
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
                src="/editorial/processing-plant.jpg"
                alt="Federation processing plant"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow>From field to mill</Eyebrow>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
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
                    <span className="font-serif text-2xl text-primary">{s.step}</span>
                    <div>
                      <h3 className="font-serif text-xl leading-tight">
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
