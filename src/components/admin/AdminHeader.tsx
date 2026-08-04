import { getSession } from "@/lib/auth";
import { AdminMenuButton } from "./AdminMenuButton";

export async function AdminHeader({ title }: { title?: string }) {
  const session = await getSession();
  return (
    <header className="sticky top-0 z-20 flex h-16 flex-none items-center justify-between gap-3 border-b border-black/10 bg-white/90 px-4 backdrop-blur supports-[backdrop-filter]:bg-white/75 sm:px-6">
      <div className="flex min-w-0 items-center gap-1 sm:gap-2">
        <AdminMenuButton />
        <h1 className="truncate font-display text-base font-bold text-forest sm:text-lg">{title ?? "Dashboard"}</h1>
      </div>
      {session && (
        <div className="flex flex-none items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-ink">{session.name}</p>
            <p className="text-xs capitalize text-muted">{session.role}</p>
          </div>
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-mint text-sm font-bold text-forest">
            {session.name.charAt(0).toUpperCase()}
          </div>
        </div>
      )}
    </header>
  );
}
