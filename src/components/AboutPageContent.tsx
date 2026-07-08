import Link from 'next/link'

import { aboutContent } from '@/content/about'

function BrochureDecorations() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 48px, rgba(255,255,255,0.03) 48px, rgba(255,255,255,0.03) 49px)',
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-40 w-40 sm:h-52 sm:w-52"
        aria-hidden
      >
        <span className="absolute right-8 top-10 block h-px w-24 rotate-45 bg-white/25 sm:right-12 sm:top-14 sm:w-32" />
        <span className="absolute right-6 top-14 block h-px w-24 rotate-45 bg-askill-primary sm:right-10 sm:top-[4.5rem] sm:w-32" />
        <span className="absolute right-4 top-[4.5rem] block h-px w-24 rotate-45 bg-white/25 sm:right-8 sm:top-[5.75rem] sm:w-32" />
      </div>
    </>
  )
}

export function AboutPageContent() {
  return (
    <section className="relative overflow-hidden bg-askill-secondary text-white">
      <BrochureDecorations />

      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-montserrat text-4xl font-bold uppercase tracking-[0.2em] text-askill-primary drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-5xl lg:text-6xl">
            {aboutContent.title}
          </h1>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-white/95 sm:text-lg sm:leading-8">
            <p>
              En{' '}
              <strong className="font-semibold text-white">
                ASKILL S.A.S.
              </strong>{' '}
              somos una empresa pereirana especializada en la automatización,
              control e ingeniería electrónica para procesos industriales.
              Fusionamos la experiencia en piso de planta con el desarrollo de
              software e Industria 4.0 para transformar los desafíos operativos
              de las empresas de nuestra región en soluciones eficientes,
              rentables y de alta calidad.
            </p>
            <p>{aboutContent.intro[1]}</p>
          </div>

          <ul className="mt-10 space-y-6 border-t border-white/10 pt-10">
            {aboutContent.principles.map((principle) => (
              <li
                key={principle.title}
                className="flex gap-3 text-base leading-relaxed sm:text-lg sm:leading-8"
              >
                <span
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-white"
                  aria-hidden
                />
                <p>
                  <strong className="font-semibold text-askill-primary">
                    {principle.title}:
                  </strong>{' '}
                  <span className="text-white/95">{principle.description}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#servicios"
              className="inline-flex h-11 items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95"
            >
              Ver servicios
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
