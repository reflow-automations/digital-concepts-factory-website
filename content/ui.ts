import type { Bilingual } from "@/lib/i18n/config";

/**
 * Shared UI copy: navigation, header, footer, and recurring labels.
 * Page-level content lives co-located with each page in content/.
 */

export type NavItem = { href: string; label: Bilingual<string> };

/** Primary navigation (header + footer "Innovations" column share the 5 pillars). */
export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: { nl: "Home", en: "Home" } },
  {
    href: "/talent-aantrekken",
    label: { nl: "Talent aantrekken", en: "Attracting talent" },
  },
  {
    href: "/talent-behouden",
    label: { nl: "Talent behouden", en: "Retaining talent" },
  },
  {
    href: "/ziekteverzuim",
    label: { nl: "Ziekteverzuim", en: "Absenteeism" },
  },
  { href: "/inkoop", label: { nl: "Inkoop", en: "Procurement" } },
  { href: "/marketing", label: { nl: "Marketing", en: "Marketing" } },
  { href: "/over-ons", label: { nl: "Over ons", en: "About us" } },
];

/** The 5 service pillars, used in the footer "Innovations" column. */
export const PILLAR_LINKS: NavItem[] = NAV_ITEMS.filter(
  (i) => i.href !== "/" && i.href !== "/over-ons",
);

export const FOOTER_COMPANY_LINKS: NavItem[] = [
  { href: "/over-ons", label: { nl: "Over ons", en: "About us" } },
  { href: "/contact", label: { nl: "Contact", en: "Contact" } },
];

/** Recurring call-to-action labels, so every button reads consistently. */
export const cta = {
  short: { nl: "Plan gesprek", en: "Schedule a call" },
  long: {
    nl: "Plan een vrijblijvend gesprek",
    en: "Schedule a no-obligation call",
  },
} satisfies Record<string, Bilingual<string>>;

export const ui = {
  nl: {
    header: { menu: "Menu" },
    footer: {
      eyebrow: "De brug",
      tagline: "De Digitale Brug tussen vraagstuk en oplossing",
      taglineAccent: "Digitale Brug",
      intro:
        "Benieuwd waar digitale innovatie binnen uw organisatie het verschil kan maken? We denken graag met u mee.",
      colInnovations: "Innovaties",
      colCompany: "Organisatie",
      colOffice: "Kantoor",
      colContact: "Contact",
      office: [
        "Digital Concepts Factory",
        "Stationsplein 45",
        "3013 AK Rotterdam",
        "Nederland",
      ],
      rights: "© 2026 Digital Concepts Factory B.V.",
      privacy: "Privacy",
      disclaimer: "Disclaimer",
      terms: "Voorwaarden",
      cookiePrefs: "Cookievoorkeuren",
    },
    subpagesNav: {
      label: "Verdieping",
      heading: "Lees verder over dit onderwerp",
    },
  },
  en: {
    header: { menu: "Menu" },
    footer: {
      eyebrow: "The bridge",
      tagline: "The Digital Bridge between challenge and solution",
      taglineAccent: "Digital Bridge",
      intro:
        "Curious where digital innovation can make the difference in your organisation? We are happy to think along with you.",
      colInnovations: "Innovations",
      colCompany: "Company",
      colOffice: "Office",
      colContact: "Contact",
      office: [
        "Digital Concepts Factory",
        "Stationsplein 45",
        "3013 AK Rotterdam",
        "The Netherlands",
      ],
      rights: "© 2026 Digital Concepts Factory B.V.",
      privacy: "Privacy",
      disclaimer: "Disclaimer",
      terms: "Terms",
      cookiePrefs: "Cookie preferences",
    },
    subpagesNav: {
      label: "Further reading",
      heading: "Read more on this topic",
    },
  },
} satisfies Record<"nl" | "en", unknown>;
