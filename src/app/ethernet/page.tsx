import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ethernet & Home Networking",
  description: `Professional ethernet and home networking solutions in Al Ain and Abu Dhabi. We provide high-speed ethernet cabling, smart home configuration, and professional cable management for reliable home networks.`,
  keywords: ["ethernet installation","home networking","structured cabling","smart home","high-speed internet","cable management","Al Ain","Abu Dhabi","network cabling"],
  alternates: { canonical: "/ethernet" },
};

const content = [
  "Our ethernet and home networking services provide comprehensive solutions for creating reliable, high-speed wired networks in homes and small businesses throughout Al Ain and Abu Dhabi. We specialize in implementing structured ethernet cabling systems that deliver consistent performance for all your connected devices.",
  "Our technicians are experts in planning and installing ethernet networks that integrate seamlessly with your existing infrastructure while providing room for future expansion. We ensure all cables are properly run, terminated, and tested to guarantee optimal performance.",
  "We also provide professional cable management solutions that keep your installation neat, organized, and accessible for future modifications or troubleshooting, enhancing both the functionality and aesthetics of your network installation."
];

const features = [
  "High-speed ethernet cable installation and termination",
  "Structured home network cabling with proper planning and documentation",
  "Network switch and patch panel installation for organized connectivity",
  "Smart home device integration and configuration",
  "Media streaming and home entertainment network setup",
  "Home office networking with reliable wired connections",
  "Professional cable management and concealment",
  "Network testing and certification for optimal performance"
];

export default function EthernetPage() {
  return (
    <ServicePage
      title="Ethernet & Home Networking"
      description={`Complete home networking solutions with high-speed ethernet cabling and smart home configuration in Al Ain and Abu Dhabi.`}
      content={content}
      features={features}
      imageUrl="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg"
      schemaData={serviceSchema({
        name: "Ethernet & Home Networking",
        description: `Professional ethernet and home networking solutions in Al Ain and Abu Dhabi. We provide high-speed ethernet cabling, smart home configuration, and professional cable management for reliable home networks.`,
        serviceType: "Ethernet Installation",
      })}
    />
  );
}
