"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQS } from "@/data/content";
import { clsx } from "@/lib/clsx";
import { EASE } from "@/lib/motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-line bg-surface py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionLabel>FAQ</SectionLabel>
                <h2 className="type-h2 mt-5 text-ink">Questions, answered.</h2>
                <p className="mt-6 max-w-[36ch] text-muted">
                  Still unsure about something?{" "}
                  <Link
                    href="/#contact"
                    className="font-medium text-brand-deep underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
                  >
                    Ask us directly
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.06}>
              <ul className="border-t border-line">
                {FAQS.map((faq, index) => {
                  const isOpen = openIndex === index;
                  const panelId = `faq-panel-${index}`;
                  const buttonId = `faq-button-${index}`;

                  return (
                    <li key={faq.question} className="border-b border-line">
                      <h3>
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-200 sm:py-6"
                        >
                          <span
                            className={clsx(
                              "text-[1.0625rem] font-medium transition-colors duration-200 sm:text-lg",
                              isOpen
                                ? "text-ink"
                                : "text-ink-2 group-hover:text-brand-deep",
                            )}
                          >
                            {faq.question}
                          </span>

                          {/* Plus that rotates into a minus */}
                          <span
                            aria-hidden="true"
                            className={clsx(
                              "relative mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border transition-colors duration-300",
                              isOpen
                                ? "border-brand/40 bg-brand-mist"
                                : "border-line bg-white group-hover:border-brand/30",
                            )}
                          >
                            <span
                              className={clsx(
                                "absolute h-px w-3.5 rounded-full transition-colors duration-300",
                                isOpen ? "bg-brand-deep" : "bg-ink",
                              )}
                            />
                            <span
                              className={clsx(
                                "absolute h-px w-3.5 rounded-full transition-[transform,background-color] duration-300",
                                isOpen
                                  ? "rotate-0 bg-brand-deep"
                                  : "rotate-90 bg-ink",
                              )}
                            />
                          </span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            key={panelId}
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            initial={
                              reduceMotion ? false : { height: 0, opacity: 0 }
                            }
                            animate={{ height: "auto", opacity: 1 }}
                            exit={
                              reduceMotion
                                ? { opacity: 0 }
                                : { height: 0, opacity: 0 }
                            }
                            transition={{ duration: 0.35, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-[62ch] pb-6 pr-10 text-[0.9375rem] leading-relaxed text-muted">
                              {faq.answer}
                            </p>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
