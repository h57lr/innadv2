import type { Tool } from "@/types/content";

type ToolCardProps = {
  tool: Tool;
  showCategory?: boolean;
};

export function ToolCard({ tool, showCategory = true }: ToolCardProps) {
  const borderStyle = "1px solid var(--grid-grey)";

  return (
    <article
      style={{
        borderRadius: 20,
        border: borderStyle,
        padding: 20,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              fontWeight: 600,
              color: "var(--ink-black)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {tool.name}
          </h3>
          {showCategory ? (
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9.5,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "#999",
                margin: "4px 0 0",
              }}
            >
              {tool.category}
            </p>
          ) : null}
        </div>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            border: borderStyle,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 500,
            color: "var(--ink-secondary)",
            flexShrink: 0,
          }}
        >
          {tool.name
            .split(" ")
            .slice(0, 2)
            .map((part) => part[0])
            .join("")}
        </div>
      </div>
      <p
        style={{
          marginTop: 12,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          lineHeight: 1.6,
          color: "var(--ink-secondary)",
        }}
      >
        {tool.description}
      </p>
    </article>
  );
}
