"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll-in animation for body text: a simple lift-up fade using a
 * CSS transition on opacity/transform (GPU-composited — no layout work, no JS
 * animation loop). The observer disconnects after firing once, so the cost
 * after reveal is zero.
 */
export function ScrollRise({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: seen ? 1 : 0,
        transform: seen ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${delay}s, transform 1s cubic-bezier(.2,.7,.2,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
