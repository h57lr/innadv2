import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "96px 64px" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-black)", margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--signal-orange)", display: "inline-block" }} />
        Not Found
      </p>
      <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 36, lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--ink-black)", margin: "16px 0 0" }}>
        The page you requested does not exist.
      </h1>
      <p style={{ marginTop: 16, fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
        Return to the main portfolio scaffold or continue through the primary sections.
      </p>
      <Link href="/" className="btn-edit btn-edit--primary" style={{ marginTop: 24, display: "inline-flex" }}>
        Back to Home
      </Link>
    </div>
  );
}
