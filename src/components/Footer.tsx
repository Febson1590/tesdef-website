import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { CONTACT } from "@/lib/data";

// Social icons. A link only renders when a verified URL is present in CONTACT.socials.
const SOCIAL_ICONS: Record<string, { label: string; icon: React.ReactNode }> = {
  x: { label: "TESDEF on X", icon: <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.9l-4.8-6.28L5.3 22H2.04l8-9.14L1.5 2h6.98l4.35 5.75L18.244 2Zm-1.21 18h1.83L7.05 3.9H5.09L17.034 20Z" /> },
  facebook: { label: "TESDEF on Facebook", icon: <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" /> },
  instagram: { label: "TESDEF on Instagram", icon: <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Z M12 7.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm0 8.08a3.18 3.18 0 1 1 0-6.36 3.18 3.18 0 0 1 0 6.36Zm5.14-8.28a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" /> },
  linkedin: { label: "TESDEF on LinkedIn", icon: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9V9Z" /> },
};

const LINKS = [
  {
    heading: "Organisation",
    items: [
      { label: "About TESDEF", href: "/about" },
      { label: "Founder's Story", href: "/founder" },
      { label: "Our Programmes", href: "/programmes" },
      { label: "Impact", href: "/impact" },
    ],
  },
  {
    heading: "Work",
    items: [
      { label: "Initiatives", href: "/projects" },
      { label: "News & Updates", href: "/news" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    heading: "Get involved",
    items: [
      { label: "Support TESDEF", href: "/donate" },
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Partner With Us", href: "/get-involved/partner" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  const socials = (Object.entries(CONTACT.socials) as [string, string][])
    .filter(([, url]) => url)
    .map(([key, url]) => ({ ...SOCIAL_ICONS[key], url }))
    .filter((s) => s.label);

  return (
    <footer className="bg-forest text-white/80">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto]">
          {/* Brand column */}
          <div className="space-y-4">
            <span className="inline-flex rounded-xl bg-white px-4 py-2.5 shadow-sm">
              <Image
                src="/images/logos/tesdef_logo_transparent.png"
                alt="TESDEF"
                width={854}
                height={311}
                className="h-8 w-auto"
              />
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Tamarakuro Environmental and Sustainable Development Foundation.
              Empowering Communities. Protecting Nature. Building the Future.
            </p>

            {socials.length > 0 && (
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-fresh hover:text-forest"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">{s.icon}</svg>
                  </a>
                ))}
              </div>
            )}

            {(CONTACT.address || CONTACT.email) && (
              <address className="not-italic text-xs text-white/50">
                {CONTACT.address && <>{CONTACT.address}<br /></>}
                {CONTACT.email && (
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-white/80">{CONTACT.email}</a>
                )}
              </address>
            )}
          </div>

          {/* Nav columns */}
          {LINKS.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/40 sm:flex-row">
          <p>© {year} TESDEF. All rights reserved.</p>
          <p>Empowering Communities. Protecting Nature. Building the Future.</p>
        </Container>
      </div>
    </footer>
  );
}
