import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { ProgrammesSection } from "@/components/sections/ProgrammesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { GetInvolvedSection } from "@/components/sections/GetInvolvedSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

// Render on demand so the homepage always reflects the current published
// database content (featured initiatives, programmes, news, partners) rather
// than a statically cached snapshot.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "TESDEF — Tamarakuro Environmental and Sustainable Development Foundation",
  description:
    "TESDEF advances environmental sustainability, youth empowerment, digital innovation and inclusive community development to create resilient communities and lasting impact.",
};

export default function Home() {
  return (
    <>
      {/* 1 */}   <Hero />
      {/* 2 */}   <IntroSection />          {/* About TESDEF */}
      {/* 3 */}   <ProgrammesSection />     {/* Programme Areas */}
      {/* 4 */}   <ProjectsSection />       {/* Featured Projects / Initiatives */}
      {/* 5 */}   <ImpactSection />         {/* Impact */}
      {/* 6 */}   <NewsSection />           {/* Latest News */}
      {/* 7 */}   <GetInvolvedSection />    {/* Get Involved + Support TESDEF */}
      {/* + */}   <HowItWorksSection />     {/* How TESDEF works */}
      {/* + */}   <TrustSection />          {/* Accountability & transparency */}
      {/* 8 */}   <PartnersSection />       {/* Partners (hidden when none) */}
    </>
  );
}
