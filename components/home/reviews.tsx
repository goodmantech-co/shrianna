import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "The Kodo rice cooks just like white rice and my kids can't tell the difference. Knowing it comes straight from women farmers makes it taste even better.",
    name: "Ananya R.",
    city: "Indore",
    product: "Kodo Millet Rice",
  },
  {
    quote:
      "The khichdi mix is now our weeknight default — one pot, twenty minutes, no bloating. And the sourcing story is the real deal.",
    name: "Vikram S.",
    city: "Bhopal",
    product: "Millet Khichdi Mix",
  },
  {
    quote:
      "Ordered the harvest hamper for Diwali gifting. The handwoven basket and the farmer card were a beautiful touch — everyone asked where it was from.",
    name: "Meghna T.",
    city: "Pune",
    product: "Harvest Gift Hamper",
  },
];

export function Reviews() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {reviews.map((r) => (
        <figure
          key={r.name}
          className="flex flex-col rounded-2xl border border-border bg-card p-6"
        >
          <Quote className="h-6 w-6 text-primary/30" />
          <div className="mt-3 flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 text-amber-500"
                fill="currentColor"
              />
            ))}
          </div>
          <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
            “{r.quote}”
          </blockquote>
          <figcaption className="mt-5 border-t border-border/60 pt-4 text-sm">
            <span className="font-semibold">{r.name}</span>
            <span className="text-muted-foreground"> · {r.city}</span>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Verified buyer — {r.product}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
