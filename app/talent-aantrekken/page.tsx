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
import { talentAantrekken } from "@/content/talentAantrekken";
import { talentAantrekkenFaq } from "@/content/faq";
import { serviceSchemaFor, faqSchema, breadcrumbFor } from "@/lib/seo/schema";

export default function TalentAantrekkenPage() {
  const t = usePick(talentAantrekken);
  const ctaLong = usePick(cta.long);
  const ctaShort = usePick(cta.short);
  const faq = usePick(talentAantrekkenFaq);
  const lang = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="02"
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
                src={lang === "nl" ? "/photos/talent-aantrekken-hero-nl.png" : "/photos/talent-aantrekken-hero-en.png"}
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
                <p className="font-semibold text-ink mb-2">{t.intro.paragraphStrongHeading}</p>
                <div className="space-y-3">
                  {t.intro.paragraphStrong.map((para) => (
                    <p key={para} className="font-medium text-ink">{para}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={280}>
                <CTA href="/contact" variant="underline">
                  {ctaLong}
                </CTA>
              </Reveal>
            </div>
          </div>
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
                {ctaShort}
              </CTA>
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
                <p>
                  <Accent
                    text={t.innovation.body1}
                    accent={t.innovation.body1Strong}
                    className="not-italic font-semibold text-ink"
                  />
                </p>
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

      {/* SECONDARY IMAGE, full-width band */}
      <section className="py-0">
        <Reveal>
          <div className="relative aspect-[21/9] lg:aspect-[24/8] w-full overflow-hidden bg-ink">
            <Image
              key={lang}
              src={lang === "nl" ? "/photos/talent-aantrekken-secondary-nl.png" : "/photos/talent-aantrekken-secondary-en.png"}
              alt={t.secondaryImageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </section>

      {/* DOOH-EFFECTIEF, 8 redenen */}
      <section className="py-28 lg:py-36 bg-paper-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number="02"
                label={t.dooh.chapter}
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink whitespace-pre-line">
                {t.dooh.heading}
              </h2>
            </Reveal>
            <div className="lg:col-span-5 flex items-end">
              <Reveal delay={120}>
                <p className="text-text text-[15px] leading-[1.6]">
                  {t.dooh.intro}
                </p>
              </Reveal>
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {t.dooh.points.map((p, i) => (
              <Reveal key={i} delay={(i % 4) * 60}>
                <li className="grid grid-cols-12 gap-5 border-t border-mist pt-6">
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10">
                    <h3 className="display-section text-[1.1rem] text-ink mb-2">
                      {p.title}
                    </h3>
                    <p className="text-text/80 text-[14px] leading-[1.55]">
                      {p.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <div className="mt-12 pt-6 border-t border-mist flex flex-wrap items-center justify-between gap-4">
              <p className="text-[12px] text-muted">{t.dooh.source}</p>
              <CTA href="/contact" variant="underline">
                {t.dooh.cta}
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd
        schema={[
          serviceSchemaFor("/talent-aantrekken", "Recruitment marketing"),
          faqSchema(talentAantrekkenFaq.nl),
          breadcrumbFor("/talent-aantrekken"),
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
