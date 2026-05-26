"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation } from "@/data/navigation";

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--grid-grey)",
          borderRadius: 9999,
          background: "transparent",
          padding: "8px 16px",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 500,
          color: "var(--ink-black)",
          cursor: "pointer",
        }}
        aria-expanded={isOpen}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      {isOpen ? (
        <div
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            top: "100%",
            marginTop: 8,
            borderRadius: 16,
            border: "1px solid var(--grid-grey)",
            background: "rgba(250,250,250,0.98)",
            padding: 12,
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    borderRadius: 12,
                    padding: "10px 14px",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--ink-black)" : "var(--ink-secondary)",
                    background: isActive ? "rgba(0,0,0,0.04)" : "transparent",
                    textDecoration: "none",
                    transition: "background 160ms ease",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div style={{ height: 1, background: "var(--grid-grey)", margin: "12px 0" }} />
          <Link
            href="/contact"
            className="btn-edit btn-edit--primary"
            style={{ width: "100%", textAlign: "center" }}
          >
            Start an inquiry
          </Link>
        </div>
      ) : null}
    </div>
  );
}
