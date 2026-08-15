import type { NextConfig } from "next";

/**
 * URL scheme: all slugs are lowercase, hyphenated and spelled out in full
 * (e.g. /solutions/horizontal-form-fill-seal, not /solutions/HFFS).
 *
 * The previous vedvikmachinery.com used mixed-case, abbreviated and
 * brand-name slugs. Every one of those is 301-redirected here so indexed URLs,
 * backlinks and ranking equity carry over to the new address.
 *
 * NOTE: Next matches `source` case-insensitively. Any old slug that differs
 * from its new slug ONLY by case (e.g. Liquid-Filling → liquid-filling) must
 * NOT be listed here, or the rule would match the new URL too and loop. Those
 * are handled by the case-insensitive canonical redirect in
 * app/solutions/[slug]/page.tsx.
 */
const redirects = async () => [
  // ── Old live solution URLs → new full-form slugs ──
  { source: "/solutions/HFFS", destination: "/solutions/horizontal-form-fill-seal", permanent: true },
  { source: "/solutions/PFS", destination: "/solutions/pick-fill-seal", permanent: true },
  { source: "/solutions/Comipack", destination: "/solutions/twist-tying", permanent: true },
  { source: "/solutions/Boato-Pack", destination: "/solutions/stick-packing", permanent: true },
  { source: "/solutions/GMS", destination: "/solutions/feeding-systems", permanent: true },
  { source: "/solutions/Kraus", destination: "/solutions/friction-feeders", permanent: true },
  { source: "/solutions/product-handling", destination: "/solutions/friction-feeders", permanent: true },
  { source: "/solutions/Secondary-Automation", destination: "/solutions/secondary-packaging", permanent: true },
  { source: "/solutions/Inspection", destination: "/solutions/vision-inspection", permanent: true },
  { source: "/solutions/xray-metal-detector", destination: "/solutions/x-ray-and-metal-detection", permanent: true },
  { source: "/solutions/x-ray-metal-detection", destination: "/solutions/x-ray-and-metal-detection", permanent: true },
  { source: "/solutions/Printing", destination: "/solutions/printers-coders", permanent: true },
  { source: "/solutions/roller-unwinders", destination: "/solutions/slitting-lamination", permanent: true },
  // Three separate film-processing pages are now one page.
  { source: "/solutions/slitting-machine", destination: "/solutions/slitting-lamination", permanent: true },
  { source: "/solutions/printing-machine", destination: "/solutions/slitting-lamination", permanent: true },
  { source: "/solutions/lamination-machine", destination: "/solutions/slitting-lamination", permanent: true },

  // (Liquid-Filling / Bulk-Packing / Checkweighers differ only by case — see note above.)

  // ── Old live industry URLs → new full-form slugs ──
  { source: "/industries/seeds", destination: "/industries/seeds-grains", permanent: true },
  { source: "/industries/chemicals", destination: "/industries/industrial-chemicals", permanent: true },

  // ── Blog: keep the previously indexed slugs working ──
  { source: "/blog/choosing-the-right-packaging-machine", destination: "/blog/how-to-choose-the-right-packaging-machine", permanent: true },
  { source: "/blog/vffs-vs-hffs", destination: "/blog/vffs-vs-hffs-packaging-machines", permanent: true },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  redirects,
};

export default nextConfig;
