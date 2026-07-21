import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const STEPS = [
  {
    title: "Reservá tu consulta",
    desc: "Elegís el tipo de consulta que mejor se adapta a tu caso y coordinamos día y horario, presencial o por videollamada.",
  },
  {
    title: "Análisis y estrategia",
    desc: "En la reunión revisamos tu documentación, evaluamos el estado del proceso y definimos la estrategia más eficiente.",
  },
  {
    title: "Inicio del trámite",
    desc: "Nos hacemos cargo de todo: presentaciones judiciales, gestiones notariales y coordinación con herederos y organismos.",
  },
  {
    title: "Seguimiento y actualizaciones",
    desc: "Te mantenemos informado en cada etapa. Sabés en todo momento en qué estado está tu expediente.",
  },
  {
    title: "Cierre y distribución",
    desc: "Completamos el proceso, coordinamos la adjudicación de bienes y cerramos el expediente definitivamente.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="bg-sand py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              tag="Cómo trabajamos"
              title="El camino completo, paso a paso."
              lead="Sabemos que la incertidumbre genera angustia. Por eso te mostramos exactamente qué va a pasar desde que reservás tu consulta."
            />

            <ol className="mt-12 flex flex-col">
              {STEPS.map((s, i) => (
                <Reveal
                  key={s.title}
                  as="li"
                  delay={i * 0.06}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {i < STEPS.length - 1 && (
                    <span
                      className="absolute left-5 top-11 bottom-0 w-px bg-border"
                      aria-hidden
                    />
                  )}
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-white font-serif text-base text-green">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-[15px] font-medium text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-ink-soft">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-green p-9 text-white">
              <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/55">
                Tiempo estimado
              </div>
              <div className="font-serif text-5xl leading-none">
                6 a 12
                <span className="mt-1 block text-3xl">meses</span>
              </div>
              <p className="mt-5 text-sm font-light leading-relaxed text-white/70">
                Es el rango habitual para una sucesión extrajudicial sin conflictos
                en CABA. Los casos complejos pueden variar. En tu consulta te damos
                una estimación real para tu situación.
              </p>
              <Button asChild variant="light" className="mt-7 bg-white/12 text-white hover:bg-white/20">
                <a href="#reservar">
                  Reservar mi consulta <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
