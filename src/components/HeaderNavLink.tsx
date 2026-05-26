"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type HeaderNavLinkProps = {
  href: string;
  children: ReactNode;
};

export function HeaderNavLink({ href, children }: HeaderNavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      style={{
        color: isActive ? "var(--ink-black)" : "var(--ink-secondary)",
        textDecoration: "none",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: isActive ? 500 : 400,
        padding: "6px 14px",
        borderRadius: 9999,
        transition: "color 160ms ease, background 160ms ease",
        background: isActive ? "rgba(0,0,0,0.04)" : "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = isActive ? "rgba(0,0,0,0.04)" : "transparent";
      }}
    >
      {children}
    </Link>
  );
}
