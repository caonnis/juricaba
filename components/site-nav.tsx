"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "#consultas", label: "Consultas" },
  { href: "#por-que", label: "Por qué pagar" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 border-b transition-colors",
        scrolled
          ? "border-border bg-white/90 backdrop-blur-md"
          : "border-transparent bg-white/60 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#hero" aria-label="Ir al inicio">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] text-ink-soft transition-colors hover:text-green"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Button asChild size="sm">
              <a href="#reservar">Reservar consulta</a>
            </Button>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-border bg-white px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-[15px] text-ink transition-colors hover:bg-sand"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button asChild className="w-full">
                <a href="#reservar" onClick={() => setOpen(false)}>
                  Reservar consulta
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
