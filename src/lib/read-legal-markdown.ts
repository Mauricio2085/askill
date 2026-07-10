import { readFile } from "node:fs/promises";
import path from "node:path";

export type LegalDocumentSlug =
  | "politica-privacidad"
  | "terminos-servicio";

export async function readLegalMarkdown(slug: LegalDocumentSlug) {
  const filePath = path.join(
    process.cwd(),
    "src/content/legal",
    `${slug}.md`,
  );

  return readFile(filePath, "utf8");
}
