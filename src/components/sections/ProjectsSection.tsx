import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { prisma } from "@/lib/prisma";

// Featured homepage initiatives — fully admin-controlled.
//   • only status = "published"
//   • only featured = true ("Feature on Homepage")
//   • ordered by display order, then most recent
//   • max 3
async function getFeatured() {
  try {
    return await prisma.project.findMany({
      where: { status: "published", featured: true },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      take: 3,
      include: { programme: { select: { title: true, slug: true } } },
    });
  } catch {
    return [];
  }
}

export async function ProjectsSection() {
  const projects = await getFeatured();

  return (
    <section aria-labelledby="projects-heading" className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="projects-heading"
            label="Our work"
            title="Featured initiatives"
            subtitle="Projects and community initiatives from across TESDEF's programme areas."
            align="left"
          />
          <Link href="/projects" className="flex-none text-sm font-semibold text-primary hover:text-forest">
            View all initiatives →
          </Link>
        </div>

        {projects.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-black/5 bg-white p-10 text-center text-muted">
            Projects and community initiatives approved by TESDEF will appear here as they are published.
          </p>
        ) : (
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
                type={p.type}
                status={p.status}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
