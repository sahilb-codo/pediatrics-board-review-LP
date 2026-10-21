"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  id: string;
  /** Short name used in control labels (e.g. the reviewer's name). */
  label: string;
  content: ReactNode;
};

type CarouselProps = {
  label: string;
  /** Singular noun for one slide, used in control labels (e.g. "review"). */
  itemName: string;
  slides: CarouselSlide[];
  /**
   * Tailwind classes that set `--per-view` per breakpoint, e.g. "[--per-view:1] lg:[--per-view:4]".
   * CSS decides how many slides fit; the component reads the value to know where the end is.
   */
  perViewClassName?: string;
  /** "sides": arrows beside the slides; "below": arrows under the slides at the edges. */
  controls?: "sides" | "below";
  showDots?: boolean;
  /** Milliseconds between automatic advances; 0 disables autoplay. */
  autoplayMs?: number;
  className?: string;
};

const SWIPE_THRESHOLD = 50;

/**
 * Accessible sliding carousel: arrows loop, slides can be swiped, and autoplay pauses on hover,
 * keyboard focus, the pause button, or when the user prefers reduced motion.
 */
export function Carousel({
  label,
  itemName,
  slides,
  perViewClassName = "[--per-view:1]",
  controls = "sides",
  showDots = false,
  autoplayMs = 0,
  className,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [isPlaying, setIsPlaying] = useState(autoplayMs > 0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const count = slides.length;
  const maxIndex = Math.max(0, count - perView);
  const current = Math.min(index, maxIndex);
  const autoplayActive = autoplayMs > 0 && isPlaying && !isInteracting && !reducedMotion;

  // Track how many slides CSS currently shows (changes with breakpoints).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const read = () => {
      const value = Number.parseInt(getComputedStyle(track).getPropertyValue("--per-view"), 10);
      setPerView(Number.isFinite(value) && value > 0 ? value : 1);
    };
    read();
    const observer = new ResizeObserver(read);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!autoplayActive) return;
    const timer = window.setInterval(() => setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : i + 1)), autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplayActive, autoplayMs, maxIndex]);

  const goTo = (target: number) => setIndex(target < 0 ? maxIndex : target > maxIndex ? 0 : target);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    pointerStartX.current = event.clientX;
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    // Once the gesture is clearly a horizontal drag, capture the pointer so the release is still
    // seen if it ends outside the viewport. Capturing earlier would retarget clicks on slide buttons.
    const start = pointerStartX.current;
    const target = event.currentTarget;
    if (start !== null && Math.abs(event.clientX - start) > 10 && !target.hasPointerCapture(event.pointerId)) {
      target.setPointerCapture(event.pointerId);
      // Avoid selecting text while swiping; selection is restored when the gesture ends.
      target.style.userSelect = "none";
      window.getSelection()?.removeAllRanges();
    }
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.userSelect = "";
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD) goTo(current + (delta < 0 ? 1 : -1));
  }

  const arrowClasses =
    "grid size-11 shrink-0 place-items-center rounded-full bg-white text-navy shadow-card ring-1 ring-line transition-colors hover:bg-brand hover:text-white";
  const prevButton = (
    <button type="button" className={arrowClasses} aria-label={`Previous ${itemName}`} onClick={() => goTo(current - 1)}>
      <Icon name="chevron-left" />
    </button>
  );
  const nextButton = (
    <button type="button" className={arrowClasses} aria-label={`Next ${itemName}`} onClick={() => goTo(current + 1)}>
      <Icon name="chevron-right" />
    </button>
  );

  const viewport = (
    <div
      className="min-w-0 flex-1 touch-pan-y overflow-hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={(event) => {
        pointerStartX.current = null;
        event.currentTarget.style.userSelect = "";
      }}
      // Native image dragging would cancel the pointer gesture before a swipe completes.
      onDragStart={(event) => event.preventDefault()}
    >
      <div
        ref={trackRef}
        aria-live={autoplayActive ? "off" : "polite"}
        className={cn("-mx-2 flex transition-transform duration-500 ease-out motion-reduce:transition-none", perViewClassName)}
        style={{ transform: `translateX(calc(${-current} * 100% / var(--per-view)))` } as CSSProperties}
      >
        {slides.map((slide, slideIndex) => {
          const visible = slideIndex >= current && slideIndex < current + perView;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} of ${count}`}
              inert={!visible}
              className="shrink-0 basis-[calc(100%/var(--per-view))] px-2"
            >
              {slide.content}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={cn("flex flex-col", className)}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsInteracting(false);
      }}
    >
      {controls === "sides" ? (
        <div className="flex items-center gap-3 sm:gap-6">
          {prevButton}
          {viewport}
          {nextButton}
        </div>
      ) : (
        viewport
      )}

      <div className={cn("mt-6 flex items-center gap-4", controls === "below" ? "justify-between" : "justify-center")}>
        {controls === "below" ? prevButton : null}
        <div className="flex items-center gap-3">
          {showDots ? (
            <div className="flex gap-1">
              {Array.from({ length: maxIndex + 1 }, (_, dot) => (
                <button
                  key={slides[dot].id}
                  type="button"
                  aria-label={`Show ${itemName} from ${slides[dot].label}`}
                  aria-current={dot === current ? "true" : undefined}
                  onClick={() => goTo(dot)}
                  className="grid size-6 place-items-center"
                >
                  <span
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      dot === current ? "w-6 bg-brand" : "w-2.5 bg-white ring-1 ring-brand/40",
                    )}
                  />
                </button>
              ))}
            </div>
          ) : null}
          {autoplayMs > 0 && !reducedMotion ? (
            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? `Pause automatic ${itemName} rotation` : `Play automatic ${itemName} rotation`}
              className="grid size-8 place-items-center rounded-full text-navy/70 ring-1 ring-navy/15 transition-colors hover:bg-white hover:text-navy"
            >
              <Icon name={isPlaying ? "pause" : "play"} className="size-3.5" strokeWidth={2.5} />
            </button>
          ) : null}
        </div>
        {controls === "below" ? nextButton : null}
      </div>
    </div>
  );
}
