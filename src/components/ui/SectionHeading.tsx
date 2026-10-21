import { HighlightText } from "@/components/ui/HighlightText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  /** Part of the title rendered in the accent style. */
  highlight?: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  id?: string;
  /** Weight of the non-highlighted title text. */
  weight?: "medium" | "bold" | "extrabold";
  className?: string;
  titleClassName?: string;
  /** Replaces the default font-size and line-height classes (avoids conflicting size utilities). */
  sizeClassName?: string;
  highlightClassName?: string;
};

/** Standard section title block: optional eyebrow, heading with accent words and supporting copy. */
export function SectionHeading({
  title,
  highlight,
  eyebrow,
  description,
  align = "left",
  tone = "dark",
  as: Heading = "h2",
  id,
  weight = "medium",
  className,
  titleClassName,
  sizeClassName = "text-3xl leading-[1.25] sm:text-4xl lg:text-[2.75rem]",
  highlightClassName,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      {eyebrow ? (
        <p className="flex flex-col items-center gap-3 text-lg font-extrabold tracking-[1px] text-plum uppercase sm:text-[1.375rem]">
          {eyebrow}
          {centered ? <span aria-hidden="true" className="h-1 w-24 rounded-full bg-amber" /> : null}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          sizeClassName,
          weight === "extrabold" ? "font-extrabold" : weight === "bold" ? "font-bold" : "font-medium",
          tone === "light" && "text-white",
          titleClassName,
        )}
      >
        <HighlightText text={title} highlight={highlight} className={highlightClassName} />
      </Heading>
      {description ? (
        <p className={cn("max-w-xl text-base", tone === "light" ? "text-white/80" : "text-ink")}>{description}</p>
      ) : null}
    </div>
  );
}
