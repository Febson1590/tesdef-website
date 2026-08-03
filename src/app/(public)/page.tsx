import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProgrammesSection } from "@/components/sections/ProgrammesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { GetInvolvedSection } from "@/components/sections/GetInvolvedSection";
import { DonateCtaSection } from "@/components/sections/DonateCtaSection";
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
      <ProgrammesSection />
      <ProjectsSection />
      <ImpactSection />
      <HowItWorksSection />
      <StoriesSection />
      <NewsSection />
      <GetInvolvedSection />
      <DonateCtaSection />
      <TrustSection />
      <PartnersSection />
    </>
  );
}
