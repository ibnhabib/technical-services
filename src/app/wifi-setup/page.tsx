import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "WiFi & Networking Setup",
  description: `Professional WiFi installation and networking setup services in Al Ain and Abu Dhabi. We provide seamless wireless solutions for homes and businesses with NETGEAR extender optimization and IoT device integration.`,
  keywords: ["wifi installation","wireless network setup","NETGEAR extender","mesh wifi","wifi coverage","Al Ain","Abu Dhabi","home networking","internet installation"],
  alternates: { canonical: "/wifi-setup" },
};

const content = [
  "Our WiFi and networking setup services provide seamless wireless connectivity solutions for homes and businesses throughout Al Ain and Abu Dhabi. We design and implement wireless networks that deliver reliable coverage, optimal performance, and enhanced security.",
  "Our experienced technicians are skilled in configuring a wide range of WiFi equipment, including routers, access points, mesh systems, and range extenders. We ensure your wireless network is properly optimized for your specific needs and environment.",
  "Whether you need a simple home WiFi installation or a complex enterprise-grade wireless network with multiple access points, we have the expertise to deliver a solution that meets your requirements and exceeds your expectations."
];

const features = [
  "Comprehensive WiFi site surveys to identify optimal access point placement",
  "Installation and configuration of routers, access points, and mesh systems",
  "WiFi network optimization for maximum coverage and performance",
  "NETGEAR extender setup and configuration for enhanced coverage",
  "Secure WiFi network implementation with proper encryption and authentication",
  "Guest network setup for visitor access without compromising security",
  "IoT device integration and smart home connectivity solutions",
  "Ongoing support and maintenance for your wireless network"
];

export default function WifiSetupPage() {
  return (
    <ServicePage
      title="WiFi & Networking Setup"
      description={`Seamless wireless solutions for optimal coverage in homes and offices across Al Ain and Abu Dhabi.`}
      content={content}
      features={features}
      imageUrl="https://images.unsplash.com/photo-1531765408077-9a1f85f90df1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp"
      schemaData={serviceSchema({
        name: "WiFi & Networking Setup",
        description: `Professional WiFi installation and networking setup services in Al Ain and Abu Dhabi. We provide seamless wireless solutions for homes and businesses with NETGEAR extender optimization and IoT device integration.`,
        serviceType: "WiFi Installation",
      })}
    />
  );
}
