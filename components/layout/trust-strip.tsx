import { Truck, ShieldCheck, Sprout, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";

const items = [
  {
    icon: Sprout,
    title: "Direct from tribal farmers",
    body: "5,000+ farmers across Madhya Pradesh",
  },
  {
    icon: ShieldCheck,
    title: "FSSAI certified",
    body: "Cleaned & milled at our Bhopal unit",
  },
  {
    icon: Truck,
    title: "Free shipping over ₹999",
    body: "Pan-India delivery in 3-5 days",
  },
  {
    icon: HeartHandshake,
    title: "7-day returns",
    body: "Send it back if it's not fresh",
  },
];

export function TrustStrip() {
  return (
    <div className="border-y border-border bg-card">
      <Container size="wide" className="py-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
