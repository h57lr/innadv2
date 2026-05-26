import Link from "next/link";
import { notFound } from "next/navigation";

import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";
import { services } from "@/data/services";
import type { Service } from "@/types/content";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

type DetailCardProps = {
  title: string;
  items: string[];
  tone?: "solid" | "soft";
  className?: string;
};

const borderStyle = "1px solid var(--grid-grey)";

function DetailCard({ title, items, tone = "solid", className = "" }: DetailCardProps) {
  return (
    <article
      style={{
        borderRadius: 24,
        border: borderStyle,
        padding: 24,
        background: tone === "soft" ? "rgba(0,0,0,0.015)" : "transparent",
      }}
      className={className}
    >
      <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 18, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: 0 }}>
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item) => (
          <li key={item} style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
            - {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function RelatedServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      style={{
        display: "block",
        borderRadius: 24,
        border: borderStyle,
        padding: 24,
        textDecoration: "none",
        transition: "border-color 160ms ease",
      }}
    >
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-secondary)", margin: 0 }}>
        {service.category}
      </p>
      <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 20, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: "10px 0 0" }}>
        {service.title}
      </h3>
      <p style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
        {service.summary}
      </p>
      <span style={{ marginTop: 12, display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--ink-black)", opacity: 0.6 }}>
        Review this service
        <span style={{ fontSize: 16 }}>→</span>
      </span>
    </Link>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return { title: `${service.title} | Enad Al-Shneikat`, description: service.summary };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter((item): item is Service => Boolean(item));

  const contactHref = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <>
      <SectionShell
        eyebrow={service.category}
        title={service.title}
        description={service.intro}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 20 }} className="intro-grid-inner">
          <article style={{ borderRadius: 24, border: borderStyle, padding: 28 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-secondary)", margin: 0 }}>
              Best fit for
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
              {service.idealFor.map((item) => (
                <li key={item} style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                  - {item}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 20 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>
                Focus areas
              </p>
              <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {service.focusAreas.map((item) => (
                  <span key={item} style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 9999, border: borderStyle, color: "var(--ink-secondary)" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <aside style={{ borderRadius: 24, border: borderStyle, padding: 28 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-secondary)", margin: 0 }}>
              Why teams usually start here
            </p>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: "12px 0 0" }}>
              {service.category}
            </h3>
            <p style={{ marginTop: 12, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
              {service.ctaDescription}
            </p>
            <Link href={contactHref} className="btn-edit btn-edit--primary" style={{ marginTop: 20 }}>
              Discuss this service
            </Link>
          </aside>
        </div>

        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="detail-cards-inner">
          <DetailCard title="What this service solves" items={service.solves} />
          <DetailCard title="What Enad can do" items={service.capabilities} />
          <DetailCard title="Typical problems this work helps untangle" items={service.typicalProblems} tone="soft" />
          <DetailCard title="Tools and platforms commonly involved" items={service.tools} tone="soft" />
          <DetailCard title="Typical outputs and deliverables" items={service.deliverables} className="full-width-inner" />
        </div>
      </SectionShell>

      {relatedServices.length > 0 && (
        <SectionShell
          eyebrow="Related Services"
          title="Adjacent service areas that often connect to this work"
          description="If the challenge crosses acquisition, measurement, reporting, or systems design, these pages are usually the next logical places to review."
          className="pt-0"
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="related-grid-inner">
            {relatedServices.map((rs) => (
              <RelatedServiceCard key={rs.slug} service={rs} />
            ))}
          </div>
        </SectionShell>
      )}

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px 96px" }} className="cta-section-inner">
        <CTA
          title={`Discuss ${service.title}`}
          description={`${service.ctaDescription} If this reflects the current bottleneck, the next step is a practical inquiry about scope, systems involved, and what should be prioritized first.`}
          primaryLabel="Start an inquiry for this service"
          primaryHref={contactHref}
          secondaryLabel="Back to Services"
          secondaryHref="/services"
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .intro-grid-inner { grid-template-columns: 1fr !important; }
          .detail-cards-inner { grid-template-columns: 1fr !important; }
          .full-width-inner { grid-column: span 1 !important; }
          .related-grid-inner { grid-template-columns: 1fr !important; }
          .cta-section-inner { padding: 0 24px 64px !important; }
        }
      ` }} />
    </>
  );
}
