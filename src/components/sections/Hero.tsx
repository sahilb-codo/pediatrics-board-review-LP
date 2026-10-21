import Image from "next/image";
import { GuaranteeBadge } from "@/components/sections/GuaranteeBadge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DecorativeArcs } from "@/components/ui/DecorativeArcs";
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
            className="max-w-xl text-[2.25rem] leading-[1.15] font-medium tracking-tight sm:text-5xl lg:text-[3.375rem]"
          >
            {hero.title}
          </h1>
          <p className="max-w-xl text-[0.9375rem] sm:text-base">{hero.description}</p>

          <ul className="grid w-full max-w-xl gap-4 sm:grid-cols-3">
            {hero.highlights.map((highlight) => (
              <li key={highlight.emphasis} className="flex items-start gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-lilac text-brand">
                  <Icon name="check" className="size-3.5" strokeWidth={3} />
                </span>
                <span className="flex flex-col text-[0.8125rem] leading-snug text-ink">
                  {highlight.lead}
                  <strong className="mt-1 font-bold uppercase">{highlight.emphasis}</strong>
                </span>
              </li>
            ))}
          </ul>

          <Button href={hero.cta.href} trailingIcon="chevron-right">
            {hero.cta.label}
          </Button>

          <GuaranteeBadge guarantee={hero.guarantee} />
        </div>

        <div className="relative mx-auto w-full max-w-120 lg:mr-0">
          <DecorativeArcs className="absolute -bottom-16 -left-24 hidden w-72 text-lilac sm:block" count={7} />
          <div className="relative aspect-[6/6.4] w-full">
            <div className="absolute inset-x-0 top-[20%] bottom-0 overflow-hidden rounded-[2.5rem] bg-aqua">
              <DecorativeArcs className="absolute -top-10 -right-20 w-64 text-white/40" count={5} />
              <DecorativeArcs className="absolute -bottom-24 -left-16 w-56 text-white/30" count={5} />
            </div>
            {/* Clips the illustration to the card's rounded bottom while letting the head rise above it. */}
            <div className="absolute inset-0 overflow-hidden rounded-b-[2.5rem]">
              <Image
                src={visual.image.src}
                alt={visual.image.alt}
                width={visual.image.width}
                height={visual.image.height}
                loading="eager"
                fetchPriority="high"
                className="absolute right-0 bottom-0 h-auto w-[88%]"
              />
            </div>
            <p className="absolute top-[52%] -left-2 max-w-68 rounded-[1.75rem] rounded-tr-md bg-navy px-5 py-3.5 text-sm leading-relaxed font-semibold text-white shadow-lift sm:-left-10 sm:px-7 sm:py-4 sm:text-base">
              <span aria-hidden="true">👋 </span>
              {visual.greeting}
              <br />
              {visual.message}
            </p>
            <p className="absolute right-5 bottom-[12%] text-right text-2xl leading-tight font-bold text-navy sm:text-[2rem]">
              {visual.caption.split(" ").map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
              <span className="block text-teal">{visual.captionHighlight}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
