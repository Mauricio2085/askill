import { getOrganizationJsonLd } from "@/lib/site";

export function OrganizationJsonLd() {
  const jsonLd = getOrganizationJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
