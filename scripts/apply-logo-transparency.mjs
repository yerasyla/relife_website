/**
 * adaptive-icon.png is exported as RGB (no alpha) with a light gray mat.
 * This script removes neutral light pixels so the logo can sit on any background.
 */
import sharp from "sharp";
import { copyFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "public/brand/relife-logo.png");

function isNeutralBackground(r, g, b) {
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const chroma = max - min;
  const avg = (r + g + b) / 3;
  // Flat mat + “checkerboard” tiles are achromatic (R≈G≈B). Editor checkers often
  // use ~#C0C0C0 as well as white — those fail a “only if min≥210” rule and stay
  // visible on the site. Logo strokes are saturated periwinkle (high chroma).
  if (chroma > 14) return false;
  if (avg < 118 || avg > 252) return false;
  return true;
}

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (isNeutralBackground(r, g, b)) {
    data[i + 3] = 0;
  }
}

await sharp(data, {
  raw: { width, height, channels: 4 },
})
  .png()
  .toFile(join(root, "public/brand/relife-logo.png"));
copyFileSync(
  join(root, "public/brand/relife-logo.png"),
  join(root, "src/app/icon.png")
);
copyFileSync(
  join(root, "public/brand/relife-logo.png"),
  join(root, "src/app/apple-icon.png")
);

console.log("Wrote transparent relife-logo.png + app/icon.png + apple-icon.png");
