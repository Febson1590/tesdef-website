import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  location: string;
  startDate: string;
  slug: string;
  isVirtual?: boolean;
  className?: string;
};

export function EventCard({ title, description, location, startDate, slug, isVirtual, className }: Props) {
  const d = new Date(startDate);
  const day = d.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = d.toLocaleDateString("en-GB", { month: "short" });
  const year = d.getFullYear();

  return (
    <article className={cn("group flex gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md", className)}>
      <div className="flex h-16 w-14 flex-none flex-col items-center justify-center rounded-xl bg-forest text-center text-white">
        <span className="text-xl font-bold leading-none">{day}</span>
        <span className="text-xs font-medium uppercase tracking-wide opacity-80">{month}</span>
        <span className="text-xs opacity-60">{year}</span>
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-base font-bold leading-snug text-forest group-hover:text-primary">
          <Link href={`/events/${slug}`}>{title}</Link>
        </h3>
        <p className="mt-1 text-xs text-muted">{isVirtual ? "Virtual" : location}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description.slice(0, 100)}…</p>
        <Link href={`/events/${slug}`} className="mt-3 text-sm font-semibold text-primary hover:text-forest">
          Learn more →
        </Link>
      </div>
    </article>
  );
}
