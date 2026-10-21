"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type ExpandableTextProps = {
  text: string;
  /** Texts shorter than this are shown in full without a toggle. */
  minLengthToClamp?: number;
  className?: string;
};

/** Clamped paragraph with a "Read more" / "Read less" toggle. The full text is always in the DOM. */
export function ExpandableText({ text, minLengthToClamp = 160, className }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const clampable = text.length > minLengthToClamp;

  return (
    <div className={className}>
      <p className={cn("text-[0.9375rem] leading-[1.45] text-ink", clampable && !expanded && "line-clamp-4")}>{text}</p>
      {clampable ? (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 py-1 text-sm text-muted transition-colors hover:text-brand"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
