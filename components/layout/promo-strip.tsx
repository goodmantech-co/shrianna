import { Truck, ShieldCheck, Sprout } from "lucide-react";

const items = [
  { icon: Truck, text: "Free shipping over ₹999" },
  { icon: Sprout, text: "Direct from MP tribal farmers" },
  { icon: ShieldCheck, text: "FSSAI certified · 7-day returns" },
];

export function PromoStrip() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 overflow-hidden px-5 py-2 text-xs sm:gap-8 sm:px-8 sm:text-[13px]">
        {items.map(({ icon: Icon, text }, i) => (
          <div
            key={text}
            className={`flex shrink-0 items-center gap-2 ${
              i === 0 ? "" : "hidden sm:flex"
            }`}
          >
            <Icon className="h-3.5 w-3.5 text-accent" />
            <span className="font-medium tracking-wide">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
