import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Slideshow } from "@/components/ui/Slideshow";
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
        <div className="mt-10">
          <Slideshow
            label="Pediatrician testimonials"
            itemName="testimonial"
            slides={spotlight.items.map((testimonial) => ({
              id: testimonial.id,
              label: testimonial.name,
              content: <TestimonialCard testimonial={testimonial} />,
            }))}
          />
        </div>
      </Container>
    </section>
  );
}
