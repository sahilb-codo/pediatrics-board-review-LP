import Image from "next/image";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import type { TestimonialsContent } from "@/types";

type ReviewsSectionProps = {
  reviews: TestimonialsContent["reviews"];
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const { platform } = reviews;

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading
          id="reviews-title"
          title={reviews.title}
          highlight={reviews.highlight}
          align="center"
          weight="bold"
          highlightClassName="text-[1.2em] font-medium text-brand"
          className="mx-auto max-w-2xl"
        />
      </Container>
      {/* Full-bleed like the reference widget: only a small gutter on each side. */}
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl bg-white px-5 py-3.5 ring-1 ring-line">
          <Image
            src={platform.logo.src}
            alt={platform.logo.alt}
            width={platform.logo.width}
            height={platform.logo.height}
            className="h-6 w-auto"
          />
          <span className="text-[0.9375rem] font-bold text-ink">{reviews.ratingLabel}</span>
          <StarRating rating={reviews.rating} className="text-amber" starClassName="size-5" />
          <span className="text-[0.9375rem] font-semibold text-ink">{reviews.badge}</span>
        </div>
        <Carousel
          label={`${platform.name} reviews`}
          itemName="review"
          perViewClassName="[--per-view:1] sm:[--per-view:2] lg:[--per-view:3] xl:[--per-view:4] 2xl:[--per-view:5] min-[112.5rem]:[--per-view:6]"
          controls="below"
          autoplayMs={6000}
          className="mt-6"
          slides={reviews.items.map((review) => ({
            id: review.id,
            label: review.name,
            content: <ReviewCard review={review} platform={platform.name} />,
          }))}
        />
      </div>
    </section>
  );
}
