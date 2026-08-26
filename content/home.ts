import type { Lang } from "@/lib/i18n/config";

/** All copy for the home page, per language. Structure must match across langs. */
export const home = {
  nl: {
    hero: {
      eyebrow: "Digitale innovatie · HR · Inkoop · Marketing",
      h1: "Grip op groei begint met digitale innovatie",
      h1Accent: "digitale innovatie",
      lead: [
        "Digital Concepts Factory ontwikkelt digitale innovaties waarmee organisaties hun grootste uitdagingen binnen Human Resource Management (HR), Inkoop en Marketing slimmer en doelgerichter aanpakken.",
        "We helpen organisaties om sneller talent te vinden, medewerkers langer te behouden, ziekteverzuim terug te dringen, inkoopprocessen slimmer te organiseren en marketing meer impact te geven.",
        "Onze oplossingen zijn praktisch toepasbaar en gericht op concreet resultaat: lagere kosten, meer rendement en duurzame groei.",
        "Digitale innovatie is geen luxe meer, maar een noodzaak om niet stil te blijven staan.",
      ],
      ctaSecondary: "Bekijk innovaties",
    },
    pillars: {
      chapter: "Onze innovaties",
      heading: "Vijf domeinen, één vaste belofte",
      headingAccent: "vaste belofte",
      intro:
        "Onze digitale innovaties pakken herkenbare organisatievraagstukken aan en dragen direct bij aan groei, continuïteit en rendement.",
      items: [
        {
          summary:
            "Werkgevers blijvend op het netvlies bij talent. Offline via DOOH-netwerken en online via slimme retargeting.",
          bullets: ["Employer Branding", "DOOH-campagnes", "Retargeting"],
        },
        {
          summary:
            "Meer ruimte voor persoonlijke arbeidsvoorwaarden, zonder de grip te verliezen. Sterkere binding, minder verloop en lagere vervangingskosten.",
          bullets: ["Maatwerk", "€19.200 p/p besparing", "Schaalbaar"],
        },
        {
          summary:
            "Een betaalbare digitale oplossing die kortdurend verzuim direct aanpakt. Snel te implementeren, eenvoudig in gebruik en gericht op resultaat.",
          bullets: ["Kortdurend verzuim", "€4.5K, €7K p/p p/j", "Direct toepasbaar"],
        },
        {
          summary:
            "Meer overzicht en grip op aanbestedingen en contractmanagement, met aantoonbare besparingen tot 50%.",
          bullets: ["(Europees) aanbesteden", "Contractmanagement", "Besparingen tot 50%"],
        },
        {
          summary:
            "Campagnes die niet alleen zichtbaar zijn, maar ook iets in beweging zetten. Online én offline, voor meer bereik, herkenning en impact.",
          bullets: ["Onderscheidende concepten", "Online + offline", "Resultaatgericht"],
        },
      ],
    },
    stats: {
      chapter: "De cijfers",
      heading: "Innovatie die rekent",
      headingAccent: "rekent",
      calcLink: "Bereken uw besparingspotentieel",
      items: [
        {
          navLabel: "Besparing door personeelsbehoud",
          label: "Minimale besparing per behouden medewerker",
          detail:
            "Vervangingskosten bedragen 40% tot 200% van het bruto jaarsalaris. Bij modaal inkomen (€48.000) ligt de ondergrens al op €19.200 per medewerker.",
          source: "Gallup · Randstad",
          prefix: "€",
        },
        {
          navLabel: "Besparing door minder ziekteverzuim",
          label: "Verzuimkosten per medewerker per jaar",
          detail:
            "Gemiddelde kosten van ziekteverzuim in Nederland, exclusief de indirecte gevolgen voor productiviteit, teams en continuïteit.",
          source: "TNO · ArboNed",
          prefix: "€",
        },
        {
          navLabel: "Besparing op aanbestedingskosten",
          label: "Reductie aanbestedingskosten",
          detail:
            "Met onze digitale innovatie voor (Europees) aanbesteden kunnen interne kosten en doorlooptijden met de helft worden teruggebracht.",
          source: "DCF onderzoek",
          word: "tot",
          suffix: "%",
        },
        {
          navLabel: "Maandelijks bereik DOOH-netwerk",
          label: "Bereik DOOH-netwerk per maand",
          detail:
            "Afhankelijk van locaties en campagne-opzet bereiken onze DOOH-schermen 250.000 tot 2 miljoen kandidaten per maand, vooral in de Randstad.",
          source: "DCF netwerk",
          suffix: " mln+",
        },
      ],
    },
    manifesto: {
      chapter: "Onze overtuiging",
      heading: "De Digitale Brug tussen vraagstuk en oplossing",
      headingAccent: "Digitale Brug",
      intro:
        "Iedere organisatie staat voor uitdagingen die vragen om nieuwe manieren van denken en werken. Met onze digitale innovaties slaan we de brug tussen concrete organisatievraagstukken en praktische oplossingen die organisaties slimmer, sterker en toekomstbestendiger maken.",
      points: [
        {
          title: "Eerst begrijpen, dan bouwen",
          text: "Achter iedere organisatie zit een eigen verhaal. Daarom nemen we eerst de tijd om de organisatie, het vraagstuk en de ambitie goed te begrijpen. Pas daarna beginnen we met ontwikkelen.",
        },
        {
          title: "Praktisch en betaalbaar",
          text: "Innovatie moet vooral werken in de dagelijkse praktijk. Daarom ontwikkelen we oplossingen die slim, toegankelijk en praktisch toepasbaar zijn.",
        },
        {
          title: "Uiteindelijk telt het resultaat",
          text: "Meer overzicht, meer grip, lagere kosten en slimmere processen. Onze innovaties zijn gericht op wat uiteindelijk telt: groei, continuïteit en rendement.",
        },
      ],
    },
    clients: {
      eyebrow: "Wij zijn trots op onze samenwerkingen",
    },
    newsletter: {
      chapter: "Nieuwsbrief",
      heading: "Ontvang als eerste de innovaties die het verschil maken",
      headingAccent: "verschil maken",
      intro:
        "Eén editie per maand, met de nieuwste digitale innovaties die de verbindende schakel vormen tussen de oude en de nieuwe wereld.",
      placeholder: "naam@organisatie.nl",
      submit: "Aanmelden",
      submitted: "Bedankt, u staat op de lijst",
      fineprint: "Uitschrijven altijd mogelijk.",
    },
    finalCta: {
      heading:
        "Staat uw organisatie voor een uitdaging? Ontdek welke digitale innovatie het verschil kan maken.",
      headingAccent: "uw organisatie",
    },
  },

  en: {
    hero: {
      eyebrow: "Digital innovation · HR · Procurement · Marketing",
      h1: "Control over growth starts with digital innovation",
      h1Accent: "digital innovation",
      lead: [
        "Digital Concepts Factory develops digital innovations that help organisations tackle their biggest challenges in Human Resource Management (HR), Procurement and Marketing in a smarter, more focused way.",
        "We help organisations find talent faster, retain employees longer, reduce absenteeism, organise procurement processes more intelligently and give marketing more impact.",
        "Our solutions are practical to apply and focused on concrete results: lower costs, higher returns and sustainable growth.",
        "Digital innovation is no longer a luxury, but a necessity to keep moving forward.",
      ],
      ctaSecondary: "Explore innovations",
    },
    pillars: {
      chapter: "Our innovations",
      heading: "Five domains, one firm promise",
      headingAccent: "firm promise",
      intro:
        "Our digital innovations tackle recognisable organisational challenges and contribute directly to growth, continuity and return.",
      items: [
        {
          summary:
            "Employers lastingly on talent's radar. Offline through DOOH networks and online through smart retargeting.",
          bullets: ["Employer branding", "DOOH campaigns", "Retargeting"],
        },
        {
          summary:
            "More room for personalised employment terms, without losing control. Stronger commitment, less turnover and lower replacement costs.",
          bullets: ["Tailored", "€19,200 p/p saving", "Scalable"],
        },
        {
          summary:
            "An affordable digital solution that tackles short-term absence head-on. Quick to implement, easy to use and focused on results.",
          bullets: ["Short-term absence", "€4.5K, €7K p/p p/y", "Immediately applicable"],
        },
        {
          summary:
            "More overview and control over tendering and contract management, with proven savings of up to 50%.",
          bullets: ["(European) tendering", "Contract management", "Savings up to 50%"],
        },
        {
          summary:
            "Campaigns that are not just visible, but set things in motion. Online and offline, for more reach, recognition and impact.",
          bullets: ["Distinctive concepts", "Online + offline", "Results-driven"],
        },
      ],
    },
    stats: {
      chapter: "The numbers",
      heading: "Innovation that adds up",
      headingAccent: "adds up",
      calcLink: "Calculate your savings potential",
      items: [
        {
          navLabel: "Savings through staff retention",
          label: "Minimum saving per retained employee",
          detail:
            "Replacement costs range from 40% to 200% of gross annual salary. At an average income (€48,000), the lower bound already sits at €19,200 per employee.",
          source: "Gallup · Randstad",
          prefix: "€",
        },
        {
          navLabel: "Savings through less absenteeism",
          label: "Absence costs per employee per year",
          detail:
            "Average cost of absenteeism in the Netherlands, excluding the indirect impact on productivity, teams and continuity.",
          source: "TNO · ArboNed",
          prefix: "€",
        },
        {
          navLabel: "Savings on tendering costs",
          label: "Reduction in tendering costs",
          detail:
            "With our digital innovation for (European) tendering, internal costs and lead times can be cut in half.",
          source: "DCF research",
          word: "up to",
          suffix: "%",
        },
        {
          navLabel: "Monthly DOOH network reach",
          label: "DOOH network reach per month",
          detail:
            "Depending on locations and campaign setup, our DOOH screens reach 250,000 to 2 million candidates per month, mainly in the Randstad region.",
          source: "DCF network",
          suffix: " M+",
        },
      ],
    },
    manifesto: {
      chapter: "What we believe",
      heading: "The Digital Bridge between challenge and solution",
      headingAccent: "Digital Bridge",
      intro:
        "Every organisation faces challenges that call for new ways of thinking and working. With our digital innovations we bridge concrete organisational challenges and practical solutions that make organisations smarter, stronger and more future-proof.",
      points: [
        {
          title: "Understand first, then build",
          text: "Behind every organisation is a story of its own. That is why we first take the time to properly understand the organisation, the challenge and the ambition. Only then do we start developing.",
        },
        {
          title: "Practical and affordable",
          text: "Above all, innovation has to work in daily practice. That is why we develop solutions that are smart, accessible and practical to apply.",
        },
        {
          title: "In the end, results are what count",
          text: "More overview, more control, lower costs and smarter processes. Our innovations focus on what ultimately counts: growth, continuity and return.",
        },
      ],
    },
    clients: {
      eyebrow: "We are proud of our collaborations",
    },
    newsletter: {
      chapter: "Newsletter",
      heading: "Be the first to receive the innovations that make the difference",
      headingAccent: "make the difference",
      intro:
        "One edition a month, featuring the latest digital innovations that bridge the old world and the new.",
      placeholder: "name@organisation.com",
      submit: "Subscribe",
      submitted: "Thank you, you're on the list",
      fineprint: "Unsubscribe at any time.",
    },
    finalCta: {
      heading:
        "Is your organisation facing a challenge? Discover which digital innovation can make the difference.",
      headingAccent: "your organisation",
    },
  },
} satisfies Record<Lang, unknown>;
