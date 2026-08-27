"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CalEmbed from "@/components/CalEmbed";
import ReCaptcha from "@/components/ReCaptcha";
import Accent from "@/components/Accent";
import { usePick } from "@/lib/i18n/provider";
import { contact } from "@/content/contact";
import { trackEvent } from "@/lib/gtag";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const t = usePick(contact);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const startedRef = useRef(false);

  // Vuurt één keer zodra de bezoeker met het formulier begint (top van de
  // funnel). Het verschil tussen form_start en generate_lead is je afhaak.
  const handleFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("form_start", { form_name: "contact" });
  };

  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    topics: [] as string[],
    message: "",
    website: "", // honeypot — moet leeg blijven; alleen bots vullen dit
  });

  const toggleTopic = (topic: string) =>
    setForm((f) => ({
      ...f,
      topics: f.topics.includes(topic)
        ? f.topics.filter((x) => x !== topic)
        : [...f.topics, topic],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captchaToken }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setStatus("success");
        // Echte conversie: alleen bij een geslaagde verzending.
        trackEvent("generate_lead", {
          form_name: "contact",
          topics: form.topics.join(", "),
        });
      } else {
        setStatus("error");
        setErrorMsg(data.error || t.form.errorFallback);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.form.connectionError);
    }
  };

  return (
    <>
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="08"
              label={t.hero.chapter}
              className="text-muted mb-6"
            />
            <h1 className="display-hero text-ink text-[clamp(2.75rem,6.5vw,6rem)] max-w-5xl">
              <Accent
                text={t.hero.h1}
                accent={t.hero.h1Accent}
                className="italic font-light text-cobalt"
              />
            </h1>
          </Reveal>
        </div>
      </section>

      {/* PRIMARY — direct booking via cal.com */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <CalEmbed />
          </Reveal>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-mist" />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {t.divider}
            </span>
            <div className="flex-1 h-px bg-mist" />
          </div>
        </div>
      </section>

      {/* SECONDARY — form */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left, form */}
            <div className="lg:col-span-7">
              <Reveal>
                <form
                  onSubmit={handleSubmit}
                  onFocus={handleFirstInteraction}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="f-name" className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        {t.form.name}
                      </label>
                      <input
                        id="f-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="f-org" className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        {t.form.organisation}
                      </label>
                      <input
                        id="f-org"
                        type="text"
                        value={form.organisation}
                        onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="f-email" className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        {t.form.email}
                      </label>
                      <input
                        id="f-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="f-phone" className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        {t.form.phone}
                      </label>
                      <input
                        id="f-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                      {t.form.topicsLabel}
                    </label>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {t.topics.map((topic) => {
                        const active = form.topics.includes(topic);
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => toggleTopic(topic)}
                            className={`px-4 py-2 border text-[12px] transition-colors ${
                              active
                                ? "border-cobalt bg-cobalt/[0.06] text-cobalt"
                                : "border-mist text-text hover:border-ink"
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="f-msg" className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                      {t.form.messageLabel}
                    </label>
                    <textarea
                      id="f-msg"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors resize-none"
                    />
                  </div>

                  {/* Honeypot — onzichtbaar voor mensen, vangt bots die
                      blind alle velden invullen. Niet verwijderen. */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: 1,
                      height: 1,
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="f-website">Website (niet invullen)</label>
                    <input
                      id="f-website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) =>
                        setForm({ ...form, website: e.target.value })
                      }
                    />
                  </div>

                  <div className="pt-2">
                    <ReCaptcha onToken={setCaptchaToken} />
                  </div>

                  {status === "success" ? (
                    <div className="flex items-start gap-4 bg-cobalt text-paper px-6 py-5 rounded-xl">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="shrink-0 mt-0.5"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>
                        <p className="text-[16px] font-semibold leading-tight">
                          {t.form.successTitle}
                        </p>
                        <p className="text-[13px] text-paper/85 mt-1.5">
                          {t.form.success}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {status === "error" && (
                        <p className="text-[13px] text-cobalt bg-cobalt/[0.08] border border-cobalt/30 px-4 py-3">
                          {errorMsg}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "submitting" || !captchaToken}
                        className="group inline-flex items-center gap-4 px-8 py-5 bg-cobalt text-paper text-[14px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === "submitting"
                          ? t.form.submitting
                          : !captchaToken
                            ? t.form.captcha
                            : t.form.submit}
                        {status === "idle" && captchaToken && (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="transition-transform duration-300 group-hover:translate-x-1"
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
                        )}
                      </button>
                    </>
                  )}
                </form>
              </Reveal>
            </div>

            {/* Right, info */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-12">
              <Reveal delay={100}>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-4">
                    {t.sidebar.directLabel}
                  </p>
                  <a
                    href="mailto:info@digitalconceptsfactory.nl"
                    className="tap-safe block text-[clamp(1.05rem,1.4vw,1.25rem)] text-ink hover:text-cobalt transition-colors leading-tight"
                  >
                    info@digitalconceptsfactory.nl
                  </a>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-4">
                    {t.sidebar.addressLabel}
                  </p>
                  <address className="not-italic text-ink text-[15px] leading-relaxed">
                    Digital Concepts Factory B.V.
                    <br />
                    Rotterdam Centraal
                    <br />
                    Rotterdam — Nederland
                  </address>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
