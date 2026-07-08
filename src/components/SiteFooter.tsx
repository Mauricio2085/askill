import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Automation Services with Skill S.A.S
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/#servicios" className="hover:text-foreground">
              Servicios
            </Link>
            <Link href="/#plataforma-digital" className="hover:text-foreground">
              Plataforma digital
            </Link>
            <Link href="/sobre-nosotros" className="hover:text-foreground">
              Sobre nosotros
            </Link>
            <Link href="/contacto" className="hover:text-foreground">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
