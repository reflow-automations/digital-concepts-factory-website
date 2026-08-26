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
      a: "Wij draaien het uitgangspunt om: niet de werkgever bepaalt welke extra's worden aangeboden, maar medewerkers kiezen zelf wat voor hen waardevol is, binnen duidelijke kaders. Onze digitale oplossing maakt persoonlijk maatwerk schaalbaar en betaalbaar, terwijl de organisatie grip houdt op kosten en uitvoering.",
    },
    {
      q: "Hoeveel kan een organisatie besparen door talent te behouden?",
      a: "Bij een modaal bruto jaarinkomen van €48.000 en vervangingskosten vanaf 40% van het bruto jaarsalaris kan het behouden van één medewerker al €19.200 aan potentiële kosten besparen. Bij managers en specialisten kunnen de vervangingskosten aanzienlijk hoger liggen en in sommige gevallen oplopen tot 200% van het bruto jaarsalaris.",
    },
    {
      q: "Waaruit bestaan vervangingskosten precies?",
      a: "Vervangingskosten bestaan uit veel meer dan alleen werving en selectie. Denk aan onboarding, inwerktijd, tijdelijk lagere productiviteit, extra werkdruk voor collega's en verlies van kennis en relaties. Afhankelijk van de functie kunnen deze kosten oplopen van 40% tot 200% van het bruto jaarsalaris.",
    },
    {
      q: "Houdt de organisatie nog grip als medewerkers zelf kiezen?",
      a: "Ja. Medewerkers kiezen binnen duidelijke en beheersbare kaders die de organisatie vooraf vaststelt. Zo krijgen medewerkers meer keuzevrijheid en betrokkenheid, terwijl de organisatie grip houdt op kosten en uitvoering.",
    },
    {
      q: "Voor wie is deze oplossing geschikt?",
      a: "Voor organisaties die talent langer willen behouden en medewerkers meer keuzevrijheid willen bieden dan standaard arbeidsvoorwaarden mogelijk maken. Onze oplossing maakt persoonlijk maatwerk toegankelijk, betaalbaar en praktisch uitvoerbaar.",
    },
  ],
  en: [
    {
      q: "How does DCF make tailored employment terms affordable and scalable?",
      a: "We flip the starting point: the employer no longer decides which extras are offered, employees choose what is valuable to them, within clear frameworks. Our digital solution makes personal tailoring scalable and affordable, while the organisation keeps control over costs and delivery.",
    },
    {
      q: "How much can an organisation save by retaining talent?",
      a: "At an average gross annual income of €48,000 and replacement costs from 40% of gross annual salary, retaining a single employee can already save €19,200 in potential costs. For managers and specialists, replacement costs can be considerably higher and in some cases run up to 200% of gross annual salary.",
    },
    {
      q: "What exactly do replacement costs consist of?",
      a: "Replacement costs consist of far more than just recruitment and selection. Think of onboarding, ramp-up time, temporarily lower productivity, extra workload for colleagues and loss of knowledge and relationships. Depending on the role, these costs can run from 40% to 200% of gross annual salary.",
    },
    {
      q: "Does the organisation keep control if employees choose for themselves?",
      a: "Yes. Employees choose within clear and manageable frameworks that the organisation sets in advance. That gives employees more freedom of choice and engagement, while the organisation keeps control over costs and delivery.",
    },
    {
      q: "Who is this solution suitable for?",
      a: "For organisations that want to retain talent longer and want to offer employees more freedom of choice than standard employment terms allow. Our solution makes personal tailoring accessible, affordable and practical to deliver.",
    },
  ],
};

export const ziekteverzuimFaq: FaqSet = {
  nl: [
    {
      q: "Hoe helpt DCF om ziekteverzuim terug te dringen?",
      a: "DCF helpt organisaties met een betaalbare digitale oplossing die medewerkers stimuleert om zich niet onnodig ziek te melden, zonder ingewikkelde trajecten of hoge drempels. Minder onnodige ziekmeldingen betekent meer grip op kosten, meer rust in teams en meer continuïteit.",
    },
    {
      q: "Wat kost ziekteverzuim gemiddeld per medewerker?",
      a: "In Nederland liggen de gemiddelde kosten van ziekteverzuim tussen €4.500 en €7.000 per medewerker per jaar, afhankelijk van sector, functie en verzuimduur. In 2023 bedroegen alleen al de loondoorbetalingskosten over verzuimde werkdagen €8,3 miljard.",
    },
    {
      q: "Werkt de oplossing ook bij kortdurend verzuim?",
      a: "Juist kortdurend verzuim heeft veel impact, omdat het vaak onverwacht komt en direct druk zet op roosters, bezetting en collega's. Onze oplossing stimuleert positief gedrag en helpt zo onnodige kortdurende ziekmeldingen terug te dringen.",
    },
    {
      q: "Is de oplossing betaalbaar voor mijn organisatie?",
      a: "Ja. De kracht zit in de combinatie van betaalbaarheid, toegankelijkheid en praktische toepasbaarheid. Daardoor is de oplossing haalbaar voor zowel grote als kleinere organisaties, zonder hoge kosten of complexe implementatietrajecten.",
    },
    {
      q: "Voor wie is deze aanpak geschikt?",
      a: "Voor werkgevers die ziekteverzuim structureel willen verlagen en meer grip zoeken op kosten, bezetting en continuïteit. De aanpak is een praktische, laagdrempelige aanvulling op uw bestaande verzuimbeleid.",
    },
  ],
  en: [
    {
      q: "How does DCF help reduce sick leave?",
      a: "DCF helps organisations with an affordable digital solution that encourages employees not to call in sick unnecessarily, without complex programmes or high barriers. Fewer unnecessary sick-day calls means more control over costs, calmer teams and greater continuity.",
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
      a: "Door meer structuur, overzicht en procesbeheersing aan te brengen, kunnen organisaties de interne kosten en doorlooptijden van aanbestedingstrajecten met tot 50% verlagen. De besparing ontstaat vooral door minder handmatig uitzoek- en afstemmingswerk, efficiëntere processtappen en minder fouten en herstelwerk.",
    },
    {
      q: "Werkt dit ook voor Europese aanbestedingen?",
      a: "Ja. Juist bij Europese aanbestedingen zijn structuur, specialistische kennis en voldoende capaciteit essentieel. Onze oplossing brengt informatie en processtappen centraal samen, waardoor het hele traject overzichtelijker, transparanter en beter controleerbaar wordt.",
    },
    {
      q: "Wat is contractmanagement en waarom is het belangrijk?",
      a: "Contractmanagement is het actief bewaken van afspraken, prestaties, termijnen en verplichtingen nadat een contract is gesloten. Zonder goed overzicht kunnen verlengmomenten worden gemist, afspraken uit beeld raken en onnodige kosten ontstaan. Door contractinformatie centraal beschikbaar te maken en belangrijke momenten tijdig te signaleren, wordt contractmanagement overzichtelijker en beter beheersbaar.",
    },
    {
      q: "Waar zitten de echte kosten van aanbesteden?",
      a: "Niet alleen in externe ondersteuning, maar juist ook in de interne organisatie. Het opstellen en beoordelen van stukken, juridische toetsing, interne afstemming, planning, motivering en dossiervorming vragen veel tijd en capaciteit. Daardoor kosten aanbestedingstrajecten intern vaak meer tijd en geld dan vooraf wordt ingeschat.",
    },
    {
      q: "Is dit alleen voor grote organisaties?",
      a: "Nee. Onze oplossing is ontwikkeld om professioneel aanbesteden toegankelijk en betaalbaar te maken voor organisaties van verschillende omvang. Zo is efficiënt en gestructureerd aanbesteden niet alleen weggelegd voor grote organisaties met ruime budgetten.",
    },
  ],
  en: [
    {
      q: "How much can DCF save on tendering processes?",
      a: "By adding more structure, oversight and process control, organisations can reduce the internal costs and lead times of tendering processes by up to 50%. The saving comes mainly from less manual searching and coordination, more efficient process steps and fewer mistakes and less rework.",
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
      a: "Wij ontwikkelen geen voorspelbare standaardcampagnes, maar marketingconcepten die opvallen, verrassen en doelgroepen in beweging krijgen. Daarbij combineren we creativiteit met slimme online en offline mogelijkheden om niet alleen zichtbaar te zijn, maar daadwerkelijk resultaat te behalen.",
    },
    {
      q: "Wat bedoelt DCF met online én offline marketing?",
      a: "Doelgroepen leven niet alleen op hun scherm, maar ook in steden, op locaties en onderweg. Waar veel partijen zich vooral op online richten, geloven wij juist in de kracht van de combinatie. Online én offline versterken elkaar en zorgen samen voor meer bereik, meer herkenning en meer impact.",
    },
    {
      q: "Doet DCF alleen het concept of ook de uitvoering?",
      a: "Beide. Onze kracht zit niet alleen in het ontwikkelen van onderscheidende marketingconcepten, maar ook in het daadwerkelijk realiseren ervan. Wij begeleiden het hele traject: van strategie en conceptontwikkeling tot uitvoering, optimalisatie en evaluatie.",
    },
    {
      q: "Voor wie is deze marketingaanpak geschikt?",
      a: "Voor organisaties die zich willen onderscheiden in een markt waarin iedereen zichtbaar wil zijn. En die zoeken naar marketing die past bij hun merk, ambities en doelgroep, in plaats van een standaardaanpak.",
    },
    {
      q: "Hoe meet u of de marketing iets oplevert?",
      a: "Marketing draait uiteindelijk om resultaat: meer zichtbaarheid, een sterker merk en meer klanten. Daarom ontwikkelen wij geen campagnes om alleen zichtbaar te zijn, maar concepten die gericht zijn op aantoonbaar resultaat. We volgen de resultaten, sturen waar nodig bij en maken inzichtelijk wat een campagne daadwerkelijk oplevert.",
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
