"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";
import CountUp from "@/components/CountUp";
import SubpagesNav from "@/components/SubpagesNav";
import Accent from "@/components/Accent";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { useLang, usePick } from "@/lib/i18n/provider";
import ListIntro from "@/components/ListIntro";
import { cta } from "@/content/ui";
import { ziekteverzuim } from "@/content/ziekteverzuim";
import { ziekteverzuimFaq } from "@/content/faq";
import { serviceSchemaFor, faqSchema, breadcrumbFor } from "@/lib/seo/schema";

export default function ZiekteverzuimPage() {
  const t = usePick(ziekteverzuim);
  const ctaLong = usePick(cta.long);
  const faq = usePick(ziekteverzuimFaq);
  const lang = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="04"
              label={t.hero.chapter}
              className="text-muted mb-6"
            />
            <h1 className="display-hero text-ink text-[clamp(2.75rem,6.5vw,6rem)] max-w-5xl">
              <Accent
                text={t.hero.h1}
                accent={t.hero.h1Accent}
                className="italic font-light text-cobalt"
              />
            </h1>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <div className="photo-treatment aspect-[16/9] lg:aspect-[7/3] relative overflow-hidden rounded-3xl bg-ink shadow-[0_28px_60px_-20px_rgba(45,31,20,0.28)]">
              <Image
                key={lang}
                src={lang === "nl" ? "/photos/ziekteverzuim-hero-nl.png" : "/photos/ziekteverzuim-hero-en.png"}
                alt={t.hero.imageAlt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
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
              {t.intro.paragraphs.map((para, i) => (
                <Reveal key={i} delay={100 + i * 60}>
                  <p>{para}</p>
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

      {/* THE BIG NUMBER */}
      <section className="py-32 lg:py-40 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="zv-grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zv-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45 mb-10">
              {t.bigNumber.eyebrow}
            </p>
            <div className="display-numeric text-paper text-[clamp(4rem,12vw,10rem)] mb-10">
              <CountUp
                value={4500}
                secondValue={7000}
                prefix="€"
                thousands
                separator="—"
              />
            </div>
            <p className="text-paper/80 text-[clamp(1.05rem,1.5vw,1.35rem)] max-w-3xl mx-auto leading-[1.5]">
              {t.bigNumber.detailPre}
              <strong className="text-paper">{t.bigNumber.detailStrong}</strong>
              {t.bigNumber.detailPost}
            </p>
            <p className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-paper/45 mt-10">
              {t.bigNumber.source}
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE INNOVATION */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <Reveal className="lg:col-span-5">
              <ChapterMark
                number="01"
                label={t.innovation.chapter}
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-8">
                <Accent
                  text={t.innovation.heading}
                  accent={t.innovation.headingAccent}
                  className="font-display italic font-light text-cobalt"
                />
              </h2>
              <p className="text-text text-[16px] leading-[1.65] mb-8">
                {t.innovation.lead}
              </p>
              <CTA href="/contact" variant="primary">
                {t.innovation.cta}
              </CTA>

              {/* Banner onder het tekstblok links (revisieronde 2026-08, punt 71) */}
              <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-ink">
                <Image
                  key={lang}
                  src={lang === "nl" ? "/photos/ziekteverzuim-innovatie-banner-nl.png" : "/photos/ziekteverzuim-innovatie-banner-en.png"}
                  alt={t.innovation.bannerAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-[16px] leading-[1.65] text-text">
              <Reveal delay={80}>
                <div className="bg-paper-deep p-8 lg:p-10 border-l-2 border-cobalt">
                  <p className="text-[clamp(1.1rem,1.5vw,1.3rem)] text-ink leading-[1.5]">
                    {t.innovation.quote}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <p>{t.innovation.body1}</p>
                <p className="mt-4">
                  <Accent
                    text={t.innovation.body2}
                    accent={t.innovation.body2Strong}
                    className="not-italic font-semibold text-ink"
                  />
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY IMAGE BAND */}
      <section className="py-0">
        <Reveal>
          <div className="relative aspect-[21/9] lg:aspect-[24/8] w-full overflow-hidden bg-ink">
            <Image
              key={lang}
              src={lang === "nl" ? "/photos/ziekteverzuim-gevolgen-banner-nl.png" : "/photos/ziekteverzuim-gevolgen-banner-en.png"}
              alt={t.secondaryImageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </section>

      {/* CONSEQUENCES */}
      <section className="py-28 lg:py-36 bg-paper-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number="02"
                label={t.consequences.chapter}
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink">
                {t.consequences.heading}
              </h2>
            </Reveal>
            <div className="lg:col-span-5 flex items-end">
              <Reveal delay={120} className="w-full">
                <ListIntro>{t.consequences.intro}</ListIntro>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mist border border-mist">
            <Reveal>
              <div className="bg-paper p-10 h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt mb-6">
                  {t.consequences.financialTitle}
                </p>
                <ul className="space-y-3">
                  {t.consequences.financialItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text text-[15px] leading-[1.55]"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-cobalt shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bg-paper p-10 h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt mb-6">
                  {t.consequences.teamTitle}
                </p>
                <ul className="space-y-3">
                  {t.consequences.teamItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text text-[15px] leading-[1.55]"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-cobalt shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-12 pt-6 border-t border-mist flex flex-wrap items-center justify-between gap-4">
              <p className="text-[12px] text-muted leading-[1.5] max-w-xl">
                {t.consequences.sourceNote}
              </p>
              <CTA href="/contact" variant="underline">
                {t.consequences.cta}
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd
        schema={[
          serviceSchemaFor("/ziekteverzuim", "Absenteeism reduction"),
          faqSchema(ziekteverzuimFaq.nl),
          breadcrumbFor("/ziekteverzuim"),
        ]}
      />
      <Faq items={faq} />

      <SubpagesNav chapter="03" heading={t.subpagesHeading} items={t.subpages} />

      {/* CLOSING CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="border-t border-b border-ink/10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="display-hero text-[clamp(2rem,4vw,3.5rem)] text-ink">
                  <Accent
                    text={t.closing.heading}
                    accent={t.closing.headingAccent}
                    className="italic font-light text-cobalt"
                  />
                </h2>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-8 py-5 bg-cobalt text-paper text-[14px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300 rounded-full"
                >
                  <span>{ctaLong}</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    <path d="M1 9h16M11 3l6 6-6 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
