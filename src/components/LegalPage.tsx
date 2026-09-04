import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";

export interface LegalSection {
  heading: string;
  body: string[];
}

/**
 * Shared shell for the Privacy Policy / Terms pages. The section copy lives in
 * each route file so the legal team can edit it without touching layout.
 */
export function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />

      <main id="main" className="flex-1">
        <article className="py-16 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand-deep"
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to Volvex Designs
              </Link>

              <h1 className="type-h2 mt-8 text-ink">{title}</h1>
              <p className="mt-3 text-[0.8125rem] text-muted-2">
                Last updated: {lastUpdated}
              </p>
              <p className="type-lead mt-7 text-muted">{intro}</p>

              <div className="mt-12 space-y-10 border-t border-line pt-10">
                {sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                      {section.heading}
                    </h2>
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-3 text-[0.9375rem] leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          </Container>
        </article>
      </main>

      <Footer />
    </>
  );
}
