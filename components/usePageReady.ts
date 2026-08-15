"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the page has mounted, so entrance animations start
 * immediately on load.
 *
 * The site previously gated these animations behind a full-screen loading
 * overlay, which delayed first paint and hurt Core Web Vitals / SEO. The
 * overlay is gone; we now flip to "ready" on the next animation frame, which
 * is enough for the CSS transitions to run from their hidden start state.
 */
export function usePageReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return ready;
}
