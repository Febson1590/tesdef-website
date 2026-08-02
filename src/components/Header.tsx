"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Button } from "./Button";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Projects", href: "/projects" },
  { label: "News & Events", href: "/news" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => href !== "#" && pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-offwhite/85 backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between gap-3 lg:h-16 lg:gap-4">
          <Logo />

          {/* Desktop navigation */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-mint hover:text-forest ${
                  isActive(item.href)
                    ? "text-forest"
                    : "text-ink/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 lg:gap-2">
            <Button
              href="/donate"
              variant="primary"
              size="sm"
              className="h-9 px-3.5 text-xs lg:px-4 lg:text-sm"
            >
              Donate
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-1.5 inline-flex h-10 w-10 items-center justify-center rounded-lg text-forest transition-colors hover:bg-mint lg:hidden"
            >
              {open ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-black/5 bg-offwhite lg:hidden"
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-mint hover:text-forest ${
                  isActive(item.href) ? "bg-mint text-forest" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/donate"
              variant="primary"
              size="lg"
              className="mt-2 w-full"
            >
              Donate
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
