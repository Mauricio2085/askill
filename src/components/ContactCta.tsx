import Link from 'next/link'

import type { ContactCtaContent } from '@/content/contact'
import { siteContainerClassName } from '@/lib/site-container'

type ContactCtaProps = ContactCtaContent & {
  secondaryLink?: {
    href: string
    label: string
  }
}

export function ContactCta({
  eyebrow,
  title,
  description,
  buttonLabel = 'Contáctanos',
  secondaryLink,
}: ContactCtaProps) {
  return (
    <section className="border-t border-border bg-secondary/20">
      <div className={`${siteContainerClassName} py-14 text-center sm:py-16 lg:py-20`}>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mx-auto mt-3 max-w-3xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contacto"
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95 sm:w-auto"
          >
            {buttonLabel}
          </Link>
          {secondaryLink ? (
            <Link
              href={secondaryLink.href}
              className="inline-flex h-11 w-full items-center justify-center rounded-md border bg-background px-6 text-sm font-semibold hover:bg-accent sm:w-auto"
            >
              {secondaryLink.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
