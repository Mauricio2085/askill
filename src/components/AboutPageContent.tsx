import { aboutContent } from '@/content/about'
import { siteContainerClassName } from '@/lib/site-container'

function PrincipleCard({
  index,
  title,
  description,
}: {
  index: number
  title: string
  description: string
}) {
  return (
    <li className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-askill-primary/50 hover:shadow-[0_0_0_1px_rgba(238,117,47,0.15),0_12px_40px_rgba(0,0,0,0.25)] sm:p-7">
      <span
        className="absolute inset-x-0 top-0 h-1 bg-askill-primary"
        aria-hidden
      />
      <span
        className="text-3xl font-bold leading-none text-askill-primary/25 transition-colors group-hover:text-askill-primary/40"
        aria-hidden
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-askill-primary sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </li>
  )
}

export function AboutPageContent() {
  return (
    <section className="bg-background">
      <div className={`${siteContainerClassName} py-16 sm:py-20 lg:py-24`}>
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {aboutContent.title}
          </h1>

          <div className="mt-8 space-y-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              En{' '}
              <strong className="font-semibold text-foreground">
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
        </div>

        <div className="mx-auto mt-14 max-w-6xl lg:mt-16">
          <h2 className="text-balance text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Nuestros principios
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {aboutContent.principles.map((principle, index) => (
              <PrincipleCard
                key={principle.title}
                index={index}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
