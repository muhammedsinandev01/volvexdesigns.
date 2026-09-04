import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { STATS } from "@/data/content";

export function Stats() {
  return (
    <section
      aria-label="Volvex Designs by the numbers"
      className="border-t border-line bg-surface py-14 sm:py-16"
    >
      <Container>
        <Stagger
          stagger={0.08}
          className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div>
                <CountUp
                  value={stat.value}
                  className="text-[2rem] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[2.5rem]"
                />
                <p className="mt-3 text-[0.8125rem] leading-snug text-muted sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
