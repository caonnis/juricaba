"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

export function WhatsappFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink("Hola, quiero reservar una consulta jurídica.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reservar consulta por WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-green px-5 py-3.5 text-sm font-medium text-white shadow-lg shadow-green/30 transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="size-5" />
          <span className="hidden sm:inline">Reservar consulta</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
