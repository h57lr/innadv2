import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | Enad Al-Shneikat",
  description:
    "Service overview for performance marketing, tracking, BI, automation, martech consulting, CRO, and research support.",
};

export default function ServicesPage() {
  return (
    <>
      <SectionShell
        eyebrow="Services"
        title="Seven core service areas, each with its own route-ready structure"
        description="This page is intentionally modular. Each card links to a dedicated service detail page so the site can expand without reworking the architecture."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </SectionShell>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTA
          title="Need support across multiple service areas?"
          description="The initial structure supports both dedicated service pages and later cross-service messaging once the final portfolio copy is approved."
          primaryLabel="Start a conversation"
          primaryHref="/contact"
          secondaryLabel="See Case Studies"
          secondaryHref="/case-studies"
        />
      </div>
    </>
  );
}

