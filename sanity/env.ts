export const apiVersion = "2026-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

/**
 * The site works with or without Sanity configured.
 *
 * Until a project ID is set in the environment, every content helper falls
 * back to the built-in content in lib/*.ts, so the live site can never break
 * because of a CMS misconfiguration.
 */
export const sanityConfigured = Boolean(projectId);
