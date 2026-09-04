"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS } from "@/data/site";
import { clsx } from "@/lib/clsx";
import { EASE } from "@/lib/motion";
import { useActiveSection } from "@/lib/useActiveSection";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scrolling and allow Escape to dismiss the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Resizing up to desktop should never leave the mobile panel stranded open.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (query.matches) setMenuOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full border-b transition-[background-color,border-color] duration-300",
        scrolled || menuOpen
          ? "border-line bg-white/85 backdrop-blur-xl"
          : "border-transparent bg-white",
      )}
    >
      <Container>
        <div className="relative flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/#home"
            aria-label="Volvex Designs — back to top"
            className="shrink-0 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            <Logo className="h-6 sm:h-7" priority />
          </Link>

          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
          >
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={clsx(
                        "relative block rounded-lg px-3.5 py-2 text-[0.9375rem] transition-colors duration-200",
                        isActive ? "text-ink" : "text-muted hover:text-ink",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={clsx(
                          "absolute inset-x-3.5 bottom-0.5 h-px origin-center bg-brand transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wrapper handles the breakpoint so Button's own display class wins. */}
            <div className="hidden sm:block">
              <Button href="/#contact" withArrow onClick={() => setMenuOpen(false)}>
                Start a Project
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="-mr-1.5 grid size-11 place-items-center rounded-xl text-ink transition-colors hover:bg-surface lg:hidden"
            >
              <span aria-hidden="true" className="relative block size-5">
                <span
                  className={clsx(
                    "absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300",
                    menuOpen ? "top-[9px] rotate-45" : "top-[5px] rotate-0",
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300",
                    menuOpen ? "top-[9px] -rotate-45" : "top-[13px] rotate-0",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: EASE }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <Container>
              <nav aria-label="Mobile" className="py-6">
                <ul className="flex flex-col">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: reduceMotion ? 0 : 0.06 + index * 0.045,
                        ease: EASE,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={clsx(
                          "flex items-center justify-between border-b border-line-2 py-3.5 text-lg font-medium transition-colors",
                          activeSection === item.id
                            ? "text-brand-deep"
                            : "text-ink hover:text-brand-deep",
                        )}
                      >
                        {item.label}
                        {activeSection === item.id ? (
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-brand"
                          />
                        ) : null}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  href="/#contact"
                  withArrow
                  size="lg"
                  className="mt-6 w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Start a Project
                </Button>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
