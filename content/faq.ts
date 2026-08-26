import type { Lang } from "@/lib/i18n/config";

/**
 * FAQ content per hoofddienst. Bilingual.
 * - Visible: gerenderd via <Faq> op elke pillar-pagina (usePick).
 * - Schema: de NL-variant voedt de FAQPage JSON-LD in elke pillar-layout,
 *   zodat zichtbare tekst en structured data één bron delen (Google-conform).
 *
 * Toon: zakelijk Nederlands, u-vorm, geen em-dashes.
 */

export type FaqItem = { q: string; a: string };
export type FaqSet = Record<Lang, FaqItem[]>;

export const talentAantrekkenFaq: FaqSet = {
  nl: [
    {
      q: "Hoe helpt Digital Concepts Factory bij het aantrekken van talent?",
      a: "Wij brengen werkgevers op het juiste moment in beeld bij de juiste kandidaten, online en offline. Met Employer Branding-campagnes, Digital Out of Home en slimme retargeting bereiken organisaties talent op de juiste plekken en momenten. Zo ontstaat meer herkenning én sterkere conversie.",
    },
    {
      q: "Wat is Digital Out of Home (DOOH) en waarom werkt het voor werving?",
      a: "Onderzoek laat zien dat 83 procent van de mensen DOOH-reclame opmerkt. Met bewegend beeld brengt u bovendien uw missie, visie en cultuur tot leven en valt uw organisatie op buiten de online massa.",
    },
    {
      q: "Hoe verhoudt offline branding zich tot online conversie?",
      a: "Branding vindt offline plaats, conversie online. Wij maken werkgevers zichtbaar via DOOH op locaties waar de doelgroep komt en bereiken diezelfde doelgroep vervolgens opnieuw op de smartphone via slimme retargeting. Zo verbinden we offline zichtbaarheid met meetbare online conversie.",
    },
    {
      q: "Hoeveel kandidaten kunt u met DOOH bereiken?",
      a: "Afhankelijk van de locaties en campagne-opzet kan het bereik oplopen van ongeveer 250.000 tot 2 miljoen kandidaten per maand, vooral in de Randstad. Bovendien brengen kandidaten gemiddeld één tot twee uur per week door op deze locaties, waardoor de kans groter is dat uw boodschap wordt opgemerkt en onthouden.",
    },
    {
      q: "Voor welke organisaties is deze aanpak geschikt?",
      a: "Deze aanpak is geschikt voor werkgevers die zich in een krappe arbeidsmarkt willen onderscheiden en talent ook buiten vacaturebanken en social media willen bereiken. Vooral grote organisaties en (semi-)overheden die structureel de juiste mensen willen bereiken, profiteren van deze aanpak.",
    },
  ],
  en: [
    {
      q: "How does Digital Concepts Factory help attract talent?",
      a: "We put employers in front of the right candidates at the right moment, online and offline. With Employer Branding campaigns, Digital Out of Home and smart retargeting, organisations reach talent at the right places and moments. That builds more recognition and stronger conversion.",
    },
    {
      q: "What is Digital Out of Home (DOOH) and why does it work for recruitment?",
      a: "Research shows that 83 percent of people notice DOOH advertising. With moving images you also bring your mission, vision and culture to life and stand out beyond the online crowd.",
    },
    {
      q: "How does offline branding relate to online conversion?",
      a: "Branding happens offline, conversion online. We make employers visible through DOOH at locations the audience visits, then reach that same audience again on their smartphone through smart retargeting. That connects offline visibility with measurable online conversion.",
    },
    {
      q: "How many candidates can you reach with DOOH?",
      a: "Depending on the locations and campaign setup, reach can run from roughly 250,000 to 2 million candidates per month, mainly in the Randstad region. Candidates also spend on average one to two hours a week at these locations, increasing the chance your message is noticed and remembered.",
    },
    {
      q: "Which organisations is this approach suitable for?",
      a: "This approach suits employers who want to stand out in a tight labour market and want to reach talent beyond job boards and social media too. Large organisations and (semi-)public bodies that want to reach the right people structurally benefit especially from this approach.",
    },
  ],
};

export const talentBehoudenFaq: FaqSet = {
  nl: [
    {
      q: "Hoe maakt DCF maatwerk in arbeidsvoorwaarden betaalbaar en schaalbaar?",
      a: "Wij draaien het uitgangspunt om: niet de werkgever bepaalt welke extra's worden aangeboden, maar de medewerker kiest zelf wat waardevol is, binnen duidelijke kaders. Met onze digitale oplossing kan dat zonder complexiteit en zonder oncontroleerbare kosten, ook per individuele medewerker.",
    },
    {
      q: "Hoeveel kan een organisatie besparen door talent te behouden?",
      a: "Bij een bruto modaal jaarinkomen van 48.000 euro en een minimale vervangingsimpact van 40 procent bespaart u vanaf 19.200 euro per voorkomen vertrek. Voor managers en specialisten loopt dit bedrag fors verder op, tot 200 procent van het jaarsalaris.",
    },
    {
      q: "Waaruit bestaan vervangingskosten precies?",
      a: "Uit veel meer dan alleen werving en selectie. Denk aan onboarding, inwerktijd, lagere productiviteit, extra belasting van collega's en verlies van kennis en relaties. Samen lopen deze kosten op van 40 tot 200 procent van het bruto jaarsalaris, afhankelijk van de functie.",
    },
    {
      q: "Houdt de organisatie nog grip als medewerkers zelf kiezen?",
      a: "Ja. Medewerkers kiezen binnen duidelijke en beheersbare kaders die u als organisatie vooraf vaststelt. Zo combineert u meer vrijheid en motivatie voor medewerkers met flexibiliteit, controle en kostenbeheersing voor de organisatie.",
    },
    {
      q: "Voor wie is deze oplossing geschikt?",
      a: "Voor organisaties die talent langer willen behouden en merken dat een standaard arbeidsvoorwaardenpakket niet meer past bij een diverse generatie medewerkers. De oplossing is ontwikkeld om toegankelijk en betaalbaar te zijn voor iedere organisatie.",
    },
  ],
  en: [
    {
      q: "How does DCF make tailored employment terms affordable and scalable?",
      a: "We flip the starting point: the employer no longer decides which extras are offered, the employee chooses what is valuable to them, within clear frameworks. Our digital solution makes this possible without complexity and without uncontrollable costs, even per individual employee.",
    },
    {
      q: "How much can an organisation save by retaining talent?",
      a: "With an average gross annual income of 48,000 euros and a minimum replacement impact of 40 percent, you save from 19,200 euros per avoided departure. For managers and specialists this rises considerably, up to 200 percent of the annual salary.",
    },
    {
      q: "What exactly do replacement costs consist of?",
      a: "Far more than just recruitment and selection. Think of onboarding, ramp-up time, lower productivity, extra strain on colleagues and loss of knowledge and relationships. Together these run from 40 to 200 percent of gross annual salary, depending on the role.",
    },
    {
      q: "Does the organisation keep control if employees choose for themselves?",
      a: "Yes. Employees choose within clear and manageable frameworks that you set in advance. That combines more freedom and motivation for employees with flexibility, control and cost management for the organisation.",
    },
    {
      q: "Who is this solution suitable for?",
      a: "For organisations that want to retain talent longer and find that a standard benefits package no longer fits a diverse generation of employees. The solution is designed to be accessible and affordable for every organisation.",
    },
  ],
};

export const ziekteverzuimFaq: FaqSet = {
  nl: [
    {
      q: "Hoe helpt DCF om ziekteverzuim terug te dringen?",
      a: "Met een betaalbare digitale oplossing die medewerkers gemotiveerd houdt om zich niet onnodig ziek te melden, zonder ingewikkelde trajecten of hoge drempels. Minder onnodige ziekmeldingen betekent direct meer grip op kosten, meer rust in teams en meer continuïteit.",
    },
    {
      q: "Wat kost ziekteverzuim gemiddeld per medewerker?",
      a: "In Nederland liggen de gemiddelde kosten tussen 4.500 en 7.000 euro per medewerker per jaar, afhankelijk van sector, functie en verzuimduur. In 2023 ging het in totaal om 8,3 miljard euro aan loondoorbetalingskosten over verzuimde werkdagen.",
    },
    {
      q: "Werkt de oplossing ook bij kortdurend verzuim?",
      a: "Juist kortdurend verzuim is voor veel werkgevers een doorn in het oog, omdat het onverwacht komt en roosters verstoort. Onze oplossing richt zich op het positief beïnvloeden van gedrag, zodat onnodige kortdurende ziekmeldingen afnemen.",
    },
    {
      q: "Is de oplossing betaalbaar voor mijn organisatie?",
      a: "Ja. De kracht zit in de combinatie van betaalbaarheid, toegankelijkheid en praktische toepasbaarheid. De oplossing is haalbaar voor grote organisaties én voor werkgevers die op zoek zijn naar iets dat financieel verantwoord is.",
    },
    {
      q: "Voor wie is deze aanpak geschikt?",
      a: "Voor werkgevers die ziekteverzuim structureel willen verlagen en meer grip willen op de kosten en continuïteit die daarmee samenhangen. De aanpak is bedoeld als praktische, laagdrempelige aanvulling op uw bestaande verzuimbeleid.",
    },
  ],
  en: [
    {
      q: "How does DCF help reduce sick leave?",
      a: "With an affordable digital solution that keeps employees motivated not to call in sick unnecessarily, without complex programmes or high barriers. Fewer unnecessary sick-day calls means immediate control over costs, calmer teams and greater continuity.",
    },
    {
      q: "What does sick leave cost on average per employee?",
      a: "In the Netherlands, average costs run between 4,500 and 7,000 euros per employee per year, depending on sector, role and duration. In 2023, total continued-pay costs for sick days amounted to 8.3 billion euros.",
    },
    {
      q: "Does the solution also work for short-term absenteeism?",
      a: "Short-term absenteeism in particular is a thorn in the side of many employers because it arrives unexpectedly and disrupts rosters. Our solution focuses on positively influencing behaviour so that unnecessary short-term sick-day calls decrease.",
    },
    {
      q: "Is the solution affordable for my organisation?",
      a: "Yes. The strength lies in the combination of affordability, accessibility and practical applicability. The solution is viable for large organisations and for employers looking for something that is financially responsible.",
    },
    {
      q: "Who is this approach suitable for?",
      a: "For employers who want to reduce sick leave structurally and gain more control over the related costs and continuity. The approach is intended as a practical, low-threshold addition to your existing absenteeism policy.",
    },
  ],
};

export const inkoopFaq: FaqSet = {
  nl: [
    {
      q: "Hoeveel kan DCF besparen op aanbestedingstrajecten?",
      a: "Doordat onze innovatie structuur, overzicht en procesbeheersing toevoegt, brengen organisaties de interne kosten en doorlooptijden van aanbestedingen tot 50 procent terug. De winst zit vooral in minder handmatig uitzoek- en afstemmingswerk en minder kans op fouten.",
    },
    {
      q: "Werkt dit ook voor Europese aanbestedingen?",
      a: "Ja. Juist bij Europese aanbestedingen, die vragen om structuur, specialistische kennis en capaciteit, voegt onze oplossing waarde toe. Het hele traject wordt overzichtelijker, transparanter en aantoonbaar controleerbaar.",
    },
    {
      q: "Wat is contractmanagement en waarom is het belangrijk?",
      a: "Contractmanagement is het bewaken van afspraken, prestaties, termijnen en verplichtingen nadat een contract is gesloten. Zonder grip lopen contracten stilzwijgend door, worden verlengmomenten gemist en ontstaan onnodige kosten. Met centraal inzicht voorkomt u dat.",
    },
    {
      q: "Waar zitten de echte kosten van aanbesteden?",
      a: "Niet alleen in externe ondersteuning, maar vooral in de interne organisatie: het opstellen van stukken, juridische controle, planning, beoordeling, motivering en dossiervorming. Daardoor kosten aanbestedingen vaak meer dan vooraf wordt ingeschat.",
    },
    {
      q: "Is dit alleen voor grote organisaties?",
      a: "Nee. Onze oplossing is ontwikkeld om betaalbaar en toegankelijk te zijn voor iedere organisatie. Professioneel en efficiënter aanbesteden is daarmee geen privilege van grote partijen met grote budgetten.",
    },
  ],
  en: [
    {
      q: "How much can DCF save on tendering processes?",
      a: "By adding structure, oversight and process control, organisations reduce the internal costs and lead times of tenders by up to 50 percent. The gain lies mainly in less manual searching and coordination and a lower risk of mistakes.",
    },
    {
      q: "Does this also work for European tenders?",
      a: "Yes. European tenders in particular, which demand structure, specialist knowledge and capacity, are where our solution adds value. The entire process becomes clearer, more transparent and demonstrably verifiable.",
    },
    {
      q: "What is contract management and why does it matter?",
      a: "Contract management is monitoring agreements, performance, deadlines and obligations after a contract is signed. Without control, contracts roll on silently, renewal moments are missed and unnecessary costs arise. Central insight prevents that.",
    },
    {
      q: "Where are the real costs of tendering?",
      a: "Not only in external support, but mainly in the internal organisation: drafting documents, legal review, planning, assessment, justification and file management. That is why tenders often cost more than initially estimated.",
    },
    {
      q: "Is this only for large organisations?",
      a: "No. Our solution is designed to be affordable and accessible for every organisation. Professional and more efficient tendering is therefore not a privilege of large players with large budgets.",
    },
  ],
};

export const marketingFaq: FaqSet = {
  nl: [
    {
      q: "Wat maakt de marketingaanpak van DCF anders?",
      a: "Wij ontwikkelen geen voorspelbare standaardcampagnes, maar verrassende, slimme en onderscheidende concepten die doelgroepen echt in beweging krijgen. Wie impact wil maken, moet durven afwijken van de gebaande paden.",
    },
    {
      q: "Wat bedoelt DCF met online én offline marketing?",
      a: "Doelgroepen leven niet alleen op hun scherm, maar ook in steden, op locaties en onderweg. Waar veel partijen zich vooral op online richten, zit de echte kracht vaak in de combinatie van beide: meer bereik, meer herkenning en meer onderscheidend vermogen.",
    },
    {
      q: "Doet DCF alleen het concept of ook de uitvoering?",
      a: "Beide. Onze kracht zit niet alleen in het bedenken van onderscheidende ideeën, maar ook in het realiseren ervan. Wij ondersteunen van strategie en conceptontwikkeling tot uitvoering, opvolging en evaluatie.",
    },
    {
      q: "Voor wie is deze marketingaanpak geschikt?",
      a: "Voor organisaties die opvallen lastig vinden in een markt waarin iedereen zichtbaar wil zijn, en die marketing zoeken die past bij hun merk, ambitie en markt in plaats van een standaardformat.",
    },
    {
      q: "Hoe meet u of de marketing iets oplevert?",
      a: "Marketing draait uiteindelijk om resultaat: meer zichtbaarheid, een sterker merk en meer klanten. Wij ontwikkelen geen campagnes om alleen maar aanwezig te zijn, maar concepten die organisaties aantoonbaar vooruithelpen, met opvolging en evaluatie.",
    },
  ],
  en: [
    {
      q: "What makes DCF's marketing approach different?",
      a: "We do not develop predictable standard campaigns, but surprising, smart and distinctive concepts that genuinely move audiences. Anyone who wants to make an impact must be willing to deviate from the beaten path.",
    },
    {
      q: "What does DCF mean by online and offline marketing?",
      a: "Audiences do not live only on their screens, but also in cities, at locations and on the move. Where many agencies focus mainly on online, real strength is often in the combination of both: more reach, more recognition and more differentiation.",
    },
    {
      q: "Does DCF only do the concept or also the execution?",
      a: "Both. Our strength lies not only in devising distinctive ideas but also in realising them. We support everything from strategy and concept development through to execution, follow-up and evaluation.",
    },
    {
      q: "Who is this marketing approach suitable for?",
      a: "For organisations that find it hard to stand out in a market where everyone wants to be visible, and that want marketing which fits their brand, ambition and market rather than a standard format.",
    },
    {
      q: "How do you measure whether the marketing delivers?",
      a: "Marketing is ultimately about results: more visibility, a stronger brand and more customers. We do not develop campaigns just to be present, but concepts that demonstrably move organisations forward, with follow-up and evaluation.",
    },
  ],
};
