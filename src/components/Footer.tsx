"use client";

import Link from "next/link";

import { contactDetails } from "@/data/contact";
import { footerServiceLinks, navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--grid-grey)", background: "var(--paper-white)" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 64px 48px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr 0.8fr",
          gap: 40,
        }}
        className="footer-grid-inner"
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              fontWeight: 700,
              color: "var(--ink-black)",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Enad Al-Shneikat
          </p>
          <p
            style={{
              marginTop: 12,
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              lineHeight: 1.6,
              color: "var(--ink-secondary)",
              maxWidth: 360,
            }}
          >
            Performance marketing, marketing technology, tracking, automation, BI, and analytics expertise for brands that need clearer growth decisions.
          </p>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--ink-secondary)" }}>
            {contactDetails.map((item) => (
              <p key={item.label} style={{ margin: 0 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999" }}>
                  {item.label}
                </span>
                {item.href ? (
                  <>
                    <br />
                    <a href={item.href} style={{ color: "var(--ink-black)", textDecoration: "none", transition: "color 160ms ease" }}>
                      {item.value}
                    </a>
                  </>
                ) : (
                  <>
                    <br />
                    <span>{item.value}</span>
                  </>
                )}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--ink-black)", margin: 0 }}>Navigation</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: "var(--ink-secondary)",
                    textDecoration: "none",
                    transition: "color 160ms ease",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--ink-black)", margin: 0 }}>Services</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
            {footerServiceLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: "var(--ink-secondary)",
                    textDecoration: "none",
                    transition: "color 160ms ease",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--grid-grey)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "20px 64px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "#999",
            fontFamily: "var(--font-sans)",
          }}
          className="footer-bottom-inner"
        >
          <p style={{ margin: 0 }}>
            Copyright {new Date().getFullYear()} Enad Al-Shneikat. All rights reserved.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .footer-grid-inner {
            grid-template-columns: 1fr !important;
            padding: 40px 24px 32px !important;
          }
          .footer-bottom-inner {
            flex-direction: column;
            gap: 8px;
            padding: 16px 24px !important;
          }
        }
      ` }} />
    </footer>
  );
}
