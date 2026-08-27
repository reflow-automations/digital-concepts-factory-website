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
          />
          <div className="font-sans text-[14px] font-medium tracking-tight text-ink">
            Digital Concepts Factory
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-tight text-text hover:text-ink transition-colors link-underline"
            >
              {item.label[lang]}
            </Link>
          ))}
        </nav>

        {/* CTA + language */}
        <div className="hidden lg:flex items-center gap-5">
          <LangToggle />
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-cobalt text-paper text-[13px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300"
          >
            {cta.short[lang]}
          </Link>
        </div>

        {/* Mobile language + menu button */}
        <div className="lg:hidden flex items-center gap-4">
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
        <div className="lg:hidden border-t border-mist bg-paper">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-text py-2"
              >
                {item.label[lang]}
              </Link>
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
