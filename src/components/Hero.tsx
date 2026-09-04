"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EASE } from "@/lib/motion";

const CAPABILITIES = [
  "Web Apps",
  "Websites",
  "Landing Pages",
  "Business Systems",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px]"
      >
        <div className="absolute -right-32 -top-48 size-[680px] rounded-full bg-brand-mist blur-3xl" />
      </div>

      <Container>
        <div className="grid gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28 lg:pt-20">
          <div className="lg:col-span-6">
            <motion.p {...rise(0.05)} className="type-eyebrow text-brand-deep">
              Digital Products <span className="text-brand/50">•</span> Business
              Systems <span className="text-brand/50">•</span> Growth
            </motion.p>

            <motion.h1
              {...rise(0.14)}
              className="type-display mt-6 max-w-[18ch] text-ink"
            >
              We build the <span className="text-brand">software</span> your
              business runs on.
            </motion.h1>

            <motion.p {...rise(0.24)} className="type-lead mt-7 max-w-[38rem] text-muted">
              Volvex Designs plans, builds, and grows digital products, business
              systems, and mobile apps — all under one roof.
            </motion.p>

            <motion.div
              {...rise(0.34)}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="/#contact" size="lg" withArrow>
                Start a Project
              </Button>
              <Button href="/#work" size="lg" variant="secondary" withArrow>
                See Our Work
              </Button>
            </motion.div>

            <motion.div
              {...rise(0.44)}
              className="mt-9 border-t border-line pt-5"
            >
              <ul className="flex flex-wrap items-center gap-y-2 text-[0.8125rem] text-muted">
                {CAPABILITIES.map((item, index) => (
                  <li key={item} className="flex items-center">
                    {item}
                    {/* Separator trails the item so it never starts a wrapped line */}
                    {index < CAPABILITIES.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="mx-3 size-1 rounded-full bg-brand/45 sm:mx-4"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="lg:col-span-6"
          >
            {/* Transparent cutout — no card frame, it floats on the section. */}
            <Image
              src="/images/img/hero-dashboard.png"
              alt="The Volvex Designs project dashboard shown on a laptop"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="h-auto w-full drop-shadow-[0_30px_50px_rgba(11,18,21,0.22)]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
