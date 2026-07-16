"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GalleryPhoto = { src: string; caption: string };

export function PhotoGrid({
  photos,
  children,
}: {
  photos: GalleryPhoto[];
  children?: React.ReactNode;
}) {
  const [active, setActive] = React.useState<number | null>(null);

  const close = React.useCallback(() => setActive(null), []);
  const prev = React.useCallback(
    () => setActive((i) => (i === null ? i : (i + photos.length - 1) % photos.length)),
    [photos.length]
  );
  const next = React.useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );

  React.useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <figure
            key={p.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="absolute inset-0 cursor-zoom-in"
              aria-label={`View photo: ${p.caption}`}
            >
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {p.caption}
            </figcaption>
          </figure>
        ))}
        {children}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].caption}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
        >
          <div className="absolute inset-0" onClick={close} aria-hidden />

          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close photo viewer"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure className="pointer-events-none relative z-[5] flex h-full w-full flex-col items-center justify-center gap-4 p-4 sm:p-12">
            <div className="relative w-full max-w-5xl flex-1">
              <Image
                src={photos[active].src}
                alt={photos[active].caption}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>
            <figcaption className="text-center text-sm font-medium text-white">
              {photos[active].caption}
              <span className="ml-3 text-white/50">
                {active + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
