"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Scale, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const TRUST = [
  { icon: Scale, label: "Especialización exclusiva en sucesiones" },
  { icon: ShieldCheck, label: "+15 años de experiencia en CABA" },
  { icon: Clock, label: "Respuesta en menos de 24 hs" },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-sand pt-16"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(26,92,66,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-[10%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(26,92,66,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 py-20 md:px-8">
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-7 inline-flex items-center gap-2 rounded-full bg-green-light px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-green"
        >
          <span className="size-1.5 rounded-full bg-green" />
          Estudio jurídico · Capital Federal
        </motion.div>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="font-serif text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl md:text-6xl"
        >
          Reservá una consulta jurídica con{" "}
          <em className="italic text-green">un abogado</em>.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-soft text-pretty"
        >
          Recibí un análisis profesional y una estrategia clara para tu caso. La
          primera reunión es una consulta de trabajo, no una charla informal.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg">
            <a href="#reservar">
              Reservar consulta <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#consultas">Conocer tipos de consulta</a>
          </Button>
        </motion.div>

        <motion.ul
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:gap-6"
        >
          {TRUST.map((t) => (
            <li key={t.label} className="flex items-center gap-2.5 text-[13px] text-ink-soft">
              <span className="flex size-6 items-center justify-center rounded-full bg-green-light">
                <t.icon className="size-3.5 text-green" />
              </span>
              {t.label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
