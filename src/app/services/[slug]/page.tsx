import { notFound } from "next/navigation";

import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";
import { services } from "@/data/services";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Enad Al-Shneikat",
    };
  }

  return {
    title: `${service.title} | Enad Al-Shneikat`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SectionShell
        eyebrow="Service Detail"
        title={service.title}
        description={service.intro}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-xl font-semibold text-white">
              What this service solves
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {service.solves.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-xl font-semibold text-white">What Enad can do</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {service.capabilities.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Tools and platforms involved
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {service.tools.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Typical outputs and deliverables
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {service.deliverables.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </SectionShell>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTA
          title="Discuss this service area"
          description="This detail page is scaffolded for future refinement with approved proof points, platform specifics, and final portfolio copy."
          primaryLabel="Contact"
          primaryHref="/contact"
          secondaryLabel="Back to Services"
          secondaryHref="/services"
        />
      </div>
    </>
  );
}

