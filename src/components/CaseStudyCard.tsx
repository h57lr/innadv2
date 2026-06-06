import Link from "next/link";

import type { CaseStudy } from "@/types/content";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9.5,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            padding: "3px 8px",
            borderRadius: 9999,
            border: borderStyle,
            color: "var(--signal-orange)",
          }}
        >
          {caseStudy.category}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9.5,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            padding: "3px 8px",
            borderRadius: 9999,
            border: borderStyle,
            color: "var(--ink-secondary)",
          }}
        >
          {caseStudy.clientLabel}
        </span>
        {caseStudy.subCategories?.slice(0, 2).map((category) => (
          <span
            key={category}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9.5,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              padding: "3px 8px",
              borderRadius: 9999,
              border: borderStyle,
              color: "#7a6a5f",
              background: "rgba(0,0,0,0.015)",
            }}
          >
            {category}
          </span>
        ))}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: 20,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          color: "var(--ink-black)",
          margin: "14px 0 0",
        }}
      >
        {caseStudy.title}
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
        {caseStudy.summary}
      </p>
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>
            Problem
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "var(--ink-secondary)", margin: "4px 0 0" }}>
            {caseStudy.problem}
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>
            Outcome
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "var(--ink-secondary)", margin: "4px 0 0" }}>
            {caseStudy.outcomeType}
          </p>
        </div>
      </div>
      <Link
        href={`/case-studies#${caseStudy.slug}`}
        style={{
          marginTop: 16,
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
        Review structure
        <span style={{ fontSize: 16 }}>→</span>
      </Link>
    </article>
  );
}
