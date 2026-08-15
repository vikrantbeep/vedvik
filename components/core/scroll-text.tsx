"use client";

import React, { useEffect, useRef, useState } from "react";
import { TextEffect } from "./text-effect";

/**
 * Standard heading text animation (per-word fade-in-blur, same as the hero
 * headlines), triggered when the heading scrolls into view.
 *
 * The heading element renders server-side with its real text, so search engines
 * and non-JS crawlers always see the content and the layout never shifts — the
 * scroll trigger only controls when the animation plays.
 */
export function ScrollText({
  children,
  as = "h2",
  style,
  delay = 0,
}: {
  children: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        }),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <TextEffect
        as={as}
        per="word"
        preset="fade-in-blur"
        trigger={inView}
        delay={delay}
        speedReveal={1.1}
        speedSegment={0.3}
        style={style}
      >
        {children}
      </TextEffect>
    </div>
  );
}
