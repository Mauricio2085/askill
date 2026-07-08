'use client'

import Image from 'next/image'
import { useState } from 'react'

import {
  platformModules,
  platformService,
  type PlatformModule,
} from '@/content/services'

function ModuleContent({ module }: { module: PlatformModule }) {
  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
      <div>
        <h4 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {module.title}
        </h4>
        <p className="mt-2 text-sm font-medium text-askill-primary sm:text-base">
          {module.subtitle}
        </p>

        <dl className="mt-6 space-y-5">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              El problema en planta
            </dt>
            <dd className="mt-2 text-pretty text-sm leading-relaxed sm:text-base">
              {module.problem}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Nuestra solución
            </dt>
            <dd className="mt-2 text-pretty text-sm leading-relaxed sm:text-base">
              {module.solution}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              El impacto
            </dt>
            <dd className="mt-2 text-pretty text-sm leading-relaxed sm:text-base">
              {module.impact}
            </dd>
          </div>
        </dl>
      </div>

      <ul className="grid gap-3">
        {module.impactBullets.map((bullet) => (
          <li
            key={bullet}
            className="rounded-xl border bg-background/60 p-4 text-sm leading-relaxed"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function DigitalPlatformSection() {
  const [activeModuleId, setActiveModuleId] = useState(platformModules[0].id)
  const activeModule =
    platformModules.find((module) => module.id === activeModuleId) ??
    platformModules[0]

  return (
    <article id={platformService.id} className="scroll-mt-24 bg-secondary/20">
      <div className="container mx-auto px-4 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
              Servicio digital
            </p>
            <h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {platformService.title}
            </h3>
            <p className="mt-2 text-base font-medium text-muted-foreground">
              {platformService.subtitle}
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {platformService.description}
            </p>
            <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border bg-card lg:mt-10">
              <Image
                src={platformService.image}
                alt={platformService.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-5 sm:p-6 lg:p-8">
            <div
              role="tablist"
              aria-label="Módulos de la plataforma digital"
              className="flex flex-wrap gap-2"
            >
              {platformModules.map((module) => {
                const isActive = module.id === activeModuleId

                return (
                  <button
                    key={module.id}
                    type="button"
                    role="tab"
                    id={`tab-${module.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${module.id}`}
                    onClick={() => setActiveModuleId(module.id)}
                    className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-askill-primary text-askill-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-accent'
                    }`}
                  >
                    {module.label}
                  </button>
                )
              })}
            </div>

            <div
              role="tabpanel"
              id={`panel-${activeModule.id}`}
              aria-labelledby={`tab-${activeModule.id}`}
            >
              <ModuleContent module={activeModule} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
