import type { Metadata } from "next";
import { ogMeta } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/TrackedLink";
import { PhoneCall } from "lucide-react";
import { SITE_URL, faqSchema } from "@/lib/schema";

const PATH = "/guides/network-cabling-al-ain-villas";
const DESCRIPTION =
  "Plan network cabling for an Al Ain villa: wired points room by room, CAT 6 in conduit, fibre to a majlis or annex, and what to do before the walls close.";
const PUBLISHED = "2026-11-26";
const IMAGE = "/images/network-cabling-technician.jpg";

export const metadata: Metadata = {
  title: "Network Cabling for Al Ain Villas",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: ogMeta(PATH),
};

const faqs = [
  {
    question: "Can you add network cabling to a villa that is already finished?",
    answer:
      "Usually yes. We run the cable through the roof void and bring it down to each point, using trunking where a finished wall cannot be opened. It takes more planning than a new build, so we walk through the house first.",
  },
  {
    question: "Is CAT 6 or CAT 6A better for a home?",
    answer:
      "CAT 6 is enough for most homes. It carries 1 Gbps over 100 metres and 10 Gbps over runs up to about 55 metres. CAT 6A costs more and is thicker, so we use it for links that need 10 Gbps at full distance, such as a home office with a NAS.",
  },
  {
    question: "Do I still need cables if I have a mesh WiFi system?",
    answer:
      "Yes, a cable to each mesh node keeps the system steady, because the nodes no longer use WiFi to talk to each other. TVs and desktop computers also run better on a cable than on WiFi.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Network Cabling for Al Ain Villas: A Room-by-Room Plan",
  description: DESCRIPTION,
  image: `${SITE_URL}${IMAGE}`,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Organization", name: "Technical Services" },
  publisher: { "@type": "Organization", name: "Technical Services", url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Al Ain", item: `${SITE_URL}/al-ain` },
    { "@type": "ListItem", position: 3, name: "Network Cabling for Al Ain Villas", item: `${SITE_URL}${PATH}` },
  ],
};

export default function NetworkCablingGuide() {
  return (
    <div className="min-h-screen bg-white">
      {[articleSchema, breadcrumbSchema, faqSchema(faqs)].map((s) => (
        <script
          key={s["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <section className="pt-32 pb-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Network Cabling for Al Ain Villas
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Network cabling in an Al Ain villa works best when every room has its own cable
              back to one central cupboard. Here is how we plan it, from the router to the
              majlis.
            </p>
            <p className="mt-4 text-sm text-slate-500">Updated November 2026</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container px-4 mx-auto">
          <img
            src={IMAGE}
            alt="Technician connecting ethernet cables in a network rack"
            width={1280}
            height={853}
            className="w-full max-w-3xl mx-auto rounded-lg mb-12 aspect-video object-cover"
          />

          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>The short version</h2>
            <p>
              Put the router in a central cupboard. Run solid copper CAT 6 in conduit from there
              to each room that needs a wired point. Use fibre to reach a detached majlis or
              annex, and keep every copper run under 90 metres. If the villa is still being
              built or renovated, do all of this before the plaster goes on.
            </p>

            <h2>Where the provider&apos;s job ends</h2>
            <p>
              When e&amp; or du connects fibre to a villa, they install a terminal and a router,
              usually near the entrance or in a utility room. Cabling to the other rooms is
              normally outside that job, which is why the signal is often strong in the hallway
              and weak upstairs.
            </p>
            <p>
              We start by finding a better home for the router. A central cupboard works well,
              with a patch panel and a small switch beside it. One cable joins the
              provider&apos;s terminal to the router, and every other cable in the house starts
              from that cupboard.
            </p>

            <h2>Which rooms get a wired point</h2>
            <p>
              Wire the places where a device stays in one spot and needs a steady connection.
              The majlis is the usual first choice, because a large TV and a streaming box can
              run there for hours. The home office is next, then the living room TV and any
              bedroom with a screen.
            </p>
            <p>
              Where there is any doubt, fit two points. A second point costs little during the
              install and saves a return visit. Each floor also gets a ceiling access point,
              powered through the same cable, so no extra socket is needed. Our guide to{" "}
              <Link
                href="/guides/wifi-dead-zones-al-ain-villas"
                className="text-primary hover:underline"
              >
                WiFi dead zones in Al Ain villas
              </Link>{" "}
              explains where those access points should go, and our{" "}
              <Link href="/wifi-setup" className="text-primary hover:underline">
                WiFi installation service
              </Link>{" "}
              covers the setup itself.
            </p>

            <h2>Choosing the cable and routing it through the roof</h2>
            <p>
              For villa runs we use solid copper CAT 6. It carries 1 Gbps over the full 100
              metres, which is more than a normal home needs today, and we fit CAT 6A to a home
              office with a NAS or a server that needs 10 Gbps. We avoid copper-clad aluminium
              cable. It is cheaper, but it carries less power than pure copper and gives poor
              results with cameras and access points.
            </p>
            <p>
              The roof void in an Al Ain villa gets very hot in summer. Cable laid loose on
              insulation ages faster there and is hard to replace. We run it in conduit
              instead, so the cable is protected and a new one can be pulled later without
              opening a ceiling. The{" "}
              <Link href="/ethernet" className="text-primary hover:underline">
                residential networking and ethernet cabling
              </Link>{" "}
              page lists the rest of what a home install includes.
            </p>

            <h2>Reaching the majlis, annex or outdoor room</h2>
            <p>
              A majlis inside the main house is a normal ceiling run. A detached majlis, a guest
              annex or an outdoor room is a different job. For a short distance, a UV-rated
              outdoor cable in buried conduit can work. Between buildings we prefer fibre,
              because it removes the 90 metre limit of copper and keeps the two buildings
              electrically separate. If a fibre link or a new{" "}
              <Link href="/fiber-optic" className="text-primary hover:underline">
                fiber optic installation
              </Link>{" "}
              is part of the plan, we splice and test it ourselves.
            </p>

            <h2>Plan it before the walls close</h2>
            <p>
              The cheapest time to cable a villa is before the plaster goes on. Conduit set into
              a wall costs little at that stage and a lot to add afterwards. If the house is
              new or being renovated, ask your contractor to leave an empty conduit from each
              point to the central cupboard, and call us before the walls are closed.
            </p>

            <h2>Problems we look for on site</h2>
            <ul>
              <li>A router hidden inside a metal cabinet at the far end of the house.</li>
              <li>Wall sockets with no cable behind them.</li>
              <li>Cable runs over 90 metres that drop to a slow speed.</li>
              <li>Cables that end in different places, with no patch panel and no labels.</li>
            </ul>

            <h2>What you should get at handover</h2>
            <p>
              Every cable tested and labelled at both ends, plus a simple port map showing which
              wall point connects to which port. With that on file, later changes take minutes,
              whoever makes them. Our{" "}
              <Link href="/network-installation" className="text-primary hover:underline">
                networking installation services
              </Link>{" "}
              page covers the same method for offices, shops and warehouses.
            </p>

            <h2>Questions about villa cabling</h2>
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">Planning the cabling for an Al Ain villa?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gap-2" asChild>
                <TrackedLink href="tel:+971569811332" location="guide_cabling">
                  <PhoneCall className="h-5 w-5" />
                  Call Now
                </TrackedLink>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/network-installation">See our network installation service</Link>
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              More on serving{" "}
              <Link href="/al-ain" className="text-primary underline hover:no-underline">
                Al Ain
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
