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
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
      >
        Menu
      </button>
      {isOpen ? (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-4 top-full mt-4 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur"
        >
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-sky-400 text-slate-950"
                      : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
