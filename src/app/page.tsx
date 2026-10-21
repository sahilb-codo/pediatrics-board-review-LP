import { Hero } from "@/components/sections/Hero";
import { hero } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero hero={hero} />
    </>
  );
}
