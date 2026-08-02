import { Container } from "./Container";

/**
 * Temporary footer for the current sprint.
 * A full footer (site map, contact details, newsletter, legal links)
 * is intentionally deferred to a later sprint.
 */
const SOCIALS: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "TESDEF on X",
    href: "#",
    icon: (
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.9l-4.8-6.28L5.3 22H2.04l8-9.14L1.5 2h6.98l4.35 5.75L18.244 2Zm-1.21 18h1.83L7.05 3.9H5.09L17.034 20Z" />
    ),
  },
  {
    label: "TESDEF on Facebook",
    href: "#",
    icon: (
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    ),
  },
  {
    label: "TESDEF on Instagram",
    href: "#",
    icon: (
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71C3.21 8.48 3.2 8.85 3.2 12s.01 3.52.06 4.76c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.76-.07Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-.62a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
    ),
  },
  {
    label: "TESDEF on LinkedIn",
    href: "#",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9V9Z" />
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white/80">
      <Container className="flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-extrabold tracking-tight text-white">
            TESDEF
          </p>
          <p className="mt-1 text-sm text-white/70">
            Empowering Communities. Protecting Nature. Building the Future.
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-fresh hover:text-forest"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5">
          <p className="text-center text-xs text-white/60">
            © {year} Tamarakuro Environmental and Sustainable Development
            Foundation (TESDEF). All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
