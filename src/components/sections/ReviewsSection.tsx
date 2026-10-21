import { ReviewCard } from "@/components/cards/ReviewCard";
import { Container } from "@/components/ui/Container";
import { ScrollCarousel } from "@/components/ui/ScrollCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import type { TestimonialsContent } from "@/types";

type ReviewsSectionProps = {
  reviews: TestimonialsContent["reviews"];
  disclaimer: string;
};

export function ReviewsSection({ reviews, disclaimer }: ReviewsSectionProps) {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading
          id="reviews-title"
          title={reviews.title}
          highlight={reviews.highlight}
          align="center"
          weight="bold"
          highlightClassName="font-semibold text-brand"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white px-5 py-3.5 ring-1 ring-line">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            {reviews.sourceLabel}
            <StarRating rating={5} className="text-amber" />
          </p>
          <span className="rounded-md bg-teal px-2.5 py-1 text-xs font-semibold text-white">{reviews.badge}</span>
        </div>
        <div className="mt-6">
          <ScrollCarousel label="Member reviews" itemClassName="w-[85%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]">
            {reviews.items.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </ScrollCarousel>
        </div>
        <p className="mt-4 text-center text-xs text-muted">{disclaimer}</p>
      </Container>
    </section>
  );
}
