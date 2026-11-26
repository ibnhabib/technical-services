import type { Metadata } from "next";
import { ogMeta } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/TrackedLink";
import { PhoneCall } from "lucide-react";
import { SITE_URL } from "@/lib/schema";

const DESCRIPTION =
  "How to plan network cabling in an Al Ain villa: wired points room by room, CAT 6 in conduit, links to a majlis or annex, and what to do before walls close.";

export const metadata: Metadata = {
  title: "Network Cabling for Al Ain Villas",
  description: DESCRIPTION,
  alternates: { canonical: "/guides/network-cabling-al-ain-villas" },
  openGraph: ogMeta("/guides/network-cabling-al-ain-villas"),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Network Cabling for Al Ain Villas: A Room-by-Room Plan",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Technical Services" },
  publisher: { "@type": "Organization", name: "Technical Services", url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}/guides/network-cabling-al-ain-villas`,
};

export default function NetworkCablingGuide() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="pt-32 pb-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Network Cabling for Al Ain Villas
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              A room-by-room plan for wiring a villa: which rooms get a cable, which cable to
              use, and how to reach the majlis or annex.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Where the provider&apos;s job ends</h2>
            <p>
              When e&amp; or du connects fibre to a villa, they install a terminal and a router,
              usually near the entrance or in a utility room. Cabling to the other rooms is
              normally outside that job. That is why so many villas have a strong signal in the
              hallway and a weak one upstairs.
            </p>
            <p>
              We start by choosing a better home for the router. A central cupboard works well,
              with a patch panel and a small switch beside it. One cable joins the provider&apos;s
              terminal to the router, and every other cable in the house starts from that
              cupboard.
            </p>

            <h2>Which rooms get a wired point</h2>
            <p>
              Wire the places where a device stays in one spot and needs a steady connection.
              The majlis is the usual first choice, because a large TV and a streaming box can
              run there for hours. The home office is next, then the living room TV and any
              bedroom with a screen.
            </p>
            <p>
              Fit two points where there is any doubt. A second point costs little during the
              install and saves a return visit. Each floor also gets a ceiling access point,
              powered through the same cable, so no extra socket is needed. Our guide to{" "}
              <Link
                href="/guides/wifi-dead-zones-al-ain-villas"
                className="text-primary hover:underline"
              >
                WiFi dead zones in Al Ain villas
              </Link>{" "}
              explains how those access points should be placed.
            </p>

            <h2>Choosing the cable and routing it through the roof</h2>
            <p>
              For villa runs we use solid copper CAT 6. It carries 1 Gbps over the full 100
              metres, which is more than a normal home needs today. We use CAT 6A for a home
              office with a NAS or a server that needs 10 Gbps. Cheap copper-clad aluminium
              cable is a false saving, because it carries less power and fails more often with
              cameras and access points.
            </p>
            <p>
              In Al Ain the roof void gets very hot in summer. Cable laid loose on insulation
              ages faster and is hard to replace. We run it in conduit instead, so the cable is
              protected and a new one can be pulled later without opening a ceiling. The{" "}
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
              electrically separate.
            </p>

            <h2>Plan it before the walls close</h2>
            <p>
              The cheapest time to cable a villa is before the plaster goes on. Conduit set into
              a wall costs little at that stage and a lot to add afterwards. If the house is
              new or being renovated, ask your contractor to leave an empty conduit from each
              point to the central cupboard, and call us before the walls are closed.
            </p>

            <h2>Mistakes we fix most often</h2>
            <ul>
              <li>A router hidden inside a metal cabinet at the far end of the house.</li>
              <li>Wall sockets with no cable behind them.</li>
              <li>Cable runs over 90 metres that drop to a slow speed.</li>
              <li>Cables that end in different places, with no panel and no labels.</li>
            </ul>

            <h2>What you should get at handover</h2>
            <p>
              Every cable tested, labelled at both ends, and a simple port map showing which
              wall point connects to which port. With that on file, later changes take minutes,
              whoever makes them. Our{" "}
              <Link href="/network-installation" className="text-primary hover:underline">
                networking installation services
              </Link>{" "}
              page covers the same method for offices, shops and warehouses.
            </p>
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
              <Link href="/al-ain" className="text-primary hover:underline">
                Al Ain
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
