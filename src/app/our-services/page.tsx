import type { Metadata } from "next";
import { Wifi, Cable, Network, Server, Camera, Phone } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services - Technical Solutions in Al Ain & Abu Dhabi",
  description:
    "Explore our comprehensive technical services including network installation, fiber optic solutions, WiFi setup, ethernet cabling, CCTV installation, and VOIP services in Al Ain & Abu Dhabi.",
  keywords: [
    "technical services",
    "network installation",
    "fiber optic solutions",
    "WiFi setup",
    "ethernet cabling",
    "CCTV installation",
    "VOIP services",
    "Al Ain",
    "Abu Dhabi",
  ],
  alternates: { canonical: "/our-services" },
};

const services = [
  {
    icon: Network,
    title: "Professional Network Installation",
    description: "Enterprise-grade network solutions for businesses and homes",
    highlights: [
      "CAT 6 cable installation",
      "Structured cabling solutions",
      "Network infrastructure setup",
    ],
    url: "/network-installation",
  },
  {
    icon: Cable,
    title: "Fiber Optic Solutions",
    description: "Expert fiber optic installations and repairs",
    highlights: [
      "Residential & commercial installations",
      "Underground cable repairs",
      "24/7 emergency support",
    ],
    url: "/fiber-optic",
  },
  {
    icon: Wifi,
    title: "WiFi & Networking Setup",
    description: "Seamless wireless solutions for optimal coverage",
    highlights: [
      "Home & office WiFi installation",
      "NETGEAR extender optimization",
      "IoT device integration",
    ],
    url: "/wifi-setup",
  },
  {
    icon: Server,
    title: "Ethernet & Home Networking",
    description: "Complete home networking solutions",
    highlights: [
      "High-speed ethernet cabling",
      "Smart home configuration",
      "Professional cable management",
    ],
    url: "/ethernet",
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional security camera solutions for home and business",
    highlights: [
      "HD & 4K camera installation",
      "Remote monitoring setup",
      "Night vision systems",
    ],
    url: "/cctv",
  },
  {
    icon: Phone,
    title: "VOIP Solutions",
    description: "Advanced voice over IP telephony systems",
    highlights: [
      "Business phone system setup",
      "Cloud PBX integration",
      "Call center solutions",
    ],
    url: "/voip",
  },
];

export default function OurServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Our Professional Technical Services
            </h1>
            <p className="mx-auto mb-8 text-xl leading-relaxed text-slate-600 max-w-2xl">
              Technical Services (technicalservices.ae) is a provider of IT networking and infrastructure solutions, specializing in structured cabling, security systems, and IT maintenance for residential and commercial clients in Al Ain and Abu Dhabi. The company&apos;s services cover ICT infrastructure, CCTV installation, VOIP, and access control systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link href={service.url} key={service.url} className="group">
                <ServiceCard {...service} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">
              Why Choose Our Technical Services?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 mb-4">
                Our team of certified technicians provides expert installation and maintenance services for all your networking needs. From professional network cabling to fiber optic solutions, WiFi setup, CCTV installation, and VOIP services, we offer comprehensive technical solutions tailored to your specific requirements.
              </p>
              <p className="text-slate-700 mb-4">
                We pride ourselves on our attention to detail, quality workmanship, and commitment to customer satisfaction. Whether you need a simple WiFi setup or a complex network infrastructure, we have the expertise and experience to deliver reliable and efficient solutions.
              </p>
              <p className="text-slate-700 mb-4">
                Serving both residential and commercial clients in Al Ain and Abu Dhabi, we offer same-day service, 24/7 support, and competitive pricing. Contact us today for a free consultation and discover how our technical services can enhance your connectivity and security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
