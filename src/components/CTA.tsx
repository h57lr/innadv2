import Link from "next/link";

type CTAProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.8)]">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
        {description}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

