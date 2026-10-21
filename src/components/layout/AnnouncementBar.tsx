import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { SiteContent } from "@/types";

type AnnouncementBarProps = {
  announcement: SiteContent["announcement"];
};

export function AnnouncementBar({ announcement }: AnnouncementBarProps) {
  return (
    <aside aria-label="Announcement" className="bg-linear-to-r from-violet via-[#6a24d6] to-[#7b2fd6] text-white">
      <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-2.5 text-center text-sm font-bold sm:text-[0.9375rem]">
        <p>
          <span className="uppercase">{announcement.text}</span>
          <span aria-hidden="true" className="mx-2">
            •
          </span>
          {announcement.detail}
        </p>
        <Button href={announcement.cta.href} variant="accent" size="sm" trailingIcon="arrow-right" className="uppercase">
          {announcement.cta.label}
        </Button>
      </Container>
    </aside>
  );
}
