export const SITE_URL = "https://www.technicalservices.ae";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Technical Services",
  description:
    "Expert network cabling & fiber optic installation services in Al Ain & Abu Dhabi",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  // Service-area business: no public street address. Google's local ranking
  // for SABs relies on areaServed, not a physical storefront address.
  // Al Ain listed first — current primary market — with UAE-wide coverage.
  areaServed: [
    { "@type": "City", name: "Al Ain" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  priceRange: "$$",
  telephone: "+971569811332",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technical Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Network Installation",
          description: "Professional network cabling and infrastructure setup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fiber Optic Solutions",
          description: "Expert fiber optic installations and repairs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WiFi Setup",
          description: "Seamless wireless solutions for optimal coverage",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ethernet & Home Networking",
          description: "Complete home networking solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CCTV Installation",
          description: "Professional security camera solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "VOIP Solutions",
          description: "Advanced voice over IP telephony systems",
        },
      },
    ],
  },
};

export function citySchema({
  city,
  slug,
}: {
  city: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Technical Services - ${city}`,
    description: `Network installation, fiber optic, WiFi, CCTV, and VOIP services in ${city}, UAE.`,
    url: `${SITE_URL}/${slug}`,
    telephone: "+971569811332",
    priceRange: "$$",
    areaServed: { "@type": "City", name: city },
    parentOrganization: {
      "@type": "LocalBusiness",
      name: "Technical Services",
      url: SITE_URL,
    },
    hasOfferCatalog: localBusinessSchema.hasOfferCatalog,
  };
}

export function serviceSchema({
  name,
  description,
  serviceType,
}: {
  name: string;
  description: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    provider: {
      "@type": "LocalBusiness",
      name: "Technical Services",
      url: SITE_URL,
      telephone: "+971569811332",
    },
    serviceType,
    areaServed: [
      { "@type": "City", name: "Al Ain" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    description,
  };
}
