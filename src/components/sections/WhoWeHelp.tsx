import { AudienceCard } from "@/components/cards/AudienceCard";
import { Container } from "@/components/ui/Container";
import { DecorativeArcs } from "@/components/ui/DecorativeArcs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoursesContent } from "@/types";

type WhoWeHelpProps = {
  audiences: CoursesContent["audiences"];
};

export function WhoWeHelp({ audiences }: WhoWeHelpProps) {
  // Audiences with artwork are presented as large feature cards; the rest as compact cards.
  const featured = audiences.items.filter((item) => item.image);
  const compact = audiences.items.filter((item) => !item.image);

  return (
    <section id="who-we-help" aria-labelledby="who-we-help-title" className="relative overflow-hidden py-16 sm:py-24">
      <DecorativeArcs className="absolute top-8 -right-16 hidden w-96 text-lilac md:block" count={7} />
      <Container className="relative">
        <SectionHeading
          id="who-we-help-title"
          title={audiences.title}
          highlight={audiences.highlight}
          description={audiences.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((audience) => (
            <AudienceCard key={audience.id} audience={audience} />
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:lg:col-span-1">
          {compact.map((audience) => (
            <AudienceCard key={audience.id} audience={audience} />
          ))}
        </div>
      </Container>
    </section>
  );
}
