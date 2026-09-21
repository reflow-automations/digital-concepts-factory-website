"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n/provider";
import { NAV_ITEMS, cta, ui } from "@/content/ui";
import LangToggle from "@/components/LangToggle";

export default function Header() {
  const lang = useLang();
  const t = ui[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-mist"
          : "bg-paper border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Digital Concepts Factory"
            width={36}
            height={36}
            className="shrink-0"
            priority
            quality={90}
          />
          <div className="font-sans text-[14px] font-medium tracking-tight text-ink">
            Digital Concepts Factory
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-5" aria-label="Hoofdnavigatie">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative flex items-center gap-1"
                onMouseEnter={() => setOpenSubmenu(item.href)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpenSubmenu(null)}
                  className="text-[13px] tracking-tight text-text hover:text-ink transition-colors link-underline"
                >
                  {item.label[lang]}
                </Link>
                <button
                  type="button"
                  onClick={() => setOpenSubmenu((current) => current === item.href ? null : item.href)}
                  aria-label={`${item.label[lang]} submenu`}
                  aria-expanded={openSubmenu === item.href}
                  className="tap-safe tap-safe-sm p-1 text-muted hover:text-ink transition-colors"
                >
                  <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden>
                    <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </button>
                {openSubmenu === item.href && (
                  <div className="absolute left-0 top-full min-w-72 border-t-2 border-t-cobalt border-x border-b border-mist bg-paper p-2 shadow-[0_18px_40px_-20px_rgba(45,31,20,0.35)]">
                    <p className="px-3 pt-2 pb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cobalt">
                      {lang === "nl" ? "Verdieping ziekteverzuim" : "Explore sick leave"}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenSubmenu(null)}
                        className="block px-3 py-3 text-[13px] leading-snug text-text hover:bg-paper-deep hover:text-ink transition-colors"
                      >
                        {child.label[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-tight text-text hover:text-ink transition-colors link-underline"
              >
                {item.label[lang]}
              </Link>
            ),
          )}
        </nav>

        {/* CTA + language */}
        <div className="hidden xl:flex items-center gap-5">
          <LangToggle />
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-cobalt text-paper text-[13px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300"
          >
            {cta.short[lang]}
          </Link>
        </div>

        {/* Mobile language + menu button */}
        <div className="xl:hidden flex items-center gap-4">
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            // 44x44 tikvlak: de knop was 40x31 en dat is krap op een telefoon.
            className="-mr-2 flex h-11 w-11 flex-col items-end justify-center"
            aria-label={t.header.menu}
          >
            <div className="w-6 h-[1px] bg-ink mb-1.5" />
            <div className="w-6 h-[1px] bg-ink mb-1.5" />
            <div className="w-4 h-[1px] bg-ink ml-auto" />
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-mist bg-paper">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-[15px] text-text py-2"
                >
                  {item.label[lang]}
                </Link>
                {item.children && (
                  <div className="ml-1 border-l border-cobalt/35 pl-4 py-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-[14px] text-text/80 hover:text-ink"
                      >
                        {child.label[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 bg-ink text-paper text-center text-[14px]"
            >
              {cta.long[lang]}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
