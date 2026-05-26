const borderStyle = "1px solid var(--grid-grey)";

interface ScoreCardProps {
  value: string;
  label: string;
}

export function ScoreCard({ value, label }: ScoreCardProps) {
  return (
    <div
      style={{
        borderRadius: 16,
        border: borderStyle,
        padding: "16px 20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: 28,
          lineHeight: 1,
          color: "var(--ink-black)",
          margin: 0,
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          lineHeight: 1.3,
          color: "var(--ink-secondary)",
          margin: "6px 0 0",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </p>
    </div>
  );
}
