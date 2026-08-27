import Link from "next/link";
import ChapterMark from "@/components/ChapterMark";

interface DemoPlaceholderProps {
  chapter: string;
  title: string;
  intent: string;
  showcasedAt?: { label: string; href: string }[];
}

export default function DemoPlaceholder({
  chapter,
  title,
  intent,
  showcasedAt = [],
}: DemoPlaceholderProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-20 w-full">
        <ChapterMark
          number={chapter}
          label={title}
          className="text-muted mb-12"
        />

        <div className="border-t border-b border-mist py-16 mb-12">
          <p className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-cobalt mb-6">
            In dit demo niet uitgewerkt
          </p>
          <h1 className="display-hero text-[clamp(2rem,5vw,4rem)] text-ink max-w-3xl">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-5 text-text text-[16px] leading-[1.65]">
            <p>
              Deze pagina is in de demo van{" "}
              <strong>Reflow Automations × Digital Concepts Factory</strong>{" "}
              bewust niet uitgewerkt, om jullie tijd te besparen bij de
              evaluatie van de designrichting.
            </p>
            <p>
              <strong>Wat hier zou komen:</strong> {intent}
            </p>
          </div>

          <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-mist">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-4">
              Wel uitgewerkt
            </p>
            {showcasedAt.length > 0 ? (
              <ul className="space-y-3 text-[14px]">
                {showcasedAt.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-ink hover:text-cobalt link-underline"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-3 text-[14px]">
                <li><Link href="/" className="text-ink hover:text-cobalt link-underline">Home</Link></li>
                <li><Link href="/talent-behouden" className="text-ink hover:text-cobalt link-underline">Talent behouden</Link></li>
                <li><Link href="/inkoop" className="text-ink hover:text-cobalt link-underline">Inkoop</Link></li>
                <li><Link href="/over-ons" className="text-ink hover:text-cobalt link-underline">Over ons</Link></li>
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-[13px] tracking-tight text-ink hover:text-cobalt transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden>
              <path d="M13 7H1M6 12L1 7l5-5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square" />
            </svg>
            <span className="link-underline">Terug naar home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
