import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PhotoBand() {
  return (
    <section className="relative py-0">
      <Reveal>
        <div className="relative w-full aspect-[21/9] lg:aspect-[24/8] overflow-hidden bg-ink">
          <Image
            src="/photos/home-domains.png"
            alt="HR, Inkoop en Marketing versterken met digitale innovatie"
            fill
            className="object-cover object-center"
            priority={false}
            sizes="100vw"
            quality={90}
          />
          {/* Bottom gradient for caption legibility */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/70 to-transparent pointer-events-none" />

          {/* Caption */}
          <div className="absolute left-6 lg:left-20 bottom-6 lg:bottom-8 right-6 flex items-end justify-between gap-6">
            <p className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-paper/85">
              HR · Inkoop · Marketing, versterken met digitale innovatie
            </p>
            <p className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-paper/50 hidden md:block">
              Rotterdam, 2026
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
