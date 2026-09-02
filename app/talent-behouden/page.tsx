"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";
import Calculator from "@/components/Calculator";
import SubpagesNav from "@/components/SubpagesNav";
import Accent from "@/components/Accent";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { useLang, usePick } from "@/lib/i18n/provider";
import ListIntro from "@/components/ListIntro";
import ReadMore from "@/components/ReadMore";
import { cta } from "@/content/ui";
import { photoAspect } from "@/lib/photoRatio";
import { talentBehouden } from "@/content/talentBehouden";
import { talentBehoudenFaq } from "@/content/faq";
import { serviceSchemaFor, faqSchema, breadcrumbFor } from "@/lib/seo/schema";

export default function TalentBehoudenPage() {
  const t = usePick(talentBehouden);
  const ctaLong = usePick(cta.long);
  const faq = usePick(talentBehoudenFaq);
  const lang = useLang();
  const innovatieSrc = lang === "nl" ? "/photos/talent-behouden-innovatie-banner-nl.png" : "/photos/talent-behouden-innovatie-banner-en.png";
  const heroSrc = lang === "nl" ? "/photos/talent-behouden-hero-nl.png" : "/photos/talent-behouden-hero-en.png";

  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="03"
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
                sizes="100vw"
                priority
                quality={90}
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
                <ReadMore
                  label={t.intro.readMore.label}
                  labelOpen={t.intro.readMore.labelOpen}
                  blocks={t.intro.readMore.blocks}
                  closing={t.intro.readMore.closing}
                />
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
              <pattern id="grid2" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45 mb-10">
              {t.bigNumber.eyebrow}
            </p>
            <div className="display-numeric text-paper text-[clamp(5rem,16vw,14rem)] mb-10">
              {t.bigNumber.value}
            </div>
            <p className="text-paper/80 text-[clamp(1.05rem,1.5vw,1.35rem)] max-w-3xl mx-auto leading-[1.5]">
              {t.bigNumber.detail}
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

              {/* Banner onder het tekstblok links (revisieronde 2026-08, punt 40) */}
              <div className="mt-10 relative w-full overflow-hidden rounded-2xl bg-ink" style={{ aspectRatio: photoAspect(innovatieSrc) }}>
                <Image
                  key={lang}
                  src={innovatieSrc}
                  alt={t.innovation.bannerAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={90}
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
                <p>{t.innovation.paragraphs[0]}</p>
                <p className="mt-4">{t.innovation.paragraphs[1]}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TEN COST BUCKETS */}
      <section className="py-28 lg:py-36 bg-paper-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number="02"
                label={t.costs.chapter}
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink">
                {t.costs.heading}
              </h2>
            </Reveal>
            <div className="lg:col-span-5 flex items-end">
              <Reveal delay={120} className="w-full">
                <ListIntro>{t.costs.intro}</ListIntro>
              </Reveal>
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {t.costs.items.map((c, i) => (
              <Reveal key={i} delay={(i % 4) * 60}>
                <li className="grid grid-cols-12 gap-5 border-t border-mist pt-6">
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10">
                    <h3 className="display-section text-[1.1rem] text-ink mb-2">
                      {c.title}
                    </h3>
                    <p className="text-text/80 text-[14px] leading-[1.55]">
                      {c.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <p className="text-[12px] text-muted mt-12 pt-6 border-t border-mist">
              {t.costs.source}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CALCULATOR, interactive widget */}
      <section id="bereken" className="py-28 lg:py-36 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="03"
              label={t.calculator.chapter}
              className="text-muted mb-8"
            />
            <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-6 max-w-3xl">
              <Accent
                text={t.calculator.heading}
                accent={t.calculator.headingAccent}
                className="font-display italic font-light text-cobalt"
              />
            </h2>
            <p className="text-text text-[16px] leading-[1.6] max-w-2xl mb-14">
              {t.calculator.lead}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <Calculator />
          </Reveal>

          <Reveal delay={140}>
            <p className="text-[12px] text-muted mt-14 pt-6 border-t border-mist">
              {t.calculator.source}
            </p>
          </Reveal>
        </div>
      </section>

      {/* REFERENCE TABLE, quick glance */}
      <section className="pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
              {t.table.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-mist overflow-x-auto">
              <table className="w-full">
                <thead className="bg-paper-deep">
                  <tr>
                    <th className="text-left p-5 font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted">
                      {t.table.colSalary}
                    </th>
                    <th className="text-left p-5 font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted">
                      {t.table.colLow}
                    </th>
                    <th className="text-left p-5 font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted">
                      {t.table.colMid}
                    </th>
                    <th className="text-left p-5 font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted">
                      {t.table.colHigh}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.table.rows.map((r) => (
                    <tr
                      key={r.salary}
                      className={`border-t border-mist hover:bg-paper-deep/60 transition-colors ${
                        r.salary === t.table.modaalSalary ? "bg-cobalt/[0.04]" : ""
                      }`}
                    >
                      <td className="p-5 display-numeric text-[1.1rem] text-ink">
                        {r.salary}
                        {r.salary === t.table.modaalSalary && (
                          <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.14em] text-cobalt font-medium">
                            {t.table.modaalTag}
                          </span>
                        )}
                      </td>
                      <td className="p-5 display-numeric text-[1.1rem] text-text">
                        {r.low}
                      </td>
                      <td className="p-5 display-numeric text-[1.1rem] text-text">
                        {r.mid}
                      </td>
                      <td className="p-5 display-numeric text-[1.1rem] text-text">
                        {r.high}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-muted mt-5">{t.table.source}</p>
          </Reveal>
        </div>
      </section>

      <JsonLd
        schema={[
          serviceSchemaFor("/talent-behouden", "Employee retention"),
          faqSchema(talentBehoudenFaq.nl),
          breadcrumbFor("/talent-behouden"),
        ]}
      />
      <Faq items={faq} />

      <SubpagesNav chapter="04" heading={t.subpagesHeading} items={t.subpages} />

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
