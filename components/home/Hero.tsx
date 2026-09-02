"use client";

import { getImageProps } from "next/image";
import Link from "next/link";
import { useLang, usePick } from "@/lib/i18n/provider";
import { cta } from "@/content/ui";
import { home } from "@/content/home";
import Accent from "@/components/Accent";
import { photoAspect } from "@/lib/photoRatio";

export default function Hero() {
  const t = usePick(home).hero;
  const ctaLong = usePick(cta.long);
  const lang = useLang();

  // Twee klantfoto's van dezelfde scene: staand (3C/3D) naast de tekst op een
  // groot scherm, liggend (3A/3B) op een telefoon. De klant koos dit op
  // 2026-09-02 boven de staande foto op mobiel, omdat de pagina daar te lang
  // werd. De <picture> zorgt dat de browser alleen de passende foto ophaalt.
  const staandSrc = lang === "nl" ? "/photos/home-hero-nl.png" : "/photos/home-hero-en.png";
  const liggendSrc = lang === "nl" ? "/photos/home-hero-liggend-nl.png" : "/photos/home-hero-liggend-en.png";
  const gedeeld = { alt: t.h1, fill: true, quality: 90, priority: true } as const;
  const {
    props: { srcSet: staandSrcSet },
  } = getImageProps({ ...gedeeld, src: staandSrc, sizes: "40vw" });
  const {
    props: { srcSet: liggendSrcSet, ...imgProps },
  } = getImageProps({ ...gedeeld, src: liggendSrc, sizes: "100vw" });

  return (
    <section className="relative pt-10 pb-28 lg:pt-12 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span className="text-cobalt">01</span>
          <span className="w-6 h-px bg-current opacity-30" />
          <span>{t.eyebrow}</span>
        </div>

        {/* Mobiel: kop, foto, knoppen, tekst. De tekstkolom is daar `contents`,
            zodat kop, tekst en knoppen los in het grid staan en apart geordend
            kunnen worden. Vanaf lg is het weer foto links, tekst rechts. Aanleiding:
            op een telefoon begon de pagina met vier alinea's en stond de foto pas
            op 981px, onder de vouw (2026-09-02). */}
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

            {/* Het kader volgt de foto: liggend onder lg, staand erboven (zie .hero-kader in globals.css) */}
            <div
              className="hero-kader relative w-full overflow-hidden rounded-3xl bg-ink shadow-[0_28px_60px_-20px_rgba(45,31,20,0.28),0_8px_24px_-12px_rgba(21,95,125,0.18)] ring-1 ring-ink/5"
              style={
                {
                  "--kader-mobiel": photoAspect(liggendSrc),
                  "--kader-desktop": photoAspect(staandSrc),
                } as React.CSSProperties
              }
            >
              <picture key={lang}>
                <source media="(min-width: 1024px)" srcSet={staandSrcSet} sizes="40vw" />
                <source srcSet={liggendSrcSet} sizes="100vw" />
                {/* eslint-disable-next-line jsx-a11y/alt-text -- alt zit in imgProps */}
                <img {...imgProps} className="object-cover" />
              </picture>
            </div>
          </div>

          {/* Right, headline + lead + CTAs */}
          <div className="contents lg:block lg:col-span-7 lg:order-2">
            <h1 className="display-hero text-ink order-1 lg:order-none mb-0 lg:mb-10 text-[clamp(2.5rem,6vw,5.75rem)]">
              <Accent
                text={t.h1}
                accent={t.h1Accent}
                className="italic font-light text-cobalt"
              />
            </h1>

            <div className="order-4 lg:order-none text-text text-[17px] lg:text-[18px] leading-[1.55] max-w-xl mb-0 lg:mb-10 space-y-4">
              {t.lead.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="order-3 lg:order-none flex flex-wrap gap-3">
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
