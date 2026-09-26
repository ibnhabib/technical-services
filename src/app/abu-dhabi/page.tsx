import type { Metadata } from "next";
import { Wifi, Cable, Network, Server, Camera, Phone, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { citySchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Technical Services in Abu Dhabi - Network, WiFi, CCTV & Fiber Installation",
  description:
    "Network cabling, fiber optic repair, WiFi setup, CCTV installation, and VOIP services for homes, offices, and apartments across Abu Dhabi. Fast, professional call-outs.",
  keywords: [
    "technical services abu dhabi",
    "network installation abu dhabi",
    "wifi installation abu dhabi",
    "cctv installation abu dhabi",
    "wireless network installation abu dhabi",
    "fiber optic abu dhabi",
    "cabling services abu dhabi",
  ],
  alternates: { canonical: "/abu-dhabi" },
};

const services = [
  {
    icon: Network,
    title: "Network Installation",
    description: "Structured cabling for apartments, offices, and towers in Abu Dhabi",
    highlights: [
      "CAT 6 runs for apartment and office fit-outs",
      "Riser and trunking work for commercial towers",
      "Clean, labelled patch panel installs",
    ],
    url: "/network-installation",
  },
  {
    icon: Cable,
    title: "Fiber Optic Repair & Installation",
    description: "Fiber splicing and repair across Abu Dhabi's fiber network",
    highlights: [
      "In-building fiber terminations",
      "Fault-finding on dropped fiber connections",
      "New office and residential fiber setup",
    ],
    url: "/fiber-optic",
  },
  {
    icon: Wifi,
    title: "WiFi & Networking Setup",
    description: "Reliable WiFi coverage tuned for Abu Dhabi apartments and offices",
    highlights: [
      "Coverage planning for high-rise units",
      "Mesh setups for multi-room offices",
      "Interference fixes in dense buildings",
    ],
    url: "/wifi-setup",
  },
  {
    icon: Server,
    title: "Ethernet & Home Networking",
    description: "Wired networking for consistent speeds in every room",
    highlights: [
      "In-wall ethernet for apartments and villas",
      "Home office and smart TV wiring",
      "Structured cabling for new fit-outs",
    ],
    url: "/ethernet",
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Security camera systems for Abu Dhabi homes and businesses",
    highlights: [
      "Entrance and parking coverage for towers",
      "Retail and office CCTV systems",
      "Remote viewing set up on your phone",
    ],
    url: "/cctv",
  },
  {
    icon: Phone,
    title: "VOIP Solutions",
    description: "Business phone systems for Abu Dhabi offices",
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
    question: "Do you install network cabling in Abu Dhabi apartments and towers?",
    answer:
      "Yes, including riser and trunking work for commercial towers and in-unit CAT 6 cabling for apartment fit-outs.",
  },
  {
    question: "Can you fix WiFi interference in high-rise buildings?",
    answer:
      "Yes, dense buildings often have overlapping WiFi networks from neighboring units. We plan channel selection and access point placement around this.",
  },
  {
    question: "Do you work around office hours for business installations?",
    answer:
      "Yes, we schedule CCTV and network installs around your operating hours and building management rules to avoid disrupting your business day.",
  },
];

export default function AbuDhabiPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(citySchema({ city: "Abu Dhabi", slug: "abu-dhabi" })),
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
              <span className="font-medium">Abu Dhabi, United Arab Emirates</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Technical Services in Abu Dhabi
            </h1>
            <p className="mx-auto mb-8 text-xl leading-relaxed text-slate-600 max-w-2xl">
              Network cabling, fiber optic repair, WiFi setup, CCTV, and VOIP for apartments,
              villas, and offices across Abu Dhabi. Professional installs, fast call-outs.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <Clock className="w-5 h-5 text-primary" />
              <span>Call-outs across Abu Dhabi</span>
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
              Why Abu Dhabi residents and businesses call us
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 mb-4">
                Abu Dhabi&apos;s mix of high-rise apartments, villas, and commercial towers each
                need a different approach to cabling and WiFi &mdash; a setup that works in a
                Khalidiya tower won&apos;t work the same way in a Khalifa City villa. We plan
                around the building, not a generic template.
              </p>
              <p className="text-slate-700 mb-4">
                For offices and retail units, we work around your operating hours and building
                management rules, so installs and CCTV work don&apos;t disrupt your business day.
              </p>
              <p className="text-slate-700 mb-4">
                Contact us for a free consultation on your Abu Dhabi property, home, or office.
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
          </div>
        </div>
      </section>
    </div>
  );
}
