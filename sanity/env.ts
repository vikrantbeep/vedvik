export const apiVersion = "2026-01-01";

/**
 * Sanity project details.
 *
 * These are hardcoded on purpose. Neither value is a secret — the project ID
 * is embedded in the browser bundle by design, and Sanity's security comes
 * from API tokens and CORS rules, not from hiding the ID. Keeping them here
 * means the CMS works on every deploy without depending on Vercel environment
 * variables (which silently produce an empty value if marked "Sensitive").
 *
 * An environment variable still wins if one is set, so a different dataset can
 * be used locally without touching this file.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "xzv37wwr";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

/**
 * The site still falls back to the content in lib/*.ts if Sanity is ever
 * unreachable, so a CMS problem can never take the website down.
 */
export const sanityConfigured = Boolean(projectId);
