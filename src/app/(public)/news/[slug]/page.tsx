import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/Badge";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await prisma.newsPost.findUnique({ where: { slug } });
    if (!post) return {};
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  let post: Awaited<ReturnType<typeof prisma.newsPost.findUnique>> | undefined;
  let related: { id: string; slug: string; title: string; publishedAt: Date | null; createdAt: Date }[] = [];

  try {
    post = await prisma.newsPost.findUnique({ where: { slug, published: true } });
    if (!post) notFound();
    const others = await prisma.newsPost.findMany({
      where: { published: true, slug: { not: slug } },
      orderBy: { publishedAt: "desc" },
      take: 2,
      select: { id: true, slug: true, title: true, publishedAt: true, createdAt: true },
    });
    related = others;
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <>
      <div className="relative h-56 overflow-hidden bg-forest sm:h-72 lg:h-96">
        {post.coverImage && (
          <Image src={post.coverImage} alt={post.title} fill className="object-cover opacity-50" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-8">
          {post.category && <Badge>{post.category}</Badge>}
          <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">{post.title}</h1>
          <p className="mt-2 text-sm text-white/60">
            <time dateTime={post.publishedAt?.toISOString()}>{formatDate(post.publishedAt ?? post.createdAt)}</time>
          </p>
        </Container>
      </div>

      <section className="bg-white py-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            {post.isSample && (
              <div className="mb-6 rounded-2xl border border-dashed border-primary/30 bg-offwhite p-4 text-sm text-muted">
                <span className="font-semibold text-forest">Sample content — pending client confirmation.</span>{" "}
                This is a placeholder post. Verified news will be published by TESDEF.
              </div>
            )}
            <div className="prose max-w-none text-ink">
              {post.content.split("\n\n").map((para, i) => (
                <p key={i} className="mt-4 leading-relaxed">{para}</p>
              ))}
            </div>

            {related.length > 0 && (
              <div className="mt-12 border-t border-black/5 pt-10">
                <h2 className="mb-6 font-display text-xl font-bold text-forest">More updates</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link key={r!.id} href={`/news/${r!.slug}`} className="group rounded-xl border border-black/5 p-4 transition-shadow hover:shadow-md">
                      <p className="text-xs text-muted">{formatDate(r!.publishedAt ?? r!.createdAt)}</p>
                      <p className="mt-1 font-semibold text-forest group-hover:text-primary">{r!.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
