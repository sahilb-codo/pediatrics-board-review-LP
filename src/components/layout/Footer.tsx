import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { FooterContent, SiteContent } from "@/types";

type FooterProps = {
  site: SiteContent;
  footer: FooterContent;
};

const linkClasses = "inline-block py-1 text-sm text-body transition-colors hover:text-brand";

export function Footer({ site, footer }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-line bg-surface-strong">
      <Container className="pt-14 pb-8 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_3fr] lg:gap-12">
          <div className="flex flex-col items-start gap-5">
            <Logo name={site.name} shortName={site.shortName} highlight={site.logoHighlight} tagline={site.logoTagline} />
            <p className="max-w-xs text-sm">{footer.description}</p>
            <div className="text-sm">
              <p className="font-semibold text-ink">{footer.contact.label}</p>
              <a
                href={`mailto:${footer.contact.email}`}
                className="inline-flex items-center gap-2 py-1 text-brand hover:text-brand-strong"
              >
                <Icon name="mail" className="size-4" />
                {footer.contact.email}
              </a>
            </div>
            <ul className="flex gap-2" aria-label="Social media">
              {footer.social.map((social) => (
                <li key={social.platform}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full bg-white text-navy ring-1 ring-line transition-colors hover:bg-brand hover:text-white"
                  >
                    <SocialIcon platform={social.platform} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 xl:grid-cols-5">
            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="text-sm font-bold tracking-wide text-ink uppercase">{column.title}</h2>
                <ul className="mt-3 flex flex-col gap-1.5">
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
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#dedede] pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-muted">{footer.legal.copyright}</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.legal.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#top" className="inline-flex items-center gap-1.5 py-1 font-medium text-brand hover:text-brand-strong">
                Back to top
                <Icon name="arrow-up" className="size-4" />
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-6 text-xs text-muted">{site.demoNotice}</p>
      </Container>
    </footer>
  );
}
