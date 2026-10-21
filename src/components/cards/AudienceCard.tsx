import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { cn } from "@/lib/utils";
import type { Audience, AudienceTone } from "@/types";

const toneClasses: Record<AudienceTone, string> = {
  lavender: "bg-[#ecdaf8]",
  sky: "bg-sky",
  neutral: "bg-surface ring-1 ring-line/70",
};

type AudienceCardProps = {
  audience: Audience;
};

export function AudienceCard({ audience }: AudienceCardProps) {
  const { image } = audience;

  return (
    <article
      id={audience.id}
      aria-labelledby={`${audience.id}-title`}
      className={cn(
        "flex flex-col overflow-hidden rounded-[1.75rem] transition-shadow duration-300 hover:shadow-card",
        toneClasses[audience.tone],
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full"
        />
      ) : null}
      <div className={cn("flex flex-1 flex-col p-6 sm:p-8", !image && "sm:pt-7")}>
        <h3 id={`${audience.id}-title`} className={cn("font-bold text-ink", image ? "text-2xl sm:text-[1.5625rem]" : "text-xl leading-[1.2] sm:text-[1.375rem]")}>
          {audience.title}
        </h3>
        <CheckList
          items={audience.points}
          className="mt-5 mb-8"
          bubbleClassName={image ? "bg-white" : "bg-lilac"}
          textClassName={image ? "text-base leading-[1.6]" : "text-[0.9375rem] leading-[1.67]"}
        />
        <Button href={audience.cta.href} className="mt-auto self-start">
          {audience.cta.label}
        </Button>
      </div>
    </article>
  );
}
