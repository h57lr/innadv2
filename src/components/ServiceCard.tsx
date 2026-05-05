import Link from "next/link";

import type { Service } from "@/types/content";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/65 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
        Service
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
        {service.summary}
      </p>
      <ul className="mt-5 space-y-2 text-sm text-slate-400">
        {service.capabilities.slice(0, 3).map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center text-sm font-semibold text-sky-300 transition hover:text-sky-200"
      >
        View service details
      </Link>
    </article>
  );
}

