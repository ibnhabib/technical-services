import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { TrackedLink } from "./TrackedLink";

type DL = Record<string, unknown>[];
const dl = () => (window as unknown as { dataLayer: DL }).dataLayer;

const blockNavigation = (e: Event) => e.preventDefault();

describe("TrackedLink", () => {
  beforeEach(() => {
    delete (window as unknown as { dataLayer?: DL }).dataLayer;
    document.addEventListener("click", blockNavigation);
  });
  afterEach(() => {
    document.removeEventListener("click", blockNavigation);
    cleanup();
  });

  it("pushes phone_click with location and destination for tel: links", () => {
    render(<TrackedLink href="tel:+971564836102" location="navbar">Call</TrackedLink>);
    fireEvent.click(screen.getByText("Call"));
    expect(dl()).toEqual([
      { event: "phone_click", contact_location: "navbar", contact_destination: "tel:+971564836102" },
    ]);
  });

  it("pushes whatsapp_click for wa.me links", () => {
    render(<TrackedLink href="https://wa.me/971569811332" location="floating">Chat</TrackedLink>);
    fireEvent.click(screen.getByText("Chat"));
    expect(dl()[0]).toMatchObject({ event: "whatsapp_click", contact_location: "floating" });
  });

  it("appends to an existing dataLayer without dropping earlier entries", () => {
    (window as unknown as { dataLayer: DL }).dataLayer = [{ event: "gtm.js" }];
    render(<TrackedLink href="tel:+971569811332" location="hero">Call</TrackedLink>);
    fireEvent.click(screen.getByText("Call"));
    expect(dl().map((e) => e.event)).toEqual(["gtm.js", "phone_click"]);
  });

  it("keeps the real href and still runs a caller onClick", () => {
    const onClick = vi.fn();
    render(<TrackedLink href="tel:+971569811332" location="hero" onClick={onClick}>Call</TrackedLink>);
    const a = screen.getByText("Call");
    expect(a.getAttribute("href")).toBe("tel:+971569811332");
    fireEvent.click(a);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("does not push anything before a click", () => {
    render(<TrackedLink href="tel:+971569811332" location="hero">Call</TrackedLink>);
    expect(window as unknown as { dataLayer?: DL }).not.toHaveProperty("dataLayer");
  });
});
