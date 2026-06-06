import { MetadataRoute } from "next";
import { blogs } from "./data/blogs";

const solutionSlugs = [
  "comipack",
  "boato-pack",
  "gms",
  "kraus",
  "hffs",
  "liquid-filling",
  "pfs",
  "bulk-packing",
  "secondary-automation",
  "inspection",
  "checkweighers",
  "roller-unwinders",
  "printing",
  "xray-metal-detector",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = blogs.map((post) => ({
    url: `https://vedvikmachinery.com/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const solutionUrls = solutionSlugs.map((slug) => ({
    url: `https://vedvikmachinery.com/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://vedvikmachinery.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: "https://vedvikmachinery.com/solutions",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://vedvikmachinery.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://vedvikmachinery.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://vedvikmachinery.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...solutionUrls,
    ...blogUrls,
  ];
}
