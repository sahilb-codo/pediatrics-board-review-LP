import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DecorativeArcs } from "@/components/ui/DecorativeArcs";
import { HighlightText } from "@/components/ui/HighlightText";
import type { CtaContent } from "@/types";

type QuizCtaProps = {
  quiz: CtaContent["quiz"];
};

export function QuizCta({ quiz }: QuizCtaProps) {
  const { image } = quiz;

  return (
    <section aria-labelledby="quiz-title" className="overflow-hidden bg-navy text-white">
      <Container className="grid items-center gap-8 pt-14 lg:grid-cols-2 lg:pt-10">
        <div className="flex flex-col items-start gap-4 lg:pb-10">
          <h2 id="quiz-title" className="text-4xl font-medium text-lavender sm:text-5xl">
            <HighlightText text={quiz.title} highlight={quiz.highlight} className="font-semibold text-white" />
          </h2>
          <p className="text-lg font-semibold text-white">{quiz.description}</p>
          <Button href={quiz.cta.href} trailingIcon="chevron-right" className="mt-6">
            {quiz.cta.label}
          </Button>
        </div>
        <div className="relative mx-auto w-full max-w-lg self-end">
          <div className="absolute inset-x-6 top-14 bottom-0 rounded-t-[2.5rem] bg-[#26206a]" />
          <DecorativeArcs className="absolute top-10 -right-6 w-40 text-white/15" count={5} />
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 32rem, 90vw"
            className="relative h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
