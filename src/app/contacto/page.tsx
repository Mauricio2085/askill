import type { Metadata } from 'next'

import { ContactPageContent } from '@/components/ContactPageContent'
import { Header } from '@/components/Header'
import { SiteFooter } from '@/components/SiteFooter'
import { getContactIntent } from '@/content/contact'

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

type ContactPageProps = {
  searchParams: Promise<{
    need?: string | string[]
    origen?: string | string[]
  }>
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams
  const intent = getContactIntent(params)
  const defaultNeed =
    typeof params.need === 'string' ? params.need : undefined

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="main-content">
        <ContactPageContent intent={intent} defaultNeed={defaultNeed} />
      </main>
      <SiteFooter />
    </div>
  )
}
