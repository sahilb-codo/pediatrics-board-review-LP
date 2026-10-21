import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { PreorderProduct } from "@/types";

type ProductCardProps = {
  product: PreorderProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col items-center rounded-card bg-white px-6 pt-8 pb-7 text-center shadow-card ring-1 ring-line/60 transition-shadow duration-300 hover:shadow-lift sm:px-5">
      <h3 className="text-2xl leading-[1.5] font-extrabold text-plum sm:text-[1.6875rem]">{product.title}</h3>
      <p className="mt-2 text-base text-[#2a2540]">
        {product.releaseLabel} <strong className="font-bold text-plum">{product.releaseDate}</strong>
      </p>
      <Image
        src={product.image.src}
        alt={product.image.alt}
        width={product.image.width}
        height={product.image.height}
        sizes="(min-width: 768px) 20rem, 80vw"
        className="my-6 h-40 w-full max-w-80 object-contain sm:h-44"
      />
      <Button href={product.cta.href} variant="violet" size="xl" weight="extrabold" trailingIcon="chevron-right">
        {product.cta.label}
      </Button>
      {/* Icon stays inline with the text so it sits beside the first word even when the line wraps. */}
      <p className="mt-5 text-[0.9375rem] font-bold text-[#2a2540]">
        <Icon name="check" className="mr-1.5 inline size-4 align-[-0.15em] text-amber" strokeWidth={3} />
        {product.guarantee}
      </p>
    </article>
  );
}
