import Link from "next/link";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ReactNode> = {
  leaf: (
    <path d="M20 4C11 4 4 9.5 4 17c0 1.2.2 2.3.5 3.3C6 14 11 10.5 17 9.5c-4.5 2-7.8 5.4-9.4 10.5.9.3 1.9.5 3 .5C18 20.5 20 12 20 4Z" />
  ),
  "academic-cap": (
    <>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </>
  ),
  "computer-desktop": (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  home: (
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z M9 21V12h6v9" />
  ),
  megaphone: (
    <>
      <path d="M3 11v2a8 8 0 008 8h1" />
      <path d="M11 5L21 3v18L11 19V5z" />
      <path d="M11 5H6a2 2 0 00-2 2v6a2 2 0 002 2h5" />
    </>
  ),
};

type Props = {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  projectCount: number;
  slug: string;
  className?: string;
};

export function ProgrammeCard({
  title,
  tagline,
  description,
  icon,
  projectCount,
  slug,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-primary">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {ICONS[icon] ?? ICONS.leaf}
        </svg>
      </div>

      <h3 className="font-display text-lg font-bold leading-tight text-forest">
        {title}
      </h3>
      {tagline && (
        <p className="mt-1 text-sm font-medium text-primary">{tagline}</p>
      )}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {description.slice(0, 140)}…
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
        <span className="text-xs text-muted">{projectCount} project{projectCount !== 1 ? "s" : ""}</span>
        <Link
          href={`/programmes/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-forest"
        >
          Learn more
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
