"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

type PresetType = "blur" | "fade-in-blur" | "scale" | "fade" | "slide";
type PerType = "word" | "char" | "line";

const presetVariants: Record<PresetType, Variants> = {
  blur: { hidden: { opacity: 0, filter: "blur(12px)" }, visible: { opacity: 1, filter: "blur(0px)" } },
  "fade-in-blur": { hidden: { opacity: 0, y: 20, filter: "blur(12px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } },
  scale: { hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  slide: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
};

export function TextEffect({
  children,
  per = "word",
  as = "p",
  preset = "fade-in-blur",
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  className,
  style,
}: {
  children: string;
  per?: PerType;
  as?: keyof React.JSX.IntrinsicElements;
  preset?: PresetType;
  delay?: number;
  speedReveal?: number;
  speedSegment?: number;
  trigger?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const segments =
    per === "char" ? Array.from(children) : per === "line" ? children.split("\n") : children.split(/(\s+)/);

  const itemVariants = presetVariants[preset];
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 / speedReveal, delayChildren: delay } },
    exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  };

  // motion proxy is loosely typed for a dynamic tag.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = (motion as any)[as] as React.ElementType;

  // The element is ALWAYS rendered (never gated behind `trigger`) so the heading text
  // exists in the server-rendered HTML for search engines and non-JS AI crawlers.
  // `trigger` only decides whether the animation has played.
  return (
    <MotionTag
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
    >
      {segments.map((seg, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          transition={{ duration: 0.5 / speedSegment, ease: [0.2, 0.7, 0.2, 1] }}
          style={{ display: per === "line" ? "block" : "inline-block", whiteSpace: per === "word" ? "pre" : "normal", willChange: "opacity, filter, transform" }}
        >
          {seg}
        </motion.span>
      ))}
    </MotionTag>
  );
}
