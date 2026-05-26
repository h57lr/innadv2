import { SectionShell } from "@/components/SectionShell";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";
import type { ToolCategory } from "@/types/content";

export const metadata = {
  title: "Tools & Platforms | Enad Al-Shneikat",
  description:
    "Tools, platforms, and working systems grouped by the business functions they support across paid media, measurement, analytics, automation, ecommerce, and implementation.",
};

const borderStyle = "1px solid var(--grid-grey)";

const categories: { title: ToolCategory; description: string }[] = [
  { title: "Paid Media Platforms", description: "The platforms used to shape channel mix, audience strategy, creative testing, and budget allocation across acquisition activity." },
  { title: "Tracking & Attribution", description: "The measurement layer that helps teams trust conversion data before they optimize, report, or scale spend." },
  { title: "MMPs", description: "App attribution environments used to validate installs, in-app events, and partner performance more cleanly." },
  { title: "Analytics & BI", description: "Reporting and intelligence tools that turn channel, KPI, and market data into clearer operating visibility." },
  { title: "Automation & Data Workflows", description: "Systems used to reduce repetitive work, improve handoffs, and keep marketing and reporting operations moving." },
  { title: "Ecommerce & CMS", description: "The site and commerce environments where landing pages, funnels, and tracked conversion journeys need to align." },
  { title: "AI & Development Tools", description: "The current public examples here are implementation-oriented tools used for scripting, integrations, and API-based workflows rather than unsupported AI claims." },
];

export default function ToolsPage() {
  return (
    <SectionShell
      eyebrow="Tools & Platforms"
      title="Tools, platforms, and working systems grouped by practical business use"
      description="This page is organized around what each system helps a team do in practice, from paid acquisition and attribution to dashboards, automation, ecommerce, and implementation support."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ borderRadius: 24, border: borderStyle, padding: 28 }}>
          <div className="grouping-header-inner" style={{ display: "flex", gap: 20, justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ maxWidth: 640 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-secondary)", margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--signal-orange)", display: "inline-block" }} />
                Grouping Logic
              </p>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: "10px 0 0" }}>
                Structured to reflect how the stack supports growth decisions
              </h3>
              <p style={{ marginTop: 10, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                The categories below separate acquisition platforms from measurement systems, reporting layers, workflow tooling, and implementation support so the stack reads like an operating model, not a flat logo wall.
              </p>
            </div>
            <div style={{ borderRadius: 14, border: borderStyle, padding: "12px 16px", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink-secondary)", whiteSpace: "nowrap" }}>
              {tools.length} documented tools across {categories.length} grouped areas
            </div>
          </div>
          <p style={{ marginTop: 14, fontFamily: "var(--font-sans)", fontSize: 13, color: "#999" }}>
            Logo usage remains intentionally limited here because the repository does not currently include an approved set of platform brand assets.
          </p>
        </div>

        {categories.map((category) => {
          const groupedTools = tools.filter((tool) => tool.category === category.title);
          return (
            <section key={category.title} style={{ borderRadius: 24, border: borderStyle, padding: 28 }}>
              <div style={{ marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, borderBottom: borderStyle, paddingBottom: 20 }}>
                <div style={{ maxWidth: 640 }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: 0 }}>
                    {category.title}
                  </h3>
                  <p style={{ marginTop: 6, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                    {category.description}
                  </p>
                </div>
                <div style={{ borderRadius: 9999, border: borderStyle, padding: "6px 14px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-secondary)", whiteSpace: "nowrap" }}>
                  {groupedTools.length} tools
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="tools-grid-inner">
                {groupedTools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} showCategory={false} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .grouping-header-inner { flex-direction: column; align-items: flex-start !important; }
          .tools-grid-inner { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .tools-grid-inner { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </SectionShell>
  );
}
