import { access, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const staticsDir = path.join(process.cwd(), "src/assets/statics");

/** WebP sources: best LCP/SEO tradeoff for photographic assets with next/image. */
const jobs = [
  {
    input: "Jumbotron_Askill.png",
    output: "Jumbotron_Askill.webp",
    width: 1920,
    quality: 78,
  },
  {
    input: "plc.png",
    output: "plc.webp",
    width: 1400,
    quality: 78,
  },
  {
    input: "software.png",
    output: "software.webp",
    width: 1400,
    quality: 78,
  },
  {
    input: "variador.png",
    output: "variador.webp",
    width: 1600,
    quality: 78,
  },
  {
    input: "iiot.jpeg",
    output: "iiot.webp",
    width: 1400,
    quality: 78,
  },
  {
    input: "sensores.jpeg",
    output: "sensores.webp",
    width: 1400,
    quality: 78,
  },
  {
    input: "gabinete_control.jpg",
    output: "gabinete_control.webp",
    width: 1400,
    quality: 78,
  },
];

await mkdir(staticsDir, { recursive: true });

for (const job of jobs) {
  const inputPath = path.join(staticsDir, job.input);
  const outputPath = path.join(staticsDir, job.output);

  try {
    await access(inputPath);
  } catch {
    console.log(`skip ${job.input} (missing)`);
    continue;
  }

  const before = await sharp(inputPath).metadata();
  const result = await sharp(inputPath)
    .rotate()
    .resize({
      width: job.width,
      withoutEnlargement: true,
      fit: "inside",
    })
    .flatten({ background: "#1c1c1c" })
    .webp({ quality: job.quality, effort: 6 })
    .toFile(outputPath);

  const after = await sharp(outputPath).metadata();
  const beforeKb = ((before.size ?? 0) / 1024).toFixed(0);
  const afterKb = (result.size / 1024).toFixed(0);

  console.log(
    `${job.input} (${before.width}x${before.height}, ${beforeKb}KB) → ${job.output} (${after.width}x${after.height}, ${afterKb}KB)`,
  );
}
