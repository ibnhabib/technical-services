import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import AlAinPage from "./al-ain/page";
import AbuDhabiPage from "./abu-dhabi/page";
import NetworkInstallationPage from "./network-installation/page";
import EthernetPage from "./ethernet/page";
import WifiSetupPage from "./wifi-setup/page";
import CctvPage from "./cctv/page";
import FiberOpticPage from "./fiber-optic/page";
import VoipPage from "./voip/page";

afterEach(cleanup);

const pages: [string, () => React.ReactElement][] = [
  ["/al-ain", () => <AlAinPage />],
  ["/abu-dhabi", () => <AbuDhabiPage />],
  ["/network-installation", () => <NetworkInstallationPage />],
  ["/ethernet", () => <EthernetPage />],
  ["/wifi-setup", () => <WifiSetupPage />],
  ["/cctv", () => <CctvPage />],
  ["/fiber-optic", () => <FiberOpticPage />],
  ["/voip", () => <VoipPage />],
];

describe.each(pages)("answer block on %s", (_path, page) => {
  it("is a short direct answer placed before the first section heading", () => {
    const { container } = render(page());
    const box = container.querySelector("aside[data-answer]");
    expect(box).not.toBeNull();
    const text = box?.textContent ?? "";
    const n = text.split(/\s+/).filter(Boolean).length;
    expect(n).toBeGreaterThanOrEqual(35);
    expect(n).toBeLessThanOrEqual(65);
    expect(text).toMatch(/Al Ain|Abu Dhabi/);
    expect(text).not.toMatch(/[—–]/);
    const firstH2 = container.querySelector("h2");
    if (firstH2) {
      expect(box!.compareDocumentPosition(firstH2) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
  });
});
