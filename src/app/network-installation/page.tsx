import type { Metadata } from "next";
import { ogMeta } from "@/lib/seo";
import { ServicePage } from "@/components/service/ServicePage";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Networking Installation Services",
  description: "Networking installation services in Al Ain and Abu Dhabi: CAT 6 and CAT 6A structured cabling, switches and racks for homes, offices and warehouses.",
  keywords: ["networking installation services","network installation","CAT 6 cable installation","CAT 6A","structured cabling","network cabling","Al Ain","Abu Dhabi","internet cable installation"],
  alternates: { canonical: "/network-installation" },
  openGraph: ogMeta("/network-installation"),
};

const content = [
  "Our networking installation services cover everything between the router your provider installs and the devices that use it: cable runs, wall points, a patch panel, switches and access points. We plan, install, test and label these networks for villas, offices, shops and warehouses in Al Ain and Abu Dhabi.",
  "Most jobs use CAT 6 cable. It carries 1 Gbps over the full 100 metres and 10 Gbps over shorter runs of about 55 metres. We use CAT 6A where a link needs 10 Gbps at full distance, for example to a server room or a home office with a NAS. We only fit solid pure copper cable. Copper-clad aluminium is cheaper, but it carries less power and is a poor choice for PoE cameras, access points and phones.",
  "Every network is laid out as a star. Each wall point has its own cable back to one patch panel and switch, so a fault on one point never takes down the others. We keep each permanent link under 90 metres, which leaves room for patch cables inside the 100 metre limit, and we route data cable away from mains cable so it does not pick up interference.",
  "Building type changes the method. Villas in Al Ain have block walls and large roof voids, so we run cable in conduit through the roof and drop it to each room, and we use UV-rated cable for any outdoor stretch. Between a main house and a guest annex or a warehouse unit, a fibre link removes the distance limit and keeps the buildings electrically separate. In towers and offices in Abu Dhabi we work to building management rules and use trunking where walls cannot be cut.",
  "For offices and warehouses we build the rack as well: patch panel, PoE switch, cable management, and clear labels on both ends of every cable. The same network can carry IP cameras, VOIP phones and WiFi access points, so we size the switch for the devices you have now and leave spare ports for the ones you will add.",
  "At handover you get the test results for each cable and a simple port map. That makes later changes quick, whether we do them or another technician does."
];

const features = [
  "Structured cabling for new and existing homes, offices and warehouses",
  "CAT 6 and CAT 6A cable installation, tested end to end",
  "Fiber optic links between buildings and to server rooms",
  "Switch, patch panel, router and access point setup",
  "PoE networks for IP cameras, VOIP phones and WiFi access points",
  "Rack and server room layout with cable management",
  "Labelled cables and a port map for easy maintenance",
  "Spare capacity planned in so the network can grow"
];

export default function NetworkInstallationPage() {
  return (
    <ServicePage
      title="Networking Installation Services"
      description={`CAT 6 and CAT 6A structured cabling, switches and racks for homes, offices and warehouses in Al Ain and Abu Dhabi.`}
      content={content}
      features={features}
      imageUrl="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg"
      schemaData={serviceSchema({
        name: "Networking Installation Services",
        description: `Networking installation services in Al Ain and Abu Dhabi: CAT 6 and CAT 6A structured cabling, switches, racks and PoE networks for homes, offices and warehouses.`,
        serviceType: "Network Installation",
      })}
    />
  );
}
