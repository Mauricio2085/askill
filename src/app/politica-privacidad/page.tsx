import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { MarkdownDocument } from "@/components/MarkdownDocument";
import { SiteFooter } from "@/components/SiteFooter";
import { readLegalMarkdown } from "@/lib/read-legal-markdown";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de tratamiento de datos personales de Automation Services with Skill S.A.S. conforme a la Ley 1581 de 2012.",
  openGraph: {
    title: "Política de privacidad | ASKILL S.A.S",
    description:
      "Política de tratamiento de datos personales conforme a la Ley 1581 de 2012.",
    url: "/politica-privacidad",
  },
  alternates: {
    canonical: "/politica-privacidad",
  },
};

export default async function PrivacyPolicyPage() {
  const content = await readLegalMarkdown("politica-privacidad");

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="main-content">
        <MarkdownDocument content={content} />
      </main>
      <SiteFooter />
    </div>
  );
}
