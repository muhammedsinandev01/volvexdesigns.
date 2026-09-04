import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { VALUE_PROPS } from "@/data/content";

export function ValueProps() {
  return (
    <section className="border-t border-line bg-white py-20 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="type-h2 max-w-[18ch] text-ink">
            One team. From idea to growth.
          </h2>
        </Reveal>

        <Stagger
          stagger={0.1}
          className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6"
        >
          {VALUE_PROPS.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.number}>
                <Link
                  href="/#services"
                  className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white p-7 transition-[transform,border-color,box-shadow] duration-400 hover:-translate-y-1.5 hover:border-brand/35 hover:shadow-[0_28px_60px_-34px_rgba(11,18,21,0.4)] sm:p-8 lg:min-h-[22rem]"
                >
                  {/* Cyan rule that draws across the top on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-light transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex items-start justify-between">
                    <span className="text-[2.75rem] font-semibold leading-none tracking-tight text-line transition-colors duration-400 group-hover:text-brand-light">
                      {item.number}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="size-6 text-muted-2 transition-colors duration-400 group-hover:text-brand"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-10 text-xl font-semibold uppercase tracking-[0.1em] text-ink sm:mt-12">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                    {item.description}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-ink">
                    <span className="transition-colors duration-300 group-hover:text-brand-deep">
                      Explore
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
