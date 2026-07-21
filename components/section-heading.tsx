import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export function SectionHeading({
  tag,
  title,
  lead,
  tone = "light",
  align = "left",
  className,
}: {
  tag?: string
  title: React.ReactNode
  lead?: React.ReactNode
  tone?: "light" | "dark"
  align?: "left" | "center"
  className?: string
}) {
  const dark = tone === "dark"
  return (
    <Reveal
      className={cn(
        align === "center" && "mx-auto text-center",
        align === "center" ? "max-w-2xl" : "max-w-2xl",
        className,
      )}
    >
      {tag && (
        <div
          className={cn(
            "mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em]",
            align === "center" && "justify-center",
            dark ? "text-white/55" : "text-green",
          )}
        >
          <span
            className={cn("h-px w-6", dark ? "bg-white/40" : "bg-green")}
            aria-hidden
          />
          {tag}
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-3xl leading-[1.15] tracking-tight text-balance sm:text-4xl",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-base font-light leading-relaxed text-pretty",
            align === "center" && "mx-auto",
            dark ? "text-white/65" : "text-ink-soft",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  )
}
