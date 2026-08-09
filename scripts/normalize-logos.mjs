// One-off utility: normalizes raw client-supplied brand logos (wildly inconsistent
// source dimensions/whitespace) onto a uniform transparent 2:1 canvas so every
// brand-logo-wrap tile in the brands grid fills consistently. Run manually when new
// logos are supplied — not part of the build pipeline.
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'images');

const CANVAS_W = 400;
const CANVAS_H = 200;
const FILL = 0.86; // logo fills ~86% of the canvas's shorter usable dimension

const srcDir = join(root, 'assets', 'brand-logos');

const jobs = [
  { src: 'nexa vape logo', out: 'logo-nexa.png' },
  { src: 'elf bar logo.jpg', out: 'logo-elf-bar.png' },
  { src: 'off stamp vape logo.png', out: 'logo-off-stamp.png' },
  { src: 'fume vape logo.jpg', out: 'logo-fume.png' },
  { src: 'foger vape logo.png', out: 'logo-foger.png' },
  { src: 'ut vape logo.png', out: 'logo-ut-vape.png' },
  { src: 'smok logo.png', out: 'logo-smok.png' },
  { src: 'vaporesso logo.png', out: 'logo-vaporesso.png' },
];

async function run() {
  for (const job of jobs) {
    const srcPath = join(srcDir, job.src);
    if (!existsSync(srcPath)) {
      console.warn(`⚠ skip (not found): ${job.src}`);
      continue;
    }

    let img = sharp(srcPath).ensureAlpha();
    const trimmed = sharp(await img.trim({ threshold: 12 }).toBuffer());
    const meta = await trimmed.metadata();

    const scale = Math.min((CANVAS_W * FILL) / meta.width, (CANVAS_H * FILL) / meta.height);
    const targetW = Math.round(meta.width * scale);
    const targetH = Math.round(meta.height * scale);

    const resized = await trimmed
      .resize(targetW, targetH, { kernel: sharp.kernel.lanczos3 })
      .toBuffer();

    await sharp({
      create: { width: CANVAS_W, height: CANVAS_H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    })
      .composite([{ input: resized, gravity: 'center' }])
      .png({ quality: 90 })
      .toFile(join(outDir, job.out));

    console.log(`✓ ${job.src} → public/images/${job.out} (${targetW}x${targetH} on ${CANVAS_W}x${CANVAS_H})`);
  }
}

run();
