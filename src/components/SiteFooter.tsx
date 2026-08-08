'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { isNavItemActive, mainNavItems } from '@/content/navigation'
import { sitePlatform } from '@/lib/site'
import { siteContainerClassName } from '@/lib/site-container'

const legalNavItems = [
  { href: '/politica-privacidad', label: 'Política de privacidad' },
  { href: '/terminos-servicio', label: 'Términos de servicio' },
] as const

const platformNavItem = {
  href: sitePlatform.url,
  label: sitePlatform.footerLabel,
  external: true,
} as const

function footerNavLinkClassName(isActive: boolean) {
  return isActive
    ? 'font-medium text-foreground'
    : 'hover:text-foreground'
}

export function SiteFooter() {
  const pathname = usePathname()
  const footerNavItems = [...mainNavItems, platformNavItem, ...legalNavItems]

  return (
    <footer className="border-t bg-background">
      <div className={`${siteContainerClassName} py-10 text-sm text-muted-foreground`}>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Automation Services with Skill S.A.S
          </p>
          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
              {footerNavItems.map((item) => {
                const isExternal = 'external' in item && item.external

                if (isExternal) {
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footerNavLinkClassName(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                }

                const isActive = isNavItemActive(pathname, item.href)

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={footerNavLinkClassName(isActive)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
