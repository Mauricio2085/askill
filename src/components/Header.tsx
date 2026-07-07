'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import menuHamburger from '@/assets/statics/menu-hamburguesa.svg'
import { askillLogoImageSrc } from '@/lib/askill-logo'

const navItems = [
  { href: '#caracteristicas', label: 'Servicios' },
  { href: '#about', label: 'Sobre nosotros' },
  { href: '#soporte', label: 'Soporte técnico' },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-askill-secondary text-askill-secondary-foreground">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
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
            height={56}
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav
          className="hidden items-center md:flex"
          aria-label="Navegación principal"
        >
          <ul className="flex items-center gap-8 font-sans text-base lg:gap-11">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-askill-secondary-foreground/90 transition-colors hover:text-askill-secondary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-askill-secondary-foreground/90 transition-colors hover:text-askill-secondary-foreground"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
