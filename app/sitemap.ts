import { MetadataRoute } from "next";
import { blogs } from "./data/blogs";

const BASE_URL = "https://www.vedvikmachinery.com";

// IMPORTANT: these must exactly match the case-sensitive keys in
// app/solutions/[slug]/page.tsx — wrong case = "Product Not Found".
const solutionSlugs = [
  "Comipack",
  "Boato-Pack",
  "GMS",
  "Kraus",
  "HFFS",
  "Liquid-Filling",
  "PFS",
  "Bulk-Packing",
  "Secondary-Automation",
  "Inspection",
  "Checkweighers",
  "roller-unwinders",
  "slitting-machine",
  "printing-machine",
  "lamination-machine",
  "Printing",
  "xray-metal-detector",
];

// Must match keys in app/industries/[slug]/page.tsx
const industrySlugs = [
  "pharmaceuticals",
  "food-snacks",
  "beverages",
  "dairy",
  "edible-oils",
  "agrochemicals",
  "seeds",
  "personal-care",
  "detergents",
  "spices-powders",
  "pet-food",
  "chemicals",
  "bakery",
  "nutraceuticals",
  "coffee-tea",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = blogs.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const solutionUrls = solutionSlugs.map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryUrls = industrySlugs.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...solutionUrls,
    ...industryUrls,
    ...blogUrls,
  ];
}
