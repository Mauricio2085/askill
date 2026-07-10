/** Canonical public site origin used for metadata, sitemap, and robots. */
export const siteName = "ASKILL S.A.S";

export const siteLegalName = "Automation Services with Skill S.A.S.";

export const siteTaxId = "901754113-8";

export const defaultSiteDescription =
  "Automatización industrial, control de procesos, desarrollo de software e Industria 4.0. ASKILL S.A.S — Pereira, Colombia.";

export const siteContact = {
  email: "contacto@askillco.com",
  engineeringEmail: "ingenieria@askillco.com",
  telephone: "+57-310-678-9371",
  telephoneDisplay: "+57 310 678 9371",
  locality: "Pereira",
  region: "Risaralda",
  country: "CO",
} as const;

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configured) {
    return new URL(configured.endsWith("/") ? configured.slice(0, -1) : configured);
  }

  return new URL("https://askillco.com");
}

export function getOrganizationJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteName,
    legalName: siteLegalName,
    taxID: siteTaxId,
    url: siteUrl.toString(),
    logo: new URL("/icon.png", siteUrl).toString(),
    image: new URL("/icon.png", siteUrl).toString(),
    description: defaultSiteDescription,
    email: siteContact.email,
    telephone: siteContact.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteContact.locality,
      addressRegion: siteContact.region,
      addressCountry: siteContact.country,
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
  };
}

export const siteRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/servicios", changeFrequency: "monthly", priority: 0.9 },
  { path: "/sobre-nosotros", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/politica-privacidad", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terminos-servicio", changeFrequency: "yearly", priority: 0.3 },
] as const;
