import { CorporateHero } from '@/components/CorporateHero'
import { Header } from '@/components/Header'
import { Jumbotron } from '@/components/Jumbotron'
import { ServicesSection } from '@/components/ServicesSection'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <Jumbotron />

      <main>
        <CorporateHero />
        <ServicesSection />

        <section id="about" className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Sobre nosotros
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              ASKILL S.A.S es una empresa pereirana especializada en la
              automatización y control de procesos industriales. Nuestro enfoque
              se basa en brindar servicios de alta calidad en áreas
              especializadas como electrónica, automatización industrial,
              robótica y desarrollo de software, con el objetivo de ayudar a
              nuestros clientes a superar desafíos y lograr sus objetivos.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nuestra misión incluye colaborar estrechamente con empresas de
              nuestra región para ofrecer soluciones efectivas y eficientes. Nos
              destacamos en cada proyecto en el que participamos, basándonos en
              principios sólidos como la organización, la planificación
              excepcional y la obtención de resultados satisfactorios.
            </p>
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

      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-10 text-sm text-muted-foreground">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Automation Services with Skill S.A.S
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#servicios" className="hover:text-foreground">
                Servicios
              </Link>
              <Link href="#plataforma-digital" className="hover:text-foreground">
                Plataforma digital
              </Link>
              <Link href="#about" className="hover:text-foreground">
                Sobre nosotros
              </Link>
              <Link href="#soporte" className="hover:text-foreground">
                Soporte técnico
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
