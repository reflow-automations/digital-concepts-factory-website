import type { Bilingual } from "@/lib/i18n/config";

/**
 * Shared UI copy: navigation, header, footer, and recurring labels.
 * Page-level content lives co-located with each page in content/.
 */

export type NavSubItem = { href: string; label: Bilingual<string> };
export type NavItem = {
  href: string;
  label: Bilingual<string>;
  children?: NavSubItem[];
};

/** Primary navigation (header + footer "Innovations" column share the 5 pillars). */
export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: { nl: "Home", en: "Home" } },
  {
    href: "/talent-aantrekken",
    label: { nl: "Talent aantrekken", en: "Attracting talent" },
    children: [
      { href: "/talent-aantrekken/innovatie", label: { nl: "Innovatief talent aantrekken", en: "Innovative talent attraction" } },
      { href: "/talent-aantrekken/employer-branding", label: { nl: "Employer Branding", en: "Employer Branding" } },
      { href: "/talent-aantrekken/waarom-werkgevers", label: { nl: "Van zichtbaarheid naar conversie", en: "From visibility to conversion" } },
      { href: "/talent-aantrekken/dooh-effectief", label: { nl: "Waarom DOOH effectief is", en: "Why DOOH works" } },
    ],
  },
  {
    href: "/talent-behouden",
    label: { nl: "Talent behouden", en: "Retaining talent" },
    children: [
      { href: "/talent-behouden/innovatie", label: { nl: "Innovatie voor talentbehoud", en: "Innovation for talent retention" } },
      { href: "/talent-behouden/arbeidsvoorwaarden", label: { nl: "Eén pakket past niet meer", en: "One package no longer fits" } },
      { href: "/talent-behouden/vervangingskosten", label: { nl: "Vervangingskosten uitgesplitst", en: "Replacement costs broken down" } },
      { href: "/talent-behouden/bereken", label: { nl: "Bereken uw besparing", en: "Calculate your potential savings" } },
    ],
  },
  {
    href: "/ziekteverzuim",
    label: { nl: "Ziekteverzuim", en: "Sick leave" },
    children: [
      {
        href: "/ziekteverzuim/innovatie",
        label: { nl: "Innovatie voor ziekteverzuim", en: "Innovation for sick leave" },
      },
      {
        href: "/ziekteverzuim/gevolgen",
        label: { nl: "Gevolgen van ziekteverzuim", en: "Consequences of sick leave" },
      },
    ],
  },
  {
    href: "/inkoop",
    label: { nl: "Inkoop", en: "Procurement" },
    children: [
      { href: "/inkoop/innovatie", label: { nl: "Innovatie Inkoop", en: "Procurement innovation" } },
      { href: "/inkoop/aanbesteden", label: { nl: "(Europees) aanbesteden", en: "(European) tendering" } },
      { href: "/inkoop/contractmanagement", label: { nl: "Contractmanagement", en: "Contract management" } },
    ],
  },
  {
    href: "/marketing",
    label: { nl: "Marketing", en: "Marketing" },
    children: [
      { href: "/marketing/innovatie", label: { nl: "Innovatie Marketing", en: "Marketing innovation" } },
    ],
  },
  {
    href: "/over-ons",
    label: { nl: "Over ons", en: "About us" },
    children: [
      { href: "/over-ons/visie", label: { nl: "Visie en kernwaarden", en: "Vision and core values" } },
      { href: "/over-ons/team", label: { nl: "Het team", en: "The team" } },
    ],
  },
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
        "Digital Concepts Factory BV",
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
      tagline: "The Digital Bridge between challenges and solutions",
      taglineAccent: "Digital Bridge",
      intro:
        "Curious where digital innovation can make the difference in your organisation? We are happy to think along with you.",
      colInnovations: "Innovations",
      colCompany: "Company",
      colOffice: "Office",
      colContact: "Contact",
      office: [
        "Digital Concepts Factory BV",
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
