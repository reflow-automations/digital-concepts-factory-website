/**
 * SubpageTemplate — reusable shell for level-2 pages
 * (e.g. /inkoop/aanbesteden, /talent-behouden/innovatie).
 *
 * Provides:
 *  - chapter mark with parent-link breadcrumb
 *  - hero h1 with optional cobalt-italic accent
 *  - intro section (2-column with eyebrow + lead + body)
 *  - flexible content sections (array of blocks)
 *  - optional callout block (blockquote-style)
 *  - closing CTA
 *
 * Keeps every level-2 page consistent in spacing, typography
 * and structure — only the data differs.
 */

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";
import ListIntro from "@/components/ListIntro";

export type SubpageSection =
  | {
      type: "text";
      eyebrow?: string;
      heading: string;
      headingAccent?: string;
      paragraphs: string[];
      sourceNote?: string;
    }
  | {
      type: "callout";
      eyebrow?: string;
      quote: string;
    }
  | {
      type: "numbered-list";
      eyebrow?: string;
      heading: string;
      headingAccent?: string;
      intro?: string;
      items: { n: string; title: string; text: string }[];
      sourceNote?: string;
    }
  | {
      type: "stat";
      eyebrow?: string;
      value: string;
      detail: string;
      sourceNote?: string;
    }
  | {
      type: "two-col";
      eyebrow?: string;
      heading: string;
      headingAccent?: string;
      leftTitle: string;
      leftItems: string[];
      rightTitle: string;
      rightItems: string[];
      sourceNote?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

export interface SubpageTemplateProps {
  chapter: string;        // "2a", "5b", etc.
  parentChapter: string;  // "02", "05", etc.
  parentLabel: string;    // "Talent aantrekken"
  parentHref: string;     // "/talent-aantrekken"
  label: string;          // "Innovatie talent aantrekken"
  h1: string;             // "Talent in het hart raken"
  h1Accent?: string;      // "raken" (italic-cobalt portion)
  intro: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    sourceNote?: string;
  };
  heroImage?: { src: string; alt: string };
  sections: SubpageSection[];
  closing: {
    headline: string;
    headlineAccent?: string;
    ctaLabel: string;
    ctaHref?: string;     // default /contact
  };
}

function renderAccented(text: string, accent?: string) {
  if (!accent) return <>{text}</>;
  const idx = text.indexOf(accent);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <em className="italic font-light text-cobalt">{accent}</em>
      {text.slice(idx + accent.length)}
    </>
  );
}

/**
 * Rendert een alinea en zet daarbij `[[label|/pad]]`-markeringen om in een
 * echte link. Gebruikt zodat de klant in de content zelf kan aangeven welk
 * woord moet doorlinken (revisieronde 2026-08, punt 59: "Zorg dat achter het
 * woord 'interactieve calculator' een doorlink komt").
 */
function renderParagraph(text: string) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[\[([^|\]]+)\|([^\]]+)\]\]$/);
        if (!m) return <span key={i}>{part}</span>;
        return (
          <Link
            key={i}
            href={m[2]}
            className="text-cobalt hover:text-cobalt-bright underline underline-offset-2 transition-colors"
          >
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

function renderAccentedSection(text: string, accent?: string) {
  if (!accent) return <>{text}</>;
  const idx = text.indexOf(accent);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <em className="font-display italic font-light text-cobalt">{accent}</em>
      {text.slice(idx + accent.length)}
    </>
  );
}

export default function SubpageTemplate(p: SubpageTemplateProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <Link
                href={p.parentHref}
                className="tap-safe text-cobalt hover:underline"
              >
                {p.parentChapter} · {p.parentLabel}
              </Link>
              <span className="opacity-40">/</span>
              <span>{p.chapter} · {p.label}</span>
            </div>
            <h1 className="display-hero text-ink text-[clamp(2.5rem,6vw,5.5rem)] max-w-5xl whitespace-pre-line">
              {renderAccented(p.h1, p.h1Accent)}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE (optional) */}
      {p.heroImage && (
        <section className="relative pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <Reveal>
              <div className="aspect-[16/9] lg:aspect-[7/3] relative overflow-hidden rounded-3xl bg-ink shadow-[0_28px_60px_-20px_rgba(45,31,20,0.28)]">
                <Image
                  src={p.heroImage.src}
                  alt={p.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* INTRO */}
      <section className="py-20 bg-paper-deep border-y border-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                {p.intro.eyebrow}
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                {p.intro.headline}
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              {p.intro.paragraphs.map((para, i) => (
                <Reveal key={i} delay={100 + i * 60}>
                  <p>{renderParagraph(para)}</p>
                </Reveal>
              ))}
              {p.intro.sourceNote && (
                <Reveal delay={100 + p.intro.paragraphs.length * 60}>
                  <p className="text-[12px] text-muted pt-4 border-t border-mist">
                    {p.intro.sourceNote}
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {p.sections.map((s, i) => {
        const altBg = i % 2 === 1 ? "bg-paper-deep" : "";
        const key = `section-${i}`;

        if (s.type === "text") {
          return (
            <section key={key} className={`py-24 lg:py-32 ${altBg}`}>
              <div className="mx-auto max-w-7xl px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <Reveal className="lg:col-span-5">
                    {s.eyebrow && (
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                        {s.eyebrow}
                      </p>
                    )}
                    <h2 className="display-section text-[clamp(1.75rem,2.75vw,2.5rem)] text-ink">
                      {renderAccentedSection(s.heading, s.headingAccent)}
                    </h2>
                  </Reveal>
                  <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
                    {s.paragraphs.map((para, j) => (
                      <Reveal key={j} delay={100 + j * 60}>
                        <p>{renderParagraph(para)}</p>
                      </Reveal>
                    ))}
                    {s.sourceNote && (
                      <Reveal delay={100 + s.paragraphs.length * 60}>
                        <p className="text-[12px] text-muted pt-4 border-t border-mist">
                          {s.sourceNote}
                        </p>
                      </Reveal>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (s.type === "callout") {
          return (
            <section key={key} className={`py-24 lg:py-32 ${altBg}`}>
              <div className="mx-auto max-w-4xl px-6 lg:px-20">
                <Reveal>
                  {s.eyebrow && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6 text-center">
                      {s.eyebrow}
                    </p>
                  )}
                  <div className="bg-paper p-10 lg:p-14 border-l-2 border-cobalt">
                    <p className="font-display italic text-[clamp(1.25rem,2vw,1.75rem)] text-ink leading-[1.5]">
                      {s.quote}
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        }

        if (s.type === "numbered-list") {
          return (
            <section key={key} className={`py-24 lg:py-32 ${altBg}`}>
              <div className="mx-auto max-w-7xl px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
                  <Reveal className="lg:col-span-7">
                    {s.eyebrow && (
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                        {s.eyebrow}
                      </p>
                    )}
                    <h2 className="display-section text-[clamp(1.75rem,2.75vw,2.5rem)] text-ink">
                      {renderAccentedSection(s.heading, s.headingAccent)}
                    </h2>
                  </Reveal>
                  {s.intro && (
                    <div className="lg:col-span-5 flex items-end">
                      <Reveal delay={120} className="w-full">
                        <ListIntro>{s.intro}</ListIntro>
                      </Reveal>
                    </div>
                  )}
                </div>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {s.items.map((item, j) => (
                    <Reveal key={item.n} delay={(j % 4) * 60}>
                      <li className="grid grid-cols-12 gap-5 border-t border-mist pt-6">
                        <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                          {item.n}
                        </span>
                        <div className="col-span-10">
                          <h3 className="display-section text-[1.1rem] text-ink mb-2">
                            {item.title}
                          </h3>
                          <p className="text-text/80 text-[14px] leading-[1.55]">
                            {item.text}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
                {s.sourceNote && (
                  <Reveal delay={200}>
                    <p className="text-[12px] text-muted mt-12 pt-6 border-t border-mist">
                      {s.sourceNote}
                    </p>
                  </Reveal>
                )}
              </div>
            </section>
          );
        }

        if (s.type === "stat") {
          return (
            <section key={key} className="py-28 lg:py-36 bg-ink text-paper relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
                <svg width="100%" height="100%" aria-hidden>
                  <defs>
                    <pattern id={`grid-${i}`} width="64" height="64" patternUnits="userSpaceOnUse">
                      <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                </svg>
              </div>
              <div className="relative mx-auto max-w-7xl px-6 lg:px-20 text-center">
                <Reveal>
                  {s.eyebrow && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45 mb-10">
                      {s.eyebrow}
                    </p>
                  )}
                  <div className="display-numeric text-paper text-[clamp(4rem,12vw,10rem)] mb-10">
                    {s.value}
                  </div>
                  <p className="text-paper/80 text-[clamp(1.05rem,1.5vw,1.35rem)] max-w-3xl mx-auto leading-[1.5]">
                    {s.detail}
                  </p>
                  {s.sourceNote && (
                    <p className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-paper/45 mt-10">
                      {s.sourceNote}
                    </p>
                  )}
                </Reveal>
              </div>
            </section>
          );
        }

        if (s.type === "two-col") {
          return (
            <section key={key} className={`py-24 lg:py-32 ${altBg}`}>
              <div className="mx-auto max-w-7xl px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
                  <Reveal className="lg:col-span-7">
                    {s.eyebrow && (
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                        {s.eyebrow}
                      </p>
                    )}
                    <h2 className="display-section text-[clamp(1.75rem,2.75vw,2.5rem)] text-ink">
                      {renderAccentedSection(s.heading, s.headingAccent)}
                    </h2>
                  </Reveal>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mist border border-mist">
                  <Reveal>
                    <div className="bg-paper p-10 h-full">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt mb-6">
                        {s.leftTitle}
                      </p>
                      <ul className="space-y-3">
                        {s.leftItems.map((it) => (
                          <li key={it} className="flex items-start gap-3 text-text text-[15px] leading-[1.55]">
                            <span className="mt-2 w-1.5 h-1.5 bg-cobalt shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                  <Reveal delay={120}>
                    <div className="bg-paper p-10 h-full">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt mb-6">
                        {s.rightTitle}
                      </p>
                      <ul className="space-y-3">
                        {s.rightItems.map((it) => (
                          <li key={it} className="flex items-start gap-3 text-text text-[15px] leading-[1.55]">
                            <span className="mt-2 w-1.5 h-1.5 bg-cobalt shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
                {s.sourceNote && (
                  <Reveal delay={200}>
                    <p className="text-[12px] text-muted mt-12 pt-6 border-t border-mist">
                      {s.sourceNote}
                    </p>
                  </Reveal>
                )}
              </div>
            </section>
          );
        }

        if (s.type === "image") {
          return (
            <section key={key} className="py-0">
              <Reveal>
                <div className="relative aspect-[21/9] lg:aspect-[24/8] w-full overflow-hidden bg-ink">
                  <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="100vw" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </section>
          );
        }

        return null;
      })}

      {/* CLOSING CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="border-t border-b border-ink/10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="display-hero text-[clamp(2rem,4vw,3.5rem)] text-ink">
                  {renderAccented(p.closing.headline, p.closing.headlineAccent)}
                </h2>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <CTA href={p.closing.ctaHref ?? "/contact"} variant="primary">
                  {p.closing.ctaLabel}
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
