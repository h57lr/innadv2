import Link from "next/link";

type CTAProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--ink-black)",
        paddingTop: 48,
        marginTop: 48,
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: 32,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--ink-black)",
          margin: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          marginTop: 16,
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          lineHeight: 1.6,
          color: "var(--ink-secondary)",
          maxWidth: 600,
        }}
      >
        {description}
      </p>
      <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href={primaryHref} className="btn-edit btn-edit--primary">
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link href={secondaryHref} className="btn-edit btn-edit--outline">
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
