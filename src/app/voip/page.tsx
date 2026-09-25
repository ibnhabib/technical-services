import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "VOIP Solutions",
  description: `Professional VOIP and telephony solutions for businesses in Al Ain and Abu Dhabi. We provide business phone system setup, cloud PBX integration, and comprehensive call center solutions.`,
  keywords: ["VOIP","voice over IP","business phone system","cloud PBX","call center solutions","telephony","Al Ain","Abu Dhabi","phone installation"],
  alternates: { canonical: "/voip" },
};

const content = [
  "Our VOIP solutions provide advanced voice over IP telephony systems for businesses throughout Al Ain and Abu Dhabi. We design and implement reliable, cost-effective phone systems that leverage internet connectivity to deliver enhanced communications capabilities.",
  "Our experienced technicians are skilled in configuring a wide range of VOIP equipment and services, from simple small business setups to comprehensive enterprise-grade solutions with advanced features and call center capabilities.",
  "We ensure your VOIP system integrates seamlessly with your existing network infrastructure while providing the reliability, call quality, and features your business needs to communicate effectively with clients and colleagues."
];

const features = [
  "Complete business phone system setup and configuration",
  "Cloud PBX integration for flexible, scalable telephony",
  "Call center and IVR (Interactive Voice Response) solutions",
  "Mobile integration for remote work capabilities",
  "HD voice quality with proper QoS (Quality of Service) configuration",
  "Conference calling and video conferencing setup",
  "Voicemail to email and fax to email services",
  "Detailed call reporting and analytics"
];

export default function VoipPage() {
  return (
    <ServicePage
      title="VOIP Solutions"
      description={`Advanced voice over IP telephony systems with business phone setup and call center solutions in Al Ain and Abu Dhabi.`}
      content={content}
      features={features}
      imageUrl="https://images.pexels.com/photos/17636234/pexels-photo-17636234/free-photo-of-ip-phone-in-data-center-room.jpeg"
      schemaData={serviceSchema({
        name: "VOIP Solutions",
        description: `Professional VOIP and telephony solutions for businesses in Al Ain and Abu Dhabi. We provide business phone system setup, cloud PBX integration, and comprehensive call center solutions.`,
        serviceType: "VOIP Installation",
      })}
    />
  );
}
