import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Millet Recipes",
  description:
    "Simple, family-tested millet recipes from Shrianna Federation members — Kodo pulao, Kutki kheer, ragi mudde and everyday mixed-millet roti, most ready in under 30 minutes.",
  alternates: { canonical: "/recipes" },
};

const recipes: {
  title: string;
  millet: string;
  time: string;
  image?: string;
  panel?: string;
  body: string;
}[] = [
  {
    title: "Kodo Pulao with seasonal vegetables",
    millet: "Kodo",
    time: "30 min",
    image: "/editorial/gond-thali.jpg",
    body: "Soak 1 cup whole Kodo for 20 min. Saute onion, ginger, garlic in ghee; add chopped carrot, peas, beans. Drain and add the Kodo, double its volume in water, salt, a bay leaf. Cover and simmer for 18 minutes.",
  },
  {
    title: "Kutki Kheer with cardamom and jaggery",
    millet: "Kutki",
    time: "40 min",
    panel: "bg-brand-rust",
    body: "Roast 1/2 cup Kutki on low flame for 3 min. Add 4 cups whole milk and simmer until the grain is tender (~25 min). Stir in 1/2 cup melted jaggery, crushed cardamom, a pinch of saffron. Serve warm or chilled.",
  },
  {
    title: "Ragi Mudde the Karnataka way",
    millet: "Ragi",
    time: "20 min",
    panel: "bg-brand-forest",
    body: "Bring 2 cups water to a hard boil with a pinch of salt. Slowly rain in 1 cup ragi flour while stirring. Cover and cook on low for 4 min. Mash with a wooden ladle until smooth. Shape into orbs and serve with hot sambar.",
  },
  {
    title: "Mixed millet roti for everyday meals",
    millet: "Mixed",
    time: "15 min",
    panel: "bg-brand-blue-deep",
    body: "Combine 2 cups Federation mixed millet atta with 1 tsp salt. Add warm water bit by bit, knead a soft dough, rest 10 min. Roll thin, cook on a hot tava with a little ghee. Best with jaggery and white butter.",
  },
];

export default function RecipesPage() {
  return (
    <>
      <Section variant="hero">
        <Container size="narrow" className="text-center">
          <Eyebrow>Recipes</Eyebrow>
          <h1 className="mt-4 type-h1">
            Cook a millet today.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Simple, family-tested recipes from our farmer-members and friends of
            the federation. Most ready in under thirty minutes.
          </p>
        </Container>
      </Section>

      <Section variant="flush">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-2">
            {recipes.map((r) => (
              <article
                key={r.title}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10]">
                  {r.image ? (
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className={`grain flex h-full flex-col items-center justify-center gap-2 ${r.panel}`}
                    >
                      <span className="font-serif text-6xl text-background/90">
                        {r.millet}
                      </span>
                      <span className="type-eyebrow text-background/60">
                        {r.time} · {r.millet} millet
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <Badge>{r.millet}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {r.time}
                    </span>
                  </div>
                  <h2 className="type-h4">{r.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {r.body}
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
