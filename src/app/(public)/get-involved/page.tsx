import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer, partner, or donate to support TESDEF's environmental and community development work in the Niger Delta.",
};

const OPTIONS = [
  {
    title: "Volunteer",
    description: "Bring your skills to the communities that need them most. Whether you are a designer, developer, teacher, health worker, or environmental scientist, we have a place for you.",
    bullets: ["Project-based field volunteering", "Remote and skills-based volunteering", "Youth mentorship opportunities", "Flexible engagement — short and long-term"],
    cta: "Apply to volunteer",
    href: "/get-involved/volunteer",
    bg: "bg-mint",
  },
  {
    title: "Partner with us",
    description: "Corporations, government agencies, universities, and civil society organisations — we build honest partnerships that amplify mutual impact.",
    bullets: ["Programme co-funding and co-design", "Employee volunteer schemes", "Research and evaluation partnerships", "Advocacy and policy coalitions"],
    cta: "Explore partnerships",
    href: "/get-involved/partner",
    bg: "bg-white",
  },
  {
    title: "Support TESDEF",
    description: "Register your interest in supporting TESDEF's work. Your support helps advance environmental sustainability, youth empowerment and inclusive community development.",
    bullets: ["Register your support", "Direct your support to an initiative", "General fund — where most needed"],
    cta: "Support our work",
    href: "/donate",
    bg: "bg-offwhite",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Join the mission</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Get Involved</h1>
            <p className="mt-5 text-lg text-white/70">
              TESDEF grows stronger with every individual, organisation, and community that joins our work. Here are three ways you can make a difference.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {OPTIONS.map((o) => (
              <div key={o.title} className={`flex flex-col rounded-2xl border border-black/5 ${o.bg} p-8`}>
                <h2 className="font-display text-2xl font-bold text-forest">{o.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{o.description}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-fresh" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button href={o.href} variant="primary" size="lg" className="mt-8">
                  {o.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
