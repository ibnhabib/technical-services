import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { existsSync, readFileSync } from "fs";
import { join } from "path";
import NetworkInstallationPage from "./network-installation/page";
import EthernetPage from "./ethernet/page";
import WifiSetupPage from "./wifi-setup/page";
import CctvPage from "./cctv/page";
import FiberOpticPage from "./fiber-optic/page";
import VoipPage from "./voip/page";
import OutdoorCctvHeatGuide from "./guides/outdoor-cctv-heat-al-ain/page";
import WifiDeadZonesGuide from "./guides/wifi-dead-zones-al-ain-villas/page";
import NetworkCablingGuide from "./guides/network-cabling-al-ain-villas/page";
import { Navbar } from "@/components/Navbar";
import tailwind from "../../tailwind.config";

afterEach(cleanup);

const root = join(__dirname, "..", "..");
const heroPages: [string, () => React.ReactElement][] = [
  ["/network-installation", () => <NetworkInstallationPage />],
  ["/ethernet", () => <EthernetPage />],
  ["/wifi-setup", () => <WifiSetupPage />],
  ["/cctv", () => <CctvPage />],
  ["/fiber-optic", () => <FiberOpticPage />],
  ["/voip", () => <VoipPage />],
  ["/guides/outdoor-cctv-heat-al-ain", () => <OutdoorCctvHeatGuide />],
  ["/guides/wifi-dead-zones-al-ain-villas", () => <WifiDeadZonesGuide />],
];

describe.each(heroPages)("hero image on %s", (_path, page) => {
  it("is self-hosted, responsive, high priority and present on disk", () => {
    const { container } = render(page());
    const img = container.querySelector("img");
    expect(img).not.toBeNull();
    const src = img!.getAttribute("src") ?? "";
    expect(src).toMatch(/^\/images\/hero\/.+\.webp$/);
    expect(img!.getAttribute("fetchpriority")).toBe("high");
    expect(img!.getAttribute("srcset")).toMatch(/800w.*1600w/);
    for (const u of [src, ...(img!.getAttribute("srcset") ?? "").split(",").map((s) => s.trim().split(" ")[0])]) {
      expect(existsSync(join(root, "public", u))).toBe(true);
    }
    expect(container.innerHTML).not.toMatch(/pexels|unsplash|pixabay/i);
  });
});

describe("accessibility basics", () => {
  it("every navbar button has an accessible name", () => {
    const { container } = render(<Navbar />);
    for (const b of container.querySelectorAll("button")) {
      expect((b.getAttribute("aria-label") ?? b.textContent ?? "").trim().length).toBeGreaterThan(0);
    }
  });

  it("layout wraps page content in a main landmark", () => {
    expect(readFileSync(join(root, "src/app/layout.tsx"), "utf8")).toMatch(/<main[ >]/);
  });

  it("primary colour has at least 4.5:1 contrast on white and on slate-50", () => {
    const hex = (tailwind.theme as { extend: { colors: { primary: { DEFAULT: string } } } }).extend.colors.primary.DEFAULT;
    const lum = (h: string) => {
      const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
      return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    };
    const ratio = (a: string, b: string) => (Math.max(lum(a), lum(b)) + 0.05) / (Math.min(lum(a), lum(b)) + 0.05);
    expect(ratio(hex, "#ffffff")).toBeGreaterThanOrEqual(4.5);
    expect(ratio(hex, "#f8fafc")).toBeGreaterThanOrEqual(4.5);
  });

  it.each([
    ["wifi guide", () => <WifiDeadZonesGuide />],
    ["cctv guide", () => <OutdoorCctvHeatGuide />],
    ["cabling guide", () => <NetworkCablingGuide />],
  ])("%s: the closing city link is underlined, not colour alone", (_n, page) => {
    const { container } = render(page());
    const link = [...container.querySelectorAll("a")].find((a) => a.getAttribute("href") === "/al-ain" && a.closest("p.text-sm"));
    expect(link?.className).toMatch(/(^|\s)underline(\s|$)/);
  });
});

describe("analytics loading", () => {
  it("layout uses the interaction-based loader, not an inline GTM snippet", () => {
    const src = readFileSync(join(root, "src/app/layout.tsx"), "utf8");
    expect(src).toMatch(/<AnalyticsLoader\s*\/>/);
    expect(src).not.toMatch(/googletagmanager\.com\/gtm\.js/);
    expect(src).toMatch(/googletagmanager\.com\/ns\.html\?id=GTM-KZ9VZMR7/);
  });
});
