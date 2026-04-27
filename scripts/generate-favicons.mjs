// Resize the brand logo into the favicon set:
// - src/app/icon.png            (256x256 — auto-linked by Next)
// - src/app/apple-icon.png      (180x180 — iOS home screen)
// - src/app/favicon.ico         (16x16 + 32x32 packed)
// - public/icon-192.png         (192x192 — manifest)
// - public/icon-512.png         (512x512 — manifest)
//
// Run with: node scripts/generate-favicons.mjs

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "public/brand/relife-logo.png");

async function pngBuffer(size) {
  return sharp(src)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();
}

async function writePng(target, size) {
  const buf = await pngBuffer(size);
  await writeFile(target, buf);
  console.log(`wrote ${target} (${size}×${size}, ${buf.length} bytes)`);
}

// Build a minimal ICO embedding PNG entries (modern format, supported by all current browsers).
async function buildIco(target, sizes) {
  const buffers = await Promise.all(sizes.map((s) => pngBuffer(s)));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(sizes.length, 4); // image count

  const entrySize = 16;
  const directory = Buffer.alloc(entrySize * sizes.length);
  let offset = 6 + entrySize * sizes.length;
  for (let i = 0; i < sizes.length; i++) {
    const s = sizes[i];
    const buf = buffers[i];
    const e = directory.subarray(i * entrySize, (i + 1) * entrySize);
    e[0] = s >= 256 ? 0 : s; // width (0 means 256)
    e[1] = s >= 256 ? 0 : s; // height
    e[2] = 0; // color palette count
    e[3] = 0; // reserved
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(buf.length, 8); // bytes of image data
    e.writeUInt32LE(offset, 12); // image data offset from start of file
    offset += buf.length;
  }

  const ico = Buffer.concat([header, directory, ...buffers]);
  await writeFile(target, ico);
  console.log(`wrote ${target} (${sizes.join(",")}, ${ico.length} bytes)`);
}

await Promise.all([
  writePng(join(root, "src/app/icon.png"), 256),
  writePng(join(root, "src/app/apple-icon.png"), 180),
  writePng(join(root, "public/icon-192.png"), 192),
  writePng(join(root, "public/icon-512.png"), 512),
  buildIco(join(root, "src/app/favicon.ico"), [16, 32, 48]),
]);
