import {
  HandCoins,
  Factory,
  Landmark,
  GraduationCap,
  ShoppingBasket,
  Network,
} from "lucide-react";

const work = [
  {
    icon: HandCoins,
    title: "Procurement at fair prices",
    body: "We buy Kodo, Kutki and other millets directly from member FPOs at MSP plus a ₹1,000/quintal incentive — no middlemen.",
  },
  {
    icon: Factory,
    title: "Processing & milling",
    body: "Cleaning, de-husking, grading and packing at the federation's own Bhopal unit, with capacity for 8 MT/day.",
  },
  {
    icon: Landmark,
    title: "Direct farmer payments",
    body: "Every rupee owed to a farmer is routed to their bank account through the transparent JIT/DBT mechanism.",
  },
  {
    icon: GraduationCap,
    title: "Capacity building",
    body: "Training member collectives on quality, aggregation and good agricultural practice across the state.",
  },
  {
    icon: ShoppingBasket,
    title: "The Narmada Millets brand",
    body: "Turning raw millets into value-added rice, instant mixes and cookies sold to households across India.",
  },
  {
    icon: Network,
    title: "Market linkage",
    body: "Connecting smallholder produce to retail, institutional and gifting markets it could never reach alone.",
  },
];

export function OurWork() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {work.map((w) => (
        <div
          key={w.title}
          className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/30"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <w.icon className="h-6 w-6" />
          </div>
          <h3 className="mt-5 font-serif text-xl leading-tight">{w.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {w.body}
          </p>
        </div>
      ))}
    </div>
  );
}
