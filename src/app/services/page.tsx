import Link from "next/link";

import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | Enad Al-Shneikat",
  description:
    "Service overview covering performance marketing, tracking and attribution, analytics dashboards, BI, automation, growth consulting, CRO, and research support.",
};

const borderStyle = "1px solid var(--grid-grey)";

const categoryGroups = [
  { title: "Performance and growth execution", description: "Performance marketing, website and CRO support, and practical guidance around how acquisition and conversion decisions connect." },
  { title: "Measurement and decision systems", description: "Tracking, attribution, analytics dashboards, and BI work that improves confidence in what the numbers mean and how they should be used." },
  { title: "Operations and growth infrastructure", description: "Automation, martech consulting, and research support for teams that need cleaner systems, clearer governance, and better planning context." },
];

const serviceConnections = [
  { title: "Performance plus measurement", description: "When channel performance is under review, tracking and attribution usually need to be strong enough to support the optimization decisions behind it.", links: [{ label: "Performance Marketing", href: "/services/performance-marketing" }, { label: "Tracking & Attribution", href: "/services/tracking-attribution" }] },
  { title: "Dashboards plus automation", description: "Reporting becomes more useful when the KPI logic is clear and the recurring operational work behind it is not heavily manual.", links: [{ label: "BI & Reporting Automation", href: "/services/bi-reporting-automation" }, { label: "Workflow Automation", href: "/services/workflow-automation-rpa" }] },
  { title: "Consulting plus conversion readiness", description: "Growth consulting, site experience, and planning work are often useful when the challenge spans systems, journeys, and next-step priorities rather than one tool alone.", links: [{ label: "Growth Consulting", href: "/services/martech-consulting" }, { label: "CRO & E-commerce", href: "/services/website-cro-ecommerce" }, { label: "Market Research", href: "/services/market-research-insights" }] },
];

export default function ServicesPage() {
  return (
    <>
      <SectionShell
        eyebrow="Services"
        title="Services designed for teams that need clearer growth systems"
        description="The service structure covers performance marketing, tracking and attribution, analytics dashboards, BI, automation, growth consulting, CRO, and research support. Each page explains where that service fits, what it tends to solve, and how it connects to adjacent workstreams."
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 20 }} className="intro-grid-inner">
          <article style={{ borderRadius: 24, border: borderStyle, padding: 28 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-secondary)", margin: 0 }}>
              What to expect
            </p>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: "12px 0 0" }}>
              A practical service map for acquisition, measurement, and operational clarity.
            </h3>
            <p style={{ marginTop: 14, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
              These are not fixed packages or inflated promises. They are clear entry points into the kinds of performance, measurement, reporting, and systems work already reflected across the wider portfolio.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
              <li>- Start with the area that currently creates the most uncertainty or operational drag.</li>
              <li>- Use the detail pages to see what that work typically covers, what kinds of problems it helps untangle, and what outputs it can produce.</li>
              <li>- If the issue crosses channels, tracking, dashboards, or stack design, the related-service links show the next logical pages to review.</li>
            </ul>
          </article>

          <aside style={{ borderRadius: 24, border: borderStyle, padding: 28 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-secondary)", margin: 0 }}>
              Core categories
            </p>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              {categoryGroups.map((group) => (
                <div key={group.title} style={{ borderRadius: 14, border: borderStyle, padding: 14 }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--ink-black)", margin: 0 }}>{group.title}</h3>
                  <p style={{ marginTop: 4, fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.5, color: "var(--ink-secondary)" }}>{group.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="services-list-inner">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} variant="expanded" />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="How Services Connect"
        title="Most service conversations cross more than one layer of the growth system"
        description="Some teams arrive knowing exactly what they need. Others need help identifying the right starting point. These are typical ways the service areas connect when the goal is better clarity and execution at the same time."
        className="pt-0"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="connect-grid-inner">
          {serviceConnections.map((conn) => (
            <article key={conn.title} style={{ borderRadius: 24, border: borderStyle, padding: 24 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 18, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: 0 }}>
                {conn.title}
              </h3>
              <p style={{ marginTop: 10, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                {conn.description}
              </p>
              <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {conn.links.map((link) => (
                  <Link key={link.href} href={link.href} style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 9999, border: borderStyle, color: "var(--ink-secondary)", textDecoration: "none", transition: "border-color 160ms ease" }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px 96px" }} className="cta-section-inner">
        <CTA
          title="Not sure which service should come first?"
          description="If the bottleneck crosses channels, tracking, dashboards, or automation, use the contact page to describe the issue and the current stack so the right starting point is easier to identify."
          primaryLabel="Get help choosing a starting point"
          primaryHref="/contact"
          secondaryLabel="See Case Studies"
          secondaryHref="/case-studies"
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .intro-grid-inner { grid-template-columns: 1fr !important; }
          .services-list-inner { grid-template-columns: 1fr !important; }
          .connect-grid-inner { grid-template-columns: 1fr !important; }
          .cta-section-inner { padding: 0 24px 64px !important; }
        }
      ` }} />
    </>
  );
}
