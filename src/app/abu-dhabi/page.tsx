import type { Metadata } from "next";
import { ogMeta } from "@/lib/seo";
import { Wifi, Cable, Network, Server, Camera, Phone, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { citySchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Technical Services in Abu Dhabi" },
  description:
    "Network installation and troubleshooting in Abu Dhabi: cabling, fiber repair, WiFi, CCTV and VOIP for apartments, villas and offices. Fast call-outs.",
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
  openGraph: ogMeta("/abu-dhabi"),
};

const services = [
  {
    icon: Network,
    title: "Network Installation & Troubleshooting",
    description: "Structured cabling and fault-finding for apartments, offices, and towers in Abu Dhabi",
    highlights: [
      "CAT 6 runs for apartment and office fit-outs",
      "Riser and trunking work for commercial towers",
      "Fault-finding on slow, dropping or dead networks",
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
  {
    question: "Can you troubleshoot a slow or dropping network in Abu Dhabi?",
    answer:
      "Yes. We test the cables, check link speed on each port, look at WiFi channels and signal, and isolate the fault, whether it is a bad termination, a failing switch port or interference from neighboring networks. We then repair it or tell you what needs replacing.",
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
          <h2 className="sr-only">Services in Abu Dhabi</h2>
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
                need a different approach to cabling and WiFi. A setup that works in a
                Khalidiya tower won&apos;t work the same way in a Khalifa City villa, so we plan
                around the building instead of using a template.
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
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">
              Network troubleshooting in Abu Dhabi
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 mb-4">
                Most network complaints in Abu Dhabi come from a short list of causes. In towers,
                dozens of neighboring routers crowd the same WiFi channels, so a connection that
                tested fine last month slows to a crawl. In older fit-outs, badly terminated
                cable drops to 100 Mbps or loses packets. A switch port can fail, a PoE camera
                can reboot because the cable is too long, and a second router can hand out the
                same addresses and knock devices offline.
              </p>
              <p className="text-slate-700 mb-4">
                We work through it in order. First we test the cable run with a tester and check
                the link speed on the port. Then we look at the switch, the router settings and
                the WiFi channel plan. Fiber faults usually turn out to be a dirty connector or a
                tight bend, which we clean or re-terminate. You get a plain answer on what was
                wrong and what fixed it.
              </p>
              <p className="text-slate-700 mb-4">
                Troubleshooting visits cover homes in Khalifa City and Khalidiya, offices on Abu
                Dhabi island, and warehouse units in Mussafah. If the network is too old
                to repair sensibly, we quote a clean re-cable instead of patching it again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
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
