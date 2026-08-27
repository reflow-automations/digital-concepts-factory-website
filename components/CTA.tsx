import Link from "next/link";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "underline";
  className?: string;
}

export default function CTA({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAProps) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-3 px-6 py-3.5 bg-cobalt text-paper text-[13px] tracking-tight hover:bg-cobalt-bright transition-colors duration-500 ${className}`}
      >
        <span>{children}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          className="transition-transform duration-500 group-hover:translate-x-1"
          aria-hidden
        >
          <path
            d="M1 7h12M8 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="square"
          />
        </svg>
      </Link>
    );
  }

  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-3 px-6 py-3.5 border border-ink/15 text-ink text-[13px] tracking-tight hover:bg-ink hover:text-paper transition-colors duration-500 ${className}`}
      >
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square" />
        </svg>
      </Link>
    );
  }

  // underline
  return (
    <Link
      href={href}
      className={`tap-safe group inline-flex items-center gap-2 text-[13px] tracking-tight text-ink hover:text-cobalt transition-colors ${className}`}
    >
      <span className="link-underline">{children}</span>
      <svg width="12" height="12" viewBox="0 0 14 14" className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square" />
      </svg>
    </Link>
  );
}
