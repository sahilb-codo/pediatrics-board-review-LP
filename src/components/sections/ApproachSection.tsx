import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FeaturesContent } from "@/types";

type ApproachSectionProps = {
  approach: FeaturesContent["approach"];
};

export function ApproachSection({ approach }: ApproachSectionProps) {
  const { image } = approach;

  return (
    <section id="our-approach" aria-labelledby="approach-title" className="overflow-hidden bg-sky">
      <Container className="grid items-center gap-10 pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-12">
        <div className="flex flex-col items-start gap-5 lg:pb-12">
          <SectionHeading
            id="approach-title"
            title={approach.title}
            highlight={approach.highlight}
            highlightClassName="font-bold text-navy"
            sizeClassName="text-3xl leading-[1.2] sm:text-4xl lg:text-[2.4375rem]"
          />
          {approach.paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-xl text-ink">
              {paragraph}
            </p>
          ))}
          <p className="font-bold text-ink">{approach.closing}</p>
          <Button href={approach.cta.href} trailingIcon="chevron-right" className="mt-2">
            {approach.cta.label}
          </Button>
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="mx-auto h-auto w-full max-w-md self-end lg:max-w-lg"
        />
      </Container>
    </section>
  );
}
