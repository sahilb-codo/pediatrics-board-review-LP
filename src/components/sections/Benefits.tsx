import { FeatureCard } from "@/components/cards/FeatureCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FeaturesContent } from "@/types";

type BenefitsProps = {
  benefits: FeaturesContent["benefits"];
};

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section aria-labelledby="benefits-title" className="bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="benefits-title"
          title={benefits.title}
          highlight={benefits.highlight}
          highlightClassName="font-bold text-navy"
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {benefits.items.map((benefit) => (
            <FeatureCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}
