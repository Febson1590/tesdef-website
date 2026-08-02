import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://tesdef.org"),
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
  ],
  openGraph: {
    type: "website",
    siteName: "TESDEF",
    title: `TESDEF — ${SITE_NAME}`,
    description:
      "Empowering Communities. Protecting Nature. Building the Future.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b3d2e",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-offwhite text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
