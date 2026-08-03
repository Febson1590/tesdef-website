import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
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
    "TESDEF promotes environmental sustainability, youth empowerment, digital innovation and community development across Gbaramatu Kingdom, the Niger Delta and beyond.",
  keywords: [
    "TESDEF",
    "environmental sustainability",
    "Niger Delta",
    "Gbaramatu Kingdom",
    "youth empowerment",
    "climate resilience",
    "community development",
    "non-profit",
    "NGO",
    "reforestation",
    "digital inclusion",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-offwhite text-ink">
        {children}
      </body>
    </html>
  );
}
