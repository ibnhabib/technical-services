import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { AnalyticsLoader } from "@/components/AnalyticsLoader";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { localBusinessSchema, SITE_URL } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Technical Services - Network Installation & WiFi Setup in Al Ain & Abu Dhabi",
    template: "%s | Technical Services",
  },
  description:
    "Professional network installation, fiber optic, WiFi setup, ethernet, CCTV, and VOIP services in Al Ain & Abu Dhabi. Expert technical solutions for homes and businesses.",
  keywords: [
    "network cabling",
    "CAT 6 cable installation",
    "internet cable installation",
    "wifi installation",
    "fiber optic",
    "CCTV",
    "VOIP",
    "Al Ain",
    "Abu Dhabi",
  ],
  openGraph: {
    type: "website",
    siteName: "Technical Services",
    images: [{ url: "/og-image.jpg" }],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AnalyticsLoader />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ9VZMR7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <TooltipProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
