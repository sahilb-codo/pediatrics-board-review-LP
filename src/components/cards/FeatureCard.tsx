import Image from "next/image";
import type { Benefit } from "@/types";

type FeatureCardProps = {
  benefit: Benefit;
};

export function FeatureCard({ benefit }: FeatureCardProps) {
  return (
    <article className="flex flex-col items-center rounded-card bg-white px-6 py-9 text-center ring-1 ring-line/60 transition-shadow duration-300 hover:shadow-card">
      <Image src={`/images/icons/benefit-${benefit.icon}.webp`} alt="" width={96} height={96} className="size-14" />
      <h3 className="mt-5 max-w-56 text-lg font-semibold text-ink">{benefit.title}</h3>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">{benefit.description}</p>
    </article>
  );
}
