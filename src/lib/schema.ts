export const SITE_URL = "https://www.technicalservices.ae";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Technical Services",
  description:
    "Expert network cabling & fiber optic installation services in Al Ain & Abu Dhabi",
  image: `${SITE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Abu Dhabi",
    addressCountry: "UAE",
  },
  areaServed: [
    { "@type": "City", name: "Al Ain" },
    { "@type": "City", name: "Abu Dhabi" },
  ],
  priceRange: "$$",
  telephone: "+971569811332",
  sameAs: [
    "https://www.facebook.com/technicalservices",
    "https://www.instagram.com/technicalservices",
  ],
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
      address: {
        "@type": "PostalAddress",
        addressLocality: "Al Ain",
        addressRegion: "Abu Dhabi",
        addressCountry: "UAE",
      },
    },
    serviceType,
    areaServed: ["Al Ain", "Abu Dhabi", "UAE"],
    description,
  };
}
