"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import SubpagesNav from "@/components/SubpagesNav";
import Accent from "@/components/Accent";
import JsonLd from "@/components/JsonLd";
import { useLang, usePick } from "@/lib/i18n/provider";
import { cta } from "@/content/ui";
import { overOns } from "@/content/overOns";
import { breadcrumbFor } from "@/lib/seo/schema";
import { photoAspect } from "@/lib/photoRatio";

export default function OverOnsPage() {
  const t = usePick(overOns);
  const ctaLong = usePick(cta.long);
  const lang = useLang();
  const banner1Src = lang === "nl" ? "/photos/over-ons-banner1-nl.png" : "/photos/over-ons-banner1-en.png";
  const heroSrc = lang === "nl" ? "/photos/over-ons-hero-nl.png" : "/photos/over-ons-hero-en.png";

  return (
    <>
      <JsonLd schema={[breadcrumbFor("/over-ons")]} />
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="07"
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
              {t.introExtra.map((para, i) => (
                <Reveal key={`extra-${i}`} delay={220 + i * 60}>
                  <p>{para}</p>
                </Reveal>
              ))}

              {/* Banner onder het tekstblok (revisieronde 2026-08, punt 132) */}
              <Reveal delay={340}>
                <div className="mt-4 relative w-full overflow-hidden rounded-2xl bg-ink" style={{ aspectRatio: photoAspect(banner1Src) }}>
                  <Image
                    key={lang}
                    src={banner1Src}
                    alt={t.hero.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & CORE VALUES */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <ChapterMark
                  number={t.values.chapter}
                  label={t.values.label}
                  className="text-muted mb-8"
                />
                <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-8">
                  {t.values.heading}
                </h2>
                <p className="text-text text-[16px] leading-[1.6] max-w-md">
                  {t.values.lead}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="space-y-12">
                {t.values.items.map((v, i) => (
                  <Reveal key={v.n} delay={i * 80}>
                    <li className="grid grid-cols-12 gap-6 border-t border-mist pt-7">
                      <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                        {v.n}
                      </span>
                      <div className="col-span-10">
                        <h3 className="display-section text-[clamp(1.2rem,1.5vw,1.4rem)] text-ink mb-3">
                          {v.title}
                        </h3>
                        <p className="text-text/80 text-[15px] leading-[1.65]">
                          {v.text}
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

      {/* TEAM */}
      <section className="py-28 lg:py-36 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="grid4" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid4)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number={t.team.chapter}
                label={t.team.label}
                className="text-paper/50 mb-8"
              />
              <h2 className="display-section text-paper text-[clamp(2rem,3.5vw,3.25rem)]">
                {t.team.heading}
              </h2>
            </Reveal>
            <div className="lg:col-span-5 flex items-end">
              <Reveal delay={140}>
                <p className="text-paper/70 text-[16px] leading-[1.6] max-w-md">
                  {t.team.body}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
            {t.team.roles.map((role, i) => (
              <Reveal key={role.role} delay={i * 80}>
                <div className="bg-ink p-10 h-full hover:bg-antraciet transition-colors duration-300">
                  <p className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-paper/40 mb-8">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-section text-paper text-[clamp(1.4rem,1.8vw,1.85rem)] mb-5">
                    {role.role}
                  </h3>
                  <p className="text-paper/70 text-[14px] leading-[1.6]">
                    {role.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
