import type { Metadata } from "next";
import { Wifi, Cable, Network, Server, Camera, Phone, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { citySchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Technical Services in Al Ain - Network, WiFi, CCTV & Fiber Installation",
  description:
    "Based in Al Ain: network cabling, fiber optic repair, WiFi setup, CCTV installation, and VOIP services for homes and businesses across Al Ain. Same-day response.",
  keywords: [
    "technical services al ain",
    "network installation al ain",
    "wifi installation al ain",
    "cctv installation al ain",
    "fiber optic al ain",
    "cabling services al ain",
    "voip al ain",
  ],
  alternates: { canonical: "/al-ain" },
};

const services = [
  {
    icon: Network,
    title: "Network Installation",
    description: "Structured cabling for villas, offices, and warehouses across Al Ain",
    highlights: [
      "CAT 6 runs sized for Al Ain's larger villa compounds",
      "Same-day site visits for Al Ain addresses",
      "Office and majlis network points wired cleanly",
    ],
    url: "/network-installation",
  },
  {
    icon: Cable,
    title: "Fiber Optic Repair & Installation",
    description: "Fiber splicing and repair for Al Ain's growing fiber footprint",
    highlights: [
      "Underground and aerial fiber repair",
      "New-build fiber terminations",
      "Fast turnaround on outage call-outs",
    ],
    url: "/fiber-optic",
  },
  {
    icon: Wifi,
    title: "WiFi & Networking Setup",
    description: "Whole-property WiFi coverage built for Al Ain's villa layouts",
    highlights: [
      "Mesh coverage for large villas and gardens",
      "NETGEAR and mesh extender tuning",
      "Dead-zone fixes for thick masonry walls",
    ],
    url: "/wifi-setup",
  },
  {
    icon: Server,
    title: "Ethernet & Home Networking",
    description: "Wired networking for reliable speeds room to room",
    highlights: [
      "In-wall ethernet for home offices",
      "Smart home and TV point wiring",
      "Patch panel setup and labelling",
    ],
    url: "/ethernet",
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Security cameras built to handle Al Ain's heat and dust",
    highlights: [
      "Heat-rated outdoor camera housings",
      "Gate and perimeter coverage for villas",
      "Remote viewing set up on your phone",
    ],
    url: "/cctv",
  },
  {
    icon: Phone,
    title: "VOIP Solutions",
    description: "Business phone systems for Al Ain offices and shops",
    highlights: [
      "Multi-line office phone setup",
      "Cloud PBX for growing teams",
      "Number porting handled for you",
    ],
    url: "/voip",
  },
];

const faqs = [
  {
    question: "Do you offer same-day WiFi or network installation in Al Ain?",
    answer:
      "Yes, we're based in Al Ain and can usually schedule a same-day site visit for standard installations.",
  },
  {
    question: "Can outdoor CCTV cameras handle Al Ain's summer heat?",
    answer:
      "Yes, when installed with the right IP-rated housing and mounting. We cover what actually matters in our guide to outdoor CCTV in Al Ain's heat.",
  },
  {
    question: "Do you cover villa compounds outside central Al Ain?",
    answer:
      "Yes, we serve villas and businesses across Al Ain, including larger plots that need multi-point WiFi coverage.",
  },
];

export default function AlAinPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(citySchema({ city: "Al Ain", slug: "al-ain" })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4 space-x-2 text-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Al Ain, United Arab Emirates</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Technical Services in Al Ain
            </h1>
            <p className="mx-auto mb-8 text-xl leading-relaxed text-slate-600 max-w-2xl">
              We&apos;re based in Al Ain, so a technician can usually reach your villa, office,
              or shop the same day. Network cabling, fiber optic repair, WiFi setup, CCTV, and
              VOIP for homes and businesses across the city.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <Clock className="w-5 h-5 text-primary" />
              <span>Same-day call-outs across Al Ain</span>
            </div>
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
              Why Al Ain residents and businesses call us
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 mb-4">
                Al Ain&apos;s villa communities and larger plot sizes mean a standard router
                rarely covers the whole property. We plan WiFi and cabling around your actual
                layout &mdash; garden, majlis, and all &mdash; instead of a one-size-fits-all setup.
              </p>
              <p className="text-slate-700 mb-4">
                Outdoor equipment in Al Ain has to handle real heat and dust. Our CCTV and
                external cabling installs use housings and materials rated for it, so you&apos;re
                not calling us back every summer.
              </p>
              <p className="text-slate-700 mb-4">
                Being based locally means faster response &mdash; for both new installations and
                repairs. Contact us for a free consultation on your Al Ain property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-600 mb-2">Related guides:</p>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/guides/wifi-dead-zones-al-ain-villas"
                    className="text-primary hover:underline"
                  >
                    Fixing WiFi Dead Zones in Al Ain Villas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/outdoor-cctv-heat-al-ain"
                    className="text-primary hover:underline"
                  >
                    How Al Ain&apos;s Heat Affects Outdoor CCTV Equipment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
