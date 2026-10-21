import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { QuickPath } from "@/types";

type QuickPathsProps = {
  paths: QuickPath[];
};

/** Three-column strip that routes visitors to the right audience section. */
export function QuickPaths({ paths }: QuickPathsProps) {
  return (
    <section aria-label="Find your path" className="bg-[#ecdcf6]">
      <Container>
        <ul className="grid divide-y divide-[#d6bdea] md:grid-cols-3 md:divide-x md:divide-y-0">
          {paths.map((path) => (
            <li key={path.id} className="flex flex-col py-6 md:px-8 md:py-8 md:first:pl-0">
              <h2 className="text-base font-semibold text-ink">{path.question}</h2>
              <p className="mt-1 text-sm text-body">{path.label}</p>
              <Link
                href={path.cta.href}
                className="group mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-brand hover:text-brand-strong"
              >
                {path.cta.label}
                <Icon
                  name="arrow-up-right"
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
