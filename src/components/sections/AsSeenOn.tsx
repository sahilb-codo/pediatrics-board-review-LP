import { Container } from "@/components/ui/Container";
import type { FeaturesContent } from "@/types";

/** Distinct type treatments so the placeholder outlet names read as separate wordmarks. */
const wordmarkStyles = [
  "font-serif text-2xl italic tracking-tight sm:text-3xl",
  "text-xl font-extrabold tracking-[0.08em] uppercase sm:text-2xl",
  "text-2xl font-light tracking-tight sm:text-3xl",
];

type AsSeenOnProps = {
  asSeenOn: FeaturesContent["asSeenOn"];
};

export function AsSeenOn({ asSeenOn }: AsSeenOnProps) {
  return (
    <section aria-labelledby="as-seen-on-title" className="bg-navy py-12 text-white sm:py-14">
      <Container className="flex flex-col items-center gap-8 text-center">
        <h2 id="as-seen-on-title" className="text-lg font-semibold text-white">
          {asSeenOn.title}
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {asSeenOn.outlets.map((outlet, index) => (
            <li key={outlet} className={wordmarkStyles[index % wordmarkStyles.length]}>
              {outlet}
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/60">{asSeenOn.note}</p>
      </Container>
    </section>
  );
}
