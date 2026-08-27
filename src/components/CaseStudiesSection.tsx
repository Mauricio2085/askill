import Link from "next/link";

import {
  caseStudiesSectionContent,
  getPublishedCaseStudies,
  type CaseStudy,
} from "@/content/case-studies";
import { siteContainerClassName } from "@/lib/site-container";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="border-b border-border py-10 last:border-b-0 sm:py-12">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold text-askill-primary">
          {study.serviceLabel}
        </span>
        <span className="text-muted-foreground" aria-hidden>
          ·
        </span>
        <span className="text-muted-foreground">{study.sector}</span>
      </div>

      <h3 className="mt-3 text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {study.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-foreground/80">
        {study.clientDisplayName}
      </p>

      <dl className="mt-8 grid gap-6 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {caseStudiesSectionContent.problemLabel}
          </dt>
          <dd className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90">
            {study.problem}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {caseStudiesSectionContent.solutionLabel}
          </dt>
          <dd className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90">
            {study.solution}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {caseStudiesSectionContent.resultLabel}
          </dt>
          <dd className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90">
            {study.result}
          </dd>
          {study.resultMetric ? (
            <p className="mt-3 text-sm font-semibold text-askill-primary">
              {study.resultMetric}
            </p>
          ) : null}
        </div>
      </dl>
    </article>
  );
}

export function CaseStudiesSection() {
  const published = getPublishedCaseStudies();

  if (published.length === 0) return null;

  return (
    <section
      className="border-t border-border bg-background"
      aria-labelledby="case-studies-heading"
    >
      <div className={`${siteContainerClassName} py-14 sm:py-16`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
            {caseStudiesSectionContent.eyebrow}
          </p>
          <h2
            id="case-studies-heading"
            className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {caseStudiesSectionContent.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            {caseStudiesSectionContent.description}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl border-t border-border sm:mt-12">
          {published.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/contacto"
            className="inline-flex h-11 items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95"
          >
            {caseStudiesSectionContent.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
