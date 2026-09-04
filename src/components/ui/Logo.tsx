import Image from "next/image";
import { clsx } from "@/lib/clsx";

/**
 * The official Volvex Designs logo. Replace `public/images/volvexdesigns-logo.png` to swap
 * the asset — nothing here recolours, crops or distorts it.
 */
export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/volvexdesigns-logo.png"
      alt="Volvex Designs"
      width={1478}
      height={240}
      priority={priority}
      sizes="220px"
      className={clsx("w-auto", className)}
    />
  );
}
