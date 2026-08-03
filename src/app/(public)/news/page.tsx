import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { NewsCard } from "@/components/ui/NewsCard";
import { prisma } from "@/lib/prisma";
import { NEWS } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "The latest announcements and updates from TESDEF.",
};

async function getNews() {
  try {
    return await prisma.newsPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
    });
  } catch {
    return NEWS.filter((n) => n.published)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .map((n) => ({ ...n, publishedAt: n.publishedAt ? new Date(n.publishedAt) : new Date(), createdAt: new Date(), updatedAt: new Date(), tags: "[]" }));
  }
}

export default async function NewsPage() {
  const posts = await getNews();

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Updates</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">News & Updates</h1>
            <p className="mt-5 text-lg text-white/70">Announcements and updates from TESDEF.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          {posts.length === 0 ? (
            <p className="py-20 text-center text-muted">No news posts yet — check back soon.</p>
          ) : (
            <>
              {posts.some((n) => "isSample" in n && n.isSample) && (
                <div className="mb-10 rounded-2xl border border-dashed border-primary/30 bg-offwhite p-4 text-center text-sm text-muted">
                  Posts marked <span className="font-semibold text-forest">Sample</span> are placeholders — pending client confirmation.
                </div>
              )}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((n) => (
                  <NewsCard
                    key={n.id}
                    title={n.title}
                    excerpt={n.excerpt}
                    coverImage={n.coverImage}
                    slug={n.slug}
                    category={n.category}
                    publishedAt={n.publishedAt?.toISOString() ?? n.createdAt.toISOString()}
                    isSample={"isSample" in n ? Boolean(n.isSample) : false}
                  />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </>
  );
}
