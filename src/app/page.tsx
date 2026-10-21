import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main id="main-content">
      <Container className="py-24">
        <SectionHeading
          as="h1"
          title="Pass Your Pediatric Boards With Confidence"
          highlight="Confidence"
          description="Homepage sections are added milestone by milestone."
        />
        <Button href="#main-content" trailingIcon="chevron-right" className="mt-8">
          Get Started
        </Button>
      </Container>
    </main>
  );
}
