import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DecorativeArcs } from "@/components/ui/DecorativeArcs";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { CtaContent, FooterContent, SiteContent } from "@/types";

type FooterProps = {
  site: SiteContent;
  footer: FooterContent;
  cta: CtaContent["final"];
};

const linkClasses = "inline-block py-0.5 text-[0.9375rem] leading-[1.8] text-white transition-colors hover:text-lavender";
const legalLinkClasses = "transition-colors hover:text-white";

/** Dark footer matching the reference: closing call to action, link columns and a logo/legal row. */
export function Footer({ site, footer, cta }: FooterProps) {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-white">
      <section aria-labelledby="footer-cta-title" className="relative">
        <DecorativeArcs
          className="absolute -top-6 left-1/2 w-56 -translate-x-1/2 text-white/6 sm:w-72"
          count={6}
        />
        <Container className="relative flex flex-col items-center gap-5 pt-16 pb-14 text-center sm:pt-20">
          <h2 id="footer-cta-title" className="text-4xl leading-[1.5] font-bold text-lavender sm:text-[3.125rem]">
            {cta.title}
          </h2>
          <p className="max-w-3xl text-[1.0625rem] text-white">{cta.description}</p>
          <Button
            href={cta.cta.href}
            size="lg"
            trailingIcon="chevron-right"
            iconInCircle
            className="mt-6 h-14 pr-2.5 pl-6 shadow-[0_8px_30px_rgb(177_64_236/0.35)]"
          >
            {cta.cta.label}
          </Button>
        </Container>
      </section>

      <Container className="relative pt-8 pb-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="text-xl font-bold text-lavender">{column.title}</h2>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkClasses}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-between">
            <Logo name={site.name} logo={footer.logo} className="[&_img]:h-14" />
            <div className="flex flex-col items-center gap-3 text-sm font-light text-white/38 md:items-end">
              <ul className="flex gap-2" aria-label="Social media">
                {footer.social.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="grid size-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-brand"
                    >
                      <SocialIcon platform={social.platform} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-end">
                <span>{footer.legal.notice}</span>
                {footer.legal.links.map((link) => (
                  <span key={link.label} className="flex items-center gap-2">
                    <span aria-hidden="true">|</span>
                    <Link href={link.href} className={legalLinkClasses}>
                      {link.label}
                    </Link>
                  </span>
                ))}
              </p>
              <p className="text-center md:text-right">{footer.legal.copyright}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
