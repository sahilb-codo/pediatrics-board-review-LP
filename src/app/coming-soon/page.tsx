import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Coming Soon | ${site.name}`,
  description: "This page is a placeholder in the demo website.",
  robots: { index: false },
};

/** Single destination for links to pages that are not part of this static demo. */
export default function ComingSoonPage() {
  return (
    <section className="bg-lilac">
      <Container className="flex flex-col items-center gap-6 py-24 text-center sm:py-32">
        <p className="text-sm font-bold tracking-[0.12em] text-violet uppercase">Demo placeholder</p>
        <h1 className="text-3xl font-medium sm:text-5xl">This page is coming soon</h1>
        <p className="max-w-xl">
          This static demo only includes the homepage. Links to course pages, checkout, articles, account login and
          legal pages lead here.
        </p>
        <Button href="/" trailingIcon="chevron-right">
          Back to homepage
        </Button>
      </Container>
    </section>
  );
}
