"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerParent, VIEWPORT } from "@/lib/motion";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

/** Parent that reveals its <StaggerItem> children one after another. */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={staggerParent(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
