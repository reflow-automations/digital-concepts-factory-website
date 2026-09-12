"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n/provider";

interface CountUpProps {
  /** Final numeric value to count to. */
  value: number;
  /** Optional prefix (e.g. "€"). */
  prefix?: string;
  /** Optional suffix (e.g. "%", " mln+"). */
  suffix?: string;
  /** Duration of the count animation in ms. */
  duration?: number;
  /** Format with the selected language's thousands separator. */
  thousands?: boolean;
  /** Optional dash separator for ranges, pass when value is "low, high". */
  separator?: string;
  /** Optional second value, for ranges like 4.500, 7.000 */
  secondValue?: number;
  /** Format with `tot ` prefix word. */
  word?: string;
  className?: string;
}

/**
 * Number that counts up from 0 to `value` when scrolled into view.
 * Triggers once via IntersectionObserver.
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  thousands = false,
  separator,
  secondValue,
  word,
  className = "",
}: CountUpProps) {
  const lang = useLang();
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setCurrent(Math.round(value * eased));
      if (secondValue !== undefined) {
        setCurrent2(Math.round(secondValue * eased));
      }
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, secondValue, duration]);

  const fmt = (n: number) =>
    thousands ? n.toLocaleString(lang === "nl" ? "nl-NL" : "en-GB") : String(n);

  return (
    <span ref={ref} className={className}>
      {word ? `${word} ` : ""}
      {prefix}
      {fmt(current)}
      {secondValue !== undefined && separator
        ? ` ${separator} ${prefix}${fmt(current2)}`
        : ""}
      {suffix}
    </span>
  );
}
