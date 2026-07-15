"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/editorial/women-farmer-field.jpg",
    alt: "A tribal millet farmer in her field in Madhya Pradesh",
    position: "object-[32%_center]",
  },
  {
    src: "/photos/farmers-weighing.jpg",
    alt: "Farmers weighing millet at a block-level procurement centre",
  },
  {
    src: "/photos/procurement-centre.jpg",
    alt: "Farmers and staff with Kodo and Kutki bags at a procurement centre",
  },
  {
    src: "/photos/quality-inspection.jpg",
    alt: "Quality inspection of millet grain before purchase",
  },
  {
    src: "/photos/harvest-carry.jpg",
    alt: "Winnowing the millet harvest before aggregation",
  },
];

const INTERVAL_MS = 4500;

export function HeroCarousel() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className={cn(
            "object-cover transition-opacity duration-1000",
            s.position,
            i === active ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show photo ${i + 1} of ${slides.length}`}
            onClick={() => setActive(i)}
            className={cn(
              "h-1.5 rounded-full bg-white/90 shadow-sm transition-all",
              i === active ? "w-6" : "w-1.5 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  );
}
