import { CorporateHero } from '@/components/CorporateHero'
import { Header } from '@/components/Header'
import { Jumbotron } from '@/components/Jumbotron'
import { ServicesSection } from '@/components/ServicesSection'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <Jumbotron />

      <main>
        <CorporateHero />
        <ServicesSection />

        <section className="border-t border-border bg-secondary/20">
          <div className="container mx-auto px-4 py-14 text-center sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
              ASKILL S.A.S
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Tu aliado en Mantenimiento y Proyectos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground sm:text-lg">
              Conoce nuestra historia, principios de trabajo y cómo combinamos
              ingeniería en planta con Industria 4.0.
            </p>
            <div className="mt-8">
              <Link
                href="/sobre-nosotros"
                className="inline-flex h-11 items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95"
              >
                Conocer ASKILL
              </Link>
            </div>
          </div>
        </section>

        <section
          id="soporte"
          className="border-t border-border bg-secondary/20"
        >
          <div className="container mx-auto px-4 py-12 text-center sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Soporte técnico
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground sm:text-lg">
              Acompañamos a nuestros clientes en la implementación, puesta en
              marcha y continuidad operativa de sus soluciones industriales.
            </p>
            <div className="mt-8">
              <Link
                href="#servicios"
                className="inline-flex h-11 items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95"
              >
                Conocer nuestros servicios
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
