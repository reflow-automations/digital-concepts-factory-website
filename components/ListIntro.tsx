/**
 * ListIntro — de aankondigende zin boven een opsomming.
 *
 * De klant vroeg dit expliciet (revisieronde 2026-08, punt 17, herhaald bij
 * 35a, 57 en 72): "Wij willen bij dit soort opsommingen dat de tekst er wat
 * meer uitkomt. Ook bij andere opsommingen op de website. Misschien met een
 * vak eromheen of iets anders, want je gaat nu iets aankondigen."
 *
 * Eén component, overal gebruikt, zodat elke opsomming op de site er hetzelfde
 * uitziet: kaderlijn in merkkleur links, zachte cream-vulling, iets grotere
 * en donkerdere tekst dan een gewone alinea.
 */

export default function ListIntro({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-mist border-l-2 border-l-cobalt bg-paper px-6 py-5 lg:px-7 lg:py-6 rounded-sm ${className}`}
    >
      <p className="text-ink text-[15.5px] lg:text-[16px] leading-[1.6] font-medium">
        {children}
      </p>
    </div>
  );
}
