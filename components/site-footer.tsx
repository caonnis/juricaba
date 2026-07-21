import { Instagram, MessageCircle, Mail } from "lucide-react"
import { Logo } from "@/components/logo"
import { SITE, whatsappLink } from "@/lib/site"

const COLS = [
  {
    title: "Consultas",
    links: [
      { label: "Consulta Express", href: "#consultas" },
      { label: "Consulta Estratégica", href: "#consultas" },
      { label: "Consulta Integral", href: "#consultas" },
      { label: "Reservar consulta", href: "#reservar" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Inicio de sucesión", href: "#servicios" },
      { label: "Sucesiones trabadas", href: "#servicios" },
      { label: "Bienes inmuebles", href: "#servicios" },
      { label: "Asesoramiento preventivo", href: "#servicios" },
    ],
  },
  {
    title: "El estudio",
    links: [
      { label: "Nuestro enfoque", href: "#por-que" },
      { label: "Cómo trabajamos", href: "#proceso" },
      { label: "Preguntas frecuentes", href: "#faq" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "WhatsApp", href: whatsappLink("Hola, quiero hacer una consulta.") },
      { label: SITE.email, href: `mailto:${SITE.email}` },
      { label: "Instagram", href: SITE.instagram },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#080f0b]">
      <div className="mx-auto grid max-w-6xl gap-12 border-b border-white/[0.07] px-5 py-16 md:grid-cols-[220px_1fr] md:gap-20 md:px-8">
        <div>
          <a href="#hero" aria-label="Ir al inicio">
            <Logo variant="light" />
          </a>
          <p className="mt-4 max-w-[190px] text-xs font-light leading-relaxed text-white/30">
            Estudio jurídico especializado en sucesiones y herencias en la Ciudad
            de Buenos Aires.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.12em] text-white/85">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] font-light text-white/40 transition-colors hover:text-white/80"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <span className="text-[11px] text-white/20">
          © {new Date().getFullYear()} Juris CABA · Todos los derechos reservados ·
          Matriculados CPACF
        </span>
        <div className="flex items-center gap-3">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/35 hover:text-white/80"
          >
            <Instagram className="size-3.5" />
          </a>
          <a
            href={whatsappLink("Hola, quiero hacer una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/35 hover:text-white/80"
          >
            <MessageCircle className="size-3.5" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/35 hover:text-white/80"
          >
            <Mail className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
