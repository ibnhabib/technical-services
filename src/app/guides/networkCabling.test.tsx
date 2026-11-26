import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import NetworkCablingGuide, { metadata } from "./network-cabling-al-ain-villas/page";
import AlAinPage from "../al-ain/page";
import NetworkInstallationPage from "../network-installation/page";
import { Footer } from "@/components/Footer";
import sitemap from "../sitemap";

afterEach(cleanup);

const GUIDE = "/guides/network-cabling-al-ain-villas";
const hrefs = (c: HTMLElement) => [...c.querySelectorAll("a")].map((a) => a.getAttribute("href"));

describe("network cabling guide", () => {
  it("title names the topic and the city", () => {
    expect(String(metadata.title)).toMatch(/network cabling/i);
    expect(String(metadata.title)).toMatch(/Al Ain/);
  });

  it("has one h1, h2 sections, real depth and the local terms", () => {
    const { container } = render(<NetworkCablingGuide />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelectorAll("h2").length).toBeGreaterThanOrEqual(4);
    const t = container.textContent ?? "";
    expect(t.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(550);
    for (const w of ["CAT 6", "majlis", "e&", "annex", "roof"]) expect(t).toContain(w);
    expect(t).not.toMatch(/[—–]/);
  });

  it("links to the service pages and the city page", () => {
    const h = hrefs(render(<NetworkCablingGuide />).container);
    for (const p of ["/network-installation", "/ethernet", "/fiber-optic", "/wifi-setup", "/al-ain", "/guides/wifi-dead-zones-al-ain-villas"]) {
      expect(h).toContain(p);
    }
  });

  it("opens with the topic and the city in the first paragraph, and has real depth", () => {
    const { container } = render(<NetworkCablingGuide />);
    const intro = container.querySelector("h1 ~ p")?.textContent ?? "";
    expect(intro).toMatch(/network cabling/i);
    expect(intro).toMatch(/Al Ain/);
    expect(String(metadata.description)).toMatch(/network cabling/i);
    const t = container.textContent ?? "";
    expect(t.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(800);
  });

  it("shows a self-hosted photo with alt text and lists it in the Article schema", () => {
    const { container } = render(<NetworkCablingGuide />);
    const img = container.querySelector("img");
    expect(img?.getAttribute("src")).toBe("/images/network-cabling-technician.jpg");
    expect(img?.getAttribute("alt")?.length).toBeGreaterThan(20);
    const article = [...container.querySelectorAll('script[type="application/ld+json"]')]
      .map((s) => JSON.parse(s.textContent ?? "{}"))
      .find((b) => b["@type"] === "Article");
    expect(article.image).toBe("https://www.technicalservices.ae/images/network-cabling-technician.jpg");
  });

  it("has at least three FAQ questions as h3 under an h2", () => {
    const { container } = render(<NetworkCablingGuide />);
    const q = [...container.querySelectorAll("h3")].filter((e) => e.textContent?.endsWith("?"));
    expect(q.length).toBeGreaterThanOrEqual(3);
  });

  it("publishes Article, FAQPage and BreadcrumbList schema with dates", () => {
    const { container } = render(<NetworkCablingGuide />);
    const blocks = [...container.querySelectorAll('script[type="application/ld+json"]')].map((s) =>
      JSON.parse(s.textContent ?? "{}"),
    );
    const types = blocks.map((b) => b["@type"]);
    expect(types).toEqual(expect.arrayContaining(["Article", "FAQPage", "BreadcrumbList"]));
    const article = blocks.find((b) => b["@type"] === "Article");
    expect(article.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(article.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("is linked from the footer, the Al Ain page and the network installation page", () => {
    expect(hrefs(render(<Footer />).container)).toContain(GUIDE);
    cleanup();
    expect(hrefs(render(<AlAinPage />).container)).toContain(GUIDE);
    cleanup();
    expect(hrefs(render(<NetworkInstallationPage />).container)).toContain(GUIDE);
  });

  it("is in the sitemap", () => {
    expect(sitemap().map((e) => e.url)).toContain(`https://www.technicalservices.ae${GUIDE}`);
  });
});
