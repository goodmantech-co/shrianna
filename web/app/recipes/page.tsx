import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Recipes" };

const recipes = [
  {
    title: "Kodo Pulao with seasonal vegetables",
    millet: "Kodo",
    time: "30 min",
    image:
      "https://gumlet.assettype.com/freepressjournal/2023-06/5e16b281-d4a7-4145-babb-0f87d1567c18/Gond_Thali_16x9.png",
    body: "Soak 1 cup whole Kodo for 20 min. Saute onion, ginger, garlic in ghee; add chopped carrot, peas, beans. Drain and add the Kodo, double its volume in water, salt, a bay leaf. Cover and simmer for 18 minutes.",
  },
  {
    title: "Kutki Kheer with cardamom and jaggery",
    millet: "Kutki",
    time: "40 min",
    image:
      "https://www.agniban.com/wp-content/uploads/2023/07/pm-01.jpg",
    body: "Roast 1/2 cup Kutki on low flame for 3 min. Add 4 cups whole milk and simmer until the grain is tender (~25 min). Stir in 1/2 cup melted jaggery, crushed cardamom, a pinch of saffron. Serve warm or chilled.",
  },
  {
    title: "Ragi Mudde the Karnataka way",
    millet: "Ragi",
    time: "20 min",
    image:
      "https://images.bhaskarassets.com/web2images/521/2023/05/19/22227328-f040-4f14-9622-0964492cd685_1684471602600.jpg",
    body: "Bring 2 cups water to a hard boil with a pinch of salt. Slowly rain in 1 cup ragi flour while stirring. Cover and cook on low for 4 min. Mash with a wooden ladle until smooth. Shape into orbs and serve with hot sambar.",
  },
  {
    title: "Mixed millet roti for everyday meals",
    millet: "Mixed",
    time: "15 min",
    image:
      "https://images.bhaskarassets.com/thumb/730x0/web2images/521/2023/02/16/206167646339763eccd25ef844whatsappimage2023-02-15a_1676496276.jpg",
    body: "Combine 2 cups Federation mixed millet atta with 1 tsp salt. Add warm water bit by bit, knead a soft dough, rest 10 min. Roll thin, cook on a hot tava with a little ghee. Best with jaggery and white butter.",
  },
];

export default function RecipesPage() {
  return (
    <>
      <Section className="pb-0">
        <Container size="narrow">
          <Eyebrow>Recipes</Eyebrow>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Cook a millet today.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Simple, family-tested recipes from our farmer-members and friends of
            the federation. Most ready in under thirty minutes.
          </p>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-2">
            {recipes.map((r) => (
              <article
                key={r.title}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <Badge>{r.millet}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {r.time}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl leading-tight">{r.title}</h2>
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
