import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";
import { prisma } from "@/lib/prisma";

async function getLatestNews() {
  try {
    return await prisma.newsPost.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      take: 3,
    });
  } catch {
    return [];
  }
}

export async function NewsSection() {
  const posts = await getLatestNews();

  return (
    <section aria-labelledby="news-heading" className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="news-heading"
            label="Latest updates"
            title="News & updates"
            subtitle="Announcements and updates from TESDEF."
            align="left"
          />
          {posts.length > 0 && (
            <Link href="/news" className="flex-none text-sm font-semibold text-primary hover:text-forest">
              All news →
            </Link>
          )}
        </div>

        {posts.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-black/5 bg-white p-10 text-center text-muted">
            News and updates from TESDEF will be published here soon.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((n) => (
              <NewsCard
                key={n.id}
                title={n.title}
                excerpt={n.excerpt}
                coverImage={n.coverImage}
                slug={n.slug}
                category={n.category}
                publishedAt={n.publishedAt?.toISOString() ?? n.createdAt.toISOString()}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
