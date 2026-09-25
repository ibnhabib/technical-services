import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "CCTV Installation",
  description: `Professional CCTV and security camera installation services in Al Ain and Abu Dhabi. We provide HD and 4K camera systems with night vision and remote monitoring capabilities for homes and businesses.`,
  keywords: ["CCTV installation","security cameras","surveillance systems","night vision cameras","remote monitoring","HD cameras","4K cameras","Al Ain","Abu Dhabi"],
  alternates: { canonical: "/cctv" },
};

const content = [
  "Our CCTV installation services provide comprehensive security camera solutions for homes and businesses throughout Al Ain and Abu Dhabi. We design and implement surveillance systems that help protect your property, assets, and loved ones with reliable monitoring capabilities.",
  "Our experienced technicians are skilled in installing a wide range of security cameras, from basic HD systems to advanced 4K cameras with night vision capabilities. We ensure your cameras are strategically placed for maximum coverage and effectiveness.",
  "We also set up remote monitoring solutions that allow you to view your security footage from anywhere using your smartphone, tablet, or computer, giving you peace of mind whether you're at home, at work, or traveling."
];

const features = [
  "HD and 4K security camera installation for crystal-clear footage",
  "Strategic camera placement for optimal coverage and deterrence",
  "Night vision camera systems for 24/7 monitoring capabilities",
  "Digital video recorder (DVR) and network video recorder (NVR) setup",
  "Remote monitoring configuration for smartphone and tablet access",
  "Motion detection and automated alert systems",
  "Wired and wireless CCTV options to suit your property",
  "Professional cable management for clean, discreet installations"
];

export default function CctvPage() {
  return (
    <ServicePage
      title="CCTV Installation"
      description={`Professional security camera solutions for home and business with HD/4K cameras and remote monitoring in Al Ain and Abu Dhabi.`}
      content={content}
      features={features}
      imageUrl="https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg"
      schemaData={serviceSchema({
        name: "CCTV Installation",
        description: `Professional CCTV and security camera installation services in Al Ain and Abu Dhabi. We provide HD and 4K camera systems with night vision and remote monitoring capabilities for homes and businesses.`,
        serviceType: "Security Camera Installation",
      })}
    />
  );
}
