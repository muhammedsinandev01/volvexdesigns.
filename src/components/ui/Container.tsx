import { clsx } from "@/lib/clsx";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
