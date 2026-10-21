import { cn } from "@/lib/utils";

type DecorativeArcsProps = {
  /** Number of concentric arcs. */
  count?: number;
  className?: string;
};

/** Concentric arch outlines used as a background motif. Colour comes from `currentColor`. */
export function DecorativeArcs({ count = 6, className }: DecorativeArcsProps) {
  const outer = 150;
  const gap = 16;

  return (
    <svg
      viewBox="0 0 340 420"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      {Array.from({ length: count }, (_, index) => {
        const radius = outer - index * gap;
        const x = 20 + index * gap;
        return <path key={radius} d={`M${x} 420V170a${radius} ${radius} 0 0 1 ${radius * 2} 0v250`} />;
      })}
    </svg>
  );
}
