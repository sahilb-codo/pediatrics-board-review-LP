import { Container } from "@/components/ui/Container";
import type { FeaturesContent } from "@/types";

type TrustedByProps = {
  trustedBy: FeaturesContent["trustedBy"];
};

export function TrustedBy({ trustedBy }: TrustedByProps) {
  return (
    <section aria-label="Where our members trained" className="bg-white">
      <Container className="grid items-center gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
        <p className="max-w-xs text-lg leading-snug font-semibold text-ink">{trustedBy.lead}</p>
        <div className="flex flex-col gap-3 lg:items-end">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-3 lg:justify-end">
            {trustedBy.institutions.map((institution, index) => (
              <li key={institution} className="flex items-center gap-3 text-base font-bold text-teal sm:text-lg">
                {institution}
                {index < trustedBy.institutions.length - 1 ? (
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-[#c9cdd8]" />
                ) : null}
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted">{trustedBy.note}</p>
        </div>
      </Container>
    </section>
  );
}
