"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import { useLang } from "@/lib/i18n/provider";
import { ui } from "@/content/ui";

interface SubpagesNavProps {
  chapter: string;       // e.g. "II"
  label?: string;        // overrides the default "Verdieping" / "Further reading"
  heading?: string;      // overrides the default "Lees verder over dit onderwerp"
  items: { no: string; title: string; summary: string; href: string }[];
}

export default function SubpagesNav({
  chapter,
  label,
  heading,
  items,
}: SubpagesNavProps) {
  const t = ui[useLang()].subpagesNav;
  return (
    <section className="py-24 lg:py-32 bg-paper-deep">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <Reveal>
          <ChapterMark
            number={chapter}
            label={label ?? t.label}
            className="text-muted mb-8"
          />
          <h2 className="display-section text-[clamp(1.75rem,2.75vw,2.5rem)] text-ink mb-14 max-w-3xl">
            {heading ?? t.heading}
          </h2>
        </Reveal>

        <div
          className={`grid grid-cols-1 gap-px bg-mist ${
            items.length === 2
              ? "md:grid-cols-2"
              : items.length === 3
                ? "md:grid-cols-3"
                : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {items.map((item, i) => (
            <Reveal key={item.href} delay={i * 70}>
              <Link
                href={item.href}
                className="group block h-full p-8 lg:p-10 bg-paper hover:bg-paper-deep transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt">
                    {item.no}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    className="text-cobalt opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    aria-hidden
                  >
                    <path
                      d="M1 9h16M11 3l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      fill="none"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
                <h3 className="display-section text-[clamp(1.15rem,1.5vw,1.4rem)] text-ink mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-text/75 text-[14px] leading-[1.55]">
                  {item.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
