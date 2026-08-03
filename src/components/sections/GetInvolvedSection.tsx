import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const OPTIONS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Volunteer",
    description: "Bring your skills, energy, and time to the communities that need them most. We have opportunities for project volunteers, remote contributors, and skills-based placements.",
    cta: "Volunteer with us",
    href: "/get-involved/volunteer",
    bg: "bg-mint",
    colour: "text-forest",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Partner with us",
    description: "Whether you represent a corporation, government agency, research institution, or civil society organisation, we build strategic partnerships that amplify mutual impact.",
    cta: "Explore partnerships",
    href: "/get-involved/partner",
    bg: "bg-white",
    colour: "text-forest",
  },
];

export function GetInvolvedSection() {
  return (
    <section aria-labelledby="involved-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">Join the movement</p>
          <h2 id="involved-heading" className="font-display text-2xl font-bold text-forest sm:text-3xl lg:text-4xl">
            There is a place for you here
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            TESDEF grows stronger with every person who joins our mission. Here are two ways to get involved today.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {OPTIONS.map((o) => (
            <div key={o.title} className={`flex flex-col gap-4 rounded-2xl border border-black/5 ${o.bg} p-8 shadow-sm`}>
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ${o.colour}`}>
                {o.icon}
              </div>
              <h3 className={`font-display text-xl font-bold ${o.colour}`}>{o.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">{o.description}</p>
              <Button href={o.href} variant="primary" size="md">
                {o.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
