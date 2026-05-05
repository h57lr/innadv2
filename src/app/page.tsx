import Image from "next/image";
import Link from "next/link";

import { ArticleCard } from "@/components/ArticleCard";
import { CTA } from "@/components/CTA";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionShell } from "@/components/SectionShell";
import { ServiceCard } from "@/components/ServiceCard";
import { ToolCard } from "@/components/ToolCard";
import { caseStudies } from "@/data/caseStudies";
import { insights } from "@/data/insights";
import { services } from "@/data/services";
import { tools } from "@/data/tools";

import heroReference from "../../assets/images/Future-of-AI.jpg";

const expertiseBadges = [
  "Performance Marketing",
  "Tracking Architecture",
  "Attribution Validation",
  "BI Dashboards",
  "Workflow Automation",
  "Marketing Analytics",
];

const methodologySteps = [
  {
    title: "Diagnose",
    description:
      "Audit tracking, campaign structure, data sources, and visible performance gaps.",
  },
  {
    title: "Validate",
    description:
      "Cross-check platform reporting against analytics, MMPs, backend data, and reporting views.",
  },
  {
    title: "Build",
    description:
      "Implement cleaner tracking, dashboards, automations, and execution frameworks.",
  },
  {
    title: "Optimize",
    description:
      "Use more reliable signals to improve performance decisions and budget allocation.",
  },
  {
    title: "Scale",
    description:
      "Support growth teams with cleaner insights, stronger systems, and execution discipline.",
  },
];

const brandExperience = [
  "Western Union",
  "BMW Group",
  "Beiersdorf NIVEA",
  "Accor",
  "Fairmont Luxury Hotels & Resorts",
  "Nestle",
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Premium portfolio scaffold
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Digital Marketing & Marketing Technology Architect
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I help brands scale through performance marketing, clean tracking,
              automation, business intelligence, and reliable attribution systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                View Services
              </Link>
              <Link
                href="/case-studies"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Contact Me
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {expertiseBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-4 shadow-[0_24px_80px_-32px_rgba(56,189,248,0.35)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src={heroReference}
                alt="Temporary AI-themed placeholder visual reference"
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Temporary visual reference only. Replace with approved brand imagery
              later.
            </p>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Brand Experience"
        title="Experience across global and regional brand environments"
        description="This scaffold uses careful wording and text-based brand cards until approved logos or wording are supplied."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brandExperience.map((brand) => (
            <div
              key={brand}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-center text-sm font-medium text-slate-200"
            >
              {brand}
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Core Expertise"
        title="A structured foundation for the eventual portfolio narrative"
        description="The content is intentionally truthful and non-final. It is organized to support later copy refinement without rebuilding the UI architecture."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ServiceCard service={services[0]} />
          <ServiceCard service={services[1]} />
          <ServiceCard service={services[2]} />
          <ServiceCard service={services[3]} />
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="How I Work"
        title="Methodology built around diagnosis, validation, and scalable systems"
      >
        <div className="grid gap-4 lg:grid-cols-5">
          {methodologySteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/10 bg-slate-950/65 p-5"
            >
              <p className="text-sm font-semibold text-sky-300">Step {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Featured Structures"
        title="Case-study cards prepared as redacted, reusable content blocks"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Tools & Platforms"
        title="Text-based tool cards for the initial scaffold"
        description="Since no approved logo or icon set is in the repo yet, the tools page uses clean text-based cards that can be upgraded later."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tools.slice(0, 6).map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Insights"
        title="Initial article structures for future thought-leadership content"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </SectionShell>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTA
          title="Need clarity before scaling?"
          description="This contact entry point is wired and ready for approved contact details and final inquiry handling."
          primaryLabel="Contact Enad"
          primaryHref="/contact"
          secondaryLabel="Explore Services"
          secondaryHref="/services"
        />
      </div>
    </>
  );
}
