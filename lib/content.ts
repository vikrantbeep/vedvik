import { sanityFetch, urlFor } from "@/sanity/lib/client";
import { posts as fallbackPosts, type BlogPost } from "./blog";
import { faqs as fallbackFaqs } from "./faq";

/* ────────────────────────────────────────────────────────────────
   Content layer.

   Every getter reads from Sanity when it's configured, and falls back to
   the content committed in lib/*.ts otherwise. That means:
     • the site works before the CMS is set up,
     • it keeps working if Sanity is ever unreachable,
     • and editors' changes appear within a minute once it is.
   ──────────────────────────────────────────────────────────────── */

/* ── Site settings ─────────────────────────────────────────────── */

export type SiteSettings = {
  email: string;
  phone: string;
  phoneLink: string;
  addressLine1: string;
  addressLine2: string;
  mapsQuery: string;
  linkedin: string;
  youtube: string;
  footerBlurb: string;
};

export const defaultSettings: SiteSettings = {
  email: "vikrant@vedvikmachinery.com",
  phone: "+91 81558 92080",
  phoneLink: "+918155892080",
  addressLine1: "9, Siddhi Vinayak Industrial Estate",
  addressLine2: "Bakrol, 382210 - Ahmedabad, Gujarat, India",
  mapsQuery:
    "Vedvik Machinery, 9, Siddhi Vinayak Industrial Estate, Bakrol, 382210 - Ahmedabad, Gujarat, India",
  linkedin: "https://www.linkedin.com/company/vedvik-machinery-india/",
  youtube: "https://www.youtube.com/@Vedvik_Machinery",
  footerBlurb:
    "Packaging machinery manufacturer in Ahmedabad, India. Advanced packaging and inspection systems for FMCG and pharmaceutical lines — backed by local support.",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await sanityFetch<Partial<SiteSettings> | null>(
    `*[_type == "siteSettings"][0]{
      email, phone, phoneLink, addressLine1, addressLine2,
      mapsQuery, linkedin, youtube, footerBlurb
    }`,
    null
  );
  // Merge so a half-filled document still renders correctly.
  return { ...defaultSettings, ...(data ?? {}) };
}

/* ── Blog ──────────────────────────────────────────────────────── */

export async function getPosts(): Promise<BlogPost[]> {
  type Row = Omit<BlogPost, "slug"> & { slug: string; coverImage?: unknown };
  const rows = await sanityFetch<Row[]>(
    `*[_type == "blogPost" && defined(slug.current)] | order(date desc){
      "slug": slug.current, title, category, date, readTime, excerpt,
      coverImage, body[]{heading, paragraphs}, related[]{label, href}, faqs[]{q, a}
    }`,
    []
  );
  if (!rows.length) return fallbackPosts;
  return rows.map((r) => ({
    ...r,
    body: r.body ?? [],
    related: r.related ?? [],
    faqs: r.faqs ?? [],
    image: urlFor(r.coverImage, 900, 600) ?? undefined,
  })) as BlogPost[];
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  const all = await getPosts();
  return all.find((p) => p.slug === slug);
}

export async function getPostSlugs(): Promise<string[]> {
  const all = await getPosts();
  return all.map((p) => p.slug);
}

/**
 * Articles to show under a post.
 *
 * Prefers posts in the same category (most likely to be genuinely relevant),
 * then fills any remaining slots with the newest other articles — so the
 * section is never half-empty or missing on a thin category.
 */
export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  const all = await getPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);

  const others = all.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);

  return [...sameCategory, ...rest].slice(0, limit);
}

/* ── FAQs (home page) ──────────────────────────────────────────── */

export type Faq = { q: string; a: string };

export async function getFaqs(): Promise<Faq[]> {
  const rows = await sanityFetch<{ q: string; a: string }[]>(
    `*[_type == "faqItem"] | order(order asc, _createdAt asc){"q": question, "a": answer}`,
    []
  );
  return rows.length ? rows : fallbackFaqs;
}
