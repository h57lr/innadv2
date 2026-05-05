import { SectionShell } from "@/components/SectionShell";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const metadata = {
  title: "Tools & Platforms | Enad Al-Shneikat",
  description:
    "Platform and tool categories covering paid media, analytics, BI, automation, CRM, and research support.",
};

const categories = [
  "Paid Media",
  "Tracking & Analytics",
  "MMP & App Analytics",
  "BI & Reporting",
  "Automation & RPA",
  "Email & CRM",
  "Website & E-commerce",
  "Research & Intelligence",
] as const;

export default function ToolsPage() {
  return (
    <SectionShell
      eyebrow="Tools & Platforms"
      title="Category-based tool architecture using text-first cards"
      description="This page is intentionally icon-light for now because the project does not yet include approved logos or platform icon assets."
    >
      <div className="space-y-12">
        {categories.map((category) => {
          const groupedTools = tools.filter((tool) => tool.category === category);

          return (
            <section key={category}>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{category}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Clean text-based cards for the initial scaffold.
                  </p>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {groupedTools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </SectionShell>
  );
}

