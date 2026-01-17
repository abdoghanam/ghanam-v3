import type { MetadataRoute } from "next";
import { PROPERTIES } from "@/content/properties";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl().replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/properties",
    "/services",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const propertyRoutes = PROPERTIES.map((p) => ({
    url: `${base}/properties/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...propertyRoutes];
}
