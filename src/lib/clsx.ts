/** Tiny class-name joiner — avoids pulling in an extra dependency. */
export function clsx(
  ...values: (string | false | null | undefined)[]
): string {
  return values.filter(Boolean).join(" ");
}
