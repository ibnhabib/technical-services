import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How Al Ain's Heat Affects Outdoor CCTV Equipment",
  description:
    "Why outdoor security cameras fail faster in Al Ain's heat and dust, and what housing, ventilation, and IP ratings actually prevent it.",
  alternates: { canonical: "/guides/outdoor-cctv-heat-al-ain" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Al Ain's Heat Affects Outdoor CCTV Equipment",
  description:
    "Why outdoor security cameras fail faster in Al Ain's heat and dust, and what housing, ventilation, and IP ratings actually prevent it.",
  author: { "@type": "Organization", name: "Technical Services" },
  publisher: { "@type": "Organization", name: "Technical Services", url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}/guides/outdoor-cctv-heat-al-ain`,
};

export default function OutdoorCctvHeatGuide() {
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
              How Al Ain&apos;s Heat Affects Outdoor CCTV Equipment
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Cameras rated for temperate climates fail years earlier here. Here&apos;s what to
              check before you install.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container px-4 mx-auto">
          <img
            src="https://images.pexels.com/photos/11790823/pexels-photo-11790823.jpeg"
            alt="Outdoor security cameras mounted on the corner of a building"
            className="w-full max-w-3xl mx-auto rounded-lg mb-12 aspect-video object-cover"
          />

          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>What Al Ain's climate does to outdoor equipment</h2>
            <p>
              Al Ain regularly sees surface and enclosure temperatures well above what most
              consumer CCTV equipment is rated for in direct summer sun, plus fine dust that
              works its way into housings not properly sealed. Two failure modes show up most
              often: internal components overheating inside a sealed housing with no
              ventilation, and dust ingress through seams and cable entry points that
              weren&apos;t sealed correctly during install.
            </p>
            <p>
              A camera that would run for 5&ndash;7 years in a milder climate can fail in 18
              months here if the housing and mounting weren&apos;t chosen for the conditions.
            </p>

            <h2>What actually prevents it</h2>
            <p>
              <strong>IP rating matters more here than the camera&apos;s resolution.</strong> An
              IP66 or IP67-rated housing (dust-tight, protected against strong water jets) is
              the baseline for any camera mounted outdoors in Al Ain, not an upgrade option.
            </p>
            <p>
              <strong>Shaded or ventilated mounting</strong> &mdash; under an eave, behind a
              sunshade, or with a housing that has passive ventilation &mdash; reduces the
              internal temperature the electronics actually experience, which is what
              determines lifespan, not the ambient air temperature alone.
            </p>
            <p>
              <strong>Cable entry sealing</strong> is where most dust ingress actually happens,
              not through the camera body itself. Proper glanding and sealant at every cable
              entry point matters as much as the housing rating on the box.
            </p>

            <h2>Maintenance that's worth doing</h2>
            <p>
              An annual check of seals, mounting hardware, and housing integrity before peak
              summer catches problems while they&apos;re still cheap to fix &mdash; a
              re-sealed gland is a five-minute job; a camera that&apos;s already failed from
              dust ingress isn&apos;t.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">
              Installing or replacing outdoor CCTV in Al Ain?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gap-2" asChild>
                <a href="tel:+971569811332">
                  <PhoneCall className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/cctv">See our CCTV installation service</Link>
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
