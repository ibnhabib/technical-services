"use client";

import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  location: string;
};

export function TrackedLink({ location, onClick, children, ...rest }: Props) {
  const method = rest.href.startsWith("tel:") ? "phone_click" : "whatsapp_click";
  return (
    <a
      {...rest}
      onClick={(e) => {
        const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: method,
          contact_location: location,
          contact_destination: rest.href,
        });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
