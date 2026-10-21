import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { SiteContent } from "@/types";

type AnnouncementBarProps = {
  announcement: SiteContent["announcement"];
};

/** Sticky promo strip, matching the reference: it stays pinned while the header scrolls away. */
export function AnnouncementBar({ announcement }: AnnouncementBarProps) {
  return (
    <aside
      id="top"
      aria-label="Announcement"
      className="sticky top-0 z-50 h-(--announcement-height) bg-linear-to-r from-violet via-[#6a24d6] to-[#7b2fd6] text-white"
    >
      <Container className="flex h-full flex-wrap content-center items-center justify-center gap-x-4 gap-y-1.5 text-center text-[0.8125rem] leading-snug font-bold sm:text-[0.9375rem]">
        <p>
          <span className="uppercase">{announcement.text}</span>
          <span aria-hidden="true" className="mx-2">
            •
          </span>
          {announcement.detail}
        </p>
        <Button
          href={announcement.cta.href}
          variant="accent"
          size="sm"
          trailingIcon="arrow-right"
          className="h-8 uppercase sm:h-9"
        >
          {announcement.cta.label}
        </Button>
      </Container>
    </aside>
  );
}
