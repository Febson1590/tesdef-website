import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  id,
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.12em]",
            dark ? "text-fresh/80" : "text-primary/70"
          )}
        >
          {label}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl",
          dark ? "text-white" : "text-forest"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
