/** Canonical public site origin used for metadata, sitemap, and robots. */
export const siteName = "ASKILL S.A.S";

export const defaultSiteDescription =
  "Automatización industrial, control de procesos, desarrollo de software e Industria 4.0. ASKILL S.A.S — Pereira, Colombia.";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configured) {
    return new URL(configured.endsWith("/") ? configured.slice(0, -1) : configured);
  }

  return new URL("https://askillco.com");
}

export const siteRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/servicios", changeFrequency: "monthly", priority: 0.9 },
  { path: "/sobre-nosotros", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/politica-privacidad", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terminos-servicio", changeFrequency: "yearly", priority: 0.3 },
] as const;
