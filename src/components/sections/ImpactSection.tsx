import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { prisma } from "@/lib/prisma";
import { IMPACT_STATS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  leaf: <path d="M20 4C11 4 4 9.5 4 17c0 1.2.2 2.3.5 3.3C6 14 11 10.5 17 9.5c-4.5 2-7.8 5.4-9.4 10.5.9.3 1.9.5 3 .5C18 20.5 20 12 20 4Z" />,
  "academic-cap": <><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></>,
  home: <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z M9 21V12h6v9" />,
  folder: <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />,
  currency: <><circle cx="12" cy="12" r="10" /><path d="M12 6v12M9 9h6a2 2 0 010 4h-4a2 2 0 000 4h6" /></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  tree: <><path d="M12 22V12" /><path d="M9 6l3-3 3 3" /><path d="M3 9l4-4 3 3M17 9l-4-4-3 3" /></>,
};

async function getImpactStats() {
  try {
    return await prisma.impactStat.findMany({ orderBy: { order: "asc" } });
  } catch {
    return IMPACT_STATS;
  }
}

export async function ImpactSection() {
  const stats = await getImpactStats();

  return (
    <section aria-labelledby="impact-heading" className="bg-forest py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          id="impact-heading"
          label="Our impact"
          title="Numbers that tell a story"
          subtitle="Every figure below represents real lives improved, real ecosystems restored, real futures secured."
          dark
        />

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.id} className="flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-fresh/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-fresh" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ICONS[s.icon] ?? ICONS.leaf}
                </svg>
              </div>
              <span className="font-display text-3xl font-extrabold text-white">{s.value}</span>
              <span className="mt-1.5 text-xs font-medium uppercase tracking-wide text-white/60">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
