import type { Metadata } from 'next'

import { AboutPageContent } from '@/components/AboutPageContent'
import { Header } from '@/components/Header'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Sobre nosotros | ASKILL S.A.S',
  description:
    'Conoce a ASKILL S.A.S: automatización, control e ingeniería electrónica para procesos industriales en Pereira y la región.',
}

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        <AboutPageContent />
      </main>
      <SiteFooter />
    </div>
  )
}
