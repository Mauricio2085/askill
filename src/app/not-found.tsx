import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContainerClassName } from "@/lib/site-container";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 bg-radial-gradient(ellipse_at_top,_rgba(238,117,47,0.12),_transparent_55%)"
            aria-hidden
          />
          <div
            className={`${siteContainerClassName} relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center sm:py-24`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-askill-primary">
              Error 404
            </p>
            <h1 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Esta ruta no está en el plano
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              La página que buscas no existe o fue movida. Vuelve al inicio o
              revisa nuestros servicios de ingeniería y digitalización.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95"
              >
                Volver al inicio
              </Link>
              <Link
                href="/servicios"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-semibold text-foreground hover:border-askill-primary/50"
              >
                Ver servicios
              </Link>
              <Link
                href="/contacto"
                className="inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-semibold text-askill-primary hover:underline"
              >
                Contacto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
