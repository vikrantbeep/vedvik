"use client";

import { BRAND_GRADIENT } from "./SiteChrome";

/**
 * Static brand gradient background (matches the homepage "DATA 01" section).
 * Drop inside a position:relative section (with overflow:hidden); keep section
 * content above it with position/zIndex.
 */
export default function AnimatedGradient({
  fallback = BRAND_GRADIENT,
}: {
  fallback?: string;
}) {
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", background: fallback }} />
  );
}
