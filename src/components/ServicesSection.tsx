import { engineeringServices, servicesPageIntro } from "@/content/services";
import { siteContainerClassName } from "@/lib/site-container";

import { DigitalPlatformSection } from "@/components/DigitalPlatformSection";
import { ServiceBlock } from "@/components/ServiceBlock";
import { ServiceValueCards } from "@/components/ServiceValueCards";

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-24">
      <div
        className={`${siteContainerClassName} pb-4 pt-16 text-center sm:pt-20`}
      >
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Nuestros servicios
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-muted-foreground sm:text-lg">
          {servicesPageIntro}
        </p>
      </div>

      <div className={`${siteContainerClassName} pb-14 sm:pb-16 lg:pb-20`}>
        <h2 className="mx-auto mb-10 max-w-3xl text-balance text-center text-2xl font-semibold tracking-tight text-foreground sm:mb-12 sm:text-3xl">
          Lo que nos caracteriza
        </h2>
        <ServiceValueCards />
      </div>

      <div className="border-t border-border">
        <div
          className={`${siteContainerClassName} pb-4 pt-14 text-center sm:pt-16`}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
            Catálogo técnico
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Soluciones de ingeniería, software y plataforma digital
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-muted-foreground sm:text-lg">
            Ingeniería en planta, software a la medida y plataforma en la nube
            para diagnosticar, automatizar y supervisar tu operación industrial
            con resultados medibles.
          </p>
        </div>
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
  );
}
