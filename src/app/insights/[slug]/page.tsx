import { notFound } from "next/navigation";

import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";
import { insights } from "@/data/insights";

type InsightDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Insight Not Found | Enad Al-Shneikat",
    };
  }

  return {
    title: `${article.title} | Enad Al-Shneikat`,
    description: article.summary,
  };
}

export default async function InsightDetailPage({
  params,
}: InsightDetailPageProps) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <SectionShell
        eyebrow={article.category}
        title={article.title}
        description={article.summary}
      >
        <article className="rounded-3xl border border-white/10 bg-slate-950/65 p-6 sm:p-8">
          <div className="space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h3 className="text-2xl font-semibold text-white">
                  {section.heading}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </article>
      </SectionShell>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTA
          title="Return to the insight library"
          description="These pages are route-valid placeholders ready for final editorial development."
          primaryLabel="Back to Insights"
          primaryHref="/insights"
          secondaryLabel="Contact"
          secondaryHref="/contact"
        />
      </div>
    </>
  );
}

