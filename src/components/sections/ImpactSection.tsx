import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOCUS_AREAS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  leaf: <path d="M20 4C11 4 4 9.5 4 17c0 1.2.2 2.3.5 3.3C6 14 11 10.5 17 9.5c-4.5 2-7.8 5.4-9.4 10.5.9.3 1.9.5 3 .5C18 20.5 20 12 20 4Z" />,
  "academic-cap": <><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></>,
  computer: <><rect x="2" y="4" width="20" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  book: <><path d="M4 4h9a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z" /><path d="M20 4h-3a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h4z" /></>,
  climate: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></>,
  home: <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z M9 21V12h6v9" />,
  livelihood: <><path d="M12 2v20" /><path d="M9 6l3-3 3 3" /><path d="M4 12c2 0 3-1 4-3M20 12c-2 0-3-1-4-3" /></>,
  megaphone: <><path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Z" /><path d="M14 8a4 4 0 0 1 0 8" /></>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  heart: <path d="M12 21s-7-4.35-9.5-8.5C1 9 2.5 5.5 6 5.5c2 0 3 1 6 4 3-3 4-4 6-4 3.5 0 5 3.5 3.5 7C19 16.65 12 21 12 21Z" />,
};

export function ImpactSection() {
  return (
    <section aria-labelledby="impact-heading" className="bg-forest py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          id="impact-heading"
          label="What we focus on"
          title="Our areas of focus"
          subtitle="TESDEF works across interconnected areas — from environmental sustainability to digital inclusion — always alongside the communities we serve."
          dark
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {FOCUS_AREAS.map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-5 text-center">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fresh/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-fresh" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ICONS[f.icon] ?? ICONS.leaf}
                </svg>
              </div>
              <span className="text-xs font-semibold leading-snug text-white sm:text-sm">{f.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
