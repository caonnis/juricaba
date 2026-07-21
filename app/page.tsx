import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { ConsultationTypes } from "@/components/consultation-types"
import { PainPoints } from "@/components/pain-points"
import { Expertise } from "@/components/expertise"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Faq } from "@/components/faq"
import { Booking } from "@/components/booking"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <ConsultationTypes />
      <PainPoints />
      <Expertise />
      <Services />
      <Process />
      <Faq />
      <Booking />
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}
