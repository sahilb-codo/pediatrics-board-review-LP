import { ProductCard } from "@/components/cards/ProductCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoursesContent } from "@/types";

type PreorderSectionProps = {
  preorder: CoursesContent["preorder"];
};

export function PreorderSection({ preorder }: PreorderSectionProps) {
  return (
    <section id="preorder" aria-labelledby="preorder-title" className="bg-linear-to-b from-[#f5ebfd] to-white py-16 sm:py-20">
      <Container className="flex flex-col items-center">
        <SectionHeading
          id="preorder-title"
          eyebrow={preorder.eyebrow}
          title={preorder.title}
          highlight={preorder.highlight}
          align="center"
          weight="bold"
          titleClassName="mt-4 text-navy"
        />
        <p className="mt-5 rounded-full border border-amber/60 bg-cream px-5 py-2 text-center text-sm font-semibold text-ink sm:text-base">
          {preorder.note} <span className="font-bold text-orange">{preorder.noteHighlight}</span>
        </p>
        <div className="mt-10 grid w-full max-w-4xl gap-6 md:grid-cols-2">
          {preorder.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
