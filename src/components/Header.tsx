"use client";

import Link from "next/link";

import { navigation } from "@/data/navigation";

import { MobileNav } from "./MobileNav";
import { HeaderNavLink } from "./HeaderNavLink";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        padding: "16px 64px",
        background: "rgba(250,250,250,0.55)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 0 rgba(0,0,0,0.02)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--ink-black)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Enad Al-Shneikat
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9.5,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-secondary)",
                marginTop: 1,
              }}
            >
              Performance Marketing &amp; Martech
            </span>
          </Link>

          <nav
            className="hidden md:flex"
            style={{ display: "none", gap: 4, alignItems: "center" }}
          >
            {navigation.map((item) => (
              <HeaderNavLink key={item.href} href={item.href}>
                {item.label}
              </HeaderNavLink>
            ))}
          </nav>
        </div>

        <div
          className="hidden md:flex"
          style={{ display: "none", gap: 12, alignItems: "center" }}
        >
          <Link href="/contact" className="btn-edit btn-edit--primary">
          Start an inquiry
        </Link>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          nav {
            display: flex !important;
          }
          div:has(> .btn-edit--primary) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
