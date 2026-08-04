"use client";

import { useEffect, useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminNavContext } from "./AdminNavContext";

/**
 * Admin layout shell.
 * - Desktop (≥1024px): a fixed sidebar; content is offset by lg:pl-64.
 * - Mobile (<1024px): the sidebar becomes a slide-out drawer opened from the
 *   header's hamburger. Uses natural page scrolling (no nested scroll container)
 *   for smoother mobile performance.
 */
export function AdminShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll + Escape-to-close while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <AdminNavContext.Provider value={{ open, setOpen }}>
      <div className="min-h-dvh bg-offwhite">
        <AdminSidebar />
        <div className="flex min-h-dvh flex-col lg:pl-64">{children}</div>
      </div>
    </AdminNavContext.Provider>
  );
}
