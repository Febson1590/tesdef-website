import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { prisma } from "@/lib/prisma";
import { PROJECTS, PROGRAMMES } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects & Campaigns",
  description: "Browse TESDEF projects across environmental sustainability, community development, digital innovation, youth empowerment, and advocacy.",
};

async function getProjects() {
  try {
    return await prisma.project.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: { programme: { select: { title: true, slug: true } } },
    });
  } catch {
    return PROJECTS.map((p) => {
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
  const active = projects.filter((p) => p.status === "active");
  const completed = projects.filter((p) => p.status === "completed");
  const other = projects.filter((p) => !["active", "completed"].includes(p.status));

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Our work</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Projects & Campaigns</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Examples of the work TESDEF is set up to deliver across its areas of focus.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          {projects.some((p) => p.isSample) && (
            <div className="mb-10 rounded-2xl border border-dashed border-primary/30 bg-offwhite p-4 text-center text-sm text-muted">
              Projects marked <span className="font-semibold text-forest">Sample</span> are illustrative examples — pending client confirmation.
            </div>
          )}
          {projects.length === 0 && (
            <p className="py-20 text-center text-muted">No projects listed yet.</p>
          )}
          {active.length > 0 && (
            <div className="mb-14">
              <h2 className="mb-6 font-display text-2xl font-bold text-forest">Active campaigns</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {active.map((p) => (
                  <ProjectCard key={p.id} title={p.title} summary={p.summary} coverImage={p.coverImage} slug={p.slug}
                    programmeName={p.programme?.title ?? "TESDEF"} programmeSlug={p.programme?.slug ?? ""}
                    fundingGoal={p.fundingGoal} amountRaised={p.amountRaised} supporterCount={p.supporterCount} status={p.status} isSample={Boolean(p.isSample)} />
                ))}
              </div>
            </div>
          )}
          {completed.length > 0 && (
            <div className="mb-14">
              <h2 className="mb-6 font-display text-2xl font-bold text-forest">Completed projects</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {completed.map((p) => (
                  <ProjectCard key={p.id} title={p.title} summary={p.summary} coverImage={p.coverImage} slug={p.slug}
                    programmeName={p.programme?.title ?? "TESDEF"} programmeSlug={p.programme?.slug ?? ""}
                    fundingGoal={p.fundingGoal} amountRaised={p.amountRaised} supporterCount={p.supporterCount} status={p.status} isSample={Boolean(p.isSample)} />
                ))}
              </div>
            </div>
          )}
          {other.length > 0 && (
            <div>
              <h2 className="mb-6 font-display text-2xl font-bold text-forest">In planning</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {other.map((p) => (
                  <ProjectCard key={p.id} title={p.title} summary={p.summary} coverImage={p.coverImage} slug={p.slug}
                    programmeName={p.programme?.title ?? "TESDEF"} programmeSlug={p.programme?.slug ?? ""}
                    fundingGoal={p.fundingGoal} amountRaised={p.amountRaised} supporterCount={p.supporterCount} status={p.status} isSample={Boolean(p.isSample)} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
