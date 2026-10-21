import { StarRating } from "@/components/ui/StarRating";
import { cn, formatDate, getInitials } from "@/lib/utils";
import type { Review } from "@/types";

const avatarColors = ["bg-teal", "bg-violet", "bg-brand", "bg-navy", "bg-orange"];

type ReviewCardProps = {
  review: Review;
  index: number;
};

export function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-navy/80 bg-white p-5">
      <header className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-full text-sm font-semibold text-white",
            avatarColors[index % avatarColors.length],
          )}
        >
          {getInitials(review.name)}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-ink">{review.name}</h3>
          <time dateTime={review.date} className="text-xs text-muted">
            {formatDate(review.date)}
          </time>
        </div>
      </header>
      <StarRating rating={review.rating} className="mt-3 text-amber" />
      <p className="mt-3 text-sm leading-relaxed text-body">{review.text}</p>
    </article>
  );
}
