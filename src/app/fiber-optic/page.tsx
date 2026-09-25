import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Fiber Optic Solutions",
  description: `Professional fiber optic installations and repairs in Al Ain and Abu Dhabi. Our expert technicians provide residential and commercial fiber solutions with 24/7 emergency support.`,
  keywords: ["fiber optic","fiber cable installation","FTTH","fiber to the home","fiber optic repairs","high-speed internet","Al Ain","Abu Dhabi","network cabling"],
  alternates: { canonical: "/fiber-optic" },
};

const content = [
  "Our fiber optic solutions provide the highest speed and most reliable connectivity available in Al Ain and Abu Dhabi. We specialize in fiber optic installations for both residential and commercial properties, ensuring you have access to lightning-fast internet and data transfer capabilities.",
  "Our expert technicians are trained in the latest fiber optic technologies and installation methods. We handle everything from initial planning and design to installation, testing, and maintenance of your fiber optic network infrastructure.",
  "With 24/7 emergency support, we're always available to address any issues that may arise with your fiber optic connections, ensuring minimal downtime and maximum reliability for your critical communications."
];

const features = [
  "High-speed fiber optic cable installation for residential and commercial buildings",
  "Fiber to the home (FTTH) and fiber to the premises (FTTP) solutions",
  "Fiber optic cable splicing and termination with precision equipment",
  "Detailed testing and certification of all fiber installations",
  "Underground fiber optic cable installation and repairs",
  "Integration with existing network infrastructure",
  "Fiber optic network maintenance and troubleshooting",
  "24/7 emergency support for critical connectivity issues"
];

export default function FiberOpticPage() {
  return (
    <ServicePage
      title="Fiber Optic Solutions"
      description={`Expert fiber optic installations and repairs with 24/7 emergency support for residential and commercial properties in Al Ain and Abu Dhabi.`}
      content={content}
      features={features}
      imageUrl="https://images.pexels.com/photos/4339335/pexels-photo-4339335.jpeg"
      schemaData={serviceSchema({
        name: "Fiber Optic Solutions",
        description: `Professional fiber optic installations and repairs in Al Ain and Abu Dhabi. Our expert technicians provide residential and commercial fiber solutions with 24/7 emergency support.`,
        serviceType: "Fiber Optic Installation",
      })}
    />
  );
}
