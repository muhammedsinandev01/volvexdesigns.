"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Parsed {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
}

/** Splits "25+" into 25 and "+", "100%" into 100 and "%", "₹1.5Cr" into 1.5 and "Cr". */
function parseValue(value: string): Parsed | null {
  const match = value.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  const target = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;

  const decimals = digits.includes(".") ? digits.split(".")[1].length : 0;
  return { prefix, target, suffix, decimals };
}

/** Matches the site's EASE curve closely enough for a number ticking up. */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Counts a stat up from zero the first time it scrolls into view. Non-numeric
 * values render as-is, and reduced-motion users get the final number outright.
 */
export function CountUp({
  value,
  className,
  duration = 1600,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const parsed = parseValue(value);
  const target = parsed?.target ?? 0;
  const decimals = parsed?.decimals ?? 0;

  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -90px 0px" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setCount(target);
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / duration, 1);
      setCount(target * easeOut(progress));

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, target, duration]);

  if (!parsed) return <p className={className}>{value}</p>;

  const shown = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <p ref={ref} className={className}>
      {/* The ticking number is decorative — screen readers get the final value. */}
      <span aria-hidden="true">
        {parsed.prefix}
        {shown}
        {parsed.suffix}
      </span>
      <span className="sr-only">{value}</span>
    </p>
  );
}
