import type { MetadataRoute } from "next";

import { siteProfile } from "@/src/content/siteSettings";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteProfile.domain}/sitemap.xml`,
    host: siteProfile.domain,
  };
}
