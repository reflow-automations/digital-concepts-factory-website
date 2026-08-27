"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang, usePick } from "@/lib/i18n/provider";
import { cta } from "@/content/ui";
import { home } from "@/content/home";
import Accent from "@/components/Accent";

export default function Hero() {
  const t = usePick(home).hero;
  const ctaLong = usePick(cta.long);
  const lang = useLang();
  return (
    <section className="relative pt-16 pb-28 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 lg:mb-14 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span className="text-cobalt">01</span>
          <span className="w-6 h-px bg-current opacity-30" />
          <span>{t.eyebrow}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left, photo, refined treatment */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            {/* Soft halo behind the image, subtle cobalt atmosphere */}
            <div
              aria-hidden
              // Op mobiel niet zijwaarts uitlopen: de kolom is daar al
              // schermbreed, en de gloed stak 8px buiten beeld.
              className="absolute inset-x-0 -inset-y-8 sm:-inset-8 lg:-inset-12 -z-10 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 50%, rgba(21,95,125,0.10), transparent 70%)",
              }}
            />

            {/* Photo frame — 2:3 matches the client-supplied portrait banners
                (per-language variant, revisieronde 2026-08 punt 1) */}
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-3xl bg-ink shadow-[0_28px_60px_-20px_rgba(45,31,20,0.28),0_8px_24px_-12px_rgba(21,95,125,0.18)] ring-1 ring-ink/5">
              <Image
                key={lang}
                src={lang === "nl" ? "/photos/home-hero-nl.png" : "/photos/home-hero-en.png"}
                alt={t.h1}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

            </div>
          </div>

          {/* Right, headline + lead + CTAs */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h1 className="display-hero text-ink mb-10 text-[clamp(2.5rem,6vw,5.75rem)]">
              <Accent
                text={t.h1}
                accent={t.h1Accent}
                className="italic font-light text-cobalt"
              />
            </h1>

            <div className="text-text text-[17px] lg:text-[18px] leading-[1.55] max-w-xl mb-10 space-y-4">
              {t.lead.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-cobalt text-paper text-[13px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300 rounded-full"
              >
                <span>{ctaLong}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="square"
                  />
                </svg>
              </Link>
              <Link
                href="#innovaties"
                className="inline-flex items-center gap-3 px-6 py-3.5 border border-ink/15 text-ink text-[13px] tracking-tight hover:bg-ink hover:text-paper transition-colors duration-300 rounded-full"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
