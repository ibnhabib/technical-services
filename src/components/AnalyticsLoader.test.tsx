import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { AnalyticsLoader, FALLBACK_MS } from "./AnalyticsLoader";
import { HeroSection } from "./HeroSection";

const gtmScripts = () => document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]');

beforeEach(() => {
  vi.useFakeTimers();
  document.head.innerHTML = "";
  delete (window as unknown as { dataLayer?: unknown }).dataLayer;
  delete (window as unknown as { __gtm?: unknown }).__gtm;
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("AnalyticsLoader", () => {
  it("does not load GTM on mount", () => {
    render(<AnalyticsLoader />);
    expect(gtmScripts()).toHaveLength(0);
  });

  it.each(["pointerdown", "keydown", "scroll", "touchstart"])("loads GTM once on the first %s", (type) => {
    render(<AnalyticsLoader />);
    window.dispatchEvent(new Event(type));
    window.dispatchEvent(new Event(type));
    expect(gtmScripts()).toHaveLength(1);
    expect((window as unknown as { dataLayer: { event?: string }[] }).dataLayer.some((e) => e.event === "gtm.js")).toBe(true);
  });

  it("loads GTM after the fallback delay when the visitor does nothing", () => {
    render(<AnalyticsLoader />);
    vi.advanceTimersByTime(FALLBACK_MS - 1);
    expect(gtmScripts()).toHaveLength(0);
    vi.advanceTimersByTime(2);
    expect(gtmScripts()).toHaveLength(1);
  });

  it("keeps events pushed to dataLayer before GTM loads", () => {
    render(<AnalyticsLoader />);
    (window as unknown as { dataLayer: unknown[] }).dataLayer = [{ event: "phone_click" }];
    window.dispatchEvent(new Event("pointerdown"));
    const dl = (window as unknown as { dataLayer: { event?: string }[] }).dataLayer;
    expect(dl.map((e) => e.event)).toEqual(["phone_click", "gtm.js"]);
  });

  it("does not load twice across unmount and remount", () => {
    const first = render(<AnalyticsLoader />);
    window.dispatchEvent(new Event("scroll"));
    first.unmount();
    render(<AnalyticsLoader />);
    window.dispatchEvent(new Event("scroll"));
    vi.advanceTimersByTime(FALLBACK_MS + 1);
    expect(gtmScripts()).toHaveLength(1);
  });
});

describe("hero LCP", () => {
  it("headline and lead paragraph have no opacity entrance animation", () => {
    const { container } = render(<HeroSection />);
    expect(container.querySelector("h1")?.className).not.toMatch(/animate-/);
    expect(container.querySelector("h1 + p")?.className).not.toMatch(/animate-/);
  });
});
