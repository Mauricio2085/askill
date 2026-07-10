import Link from "next/link";

import { siteContainerClassName } from "@/lib/site-container";

const heroHighlightCardClassName =
  "rounded-lg border border-white/10 bg-white/5 p-4 text-left transition-all duration-300 hover:border-white/45 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_12px_40px_rgba(0,0,0,0.25)]";

export function CorporateHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-askill-secondary/80 to-background" />
      <div className={`${siteContainerClassName} py-12 sm:py-16 lg:py-20`}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            ASKILL S.A.S · Automatización industrial · Desarrollo de software
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ingeniería y digitalización para operaciones industriales
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Desde la programación de PLC en tablero hasta el monitoreo en la
            nube. Acompañamos tu planta con automatización, modernización de
            activos y una plataforma SaaS para SST, IIoT y gestión de activos.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/servicios"
              className="inline-flex h-11 w-full items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95 sm:w-auto"
            >
              Ver servicios
            </Link>
            <Link
              href="/sobre-nosotros"
              className="inline-flex h-11 w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto"
            >
              Sobre nosotros
            </Link>
          </div>

          <dl className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className={heroHighlightCardClassName}>
              <dt className="text-xs font-medium text-white/70">Ingeniería</dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                PLC, VDF, instrumentación y retrofitting
              </dd>
            </div>
            <div className={heroHighlightCardClassName}>
              <dt className="text-xs font-medium text-white/70">Planta</dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                Diagnóstico, puesta en marcha y continuidad operativa
              </dd>
            </div>
            <div className={`${heroHighlightCardClassName} sm:col-span-1`}>
              <dt className="text-xs font-medium text-white/70">Digital</dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                IIoT, SST y gestión de activos en la nube
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
