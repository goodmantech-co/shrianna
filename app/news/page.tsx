import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "News & press",
  description:
    "Latest news from Shrianna Federation — procurement milestones, the Rani Durgavati Shrianna Protsahan Yojana, the Bhopal women-led mill and Narmada Millets in retail.",
  alternates: { canonical: "/news" },
};

const items = [
  {
    date: "14 October 2025",
    type: "Cabinet decision",
    title:
      "Cabinet clears the Shrianna Federation framework — ₹80 crore interest-free loan and DBT farmer incentives approved",
    body: "The State Cabinet approved the operational framework of the Shrianna Federation, including an ₹80 crore interest-free loan from the State Price Stabilization Fund and DBT-based incentives paid directly to registered millet farmers.",
    image:
      "/editorial/cabinet-decision.jpg",
  },
  {
    date: "5 October 2025",
    type: "Scheme update",
    title:
      "Rani Durgavati Shrianna Protsahan Yojana: farmers to receive a ₹1,000 per quintal incentive via DBT",
    body: "Field-level instructions issued by the Farmer Welfare Department detail registration windows, procurement centres and a transparent grievance redressal mechanism.",
    image:
      "/editorial/kodo-kutki-field.jpg",
  },
  {
    date: "12 February 2025",
    type: "Operations",
    title:
      "Bhopal mill inaugurated at Beej Bhawan — first batch of 500 quintals of Kodo packed",
    body: "The federation's processing unit becomes the only women-led millet mill in the state, with capacity for 8 MT/day of cleaning and de-husking.",
    image:
      "/editorial/procurement.jpg",
  },
  {
    date: "31 July 2024",
    type: "Market",
    title: "Narmada Millets packets hit mainstream Bhopal retailers for the first time",
    body: "Federation-branded Kodo and Kutki products appear on shelves at select grocers in Bhopal and Indore — the first commercial outing for the Narmada Millets brand.",
    image:
      "/editorial/mill-launch.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      <Section className="pb-0">
        <Container size="narrow">
          <Eyebrow>News & press</Eyebrow>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            What&rsquo;s happening at Shrianna.
          </h1>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <div className="space-y-8">
            {items.map((n, i) => (
              <article
                key={i}
                className="grid gap-6 overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-[1fr_1.4fr]"
              >
                <div className="relative aspect-[4/3] sm:aspect-auto">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-8">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Badge variant="muted">{n.type}</Badge>
                    <span>{n.date}</span>
                  </div>
                  <h2 className="mt-3 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
                    {n.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {n.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
