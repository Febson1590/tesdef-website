import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Initiatives",
  description: "Initiatives across TESDEF's areas of focus — environmental sustainability, community development, digital innovation, youth empowerment, and advocacy.",
};

async function getProjects() {
  try {
    return await prisma.project.findMany({
      where: { status: "published" },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      include: { programme: { select: { title: true, slug: true } } },
    });
  } catch {
    return [];
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
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Initiatives</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Initiatives across TESDEF&apos;s programme areas. Details are published as initiatives are approved.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          {projects.length === 0 ? (
            <p className="mx-auto max-w-2xl rounded-2xl border border-black/5 bg-offwhite p-12 text-center text-muted">
              New initiatives will be published here as they are approved.
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
                  type={p.type}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
