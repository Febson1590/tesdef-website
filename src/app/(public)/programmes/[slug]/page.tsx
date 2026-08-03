import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/Button";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const programme = await prisma.programme.findUnique({ where: { slug } });
    if (!programme) return {};
    return { title: programme.title, description: programme.description.slice(0, 160) };
  } catch {
    return {};
  }
}

export default async function ProgrammeDetailPage({ params }: Props) {
  const { slug } = await params;

  let programme;
  let projects: { id: string; title: string; summary: string; coverImage: string; slug: string; fundingGoal: number; amountRaised: number; supporterCount: number; status: string; isSample: boolean; programme: { title: string; slug: string } | null }[] = [];

  try {
    programme = await prisma.programme.findUnique({
      where: { slug, published: true },
    });
    if (!programme) notFound();

    const raw = await prisma.project.findMany({
      where: { programmeId: programme.id, published: true },
      orderBy: { createdAt: "desc" },
      include: { programme: { select: { title: true, slug: true } } },
    });
    projects = raw;
  } catch {
    notFound();
  }

  if (!programme) notFound();

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Programme</p>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">{programme.title}</h1>
            <p className="mt-3 text-lg font-medium text-fresh">{programme.tagline}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-ink">{programme.description}</p>
          </div>
        </Container>
      </section>

      {projects.length > 0 && (
        <section className="bg-offwhite py-16">
          <Container>
            <h2 className="mb-8 font-display text-2xl font-bold text-forest">Projects under this programme</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard
                  key={p.id}
                  title={p.title}
                  summary={p.summary}
                  coverImage={p.coverImage}
                  slug={p.slug}
                  programmeName={p.programme?.title ?? programme!.title}
                  programmeSlug={p.programme?.slug ?? slug}
                  fundingGoal={p.fundingGoal}
                  amountRaised={p.amountRaised}
                  supporterCount={p.supporterCount}
                  status={p.status}
                  isSample={Boolean(p.isSample)}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-mint py-12">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h2 className="font-display text-xl font-bold text-forest">Support this programme</h2>
              <p className="mt-1 text-sm text-muted">Your support helps TESDEF advance its work in this area.</p>
            </div>
            <Button href="/donate" variant="primary" size="lg">Donate</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
