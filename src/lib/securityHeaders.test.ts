import { describe, expect, it } from "vitest";
import { securityHeaders } from "./securityHeaders";

const header = (key: string) => securityHeaders.find((h) => h.key === key)?.value;

describe("securityHeaders", () => {
  it("stops MIME sniffing", () => {
    expect(header("X-Content-Type-Options")).toBe("nosniff");
  });

  it("only allows framing by the same origin", () => {
    expect(header("X-Frame-Options")).toBe("SAMEORIGIN");
  });

  it("limits referrer data sent cross-origin", () => {
    expect(header("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
  });

  it("denies camera, microphone and geolocation", () => {
    expect(header("Permissions-Policy")).toBe("camera=(), microphone=(), geolocation=()");
  });

  it("has no duplicate header keys", () => {
    const keys = securityHeaders.map((h) => h.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});
