import { cn } from "@/lib/utils"

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string
  variant?: "dark" | "light"
}) {
  const juris = variant === "dark" ? "text-green" : "text-white"
  const caba = variant === "dark" ? "text-ink-muted" : "text-white/40"
  return (
    <span
      className={cn("inline-flex items-baseline leading-none select-none", className)}
      aria-label="Juris CABA"
    >
      <span className={cn("font-bold tracking-[0.25em] text-lg", juris)}>JURIS</span>
      <span className={cn("font-semibold tracking-[0.18em] text-lg ml-1", caba)}>CABA</span>
    </span>
  )
}
