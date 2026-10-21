import Image from "next/image";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { image } = testimonial;

  return (
    <figure className="mx-auto flex max-w-xl flex-col items-center text-center">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 640px) 24rem, 80vw"
        className="aspect-4/3 w-full max-w-sm rounded-[1.75rem] object-cover object-top"
      />
      <p className="mt-6 text-3xl leading-tight font-bold text-navy sm:text-4xl">{testimonial.headline}</p>
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
