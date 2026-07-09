import Image from 'next/image'

import type { EngineeringService } from '@/content/services'
import { siteContainerClassName } from '@/lib/site-container'

type ServiceBlockProps = {
  service: EngineeringService
  reversed?: boolean
}

export function ServiceBlock({ service, reversed = false }: ServiceBlockProps) {
  return (
    <article
      id={service.id}
      className="scroll-mt-24 border-b border-border last:border-b-0"
    >
      <div
        className={`${siteContainerClassName} grid items-center gap-8 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20 ${
          reversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-card">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {service.title}
          </h3>
          <p className="mt-2 text-base font-medium text-askill-primary">
            {service.subtitle}
          </p>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                El problema en planta
              </dt>
              <dd className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90 sm:text-base">
                {service.problem}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Nuestra solución
              </dt>
              <dd className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90 sm:text-base">
                {service.solution}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                El impacto
              </dt>
              <dd className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90 sm:text-base">
                {service.impact}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  )
}
