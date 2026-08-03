import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { ORG, CONTACT } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const SITE_NAME =
  "Tamarakuro Environmental and Sustainable Development Foundation";

const FALLBACK_SITE_URL = "https://tesdef-website.vercel.app";

function resolveSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      return new URL(raw);
    } catch {
      // fall through to the fallback below
    }
  }
  return new URL(FALLBACK_SITE_URL);
}

export const metadata: Metadata = {
  metadataBase: resolveSiteUrl(),
  title: {
    default: `TESDEF — ${SITE_NAME}`,
    template: "%s | TESDEF",
  },
  description:
    "TESDEF advances environmental sustainability, youth empowerment, digital innovation and inclusive community development to create resilient communities and lasting impact.",
  keywords: [
    "TESDEF",
    "environmental sustainability",
    "youth empowerment",
    "digital innovation",
    "digital inclusion",
    "climate resilience",
    "community development",
    "sustainable livelihoods",
    "education and capacity building",
    "advocacy",
    "Niger Delta",
    "Gbaramatu Kingdom",
    "non-profit",
    "NGO",
  ],
  openGraph: {
    type: "website",
    siteName: "TESDEF",
    title: `TESDEF — ${SITE_NAME}`,
    description:
      "Empowering Communities. Protecting Nature. Building the Future.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b3d2e",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

// Organization structured data (SEO) — built from the verified contact info.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: ORG.name,
  alternateName: ORG.shortName,
  url: FALLBACK_SITE_URL,
  slogan: ORG.motto,
  founder: { "@type": "Person", name: ORG.founderName, jobTitle: ORG.founderTitle },
  ...(CONTACT.email ? { email: CONTACT.email } : {}),
  ...(CONTACT.phone ? { telephone: CONTACT.phone } : {}),
  ...(CONTACT.address
    ? {
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 3 Asupa Close, Edjeba",
          addressLocality: "Warri",
          addressRegion: "Delta State",
          addressCountry: "NG",
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-offwhite text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
