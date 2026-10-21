import Image from "next/image";
import { StarRating } from "@/components/ui/StarRating";
import { formatDate } from "@/lib/utils";
import type { Review } from "@/types";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  const { avatar } = review;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-navy/80 bg-white p-5">
      <header className="flex items-center gap-3">
        <Image
          src={avatar.src}
          alt={avatar.alt}
          width={avatar.width}
          height={avatar.height}
          className="size-10 shrink-0 rounded-full"
        />
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-ink">{review.name}</h3>
          <time dateTime={review.date} className="text-xs text-muted">
            {formatDate(review.date)}
          </time>
        </div>
      </header>
      <StarRating rating={review.rating} className="mt-3 text-amber" />
      <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-body">{review.text}</p>
    </article>
  );
}
