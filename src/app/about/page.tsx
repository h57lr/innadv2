import { CTA } from "@/components/CTA";
import { BrandLogoMarquee, type BrandLogoItem } from "@/components/BrandLogoMarquee";
import { SectionShell } from "@/components/SectionShell";

export const metadata = {
  title: "About | Enad Al-Shneikat",
  description:
    "About Enad Al-Shneikat, with experience across performance marketing, martech, attribution, automation, BI, and reporting.",
};

const borderStyle = "1px solid var(--grid-grey)";

const storyHighlights = [
  "Multi-market paid media support across major platforms and funnel stages.",
  "Tracking, attribution, and validation work across web, app, and reporting environments.",
  "BI, dashboard, and reporting structures designed to help teams make clearer decisions.",
  "Automation and process improvement aimed at reducing manual friction and improving consistency.",
];

const brandExperience: BrandLogoItem[] = [
  { name: "Western Union", logoSrc: "/assets/brands/western-union.svg", tone: "western-union" },
  { name: "BMW Group", logoSrc: "/assets/brands/bmw.webp", tone: "bmw" },
  { name: "Beiersdorf NIVEA", logoSrc: "/assets/brands/nivea.svg", tone: "nivea" },
  { name: "Accor", logoSrc: "/assets/brands/accor.png", tone: "accor" },
  { name: "Fairmont Luxury Hotels & Resorts", logoSrc: "/assets/brands/fairmont.png", tone: "fairmont" },
  { name: "Rixos", logoSrc: "/assets/brands/rixos.png", tone: "rixos" },
  { name: "Nestle", logoSrc: "/assets/brands/nestle.jpg", tone: "nestle" },
  { name: "MINI Cooper", logoSrc: "/assets/brands/mini.svg", tone: "mini" },
  { name: "Rolls-Royce Motor Cars", logoSrc: "/assets/brands/rolls-royce.jpg", tone: "rolls-royce" },
];

const capabilityAreas = [
  { title: "Performance marketing", description: "Campaign structure, audience planning, testing logic, and channel coordination across performance media environments." },
  { title: "Martech and tracking", description: "Support across GTM, GA4, pixels, conversion APIs, event design, and measurement setup that needs to be clean enough to trust." },
  { title: "Attribution and validation", description: "Cross-checking platform, analytics, and reporting signals to identify discrepancies before they distort optimization decisions." },
  { title: "BI and reporting", description: "Dashboard planning, KPI alignment, and multi-channel reporting structures built to improve visibility, not just add more charts." },
  { title: "Automation and operations", description: "Workflow improvements and reporting automation that reduce repetitive effort and help teams spend more time acting on the data." },
];

const workingStyle = [
  { title: "Start with the operating reality", description: "I begin with what the team is already running, how decisions are currently made, and where the friction is showing up." },
  { title: "Validate before escalating", description: "Before performance conclusions turn into budget or strategy changes, I focus on whether the tracking and reporting logic can support them." },
  { title: "Build for practical use", description: "The goal is not a more complicated stack. It is a cleaner one that marketers, analysts, and leadership can actually use day to day." },
  { title: "Keep the work collaborative", description: "I work closely with growth, performance, and reporting teams so media execution, measurement, and visibility improve together." },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ borderBottom: borderStyle }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 64px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 48,
          }}
          className="about-grid-inner"
        >
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-black)", margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--signal-orange)", display: "inline-block" }} />
              About
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 42, lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--ink-black)", margin: "20px 0 0" }}>
              I help teams connect performance marketing with cleaner measurement, reporting, and operational clarity.
            </h1>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16, fontSize: 16, lineHeight: 1.7, color: "var(--ink-secondary)", fontFamily: "var(--font-sans)" }}>
              <p style={{ margin: 0 }}>
                My background sits at the intersection of paid media, marketing technology, attribution, business intelligence, and automation. I have worked across brand environments where campaign execution, data quality, and reporting visibility all shape the quality of growth decisions.
              </p>
              <p style={{ margin: 0 }}>
                That means the work is rarely limited to one channel or one tool. In some cases the need is better campaign structure and full-funnel thinking. In others it is cleaner tracking, stronger validation, more reliable dashboards, or less manual reporting overhead.
              </p>
              <p style={{ margin: 0 }}>
                What ties it together is a practical focus on helping teams trust the numbers they are using, understand what is happening across the stack, and move with more confidence.
              </p>
            </div>
          </div>

          <aside style={{ borderRadius: 24, border: borderStyle, padding: 28 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-secondary)", margin: 0 }}>
              Core Focus
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: "12px 0 0" }}>
              A hybrid profile across media, martech, attribution, BI, and automation.
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
              {storyHighlights.map((highlight) => (
                <li key={highlight} style={{ borderRadius: 14, border: borderStyle, padding: "12px 16px", fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "var(--ink-secondary)" }}>
                  {highlight}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 16, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "#999" }}>
              I care less about adding noise to a stack and more about making performance signals, reporting, and execution easier for teams to rely on.
            </p>
          </aside>
        </div>
      </section>

      <SectionShell eyebrow="Brand Experience" title="Experience across global and regional brand environments" description="My background includes work across teams and environments connected to brands such as Western Union, BMW Group, Beiersdorf NIVEA, Accor, Fairmont, Rixos, Nestle, MINI Cooper, and Rolls-Royce Motor Cars.">
        <BrandLogoMarquee brands={brandExperience} />
        <div style={{ marginTop: 16, borderRadius: 20, border: borderStyle, padding: 20, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
          This portfolio keeps client details, internal systems, and performance data confidential. The emphasis here is on the kind of work I have supported: improving campaign execution, measurement confidence, reporting visibility, and operational reliability.
        </div>
      </SectionShell>

      <SectionShell eyebrow="Capability Mix" title="The value sits in how these disciplines work together" description="Performance marketing is stronger when measurement is cleaner, reporting is more useful, and the underlying workflows are easier to maintain.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }} className="caps-grid-inner">
          {capabilityAreas.map((area) => (
            <article key={area.title} style={{ borderRadius: 20, border: borderStyle, padding: 20 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 16, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: 0 }}>
                {area.title}
              </h3>
              <p style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="How I Work" title="A practical, collaborative way of working with teams" description="The approach is structured to reduce ambiguity first, then improve the systems behind media performance and reporting.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="work-grid-inner">
          {workingStyle.map((item) => (
            <article key={item.title} style={{ borderRadius: 20, border: borderStyle, padding: 20 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 18, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: 0 }}>
                {item.title}
              </h3>
              <p style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px 96px" }} className="cta-section-inner">
        <CTA
          title="Need paid media, measurement, and reporting to align more clearly?"
          description="If performance data, attribution, dashboards, or automation are creating more questions than answers, use the contact page to outline the challenge, the current systems, and the kind of support you want to explore."
          primaryLabel="Discuss Your Challenge"
          primaryHref="/contact"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .about-grid-inner { grid-template-columns: 1fr !important; padding: 48px 24px !important; }
          .brand-grid-inner { grid-template-columns: repeat(2, 1fr) !important; }
          .caps-grid-inner { grid-template-columns: 1fr !important; }
          .work-grid-inner { grid-template-columns: repeat(2, 1fr) !important; }
          .cta-section-inner { padding: 0 24px 64px !important; }
        }
        @media (max-width: 640px) {
          .brand-grid-inner { grid-template-columns: 1fr !important; }
          .work-grid-inner { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </>
  );
}
