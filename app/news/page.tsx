import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { news as items, engagements } from "@/lib/news";

export const metadata = {
  title: "News & press",
  description:
    "Latest news from Shrianna Federation — procurement milestones, the Rani Durgavati Shrianna Protsahan Yojana, the Bhopal millet mill and Narmada Millets in retail.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <Section variant="hero">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Eyebrow>News & press</Eyebrow>
              <h1 className="mt-4 type-h1">
                What&rsquo;s happening at Shrianna.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Procurement milestones, press coverage and updates from the
                federation and the Narmada Millets brand.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/photos/expo-stall.jpg"
                alt="The Narmada Millets stall at the state Krishak Kalyan expo"
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
                  <h2 className="mt-3 type-h4">
                    {n.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {n.body}
                  </p>
                  {n.url && (
                    <a
                      href={n.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Read at {n.source ?? "source"} →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="engagements" className="scroll-mt-24 bg-muted/40">
        <Container size="wide">
          <Eyebrow>Engagements & partnerships</Eyebrow>
          <h2 className="mt-3 max-w-3xl type-h2">
            Where the federation shows up.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Workshops, trade fairs, research meetings and field visits — the
            working relationships behind the millet value chain.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {engagements.map((e) => (
              <article
                key={e.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <Badge variant="muted" className="w-fit">
                    {e.tag}
                  </Badge>
                  <h3 className="mt-3 type-h5">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {e.body}
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
