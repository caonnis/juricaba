"use client"

import { motion } from "framer-motion"
import { Check, Star, ArrowRight } from "lucide-react"
import { CONSULTATIONS, whatsappLink } from "@/lib/site"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ConsultationTypes() {
  return (
    <section id="consultas" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          tag="Reservas"
          title="Elegí el tipo de consulta"
          lead="Cada consulta es una sesión de trabajo con un abogado especialista. Elegí el formato según la complejidad de tu situación."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CONSULTATIONS.map((c, i) => {
            const message = `Hola, quiero reservar la ${c.name} (${c.duration}).`
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-7 transition-shadow duration-300",
                  c.featured
                    ? "border-green bg-green-deep text-white shadow-xl shadow-green/20 lg:-mt-4 lg:mb-4"
                    : "border-border bg-white text-ink hover:shadow-lg hover:shadow-ink/5",
                )}
              >
                {c.badge && (
                  <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-green px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md">
                    <Star className="size-3 fill-white" />
                    {c.badge}
                  </div>
                )}

                <div className="flex items-baseline justify-between gap-3">
                  <h3
                    className={cn(
                      "font-serif text-2xl",
                      c.featured ? "text-white" : "text-ink",
                    )}
                  >
                    {c.name}
                  </h3>
                </div>
                <span
                  className={cn(
                    "mt-1 inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium",
                    c.featured
                      ? "bg-white/12 text-white/85"
                      : "bg-green-light text-green",
                  )}
                >
                  {c.duration}
                </span>

                <p
                  className={cn(
                    "mt-5 text-sm font-light leading-relaxed",
                    c.featured ? "text-white/75" : "text-ink-soft",
                  )}
                >
                  {c.description}
                </p>

                <ul className="mt-6 flex flex-col gap-3 border-t pt-6 text-sm"
                  style={{
                    borderColor: c.featured
                      ? "rgba(255,255,255,0.14)"
                      : "var(--border)",
                  }}
                >
                  {c.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                          c.featured ? "bg-white/15" : "bg-green-light",
                        )}
                      >
                        <Check
                          className={cn(
                            "size-2.5",
                            c.featured ? "text-white" : "text-green",
                          )}
                        />
                      </span>
                      <span className={c.featured ? "text-white/85" : "text-ink"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex-1" />

                <Button
                  asChild
                  variant={c.featured ? "light" : "default"}
                  className="w-full"
                >
                  <a
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.cta} <ArrowRight className="size-4" />
                  </a>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
