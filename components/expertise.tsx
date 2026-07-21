import { Target, Sparkles, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const CARDS = [
  {
    icon: Target,
    title: "Especialización total",
    desc: "Solo sucesiones y patrimonio. Conocemos cada juzgado y cada trámite en CABA. Eso reduce errores y tiempos.",
  },
  {
    icon: Sparkles,
    title: "Claridad desde el día uno",
    desc: "En la consulta te explicamos cómo es tu caso, cuánto puede llevar y cuánto puede costar. Sin letra chica.",
  },
  {
    icon: Users,
    title: "Acompañamiento real",
    desc: "No desaparecemos. Tenés acceso directo al equipo y actualizaciones regulares sobre tu caso.",
  },
]

export function Expertise() {
  return (
    <section className="bg-green-deep py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          tone="dark"
          tag="Nuestro enfoque"
          title={
            <>
              Un estudio boutique dedicado
              <br className="hidden sm:block" /> exclusivamente a sucesiones.
            </>
          }
          lead="No hacemos de todo un poco: llevamos más de 15 años dedicados sólo a esto en los juzgados de la Ciudad de Buenos Aires."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/12 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.1}
              className="bg-green-deep p-8 transition-colors duration-300 hover:bg-white/[0.04]"
            >
              <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#7DDCAD]">
                <c.icon className="size-5" />
              </span>
              <h3 className="mb-2.5 text-base font-medium text-white">{c.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/65">
                {c.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
