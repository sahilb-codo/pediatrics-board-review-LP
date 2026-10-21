import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { navigation, site } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#100b47",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-dvh">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AnnouncementBar announcement={site.announcement} />
        <Header site={site} navigation={navigation} />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
