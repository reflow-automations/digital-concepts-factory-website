import type { Lang } from "@/lib/i18n/config";

export const contact = {
  nl: {
    hero: {
      chapter: "Contact",
      h1: "Een vrijblijvend gesprek begint hier",
      h1Accent: "gesprek",
    },
    divider: "Of laat een bericht achter",
    form: {
      name: "Naam",
      organisation: "Organisatie",
      email: "E-mail",
      phone: "Telefoon",
      topicsLabel: "Waarover wilt u in gesprek?",
      messageLabel: "Uw bericht",
      submit: "Verstuur aanvraag",
      submitting: "Versturen…",
      successTitle: "Bericht verstuurd",
      success: "Bedankt, wij nemen binnen 24 uur contact met u op.",
      errorFallback: "Er ging iets mis. Probeer het opnieuw.",
      connectionError: "Verbinding mislukt. Probeer het opnieuw.",
      captcha: "Bevestig eerst de reCAPTCHA",
    },
    topics: [
      "Talent aantrekken",
      "Talent behouden",
      "Ziekteverzuim",
      "Inkoop",
      "Marketing",
    ],
    sidebar: {
      directLabel: "Direct",
      addressLabel: "Bezoekadres",
    },
  },

  en: {
    hero: {
      chapter: "Contact",
      h1: "Start a no-obligation conversation",
      h1Accent: "conversation",
    },
    divider: "Or leave a message",
    form: {
      name: "Name",
      organisation: "Organisation",
      email: "Email",
      phone: "Phone",
      topicsLabel: "What would you like to discuss?",
      messageLabel: "Your message",
      submit: "Send enquiry",
      submitting: "Sending…",
      successTitle: "Message sent",
      success: "Thank you, we will get back to you within 24 hours.",
      errorFallback: "Something went wrong. Please try again.",
      connectionError: "Connection failed. Please try again.",
      captcha: "Please confirm the reCAPTCHA first",
    },
    topics: [
      "Attracting talent",
      "Retaining talent",
      "Sick leave",
      "Procurement",
      "Marketing",
    ],
    sidebar: {
      directLabel: "Direct",
      addressLabel: "Office address",
    },
  },
} satisfies Record<Lang, unknown>;
