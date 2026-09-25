import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Professional Network Installation",
  description: `Professional network installation services with CAT 6 cable installation and structured cabling solutions for businesses and homes in Al Ain and Abu Dhabi. Expert technicians and reliable service.`,
  keywords: ["network installation","CAT 6 cable installation","structured cabling","network infrastructure","Al Ain","Abu Dhabi","network cabling","internet cable installation"],
  alternates: { canonical: "/network-installation" },
};

const content = [
  "Our professional network installation services provide comprehensive solutions for businesses and homes throughout Al Ain and Abu Dhabi. We specialize in designing and implementing reliable network infrastructures that ensure optimal performance and connectivity.",
  "With our expertise in CAT 6 cable installation and structured cabling solutions, we create organized and efficient networks that can grow with your needs. Our technicians are certified and experienced in handling projects of all sizes, from small home offices to large enterprise environments.",
  "We follow industry best practices and standards to deliver networks that offer maximum performance, reliability, and security. Every installation is meticulously planned and executed to minimize disruption to your operations."
];

const features = [
  "Complete structured cabling solutions for new and existing buildings",
  "CAT 6/6A/7 cable installation with proper testing and certification",
  "Fiber optic backbone installation for high-speed data transfer",
  "Network equipment setup including switches, routers, and access points",
  "Server room design and implementation with proper cooling and power",
  "Network documentation and labeling for easy maintenance",
  "Scalable designs that accommodate future growth",
  "Full compliance with industry standards and local regulations"
];

export default function NetworkInstallationPage() {
  return (
    <ServicePage
      title="Professional Network Installation"
      description={`Enterprise-grade network solutions with CAT 6 cable installation and structured cabling for businesses and homes in Al Ain and Abu Dhabi.`}
      content={content}
      features={features}
      imageUrl="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg"
      schemaData={serviceSchema({
        name: "Professional Network Installation",
        description: `Professional network installation services with CAT 6 cable installation and structured cabling solutions for businesses and homes in Al Ain and Abu Dhabi. Expert technicians and reliable service.`,
        serviceType: "Network Installation",
      })}
    />
  );
}
