import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/our-services", priority: 0.9 },
  { path: "/network-installation", priority: 0.8 },
  { path: "/fiber-optic", priority: 0.8 },
  { path: "/wifi-setup", priority: 0.8 },
  { path: "/ethernet", priority: 0.8 },
  { path: "/cctv", priority: 0.8 },
  { path: "/voip", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
