"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, Mail, MapPin, Video } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { CONSULTATIONS, SITE, whatsappLink } from "@/lib/site"

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.phone,
    href: whatsappLink("Hola, quiero reservar una consulta jurídica."),
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  { icon: MapPin, label: "Oficina", value: SITE.location },
  { icon: Video, label: "Remoto", value: "Atención por videollamada" },
]

export function Booking() {
  const [type, setType] = useState(CONSULTATIONS[1].name)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const nombre = String(data.get("nombre") || "")
    const contacto = String(data.get("contacto") || "")
    const mensaje = String(data.get("mensaje") || "")
    const text = `Hola, quiero reservar una ${type}.%0A%0ANombre: ${nombre}%0AContacto: ${contacto}${
      mensaje ? `%0AMi situación: ${mensaje}` : ""
    }`
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank")
  }

  const fieldClass =
    "w-full rounded-lg border border-border bg-sand px-3.5 py-2.5 text-sm text-ink outline-none transition-all placeholder:text-ink-muted focus:border-green focus:bg-white focus:ring-2 focus:ring-green/15"

  return (
    <section id="reservar" className="bg-green-deep py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_480px] lg:gap-20">
          <div>
            <SectionHeading
              tone="dark"
              tag="Reservá tu consulta"
              title="Empecemos a resolver tu caso."
              lead="Coordinamos día y horario para tu consulta jurídica. Te respondemos en menos de 24 horas."
            />

            <div className="mt-9 flex flex-col gap-3">
              {CHANNELS.map((c) => {
                const content = (
                  <>
                    <span className="flex size-9 items-center justify-center rounded-lg bg-white/[0.06]">
                      <c.icon className="size-4 text-white/60" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.08em] text-white/40">
                        {c.label}
                      </span>
                      <span className="block text-sm text-white/85">{c.value}</span>
                    </span>
                  </>
                )
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 rounded-xl border border-white/[0.08] px-4 py-3.5 transition-colors hover:border-green/50 hover:bg-green/10"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="flex items-center gap-3.5 rounded-xl border border-white/[0.08] px-4 py-3.5"
                  >
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-8">
              <h3 className="text-lg font-medium text-ink">Solicitá tu reserva</h3>
              <p className="mt-1 text-sm text-ink-soft">
                Completá tus datos y coordinamos tu consulta a la brevedad.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="tipo"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-ink-soft"
                  >
                    Tipo de consulta
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={fieldClass}
                  >
                    {CONSULTATIONS.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} · {c.duration}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-ink-soft"
                  >
                    Nombre y apellido
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Tu nombre completo"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contacto"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-ink-soft"
                  >
                    Email o teléfono
                  </label>
                  <input
                    id="contacto"
                    name="contacto"
                    required
                    placeholder="Para coordinar la reserva"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-ink-soft"
                  >
                    Contanos brevemente tu situación (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    placeholder="Cualquier detalle que quieras compartir…"
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <Button type="submit" className="mt-1 w-full" size="lg">
                  Solicitar reserva
                </Button>
                <p className="text-center text-[11px] text-ink-muted">
                  Tu información es confidencial y no se comparte con terceros.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
