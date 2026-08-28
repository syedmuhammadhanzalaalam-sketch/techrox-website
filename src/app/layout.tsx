import type { Metadata, Viewport } from "next";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";
import { GridMotionBackground } from "@/components/site/GridMotionBackground";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Preloader } from "@/components/site/Preloader";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | TechRox",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "IT company",
    "software development company",
    "AI solutions",
    "AI agents",
    "business automation",
    "cloud solutions",
    "web development company",
    "digital marketing agency",
    "custom software development",
    "enterprise AI",
  ],
  authors: [{ name: "TechRox" }],
  creator: "TechRox",
  publisher: "TechRox",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "TechRox logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechRox",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  description: SITE_DESCRIPTION,
  foundingDate: "2019",
  sameAs: [
    "https://www.instagram.com/techroxofficial_01/",
    "https://www.tiktok.com/@techroxofficial_01",
    "https://www.facebook.com/profile.php?id=61592531301761",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "techrox01@gmail.com",
    telephone: "+1-415-555-0132",
    contactType: "sales",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <GridMotionBackground />
        <Preloader />
        <Navbar />
        <main className="pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
