import { ReactNode } from "react";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section className={`section ${className}`}>
      <div className="section-inner">
        <div style={{ maxWidth: 800 }}>
          {eyebrow ? (
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-black)",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--signal-orange)",
                  display: "inline-block",
                }}
              />
              {eyebrow}
            </p>
          ) : null}
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: 42,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--ink-black)",
              margin: eyebrow ? "16px 0 0" : 0,
            }}
          >
            {title}
          </h2>
          {description ? (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--ink-secondary)",
                margin: "16px 0 0",
                maxWidth: 680,
              }}
            >
              {description}
            </p>
          ) : null}
        </div>
        <div style={{ marginTop: 48 }}>{children}</div>
      </div>
    </section>
  );
}
