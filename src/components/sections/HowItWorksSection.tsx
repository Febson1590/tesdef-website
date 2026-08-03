import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Listen to communities",
    description:
      "Every project begins with deep community consultation. We ask, we listen, and we co-design solutions with the people who will use them — not for them.",
  },
  {
    step: "02",
    title: "Build with local experts",
    description:
      "Our programmes are designed and delivered by people from or deeply rooted in the communities we serve, supported by national and international technical expertise.",
  },
  {
    step: "03",
    title: "Implement transparently",
    description:
      "We share our budgets, timelines, and progress updates openly. Community members, donors, and partners can see exactly how resources are used.",
  },
  {
    step: "04",
    title: "Measure and learn",
    description:
      "We aim to track outcomes, celebrate what works, and adapt what doesn't — letting evidence guide our next steps.",
  },
];

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          id="how-heading"
          label="How we work"
          title="Community-led. Evidence-driven. Transparent."
          subtitle="TESDEF's model is built on four principles that ensure lasting impact rather than temporary relief."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={i} className="relative flex flex-col">
              {i < STEPS.length - 1 && (
                <div aria-hidden="true" className="absolute right-0 top-6 hidden h-px w-full bg-gradient-to-r from-mint to-transparent lg:block" style={{ left: "calc(100% + 16px)" }} />
              )}
              <span className="font-display text-4xl font-extrabold text-mint">{s.step}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-forest">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
