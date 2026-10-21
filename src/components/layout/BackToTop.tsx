import { Icon } from "@/components/ui/Icon";

/** Floating "scroll to top" button, as on the reference. A plain anchor, so it needs no client JavaScript. */
export function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed right-4 bottom-4 z-40 grid size-11 place-items-center rounded-full border-2 border-brand bg-white/90 text-brand shadow-card backdrop-blur transition-colors hover:bg-brand hover:text-white sm:right-6 sm:bottom-6"
    >
      <Icon name="arrow-up" className="size-5" />
    </a>
  );
}
