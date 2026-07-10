import type { Metadata } from 'next'

import { ContactPageContent } from '@/components/ContactPageContent'
import { Header } from '@/components/Header'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contáctanos para automatización industrial, control de procesos e Industria 4.0. ASKILL S.A.S — Pereira, Colombia.',
  openGraph: {
    title: 'Contacto | ASKILL S.A.S',
    description:
      'Contáctanos para automatización industrial, control de procesos e Industria 4.0 en Pereira, Colombia.',
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
      <main>
        <ContactPageContent />
      </main>
      <SiteFooter />
    </div>
  )
}
