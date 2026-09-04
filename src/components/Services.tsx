import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SERVICES } from "@/data/services";
import { clsx } from "@/lib/clsx";

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-line bg-surface py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel>What we do</SectionLabel>
          <h2 className="type-h2 mt-5 max-w-[20ch] text-ink">
            Everything you need to build and grow.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Stagger
            stagger={0.06}
            className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isLast = index === SERVICES.length - 1;

              return (
                <StaggerItem
                  key={service.id}
                  className={clsx(isLast && "sm:col-span-2 lg:col-span-1")}
                >
                  <article className="group relative flex h-full flex-col bg-white p-7 transition-colors duration-300 hover:bg-brand-mist sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium tracking-[0.18em] text-muted-2 transition-colors duration-300 group-hover:text-brand-deep">
                        {service.number}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 text-line opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand group-hover:opacity-100"
                      />
                    </div>

                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.4}
                      className="mt-9 size-7 text-ink transition-colors duration-300 group-hover:text-brand-deep"
                    />

                    <h3 className="mt-5 text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-[34ch] text-[0.9375rem] leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}

            {/* Fills the final grid row and gives the section a clear exit */}
            <StaggerItem className="sm:col-span-2">
              <div className="flex h-full flex-col justify-center gap-4 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h3 className="text-[1.0625rem] font-semibold text-ink">
                    Not sure which of these you need?
                  </h3>
                  <p className="mt-2 max-w-[42ch] text-[0.9375rem] leading-relaxed text-muted">
                    Tell us the problem. We&apos;ll tell you what it actually
                    takes to solve it.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand-deep"
                >
                  Start a conversation
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </StaggerItem>
          </Stagger>
        </Reveal>
      </Container>
    </section>
  );
}
