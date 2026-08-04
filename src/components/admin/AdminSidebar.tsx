"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { useAdminNav } from "./AdminNavContext";

const NAV = [
  {
    label: "Overview",
    items: [
      { href: "/admin", label: "Dashboard", icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
    ],
  },
  {
    label: "Content",
    items: [
      { href: "/admin/hero", label: "Hero Slides", icon: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8M12 18v3" /><circle cx="8" cy="9" r="1.5" /><path d="M20 15l-5-4-4 3-2-1.5L4 16" /></> },
      { href: "/admin/programmes", label: "Programmes", icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></> },
      { href: "/admin/projects", label: "Projects & Initiatives", icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></> },
      { href: "/admin/news", label: "News & Updates", icon: <><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6z" /></> },
      { href: "/admin/events", label: "Events", icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></> },
      { href: "/admin/gallery", label: "Gallery", icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></> },
      { href: "/admin/impact", label: "Impact Stats", icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></> },
      { href: "/admin/team", label: "Team", icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></> },
      { href: "/admin/partners", label: "Partners", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></> },
    ],
  },
  {
    label: "Inbox",
    items: [
      { href: "/admin/messages", label: "Contact Messages", icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
      { href: "/admin/volunteers", label: "Volunteers", icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></> },
      { href: "/admin/enquiries", label: "Partnership Enquiries", icon: <><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" /></> },
      { href: "/admin/donations", label: "Donations", icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></> },
    ],
  },
];

// Shared nav content used by both the desktop sidebar and the mobile drawer.
function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <>
      <div className="flex h-16 flex-none items-center border-b border-black/10 px-5">
        <Link href="/admin" aria-label="Admin home" onClick={onNavigate}>
          <Logo />
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto py-4" aria-label="Admin navigation">
        {NAV.map((group) => (
          <div key={group.label} className="mb-4">
            <p className="mb-1 px-5 text-[10px] font-semibold uppercase tracking-widest text-muted">{group.label}</p>
            {group.items.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "mx-2 flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:min-h-0 lg:py-2",
                    isActive ? "bg-mint text-forest" : "text-ink hover:bg-offwhite"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none lg:h-4 lg:w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {item.icon}
                  </svg>
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
      <div className="flex-none border-t border-black/10 p-4">
        <button
          onClick={handleLogout}
          className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-red-50 hover:text-red-600 lg:min-h-0"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none lg:h-4 lg:w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Sign out
        </button>
      </div>
    </>
  );
}

export function AdminSidebar() {
  const { open, setOpen } = useAdminNav();

  return (
    <>
      {/* Desktop: fixed sidebar (≥1024px) */}
      <aside className="hidden border-r border-black/10 bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:flex lg:w-64 lg:flex-col">
        <NavContent />
      </aside>

      {/* Mobile: slide-out drawer (<1024px) */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={cn("absolute inset-0 bg-black/40 transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Admin menu"
          className={cn(
            "absolute inset-y-0 left-0 flex w-72 max-w-[85%] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <NavContent onNavigate={() => setOpen(false)} />
        </aside>
      </div>
    </>
  );
}
