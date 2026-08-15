import { MetadataRoute } from "next";

const BASE_URL = "https://vedvikmachinery.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All search crawlers welcome
      { userAgent: "*", allow: "/" },
      // Explicitly allow AI search / answer-engine crawlers (generative engine optimisation)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "CCBot",
          "cohere-ai",
          "Amazonbot",
          "Bytespider",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
