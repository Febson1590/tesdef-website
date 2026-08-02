import { cn } from "@/lib/utils";

type Variant = "default" | "success" | "warning" | "info" | "dark";

const variants: Record<Variant, string> = {
  default: "bg-mint text-forest",
  success: "bg-fresh/15 text-primary",
  warning: "bg-amber-50 text-amber-700",
  info: "bg-blue-50 text-blue-700",
  dark: "bg-white/15 text-white",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
