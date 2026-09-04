import { clsx } from "@/lib/clsx";

/** Small uppercase eyebrow — used to open each section. */
export function SectionLabel({
  children,
  className,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "inverse";
}) {
  return (
    <p
      className={clsx(
        "type-eyebrow",
        tone === "brand" ? "text-brand-deep" : "text-white/80",
        className,
      )}
    >
      {children}
    </p>
  );
}
