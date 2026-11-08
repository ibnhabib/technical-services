import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import NetworkInstallationPage, { metadata as network } from "./network-installation/page";
import EthernetPage from "./ethernet/page";

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

describe("em dashes", () => {
  it("copy has none", () => {
    expect(text(<NetworkInstallationPage />)).not.toMatch(/[—–]/);
    expect(text(<EthernetPage />)).not.toMatch(/[—–]/);
  });
});
