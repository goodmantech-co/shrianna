import Image from "next/image";
import { MapPin } from "lucide-react";
import { Eyebrow } from "@/components/ui/container";

const districts = [
  "Mandla",
  "Dindori",
  "Shahdol",
  "Anuppur",
  "Umaria",
  "Chhindwara",
  "Balaghat",
  "Sidhi",
  "Singrauli",
  "Rewa",
  "Raisen",
  "Mandsaur",
  "Burhanpur",
];

export function Coverage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
      <div>
        <Eyebrow>Where we work</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl text-balance">
          Across Madhya Pradesh.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          The federation launched across sixteen districts in FY&nbsp;2025–26 and
          is now growing into a statewide footprint — pooling harvests from
          member producer organisations in the millet heartland of central and
          eastern Madhya Pradesh.
        </p>
        <ul className="mt-7 flex flex-wrap gap-2">
          {districts.map((d) => (
            <li
              key={d}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src="/photos/harvest-carry.jpg"
          alt="A farmer bringing in the millet harvest in Madhya Pradesh"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
