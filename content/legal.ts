/**
 * Legal documents of Digital Concepts Factory B.V. as structured data.
 * One render component (components/LegalPage.tsx) displays them consistently.
 * NL versions are the legally binding originals; EN versions are courtesy translations.
 *
 * Source: DCF-supplied docx files (version 1.0, June 2026).
 * Text taken verbatim; en-dashes replaced with hyphens.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: [string, string]; rows: [string, string][] };

export type LegalSection = {
  heading?: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  version: string;
  intro?: string;
  sections: LegalSection[];
};

export type BilingualLegalDoc = { nl: LegalDoc; en: LegalDoc };

const VERSION_NL = "Versie 1.0, juni 2026";
const VERSION_EN = "Version 1.0, June 2026";

// ---------------------------------------------------------------------------
// Privacy
// ---------------------------------------------------------------------------

const privacyDocNl: LegalDoc = {
  title: "Privacyverklaring",
  version: VERSION_NL,
  sections: [
    {
      heading: "1. Wie zijn wij?",
      blocks: [
        { type: "p", text: "Digital Concepts Factory B.V. (\"DCF\") ontwikkelt en levert innovatieve oplossingen op het gebied van Human Resources, Inkoop, Marketing, Software, Artificial Intelligence (AI), Websites, SaaS-oplossingen en digitale platformen." },
        { type: "p", text: "DCF respecteert uw privacy en verwerkt persoonsgegevens zorgvuldig, vertrouwelijk en in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG)." },
        { type: "p", text: "Verantwoordelijke voor de verwerking van persoonsgegevens:" },
        { type: "ul", items: [
          "Digital Concepts Factory B.V.",
          "KvK-nummer: 55540325",
          "Vestigingsadres: Stationsplein 45 te Rotterdam",
          "E-mailadres: info@digitalconceptsfactory.nl",
          "Telefoonnummer: +31 (0)10 786 56 84",
        ]},
      ],
    },
    {
      heading: "2. Welke persoonsgegevens verwerken wij?",
      blocks: [
        { type: "p", text: "Afhankelijk van uw contact met DCF kunnen wij de volgende persoonsgegevens verwerken:" },
        { type: "h3", text: "Contactgegevens" },
        { type: "ul", items: ["Voor- en achternaam", "Bedrijfsnaam", "Functie", "E-mailadres", "Telefoonnummer", "Adresgegevens"] },
        { type: "h3", text: "Websitegegevens" },
        { type: "ul", items: ["IP-adres", "Browsergegevens", "Apparaatgegevens", "Cookies", "Websitegedrag", "Klikgedrag"] },
        { type: "h3", text: "Nieuwsbriefgegevens" },
        { type: "ul", items: ["Naam", "E-mailadres", "Open- en klikgedrag"] },
        { type: "h3", text: "Klantgegevens" },
        { type: "ul", items: ["Factuurgegevens", "Betalingsgegevens", "Correspondentie", "Contractgegevens"] },
        { type: "h3", text: "Sollicitatie- en recruitmentgegevens" },
        { type: "ul", items: ["CV", "Motivatiebrief", "Opleidingen", "Werkervaring", "Referenties (indien verstrekt)"] },
        { type: "h3", text: "SaaS- en softwaregegevens" },
        { type: "ul", items: ["Gebruikersnaam", "Login-gegevens", "Activiteiten binnen applicaties", "Gebruiksstatistieken", "Logbestanden"] },
      ],
    },
    {
      heading: "3. Waarom verwerken wij persoonsgegevens?",
      blocks: [
        { type: "p", text: "DCF verwerkt persoonsgegevens uitsluitend voor legitieme doeleinden." },
        { type: "h3", text: "Uitvoering van overeenkomsten" },
        { type: "ul", items: ["Leveren van diensten", "Uitvoeren van opdrachten", "Klantenondersteuning", "Facturatie"] },
        { type: "h3", text: "Communicatie" },
        { type: "ul", items: ["Beantwoorden van vragen", "Verzenden van offertes", "Verzenden van informatie", "Klantcontact"] },
        { type: "h3", text: "Marketing" },
        { type: "ul", items: ["Nieuwsbrieven", "Evenementen", "Productinformatie", "Dienstverlening"] },
        { type: "h3", text: "Recruitment" },
        { type: "ul", items: ["Beoordelen van kandidaten", "Contact onderhouden met kandidaten", "Werving- en selectieactiviteiten"] },
        { type: "h3", text: "Software en SaaS" },
        { type: "ul", items: ["Gebruikersbeheer", "Authenticatie", "Beveiliging", "Analyse van gebruik"] },
        { type: "h3", text: "Wettelijke verplichtingen" },
        { type: "ul", items: ["Belastingwetgeving", "Boekhoudkundige verplichtingen", "Wettelijke verzoeken van overheidsinstanties"] },
      ],
    },
    {
      heading: "4. Op welke grondslag verwerken wij persoonsgegevens?",
      blocks: [
        { type: "p", text: "DCF verwerkt persoonsgegevens op basis van één of meer van de volgende grondslagen:" },
        { type: "ul", items: ["Uitvoering van een overeenkomst;", "Wettelijke verplichting;", "Toestemming;", "Gerechtvaardigd belang."] },
        { type: "p", text: "Onder gerechtvaardigd belang verstaan wij onder meer:" },
        { type: "ul", items: ["Marketingactiviteiten richting zakelijke relaties;", "Verbetering van dienstverlening;", "Beveiliging van systemen;", "Fraudepreventie;", "Bedrijfsvoering."] },
      ],
    },
    {
      heading: "5. Nieuwsbrieven en marketing",
      blocks: [
        { type: "p", text: "Wanneer u zich aanmeldt voor onze nieuwsbrief gebruiken wij uw gegevens uitsluitend om u informatie te sturen over:" },
        { type: "ul", items: ["Innovaties;", "Productontwikkelingen;", "Diensten;", "Evenementen;", "Artikelen;", "Nieuws."] },
        { type: "p", text: "U kunt zich op ieder moment uitschrijven via de afmeldlink onderaan iedere nieuwsbrief." },
      ],
    },
    {
      heading: "6. Contactformulier",
      blocks: [
        { type: "p", text: "Wanneer u een contactformulier invult, gebruiken wij uw gegevens uitsluitend om contact met u op te nemen en uw aanvraag af te handelen." },
        { type: "p", text: "Deze gegevens worden niet verkocht aan derden." },
      ],
    },
    {
      heading: "7. Afspraakplanning",
      blocks: [
        { type: "p", text: "DCF kan gebruikmaken van externe afspraaksoftware zoals Calendly of Cal.com." },
        { type: "p", text: "Wanneer u een afspraak plant, worden persoonsgegevens verwerkt zoals:" },
        { type: "ul", items: ["Naam;", "E-mailadres;", "Organisatie;", "Telefoonnummer;", "Afspraakinformatie."] },
        { type: "p", text: "Deze verwerking vindt plaats op basis van uw verzoek om een afspraak te maken." },
      ],
    },
    {
      heading: "8. AI-toepassingen",
      blocks: [
        { type: "p", text: "DCF maakt gebruik van Artificial Intelligence (AI) binnen haar dienstverlening en softwareoplossingen." },
        { type: "p", text: "AI-systemen kunnen gegevens verwerken om:" },
        { type: "ul", items: ["Antwoorden te genereren;", "Analyses uit te voeren;", "Processen te automatiseren;", "Gebruikerservaringen te verbeteren."] },
        { type: "p", text: "DCF streeft ernaar om AI-systemen zorgvuldig, transparant en verantwoord in te zetten." },
        { type: "p", text: "Hoewel wij passende maatregelen nemen, kunnen AI-uitkomsten onjuist, onvolledig of verouderd zijn. Gebruikers blijven verantwoordelijk voor het controleren van AI-uitkomsten." },
      ],
    },
    {
      heading: "9. Cookies",
      blocks: [
        { type: "p", text: "Onze website maakt gebruik van cookies." },
        { type: "h3", text: "Functionele cookies" },
        { type: "p", text: "Noodzakelijk voor het functioneren van de website." },
        { type: "h3", text: "Analytische cookies" },
        { type: "p", text: "Voor het verbeteren van de website." },
        { type: "h3", text: "Marketingcookies" },
        { type: "p", text: "Voor marketing- en advertentiedoeleinden." },
        { type: "p", text: "Indien wettelijk vereist vragen wij vooraf toestemming voor het plaatsen van cookies. Een aparte Cookieverklaring kan aanvullende informatie bevatten." },
      ],
    },
    {
      heading: "10. Met wie delen wij persoonsgegevens?",
      blocks: [
        { type: "p", text: "DCF verkoopt geen persoonsgegevens." },
        { type: "p", text: "Gegevens kunnen uitsluitend worden gedeeld met:" },
        { type: "ul", items: ["Hostingproviders;", "Cloudleveranciers;", "E-mailproviders;", "Nieuwsbriefsoftware;", "CRM-systemen;", "Betaaldienstverleners;", "IT-leveranciers;", "Boekhoudsoftware;", "Juridische adviseurs;", "Overheidsinstanties indien wettelijk verplicht."] },
        { type: "p", text: "Wij sluiten waar nodig verwerkersovereenkomsten af." },
      ],
    },
    {
      heading: "11. Internationale doorgifte",
      blocks: [
        { type: "p", text: "Sommige leveranciers kunnen gevestigd zijn buiten de Europese Economische Ruimte (EER)." },
        { type: "p", text: "Wanneer persoonsgegevens buiten de EER worden verwerkt, zorgen wij voor passende waarborgen conform de AVG, waaronder:" },
        { type: "ul", items: ["Europese Model Clauses (SCC's);", "Adequaatheidsbesluiten;", "Andere wettelijk toegestane mechanismen."] },
      ],
    },
    {
      heading: "12. Beveiliging",
      blocks: [
        { type: "p", text: "DCF neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen:" },
        { type: "ul", items: ["Verlies;", "Diefstal;", "Onbevoegde toegang;", "Misbruik;", "Onrechtmatige verwerking."] },
        { type: "p", text: "Voorbeelden van maatregelen:" },
        { type: "ul", items: ["SSL/TLS-versleuteling;", "Toegangsbeveiliging;", "Tweefactorauthenticatie waar mogelijk;", "Logging;", "Back-ups;", "Antivirus- en beveiligingssoftware."] },
      ],
    },
    {
      heading: "13. Bewaartermijnen",
      blocks: [
        { type: "p", text: "DCF bewaart persoonsgegevens niet langer dan noodzakelijk. Indicatieve bewaartermijnen:" },
        { type: "table", head: ["Gegevenstype", "Bewaartermijn"], rows: [
          ["Contactaanvragen", "2 jaar"],
          ["Offertes", "7 jaar"],
          ["Facturen", "7 jaar"],
          ["Klantdossiers", "7 jaar na einde overeenkomst"],
          ["Nieuwsbriefgegevens", "Tot uitschrijving"],
          ["Sollicitatiegegevens", "Maximaal 4 weken na afronding procedure, tenzij toestemming voor 1 jaar wordt gegeven"],
        ]},
        { type: "p", text: "Indien wettelijke verplichtingen langere bewaartermijnen voorschrijven, gelden deze wettelijke termijnen." },
      ],
    },
    {
      heading: "14. Uw rechten",
      blocks: [
        { type: "p", text: "U heeft het recht om:" },
        { type: "ul", items: ["Uw gegevens in te zien;", "Uw gegevens te corrigeren;", "Uw gegevens te laten verwijderen;", "Verwerking te beperken;", "Bezwaar te maken;", "Uw gegevens over te dragen;", "Uw toestemming in te trekken."] },
        { type: "p", text: "Verzoeken kunnen worden ingediend via: info@digitalconceptsfactory.nl" },
        { type: "p", text: "DCF kan aanvullende verificatie vragen voordat een verzoek wordt behandeld." },
      ],
    },
    {
      heading: "15. Klachten",
      blocks: [
        { type: "p", text: "Indien u niet tevreden bent over de verwerking van uw persoonsgegevens, kunt u contact met ons opnemen." },
        { type: "p", text: "Daarnaast heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens, Postbus 93374, 2509 AJ Den Haag, www.autoriteitpersoonsgegevens.nl." },
      ],
    },
    {
      heading: "16. Wijzigingen",
      blocks: [
        { type: "p", text: "DCF behoudt zich het recht voor deze Privacyverklaring te wijzigen. De meest actuele versie wordt gepubliceerd op de website van DCF." },
        { type: "p", text: "Wij adviseren u deze Privacyverklaring regelmatig te raadplegen." },
      ],
    },
    {
      heading: "17. Contact",
      blocks: [
        { type: "p", text: "Voor vragen over deze Privacyverklaring kunt u contact opnemen met:" },
        { type: "ul", items: ["Digital Concepts Factory B.V.", "E-mail: info@digitalconceptsfactory.nl", "Telefoon: +31 (0)10 786 56 84", "Website: www.digitalconceptsfactory.nl"] },
      ],
    },
  ],
};

const privacyDocEn: LegalDoc = {
  title: "Privacy Policy",
  version: VERSION_EN,
  sections: [
    {
      heading: "1. Who are we?",
      blocks: [
        { type: "p", text: "Digital Concepts Factory B.V. (\"DCF\") develops and delivers innovative solutions in the fields of Human Resources, Procurement, Marketing, Software, Artificial Intelligence (AI), Websites, SaaS solutions and digital platforms." },
        { type: "p", text: "DCF respects your privacy and processes personal data carefully, confidentially and in accordance with the General Data Protection Regulation (GDPR)." },
        { type: "p", text: "Data controller:" },
        { type: "ul", items: [
          "Digital Concepts Factory B.V.",
          "Chamber of Commerce number: 55540325",
          "Address: Stationsplein 45, Rotterdam",
          "Email: info@digitalconceptsfactory.nl",
          "Phone: +31 (0)10 786 56 84",
        ]},
      ],
    },
    {
      heading: "2. What personal data do we process?",
      blocks: [
        { type: "p", text: "Depending on your contact with DCF, we may process the following personal data:" },
        { type: "h3", text: "Contact details" },
        { type: "ul", items: ["First and last name", "Company name", "Job title", "Email address", "Phone number", "Address details"] },
        { type: "h3", text: "Website data" },
        { type: "ul", items: ["IP address", "Browser data", "Device data", "Cookies", "Website usage data", "Click behaviour"] },
        { type: "h3", text: "Newsletter data" },
        { type: "ul", items: ["Name", "Email address", "Email open and click data"] },
        { type: "h3", text: "Client data" },
        { type: "ul", items: ["Invoice details", "Payment details", "Correspondence", "Contract details"] },
        { type: "h3", text: "Recruitment and application data" },
        { type: "ul", items: ["CV", "Cover letter", "Qualifications", "Work experience", "References (if provided)"] },
        { type: "h3", text: "SaaS and software data" },
        { type: "ul", items: ["Username", "Login credentials", "Activity within applications", "Usage statistics", "Log files"] },
      ],
    },
    {
      heading: "3. Why do we process personal data?",
      blocks: [
        { type: "p", text: "DCF processes personal data solely for legitimate purposes." },
        { type: "h3", text: "Performance of contracts" },
        { type: "ul", items: ["Delivering services", "Carrying out assignments", "Customer support", "Invoicing"] },
        { type: "h3", text: "Communication" },
        { type: "ul", items: ["Answering questions", "Sending quotes", "Sending information", "Client contact"] },
        { type: "h3", text: "Marketing" },
        { type: "ul", items: ["Newsletters", "Events", "Product information", "Service updates"] },
        { type: "h3", text: "Recruitment" },
        { type: "ul", items: ["Assessing candidates", "Maintaining contact with candidates", "Recruitment and selection activities"] },
        { type: "h3", text: "Software and SaaS" },
        { type: "ul", items: ["User management", "Authentication", "Security", "Usage analysis"] },
        { type: "h3", text: "Legal obligations" },
        { type: "ul", items: ["Tax legislation", "Accounting obligations", "Legal requests from government authorities"] },
      ],
    },
    {
      heading: "4. On what legal basis do we process personal data?",
      blocks: [
        { type: "p", text: "DCF processes personal data on the basis of one or more of the following legal grounds:" },
        { type: "ul", items: ["Performance of a contract;", "Legal obligation;", "Consent;", "Legitimate interest."] },
        { type: "p", text: "Legitimate interest includes, among other things:" },
        { type: "ul", items: ["Marketing activities towards business contacts;", "Improvement of services;", "Security of systems;", "Fraud prevention;", "Business operations and administration."] },
      ],
    },
    {
      heading: "5. Newsletters and marketing",
      blocks: [
        { type: "p", text: "When you subscribe to our newsletter, we use your data solely to send you information about:" },
        { type: "ul", items: ["Innovations;", "Product developments;", "Services;", "Events;", "Articles;", "News."] },
        { type: "p", text: "You can unsubscribe at any time via the unsubscribe link at the bottom of every newsletter." },
      ],
    },
    {
      heading: "6. Contact form",
      blocks: [
        { type: "p", text: "When you complete a contact form, we use your data solely to get in touch with you and handle your request." },
        { type: "p", text: "This data is not sold to third parties." },
      ],
    },
    {
      heading: "7. Appointment scheduling",
      blocks: [
        { type: "p", text: "DCF may use external scheduling software such as Calendly or Cal.com." },
        { type: "p", text: "When you book an appointment, personal data such as the following may be processed:" },
        { type: "ul", items: ["Name;", "Email address;", "Organisation;", "Phone number;", "Appointment information."] },
        { type: "p", text: "This processing takes place on the basis of your request to make an appointment." },
      ],
    },
    {
      heading: "8. AI applications",
      blocks: [
        { type: "p", text: "DCF uses Artificial Intelligence (AI) within its services and software solutions." },
        { type: "p", text: "AI systems may process data to:" },
        { type: "ul", items: ["Generate responses;", "Carry out analyses;", "Automate processes;", "Improve user experiences."] },
        { type: "p", text: "DCF aims to deploy AI systems carefully, transparently and responsibly." },
        { type: "p", text: "Although we take appropriate measures, AI outcomes may be incorrect, incomplete or outdated. Users remain responsible for verifying AI outcomes." },
      ],
    },
    {
      heading: "9. Cookies",
      blocks: [
        { type: "p", text: "Our website uses cookies." },
        { type: "h3", text: "Functional cookies" },
        { type: "p", text: "Necessary for the functioning of the website." },
        { type: "h3", text: "Analytical cookies" },
        { type: "p", text: "For improving the website." },
        { type: "h3", text: "Marketing cookies" },
        { type: "p", text: "For marketing and advertising purposes." },
        { type: "p", text: "Where required by law, we ask for prior consent before placing cookies. A separate Cookie Policy may contain additional information." },
      ],
    },
    {
      heading: "10. Who do we share personal data with?",
      blocks: [
        { type: "p", text: "DCF does not sell personal data." },
        { type: "p", text: "Data may only be shared with:" },
        { type: "ul", items: ["Hosting providers;", "Cloud suppliers;", "Email providers;", "Newsletter software;", "CRM systems;", "Payment service providers;", "IT suppliers;", "Accounting software;", "Legal advisers;", "Government authorities where legally required."] },
        { type: "p", text: "We enter into data processing agreements where required." },
      ],
    },
    {
      heading: "11. International transfers",
      blocks: [
        { type: "p", text: "Some suppliers may be established outside the European Economic Area (EEA)." },
        { type: "p", text: "When personal data is processed outside the EEA, we ensure appropriate safeguards in accordance with the GDPR, including:" },
        { type: "ul", items: ["Standard Contractual Clauses (SCCs);", "Adequacy decisions;", "Other legally permitted mechanisms."] },
      ],
    },
    {
      heading: "12. Security",
      blocks: [
        { type: "p", text: "DCF takes appropriate technical and organisational measures to protect personal data against:" },
        { type: "ul", items: ["Loss;", "Theft;", "Unauthorised access;", "Misuse;", "Unlawful processing."] },
        { type: "p", text: "Examples of measures:" },
        { type: "ul", items: ["SSL/TLS encryption;", "Access control;", "Two-factor authentication where possible;", "Logging;", "Back-ups;", "Antivirus and security software."] },
      ],
    },
    {
      heading: "13. Retention periods",
      blocks: [
        { type: "p", text: "DCF does not retain personal data longer than necessary. Indicative retention periods:" },
        { type: "table", head: ["Data type", "Retention period"], rows: [
          ["Contact requests", "2 years"],
          ["Quotes", "7 years"],
          ["Invoices", "7 years"],
          ["Client files", "7 years after end of agreement"],
          ["Newsletter data", "Until unsubscription"],
          ["Application data", "Maximum 4 weeks after completion of procedure, unless consent is given for 1 year"],
        ]},
        { type: "p", text: "Where legal obligations prescribe longer retention periods, those statutory periods apply." },
      ],
    },
    {
      heading: "14. Your rights",
      blocks: [
        { type: "p", text: "You have the right to:" },
        { type: "ul", items: ["Access your data;", "Correct your data;", "Have your data deleted;", "Restrict processing;", "Object to processing;", "Exercise your right to data portability;", "Withdraw your consent."] },
        { type: "p", text: "Requests can be submitted via: info@digitalconceptsfactory.nl" },
        { type: "p", text: "DCF may request additional information to verify your identity before processing a request." },
      ],
    },
    {
      heading: "15. Complaints",
      blocks: [
        { type: "p", text: "If you are not satisfied with the processing of your personal data, you can contact us." },
        { type: "p", text: "You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens), PO Box 93374, 2509 AJ The Hague, www.autoriteitpersoonsgegevens.nl." },
      ],
    },
    {
      heading: "16. Changes",
      blocks: [
        { type: "p", text: "DCF reserves the right to amend this Privacy Policy. The most current version will be published on the DCF website." },
        { type: "p", text: "We recommend that you consult this Privacy Policy regularly." },
      ],
    },
    {
      heading: "17. Contact",
      blocks: [
        { type: "p", text: "For questions about this Privacy Policy, please contact:" },
        { type: "ul", items: ["Digital Concepts Factory B.V.", "Email: info@digitalconceptsfactory.nl", "Phone: +31 (0)10 786 56 84", "Website: www.digitalconceptsfactory.nl"] },
      ],
    },
  ],
};

export const privacyDocs: BilingualLegalDoc = { nl: privacyDocNl, en: privacyDocEn };
/** @deprecated use privacyDocs */
export const privacyDoc = privacyDocNl;

// ---------------------------------------------------------------------------
// Disclaimer
// ---------------------------------------------------------------------------

const disclaimerDocNl: LegalDoc = {
  title: "Disclaimer",
  version: VERSION_NL,
  intro: "Door deze website te bezoeken en/of de op deze website aangeboden informatie te gebruiken, verklaart u zich akkoord met de onderstaande voorwaarden.",
  sections: [
    {
      heading: "1. Algemeen",
      blocks: [
        { type: "p", text: "Deze website wordt beheerd door Digital Concepts Factory B.V. (hierna: \"DCF\")." },
        { type: "p", text: "DCF spant zich in om de inhoud van deze website zorgvuldig samen te stellen en actueel te houden. Ondanks deze zorgvuldigheid kunnen onjuistheden, onvolledigheden of verouderde informatie voorkomen." },
        { type: "p", text: "Aan de inhoud van deze website kunnen geen rechten worden ontleend." },
      ],
    },
    {
      heading: "2. Informatief karakter",
      blocks: [
        { type: "p", text: "De informatie op deze website is uitsluitend bedoeld voor algemene informatiedoeleinden." },
        { type: "p", text: "De informatie vormt nadrukkelijk geen:" },
        { type: "ul", items: ["juridisch advies;", "financieel advies;", "fiscaal advies;", "HR-advies;", "aanbestedingsadvies;", "inkoopadvies;", "arbeidsrechtelijk advies;", "medisch advies;", "bedrijfskundig advies."] },
        { type: "p", text: "Bezoekers dienen zich voor specifieke situaties altijd te laten adviseren door een gekwalificeerde deskundige." },
      ],
    },
    {
      heading: "3. Resultaten en besparingen",
      blocks: [
        { type: "p", text: "Op deze website kunnen voorbeelden, berekeningen, praktijkvoorbeelden, prognoses, onderzoeken, statistieken, besparingen, rendementen en andere resultaten worden genoemd. Deze informatie is uitsluitend bedoeld ter illustratie." },
        { type: "p", text: "DCF garandeert niet dat:" },
        { type: "ul", items: ["dezelfde resultaten worden behaald;", "genoemde besparingen daadwerkelijk worden gerealiseerd;", "personeelsverloop wordt verminderd;", "ziekteverzuim wordt verlaagd;", "kostenbesparingen worden gerealiseerd;", "aanbestedingskosten worden verminderd;", "contractmanagementresultaten verbeteren;", "marketingresultaten worden behaald."] },
        { type: "p", text: "Werkelijke resultaten zijn afhankelijk van diverse factoren, waaronder organisatiegrootte, marktomstandigheden, implementatie, gebruikersgedrag en overige omstandigheden buiten de invloedssfeer van DCF." },
      ],
    },
    {
      heading: "4. AI en digitale innovaties",
      blocks: [
        { type: "p", text: "DCF ontwikkelt en gebruikt Artificial Intelligence (AI), algoritmen, automatiseringen en andere digitale innovaties binnen haar dienstverlening en softwareproducten." },
        { type: "p", text: "Hoewel deze technologieën zorgvuldig worden ontwikkeld en getest, kunnen uitkomsten:" },
        { type: "ul", items: ["onjuist zijn;", "onvolledig zijn;", "verouderd zijn;", "niet aansluiten bij de specifieke situatie van de gebruiker."] },
        { type: "p", text: "DCF geeft geen garantie dat AI-uitkomsten foutloos, volledig of geschikt zijn voor een specifiek doel." },
        { type: "p", text: "Gebruikers blijven altijd zelf verantwoordelijk voor het beoordelen, controleren en verifiëren van door AI of software gegenereerde informatie." },
      ],
    },
    {
      heading: "5. Beschikbaarheid van de website",
      blocks: [
        { type: "p", text: "DCF streeft naar een optimale beschikbaarheid van de website." },
        { type: "p", text: "DCF garandeert echter niet dat de website:" },
        { type: "ul", items: ["zonder onderbreking beschikbaar is;", "foutloos functioneert;", "vrij is van virussen of andere schadelijke componenten;", "altijd toegankelijk blijft."] },
        { type: "p", text: "DCF behoudt zich het recht voor de website of onderdelen daarvan op ieder moment te wijzigen, te beperken of tijdelijk buiten gebruik te stellen." },
      ],
    },
    {
      heading: "6. Externe links",
      blocks: [
        { type: "p", text: "Deze website kan links bevatten naar websites van derden." },
        { type: "p", text: "DCF heeft geen zeggenschap over de inhoud, beschikbaarheid, veiligheid of privacypraktijken van deze externe websites." },
        { type: "p", text: "DCF aanvaardt geen aansprakelijkheid voor:" },
        { type: "ul", items: ["de inhoud van externe websites;", "de juistheid van informatie op externe websites;", "producten of diensten van derden;", "schade die voortvloeit uit het gebruik van externe websites."] },
        { type: "p", text: "Het bezoeken van externe websites gebeurt volledig op eigen risico." },
      ],
    },
    {
      heading: "7. Intellectuele eigendomsrechten",
      blocks: [
        { type: "p", text: "Alle intellectuele eigendomsrechten met betrekking tot deze website berusten bij DCF of haar licentiegevers." },
        { type: "p", text: "Hieronder vallen onder meer:" },
        { type: "ul", items: ["teksten;", "logo's;", "handelsnamen;", "beeldmateriaal;", "ontwerpen;", "software;", "concepten;", "databases;", "broncodes;", "documentatie;", "modellen;", "AI-oplossingen;", "digitale innovaties."] },
        { type: "p", text: "Zonder voorafgaande schriftelijke toestemming van DCF is het niet toegestaan om materiaal van deze website geheel of gedeeltelijk te:" },
        { type: "ul", items: ["kopiëren;", "publiceren;", "verspreiden;", "bewerken;", "verveelvoudigen;", "exploiteren."] },
        { type: "p", text: "Dit geldt met uitzondering van situaties waarin dit wettelijk is toegestaan." },
      ],
    },
    {
      heading: "8. Aansprakelijkheid",
      blocks: [
        { type: "p", text: "DCF is niet aansprakelijk voor enige directe of indirecte schade die voortvloeit uit:" },
        { type: "ul", items: ["het gebruik van deze website;", "het gebruik van informatie op deze website;", "het niet beschikbaar zijn van de website;", "onjuiste of onvolledige informatie;", "het gebruik van software, tools of digitale innovaties van DCF;", "beslissingen die worden genomen op basis van informatie van deze website."] },
        { type: "p", text: "Voor zover wettelijk toegestaan wordt iedere aansprakelijkheid uitgesloten." },
        { type: "p", text: "Indien aansprakelijkheid toch wordt vastgesteld, is deze beperkt tot het bedrag dat in het betreffende geval door de aansprakelijkheidsverzekering van DCF wordt uitgekeerd." },
      ],
    },
    {
      heading: "9. Geen garantie op dienstverlening",
      blocks: [
        { type: "p", text: "Informatie op deze website vormt geen aanbod of overeenkomst." },
        { type: "p", text: "Een overeenkomst met DCF komt uitsluitend tot stand nadat:" },
        { type: "ul", items: ["partijen schriftelijk overeenstemming hebben bereikt; of", "een overeenkomst door beide partijen is ondertekend."] },
        { type: "p", text: "Aan beschrijvingen van producten, innovaties, software, functionaliteiten of toekomstige ontwikkelingen kunnen geen rechten worden ontleend." },
        { type: "p", text: "DCF behoudt zich het recht voor producten, diensten en functionaliteiten op ieder moment te wijzigen of niet beschikbaar te stellen." },
      ],
    },
    {
      heading: "10. Privacy",
      blocks: [
        { type: "p", text: "Op het gebruik van persoonsgegevens is de Privacyverklaring van Digital Concepts Factory B.V. van toepassing. Wij adviseren bezoekers deze Privacyverklaring zorgvuldig door te lezen." },
      ],
    },
    {
      heading: "11. Toepasselijk recht",
      blocks: [
        { type: "p", text: "Op deze disclaimer is uitsluitend Nederlands recht van toepassing." },
        { type: "p", text: "Geschillen die voortvloeien uit of verband houden met deze website worden voorgelegd aan de bevoegde rechter in Nederland." },
      ],
    },
    {
      heading: "12. Wijzigingen",
      blocks: [
        { type: "p", text: "DCF behoudt zich het recht voor deze disclaimer op ieder moment te wijzigen. De meest actuele versie wordt gepubliceerd op deze website." },
      ],
    },
    {
      heading: "Contact",
      blocks: [
        { type: "p", text: "Heeft u vragen over deze disclaimer?" },
        { type: "ul", items: ["Digital Concepts Factory B.V.", "E-mail: info@digitalconceptsfactory.nl", "Website: www.digitalconceptsfactory.nl"] },
      ],
    },
  ],
};

const disclaimerDocEn: LegalDoc = {
  title: "Disclaimer",
  version: VERSION_EN,
  intro: "By visiting this website and/or using the information offered on this website, you agree to the following terms.",
  sections: [
    {
      heading: "1. General",
      blocks: [
        { type: "p", text: "This website is managed by Digital Concepts Factory B.V. (hereinafter: \"DCF\")." },
        { type: "p", text: "DCF makes every effort to compile the content of this website carefully and to keep it up to date. Despite this care, inaccuracies, omissions or outdated information may occur." },
        { type: "p", text: "No rights can be derived from the content of this website." },
      ],
    },
    {
      heading: "2. Informational nature",
      blocks: [
        { type: "p", text: "The information on this website is intended solely for general informational purposes." },
        { type: "p", text: "The information does not constitute:" },
        { type: "ul", items: ["legal advice;", "financial advice;", "tax advice;", "HR advice;", "procurement advice;", "purchasing advice;", "employment law advice;", "medical advice;", "business advice."] },
        { type: "p", text: "Visitors should seek advice from an appropriately qualified professional for their specific circumstances." },
      ],
    },
    {
      heading: "3. Results and savings",
      blocks: [
        { type: "p", text: "This website may refer to examples, calculations, case studies, forecasts, research, statistics, savings, returns and other results. This information is intended solely for illustrative purposes." },
        { type: "p", text: "DCF does not guarantee that:" },
        { type: "ul", items: ["the same results will be achieved;", "stated savings will actually be realised;", "staff turnover will be reduced;", "Sick leave will be lowered;", "cost savings will be achieved;", "procurement costs will be reduced;", "contract management results will improve;", "marketing results will be achieved."] },
        { type: "p", text: "Actual results depend on various factors, including organisation size, market conditions, implementation, user behaviour and other circumstances beyond DCF's control." },
      ],
    },
    {
      heading: "4. AI and digital innovations",
      blocks: [
        { type: "p", text: "DCF develops and uses Artificial Intelligence (AI), algorithms, automation and other digital innovations within its services and software products." },
        { type: "p", text: "Although these technologies are carefully developed and tested, outcomes may:" },
        { type: "ul", items: ["be incorrect;", "be incomplete;", "be outdated;", "not match the specific situation of the user."] },
        { type: "p", text: "DCF gives no guarantee that AI outcomes are error-free, complete or suitable for a specific purpose." },
        { type: "p", text: "Users remain personally responsible for assessing, checking and verifying information generated by AI or software." },
      ],
    },
    {
      heading: "5. Website availability",
      blocks: [
        { type: "p", text: "DCF aims for optimal availability of the website." },
        { type: "p", text: "DCF does not, however, guarantee that the website:" },
        { type: "ul", items: ["is available without interruption;", "functions error-free;", "is free from viruses or other harmful components;", "remains accessible at all times."] },
        { type: "p", text: "DCF reserves the right to amend, restrict or temporarily take the website or parts thereof offline at any time." },
      ],
    },
    {
      heading: "6. External links",
      blocks: [
        { type: "p", text: "This website may contain links to third-party websites." },
        { type: "p", text: "DCF has no control over the content, availability, security or privacy practices of these external websites." },
        { type: "p", text: "DCF accepts no liability for:" },
        { type: "ul", items: ["the content of external websites;", "the accuracy of information on external websites;", "products or services of third parties;", "damage arising from the use of external websites."] },
        { type: "p", text: "Use of external websites is at the visitor's own risk." },
      ],
    },
    {
      heading: "7. Intellectual property rights",
      blocks: [
        { type: "p", text: "All intellectual property rights relating to this website vest in DCF or its licensors." },
        { type: "p", text: "These include, among other things:" },
        { type: "ul", items: ["texts;", "logos;", "trade names;", "images;", "designs;", "software;", "concepts;", "databases;", "source code;", "documentation;", "models;", "AI solutions;", "digital innovations."] },
        { type: "p", text: "Without prior written permission from DCF, it is not permitted to copy, publish, distribute, modify, reproduce or exploit material from this website, in whole or in part." },
        { type: "p", text: "This applies except where permitted by law." },
      ],
    },
    {
      heading: "8. Liability",
      blocks: [
        { type: "p", text: "DCF is not liable for any direct or indirect damage arising from:" },
        { type: "ul", items: ["use of this website;", "use of information on this website;", "unavailability of the website;", "incorrect or incomplete information;", "use of DCF's software, tools or digital innovations;", "decisions made on the basis of information from this website."] },
        { type: "p", text: "To the extent permitted by law, all liability is excluded." },
        { type: "p", text: "If liability is nonetheless established, it is limited to the amount paid out in the relevant case by DCF's liability insurance." },
      ],
    },
    {
      heading: "9. No guarantee of services",
      blocks: [
        { type: "p", text: "Information on this website does not constitute an offer or agreement." },
        { type: "p", text: "An agreement with DCF is only formed after:" },
        { type: "ul", items: ["the parties have reached written agreement; or", "an agreement has been signed by both parties."] },
        { type: "p", text: "No rights can be derived from descriptions of products, innovations, software, functionalities or future developments." },
        { type: "p", text: "DCF reserves the right to modify or discontinue products, services and functionalities at any time." },
      ],
    },
    {
      heading: "10. Privacy",
      blocks: [
        { type: "p", text: "The Privacy Policy of Digital Concepts Factory B.V. applies to the use of personal data. We advise visitors to read this Privacy Policy carefully." },
      ],
    },
    {
      heading: "11. Applicable law",
      blocks: [
        { type: "p", text: "This disclaimer is governed exclusively by Dutch law." },
        { type: "p", text: "Disputes arising from or related to this website are submitted to the competent court in the Netherlands." },
      ],
    },
    {
      heading: "12. Changes",
      blocks: [
        { type: "p", text: "DCF reserves the right to amend this disclaimer at any time. The most current version will be published on this website." },
      ],
    },
    {
      heading: "Contact",
      blocks: [
        { type: "p", text: "Do you have questions about this disclaimer?" },
        { type: "ul", items: ["Digital Concepts Factory B.V.", "Email: info@digitalconceptsfactory.nl", "Website: www.digitalconceptsfactory.nl"] },
      ],
    },
  ],
};

export const disclaimerDocs: BilingualLegalDoc = { nl: disclaimerDocNl, en: disclaimerDocEn };
/** @deprecated use disclaimerDocs */
export const disclaimerDoc = disclaimerDocNl;

// ---------------------------------------------------------------------------
// Algemene voorwaarden / General Terms and Conditions
// ---------------------------------------------------------------------------

const voorwaardenDocNl: LegalDoc = {
  title: "Algemene voorwaarden",
  version: VERSION_NL,
  sections: [
    {
      heading: "Artikel 1 - Definities",
      blocks: [
        { type: "p", text: "In deze Algemene Voorwaarden wordt verstaan onder:" },
        { type: "ul", items: [
          "DCF: Digital Concepts Factory B.V., gevestigd te Rotterdam en ingeschreven bij de Kamer van Koophandel.",
          "Opdrachtgever: iedere natuurlijke persoon of rechtspersoon die met DCF een overeenkomst sluit of wenst te sluiten.",
          "Overeenkomst: iedere overeenkomst tussen DCF en Opdrachtgever.",
          "Diensten: alle door DCF aangeboden diensten, waaronder maar niet beperkt tot consultancy, advisering, recruitment, employer branding, marketing, inkoopadvies, aanbestedingsadvies, contractmanagement, softwareontwikkeling, SaaS-oplossingen, AI-oplossingen, websites, digitale platformen, trainingen en overige digitale innovaties.",
          "Software: alle software, applicaties, SaaS-oplossingen, AI-toepassingen, websites, dashboards, platformen en andere digitale producten die door DCF worden ontwikkeld, geleverd of beheerd.",
        ]},
      ],
    },
    {
      heading: "Artikel 2 - Toepasselijkheid",
      blocks: [
        { type: "ul", items: [
          "2.1 Deze Algemene Voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten, werkzaamheden en leveringen van DCF.",
          "2.2 Afwijkingen zijn uitsluitend geldig indien deze schriftelijk door DCF zijn bevestigd.",
          "2.3 Eventuele algemene voorwaarden van Opdrachtgever worden uitdrukkelijk van de hand gewezen.",
          "2.4 Indien een bepaling nietig blijkt te zijn, blijven de overige bepalingen volledig van kracht.",
        ]},
      ],
    },
    {
      heading: "Artikel 3 - Offertes en aanbiedingen",
      blocks: [
        { type: "ul", items: [
          "3.1 Alle offertes van DCF zijn vrijblijvend tenzij uitdrukkelijk anders vermeld.",
          "3.2 Offertes zijn geldig gedurende 30 dagen.",
          "3.3 Kennelijke fouten of vergissingen in offertes binden DCF niet.",
          "3.4 DCF is gerechtigd haar tarieven tussentijds aan te passen indien sprake is van gewijzigde omstandigheden.",
        ]},
      ],
    },
    {
      heading: "Artikel 4 - Totstandkoming overeenkomst",
      blocks: [
        { type: "p", text: "4.1 Een overeenkomst komt tot stand nadat:" },
        { type: "ul", items: ["de offerte schriftelijk is geaccepteerd;", "de overeenkomst digitaal is ondertekend;", "of DCF feitelijk met de werkzaamheden is gestart."] },
        { type: "p", text: "4.2 DCF mag opdrachten weigeren zonder opgaaf van redenen." },
      ],
    },
    {
      heading: "Artikel 5 - Uitvoering van de overeenkomst",
      blocks: [
        { type: "ul", items: [
          "5.1 DCF zal de overeenkomst naar beste inzicht en vermogen uitvoeren.",
          "5.2 Op DCF rust uitsluitend een inspanningsverplichting, tenzij schriftelijk uitdrukkelijk een resultaatsverplichting is overeengekomen.",
          "5.3 Door DCF genoemde resultaten, besparingen, rendementen, conversies, kostenreducties, verzuimreducties of andere prognoses gelden uitsluitend als indicaties.",
          "5.4 DCF garandeert niet dat specifieke commerciële, financiële of operationele resultaten worden gerealiseerd.",
        ]},
      ],
    },
    { heading: "Artikel 6 - Medewerking opdrachtgever", blocks: [{ type: "ul", items: ["6.1 Opdrachtgever verstrekt tijdig alle benodigde gegevens.", "6.2 Vertraging als gevolg van ontbrekende informatie komt voor rekening van Opdrachtgever.", "6.3 DCF is niet aansprakelijk voor schade als gevolg van onjuiste of onvolledige informatie van Opdrachtgever."] }] },
    { heading: "Artikel 7 - Recruitment, HR en Employer Branding", blocks: [{ type: "ul", items: ["7.1 DCF verricht werkzaamheden op basis van een inspanningsverplichting.", "7.2 DCF garandeert niet dat kandidaten worden aangenomen.", "7.3 DCF garandeert niet dat medewerkers in dienst blijven.", "7.4 DCF is niet aansprakelijk voor gedragingen, prestaties of uitlatingen van kandidaten.", "7.5 Eventuele vervangingsgaranties gelden uitsluitend indien schriftelijk overeengekomen."] }] },
    { heading: "Artikel 8 - Marketingdiensten", blocks: [{ type: "ul", items: ["8.1 DCF garandeert geen specifiek aantal leads, sollicitanten, klanten, omzetgroei of conversies.", "8.2 Resultaten van campagnes zijn mede afhankelijk van marktomstandigheden, concurrentie, doelgroepgedrag en factoren buiten de invloedssfeer van DCF.", "8.3 DCF mag gebruik maken van derden voor advertentieplaatsingen, media-inkoop en campagnebeheer."] }] },
    { heading: "Artikel 9 - Inkoop-, aanbestedings- en contractmanagementdiensten", blocks: [{ type: "ul", items: ["9.1 DCF ondersteunt opdrachtgevers bij inkoop- en aanbestedingstrajecten.", "9.2 DCF verstrekt geen juridisch advies tenzij uitdrukkelijk schriftelijk overeengekomen.", "9.3 Opdrachtgever blijft zelf verantwoordelijk voor besluiten omtrent aanbestedingen, contracten en leveranciersselecties.", "9.4 DCF is niet aansprakelijk voor aanbestedingsgeschillen, bezwaarprocedures of gerechtelijke procedures."] }] },
    { heading: "Artikel 10 - Software en SaaS", blocks: [{ type: "ul", items: ["10.1 DCF verleent uitsluitend een gebruiksrecht op software.", "10.2 Het intellectueel eigendom blijft volledig eigendom van DCF.", "10.3 DCF garandeert niet dat software foutloos of ononderbroken functioneert.", "10.4 Onderhoudswerkzaamheden mogen zonder voorafgaande aankondiging worden uitgevoerd.", "10.5 DCF mag functionaliteiten wijzigen, uitbreiden of verwijderen.", "10.6 Het is niet toegestaan software te kopiëren, reverse engineeren of te decompileren."] }] },
    { heading: "Artikel 11 - AI-oplossingen", blocks: [{ type: "ul", items: ["11.1 AI-oplossingen van DCF genereren resultaten op basis van algoritmen en beschikbare data.", "11.2 DCF garandeert niet dat AI-uitkomsten volledig juist, actueel of foutloos zijn.", "11.3 Opdrachtgever blijft verantwoordelijk voor controle van AI-gegenereerde output.", "11.4 DCF is niet aansprakelijk voor beslissingen die worden genomen op basis van AI-output."] }] },
    { heading: "Artikel 12 - Websites en digitale platformen", blocks: [{ type: "ul", items: ["12.1 DCF streeft naar optimale beschikbaarheid van websites en platformen.", "12.2 Tijdelijke storingen geven geen recht op schadevergoeding.", "12.3 Opdrachtgever is verantwoordelijk voor aangeleverde content.", "12.4 Opdrachtgever vrijwaart DCF voor claims van derden met betrekking tot aangeleverde content."] }] },
    { heading: "Artikel 13 - Abonnementen", blocks: [{ type: "ul", items: ["13.1 Abonnementen worden aangegaan voor de overeengekomen periode.", "13.2 Abonnementen worden automatisch verlengd tenzij schriftelijk opgezegd.", "13.3 Opzegging dient uiterlijk één maand voor afloop plaats te vinden.", "13.4 Reeds betaalde bedragen worden niet gerestitueerd."] }] },
    { heading: "Artikel 14 - Tarieven en betalingen", blocks: [{ type: "ul", items: ["14.1 Alle prijzen zijn exclusief BTW tenzij anders vermeld.", "14.2 Facturen dienen binnen 14 dagen te worden voldaan.", "14.3 Bij te late betaling is Opdrachtgever van rechtswege in verzuim.", "14.4 Vanaf de vervaldatum is wettelijke handelsrente verschuldigd.", "14.5 Alle incassokosten komen voor rekening van Opdrachtgever."] }] },
    {
      heading: "Artikel 15 - Intellectuele eigendomsrechten",
      blocks: [
        { type: "p", text: "15.1 Alle intellectuele eigendomsrechten blijven eigendom van DCF." },
        { type: "p", text: "15.2 Hieronder vallen onder meer:" },
        { type: "ul", items: ["software;", "websites;", "AI-modellen;", "broncode;", "ontwerpen;", "rapportages;", "methodieken;", "databases;", "documentatie;", "concepten;", "campagnes."] },
        { type: "p", text: "15.3 Zonder schriftelijke toestemming mogen deze niet worden gekopieerd, verspreid of aangepast." },
      ],
    },
    { heading: "Artikel 16 - Geheimhouding", blocks: [{ type: "ul", items: ["16.1 Partijen behandelen vertrouwelijke informatie strikt vertrouwelijk.", "16.2 Deze verplichting blijft ook na beëindiging van de overeenkomst bestaan."] }] },
    { heading: "Artikel 17 - Privacy en AVG", blocks: [{ type: "ul", items: ["17.1 DCF verwerkt persoonsgegevens conform de AVG.", "17.2 Indien noodzakelijk sluiten partijen een verwerkersovereenkomst.", "17.3 Opdrachtgever garandeert dat verstrekte persoonsgegevens rechtmatig zijn verkregen.", "17.4 DCF is niet aansprakelijk voor overtredingen van privacywetgeving door Opdrachtgever."] }] },
    {
      heading: "Artikel 18 - Aansprakelijkheid",
      blocks: [
        { type: "ul", items: ["18.1 Iedere aansprakelijkheid van DCF is beperkt tot het bedrag dat door haar aansprakelijkheidsverzekering wordt uitgekeerd.", "18.2 Indien geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot maximaal het factuurbedrag van de betreffende opdracht.", "18.3 Bij duurovereenkomsten geldt een maximum van de in de laatste twaalf maanden gefactureerde bedragen."] },
        { type: "p", text: "18.4 DCF is nooit aansprakelijk voor:" },
        { type: "ul", items: ["gevolgschade;", "omzetverlies;", "winstderving;", "reputatieschade;", "gemiste besparingen;", "gemiste kansen;", "indirecte schade;", "dataverlies."] },
        { type: "p", text: "18.5 Iedere aanspraak vervalt twaalf maanden nadat de schade bekend is geworden." },
      ],
    },
    {
      heading: "Artikel 19 - Overmacht",
      blocks: [
        { type: "p", text: "19.1 DCF is niet aansprakelijk voor tekortkomingen als gevolg van overmacht." },
        { type: "p", text: "19.2 Onder overmacht wordt onder meer verstaan:" },
        { type: "ul", items: ["internetstoringen;", "cyberaanvallen;", "stroomuitval;", "ziekte;", "pandemieën;", "overheidsmaatregelen;", "stakingen;", "storingen bij leveranciers."] },
        { type: "p", text: "19.3 Tijdens overmacht worden verplichtingen opgeschort." },
      ],
    },
    {
      heading: "Artikel 20 - Opschorting en beëindiging",
      blocks: [
        { type: "p", text: "20.1 DCF mag werkzaamheden opschorten bij niet-betaling." },
        { type: "p", text: "20.2 DCF mag de overeenkomst direct beëindigen indien:" },
        { type: "ul", items: ["Opdrachtgever tekortschiet;", "faillissement wordt aangevraagd;", "surseance van betaling wordt verleend;", "bedrijfsactiviteiten worden beëindigd."] },
        { type: "p", text: "20.3 Reeds uitgevoerde werkzaamheden blijven verschuldigd." },
      ],
    },
    { heading: "Artikel 21 - Vrijwaring", blocks: [{ type: "ul", items: ["21.1 Opdrachtgever vrijwaart DCF tegen aanspraken van derden die voortvloeien uit het gebruik van de geleverde diensten, software, websites, AI-oplossingen of content.", "21.2 Opdrachtgever vergoedt alle schade en kosten die hieruit voortvloeien."] }] },
    { heading: "Artikel 22 - Toepasselijk recht", blocks: [{ type: "ul", items: ["22.1 Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing.", "22.2 Het Weens Koopverdrag is uitgesloten."] }] },
    { heading: "Artikel 23 - Geschillen", blocks: [{ type: "ul", items: ["23.1 Geschillen zullen in eerste instantie in onderling overleg worden opgelost.", "23.2 Indien dit niet mogelijk blijkt, worden geschillen exclusief voorgelegd aan de bevoegde rechter van de Rechtbank Rotterdam."] }] },
    { heading: "Artikel 24 - Slotbepalingen", blocks: [{ type: "ul", items: ["24.1 DCF mag deze Algemene Voorwaarden wijzigen.", "24.2 De meest recente versie wordt gepubliceerd op de website van DCF.", "24.3 Opdrachtgever wordt geacht met wijzigingen akkoord te zijn indien hij de dienstverlening blijft afnemen na bekendmaking van de gewijzigde voorwaarden."] }] },
  ],
};

const voorwaardenDocEn: LegalDoc = {
  title: "General Terms and Conditions",
  version: VERSION_EN,
  sections: [
    {
      heading: "Article 1 - Definitions",
      blocks: [
        { type: "p", text: "In these General Terms and Conditions, the following definitions apply:" },
        { type: "ul", items: [
          "DCF: Digital Concepts Factory B.V., established in Rotterdam and registered with the Chamber of Commerce.",
          "Client: any natural person or legal entity that enters into or wishes to enter into an agreement with DCF.",
          "Agreement: any agreement between DCF and the Client.",
          "Services: all services offered by DCF, including but not limited to consultancy, advisory, recruitment, employer branding, marketing, procurement advice, tendering advice, contract management, software development, SaaS solutions, AI solutions, websites, digital platforms, training and other digital innovations.",
          "Software: all software, applications, SaaS solutions, AI applications, websites, dashboards, platforms and other digital products developed, delivered or managed by DCF.",
        ]},
      ],
    },
    {
      heading: "Article 2 - Applicability",
      blocks: [
        { type: "ul", items: [
          "2.1 These General Terms and Conditions apply to all quotes, offers, agreements, work and deliveries of DCF.",
          "2.2 Deviations are only valid if confirmed in writing by DCF.",
          "2.3 Any general terms and conditions of the Client are expressly rejected.",
          "2.4 If any provision proves to be void, the remaining provisions remain fully in force.",
        ]},
      ],
    },
    {
      heading: "Article 3 - Quotes and offers",
      blocks: [
        { type: "ul", items: [
          "3.1 All quotations issued by DCF are non-binding unless expressly stated otherwise.",
          "3.2 Quotes are valid for 30 days.",
          "3.3 Obvious errors or mistakes in quotes do not bind DCF.",
          "3.4 DCF is entitled to adjust its rates during the term of an agreement if circumstances change.",
        ]},
      ],
    },
    {
      heading: "Article 4 - Formation of agreement",
      blocks: [
        { type: "p", text: "4.1 An agreement is formed after:" },
        { type: "ul", items: ["the quote has been accepted in writing;", "the agreement has been signed digitally;", "or DCF has actually started the work."] },
        { type: "p", text: "4.2 DCF may refuse assignments without stating reasons." },
      ],
    },
    {
      heading: "Article 5 - Performance of the agreement",
      blocks: [
        { type: "ul", items: [
          "5.1 DCF will perform the agreement to the best of its ability and knowledge.",
          "5.2 DCF is subject to a best-efforts obligation only, unless an obligation to achieve a specific result has been expressly agreed in writing.",
          "5.3 Results, savings, returns, conversions, cost reductions, sick leave reductions or other forecasts mentioned by DCF are indicative only.",
          "5.4 DCF does not guarantee that specific commercial, financial or operational results will be achieved.",
        ]},
      ],
    },
    { heading: "Article 6 - Client cooperation", blocks: [{ type: "ul", items: ["6.1 The Client provides all necessary information in a timely manner.", "6.2 Delays caused by missing information are for the Client's account.", "6.3 DCF is not liable for damage resulting from incorrect or incomplete information provided by the Client."] }] },
    { heading: "Article 7 - Recruitment, HR and Employer Branding", blocks: [{ type: "ul", items: ["7.1 DCF carries out work on a best-efforts basis.", "7.2 DCF does not guarantee that candidates will be hired.", "7.3 DCF does not guarantee that employees will remain in employment.", "7.4 DCF is not liable for the conduct, performance or statements of candidates.", "7.5 Any replacement guarantees apply only if agreed in writing."] }] },
    { heading: "Article 8 - Marketing services", blocks: [{ type: "ul", items: ["8.1 DCF does not guarantee a specific number of leads, applicants, clients, revenue growth or conversions.", "8.2 Campaign results are partly dependent on market conditions, competition, audience behaviour and factors beyond DCF's control.", "8.3 DCF may use third parties for ad placements, media buying and campaign management."] }] },
    { heading: "Article 9 - Procurement, tendering and contract management services", blocks: [{ type: "ul", items: ["9.1 DCF supports clients in procurement and tendering processes.", "9.2 DCF does not provide legal advice unless expressly agreed in writing.", "9.3 The Client remains solely responsible for decisions regarding tenders, contracts and supplier selections.", "9.4 DCF is not liable for tender disputes, challenge procedures or legal proceedings."] }] },
    { heading: "Article 10 - Software and SaaS", blocks: [{ type: "ul", items: ["10.1 DCF grants the Client a right to use the software only.", "10.2 Intellectual property remains entirely owned by DCF.", "10.3 DCF does not guarantee that software will function without errors or interruption.", "10.4 Maintenance work may be carried out without prior notice.", "10.5 DCF may modify, extend or remove functionalities.", "10.6 It is not permitted to copy, reverse engineer or decompile software."] }] },
    { heading: "Article 11 - AI solutions", blocks: [{ type: "ul", items: ["11.1 DCF's AI solutions generate results based on algorithms and available data.", "11.2 DCF does not guarantee that AI outcomes are completely accurate, current or error-free.", "11.3 The Client remains responsible for checking AI-generated output.", "11.4 DCF is not liable for decisions made on the basis of AI output."] }] },
    { heading: "Article 12 - Websites and digital platforms", blocks: [{ type: "ul", items: ["12.1 DCF aims for optimal availability of websites and platforms.", "12.2 Temporary outages do not entitle the Client to compensation.", "12.3 The Client is responsible for content it supplies.", "12.4 The Client indemnifies DCF against third-party claims relating to supplied content."] }] },
    { heading: "Article 13 - Subscriptions", blocks: [{ type: "ul", items: ["13.1 Subscriptions are entered into for the agreed period.", "13.2 Subscriptions are automatically renewed unless cancelled in writing.", "13.3 Cancellation must take place at least one month before expiry.", "13.4 Amounts already paid will not be refunded."] }] },
    { heading: "Article 14 - Rates and payments", blocks: [{ type: "ul", items: ["14.1 All prices are exclusive of VAT unless otherwise stated.", "14.2 Invoices must be paid within 14 days.", "14.3 In the event of late payment, the Client is in default by operation of law.", "14.4 Statutory commercial interest is due from the due date.", "14.5 All collection costs are for the Client's account."] }] },
    {
      heading: "Article 15 - Intellectual property rights",
      blocks: [
        { type: "p", text: "15.1 All intellectual property rights remain owned by DCF." },
        { type: "p", text: "15.2 These include, among other things:" },
        { type: "ul", items: ["software;", "websites;", "AI models;", "source code;", "designs;", "reports;", "methodologies;", "databases;", "documentation;", "concepts;", "campaigns."] },
        { type: "p", text: "15.3 Without written permission, these may not be copied, distributed or modified." },
      ],
    },
    { heading: "Article 16 - Confidentiality", blocks: [{ type: "ul", items: ["16.1 The parties treat confidential information in strict confidence.", "16.2 This obligation persists after termination of the agreement."] }] },
    { heading: "Article 17 - Privacy and GDPR", blocks: [{ type: "ul", items: ["17.1 DCF processes personal data in accordance with the GDPR.", "17.2 Where necessary, the parties enter into a data processing agreement.", "17.3 The Client warrants that any personal data it provides has been obtained lawfully.", "17.4 DCF is not liable for breaches of privacy legislation by the Client."] }] },
    {
      heading: "Article 18 - Liability",
      blocks: [
        { type: "ul", items: ["18.1 DCF's total liability is limited to the amount paid out by its liability insurance.", "18.2 If no payment is made, liability is limited to a maximum of the invoice amount of the relevant assignment.", "18.3 For ongoing agreements, the maximum is the amount invoiced over the preceding twelve months."] },
        { type: "p", text: "18.4 DCF is never liable for:" },
        { type: "ul", items: ["consequential loss;", "loss of revenue;", "loss of profit;", "reputational damage;", "missed savings;", "missed opportunities;", "indirect loss;", "data loss."] },
        { type: "p", text: "18.5 Any claim lapses twelve months after the damage became known." },
      ],
    },
    {
      heading: "Article 19 - Force majeure",
      blocks: [
        { type: "p", text: "19.1 DCF is not liable for failures resulting from force majeure." },
        { type: "p", text: "19.2 Force majeure includes, among other things:" },
        { type: "ul", items: ["internet outages;", "cyber attacks;", "power failures;", "illness;", "pandemics;", "government measures;", "strikes;", "supplier outages."] },
        { type: "p", text: "19.3 During force majeure, obligations are suspended." },
      ],
    },
    {
      heading: "Article 20 - Suspension and termination",
      blocks: [
        { type: "p", text: "20.1 DCF may suspend work in the event of non-payment." },
        { type: "p", text: "20.2 DCF may terminate the agreement immediately if:" },
        { type: "ul", items: ["the Client fails to perform;", "a bankruptcy petition is filed;", "a moratorium on payments is granted;", "business operations are discontinued."] },
        { type: "p", text: "20.3 Work already carried out remains payable." },
      ],
    },
    { heading: "Article 21 - Indemnification", blocks: [{ type: "ul", items: ["21.1 The Client indemnifies DCF against third-party claims arising from the use of the services, software, websites, AI solutions or content delivered.", "21.2 The Client compensates all damage and costs arising from such claims."] }] },
    { heading: "Article 22 - Applicable law", blocks: [{ type: "ul", items: ["22.1 All agreements are governed exclusively by Dutch law.", "22.2 The Vienna Sales Convention is excluded."] }] },
    { heading: "Article 23 - Disputes", blocks: [{ type: "ul", items: ["23.1 The parties will first attempt to resolve disputes through mutual consultation.", "23.2 If this proves impossible, disputes are submitted exclusively to the competent court of the Rotterdam District Court."] }] },
    { heading: "Article 24 - Final provisions", blocks: [{ type: "ul", items: ["24.1 DCF may amend these General Terms and Conditions.", "24.2 The most recent version will be published on the DCF website.", "24.3 The Client is deemed to have agreed to any amendments if it continues to use the services after the amended terms have been announced."] }] },
  ],
};

export const voorwaardenDocs: BilingualLegalDoc = { nl: voorwaardenDocNl, en: voorwaardenDocEn };
/** @deprecated use voorwaardenDocs */
export const voorwaardenDoc = voorwaardenDocNl;
