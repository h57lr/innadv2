import Link from "next/link";

import { navigation } from "@/data/navigation";

import { MobileNav } from "./MobileNav";
import { HeaderNavLink } from "./HeaderNavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
            Enad Al-Shneikat
          </span>
          <span className="text-xs text-slate-400">
            Digital Marketing & Martech Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <HeaderNavLink key={item.href} href={item.href}>
              {item.label}
            </HeaderNavLink>
          ))}
        </nav>

        <div className="relative">
          <MobileNav />
          <Link
            href="/contact"
            className="hidden rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 md:inline-flex"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

