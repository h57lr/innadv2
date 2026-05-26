import Link from "next/link";

import type { InsightArticle } from "@/types/content";

type ArticleCardProps = {
  article: InsightArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const borderStyle = "1px solid var(--grid-grey)";

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 24,
        border: borderStyle,
        padding: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-secondary)",
            margin: 0,
          }}
        >
          {article.category}
        </p>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            padding: "2px 8px",
            borderRadius: 9999,
            border: borderStyle,
            color: "#999",
          }}
        >
          {article.status}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: 20,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          color: "var(--ink-black)",
          margin: "12px 0 0",
        }}
      >
        {article.title}
      </h3>
      <p
        style={{
          marginTop: 10,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          lineHeight: 1.6,
          color: "var(--ink-secondary)",
          flex: 1,
        }}
      >
        {article.summary}
      </p>
      <p
        style={{
          marginTop: 12,
          fontFamily: "var(--font-mono)",
          fontSize: 9.5,
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          color: "#999",
        }}
      >
        {article.readingTime}
      </p>
      <Link
        href={`/insights/${article.slug}`}
        style={{
          marginTop: 12,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--ink-black)",
          textDecoration: "none",
          opacity: 0.6,
          transition: "opacity 160ms ease",
        }}
      >
        Open draft outline
        <span style={{ fontSize: 16 }}>→</span>
      </Link>
    </article>
  );
}
