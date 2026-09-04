"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { clsx } from "@/lib/clsx";

/**
 * Browser-chrome placeholder shown until a real screenshot is dropped into
 * `public/images/projects/`. It never pretends to be the live site.
 */
function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className="flex size-full flex-col bg-white">
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-md border border-line bg-white px-2.5 py-1 text-[0.6875rem] text-muted-2">
          {project.domain}
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="bg-grid-fine absolute inset-0 opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-1/4 left-1/2 size-[70%] -translate-x-1/2 rounded-full bg-brand-pale/50 blur-3xl"
        />
        <div className="relative px-6 py-10 text-center">
          <p className="text-[0.8125rem] font-medium text-ink-2">
            Screenshot placeholder
          </p>
          <p className="mt-1.5 text-[0.6875rem] leading-relaxed text-muted-2">
            Add an image at
            <br />
            <span className="text-brand-deep">
              /images/projects/{project.id}.png
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  /** Wide + full cards place the media beside the copy on large screens. */
  layout: "stacked" | "split";
}

export function ProjectCard({ project, layout }: ProjectCardProps) {
  const isSplit = layout === "split";

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — ${project.ctaLabel} (opens in a new tab)`}
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white",
        "transition-[transform,border-color,box-shadow] duration-400",
        "hover:-translate-y-1.5 hover:border-brand/35 hover:shadow-[0_32px_70px_-40px_rgba(11,18,21,0.45)]",
        isSplit && "lg:flex-row",
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-light transition-transform duration-500 group-hover:scale-x-100"
      />

      {/* Media */}
      <div
        className={clsx(
          "relative overflow-hidden bg-surface",
          isSplit ? "lg:w-[58%] lg:shrink-0" : "",
        )}
      >
        <div
          className={clsx(
            "relative overflow-hidden",
            isSplit ? "aspect-[2/1] lg:h-full lg:aspect-auto" : "aspect-[2/1]",
          )}
        >
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} — ${project.type} built by Volvex Designs`}
                fill
                sizes={
                  isSplit
                    ? "(max-width: 1024px) 100vw, 700px"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                }
                className="object-cover object-top"
              />
            ) : (
              <BrowserFrame project={project} />
            )}
          </div>
        </div>
      </div>

      {/* Copy */}
      <div
        className={clsx(
          "flex flex-1 flex-col border-t border-line p-6 sm:p-7",
          isSplit && "lg:border-l lg:border-t-0 lg:p-9",
        )}
      >
        <p className="type-eyebrow text-brand-deep">{project.type}</p>

        <h3
          className={clsx(
            "mt-3 font-semibold tracking-[-0.02em] text-ink",
            isSplit ? "text-2xl sm:text-[1.75rem]" : "text-xl",
          )}
        >
          {project.title}
        </h3>

        <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-lg border border-line bg-surface px-2.5 py-1 text-[0.75rem] text-muted transition-colors duration-300 group-hover:border-brand/25 group-hover:bg-brand-mist group-hover:text-brand-deep"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-brand-deep">
          {project.ctaLabel}
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </span>
      </div>
    </a>
  );
}
