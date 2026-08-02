import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">404</p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-forest sm:text-4xl">Page not found</h1>
      <p className="mx-auto mt-5 max-w-md text-base text-muted">
        This page does not exist or may have moved. Try navigating from the homepage.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-forest"
        >
          Go to homepage
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center rounded-full border border-black/15 px-6 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
