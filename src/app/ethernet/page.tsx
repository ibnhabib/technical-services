import type { Metadata } from "next";
import { ogMeta } from "@/lib/seo";
import { ServicePage } from "@/components/service/ServicePage";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ethernet Cabling & Home Networking",
  description: "Residential networking and ethernet cabling in Al Ain and Abu Dhabi: in-wall CAT 6 runs, home office and smart TV wiring, neat patch panels.",
  keywords: ["residential networking","ethernet cabling","ethernet installation","home networking","structured cabling","smart home","cable management","Al Ain","Abu Dhabi"],
  alternates: { canonical: "/ethernet" },
  openGraph: ogMeta("/ethernet"),
};

const content = [
  "Residential networking in Al Ain and Abu Dhabi usually starts with the same complaint: WiFi that drops in the rooms that matter. A wired backbone fixes that at the source. We run CAT 6 ethernet cable from one patch panel to wall points in each room, so TVs, desks, consoles, access points and cameras get a fixed connection instead of competing for airtime.",
  "Thick block walls, marble floors and long villa layouts weaken WiFi quickly. A cable does not care. It gives each device a steady 1 Gbps with low latency, and it lets an access point sit where coverage is needed without relaying the signal over the air. A wireless repeater can lose up to half your speed at each hop. A cabled access point keeps full speed.",
  "A typical home install has wall points in the living room, the home office, the majlis and the bedrooms, plus ceiling drops for access points powered over the same cable. Behind them sits a small cabinet near your provider's router with a patch panel and a switch. Every cable is labelled at both ends and tested before we leave.",
  "The method depends on the home. In a villa we run cable through the roof void and existing conduit, then drop it inside the wall to a neat face plate. In an apartment, where walls often cannot be opened, we use slim trunking painted to match. In a new build, the best time to cable is before plastering, and we can pull it alongside the electrical first fix.",
  "CAT 6 is right for most homes: gigabit everywhere and 10 Gbps over shorter runs. For a home office with a NAS or a media server, CAT 6A gives 10 Gbps over a full-length run. We use pure copper cable only and keep each run under 90 metres.",
  "Cable management is part of the job. A tidy cabinet, labelled ports and a short port map mean the next change takes minutes."
];

const features = [
  "Residential networking for villas, apartments and majlis",
  "High-speed ethernet cable installation and termination",
  "Structured home network cabling with proper planning and documentation",
  "Network switch and patch panel installation for organized connectivity",
  "Wired access points powered over ethernet for whole-home WiFi",
  "Smart home device integration and configuration",
  "Media streaming and home entertainment network setup",
  "Home office networking with reliable wired connections",
  "Professional cable management and concealment",
  "Network testing and certification for optimal performance"
];

export default function EthernetPage() {
  return (
    <ServicePage
      title="Ethernet Cabling & Home Networking"
      description={`Residential networking with high-speed ethernet cabling, home office and smart home wiring in Al Ain and Abu Dhabi.`}
      content={content}
      features={features}
      imageUrl="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg"
      relatedGuide={{ href: "/guides/wifi-dead-zones-al-ain-villas", title: "Fixing WiFi Dead Zones in Al Ain Villas" }}
      schemaData={serviceSchema({
        name: "Ethernet & Home Networking",
        description: `Residential networking and ethernet cabling in Al Ain and Abu Dhabi: in-wall CAT 6 runs, home office and smart home wiring, patch panels and tidy cable management.`,
        serviceType: "Ethernet Installation",
      })}
    />
  );
}
