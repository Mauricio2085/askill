import { Header } from '@/components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-askill-secondary to-background" />
          <div className="container mx-auto px-4 py-16 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                  ASKILL S.A.S · Automatización industrial
                </p>
                <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Soluciones integrales para operaciones industriales
                </h1>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  Centraliza permisos de trabajo, evidencias, capacitación y
                  trazabilidad operativa. Reduce incidentes, acelera auditorías
                  y mejora la productividad con flujos simples y medibles.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="#caracteristicas"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-askill-primary px-5 text-sm font-semibold text-askill-primary-foreground hover:opacity-95"
                  >
                    Ver servicios
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Sobre nosotros
                  </Link>
                </div>

                <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 text-white">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-medium text-white/70">
                      Trazabilidad
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">
                      Evidencias y firmas por actividad
                    </dd>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-medium text-white/70">
                      Cumplimiento
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">
                      Auditorías más rápidas y claras
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                <h2 className="text-base font-semibold">
                  Lo que puedes gestionar
                </h2>
                <ul className="mt-4 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
                  <li className="rounded-lg border border-white/10 bg-black/10 p-3">
                    Permisos de trabajo
                  </li>
                  <li className="rounded-lg border border-white/10 bg-black/10 p-3">
                    Capacitación y competencias
                  </li>
                  <li className="rounded-lg border border-white/10 bg-black/10 p-3">
                    Checklists e inspecciones
                  </li>
                  <li className="rounded-lg border border-white/10 bg-black/10 p-3">
                    Evidencias (fotos/firmas)
                  </li>
                  <li className="rounded-lg border border-white/10 bg-black/10 p-3">
                    Reportes y métricas
                  </li>
                  <li className="rounded-lg border border-white/10 bg-black/10 p-3">
                    Roles y control de acceso
                  </li>
                </ul>
                <p className="mt-4 text-sm text-white/70">
                  Diseñado para operaciones industriales, contratistas y equipos
                  HSE.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="caracteristicas" className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Características clave
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Flujos simples para que la operación avance sin perder control,
              evidencias ni cumplimiento.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Flujos guiados"
              description="Crea, aprueba y ejecuta tareas con pasos claros, responsables y requisitos visibles."
            />
            <FeatureCard
              title="Evidencias en terreno"
              description="Captura firmas y evidencias de forma consistente para respaldar cada actividad."
            />
            <FeatureCard
              title="Control por roles"
              description="Define permisos por perfil, equipo o contratista para reducir riesgos y errores."
            />
            <FeatureCard
              title="Métricas accionables"
              description="Identifica cuellos de botella, cumplimiento y desempeño con indicadores claros."
            />
            <FeatureCard
              title="Auditoría y trazabilidad"
              description="Historial por registro: quién hizo qué, cuándo y con qué evidencia."
            />
            <FeatureCard
              title="Escalable"
              description="Estandariza procesos entre sedes y proyectos sin perder flexibilidad."
            />
          </div>
        </section>

        <section id="beneficios" className="bg-secondary/30">
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight">
                  Beneficios para tu operación
                </h2>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Menos fricción operativa y más control. Todo respaldado con
                  evidencia y trazabilidad.
                </p>
                <ul className="mt-8 grid gap-3">
                  <BenefitItem title="Reduce incidentes">
                    Estandariza validaciones y requisitos críticos antes de
                    ejecutar.
                  </BenefitItem>
                  <BenefitItem title="Acelera auditorías">
                    Registros consistentes, con historial y evidencias listas
                    para revisar.
                  </BenefitItem>
                  <BenefitItem title="Mejora productividad">
                    Menos reprocesos, aprobaciones más claras y seguimiento en
                    tiempo real.
                  </BenefitItem>
                  <BenefitItem title="Visibilidad para líderes">
                    Indicadores para priorizar, corregir y mejorar
                    continuamente.
                  </BenefitItem>
                </ul>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-base font-semibold">
                  Experiencia ASKILL de punta a punta
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Combinamos ingeniería industrial, automatización y herramientas
                  digitales para acompañar cada etapa de tu operación.
                </p>
                <div className="mt-6">
                  <Link
                    href="#about"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md bg-askill-primary px-5 text-sm font-semibold text-askill-primary-foreground hover:opacity-95 sm:w-auto"
                  >
                    Conocer a ASKILL
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
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

        <section id="seguridad" className="container mx-auto px-4 py-16">
          <div className="rounded-2xl border bg-card p-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-balance text-2xl font-semibold tracking-tight">
                  Cumplimiento, seguridad y trazabilidad por diseño
                </h2>
                <p className="mt-3 text-pretty text-muted-foreground">
                  ASKILL te ayuda a mantener registros consistentes y
                  verificables. Ideal para entornos regulados, auditorías
                  internas y control operacional.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <Link
                  href="#caracteristicas"
                  className="inline-flex h-11 items-center justify-center rounded-md border bg-background px-5 text-sm font-semibold hover:bg-accent"
                >
                  Explorar capacidades
                </Link>
                <Link
                  href="#soporte"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-askill-primary px-5 text-sm font-semibold text-askill-primary-foreground hover:opacity-95"
                >
                  Soporte técnico
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="soporte" className="border-t border-white/10 bg-secondary/20">
          <div className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Soporte técnico
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
              Acompañamos a nuestros clientes en la implementación, puesta en
              marcha y continuidad operativa de sus soluciones industriales.
            </p>
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
              <Link href="#caracteristicas" className="hover:text-foreground">
                Servicios
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

interface FeatureCardProps {
  title: string
  description: string
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

interface BenefitItemProps {
  title: string
  children: React.ReactNode
}

function BenefitItem({ title, children }: BenefitItemProps) {
  return (
    <li className="rounded-xl border bg-card p-5">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </li>
  )
}
