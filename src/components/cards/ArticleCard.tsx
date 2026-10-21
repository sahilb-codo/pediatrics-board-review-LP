import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types";

type ArticleCardProps = {
  article: Article;
};

/** Whole card is clickable via a stretched title link, keeping a single link per card for screen readers. */
export function ArticleCard({ article }: ArticleCardProps) {
  const { image } = article;

  return (
    <article className="group relative flex h-full flex-col">
      <div className="overflow-hidden rounded-xl bg-surface">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
          className="aspect-[3/2] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-4 text-xs font-semibold tracking-wide text-violet uppercase">{article.category}</p>
      <h3 className="mt-2 text-base leading-snug font-bold text-ink">
        <Link
          href={article.href}
          className="after:absolute after:inset-0 after:rounded-xl group-hover:text-brand focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:outline-offset-4 focus-visible:after:outline-brand"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-body">{article.excerpt}</p>
    </article>
  );
}
