"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";
import Accent from "@/components/Accent";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { useLang, usePick } from "@/lib/i18n/provider";
import { cta } from "@/content/ui";
import { inkoop } from "@/content/inkoop";
import { inkoopFaq } from "@/content/faq";
import { serviceSchemaFor, faqSchema, breadcrumbFor } from "@/lib/seo/schema";
import { photoAspect } from "@/lib/photoRatio";

export default function InkoopPage() {
  const t = usePick(inkoop);
  const ctaLong = usePick(cta.long);
  const faq = usePick(inkoopFaq);
  const lang = useLang();
  const secondarySrc = lang === "nl" ? "/photos/inkoop-secondary-nl.png" : "/photos/inkoop-secondary-en.png";
  const heroSrc = lang === "nl" ? "/photos/inkoop-hero-nl.png" : "/photos/inkoop-hero-en.png";

  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="05"
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
            <div className="photo-treatment relative overflow-hidden rounded-3xl bg-ink shadow-[0_28px_60px_-20px_rgba(45,31,20,0.28)]" style={{ aspectRatio: photoAspect(heroSrc) }}>
              <Image
                key={lang}
                src={heroSrc}
                alt={t.hero.imageAlt}
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                {t.context.eyebrow}
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                {t.context.heading}
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              {t.context.paragraphs.map((para, i) => (
                <Reveal key={i} delay={100 + i * 60}>
                  <p>{para}</p>
                </Reveal>
              ))}
              <Reveal delay={220}>
                <p className="text-[12px] text-muted pt-4 border-t border-mist">
                  {t.context.source}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BIG NUMBER */}
      <section className="py-32 lg:py-40 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="grid3" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid3)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45 mb-8">
                {t.bigNumber.eyebrow}
              </p>
              <div className="display-numeric text-paper text-[clamp(5rem,14vw,12rem)] mb-6">
                {t.bigNumber.value}
              </div>
              <p className="text-paper/80 text-[clamp(1.05rem,1.5vw,1.35rem)] max-w-xl leading-[1.5]">
                {t.bigNumber.detail}
              </p>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-paper/15">
              <ul className="space-y-5">
                {t.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-4 text-paper/85 text-[15px] leading-[1.55]"
                  >
                    <span className="font-mono text-cobalt-bright text-[12px] pt-1 shrink-0">
                      ·
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Extra blok op verzoek van de klant (revisieronde 2026-08, punt 89c) */}
              <div className="mt-10 border-l-2 border-cobalt-bright bg-paper/[0.06] px-6 py-6 rounded-sm">
                <h3 className="display-section text-[clamp(1.05rem,1.4vw,1.25rem)] text-paper mb-3">
                  {t.extraBlock.heading}
                </h3>
                <div className="space-y-3 text-paper/80 text-[14.5px] leading-[1.6]">
                  {t.extraBlock.paragraphs.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                <p className="text-[12px] text-paper/50 mt-4">{t.extraBlock.source}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUBPAGES CARDS */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number={t.depthChapter.chapter}
              label={t.depthChapter.label}
              className="text-muted mb-8"
            />
            <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-14 max-w-3xl">
              {t.depthChapter.heading}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-mist">
            {t.subpages.map((s, i) => (
              <Reveal key={s.no} delay={i * 80}>
                <Link
                  href={s.href}
                  className="group block h-full p-10 lg:p-12 bg-paper hover:bg-paper-deep transition-colors duration-300"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt mb-12">
                    {s.no}
                  </div>
                  <h3 className="display-section text-[clamp(1.5rem,1.9vw,1.85rem)] text-ink mb-4">
                    {s.title}
                  </h3>
                  <p className="text-text/80 text-[15px] leading-[1.6] mb-8">
                    {s.summary}
                  </p>
                  <div className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-cobalt opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t.depthChapter.readMore}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY IMAGE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <div className="photo-treatment relative overflow-hidden bg-ink" style={{ aspectRatio: photoAspect(secondarySrc) }}>
                <Image
                  key={lang}
                  src={secondarySrc}
                  alt={t.secondarySection.imageAlt}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </Reveal>
            <div className="lg:col-span-5 lg:pl-6">
              <Reveal delay={100}>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                  {t.secondarySection.eyebrow}
                </p>
                <h3 className="display-section text-[clamp(1.5rem,2vw,2rem)] text-ink mb-6">
                  {t.secondarySection.heading}
                </h3>
                <p className="text-text text-[15px] leading-[1.65] mb-6">
                  {t.secondarySection.body}
                </p>
                <CTA href="/contact" variant="underline">
                  {t.secondarySection.cta}
                </CTA>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        schema={[
          serviceSchemaFor("/inkoop", "Procurement consultancy"),
          faqSchema(inkoopFaq.nl),
          breadcrumbFor("/inkoop"),
        ]}
      />
      <Faq items={faq} />

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
                  className="group inline-flex items-center gap-4 px-8 py-5 bg-cobalt text-paper text-[14px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300"
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
