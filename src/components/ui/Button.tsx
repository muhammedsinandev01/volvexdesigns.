import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "secondary" | "dark" | "inverse" | "light";
type Size = "md" | "lg";

const BASE =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-300 " +
  "active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_10px_30px_-14px_rgba(0,181,182,0.9)] hover:bg-brand-deep hover:shadow-[0_16px_38px_-16px_rgba(0,153,143,0.95)]",
  secondary:
    "border border-line bg-white text-ink hover:border-brand/45 hover:bg-brand-mist",
  dark: "bg-ink text-white hover:bg-ink-2",
  inverse:
    "border border-white/35 bg-white/12 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/20",
  /** For use on the cyan CTA panel — white surface, dark label. */
  light:
    "bg-white text-ink shadow-[0_18px_44px_-20px_rgba(0,0,0,0.45)] hover:bg-brand-pale hover:text-brand-deep",
};

const SIZES: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-6 text-base sm:h-14 sm:px-7",
};

interface SharedProps {
  variant?: Variant;
  size?: Size;
  /** Appends an arrow that slides right on hover. */
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

type AnchorProps = SharedProps &
  Omit<ComponentProps<"a">, keyof SharedProps> & { href: string };

type NativeButtonProps = SharedProps &
  Omit<ComponentProps<"button">, keyof SharedProps> & { href?: never };

export function Button(props: AnchorProps | NativeButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
    ...rest
  } = props;

  const classes = clsx(BASE, VARIANTS[variant], SIZES[size], className);

  const inner = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      ) : null}
    </>
  );

  if (rest.href !== undefined) {
    const anchorProps = rest as ComponentProps<"a"> & { href: string };

    // Internal routes go through next/link; mailto/external stay plain anchors.
    if (anchorProps.href.startsWith("/")) {
      return (
        <Link {...anchorProps} href={anchorProps.href} className={classes}>
          {inner}
        </Link>
      );
    }

    return (
      <a {...anchorProps} className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <button {...(rest as ComponentProps<"button">)} className={classes}>
      {inner}
    </button>
  );
}
