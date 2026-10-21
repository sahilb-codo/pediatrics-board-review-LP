import { ApproachSection } from "@/components/sections/ApproachSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { AsSeenOn } from "@/components/sections/AsSeenOn";
import { Benefits } from "@/components/sections/Benefits";
import { FinalCta } from "@/components/sections/FinalCta";
import { FounderSection } from "@/components/sections/FounderSection";
import { FreeResources } from "@/components/sections/FreeResources";
import { Hero } from "@/components/sections/Hero";
import { PreorderSection } from "@/components/sections/PreorderSection";
import { QuickPaths } from "@/components/sections/QuickPaths";
import { QuizCta } from "@/components/sections/QuizCta";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { TestimonialSpotlight } from "@/components/sections/TestimonialSpotlight";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { articles, courses, cta, features, founder, hero, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero hero={hero} />
      <PreorderSection preorder={courses.preorder} />
      <TrustedBy trustedBy={features.trustedBy} />
      <QuickPaths paths={courses.quickPaths} />
      <ApproachSection approach={features.approach} />
      <ReviewsSection reviews={testimonials.reviews} />
      <AsSeenOn asSeenOn={features.asSeenOn} />
      <WhoWeHelp audiences={courses.audiences} />
      <TestimonialSpotlight spotlight={testimonials.spotlight} />
      <Benefits benefits={features.benefits} />
      <QuizCta quiz={cta.quiz} />
      <FounderSection founder={founder} />
      <ArticlesSection articles={articles} />
      <FreeResources resources={cta.freeResources} />
      <FinalCta final={cta.final} />
    </>
  );
}
