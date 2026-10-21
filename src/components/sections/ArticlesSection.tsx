import { ArticleCard } from "@/components/cards/ArticleCard";
import { FeaturedArticleCard } from "@/components/cards/FeaturedArticleCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ArticlesContent } from "@/types";

type ArticlesSectionProps = {
  articles: ArticlesContent;
};

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <section id="articles" aria-labelledby="articles-title" className="py-16 sm:py-24">
      <Container>
        <SectionHeading id="articles-title" title={articles.title} highlight={articles.highlight} />
        <div className="mt-10">
          <FeaturedArticleCard article={articles.featured} />
        </div>
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.items.map((article) => (
            <li key={article.id}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
