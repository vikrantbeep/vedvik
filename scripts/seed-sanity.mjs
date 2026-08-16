/**
 * One-time import of the site's existing content into Sanity.
 *
 *   node scripts/seed-sanity.mjs
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET       (usually "production")
 *   SANITY_WRITE_TOKEN               (Sanity → API → Tokens → Editor)
 *
 * Safe to re-run: documents use fixed IDs, so it updates rather than duplicates.
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Load .env.local without adding a dependency.
try {
  const env = readFileSync(resolve(root, ".env.local"), "utf8");
  for (const line of env.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {
  /* no .env.local — rely on the shell environment */
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "\n✗ Missing config.\n" +
      "  Add NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN to .env.local first.\n"
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2026-01-01", token, useCdn: false });

/* ── Read the existing content straight out of the TS files ───────── */
function extract(file, exportName) {
  const src = readFileSync(resolve(root, file), "utf8");
  const start = src.indexOf(`export const ${exportName}`);
  if (start === -1) throw new Error(`${exportName} not found in ${file}`);
  const open = src.indexOf("[", start);
  let depth = 0;
  let end = open;
  for (let i = open; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }
  // The arrays are plain data, so evaluating the literal is safe here.
  return eval(src.slice(open, end + 1));
}

const posts = extract("lib/blog.ts", "posts");
const faqs = extract("lib/faq.ts", "faqs");

/* ── Build the documents ─────────────────────────────────────────── */
const docs = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
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
  },
  ...posts.map((p) => ({
    _id: `post-${p.slug}`,
    _type: "blogPost",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    category: p.category,
    // Stored as "12 May 2026" in code; Sanity wants ISO.
    date: new Date(p.date).toString() === "Invalid Date"
      ? new Date().toISOString().slice(0, 10)
      : new Date(p.date).toISOString().slice(0, 10),
    readTime: p.readTime,
    excerpt: p.excerpt,
    body: (p.body || []).map((s, i) => ({
      _type: "section",
      _key: `s${i}`,
      heading: s.heading,
      paragraphs: s.paragraphs,
    })),
    related: (p.related || []).map((r, i) => ({ _key: `r${i}`, label: r.label, href: r.href })),
    faqs: (p.faqs || []).map((f, i) => ({ _key: `f${i}`, q: f.q, a: f.a })),
  })),
  ...faqs.map((f, i) => ({
    _id: `faq-${i}`,
    _type: "faqItem",
    question: f.q,
    answer: f.a,
    order: i,
  })),
];

/* ── Write ───────────────────────────────────────────────────────── */
const tx = client.transaction();
for (const doc of docs) tx.createOrReplace(doc);

try {
  await tx.commit();
  console.log(`\n✓ Imported into Sanity (${dataset}):`);
  console.log(`   • 1 site settings document`);
  console.log(`   • ${posts.length} blog posts`);
  console.log(`   • ${faqs.length} FAQs`);
  console.log(`\n   Open your CMS at /studio to edit them.\n`);
} catch (err) {
  console.error("\n✗ Import failed:", err.message, "\n");
  process.exit(1);
}
