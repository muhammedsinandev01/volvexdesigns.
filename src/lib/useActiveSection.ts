"use client";

import { useEffect, useState } from "react";

/** Where in the viewport a section counts as "the one being read". */
const READING_LINE = 0.35;

/**
 * Highlights the nav item for the section the reader is currently in — the last
 * one whose top has crossed a line 35% down the viewport. `ids` must be a
 * stable (module-level) array.
 *
 * Measured on scroll rather than with IntersectionObserver: observer callbacks
 * only carry entries whose intersection *changed*, so picking a winner from a
 * single batch ignores sections that were already in view.
 */
export function useActiveSection(ids: string[]): string {
  // Starts empty so pages without these sections (e.g. /privacy) highlight nothing.
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const line = window.innerHeight * READING_LINE;

      // The section whose top sits closest above the line wins, so this holds
      // regardless of the order `ids` happens to be in.
      let current = elements[0].id;
      let closest = -Infinity;

      for (const el of elements) {
        const { top } = el.getBoundingClientRect();
        if (top <= line && top > closest) {
          closest = top;
          current = el.id;
        }
      }

      setActive(current);
    };

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame !== 0) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  return active;
}
