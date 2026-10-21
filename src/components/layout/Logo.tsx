import Link from "next/link";
import { HighlightText } from "@/components/ui/HighlightText";
import { cn } from "@/lib/utils";

type LogoProps = {
  name: string;
  shortName: string;
  highlight: string;
  tagline: string;
  className?: string;
};

/** Original text-based brand mark: gradient badge with a medical cross and check. */
export function Logo({ name, shortName, highlight, tagline, className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex shrink-0 items-center gap-2.5 whitespace-nowrap", className)} aria-label={`${name} home`}>
      <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-linear-135 from-brand to-violet">
        <svg viewBox="0 0 40 40" className="size-10" focusable="false">
          <path d="M17 9h6v8h8v6h-8v8h-6v-8H9v-6h8z" fill="#fff" opacity="0.95" />
          <path
            d="m15.5 20.5 3 3 6-6.5"
            fill="none"
            stroke="#5b21d1"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-navy">
          <HighlightText text={shortName} highlight={highlight} className="text-brand" />
        </span>
        <span className="mt-1 text-[0.6875rem] font-medium tracking-[0.18em] text-muted uppercase">{tagline}</span>
      </span>
    </Link>
  );
}
