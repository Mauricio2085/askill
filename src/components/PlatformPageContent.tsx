import Image from "next/image";
import Link from "next/link";

import { WhatsAppContactLink } from "@/components/WhatsAppContact";
import { platformPageContent } from "@/content/platform";
import {
  getPlatformModuleDetail,
  platformModules,
  platformService,
} from "@/content/services";
import { sitePlatform } from "@/lib/site";
import { siteContainerClassName } from "@/lib/site-container";

export function PlatformPageContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-askill-secondary/80 to-background" />
        <div className={`${siteContainerClassName} py-16 sm:py-20 lg:py-24`}>
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
              {platformPageContent.eyebrow}
            </p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {platformPageContent.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
              {platformPageContent.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={platformPageContent.contactHref}
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95 sm:w-auto"
              >
                {platformPageContent.primaryCtaLabel}
              </Link>
              <WhatsAppContactLink intent="platform" variant="outline" />
              <a
                href={sitePlatform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto"
              >
                {platformPageContent.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className={`${siteContainerClassName} py-14 sm:py-16 lg:py-20`}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
              {platformPageContent.modulesEyebrow}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {platformPageContent.modulesTitle}
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
              {platformPageContent.modulesDescription}
            </p>
          </div>

          <ul className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
            {platformModules.map((module) => {
              const detail = getPlatformModuleDetail(module);

              return (
                <li
                  key={module.id}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="relative aspect-16/10 border-b bg-secondary/30">
                    <Image
                      src={module.image}
                      alt={`${platformService.title} — ${module.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-askill-primary">
                      {module.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">
                      {module.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {module.subtitle}
                    </p>
                    <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {platformPageContent.problemLabel}
                        </dt>
                        <dd className="mt-1.5 text-pretty">{detail.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {platformPageContent.solutionLabel}
                        </dt>
                        <dd className="mt-1.5 text-pretty">{detail.solution}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {platformPageContent.impactLabel}
                        </dt>
                        <dd className="mt-1.5 text-pretty">{detail.impact}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className={`${siteContainerClassName} py-14 sm:py-16 lg:py-20`}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
              {platformPageContent.implementationEyebrow}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {platformPageContent.implementationTitle}
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
              {platformPageContent.implementationDescription}
            </p>
          </div>

          <ol className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:mt-14">
            {platformPageContent.implementationSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <span className="text-sm font-semibold text-askill-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
