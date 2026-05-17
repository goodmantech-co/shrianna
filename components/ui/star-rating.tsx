import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviews?: number;
  size?: "sm" | "md";
  className?: string;
  showCount?: boolean;
}

export function StarRating({
  rating,
  reviews,
  size = "sm",
  className,
  showCount = true,
}: StarRatingProps) {
  const sizeClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const stars = [0, 1, 2, 3, 4].map((i) => {
    const fill = Math.max(0, Math.min(1, rating - i));
    return fill;
  });
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex">
        {stars.map((fill, i) => (
          <div key={i} className="relative">
            <Star
              className={cn(sizeClass, "text-foreground/15")}
              fill="currentColor"
            />
            {fill > 0 && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  className={cn(sizeClass, "text-amber-500")}
                  fill="currentColor"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <span className="text-xs font-medium text-foreground/80">
        {rating.toFixed(1)}
      </span>
      {showCount && reviews !== undefined && (
        <span className="text-xs text-muted-foreground">({reviews})</span>
      )}
    </div>
  );
}
