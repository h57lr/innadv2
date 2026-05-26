import { ArticleCard } from "@/components/ArticleCard";
import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";
import { insights } from "@/data/insights";

export const metadata = {
  title: "Insights | Enad Al-Shneikat",
  description:
    "Draft insight outlines covering performance marketing, attribution, tracking, analytics, automation, AI adoption, and BI reporting.",
};

export default function InsightsPage() {
  return (
    <>
      <SectionShell
        eyebrow="Insights"
        title="Practical insight outlines for measurement, growth operations, and reporting"
        description="This section is intentionally presented as draft article architecture rather than finished editorial. Each preview opens a structured placeholder page designed for future development around real operating questions."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="insights-grid-inner">
          {insights.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </SectionShell>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px 96px" }} className="cta-section-inner">
        <CTA
          title="Need one of these topics turned into a practical workshop or advisory conversation?"
          description="Use the contact page to explain the audience, the decision point, and the kind of deliverable or support you have in mind."
          primaryLabel="Discuss the need"
          primaryHref="/contact"
          secondaryLabel="View Tools"
          secondaryHref="/tools"
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .insights-grid-inner { grid-template-columns: 1fr !important; }
          .cta-section-inner { padding: 0 24px 64px !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .insights-grid-inner { grid-template-columns: repeat(2, 1fr) !important; }
        }
      ` }} />
    </>
  );
}
