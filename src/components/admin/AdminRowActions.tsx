import { setStatus, setFeatured, type ContentModel } from "@/app/admin/(dashboard)/content-actions";

export function StatusBadge({ status }: { status: string }) {
  const cls =
    status === "published"
      ? "bg-fresh/20 text-forest"
      : status === "archived"
        ? "bg-black/10 text-muted"
        : "bg-amber-50 text-amber-700";
  return <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold capitalize ${cls}`}>{status}</span>;
}

// Touch-friendly on mobile (≥44px tap target); compact on desktop.
const btn = "inline-flex min-h-11 items-center justify-center rounded-full border px-3.5 text-xs font-semibold transition-colors lg:min-h-[30px] lg:px-2.5 lg:py-1";

type Props = {
  model: ContentModel;
  id: string;
  status: string;
  adminPath: string;
  featured?: boolean;
};

// Publish / Unpublish / Archive / Restore + optional Feature toggle (projects).
export function AdminRowActions({ model, id, status, adminPath, featured }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {status !== "published" ? (
        <form action={setStatus.bind(null, model, id, "published", adminPath)}>
          <button type="submit" className={`${btn} border-primary/30 text-primary hover:bg-mint`}>Publish</button>
        </form>
      ) : (
        <form action={setStatus.bind(null, model, id, "draft", adminPath)}>
          <button type="submit" className={`${btn} border-black/15 text-ink hover:bg-offwhite`}>Unpublish</button>
        </form>
      )}

      {status !== "archived" ? (
        <form action={setStatus.bind(null, model, id, "archived", adminPath)}>
          <button type="submit" className={`${btn} border-black/15 text-muted hover:bg-offwhite`}>Archive</button>
        </form>
      ) : (
        <form action={setStatus.bind(null, model, id, "draft", adminPath)}>
          <button type="submit" className={`${btn} border-black/15 text-ink hover:bg-offwhite`}>Restore</button>
        </form>
      )}

      {featured !== undefined && (
        <form action={setFeatured.bind(null, id, !featured, adminPath)}>
          <button type="submit" className={`${btn} ${featured ? "border-fresh bg-fresh/20 text-forest" : "border-black/15 text-muted hover:bg-offwhite"}`}>
            {featured ? "★ Featured" : "Feature"}
          </button>
        </form>
      )}
    </div>
  );
}
