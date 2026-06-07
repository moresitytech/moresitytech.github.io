import { MetadataRoute } from "next";

const BASE_URL = "https://tech.moresityholdings.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified: lastmod, changeFrequency: "weekly", priority: 1.0 },
    {
      url: `${BASE_URL}/services`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${BASE_URL}/about`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: lastmod, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${BASE_URL}/faq`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.7 },
  ];
}
