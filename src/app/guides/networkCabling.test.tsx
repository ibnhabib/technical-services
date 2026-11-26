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
    for (const p of ["/network-installation", "/ethernet", "/al-ain", "/guides/wifi-dead-zones-al-ain-villas"]) {
      expect(h).toContain(p);
    }
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
