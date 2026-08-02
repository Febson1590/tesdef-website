import { cn } from "@/lib/utils";

export function ProgressBar({
  percent,
  className,
  showLabel = false,
}: {
  percent: number;
  className?: string;
  showLabel?: boolean;
}) {
  const clamped = Math.min(Math.max(percent, 0), 100);
  return (
    <div className={cn("relative", className)}>
      <div className="h-2 overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full rounded-full bg-fresh transition-all duration-500"
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {showLabel && (
        <span className="mt-1 block text-right text-xs font-medium text-muted">
          {clamped}%
        </span>
      )}
    </div>
  );
}
