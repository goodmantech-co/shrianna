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
  { src: "/editorial/women-farmer-field.jpg", caption: "A farmer in the harvest" },
  { src: "/editorial/baiga-women-training.jpg", caption: "Capacity-building with member FPOs" },
  { src: "/editorial/processing-plant.jpg", caption: "The federation's Bhopal mill" },
  { src: "/editorial/procurement.jpg", caption: "Procurement at the centre", span: "lg:col-span-2" },
  { src: "/editorial/mill-launch.jpg", caption: "Narmada Millets, off the line", span: "lg:col-span-2" },
  { src: "/editorial/cabinet-decision.jpg", caption: "The scheme, cleared by cabinet" },
  { src: "/editorial/gond-thali.jpg", caption: "Millets on the plate" },
  { src: "/editorial/recipe-khichdi.jpg", caption: "Millet khichdi" },
  { src: "/editorial/recipe-poha.jpg", caption: "Millet poha" },
  { src: "/editorial/recipe-dosa.jpg", caption: "Millet dosa" },
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
