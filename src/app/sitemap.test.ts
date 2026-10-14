import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import { SITE_URL } from "@/lib/schema";

describe("sitemap", () => {
  const entries = sitemap();

  it("lists every page once, on the canonical www host", () => {
    const urls = entries.map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.every((u) => u.startsWith(SITE_URL))).toBe(true);
    expect(urls).toContain(`${SITE_URL}/al-ain`);
    expect(urls).toContain(`${SITE_URL}/guides/outdoor-cctv-heat-al-ain`);
  });

  it("does not publish a lastModified it cannot keep accurate", () => {
    expect(entries.some((e) => e.lastModified !== undefined)).toBe(false);
  });
});
