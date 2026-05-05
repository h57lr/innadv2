import type { Tool } from "@/types/content";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/65 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            {tool.category}
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-xs font-semibold uppercase tracking-[0.12em] text-sky-200">
          {tool.name
            .split(" ")
            .slice(0, 2)
            .map((part) => part[0])
            .join("")}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{tool.description}</p>
    </article>
  );
}

