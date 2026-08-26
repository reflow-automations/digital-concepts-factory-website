"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";
import SubpagesNav from "@/components/SubpagesNav";
import Accent from "@/components/Accent";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { useLang, usePick } from "@/lib/i18n/provider";
import { cta } from "@/content/ui";
import { marketing } from "@/content/marketing";
import { marketingFaq } from "@/content/faq";
import { serviceSchemaFor, faqSchema, breadcrumbFor } from "@/lib/seo/schema";

export default function MarketingPage() {
  const t = usePick(marketing);
  const ctaLong = usePick(cta.long);
  const faq = usePick(marketingFaq);
  const lang = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="06"
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
                src={lang === "nl" ? "/photos/marketing-hero-nl.png" : "/photos/marketing-hero-en.png"}
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
                <p className="font-medium text-ink">{t.intro.paragraphStrong}</p>
              </Reveal>
              <Reveal delay={280}>
                <CTA href="/contact" variant="underline">
                  {t.intro.cta}
                </CTA>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH, 5 principles */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <ChapterMark
                  number={t.approach.chapter}
                  label={t.approach.label}
                  className="text-muted mb-8"
                />
                <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-8">
                  <Accent
                    text={t.approach.heading}
                    accent={t.approach.headingAccent}
                    className="font-display italic font-light text-cobalt"
                  />
                </h2>
                <p className="text-text text-[16px] leading-[1.6] max-w-md mb-8">
                  {t.approach.lead}
                </p>
                <CTA href="/contact" variant="primary">
                  {t.approach.cta}
                </CTA>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="space-y-12">
                {t.principles.map((p, i) => (
                  <Reveal key={p.n} delay={i * 80}>
                    <li className="grid grid-cols-12 gap-6 border-t border-mist pt-8">
                      <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                        {p.n}
                      </span>
                      <div className="col-span-10">
                        <h3 className="display-section text-[clamp(1.2rem,1.5vw,1.45rem)] text-ink mb-3">
                          {p.title}
                        </h3>
                        <p className="text-text/80 text-[15px] leading-[1.65]">
                          {p.text}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
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
              src={lang === "nl" ? "/photos/marketing-sectie-nl.png" : "/photos/marketing-sectie-en.png"}
              alt={t.resultBlock.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </section>

      {/* RESULT BLOCK */}
      <section className="py-28 lg:py-36 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="mkt-grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mkt-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number={t.resultBlock.chapter}
                label={t.resultBlock.label}
                className="text-paper/50 mb-8"
              />
              <h2 className="display-hero text-paper text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] mb-6">
                <Accent
                  text={t.resultBlock.heading}
                  accent={t.resultBlock.headingAccent}
                  className="italic font-light text-cobalt-bright"
                />
              </h2>
              <p className="text-paper/75 text-[16px] leading-[1.6] max-w-2xl">
                {t.resultBlock.body}
              </p>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-paper/15">
              <ul className="space-y-5 text-paper/85 text-[15px] leading-[1.55]">
                {t.resultBlock.items.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="font-mono text-cobalt-bright text-[12px] pt-1 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <JsonLd
        schema={[
          serviceSchemaFor("/marketing", "Marketing services"),
          faqSchema(marketingFaq.nl),
          breadcrumbFor("/marketing"),
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
