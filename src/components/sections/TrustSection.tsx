import { Container } from "@/components/Container";

const PILLARS = [
  {
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: "Registered & accountable",
    description: "TESDEF is a duly registered foundation in Nigeria with full financial auditing, annual reporting, and board-level oversight of all programmes.",
  },
  {
    icon: (
      <><path d="M9 14l6-6" /><circle cx="9.5" cy="9.5" r="1.5" /><circle cx="14.5" cy="14.5" r="1.5" /><path d="M3 3l18 18M21 3L3 21" className="hidden" /><rect x="3" y="3" width="18" height="18" rx="2" /></>
    ),
    title: "Transparent finances",
    description: "We publish detailed breakdowns of how every programme budget is spent. Donors can request full financial reports at any time.",
  },
  {
    icon: (
      <><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></>
    ),
    title: "Impact-evaluated",
    description: "Independent evaluators review our programmes annually and report publicly. We share both our successes and what we are still learning.",
  },
  {
    icon: (
      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
    title: "Community-governed",
    description: "Our board includes elected representatives from the communities we serve. Community voices shape our strategy and hold us accountable.",
  },
];

export function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="border-t border-black/5 bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">Accountability</p>
          <h2 id="trust-heading" className="font-display text-2xl font-bold text-forest sm:text-3xl">
            Why you can trust TESDEF
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="flex flex-col gap-3 rounded-2xl border border-black/5 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {p.icon}
                </svg>
              </div>
              <h3 className="font-display text-base font-bold text-forest">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
