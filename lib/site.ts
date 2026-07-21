export const SITE = {
  phone: "+54 9 11 6117 9711",
  whatsapp: "5491161179711",
  email: "info@juriscaba.com",
  instagram: "https://www.instagram.com/juriscaba/",
  location: "Buenos Aires, CABA",
}

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}

export type Consultation = {
  id: string
  name: string
  duration: string
  featured?: boolean
  badge?: string
  description: string
  includes: string[]
  cta: string
}

export const CONSULTATIONS: Consultation[] = [
  {
    id: "express",
    name: "Consulta Express",
    duration: "20 minutos",
    description:
      "Ideal para resolver dudas puntuales y recibir orientación jurídica inicial.",
    includes: ["Videollamada o presencial", "Orientación legal", "Próximos pasos"],
    cta: "Reservar Consulta Express",
  },
  {
    id: "estrategica",
    name: "Consulta Estratégica",
    duration: "40 minutos",
    featured: true,
    badge: "Más elegida",
    description:
      "Analizamos tu situación, revisamos la documentación esencial y definimos la mejor estrategia legal para avanzar.",
    includes: [
      "Análisis del caso",
      "Revisión de documentación",
      "Estrategia jurídica",
      "Estimación de honorarios",
      "Plan de acción",
    ],
    cta: "Reservar Consulta Estratégica",
  },
  {
    id: "integral",
    name: "Consulta Integral",
    duration: "60 minutos",
    description:
      "Pensada para sucesiones, empresas, conflictos patrimoniales y asuntos complejos.",
    includes: [
      "Todo lo anterior",
      "Mayor tiempo de análisis",
      "Revisión documental extensa",
      "Plan de acción detallado",
    ],
    cta: "Reservar Consulta Integral",
  },
]
