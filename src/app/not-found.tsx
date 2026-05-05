import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
        Not Found
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-white">
        The page you requested does not exist.
      </h1>
      <p className="mt-4 text-base leading-7 text-slate-300">
        Return to the main portfolio scaffold or continue through the primary
        sections.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
