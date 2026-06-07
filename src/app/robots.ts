import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_*"],
      },
    ],
    sitemap: "https://tech.moresityholdings.com.np/sitemap.xml",
  };
}
