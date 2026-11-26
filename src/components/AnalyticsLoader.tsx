"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-KZ9VZMR7";
// shortcut: visitors who leave within this window without scrolling or tapping are not counted in GA4, raise or lower it if bounce reporting matters more than page speed.
export const FALLBACK_MS = 8000;
const EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

function loadGtm() {
  const w = window as unknown as { dataLayer?: unknown[]; __gtm?: boolean };
  if (w.__gtm) return;
  w.__gtm = true;
  (w.dataLayer ??= []).push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

export function AnalyticsLoader() {
  useEffect(() => {
    const stop = () => {
      clearTimeout(timer);
      EVENTS.forEach((e) => window.removeEventListener(e, start));
    };
    const start = () => {
      stop();
      loadGtm();
    };
    const timer = setTimeout(start, FALLBACK_MS);
    EVENTS.forEach((e) => window.addEventListener(e, start, { passive: true }));
    return stop;
  }, []);
  return null;
}
