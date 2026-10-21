"use client";

import { Children, useRef, useState, type ReactNode, type UIEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type ScrollCarouselProps = {
  label: string;
  children: ReactNode;
  /** Classes for each slide wrapper; controls how many slides are visible. */
  itemClassName?: string;
};

/**
 * Horizontally scrolling list with scroll-snap. Works natively with touch and trackpads;
 * the previous/next buttons scroll by one viewport of the track.
 */
export function ScrollCarousel({ label, children, itemClassName }: ScrollCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });
  const trackId = `carousel-${label.toLowerCase().replace(/\W+/g, "-")}`;

  function handleScroll(event: UIEvent<HTMLUListElement>) {
    const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
    setEdges({ atStart: scrollLeft <= 4, atEnd: scrollLeft + clientWidth >= scrollWidth - 4 });
  }

  function scrollByPage(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.9, behavior: "smooth" });
  }

  const buttonClasses =
    "grid size-10 place-items-center rounded-full bg-white text-navy shadow-card ring-1 ring-line transition-colors hover:bg-lilac disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <ul
        id={trackId}
        ref={trackRef}
        onScroll={handleScroll}
        tabIndex={0}
        aria-label={`${label}, scroll horizontally`}
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pt-1 pb-4 [scrollbar-width:thin] sm:-mx-6 sm:scroll-px-6 sm:px-6"
      >
        {Children.map(children, (child) => (
          <li className={cn("relative shrink-0 snap-start", itemClassName)}>{child}</li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center gap-3 sm:justify-end">
        <button
          type="button"
          className={buttonClasses}
          aria-controls={trackId}
          aria-label={`Previous ${label.toLowerCase()}`}
          disabled={edges.atStart}
          onClick={() => scrollByPage(-1)}
        >
          <Icon name="chevron-left" />
        </button>
        <button
          type="button"
          className={buttonClasses}
          aria-controls={trackId}
          aria-label={`Next ${label.toLowerCase()}`}
          disabled={edges.atEnd}
          onClick={() => scrollByPage(1)}
        >
          <Icon name="chevron-right" />
        </button>
      </div>
    </div>
  );
}
