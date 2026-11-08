import { describe, expect, it } from "vitest";
import type { Metadata } from "next";
import { metadata as home } from "./page";
import { metadata as ourServices } from "./our-services/page";
import { metadata as alAin } from "./al-ain/page";
import { metadata as abuDhabi } from "./abu-dhabi/page";
import { metadata as wifi } from "./wifi-setup/page";
import { metadata as ethernet } from "./ethernet/page";
import { metadata as cctv } from "./cctv/page";
import { metadata as fiber } from "./fiber-optic/page";
import { metadata as network } from "./network-installation/page";
import { metadata as voip } from "./voip/page";
import { metadata as cctvGuide } from "./guides/outdoor-cctv-heat-al-ain/page";
import { metadata as wifiGuide } from "./guides/wifi-dead-zones-al-ain-villas/page";

const pages: [string, Metadata][] = [
  ["/", home],
  ["/our-services", ourServices],
  ["/al-ain", alAin],
  ["/abu-dhabi", abuDhabi],
  ["/wifi-setup", wifi],
  ["/ethernet", ethernet],
  ["/cctv", cctv],
  ["/fiber-optic", fiber],
  ["/network-installation", network],
  ["/voip", voip],
  ["/guides/outdoor-cctv-heat-al-ain", cctvGuide],
  ["/guides/wifi-dead-zones-al-ain-villas", wifiGuide],
];

// The root layout adds " | Technical Services" to every title except the homepage's
// and titles that opt out with { absolute }.
const rendered = (path: string, m: Metadata) => {
  const t = m.title;
  if (typeof t === "object" && t && "absolute" in t) return String(t.absolute);
  return path === "/" ? String(t) : `${t} | Technical Services`;
};

describe.each(pages)("metadata for %s", (path, m) => {
  it("title is at most 60 characters as rendered", () => {
    expect(rendered(path, m).length).toBeLessThanOrEqual(60);
  });

  it("description is 70-160 characters", () => {
    const len = String(m.description).length;
    expect(len).toBeGreaterThanOrEqual(70);
    expect(len).toBeLessThanOrEqual(160);
  });

  it("canonical is the page path", () => {
    expect(m.alternates?.canonical).toBe(path);
  });

  it("og:url matches the canonical and keeps the site-wide Open Graph defaults", () => {
    expect(m.openGraph?.url).toBe(path);
    expect(m.openGraph).toMatchObject({ type: "website", siteName: "Technical Services" });
    expect(m.openGraph?.images).toBeDefined();
  });
});

describe("titles match the words people search", () => {
  it("wifi-setup says 'installation', not only 'setup'", () => {
    expect(rendered("/wifi-setup", wifi)).toMatch(/WiFi Installation/i);
  });

  it("ethernet says 'cabling'", () => {
    expect(rendered("/ethernet", ethernet)).toMatch(/cabling/i);
  });

  it("city pages do not repeat the brand name", () => {
    expect(rendered("/al-ain", alAin)).toBe("Network, WiFi & CCTV Installation in Al Ain");
    expect(rendered("/abu-dhabi", abuDhabi)).toBe("Technical Services in Abu Dhabi");
  });
});

describe("metadata across pages", () => {
  it("has no duplicate titles or descriptions", () => {
    const titles = pages.map(([p, m]) => rendered(p, m));
    const descs = pages.map(([, m]) => String(m.description));
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descs).size).toBe(descs.length);
  });
});
