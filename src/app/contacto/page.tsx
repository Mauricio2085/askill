import type { Metadata } from 'next'

import { ContactPageContent } from '@/components/ContactPageContent'
import { Header } from '@/components/Header'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Agenda una visita técnica',
  description:
    'Solicita una visita técnica a tu planta. Diagnóstico en sitio, levantamiento y propuesta de ingeniería sin compromiso. ASKILL S.A.S — Pereira, Colombia.',
  openGraph: {
    title: 'Agenda una visita técnica | ASKILL S.A.S',
    description:
      'Visitas técnicas ilimitadas en fase de oferta y diseño. Diagnóstico en planta y propuesta clara para tu operación.',
    url: '/contacto',
  },
  alternates: {
    canonical: '/contacto',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="main-content">
        <ContactPageContent />
      </main>
      <SiteFooter />
    </div>
  )
}
