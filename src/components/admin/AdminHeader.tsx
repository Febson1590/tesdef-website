import { getSession } from "@/lib/auth";

export async function AdminHeader({ title }: { title?: string }) {
  const session = await getSession();
  return (
    <header className="flex h-16 items-center justify-between border-b border-black/10 bg-white px-6">
      <h1 className="font-display text-lg font-bold text-forest">{title ?? "Dashboard"}</h1>
      {session && (
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-ink">{session.name}</p>
            <p className="text-xs text-muted">{session.role}</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-sm font-bold text-forest">
            {session.name.charAt(0).toUpperCase()}
          </div>
        </div>
      )}
    </header>
  );
}
