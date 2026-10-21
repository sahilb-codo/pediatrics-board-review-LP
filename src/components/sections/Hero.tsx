import Image from "next/image";
import { GuaranteeBadge } from "@/components/sections/GuaranteeBadge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { HeroContent } from "@/types";

type HeroProps = {
  hero: HeroContent;
};

export function Hero({ hero }: HeroProps) {
  const { visual } = hero;

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-white">
      <Container className="grid items-center gap-4 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-16 lg:pb-20">
        <div className="flex flex-col items-start gap-7">
          <h1
            id="hero-title"
            className="max-w-xl text-[2.375rem] leading-[1.23] font-medium text-ink sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.title}
          </h1>
          <p className="max-w-xl text-base text-soft">{hero.description}</p>

          <ul className="grid w-full max-w-xl gap-4 sm:grid-cols-3">
            {hero.highlights.map((highlight) => (
              <li key={highlight.emphasis} className="flex items-start gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-lilac text-brand">
                  <Icon name="check" className="size-3.5" strokeWidth={3} />
                </span>
                <span className="flex flex-col text-sm leading-[1.2] text-ink">
                  {highlight.lead}
                  <strong className="mt-1 text-lg leading-[1.35] font-bold text-[#393939] uppercase">{highlight.emphasis}</strong>
                </span>
              </li>
            ))}
          </ul>

          <Button href={hero.cta.href} trailingIcon="chevron-right">
            {hero.cta.label}
          </Button>

          <GuaranteeBadge guarantee={hero.guarantee} />
        </div>

        <Image
          src={visual.image.src}
          alt={visual.image.alt}
          width={visual.image.width}
          height={visual.image.height}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1024px) 32rem, 90vw"
          className="mx-auto h-auto w-full max-w-md lg:mr-0 lg:max-w-lg"
        />
      </Container>
    </section>
  );
}
