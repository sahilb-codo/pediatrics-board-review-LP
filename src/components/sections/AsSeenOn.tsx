import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { FeaturesContent } from "@/types";

type AsSeenOnProps = {
  asSeenOn: FeaturesContent["asSeenOn"];
};

export function AsSeenOn({ asSeenOn }: AsSeenOnProps) {
  return (
    <section aria-labelledby="as-seen-on-title" className="bg-navy py-12 text-white sm:py-14">
      <Container className="flex flex-col items-center gap-8 text-center">
        <h2 id="as-seen-on-title" className="text-xl leading-[1.5] font-semibold text-sky">
          {asSeenOn.title}
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {asSeenOn.logos.map((logo) => (
            <li key={logo.src}>
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-8 w-auto sm:h-11" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
