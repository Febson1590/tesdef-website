import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { ProgrammesSection } from "@/components/sections/ProgrammesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { GetInvolvedSection } from "@/components/sections/GetInvolvedSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export const metadata: Metadata = {
  title: "TESDEF — Tamarakuro Environmental and Sustainable Development Foundation",
  description:
    "TESDEF advances environmental sustainability, youth empowerment, digital innovation and inclusive community development to create resilient communities and lasting impact.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ProgrammesSection />
      <ProjectsSection />
      <HowItWorksSection />
      <NewsSection />
      <GetInvolvedSection />
      <TrustSection />
      <PartnersSection />
    </>
  );
}
