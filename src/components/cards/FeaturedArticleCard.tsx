import Image from "next/image";
import Link from "next/link";
import { formatDate, getInitials } from "@/lib/utils";
import type { FeaturedArticle } from "@/types";

type FeaturedArticleCardProps = {
  article: FeaturedArticle;
};

export function FeaturedArticleCard({ article }: FeaturedArticleCardProps) {
  const { image } = article;

  return (
    <article className="group relative grid items-center gap-8 rounded-[2.5rem] bg-cream p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:p-10">
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 36rem, 90vw"
          className="h-auto w-full rounded-2xl"
        />
        <span className="absolute -bottom-3 left-6 rounded-md bg-aqua px-3 py-1.5 text-xs font-bold text-navy uppercase">
          {article.badge}
        </span>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-xl leading-snug font-bold text-ink uppercase sm:text-2xl">
          <Link
            href={article.href}
            className="after:absolute after:inset-0 after:rounded-[2.5rem] group-hover:text-brand focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:outline-offset-4 focus-visible:after:outline-brand"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-5 text-[0.9375rem] leading-relaxed">{article.excerpt}</p>
        <p className="mt-6 rounded bg-cream-line px-2 py-1 text-[0.6875rem] font-bold tracking-wide text-ink uppercase">
          {article.category}
        </p>
        <div className="mt-5 flex items-center gap-3 text-sm">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full bg-lilac text-xs font-bold text-violet"
          >
            {getInitials(article.author)}
          </span>
          <p className="leading-tight text-body">
            {article.author}
            <time dateTime={article.date} className="block text-muted">
              {formatDate(article.date)}
            </time>
          </p>
        </div>
      </div>
    </article>
  );
}
