import { CTA } from "@/components/CTA";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionShell } from "@/components/SectionShell";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "Case Studies | Enad Al-Shneikat",
  description:
    "Redacted case-study structures covering tracking, attribution, BI, and performance diagnostics without unsupported metrics.",
};

const borderStyle = "1px solid var(--grid-grey)";

const proofStandards = [
  { title: "Redacted by default", description: "Client names, budgets, screenshots, platform exports, and internal process details stay out of the public version unless explicitly approved." },
  { title: "Outcome types over invented numbers", description: "Each case study describes the kind of result produced, such as stronger measurement confidence or cleaner reporting interpretation, without publishing unsupported percentages or revenue claims." },
  { title: "Proof anchored in actual work", description: "Public proof points focus on audits, validation logic, implementation decisions, reporting structures, and workflow improvements that can be credibly discussed." },
];

export default function CaseStudiesPage() {
  return (
    <>
      <SectionShell
        eyebrow="Case Studies"
        title="Redacted case studies built around credible proof structure"
        description="These examples stay professional, claim-safe, and confidentiality-aware by showing the problem, role, approach, tools, and outcome type without inventing metrics or exposing client details."
      >
        <div style={{ display: "grid", gridTemplateColumns: "0.95fr 2.05fr", gap: 20 }} className="proof-grid-inner">
          <aside style={{ borderRadius: 20, border: `1px solid rgba(230,95,46,0.2)`, background: "rgba(230,95,46,0.04)", padding: 24 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--signal-orange)", margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--signal-orange)", display: "inline-block" }} />
              Public Proof Standard
            </p>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: "12px 0 0" }}>
              Case studies stay credible by separating verified work from private results.
            </h3>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>
              {proofStandards.map((s) => (
                <div key={s.title}>
                  <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--ink-black)", margin: 0 }}>{s.title}</h4>
                  <p style={{ marginTop: 6, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>{s.description}</p>
                </div>
              ))}
            </div>
          </aside>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="cards-grid-inner">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 32 }}>
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.slug} id={caseStudy.slug} style={{ borderRadius: 24, border: borderStyle, padding: 32 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 9999, border: borderStyle, color: "var(--signal-orange)" }}>
                  {caseStudy.category}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 9999, border: borderStyle, color: "var(--ink-secondary)" }}>
                  {caseStudy.clientLabel}
                </span>
              </div>

              <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1.5fr 0.9fr", gap: 20, alignItems: "start" }} className="detail-grid-inner">
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 24, lineHeight: 1.08, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: 0 }}>
                    {caseStudy.title}
                  </h3>
                  <p style={{ marginTop: 10, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                    {caseStudy.summary}
                  </p>
                </div>
                <div style={{ borderRadius: 16, border: `1px dashed var(--grid-grey)`, background: "rgba(0,0,0,0.02)", padding: 16 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>Outcome Type</p>
                  <p style={{ marginTop: 6, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5, color: "var(--ink-black)" }}>{caseStudy.outcomeType}</p>
                </div>
              </div>

              <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="approach-grid-inner">
                <div style={{ borderRadius: 16, border: borderStyle, padding: 16 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>Problem</p>
                  <p style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>{caseStudy.problem}</p>
                </div>
                <div style={{ borderRadius: 16, border: borderStyle, padding: 16 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>Role</p>
                  <p style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>{caseStudy.role}</p>
                </div>
                <div style={{ borderRadius: 16, border: borderStyle, padding: 16, gridColumn: "span 2" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>Approach</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                    {caseStudy.approach.map((step) => (
                      <li key={step} style={{ display: "flex", gap: 10, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "var(--ink-secondary)" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--signal-orange)", marginTop: 6, flexShrink: 0 }} />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ borderRadius: 16, border: borderStyle, padding: 16, gridColumn: "span 2" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>Tools</p>
                  <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {caseStudy.tools.map((tool) => (
                      <span key={tool} style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 9999, border: borderStyle, color: "var(--ink-secondary)" }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 16 }} className="proof-conf-grid-inner">
                <div style={{ borderRadius: 16, border: borderStyle, padding: 16 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>Proof Structure</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
                    {caseStudy.proofPoints.map((point) => (
                      <li key={point} style={{ display: "flex", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "var(--ink-secondary)" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#2e7d32", marginTop: 6, flexShrink: 0 }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ borderRadius: 16, border: `1px solid rgba(0,0,0,0.08)`, background: "rgba(0,0,0,0.02)", padding: 16 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>Confidentiality</p>
                  <p style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "var(--ink-secondary)" }}>{caseStudy.confidentiality}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px 96px" }} className="cta-section-inner">
        <CTA
          title="Need a similar challenge unpacked in your environment?"
          description="These public case studies stay deliberately redacted. Use the contact page to outline the issue, the platforms involved, and the kind of support you want to explore."
          primaryLabel="Discuss a similar challenge"
          primaryHref="/contact"
          secondaryLabel="Review Services"
          secondaryHref="/services"
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .proof-grid-inner { grid-template-columns: 1fr !important; }
          .cards-grid-inner { grid-template-columns: 1fr !important; }
          .detail-grid-inner { grid-template-columns: 1fr !important; }
          .approach-grid-inner { grid-template-columns: 1fr !important; }
          .approach-grid-inner > div[style*="span 2"] { grid-column: span 1 !important; }
          .proof-conf-grid-inner { grid-template-columns: 1fr !important; }
          .cta-section-inner { padding: 0 24px 64px !important; }
        }
      ` }} />
    </>
  );
}
