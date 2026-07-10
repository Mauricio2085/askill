import type { Metadata } from 'next'

import { ContactCta } from '@/components/ContactCta'
import { Header } from '@/components/Header'
import { ServicesSection } from '@/components/ServicesSection'
import { SiteFooter } from '@/components/SiteFooter'
import { contactCtaByPage } from '@/content/contact'

export const metadata: Metadata = {
  title: 'Servicios | ASKILL S.A.S',
  description:
    'Automatización industrial, control de motores, instrumentación, retrofitting, desarrollo de software a la medida y plataforma digital IIoT, SST y Activos para operaciones industriales.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        <ServicesSection />
        <ContactCta {...contactCtaByPage.services} />
      </main>
      <SiteFooter />
    </div>
  )
}
