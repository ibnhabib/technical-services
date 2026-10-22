export const ogMeta = (path: string) => ({
  type: "website" as const,
  siteName: "Technical Services",
  url: path,
  images: [{ url: "/og-image.jpg" }],
});
