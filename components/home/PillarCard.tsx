"use client";

/**
 * Pillar card with subtle 3D tilt on mouse-move.
 * To disable the tilt, change the import in Pillars.tsx to use a plain
 * <Link> wrapper instead of this component (a 1-line revert).
 *
 * Tilt is intentionally subtle (max ~6deg) and disabled on touch / reduced motion.
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface PillarCardProps {
  no: string;
  title: string;
  summary: string;
  bullets: string[];
  href: string;
  className?: string;
}

const MAX_TILT = 5; // degrees

export default function PillarCard({
  no,
  title,
  summary,
  bullets,
  href,
  className = "",
}: PillarCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width;
    const dy = (e.clientY - rect.top) / rect.height;
    setGlow({ x: dx * 100, y: dy * 100 });
    setTilt({ x: (dx - 0.5) * MAX_TILT * 2, y: -(dy - 0.5) * MAX_TILT * 2 });
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative block h-full p-10 lg:p-11 bg-paper hover:bg-paper-deep transition-colors duration-300 overflow-hidden will-change-transform ${className}`}
      style={{
        transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? "transform 500ms cubic-bezier(0.16,1,0.3,1), background-color 300ms" : "transform 80ms linear, background-color 300ms",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Subtle cobalt glow that follows the cursor */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(280px circle at ${glow.x}% ${glow.y}%, rgba(21,95,125,0.10), transparent 65%)`,
        }}
      />

      {/* Cobalt corner accents, slide in on hover */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-0 h-px bg-cobalt transition-all duration-500 group-hover:w-full"
      />
      <div
        aria-hidden
        className="absolute top-0 left-0 w-px h-0 bg-cobalt transition-all duration-500 group-hover:h-full"
      />

      <div className="relative flex items-start justify-between mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt">
          {no}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className="text-cobalt opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          aria-hidden
        >
          <path
            d="M1 9h16M11 3l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="square"
          />
        </svg>
      </div>

      <h3 className="relative display-section text-[clamp(1.5rem,1.9vw,1.85rem)] text-ink mb-4">
        {title}
      </h3>

      <p className="relative text-text/80 text-[15px] leading-[1.55] mb-8">
        {summary}
      </p>

      <ul className="relative flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] md:text-[10px] uppercase tracking-[0.12em] text-muted">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <span className="w-1 h-1 bg-cobalt" />
            {b}
          </li>
        ))}
      </ul>
    </Link>
  );
}
