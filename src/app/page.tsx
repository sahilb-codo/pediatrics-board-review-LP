import { ApproachSection } from "@/components/sections/ApproachSection";
import { AsSeenOn } from "@/components/sections/AsSeenOn";
import { Benefits } from "@/components/sections/Benefits";
import { Hero } from "@/components/sections/Hero";
import { PreorderSection } from "@/components/sections/PreorderSection";
import { QuickPaths } from "@/components/sections/QuickPaths";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { courses, features, hero } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero hero={hero} />
      <PreorderSection preorder={courses.preorder} />
      <TrustedBy trustedBy={features.trustedBy} />
      <QuickPaths paths={courses.quickPaths} />
      <ApproachSection approach={features.approach} />
      <AsSeenOn asSeenOn={features.asSeenOn} />
      <WhoWeHelp audiences={courses.audiences} />
      <Benefits benefits={features.benefits} />
    </>
  );
}
