import Link from "next/link";
import Image from "next/image";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

const TYPE_LABEL: Record<string, string> = {
  project: "Project",
  initiative: "Initiative",
  campaign: "Campaign",
};

const STATUS_LABEL: Record<string, string> = {
  published: "Published",
  draft: "Draft",
  archived: "Archived",
};
const STATUS_VARIANT: Record<string, "success" | "warning" | "default"> = {
  published: "success",
  draft: "warning",
  archived: "default",
};

type Props = {
  title: string;
  summary: string;
  coverImage: string;
  slug: string;
  programmeName: string;
  programmeSlug: string;
  type?: string;
  status?: string;
  className?: string;
};

export function ProjectCard({
  title,
  summary,
  coverImage,
  slug,
  programmeName,
  programmeSlug,
  type,
  status,
  className,
}: Props) {
  const typeLabel = type ? TYPE_LABEL[type] : undefined;
  const statusLabel = status ? STATUS_LABEL[status] : undefined;

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
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
        {(statusLabel || typeLabel) && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {statusLabel && <Badge variant={STATUS_VARIANT[status!] ?? "default"}>{statusLabel}</Badge>}
            {typeLabel && <Badge variant="default">{typeLabel}</Badge>}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Link
          href={`/programmes/${programmeSlug}`}
          className="text-xs font-semibold uppercase tracking-wide text-primary hover:text-forest"
        >
          {programmeName}
        </Link>

        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-forest">
          <Link href={`/projects/${slug}`} className="hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {summary.length > 120 ? `${summary.slice(0, 120)}…` : summary}
        </p>

        <Link
          href={`/projects/${slug}`}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-mint"
        >
          View Project
        </Link>
      </div>
    </article>
  );
}
