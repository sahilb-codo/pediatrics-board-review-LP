import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TestimonialsContent } from "@/types";

type TestimonialSpotlightProps = {
  spotlight: TestimonialsContent["spotlight"];
};

export function TestimonialSpotlight({ spotlight }: TestimonialSpotlightProps) {
  return (
    <section aria-labelledby="testimonials-title" className="bg-[#e9d5f7] py-16 sm:py-24">
      <Container className="max-w-4xl">
        <SectionHeading
          id="testimonials-title"
          title={spotlight.title}
          align="center"
          weight="bold"
          titleClassName="text-navy"
        />
        <Carousel
          label="Pediatrician testimonials"
          itemName="testimonial"
          controls="sides"
          showDots
          autoplayMs={7000}
          className="mt-10"
          slides={spotlight.items.map((testimonial) => ({
            id: testimonial.id,
            label: testimonial.name,
            content: <TestimonialCard testimonial={testimonial} />,
          }))}
        />
      </Container>
    </section>
  );
}
