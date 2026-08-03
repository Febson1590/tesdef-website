import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { prisma } from "@/lib/prisma";
import { formatCurrency, formatDate, progressPercent, parseJsonField } from "@/lib/utils";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const p = await prisma.project.findUnique({ where: { slug } });
    if (!p) return {};
    return { title: p.title, description: p.summary };
  } catch {
    return {};
  }
}

const STATUS_LABEL: Record<string, string> = { active: "Active", completed: "Completed", planning: "Planning", paused: "Paused" };
const STATUS_VARIANT: Record<string, "success" | "info" | "warning" | "default"> = { active: "success", completed: "info", planning: "warning", paused: "default" };

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  let project;
  let updates: { id: string; title: string; content: string; createdAt: Date }[] = [];
  let related: { id: string; title: string; slug: string; summary: string; coverImage: string; fundingGoal: number; amountRaised: number; supporterCount: number; status: string; programme: { title: string; slug: string } | null }[] = [];

  try {
    project = await prisma.project.findUnique({
      where: { slug, published: true },
      include: {
        programme: { select: { title: true, slug: true } },
        updates: { orderBy: { createdAt: "desc" } },
      },
    });
    if (!project) notFound();

    updates = project.updates;
    related = await prisma.project.findMany({
      where: { programmeId: project.programmeId ?? undefined, slug: { not: slug }, published: true },
      take: 3,
      include: { programme: { select: { title: true, slug: true } } },
    });
  } catch {
    notFound();
  }

  if (!project) notFound();

  const pct = progressPercent(project.amountRaised, project.fundingGoal);
  const objectives = parseJsonField<string[]>(project.objectives, []);
  const fundsUsed = parseJsonField<string[]>(project.howFundsUsed, []);

  return (
    <>
      {/* Hero */}
      <div className="relative h-64 overflow-hidden bg-forest sm:h-80 lg:h-96">
        {project.coverImage && (
          <Image src={project.coverImage} alt={project.title} fill className="object-cover opacity-60" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-8">
          <Badge variant={STATUS_VARIANT[project.status] ?? "default"}>{STATUS_LABEL[project.status]}</Badge>
          <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">{project.title}</h1>
          {project.programme && (
            <p className="mt-2 text-sm text-white/70">
              Part of{" "}
              <Link href={`/programmes/${project.programme.slug}`} className="underline hover:text-white">
                {project.programme.title}
              </Link>
            </p>
          )}
        </Container>
      </div>

      <section className="bg-white py-12 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            {/* Main content */}
            <div>
              {project.isSample && (
                <div className="mb-6 rounded-2xl border border-dashed border-primary/30 bg-offwhite p-4 text-sm text-muted">
                  <span className="font-semibold text-forest">Sample content — pending client confirmation.</span>{" "}
                  This is an illustrative example. Verified details will be added by TESDEF.
                </div>
              )}
              <p className="text-lg leading-relaxed text-muted">{project.summary}</p>

              {project.story && (
                <div className="mt-8">
                  <h2 className="mb-4 font-display text-xl font-bold text-forest">The full story</h2>
                  <div className="space-y-4 text-sm leading-relaxed text-ink">
                    {project.story.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </div>
              )}

              {objectives.length > 0 && (
                <div className="mt-8">
                  <h2 className="mb-4 font-display text-xl font-bold text-forest">Objectives</h2>
                  <ul className="space-y-2">
                    {objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-ink">
                        <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-mint text-xs font-bold text-primary">{i + 1}</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {fundsUsed.length > 0 && (
                <div className="mt-8">
                  <h2 className="mb-4 font-display text-xl font-bold text-forest">How funds will be used</h2>
                  <ul className="space-y-2">
                    {fundsUsed.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-xl bg-offwhite p-3 text-sm text-ink">
                        <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {updates.length > 0 && (
                <div className="mt-10">
                  <h2 className="mb-6 font-display text-xl font-bold text-forest">Project updates</h2>
                  <div className="space-y-6">
                    {updates.map((u) => (
                      <div key={u.id} className="rounded-2xl border border-black/5 bg-offwhite p-5">
                        <p className="text-xs text-muted">{formatDate(u.createdAt)}</p>
                        <h3 className="mt-1 font-display font-bold text-forest">{u.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink">{u.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Funding sidebar */}
            <aside className="space-y-5">
              {project.fundingGoal > 0 && (
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Campaign progress</p>
                  <div className="mt-3">
                    <div className="flex items-end justify-between">
                      <span className="font-display text-2xl font-extrabold text-forest">{formatCurrency(project.amountRaised)}</span>
                      <span className="text-sm text-muted">of {formatCurrency(project.fundingGoal)}</span>
                    </div>
                    <ProgressBar percent={pct} className="mt-3" />
                    <div className="mt-3 flex items-center justify-between text-sm text-muted">
                      <span>{pct}% funded</span>
                      <span>{project.supporterCount.toLocaleString()} supporters</span>
                    </div>
                  </div>
                  <Button href="/donate" variant="primary" className="mt-5 w-full justify-center">
                    Support this project
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted">Secure pledge — no payment processed yet</p>
                </div>
              )}

              <div className="rounded-2xl border border-black/5 bg-offwhite p-5">
                <h3 className="font-display text-sm font-bold text-forest">Project details</h3>
                <dl className="mt-3 space-y-3">
                  {project.location && (
                    <div>
                      <dt className="text-xs text-muted">Location</dt>
                      <dd className="text-sm font-medium text-ink">{project.location}</dd>
                    </div>
                  )}
                  {project.startDate && (
                    <div>
                      <dt className="text-xs text-muted">Start date</dt>
                      <dd className="text-sm font-medium text-ink">{formatDate(project.startDate)}</dd>
                    </div>
                  )}
                  {project.endDate && (
                    <div>
                      <dt className="text-xs text-muted">End date</dt>
                      <dd className="text-sm font-medium text-ink">{formatDate(project.endDate)}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs text-muted">Status</dt>
                    <dd className="text-sm font-medium text-ink">{STATUS_LABEL[project.status] ?? project.status}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-mint py-12">
          <Container>
            <h2 className="mb-6 font-display text-xl font-bold text-forest">Related projects</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link key={r.id} href={`/projects/${r.slug}`} className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                  <p className="text-xs text-primary">{r.programme?.title}</p>
                  <h3 className="mt-1 font-display font-bold text-forest group-hover:text-primary">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted">{r.summary.slice(0, 100)}…</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
