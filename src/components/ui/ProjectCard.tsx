import Link from "next/link";
import Image from "next/image";
import { ProgressBar } from "./ProgressBar";
import { Badge } from "./Badge";
import { formatCurrency, progressPercent } from "@/lib/utils";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<string, string> = {
  active: "Active",
  completed: "Completed",
  planning: "Planning",
  paused: "Paused",
};

const STATUS_VARIANT: Record<string, "success" | "warning" | "info" | "default"> = {
  active: "success",
  completed: "info",
  planning: "warning",
  paused: "default",
};

type Props = {
  title: string;
  summary: string;
  coverImage: string;
  slug: string;
  programmeName: string;
  programmeSlug: string;
  fundingGoal: number;
  amountRaised: number;
  supporterCount: number;
  status: string;
  isSample?: boolean;
  className?: string;
};

export function ProjectCard({
  title,
  summary,
  coverImage,
  slug,
  programmeName,
  programmeSlug,
  fundingGoal,
  amountRaised,
  supporterCount,
  status,
  isSample,
  className,
}: Props) {
  const pct = progressPercent(amountRaised, fundingGoal);

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
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <Badge variant={STATUS_VARIANT[status] ?? "default"}>
            {STATUS_LABEL[status] ?? status}
          </Badge>
          {isSample && <Badge variant="warning">Sample</Badge>}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Link
          href={`/programmes/${programmeSlug}`}
          className="text-xs font-semibold uppercase tracking-wide text-primary hover:text-forest"
        >
          {programmeName}
        </Link>

        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-forest">
          <Link
            href={`/projects/${slug}`}
            className="hover:text-primary"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {summary.slice(0, 120)}…
        </p>

        {fundingGoal > 0 && (
          <div className="mt-4">
            <ProgressBar percent={pct} />
            <div className="mt-2 flex items-center justify-between text-xs text-muted">
              <span>
                <span className="font-semibold text-forest">{formatCurrency(amountRaised)}</span>
                {" "}raised of {formatCurrency(fundingGoal)}
              </span>
              <span>{supporterCount.toLocaleString()} supporters</span>
            </div>
          </div>
        )}

        <Link
          href={`/projects/${slug}`}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-mint"
        >
          View project
        </Link>
      </div>
    </article>
  );
}
