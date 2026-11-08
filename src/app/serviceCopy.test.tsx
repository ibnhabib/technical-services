import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import NetworkInstallationPage, { metadata as network } from "./network-installation/page";
import EthernetPage from "./ethernet/page";
import AbuDhabiPage, { metadata as abuDhabi } from "./abu-dhabi/page";
import AlAinPage, { metadata as alAin } from "./al-ain/page";

afterEach(cleanup);

const text = (ui: React.ReactElement) => render(ui).container.textContent ?? "";
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

describe("/network-installation copy", () => {
  it("title uses the searched phrase 'networking installation services'", () => {
    expect(String(network.title)).toMatch(/networking installation services/i);
  });

  it("body covers the phrase, both cities and CAT 6A, with real depth", () => {
    const t = text(<NetworkInstallationPage />);
    expect(t).toMatch(/networking installation services/i);
    expect(t).toMatch(/Al Ain/);
    expect(t).toMatch(/Abu Dhabi/);
    expect(t).toMatch(/CAT 6A/);
    expect(words(t)).toBeGreaterThanOrEqual(350);
  });
});

describe("/ethernet copy", () => {
  it("body uses 'residential networking' and has real depth", () => {
    const t = text(<EthernetPage />);
    expect(t).toMatch(/residential networking/i);
    expect(words(t)).toBeGreaterThanOrEqual(350);
  });

  it("links to the WiFi dead zones guide", () => {
    const { container } = render(<EthernetPage />);
    const hrefs = [...container.querySelectorAll("a")].map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/guides/wifi-dead-zones-al-ain-villas");
  });
});

describe("/abu-dhabi copy", () => {
  it("description says 'troubleshooting'", () => {
    expect(String(abuDhabi.description)).toMatch(/troubleshooting/i);
  });

  it("has a troubleshooting heading, an FAQ on it and real depth", () => {
    const { container } = render(<AbuDhabiPage />);
    const h = [...container.querySelectorAll("h2, h3")].map((e) => e.textContent ?? "");
    expect(h.some((t) => /network troubleshooting/i.test(t))).toBe(true);
    expect(h.some((t) => /troubleshoot/i.test(t) && t.endsWith("?"))).toBe(true);
    expect(words(container.textContent ?? "")).toBeGreaterThanOrEqual(550);
  });
});

describe("/al-ain copy", () => {
  it("title names what people search, with the city", () => {
    const t = String((alAin.title as { absolute: string }).absolute);
    expect(t).toMatch(/Al Ain/);
    expect(t).toMatch(/installation/i);
    expect(t).toMatch(/WiFi/i);
  });

  it("h1 carries the service words and the city", () => {
    const { container } = render(<AlAinPage />);
    expect(container.querySelector("h1")?.textContent).toMatch(/installation.*Al Ain/i);
  });

  it("has local sections, named districts, provider wording and real depth", () => {
    const { container } = render(<AlAinPage />);
    const h = [...container.querySelectorAll("h2, h3")].map((e) => e.textContent ?? "");
    expect(h.some((t) => /where we work in al ain/i.test(t))).toBe(true);
    expect(h.some((t) => /internet.*al ain/i.test(t))).toBe(true);
    const all = container.textContent ?? "";
    for (const d of ["Al Jimi", "Hili", "Zakher", "Mutawaa"]) expect(all).toContain(d);
    expect(all).toMatch(/e&/);
    expect(words(all)).toBeGreaterThanOrEqual(650);
  });

  it("has at least five FAQs", () => {
    const { container } = render(<AlAinPage />);
    const q = [...container.querySelectorAll("h3")].filter((e) => e.textContent?.endsWith("?"));
    expect(q.length).toBeGreaterThanOrEqual(5);
  });
});

describe("em dashes", () => {
  it("al ain copy has none", () => {
    expect(text(<AlAinPage />)).not.toMatch(/[—–]/);
  });

  it("copy has none", () => {
    expect(text(<NetworkInstallationPage />)).not.toMatch(/[—–]/);
    expect(text(<EthernetPage />)).not.toMatch(/[—–]/);
    expect(text(<AbuDhabiPage />)).not.toMatch(/[—–]/);
  });
});
