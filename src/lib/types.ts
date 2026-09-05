import type { LucideIcon } from "lucide-react";

export type ProjectCategory = "web-apps" | "websites" | "landing-pages";

/** Controls the editorial grid footprint of a card in the portfolio. */
export type ProjectSpan = "wide" | "narrow" | "full";

export interface Project {
  id: string;
  title: string;
  /** Human-readable type shown above the title, e.g. "Web Application". */
  type: string;
  category: ProjectCategory;
  url: string;
  /** Domain shown in the browser-frame address bar. */
  domain: string;
  description: string;
  tags: string[];
  ctaLabel: string;
  span: ProjectSpan;
  /**
   * Drop a real screenshot into `public/images/projects/` and set the path here
   * (e.g. "/images/projects/anfocus.png"). While this is `null` the card renders
   * a browser-frame placeholder instead.
   */
  image: string | null;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ValueProp {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  /** Placeholder until real figures are supplied — update in `src/data/stats.ts`. */
  value: string;
  label: string;
}

export interface TeamMember {
  id: string;
  /** Real name once supplied; placeholder text until then. */
  name: string;
  role: string;
  icon: LucideIcon;
  /**
   * Drop a headshot into `public/images/team/` and set the path here
   * (e.g. "/images/team/founder-1.jpeg"). While this is `null` the card
   * renders a portrait placeholder instead.
   */
  photo: string | null;
  /** Renders the "awaiting content" treatment until a real name is added. */
  isPlaceholder: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Section id used for scroll-spy highlighting. */
  id: string;
}
