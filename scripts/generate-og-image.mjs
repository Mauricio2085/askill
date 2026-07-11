import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const width = 1200;
const height = 630;
const orange = "#ee752f";
const black = "#1c1c1c";
const muted = "#a3a3a3";
const white = "#ffffff";
const appDir = path.join(process.cwd(), "src/app");
const altText =
  "ASKILL S.A.S — Automatización industrial y digitalización en Pereira, Colombia.\n";

const logo = await sharp(path.join(appDir, "icon.png"))
  .resize(220, 220, {
    fit: "contain",
    background: { r: 28, g: 28, b: 28, alpha: 1 },
  })
  .png()
  .toBuffer();

const overlay = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#141414"/>
      <stop offset="55%" stop-color="${black}"/>
      <stop offset="100%" stop-color="#24180f"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="0" y="0" width="12" height="${height}" fill="${orange}"/>
  <text x="320" y="250" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="700" fill="${orange}">ASKILL S.A.S</text>
  <text x="320" y="320" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="400" fill="${white}">Automatización industrial y digitalización</text>
  <text x="320" y="390" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="400" fill="${muted}">Ingeniería en planta · Software a la medida · Industria 4.0</text>
  <text x="320" y="520" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="400" fill="${muted}">Pereira, Colombia</text>
</svg>`);

const image = await sharp(overlay)
  .composite([
    {
      input: logo,
      left: 64,
      top: Math.round((height - 220) / 2) - 10,
    },
  ])
  .png({ compressionLevel: 9 })
  .toBuffer();

await sharp(image).toFile(path.join(appDir, "opengraph-image.png"));
await sharp(image).toFile(path.join(appDir, "twitter-image.png"));
await writeFile(path.join(appDir, "opengraph-image.alt.txt"), altText);
await writeFile(path.join(appDir, "twitter-image.alt.txt"), altText);

console.log("Generated opengraph-image.png and twitter-image.png (1200x630)");
