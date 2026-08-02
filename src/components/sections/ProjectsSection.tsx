import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { prisma } from "@/lib/prisma";
import { PROJECTS, PROGRAMMES } from "@/lib/data";

async function getActiveProjects() {
  try {
    return await prisma.project.findMany({
      where: { status: "active", published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
      include: { programme: { select: { title: true, slug: true } } },
    });
  } catch {
    return PROJECTS.filter((p) => p.status === "active").slice(0, 3).map((p) => {
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

export async function ProjectsSection() {
  const projects = await getActiveProjects();

  return (
    <section aria-labelledby="projects-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="projects-heading"
            label="Active campaigns"
            title="Projects making a difference"
            subtitle="Real work happening now across Gbaramatu Kingdom and the Niger Delta."
            align="left"
          />
          <Link href="/projects" className="flex-none text-sm font-semibold text-primary hover:text-forest">
            All projects →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </Container>
    </section>
  );
}
