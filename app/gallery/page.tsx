import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/container";

export const metadata = {
  title: "Gallery",
  description:
    "Photographs from the field, the Bhopal mill and the Narmada Millets harvest — the work of Shrianna Federation across Madhya Pradesh.",
  alternates: { canonical: "/gallery" },
};

const photos = [
  { src: "/editorial/kodo-kutki-field.jpg", caption: "Kodo–Kutki fields, central Madhya Pradesh", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/photos/procurement-centre.jpg", caption: "At the procurement centre" },
  { src: "/photos/quality-inspection.jpg", caption: "Quality check before purchase" },
  { src: "/photos/grain-cleaning.jpg", caption: "Cleaning and grading the grain" },
  { src: "/photos/procurement-volume.jpg", caption: "Aggregated for the federation", span: "lg:col-span-2" },
  { src: "/photos/real-pack-range.jpg", caption: "Narmada Millets, ready for retail", span: "lg:col-span-2" },
  { src: "/photos/onboarding-1.jpg", caption: "A farmer joins the federation" },
  { src: "/photos/expo-stall.jpg", caption: "At the state Krishak Kalyan expo" },
  { src: "/photos/awareness-rath.jpg", caption: "Awareness drive across the districts" },
  { src: "/photos/harvest-carry.jpg", caption: "Bringing in the harvest" },
  { src: "/photos/winnowing.jpg", caption: "Winnowing at the centre" },
];

export default function GalleryPage() {
  return (
    <>
      <Section className="pb-0">
        <Container size="narrow">
          <Eyebrow>Gallery</Eyebrow>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            From the field to the plate.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            A look at the federation&apos;s work — the harvest, the Bhopal mill
            and the Narmada Millets that come out the other end.
          </p>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <div className="grid auto-rows-[220px] grid-flow-dense grid-cols-2 gap-4 lg:grid-cols-4">
            {photos.map((p) => (
              <figure
                key={p.src}
                className={`group relative overflow-hidden rounded-2xl bg-muted ${p.span ?? ""}`}
              >
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
