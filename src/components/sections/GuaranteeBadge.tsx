import Image from "next/image";
import { HighlightText } from "@/components/ui/HighlightText";
import type { HeroContent } from "@/types";

type GuaranteeBadgeProps = {
  guarantee: HeroContent["guarantee"];
};

export function GuaranteeBadge({ guarantee }: GuaranteeBadgeProps) {
  const { image } = guarantee;
  const text = `${guarantee.title} ${guarantee.highlight}`;

  return (
    <div className="flex w-full max-w-md items-center gap-4 rounded-2xl border border-cream-line bg-cream px-4 py-3.5 sm:px-5">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="size-16 shrink-0 sm:size-18"
      />
      <p className="text-sm leading-snug font-bold text-ink uppercase sm:text-[0.9375rem]">
        <HighlightText text={text} highlight={guarantee.highlight} className="text-brand" />
      </p>
    </div>
  );
}
