import { Hero } from "@/components/sections/Hero";
import { PreorderSection } from "@/components/sections/PreorderSection";
import { QuickPaths } from "@/components/sections/QuickPaths";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { courses, hero } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero hero={hero} />
      <PreorderSection preorder={courses.preorder} />
      <QuickPaths paths={courses.quickPaths} />
      <WhoWeHelp audiences={courses.audiences} />
    </>
  );
}
