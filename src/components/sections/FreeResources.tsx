import Image from "next/image";
import { DemoSignupForm } from "@/components/sections/DemoSignupForm";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import type { CtaContent } from "@/types";

type FreeResourcesProps = {
  resources: CtaContent["freeResources"];
};

export function FreeResources({ resources }: FreeResourcesProps) {
  return (
    <section id="free-resources" aria-labelledby="free-resources-title" className="bg-lilac py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-5">
          <p className="text-sm font-bold tracking-[0.12em] text-violet uppercase">{resources.eyebrow}</p>
          <h2 id="free-resources-title" className="text-3xl font-semibold text-navy sm:text-4xl">
            {resources.title}
          </h2>
          <p className="max-w-xl">{resources.description}</p>
          <CheckList items={resources.resources} />
          <div className="mt-2 grid max-w-xl grid-cols-3 items-center gap-3 sm:gap-4">
            {resources.images.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 12rem, 30vw"
                className="h-auto w-full rounded-xl bg-white shadow-card"
              />
            ))}
          </div>
        </div>
        <DemoSignupForm form={resources} />
      </Container>
    </section>
  );
}
