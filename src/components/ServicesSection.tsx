import { engineeringServices } from '@/content/services'
import { siteContainerClassName } from '@/lib/site-container'

import { DigitalPlatformSection } from '@/components/DigitalPlatformSection'
import { ServiceBlock } from '@/components/ServiceBlock'

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-24">
      <div className={`${siteContainerClassName} pb-4 pt-16 text-center sm:pt-20`}>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Nuestros servicios
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-muted-foreground sm:text-lg">
          Ingeniería en planta y plataforma digital para diagnosticar, automatizar
          y supervisar tu operación industrial con resultados medibles.
        </p>
      </div>

      {engineeringServices.map((service, index) => (
        <ServiceBlock
          key={service.id}
          service={service}
          reversed={index % 2 === 1}
        />
      ))}

      <DigitalPlatformSection />
    </section>
  )
}
