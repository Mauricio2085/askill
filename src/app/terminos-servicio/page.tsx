import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import { SiteFooter } from "@/components/SiteFooter";
import { readLegalMarkdown } from "@/lib/read-legal-markdown";

export const metadata: Metadata = {
  title: "Términos de servicio | ASKILL S.A.S",
  description:
    "Términos y condiciones de uso del sitio web de ASKILL S.A.S.",
};

export default async function TermsOfServicePage() {
  const content = await readLegalMarkdown("terminos-servicio");

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        <MarkdownDocument content={content} />
      </main>
      <SiteFooter />
    </div>
  );
}
