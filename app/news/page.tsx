import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { news as items } from "@/lib/news";

export const metadata = {
  title: "News & press",
  description:
    "Latest news from Shrianna Federation — procurement milestones, the Rani Durgavati Shrianna Protsahan Yojana, the Bhopal millet mill and Narmada Millets in retail.",
  alternates: { canonical: "/news" },
};

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
