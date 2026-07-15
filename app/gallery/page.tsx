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

// Public Facebook videos covering the federation's work (embedded via the
// official Facebook video plugin — no SDK required).
const videos = [
  {
    href: "https://www.facebook.com/DrMohanYadav51/videos/992782100192326/",
    caption:
      "Chief Minister Dr Mohan Yadav at the Dhaan Mahotsav, Seoni — on Kodo–Kutki and the millet mission",
  },
  {
    href: "https://www.facebook.com/DrMohanYadav51/videos/1008743711871827/",
    caption:
      "Rani Durgavati Shrianna Protsahan Yojana — incentive transfer to 3,941 farmers at Seoni",
  },
  {
    href: "https://www.facebook.com/agriculturedept.mp/videos/2185813048872782/",
    caption:
      "Dhaan Mahotsav, Seoni — Kodo–Kutki bonus distribution by the Chief Minister",
  },
  {
    href: "https://www.facebook.com/agriculturedept.mp/videos/1924085561640046/",
    caption:
      "Dhaan Mahotsav 2026 — Department of Farmer Welfare & Agriculture Development",
  },
  {
    href: "https://www.facebook.com/agriculturedept.mp/videos/1694249558534744/",
    caption:
      "Shri Anna — our tradition, farmers' prosperity and the base of a healthy future",
  },
  {
    href: "https://www.facebook.com/agriculturedept.mp/videos/2170319830177146/",
    caption:
      "₹1,000 per quintal bonus over MSP for Kodo–Kutki farmer producers",
  },
  {
    href: "https://www.facebook.com/100002835008831/videos/pcb.25451332787877872/1628395184898932",
    caption: "From the federation's procurement work in the districts",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Section variant="hero">
        <Container size="narrow" className="text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h1 className="mt-4 type-h1">
            From the field to the plate.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A look at the federation&apos;s work — the harvest, the Bhopal mill
            and the Narmada Millets that come out the other end.
          </p>
        </Container>
      </Section>

      <Section variant="flush">
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
            <a
              href="https://www.facebook.com/photo/?fbid=1479476466877192&set=a.532328338258681"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6 text-center transition-colors hover:border-primary hover:bg-primary/10"
            >
              <span className="type-h6 text-primary">
                More photos on Facebook
              </span>
              <span className="type-eyebrow text-muted-foreground">
                View post →
              </span>
            </a>
          </div>
        </Container>
      </Section>

      <Section id="videos" className="scroll-mt-24 bg-muted/40">
        <Container size="wide">
          <Eyebrow>Videos</Eyebrow>
          <h2 className="mt-3 max-w-3xl type-h2">
            The work, in motion.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Procurement drives, bonus transfers and the Dhaan Mahotsav — as
            covered by the Chief Minister&apos;s office and the Department of
            Farmer Welfare &amp; Agriculture Development.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-border bg-card">
              <video
                controls
                preload="metadata"
                playsInline
                className="aspect-video w-full bg-black"
                src="/videos/shrianna-field.mp4"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">
                From the federation&apos;s work in the field
              </figcaption>
            </figure>
            {videos.map((v) => (
              <figure
                key={v.href}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-video bg-muted">
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(v.href)}&show_text=false`}
                    className="h-full w-full"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    scrolling="no"
                    title={v.caption}
                  />
                </div>
                <figcaption className="p-4 text-sm text-muted-foreground">
                  {v.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
