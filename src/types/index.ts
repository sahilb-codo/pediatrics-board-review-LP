/* Content types for the local JSON files in src/data. */

export type LinkItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/* site.json */
export type SiteContent = {
  name: string;
  shortName: string;
  /** Part of `shortName` rendered in the accent color in the logo. */
  logoHighlight: string;
  logoTagline: string;
  title: string;
  description: string;
  demoNotice: string;
  announcement: {
    text: string;
    detail: string;
    cta: LinkItem;
  };
};

/* navigation.json */
export type NavChildItem = LinkItem & {
  description: string;
};

export type NavItem =
  | (LinkItem & { children?: undefined })
  | { label: string; href?: undefined; children: NavChildItem[] };

export type NavigationContent = {
  primary: NavItem[];
  login: LinkItem;
  cta: LinkItem;
};

/* hero.json */
export type HeroHighlight = {
  lead: string;
  emphasis: string;
};

export type HeroContent = {
  title: string;
  description: string;
  highlights: HeroHighlight[];
  cta: LinkItem;
  guarantee: {
    /** Decorative seal; the adjacent text carries the meaning, so `alt` may be empty. */
    image: ImageAsset;
    title: string;
    highlight: string;
  };
  visual: {
    image: ImageAsset;
    greeting: string;
    message: string;
    caption: string;
    captionHighlight: string;
  };
};

/* courses.json */
export type PreorderProduct = {
  id: string;
  title: string;
  releaseLabel: string;
  releaseDate: string;
  image: ImageAsset;
  cta: LinkItem;
  guarantee: string;
};

export type QuickPath = {
  id: string;
  question: string;
  label: string;
  cta: LinkItem;
};

export const audienceTones = ["lavender", "sky", "neutral"] as const;
export type AudienceTone = (typeof audienceTones)[number];

export type Audience = {
  id: string;
  title: string;
  tone: AudienceTone;
  image?: ImageAsset;
  points: string[];
  cta: LinkItem;
};

export type CoursesContent = {
  preorder: {
    eyebrow: string;
    title: string;
    highlight: string;
    note: string;
    noteHighlight: string;
    products: PreorderProduct[];
  };
  quickPaths: QuickPath[];
  audiences: {
    title: string;
    highlight: string;
    description: string;
    items: Audience[];
  };
};

/* features.json */
export const featureIcons = ["clock", "puzzle", "rocket", "shield", "book", "sparkle"] as const;
export type FeatureIcon = (typeof featureIcons)[number];

export type Benefit = {
  id: string;
  icon: FeatureIcon;
  title: string;
  description: string;
};

export type FeaturesContent = {
  trustedBy: {
    lead: string;
    institutions: string[];
    note: string;
  };
  approach: {
    title: string;
    highlight: string;
    paragraphs: string[];
    closing: string;
    cta: LinkItem;
    image: ImageAsset;
  };
  asSeenOn: {
    title: string;
    outlets: string[];
    note: string;
  };
  benefits: {
    title: string;
    highlight: string;
    items: Benefit[];
  };
};

/* testimonials.json */
export type Review = {
  id: string;
  name: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  rating: number;
  text: string;
};

export type Testimonial = {
  id: string;
  headline: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type TestimonialsContent = {
  disclaimer: string;
  reviews: {
    title: string;
    highlight: string;
    sourceLabel: string;
    badge: string;
    items: Review[];
  };
  spotlight: {
    title: string;
    items: Testimonial[];
  };
};

/* articles.json */
export type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
};

export type FeaturedArticle = Article & {
  badge: string;
  author: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  image: ImageAsset;
};

export type ArticlesContent = {
  title: string;
  highlight: string;
  featured: FeaturedArticle;
  items: Article[];
};

/* founder.json */
export type FounderContent = {
  tagline: string;
  title: string;
  name: string;
  bio: string;
  note: string;
  cta: LinkItem;
  image: ImageAsset;
};

/* cta.json */
export type CtaContent = {
  quiz: {
    title: string;
    highlight: string;
    description: string;
    cta: LinkItem;
    image: ImageAsset;
  };
  freeResources: {
    eyebrow: string;
    title: string;
    description: string;
    fields: {
      name: string;
      email: string;
    };
    submitLabel: string;
    demoMessage: string;
    resources: string[];
  };
  final: {
    title: string;
    description: string;
    cta: LinkItem;
  };
};

/* footer.json */
export const socialPlatforms = ["facebook", "x", "linkedin", "instagram", "youtube"] as const;
export type SocialPlatform = (typeof socialPlatforms)[number];

export type SocialLink = LinkItem & {
  platform: SocialPlatform;
};

export type FooterColumn = {
  title: string;
  links: LinkItem[];
};

export type FooterContent = {
  description: string;
  contact: {
    label: string;
    email: string;
  };
  columns: FooterColumn[];
  social: SocialLink[];
  legal: {
    copyright: string;
    links: LinkItem[];
  };
};
