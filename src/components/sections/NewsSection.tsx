import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";
import { prisma } from "@/lib/prisma";
import { NEWS } from "@/lib/data";

async function getLatestNews() {
  try {
    return await prisma.newsPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 3,
    });
  } catch {
    return NEWS.filter((n) => n.published).slice(0, 3).map((n) => ({
      ...n,
      publishedAt: n.publishedAt ? new Date(n.publishedAt) : new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: "[]",
    }));
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
            title="Latest news"
            subtitle="Announcements and updates from TESDEF. Sample content — pending client confirmation."
            align="left"
          />
          <Link href="/news" className="flex-none text-sm font-semibold text-primary hover:text-forest">
            All news →
          </Link>
        </div>

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
              isSample={"isSample" in n ? Boolean(n.isSample) : false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
