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
  className?: string;
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
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      {eyebrow ? (
        <p className="flex flex-col items-center gap-3 text-sm font-bold tracking-[0.12em] text-violet uppercase sm:text-base">
          {eyebrow}
          {centered ? <span aria-hidden="true" className="h-1 w-24 rounded-full bg-amber" /> : null}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "text-3xl font-medium sm:text-4xl lg:text-[2.75rem]",
          tone === "light" && "text-white",
        )}
      >
        <HighlightText text={title} highlight={highlight} />
      </Heading>
      {description ? (
        <p className={cn("max-w-xl text-base", tone === "light" ? "text-white/80" : "text-body")}>{description}</p>
      ) : null}
    </div>
  );
}
