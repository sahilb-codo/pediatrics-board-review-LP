import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
  starClassName?: string;
};

export function StarRating({ rating, max = 5, className, starClassName = "size-4" }: StarRatingProps) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      <span className="sr-only">{`Rated ${rating} out of ${max}`}</span>
      {Array.from({ length: max }, (_, index) => (
        <Icon
          key={index}
          name="star"
          strokeWidth={0}
          className={cn(starClassName, index < rating ? "opacity-100" : "opacity-25")}
        />
      ))}
    </span>
  );
}
