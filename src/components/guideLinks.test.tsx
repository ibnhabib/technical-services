import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { Footer } from "./Footer";
import CctvPage from "@/app/cctv/page";
import WifiSetupPage from "@/app/wifi-setup/page";

afterEach(cleanup);

const hrefs = (c: HTMLElement) => [...c.querySelectorAll("a")].map((a) => a.getAttribute("href"));

describe("guide links", () => {
  it("footer links to both guides", () => {
    const h = hrefs(render(<Footer />).container);
    expect(h).toContain("/guides/outdoor-cctv-heat-al-ain");
    expect(h).toContain("/guides/wifi-dead-zones-al-ain-villas");
  });

  it("CCTV page links to the outdoor CCTV guide", () => {
    expect(hrefs(render(<CctvPage />).container)).toContain("/guides/outdoor-cctv-heat-al-ain");
  });

  it("WiFi page links to the WiFi dead zones guide", () => {
    expect(hrefs(render(<WifiSetupPage />).container)).toContain("/guides/wifi-dead-zones-al-ain-villas");
  });
});
