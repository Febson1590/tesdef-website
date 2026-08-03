import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProgrammeCard } from "@/components/ui/ProgrammeCard";
import { prisma } from "@/lib/prisma";
import { PROGRAMMES } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Programmes",
  description: "TESDEF's five programme areas — environmental sustainability, youth empowerment, digital inclusion, community development, and advocacy.",
};

async function getProgrammes() {
  try {
    const progs = await prisma.programme.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
      include: { _count: { select: { projects: true } } },
    });
    return progs.map((p) => ({ ...p, projectCount: p._count.projects }));
  } catch {
    return PROGRAMMES.filter((p) => p.published);
  }
}

export default async function ProgrammesPage() {
  const programmes = await getProgrammes();

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">What we do</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Our programmes</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Five interconnected areas of work spanning environmental sustainability, youth empowerment, digital innovation, community development, and advocacy.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p) => (
              <ProgrammeCard key={p.id} {...p} projectCount={p.projectCount ?? 0} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
