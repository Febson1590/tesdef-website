import Link from "next/link";
import Image from "next/image";

/**
 * Official TESDEF logo (leaf mark + wordmark + tagline lockup).
 * Uses the background-removed, transparent version so it sits cleanly on
 * any surface. Source asset: /public/images/logos/tesdef_logo.png.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="TESDEF — Tamarakuro Environmental and Sustainable Development Foundation, home"
      className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
    >
      <Image
        src="/images/logos/tesdef_logo_transparent.png"
        alt="TESDEF — Tamarakuro Environmental and Sustainable Development Foundation"
        width={854}
        height={311}
        priority
        className="h-10 w-auto lg:h-11"
      />
    </Link>
  );
}
