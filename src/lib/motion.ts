import type { Variants } from "framer-motion";

/** Shared easing — a calm, premium ease-out curve. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const VIEWPORT = { once: true, margin: "0px 0px -90px 0px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const staggerParent = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
