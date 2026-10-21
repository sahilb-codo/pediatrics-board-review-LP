import { HighlightText } from "@/components/ui/HighlightText";
import type { HeroContent } from "@/types";

type GuaranteeBadgeProps = {
  guarantee: HeroContent["guarantee"];
};

/** Starburst seal points, computed once: alternating outer/inner radius around the centre. */
const sealPoints = Array.from({ length: 48 }, (_, index) => {
  const angle = (index / 48) * Math.PI * 2;
  const radius = index % 2 === 0 ? 38 : 33;
  return `${(40 + radius * Math.cos(angle)).toFixed(2)},${(40 + radius * Math.sin(angle)).toFixed(2)}`;
}).join(" ");

export function GuaranteeBadge({ guarantee }: GuaranteeBadgeProps) {
  const [figure, ...rest] = guarantee.badge.split(" ");
  const text = `${guarantee.title} ${guarantee.highlight}`;

  return (
    <div className="flex w-full max-w-md items-center gap-4 rounded-2xl border border-cream-line bg-cream px-4 py-3.5 sm:px-5">
      <svg viewBox="0 0 80 80" className="size-16 shrink-0 sm:size-18" aria-hidden="true" focusable="false">
        <polygon points={sealPoints} fill="#f2c94c" />
        <circle cx="40" cy="40" r="27" fill="#f8dc72" stroke="#e0ad1f" strokeWidth="2" />
        <text x="40" y="37" textAnchor="middle" fontSize="12" fontWeight="800" fill="#4a3608">
          {figure}
        </text>
        <rect x="8" y="41" width="64" height="13" rx="3" fill="#100b47" />
        <text x="40" y="50.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="#ffffff" letterSpacing="0.4">
          {rest.join(" ").toUpperCase()}
        </text>
      </svg>
      <p className="text-sm leading-snug font-bold text-ink uppercase sm:text-[0.9375rem]">
        <HighlightText text={text} highlight={guarantee.highlight} className="text-brand" />
      </p>
    </div>
  );
}
