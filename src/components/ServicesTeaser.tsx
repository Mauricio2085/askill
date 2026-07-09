import Image from 'next/image'
import Link from 'next/link'

import {
  engineeringServices,
  platformService,
  servicesTeaserContent,
} from '@/content/services'
import { siteContainerClassName } from '@/lib/site-container'

export function ServicesTeaser() {
  return (
    <section className="border-t border-border bg-background">
      <div className={`${siteContainerClassName} py-16 sm:py-20`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
            {servicesTeaserContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {servicesTeaserContent.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            {servicesTeaserContent.description}
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {engineeringServices.map((service) => (
            <li key={service.id}>
              <Link
                href={`/servicios#${service.id}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-askill-primary/50 sm:p-6"
              >
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl border bg-secondary/30">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.subtitle}
                </p>
                <span className="mt-4 text-sm font-semibold text-askill-primary">
                  Ver detalle →
                </span>
              </Link>
            </li>
          ))}

          <li className="sm:col-span-2 lg:col-span-1">
            <Link
              href={`/servicios#${platformService.id}`}
              className="group flex h-full flex-col rounded-2xl border border-dashed border-askill-primary/40 bg-askill-primary/5 p-5 transition-colors hover:border-askill-primary sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-askill-primary">
                Servicio digital
              </p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-foreground sm:text-lg">
                {platformService.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {platformService.subtitle}
              </p>
              <span className="mt-4 text-sm font-semibold text-askill-primary">
                Explorar módulos →
              </span>
            </Link>
          </li>
        </ul>

        <div className="mt-10 text-center lg:mt-12">
          <Link
            href="/servicios"
            className="inline-flex h-11 items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95"
          >
            {servicesTeaserContent.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
