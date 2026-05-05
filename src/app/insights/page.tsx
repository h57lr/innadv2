import { ArticleCard } from "@/components/ArticleCard";
import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";
import { insights } from "@/data/insights";

export const metadata = {
  title: "Insights | Enad Al-Shneikat",
  description:
    "Structured placeholder insights covering attribution, tracking, and decision-oriented reporting.",
};

export default function InsightsPage() {
  return (
    <>
      <SectionShell
        eyebrow="Insights"
        title="Structured article placeholders for future thought leadership"
        description="The goal here is route and content architecture, not final editorial copy. Each article has its own route-ready detail page."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </SectionShell>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTA
          title="Want to shape the editorial direction?"
          description="The insights architecture is in place and can be expanded with approved article content later."
          primaryLabel="Contact"
          primaryHref="/contact"
          secondaryLabel="View Tools"
          secondaryHref="/tools"
        />
      </div>
    </>
  );
}

