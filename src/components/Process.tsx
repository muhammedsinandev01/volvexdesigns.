"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/data/content";
import { EASE, VIEWPORT } from "@/lib/motion";

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="border-t border-line bg-white py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <Reveal className="max-w-2xl lg:mx-auto lg:text-center">
          <SectionLabel className="lg:text-center">Process</SectionLabel>
          <h2 className="type-h2 mt-5 text-ink">From idea to launch.</h2>
        </Reveal>

        <div className="relative mt-14 sm:mt-20">
          {/* Connecting rail — vertical on mobile */}
          <div
            aria-hidden="true"
            className="absolute left-[1.4375rem] top-3 h-[calc(100%-1.5rem)] w-px bg-line lg:hidden"
          >
            <motion.div
              className="size-full origin-top bg-gradient-to-b from-brand to-brand-light"
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 1.2, ease: EASE }}
            />
          </div>

          {/* Connecting rail — horizontal from lg up */}
          <div
            aria-hidden="true"
            className="absolute left-6 right-0 top-[1.4375rem] hidden h-px bg-line lg:block"
          >
            <motion.div
              className="size-full origin-left bg-gradient-to-r from-brand via-brand to-transparent"
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 1.3, ease: EASE }}
            />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{
                    duration: 0.6,
                    delay: reduceMotion ? 0 : 0.18 + index * 0.16,
                    ease: EASE,
                  }}
                  className="group relative flex gap-6 lg:block lg:pr-6"
                >
                  {/* Node on the rail */}
                  <div className="relative z-10 shrink-0">
                    <span className="grid size-12 place-items-center rounded-full border border-line bg-white transition-[border-color,box-shadow] duration-300 group-hover:border-brand/45 group-hover:shadow-[0_0_0_6px_rgba(0,181,182,0.08)]">
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="size-5 text-brand-deep"
                      />
                    </span>
                  </div>

                  <div className="pb-2 lg:pt-8">
                    <span className="text-xs font-medium tracking-[0.18em] text-muted-2">
                      {step.number}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold uppercase tracking-[0.06em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-[34ch] text-[0.9375rem] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
