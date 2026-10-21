import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { CtaContent } from "@/types";

type FinalCtaProps = {
  final: CtaContent["final"];
};

export function FinalCta({ final }: FinalCtaProps) {
  return (
    <section aria-labelledby="final-cta-title" className="bg-white py-14">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-linear-to-r from-violet to-brand px-6 py-10 text-white sm:px-10 md:flex-row md:items-center">
          <div>
            <h2 id="final-cta-title" className="text-3xl font-bold text-white">
              {final.title}
            </h2>
            <p className="mt-2 max-w-xl text-white/90">{final.description}</p>
          </div>
          <Button href={final.cta.href} variant="light" size="lg" trailingIcon="chevron-right">
            {final.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
