'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import menuHamburger from '@/assets/statics/menu-hamburguesa.svg'
import {
  engineeringServices,
  platformService,
} from '@/content/services'
import { isNavItemActive, mainNavItems } from '@/content/navigation'
import { askillLogoImageSrc } from '@/lib/askill-logo'

const serviceLinks = [
  ...engineeringServices.map((service) => ({
    href: `/servicios#${service.id}`,
    label: service.title,
  })),
  {
    href: `/servicios#${platformService.id}`,
    label: platformService.title,
  },
]

function headerNavLinkClassName(isActive: boolean) {
  return isActive
    ? 'font-semibold text-askill-primary'
    : 'text-askill-secondary-foreground/90 transition-colors hover:text-askill-secondary-foreground'
}

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const isServicesActive = isNavItemActive(pathname, '/servicios')

  function closeMenu() {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-askill-secondary text-askill-secondary-foreground">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-askill-primary focus-visible:ring-offset-2 focus-visible:ring-offset-askill-secondary"
          aria-label="ASKILL - Inicio"
          onClick={closeMenu}
        >
          <Image
            src={askillLogoImageSrc}
            alt="ASKILL"
            width={200}
            height={106}
            priority
            className="h-auto w-36 object-contain sm:w-40 md:w-44 lg:w-48 xl:w-[200px]"
          />
        </Link>

        <nav
          className="hidden items-center md:flex"
          aria-label="Navegación principal"
        >
          <ul className="flex items-center gap-8 font-sans text-base lg:gap-11">
            <li className="group relative">
              <Link
                href="/servicios"
                aria-current={isServicesActive ? 'page' : undefined}
                className={headerNavLinkClassName(isServicesActive)}
              >
                Servicios
              </Link>
              <div className="invisible absolute left-0 top-full z-50 min-w-[16rem] pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="rounded-lg border border-border bg-askill-secondary py-2 shadow-lg">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-sm text-askill-secondary-foreground/90 hover:bg-white/10 hover:text-askill-secondary-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {mainNavItems
              .filter((item) => item.href !== '/servicios')
              .map((item) => {
                const isActive = isNavItemActive(pathname, item.href)

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={headerNavLinkClassName(isActive)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Image
            src={menuHamburger}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
            aria-hidden
          />
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-askill-secondary px-4 py-4 md:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col gap-4 font-sans text-base">
            <li>
              <button
                type="button"
                className={`flex w-full items-center justify-between text-left ${headerNavLinkClassName(isServicesActive)}`}
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((open) => !open)}
              >
                Servicios
                <span aria-hidden>{isServicesOpen ? '−' : '+'}</span>
              </button>
              {isServicesOpen ? (
                <ul className="mt-3 flex flex-col gap-2 border-l border-white/10 pl-4">
                  <li>
                    <Link
                      href="/servicios"
                      aria-current={isServicesActive ? 'page' : undefined}
                      className="block text-sm text-askill-secondary-foreground/80 hover:text-askill-secondary-foreground"
                      onClick={closeMenu}
                    >
                      Ver todos
                    </Link>
                  </li>
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block text-sm text-askill-secondary-foreground/80 hover:text-askill-secondary-foreground"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            {mainNavItems
              .filter((item) => item.href !== '/servicios')
              .map((item) => {
                const isActive = isNavItemActive(pathname, item.href)

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block ${headerNavLinkClassName(isActive)}`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
