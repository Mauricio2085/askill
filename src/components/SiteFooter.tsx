'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { isNavItemActive, mainNavItems } from '@/content/navigation'
import { siteContainerClassName } from '@/lib/site-container'

function footerNavLinkClassName(isActive: boolean) {
  return isActive
    ? 'font-medium text-foreground'
    : 'hover:text-foreground'
}

export function SiteFooter() {
  const pathname = usePathname()

  return (
    <footer className="border-t bg-background">
      <div className={`${siteContainerClassName} py-10 text-sm text-muted-foreground`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Automation Services with Skill S.A.S
          </p>
          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap items-center gap-4">
              {mainNavItems.map((item) => {
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
