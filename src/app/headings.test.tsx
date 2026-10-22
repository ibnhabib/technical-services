import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import OurServicesPage from "./our-services/page";
import AlAinPage from "./al-ain/page";
import AbuDhabiPage from "./abu-dhabi/page";

afterEach(cleanup);

const levels = (container: HTMLElement) =>
  [...container.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => Number(h.tagName[1]));

describe.each([
  ["/our-services", OurServicesPage],
  ["/al-ain", AlAinPage],
  ["/abu-dhabi", AbuDhabiPage],
])("heading order on %s", (_path, Page) => {
  it("has exactly one h1 and never skips a level going down", () => {
    const { container } = render(<Page />);
    const l = levels(container);
    expect(l.filter((x) => x === 1)).toHaveLength(1);
    expect(l[0]).toBe(1);
    for (let i = 1; i < l.length; i++) expect(l[i] - l[i - 1]).toBeLessThanOrEqual(1);
  });
});
