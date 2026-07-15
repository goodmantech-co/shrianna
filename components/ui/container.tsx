import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "narrow" && "max-w-3xl",
        size === "default" && "max-w-6xl",
        size === "wide" && "max-w-7xl",
        className
      )}
      {...props}
    />
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** "hero" = page-title section, no bottom padding; "flush" = first section after a hero, tight top */
  variant?: "default" | "hero" | "flush";
}

export function Section({
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-12 sm:py-16 lg:py-20",
        variant === "hero" && "pb-0 sm:pb-0 lg:pb-0",
        variant === "flush" && "pt-8 sm:pt-10 lg:pt-12",
        className
      )}
      {...props}
    />
  );
}

export function Eyebrow({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 type-eyebrow text-primary",
        className
      )}
      {...props}
    />
  );
}
