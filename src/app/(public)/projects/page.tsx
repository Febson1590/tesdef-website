import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { prisma } from "@/lib/prisma";
import { PROJECTS, PROGRAMMES } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proposed Initiatives",
  description: "Proposed initiatives across TESDEF's areas of focus — environmental sustainability, community development, digital innovation, youth empowerment, and advocacy.",
};

async function getProjects() {
  try {
    return await prisma.project.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: { programme: { select: { title: true, slug: true } } },
    });
  } catch {
    return PROJECTS.filter((p) => p.published).map((p) => {
      const prog = PROGRAMMES.find((pr) => pr.id === p.programmeId);
      return {
        ...p,
        startDate: p.startDate ? new Date(p.startDate) : null,
        endDate: null as Date | null,
        createdAt: new Date(),
        updatedAt: new Date(),
        programme: prog ? { title: prog.title, slug: prog.slug } : null,
      };
    });
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Our work</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Proposed Initiatives</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              These proposed initiatives reflect the areas TESDEF intends to develop. Final project
              details, locations, timelines and delivery plans will be published following approval.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          {projects.length === 0 ? (
            <p className="rounded-2xl border border-black/5 bg-offwhite p-12 text-center text-muted">
              Our projects and programme activities will be published here as they are officially launched.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard
                  key={p.id}
                  title={p.title}
                  summary={p.summary}
                  coverImage={p.coverImage}
                  slug={p.slug}
                  programmeName={p.programme?.title ?? "TESDEF"}
                  programmeSlug={p.programme?.slug ?? ""}
                  fundingGoal={p.fundingGoal}
                  amountRaised={p.amountRaised}
                  supporterCount={p.supporterCount}
                  status={p.status}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
