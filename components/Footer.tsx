"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n/provider";
import {
  ui,
  cta,
  PILLAR_LINKS,
  FOOTER_COMPANY_LINKS,
} from "@/content/ui";
import Accent from "@/components/Accent";
import { openCookieSettings } from "@/components/CookieConsent";

export default function Footer() {
  const lang = useLang();
  const t = ui[lang].footer;

  return (
    <footer className="mt-32 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top: tagline from Lev */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-paper/45 mb-6">{t.eyebrow}</p>
            <h2 className="display-hero text-[clamp(2.5rem,5vw,4.5rem)] text-paper max-w-2xl">
              <Accent
                text={t.tagline}
                accent={t.taglineAccent}
                className="italic font-light text-cobalt-bright"
              />
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 flex flex-col justify-end">
            <p className="text-paper/70 text-[15px] leading-relaxed max-w-md mb-6">
              {t.intro}
            </p>
            <Link
              href="/contact"
              className="self-start px-6 py-3 bg-paper text-ink text-[13px] hover:bg-cobalt hover:text-paper transition-colors duration-300"
            >
              {cta.long[lang]}
            </Link>
          </div>
        </div>

        <div className="h-px bg-paper/15 mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-[13px]">
          <div>
            <p className="eyebrow text-paper/40 mb-4">{t.colInnovations}</p>
            <ul className="space-y-2.5 text-paper/80">
              {PILLAR_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-paper">
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/40 mb-4">{t.colCompany}</p>
            <ul className="space-y-2.5 text-paper/80">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-paper">
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/40 mb-4">{t.colOffice}</p>
            <address className="not-italic text-paper/80 leading-relaxed">
              {t.office.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <p className="eyebrow text-paper/40 mb-4">{t.colContact}</p>
            <ul className="space-y-2.5 text-paper/80">
              <li>
                <a
                  href="mailto:info@digitalconceptsfactory.nl"
                  className="hover:text-paper break-all"
                >
                  info@digitalconceptsfactory.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.14em] text-paper/40">
          <div>{t.rights}</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper">
              {t.privacy}
            </Link>
            <Link href="/disclaimer" className="hover:text-paper">
              {t.disclaimer}
            </Link>
            <Link href="/algemene-voorwaarden" className="hover:text-paper">
              {t.terms}
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="uppercase tracking-[0.14em] hover:text-paper"
            >
              {t.cookiePrefs}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
