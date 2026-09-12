"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

type CalFunction = {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns?: Record<string, CalFunction>;
  q?: unknown[][];
};

type CalWindow = Window & {
  Cal?: CalFunction;
};

const CAL_NAMESPACE = "30min";
const CAL_TARGET_ID = "my-cal-inline-30min";

function loadCalEmbed() {
  const calWindow = window as CalWindow;
  const target = document.getElementById(CAL_TARGET_ID);

  if (!target || target.dataset.calInitialized === "true") return;
  target.dataset.calInitialized = "true";

  const pushToQueue = (cal: CalFunction, args: unknown[]) => {
    cal.q = cal.q || [];
    cal.q.push(args);
  };

  if (!calWindow.Cal) {
    calWindow.Cal = function (...args: unknown[]) {
      const cal = calWindow.Cal as CalFunction;

      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];

        const script = document.createElement("script");
        script.src = "https://app.cal.com/embed/embed.js";
        script.async = true;
        document.head.appendChild(script);

        cal.loaded = true;
      }

      if (args[0] === "init") {
        const namespace = args[1];
        const api = function (...apiArgs: unknown[]) {
          pushToQueue(api, apiArgs);
        } as CalFunction;

        api.q = api.q || [];

        if (typeof namespace === "string") {
          cal.ns = cal.ns || {};
          cal.ns[namespace] = cal.ns[namespace] || api;
          pushToQueue(cal.ns[namespace], args);
          pushToQueue(cal, ["initNamespace", namespace]);
        } else {
          pushToQueue(cal, args);
        }

        return;
      }

      pushToQueue(cal, args);
    };
  }

  const Cal = calWindow.Cal;
  Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });

  const namespacedCal = Cal.ns?.[CAL_NAMESPACE];
  namespacedCal?.("inline", {
    elementOrSelector: `#${CAL_TARGET_ID}`,
    config: {
      layout: "month_view",
      theme: "dark",
      useSlotsViewOnSmallScreen: "true",
    },
    calLink: "len-v-fiuafk/30min",
  });

  // Conversie-tracking via cal.com's eigen embed-callbacks. Ook al is het een
  // iframe, cal.com stuurt deze events naar de parent. trackEvent is een no-op
  // zolang de bezoeker geen cookies heeft geaccepteerd (consent-veilig).
  namespacedCal?.("on", {
    action: "linkReady",
    callback: () => trackEvent("cal_viewed", { method: "cal.com" }),
  });
  namespacedCal?.("on", {
    action: "bookingSuccessful",
    callback: () => trackEvent("cal_booking", { method: "cal.com" }),
  });

  namespacedCal?.("ui", {
    hideEventTypeDetails: false,
    layout: "month_view",
    theme: "dark",
    cssVarsPerTheme: {
      dark: {
        // Stepped coffee ramp — each level is clearly lighter than the last
        // so available days keep a visible "button" fill (don't flatten this).
        "cal-bg": "#2D1F14", // dark espresso — base surface
        "cal-bg-muted": "#392819", // recessed
        "cal-bg-subtle": "#4A372A", // available-day fill / time-slot surface
        "cal-bg-emphasis": "#6E5239", // hover / strong emphasis (clearly lighter)
        "cal-bg-inverted": "#F6F0E5", // cream
        "cal-border": "#6E5239", // visible warm hairline (column dividers)
        "cal-border-subtle": "#5A4332",
        "cal-border-emphasis": "#9C8568",
        "cal-text": "#F6F0E5", // warm cream — available day text
        "cal-text-emphasis": "#FFFFFF",
        "cal-text-subtle": "#C9BBA3",
        "cal-text-muted": "#7C6A56", // dim — unavailable days
        "cal-brand": "#2A82AC", // petrol blue accent
      },
    },
  });
}

export default function CalEmbed() {
  useEffect(() => {
    loadCalEmbed();
  }, []);

  return (
    <div className="relative w-full">
      <div
        id={CAL_TARGET_ID}
        className="w-full overflow-auto bg-ink border border-ink-soft rounded-3xl"
        style={{ minHeight: 620 }}
      />
    </div>
  );
}
