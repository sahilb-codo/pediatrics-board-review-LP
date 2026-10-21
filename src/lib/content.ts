/*
 * Typed access to the local JSON content.
 *
 * Each export is annotated with its content type so TypeScript checks the JSON
 * shape at compile time. JSON imports widen string literals to `string`, so
 * fields typed as string unions are validated with `oneOf`, which throws during
 * the static build if a value is not allowed.
 */
import articlesJson from "@/data/articles.json";
import coursesJson from "@/data/courses.json";
import ctaJson from "@/data/cta.json";
import featuresJson from "@/data/features.json";
import footerJson from "@/data/footer.json";
import founderJson from "@/data/founder.json";
import heroJson from "@/data/hero.json";
import navigationJson from "@/data/navigation.json";
import siteJson from "@/data/site.json";
import testimonialsJson from "@/data/testimonials.json";
import {
  audienceTones,
  featureIcons,
  socialPlatforms,
  type ArticlesContent,
  type CoursesContent,
  type CtaContent,
  type FeaturesContent,
  type FooterContent,
  type FounderContent,
  type HeroContent,
  type NavigationContent,
  type SiteContent,
  type TestimonialsContent,
} from "@/types";

function oneOf<const T extends readonly string[]>(allowed: T, value: string, field: string): T[number] {
  if (!(allowed as readonly string[]).includes(value)) {
    throw new Error(`Invalid ${field} "${value}". Expected one of: ${allowed.join(", ")}`);
  }
  return value as T[number];
}

export const site: SiteContent = siteJson;

export const navigation: NavigationContent = navigationJson;

export const hero: HeroContent = heroJson;

export const courses: CoursesContent = {
  ...coursesJson,
  audiences: {
    ...coursesJson.audiences,
    items: coursesJson.audiences.items.map((item) => ({
      ...item,
      tone: oneOf(audienceTones, item.tone, `audience tone for "${item.id}"`),
    })),
  },
};

export const features: FeaturesContent = {
  ...featuresJson,
  benefits: {
    ...featuresJson.benefits,
    items: featuresJson.benefits.items.map((item) => ({
      ...item,
      icon: oneOf(featureIcons, item.icon, `benefit icon for "${item.id}"`),
    })),
  },
};

export const testimonials: TestimonialsContent = testimonialsJson;

export const articles: ArticlesContent = articlesJson;

export const founder: FounderContent = founderJson;

export const cta: CtaContent = ctaJson;

export const footer: FooterContent = {
  ...footerJson,
  social: footerJson.social.map((link) => ({
    ...link,
    platform: oneOf(socialPlatforms, link.platform, `social platform for "${link.label}"`),
  })),
};
