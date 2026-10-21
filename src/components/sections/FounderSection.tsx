import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { FounderContent } from "@/types";

type FounderSectionProps = {
  founder: FounderContent;
};

export function FounderSection({ founder }: FounderSectionProps) {
  const { image } = founder;

  return (
    <section id="founder" aria-labelledby="founder-title" className="overflow-hidden bg-sky">
      <Container className="grid items-center gap-10 pt-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20 lg:pt-12">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 28rem, 90vw"
          className="mx-auto h-auto w-full max-w-md self-end"
        />
        <div className="flex flex-col items-start gap-5 pb-14 lg:py-16">
          <p className="text-xl leading-[1.5] font-semibold text-body sm:text-[1.3125rem]">{founder.tagline}</p>
          <h2 id="founder-title" className="text-3xl leading-[1.2] font-medium sm:text-4xl lg:text-[2.4375rem]">
            {founder.title}
            <span className="mt-1 block font-bold text-teal uppercase">{founder.name}</span>
          </h2>
          <p className="max-w-xl text-[1.0625rem] text-ink">{founder.bio}</p>
          <Button href={founder.cta.href} trailingIcon="chevron-right" className="mt-2">
            {founder.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
