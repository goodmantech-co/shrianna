import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
}

export function Logo({ className, variant = "full" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-11 w-11" />
      {variant === "full" && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-xl font-medium tracking-tight text-foreground">
            Shrianna
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Federation
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-white ring-1 ring-border",
        className
      )}
    >
      <Image
        src="/shriannalogo.jpeg"
        alt="Shrianna Federation"
        fill
        sizes="64px"
        className="object-cover"
        priority
      />
    </div>
  );
}
