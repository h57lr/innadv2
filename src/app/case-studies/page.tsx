import { CTA } from "@/components/CTA";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionShell } from "@/components/SectionShell";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "Case Studies | Enad Al-Shneikat",
  description:
    "Redacted case-study structures covering tracking, attribution, BI, and performance diagnostics.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <SectionShell
        eyebrow="Case Studies"
        title="Redacted case-study structures without invented metrics"
        description="The case-study framework is designed to stay professional and truthful while leaving room for validated outcomes later."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {caseStudies.map((caseStudy) => (
            <article
              id={caseStudy.slug}
              key={caseStudy.slug}
              className="rounded-3xl border border-white/10 bg-slate-950/65 p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                {caseStudy.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {caseStudy.title}
              </h3>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Context
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {caseStudy.context}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Challenge
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Solution
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {caseStudy.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Validation
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {caseStudy.validation}
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 text-sm text-slate-300">
                <span className="font-semibold text-white">Business impact:</span>{" "}
                {caseStudy.impactNote}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTA
          title="Need a more relevant example?"
          description="These are intentionally generic, redacted structures. Later phases can refine them with approved narratives and non-confidential outcomes."
          primaryLabel="Explore Services"
          primaryHref="/services"
          secondaryLabel="Contact"
          secondaryHref="/contact"
        />
      </div>
    </>
  );
}

