import Link from "next/link";

import type { Service } from "@/types/content";

type ServiceCardProps = {
  service: Service;
  variant?: "compact" | "expanded";
};

export function ServiceCard({
  service,
  variant = "compact",
}: ServiceCardProps) {
  const borderStyle = "1px solid var(--grid-grey)";

  if (variant === "expanded") {
    return (
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          borderRadius: 24,
          border: borderStyle,
          padding: 28,
          transition: "border-color 160ms ease",
        }}
      >
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
          {service.category}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontSize: 22,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "var(--ink-black)",
            margin: "10px 0 0",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            marginTop: 14,
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--ink-secondary)",
            flex: 1,
          }}
        >
          {service.summary}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
          {service.focusAreas.slice(0, 3).map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "3px 8px",
                border: borderStyle,
                borderRadius: 9999,
                color: "var(--ink-secondary)",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={`/services/${service.slug}`}
          style={{
            marginTop: 20,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--ink-black)",
            textDecoration: "none",
            transition: "opacity 160ms ease",
            opacity: 0.6,
          }}
        >
          View service details
          <span style={{ fontSize: 16 }}>→</span>
        </Link>
      </article>
    );
  }

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
        {service.category}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: 20,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          color: "var(--ink-black)",
          margin: "10px 0 0",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          marginTop: 12,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          lineHeight: 1.6,
          color: "var(--ink-secondary)",
          flex: 1,
        }}
      >
        {service.summary}
      </p>
      <Link
        href={`/services/${service.slug}`}
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
        View details
        <span style={{ fontSize: 16 }}>→</span>
      </Link>
    </article>
  );
}
