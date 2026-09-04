"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT_PIPELINE } from "@/data/content";
import { EASE, VIEWPORT } from "@/lib/motion";

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="border-t border-line bg-white py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel>About Volvex Designs</SectionLabel>
              <h2 className="type-h2 mt-5 max-w-[16ch] text-ink">
                Built by people who&apos;ve shipped before.
              </h2>
              <p className="type-lead mt-7 max-w-[46ch] text-muted">
                Most companies need multiple vendors to design, build, manage
                systems and market a product. Volvex Designs brings those
                capabilities together in one team.
              </p>

              <dl className="mt-10 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                <div className="bg-white p-5">
                  <dt className="text-xs font-medium tracking-[0.16em] text-muted-2 uppercase">
                    Vendors
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-ink">One</dd>
                </div>
                <div className="bg-white p-5">
                  <dt className="text-xs font-medium tracking-[0.16em] text-muted-2 uppercase">
                    Handoffs
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-brand-deep">
                    None
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Capability pipeline */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-[1.4375rem] top-6 h-[calc(100%-3rem)] w-px bg-line"
              >
                <motion.div
                  className="size-full origin-top bg-gradient-to-b from-brand to-brand-light"
                  initial={reduceMotion ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 1.1, ease: EASE }}
                />
              </div>

              <ol className="space-y-3">
                {ABOUT_PIPELINE.map((stage, index) => (
                  <motion.li
                    key={stage.label}
                    initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEWPORT}
                    transition={{
                      duration: 0.55,
                      delay: reduceMotion ? 0 : 0.15 + index * 0.14,
                      ease: EASE,
                    }}
                    className="group relative flex items-center gap-5"
                  >
                    <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-line bg-white text-[0.8125rem] font-semibold text-brand-deep transition-[border-color,box-shadow] duration-300 group-hover:border-brand/45 group-hover:shadow-[0_0_0_6px_rgba(0,181,182,0.08)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 rounded-2xl border border-line bg-white px-5 py-4 transition-[border-color,background-color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:border-brand/30 group-hover:bg-brand-mist">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                        {stage.label}
                      </h3>
                      <p className="mt-1 text-[0.875rem] leading-relaxed text-muted">
                        {stage.detail}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
