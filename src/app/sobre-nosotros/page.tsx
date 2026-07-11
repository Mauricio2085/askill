import type { Metadata } from 'next'

import { AboutPageContent } from '@/components/AboutPageContent'
import { ContactCta } from '@/components/ContactCta'
import { Header } from '@/components/Header'
import { SiteFooter } from '@/components/SiteFooter'
import { contactCtaByPage } from '@/content/contact'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description:
    'Conoce a ASKILL S.A.S: automatización, control e ingeniería electrónica para procesos industriales en Pereira y la región.',
  openGraph: {
    title: 'Sobre nosotros | ASKILL S.A.S',
    description:
      'Automatización, control e ingeniería electrónica para procesos industriales en Pereira y la región.',
    url: '/sobre-nosotros',
  },
  alternates: {
    canonical: '/sobre-nosotros',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="main-content">
        <AboutPageContent />
        <ContactCta
          {...contactCtaByPage.about}
          secondaryLink={{ href: '/servicios', label: 'Ver servicios' }}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
