import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Juris CABA | Consultas Jurídicas con Abogados · Sucesiones y Herencias",
  description:
    "Reservá una consulta jurídica con un abogado especialista en sucesiones y herencias en CABA. Análisis profesional, estrategia clara y un plan de acción concreto para tu caso.",
  keywords: [
    "consulta jurídica CABA",
    "abogado sucesiones Buenos Aires",
    "reservar consulta abogado",
    "herencias",
    "asesoramiento legal sucesiones",
    "estudio jurídico boutique",
  ],
  authors: [{ name: "Juris CABA" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Juris CABA",
    title: "Juris CABA | Consultas Jurídicas con Abogados Especialistas",
    description:
      "Reservá una consulta jurídica profesional. Recibí un análisis experto y una estrategia clara para tu caso.",
  },
  robots: { index: true, follow: true },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1a5c42",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmSerif.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
