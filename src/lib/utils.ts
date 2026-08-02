import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "NGN") {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date | string, opts?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...opts,
  }).format(new Date(date));
}

export function formatShortDate(date: Date | string) {
  return formatDate(date, { day: "numeric", month: "short", year: "numeric" });
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function progressPercent(raised: number, goal: number) {
  if (!goal) return 0;
  return Math.min(Math.round((raised / goal) * 100), 100);
}

export function parseJsonField<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function truncate(text: string, length = 160) {
  return text.length > length ? text.slice(0, length).trimEnd() + "…" : text;
}
