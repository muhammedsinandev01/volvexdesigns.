"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CONTACT } from "@/data/site";
import { EASE, VIEWPORT } from "@/lib/motion";

export function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Photographic backdrop — the scrim keeps the white copy readable */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/img/relation.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_18%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,18,21,0.94)_0%,rgba(11,18,21,0.90)_45%,rgba(11,18,21,0.82)_100%)] lg:bg-[linear-gradient(to_right,rgba(11,18,21,0.93)_0%,rgba(11,18,21,0.80)_34%,rgba(11,18,21,0.34)_62%,rgba(11,18,21,0.12)_100%)]" />
      </div>

      <Container>
        <div className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <SectionLabel tone="inverse">Let&apos;s build</SectionLabel>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, ease: EASE }}
              className="type-h2 mt-6 text-white"
            >
              Have an idea? Let&apos;s build it.
            </motion.h2>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="type-lead mt-6 max-w-2xl text-white/85"
            >
              Tell us what you&apos;re trying to build. We&apos;ll tell you what
              it takes.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="/#contact" size="lg" variant="light" withArrow>
                Start a Project
              </Button>
              <Button
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                  "Book a 20-minute call",
                )}`}
                size="lg"
                variant="inverse"
              >
                Book a 20-minute Call
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
