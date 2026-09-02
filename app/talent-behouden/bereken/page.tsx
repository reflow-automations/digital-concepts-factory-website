"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import Calculator from "@/components/Calculator";
import CTA from "@/components/CTA";
import { usePick } from "@/lib/i18n/provider";
import { talentBehoudenBereken } from "@/content/talentBehouden";
import { photoAspect } from "@/lib/photoRatio";

export default function Page() {
  const t = usePick(talentBehoudenBereken);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <Link href="/talent-behouden" className="text-cobalt hover:underline">
                {t.parentChapter} · {t.parentLabel}
              </Link>
              <span className="opacity-40">/</span>
              <span>{t.breadcrumb}</span>
            </div>
            <h1 className="display-hero text-ink text-[clamp(2.5rem,6vw,5.5rem)] max-w-5xl">
              {t.h1Pre}
              <em className="italic font-light text-cobalt">{t.h1Accent}</em>
              {t.h1Post}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-paper-deep border-y border-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                {t.intro.eyebrow}
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                {t.intro.heading}
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              {t.intro.paragraphs.map((p, i) => (
                <Reveal key={i} delay={100 + i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
              <Reveal delay={220}>
                <p className="text-[12px] text-muted pt-4 border-t border-mist">
                  {t.intro.source}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="01"
              label={t.calculator.chapterLabel}
              className="text-muted mb-8"
            />
            <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-6 max-w-3xl">
              {t.calculator.heading}
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <Calculator />
          </Reveal>

          <Reveal delay={140}>
            <p className="text-[12px] text-muted mt-14 pt-6 border-t border-mist">
              {t.calculator.source}
            </p>
          </Reveal>

          {/* Banner onder de calculator (revisieronde 2026-08, punt 65) */}
          <Reveal delay={180}>
            <div className="mt-12 relative w-full overflow-hidden rounded-2xl bg-ink" style={{ aspectRatio: photoAspect(t.bannerSrc) }}>
              <Image
                src={t.bannerSrc}
                alt={t.bannerAlt}
                fill
                className="object-cover"
                sizes="100vw"
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONCLUSIE */}
      <section className="py-20 lg:py-28 bg-paper-deep">
        <div className="mx-auto max-w-5xl px-6 lg:px-20 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
              {t.conclusion.eyebrow}
            </p>
            <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink mb-6">
              {t.conclusion.heading}
            </h2>
            <p className="text-text text-[16px] leading-[1.65] max-w-3xl mx-auto mb-8">
              {t.conclusion.body}
            </p>
            <CTA href="/talent-behouden/innovatie" variant="underline">
              {t.conclusion.cta}
            </CTA>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="border-t border-b border-ink/10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="display-hero text-[clamp(2rem,4vw,3.5rem)] text-ink">
                  {t.closing.heading}
                  <em className="italic font-light text-cobalt">{t.closing.headingAccent}</em>
                  {t.closing.headingPost}
                </h2>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <CTA href="/contact" variant="primary">
                  {t.closing.cta}
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
