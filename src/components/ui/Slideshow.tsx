"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type Slide = {
  id: string;
  /** Short name used in the dot button labels. */
  label: string;
  content: ReactNode;
};

type SlideshowProps = {
  label: string;
  /** Singular noun for one slide, used in control labels (e.g. "testimonial"). */
  itemName?: string;
  slides: Slide[];
};

/** One-at-a-time slideshow with previous/next arrows and dot navigation. No autoplay. */
export function Slideshow({ label, itemName = "slide", slides }: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const count = slides.length;
  const go = (index: number) => setCurrent((index + count) % count);

  const arrowClasses =
    "grid size-11 shrink-0 place-items-center rounded-full bg-white text-navy shadow-card transition-colors hover:bg-brand hover:text-white";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="flex flex-col items-center">
      <div className="flex w-full items-center gap-3 sm:gap-6">
        <button type="button" className={arrowClasses} aria-label={`Previous ${itemName}`} onClick={() => go(current - 1)}>
          <Icon name="chevron-left" />
        </button>
        {/* All slides share one grid cell so the height fits the tallest slide and the arrows never move. */}
        <div aria-live="polite" className="grid min-w-0 flex-1">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              inert={index !== current}
              className={cn("[grid-area:1/1]", index !== current && "invisible")}
            >
              {slide.content}
            </div>
          ))}
        </div>
        <button type="button" className={arrowClasses} aria-label={`Next ${itemName}`} onClick={() => go(current + 1)}>
          <Icon name="chevron-right" />
        </button>
      </div>
      <div className="mt-8 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show ${itemName} from ${slide.label}`}
            aria-current={index === current ? "true" : undefined}
            onClick={() => go(index)}
            className="grid size-6 place-items-center"
          >
            <span
              className={cn(
                "h-2.5 rounded-full transition-all",
                index === current ? "w-6 bg-brand" : "w-2.5 bg-white ring-1 ring-brand/40",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
