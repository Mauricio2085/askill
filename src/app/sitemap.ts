import type { MetadataRoute } from "next";

import { getSiteUrl, siteRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return siteRoutes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
