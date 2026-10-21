import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { Logo } from "@/components/layout/Logo";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { NavigationContent, SiteContent } from "@/types";

type HeaderProps = {
  site: SiteContent;
  navigation: NavigationContent;
};

export function Header({ site, navigation }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/85">
      <Container className="flex h-(--header-height) items-center justify-between gap-6">
        <Logo name={site.name} shortName={site.shortName} highlight={site.logoHighlight} tagline={site.logoTagline} />

        <nav aria-label="Main" className="hidden lg:block">
          <DesktopNavigation items={navigation.primary} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={navigation.login.href} variant="soft" className="uppercase">
            {navigation.login.label}
          </Button>
          <Button href={navigation.cta.href} className="uppercase">
            {navigation.cta.label}
          </Button>
        </div>

        <MobileNavigation items={navigation.primary} login={navigation.login} cta={navigation.cta} />
      </Container>
    </header>
  );
}
