import Link from "next/link";
import Image from "next/image";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  excerpt: string;
  coverImage: string;
  slug: string;
  category: string;
  publishedAt: string;
  isSample?: boolean;
  className?: string;
};

export function NewsCard({ title, excerpt, coverImage, slug, category, publishedAt, isSample, className }: Props) {
  const date = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(publishedAt));

  return (
    <article className={cn("group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md", className)}>
      <div className="relative aspect-[16/9] overflow-hidden bg-mint">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-mint to-fresh/20" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          {category && <Badge variant="default">{category}</Badge>}
          {isSample && <Badge variant="warning">Sample</Badge>}
          <time className="text-xs text-muted" dateTime={publishedAt}>{date}</time>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-forest">
          <Link href={`/news/${slug}`} className="hover:text-primary">{title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{excerpt.slice(0, 130)}…</p>
        <Link href={`/news/${slug}`} className="mt-4 text-sm font-semibold text-primary hover:text-forest">
          Read more →
        </Link>
      </div>
    </article>
  );
}
