"use client";

import Image from "next/image";
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

  // Klantbeeld ronde 5: een brede banner, in plaats van een losse staande
  // foto naast de tekst. De banner bevat taalafhankelijke copy en blijft met
  // zijn eigen verhouding volledig zichtbaar, ook op mobiel.
  const heroSrc = lang === "nl" ? "/photos/home-hero-r5-nl.avif" : "/photos/home-hero-r5-en.avif";

  return (
    <section className="relative pt-10 pb-28 lg:pt-12 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span className="text-cobalt">01</span>
          <span className="w-6 h-px bg-current opacity-30" />
          <span>{t.eyebrow}</span>
        </div>

        <h1 className="display-hero text-ink mb-8 text-[clamp(2.5rem,6vw,5.75rem)] max-w-5xl">
          <Accent
            text={t.h1}
            accent={t.h1Accent}
            className="italic font-light text-cobalt"
          />
        </h1>

        <div className="flex flex-wrap gap-3 mb-12">
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

        <div
          className="photo-treatment relative max-w-5xl overflow-hidden rounded-3xl bg-ink shadow-[0_28px_60px_-20px_rgba(45,31,20,0.28)]"
          style={{ aspectRatio: photoAspect(heroSrc) }}
        >
          <Image
            key={lang}
            src={heroSrc}
            alt={t.h1}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 1024px, (min-width: 1024px) calc(100vw - 160px), calc(100vw - 48px)"
            priority
            quality={90}
          />
        </div>

        <div className="mt-10 text-text text-[17px] lg:text-[18px] leading-[1.55] max-w-3xl space-y-4">
          {t.lead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
