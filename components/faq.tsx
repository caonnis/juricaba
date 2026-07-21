"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    q: "¿La consulta puede ser virtual?",
    a: "Sí. Podés elegir entre una consulta presencial en nuestra oficina de Buenos Aires o por videollamada. Ambas modalidades tienen la misma calidad de análisis y acompañamiento profesional.",
  },
  {
    q: "¿Qué documentación debo llevar?",
    a: "Lo ideal es contar con la documentación disponible del caso: partida de defunción, títulos de propiedad, testamento si existe, y cualquier expediente iniciado previamente. Si no tenés todo, no es un problema: en la consulta te indicamos exactamente qué reunir.",
  },
  {
    q: "¿Qué sucede después de la consulta?",
    a: "Salís con un diagnóstico claro de tu situación, una estrategia jurídica concreta y los próximos pasos definidos. Si decidís avanzar, te presentamos una propuesta de honorarios y nos hacemos cargo de todo el proceso.",
  },
  {
    q: "¿El valor de la consulta se descuenta si contrato el servicio?",
    a: "Sí. Si luego de la consulta decidís contratar nuestros servicios, descontamos el valor abonado de los honorarios profesionales. De esa forma, la consulta se transforma en el primer paso de tu caso.",
  },
  {
    q: "¿Cuánto tiempo lleva una sucesión en CABA?",
    a: "Depende de la complejidad. Una sucesión extrajudicial sin conflictos puede resolverse en 6 a 12 meses. Las judiciales suelen llevar más, especialmente si hay herederos deslocalizados o bienes complejos. En la consulta te damos una estimación real para tu caso.",
  },
  {
    q: "¿Qué pasa si no hay testamento?",
    a: "La sucesión igualmente se puede tramitar. En ese caso aplica la ley: heredan los descendientes primero, luego los ascendientes y el cónyuge, según el Código Civil y Comercial argentino vigente.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[340px_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              tag="Preguntas frecuentes"
              title="Todo lo que querés saber."
            />
            <Reveal delay={0.1} className="mt-8 rounded-2xl border border-border bg-sand p-7">
              <h3 className="text-[15px] font-medium text-ink">
                ¿No encontrás lo que buscás?
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-ink-soft">
                Cada caso es único. Escribinos y te respondemos en menos de 24
                horas con información específica para tu situación.
              </p>
              <Button asChild className="mt-5 w-full">
                <a
                  href={whatsappLink("Hola, tengo una consulta sobre mi caso.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribir por WhatsApp
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal className="flex flex-col">
            {FAQS.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-medium text-ink">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                        isOpen
                          ? "border-green bg-green text-white"
                          : "border-border text-ink-soft",
                      )}
                    >
                      <Plus
                        className={cn(
                          "size-4 transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 text-sm font-light leading-relaxed text-ink-soft">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
