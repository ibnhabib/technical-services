import { describe, expect, it } from "vitest";
import { metadata } from "./not-found";

describe("not-found page", () => {
  it("has its own title instead of the homepage title", () => {
    expect(metadata.title).toBe("Page not found");
  });
});
