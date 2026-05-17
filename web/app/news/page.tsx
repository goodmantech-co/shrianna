import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "News & press" };

const items = [
  {
    date: "14 October 2025",
    type: "Cabinet decision",
    title:
      "MP Cabinet greenlights Kodo–Kutki procurement for the first time, targets 30,000 MT in Kharif 2025",
    body: "The Cabinet approved the operational framework of the Shrianna Federation, including an ₹80 crore interest-free loan from the State Price Stabilization Fund and DBT-based farmer incentives.",
    image:
      "https://desitalkchicago.com/wp-content/uploads/2025/10/ANI-20251014124559.jpg",
  },
  {
    date: "5 October 2025",
    type: "Scheme update",
    title:
      "Rani Durgavati Shri Anna Protsahan Yojana: farmers to receive ₹3,900 per hectare incentive",
    body: "Field-level instructions issued by the Farmer Welfare Department detail registration windows, procurement centres and a transparent grievance redressal mechanism.",
    image:
      "https://feminisminindia.com/wp-content/uploads/2022/09/Kodo-Kutki-field-2048x1152.jpg",
  },
  {
    date: "12 February 2025",
    type: "Operations",
    title:
      "Bhopal mill inaugurated at Beej Bhawan — first 500 quintals of Kodo packed",
    body: "The federation's processing unit becomes the only women-led millet mill in the state, with capacity for 8 MT/day of cleaning and de-husking.",
    image:
      "https://images.bhaskarassets.com/web2images/521/2024/02/12/e3466c22-fd49-49f1-94d0-09da9d644155_1707740807770.jpg",
  },
  {
    date: "31 July 2024",
    type: "Market",
    title: "Shrianna packets hit mainstream Bhopal retailers for the first time",
    body: "Federation-branded Kodo and Kutki appear on shelves at select grocers in Bhopal and Indore — the first commercial outing for the brand.",
    image:
      "https://images.bhaskarassets.com/thumb/730x0/web2images/521/2023/07/31/app_169072399764c6669da7049_img-20230730-wa0037.jpg",
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
