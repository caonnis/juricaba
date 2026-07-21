import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const SERVICES = [
  {
    tag: "Inicio",
    title: "Inicio de sucesión",
    desc: "Presentación del expediente, declaratoria de herederos, publicación de edictos y todo el proceso inicial en CABA.",
  },
  {
    tag: "Destrabe",
    title: "Sucesiones trabadas",
    desc: "Expedientes que llevan años sin moverse. Desbloqueamos el proceso y lo llevamos a buen término.",
  },
  {
    tag: "Familia",
    title: "Acuerdo entre herederos",
    desc: "Mediamos para llegar a un acuerdo extrajudicial cuando hay desacuerdos sobre la distribución de bienes.",
  },
  {
    tag: "Inmuebles",
    title: "Bienes inmuebles",
    desc: "Transferencia de propiedades, regularización de dominio y coordinación con el Registro de la Propiedad.",
  },
  {
    tag: "Testamento",
    title: "Sucesión con testamento",
    desc: "Tramitamos la apertura y protocolización del testamento, velando por su correcta ejecución.",
  },
  {
    tag: "Planificación",
    title: "Asesoramiento preventivo",
    desc: "Planificá con tiempo para evitarles problemas a tus herederos cuando llegue el momento.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          tag="Servicios"
          title="¿En qué podemos ayudarte?"
          lead="Manejamos todo tipo de sucesiones, desde las más simples hasta los casos más complejos con múltiples herederos y bienes."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 0.08}
              className="group rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="inline-block rounded-full bg-green-light px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-green">
                {s.tag}
              </span>
              <h3 className="mt-4 text-[15px] font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-ink-soft">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
