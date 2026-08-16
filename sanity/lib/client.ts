import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, sanityConfigured } from "../env";

export const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // Published content is cached at the edge and revalidated by tag,
      // so the site stays fast and static while remaining editable.
      useCdn: true,
      perspective: "published",
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

/** Build an optimised image URL from a Sanity image reference. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any, width = 900, height?: number): string | null {
  if (!builder || !source) return null;
  let img = builder.image(source).width(width).auto("format").fit("crop");
  if (height) img = img.height(height);
  return img.url();
}

/**
 * Run a GROQ query, returning `fallback` if Sanity isn't configured or the
 * request fails. Content never disappears because of a CMS problem.
 */
export async function sanityFetch<T>(query: string, fallback: T, params: Record<string, unknown> = {}): Promise<T> {
  if (!client) return fallback;
  try {
    const data = await client.fetch<T>(query, params, {
      next: { revalidate: 60, tags: ["content"] },
    });
    if (data === null || data === undefined) return fallback;
    if (Array.isArray(data) && data.length === 0) return fallback;
    return data;
  } catch (err) {
    console.error("[sanity] query failed, using built-in content:", err);
    return fallback;
  }
}
