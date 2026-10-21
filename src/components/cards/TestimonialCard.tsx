import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="mx-auto flex max-w-xl flex-col items-center text-center">
      <span
        aria-hidden="true"
        className="grid size-28 place-items-center rounded-[2rem] bg-linear-135 from-brand to-violet text-4xl font-bold text-white shadow-lift sm:size-36 sm:text-5xl"
      >
        {testimonial.initials}
      </span>
      <p className="mt-8 text-3xl leading-tight font-bold text-navy sm:text-4xl">{testimonial.headline}</p>
      <StarRating rating={5} className="mt-5 text-brand" starClassName="size-5" />
      <blockquote className="mt-5 text-[0.9375rem] leading-relaxed text-ink">
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption className="mt-5 text-sm font-bold text-ink">
        {testimonial.name}
        <span className="block">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
