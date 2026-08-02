import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-forest hover:shadow-md focus-visible:outline-forest",
  secondary:
    "border border-primary/30 bg-white text-primary hover:border-primary hover:bg-mint focus-visible:outline-primary",
  ghost:
    "text-ink hover:bg-mint focus-visible:outline-primary",
  onDark:
    "bg-fresh text-forest shadow-sm hover:bg-white focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

/**
 * Reusable call-to-action. Renders a Next.js <Link> (internal),
 * a plain <a> (external), matching the brand button system.
 */
export function Button({
  href,
  external = false,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: ButtonAsLink) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
