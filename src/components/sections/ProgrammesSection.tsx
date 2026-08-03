import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgrammeCard } from "@/components/ui/ProgrammeCard";
import { prisma } from "@/lib/prisma";

async function getProgrammes() {
  try {
    return await prisma.programme.findMany({
      where: { status: "published" },
      orderBy: { order: "asc" },
    });
  } catch {
    return [];
  }
}

export async function ProgrammesSection() {
  const programmes = await getProgrammes();

  // Hide the section entirely if no published programmes exist.
  if (programmes.length === 0) return null;

  return (
    <section aria-labelledby="programmes-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          id="programmes-heading"
          label="What we do"
          title="Our programme areas"
          subtitle="TESDEF works across interconnected programmes spanning environmental sustainability, youth empowerment, digital innovation, community development, and advocacy."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {programmes.map((p) => (
            <ProgrammeCard key={p.id} title={p.title} tagline={p.tagline} description={p.description} icon={p.icon} slug={p.slug} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-forest"
          >
            View all programmes
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
