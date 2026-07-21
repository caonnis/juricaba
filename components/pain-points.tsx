import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const PAINS = [
  {
    n: "01",
    title: "No sé por dónde empezar",
    desc: "No sabés qué trámites hacer, en qué orden, ni qué documentación reunir.",
  },
  {
    n: "02",
    title: "La sucesión lleva años sin moverse",
    desc: "El expediente está abierto, pero nada avanza. Hay trabas o bienes sin declarar.",
  },
  {
    n: "03",
    title: "Hay conflicto entre herederos",
    desc: "Las tensiones familiares complican todo. No hay acuerdo y no sabés cómo seguir.",
  },
  {
    n: "04",
    title: "No entiendo qué me corresponde",
    desc: "Querés saber cuáles son tus derechos reales y si alguien podría perjudicarte.",
  },
  {
    n: "05",
    title: "El estudio anterior desapareció",
    desc: "Empezaste con otro abogado, pero perdiste contacto. El caso quedó a la deriva.",
  },
  {
    n: "06",
    title: "Los costos son una incógnita",
    desc: "Nadie te da un número claro. Sentís que no podés planificar con seguridad.",
  },
]

export function PainPoints() {
  return (
    <section id="problema" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading
              tag="El problema"
              title="Sabemos lo que estás viviendo."
              lead="El proceso legal puede sentirse como un laberinto: papeles, juzgados, plazos y desacuerdos. Identificate con alguno de estos escenarios."
            />
            <Reveal delay={0.1}>
              <Button asChild className="mt-8">
                <a href="#reservar">
                  Contarnos tu caso <ArrowRight className="size-4" />
                </a>
              </Button>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3">
            {PAINS.map((p, i) => (
              <Reveal
                key={p.n}
                delay={(i % 3) * 0.06}
                className="group flex items-start gap-4 rounded-xl border border-border px-6 py-5 transition-all duration-300 hover:border-green/30 hover:shadow-md hover:shadow-green/5"
              >
                <span className="font-serif text-2xl leading-none text-sand-mid transition-colors group-hover:text-green/40">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-ink">{p.title}</h3>
                  <p className="mt-1 text-[13px] font-light leading-relaxed text-ink-soft">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
