import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { PreorderProduct } from "@/types";

type ProductCardProps = {
  product: PreorderProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col items-center rounded-card bg-white px-6 pt-8 pb-7 text-center shadow-card ring-1 ring-line/60 transition-shadow duration-300 hover:shadow-lift sm:px-10">
      <h3 className="text-2xl font-bold text-violet">{product.title}</h3>
      <p className="mt-2 text-sm text-body">
        {product.releaseLabel} <strong className="font-bold text-violet">{product.releaseDate}</strong>
      </p>
      <Image
        src={product.image.src}
        alt={product.image.alt}
        width={product.image.width}
        height={product.image.height}
        sizes="(min-width: 768px) 20rem, 80vw"
        className="my-6 h-40 w-full max-w-80 object-contain sm:h-44"
      />
      <Button href={product.cta.href} variant="violet" size="lg" trailingIcon="chevron-right">
        {product.cta.label}
      </Button>
      <p className="mt-5 flex items-center gap-2 text-[0.8125rem] font-semibold text-ink">
        <Icon name="check" className="size-4 shrink-0 text-amber" strokeWidth={3} />
        {product.guarantee}
      </p>
    </article>
  );
}
