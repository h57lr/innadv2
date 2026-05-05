import Link from "next/link";

import { contactPlaceholders } from "@/data/contact";
import { footerServiceLinks, navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
            Enad Al-Shneikat
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Digital Marketing, Marketing Technology, Performance Marketing,
            Automation, BI & Tracking Architect.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-400">
            {contactPlaceholders.map((item) =>
              item.href ? (
                <p key={item.label}>
                  <span className="text-slate-500">{item.label}:</span>{" "}
                  <a href={item.href} className="transition hover:text-white">
                    {item.value}
                  </a>
                </p>
              ) : (
                <p key={item.label}>
                  <span className="text-slate-500">{item.label}:</span> {item.value}
                </p>
              ),
            )}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Navigation</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {footerServiceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Copyright {new Date().getFullYear()} Enad Al-Shneikat. All rights reserved.</p>
          <p>Project scaffold created for Phase 1 and Phase 2.</p>
        </div>
      </div>
    </footer>
  );
}
