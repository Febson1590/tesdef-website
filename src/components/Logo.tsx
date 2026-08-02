import Link from "next/link";

/**
 * Temporary TESDEF wordmark + nature-inspired leaf mark.
 * Designed to be easily swapped for the real logo later
 * (drop the asset into /public/images/logos and replace the SVG below).
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="TESDEF — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-xl bg-forest transition-transform duration-200 group-hover:-translate-y-0.5"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* leaf */}
          <path
            d="M20 4C11 4 4 9.5 4 17c0 1.2.2 2.3.5 3.3C6 14 11 10.5 17 9.5c-4.5 2-7.8 5.4-9.4 10.5.9.3 1.9.5 3 .5C18 20.5 20 12 20 4Z"
            fill="#8CC63F"
          />
          <path
            d="M8 20C9.5 14 13 11 17 9.5"
            stroke="#0B3D2E"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-forest">
          TESDEF
        </span>
        <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.16em] text-muted sm:block">
          Environmental Foundation
        </span>
      </span>
    </Link>
  );
}
