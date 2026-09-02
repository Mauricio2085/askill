import type { Metadata } from "next";

import { ContactCta } from "@/components/ContactCta";
import { Header } from "@/components/Header";
import { PlatformPageContent } from "@/components/PlatformPageContent";
import { SiteFooter } from "@/components/SiteFooter";
import { contactCtaByPage } from "@/content/contact";

export const metadata: Metadata = {
  title: "Askill Industrial Platform",
  description:
    "Plataforma SaaS para operaciones industriales: permisos SST con evidencia digital, gestión de activos y monitoreo IIoT. Pide una demo sin visita técnica. ASKILL S.A.S — Pereira, Colombia.",
  openGraph: {
    title: "Askill Industrial Platform | ASKILL S.A.S",
    description:
      "SST, activos e IIoT en una sola plataforma. SST disponible hoy; pide una demo o un acceso de prueba.",
    url: "/plataforma",
  },
  twitter: {
    title: "Askill Industrial Platform | ASKILL S.A.S",
    description:
      "SST, activos e IIoT en una sola plataforma. SST disponible hoy; pide una demo o un acceso de prueba.",
  },
  alternates: {
    canonical: "/plataforma",
  },
};

export default function PlatformPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="main-content">
        <PlatformPageContent />
        <ContactCta
          {...contactCtaByPage.platform}
          whatsappIntent="platform"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
