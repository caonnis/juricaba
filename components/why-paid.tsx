import { Check, Target, FileSearch, Compass, Wallet } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const BENEFITS = [
  {
    icon: Target,
    title: "Estrategia personalizada",
    desc: "Definimos un camino concreto pensado para tu situación particular.",
  },
  {
    icon: FileSearch,
    title: "Análisis profesional",
    desc: "Un abogado especialista evalúa tu caso y la documentación disponible.",
  },
  {
    icon: Compass,
    title: "Claridad sobre los próximos pasos",
    desc: "Salís de la reunión sabiendo exactamente qué hacer y en qué orden.",
  },
  {
    icon: Wallet,
    title: "Descontá el valor de tu consulta",
    desc: "Si luego contratás nuestros servicios, descontamos el valor de la consulta de los honorarios.",
  },
]

export function WhyPaid() {
  return (
    <section id="por-que" className="bg-sand py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              tag="El valor de tu tiempo"
              title="¿Por qué una consulta paga?"
              lead="La primera reunión no es una charla informal. Es una consulta profesional en la que analizamos tu caso, evaluamos la documentación disponible y te brindamos una estrategia jurídica concreta para que puedas tomar decisiones con seguridad."
            />
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <Reveal
                key={b.title}
                as="li"
                delay={i * 0.08}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-green-light text-green transition-colors group-hover:bg-green group-hover:text-white">
                  <b.icon className="size-5" />
                </span>
                <div className="mb-2 flex items-center gap-2">
                  <Check className="size-4 text-green" />
                  <h3 className="text-[15px] font-medium text-ink">{b.title}</h3>
                </div>
                <p className="text-sm font-light leading-relaxed text-ink-soft">
                  {b.desc}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
