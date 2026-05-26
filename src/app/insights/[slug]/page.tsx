import { notFound } from "next/navigation";

import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";
import { insights } from "@/data/insights";

type InsightDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const borderStyle = "1px solid var(--grid-grey)";

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) return { title: "Insight Not Found" };
  return { title: `${article.title} | Enad Al-Shneikat`, description: article.summary };
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <SectionShell
        eyebrow={article.category}
        title={article.title}
        description={article.summary}
      >
        <article style={{ borderRadius: 24, border: borderStyle, padding: 32 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 9999, border: borderStyle, color: "var(--ink-secondary)" }}>
              {article.status}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 9999, border: borderStyle, color: "var(--ink-secondary)" }}>
              {article.readingTime}
            </span>
          </div>

          <div style={{ marginTop: 20, borderRadius: 16, border: `1px solid rgba(230,95,46,0.2)`, background: "rgba(230,95,46,0.04)", padding: 20 }}>
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--signal-orange)", margin: 0 }}>
              Draft Intent
            </h2>
            <p style={{ marginTop: 10, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
              {article.intent}
            </p>
            <p style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "#999" }}>
              This page is a structured placeholder, not a finished article. It exists to show topic direction, information architecture, and internal linking for future editorial work.
            </p>
          </div>

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 32 }}>
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.08, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: 0 }}>
                  {section.heading}
                </h3>
                <p style={{ marginTop: 12, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                  {section.body}
                </p>
                {section.bullets ? (
                  <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet} style={{ display: "flex", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "var(--ink-secondary)" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#999", marginTop: 6, flexShrink: 0 }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.note ? (
                  <p style={{ marginTop: 12, borderRadius: 14, border: borderStyle, padding: 14, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "var(--ink-secondary)" }}>
                    {section.note}
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </SectionShell>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px 96px" }} className="cta-section-inner">
        <CTA
          title="Return to the insight library"
          description="These route-ready drafts can be expanded later into full articles, workshop notes, or client education pieces."
          primaryLabel="Back to Insights"
          primaryHref="/insights"
          secondaryLabel="Ask about this topic"
          secondaryHref="/contact"
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .cta-section-inner { padding: 0 24px 64px !important; }
        }
      ` }} />
    </>
  );
}
