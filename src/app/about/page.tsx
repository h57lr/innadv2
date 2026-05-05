import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";

export const metadata = {
  title: "About | Enad Al-Shneikat",
  description:
    "About Enad Al-Shneikat and the portfolio scaffold for digital marketing, martech, BI, and automation work.",
};

const profilePoints = [
  "Experience across global brand environments including Western Union, BMW Group, Beiersdorf NIVEA, Accor, Fairmont Luxury Hotels & Resorts, and Nestle.",
  "A background spanning paid media, analytics, tracking architecture, business intelligence, automation, and execution support.",
  "A working style focused on practical diagnostics, clean systems, and decision-ready reporting rather than hype.",
];

export default function AboutPage() {
  return (
    <>
      <SectionShell
        eyebrow="About"
        title="A clean, editable structure for Enad's professional narrative"
        description="This page is intentionally structured for later refinement. It uses the approved project brief and truthful source wording without over-finalizing the copy yet."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-white/10 bg-slate-950/65 p-8">
            <h3 className="text-2xl font-semibold text-white">Professional summary</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Enad has worked in performance marketing, campaign execution,
              automation, business intelligence, and analytics-focused functions
              across brand and growth environments. The portfolio is being structured
              to communicate that technical breadth clearly and credibly.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              He specializes in multi-market paid media, measurement systems,
              tracking validation, and reporting structures that help teams move with
              more confidence.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white">Working profile</h3>
            <ul className="mt-5 space-y-4 text-base leading-7 text-slate-300">
              {profilePoints.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
        </div>
      </SectionShell>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTA
          title="Explore service areas next"
          description="The About structure is in place. Dedicated service pages now hold the detailed capability scaffolding."
          primaryLabel="View Services"
          primaryHref="/services"
          secondaryLabel="Contact"
          secondaryHref="/contact"
        />
      </div>
    </>
  );
}
