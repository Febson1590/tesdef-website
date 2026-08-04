"use client";

import { useAdminNav } from "./AdminNavContext";

export function AdminMenuButton() {
  const { setOpen } = useAdminNav();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Open menu"
      className="-ml-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg text-forest transition-colors hover:bg-offwhite lg:hidden"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  );
}
