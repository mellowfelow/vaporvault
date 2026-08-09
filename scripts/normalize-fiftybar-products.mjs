// One-off utility: normalizes the 78 client-supplied Fifty Bar product renders (already
// clean white-background 3D renders, but inconsistent canvas sizes/padding) onto a uniform
// white 4:3 canvas so every pc-img product tile fills identically. Run manually when new
// product photos are supplied — not part of the build pipeline. See scripts/normalize-logos.mjs
// for the equivalent brand-logo utility.
import sharp from 'sharp';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcRoot = join(root, 'product images');
const outDir = join(root, 'public', 'images', 'products', 'fifty-bar');

const CANVAS_W = 1600;
const CANVAS_H = 1200;
const FILL = 0.94;

// [source folder, source filename, output slug]
const jobs = [
  // Original Series
  ['Original Series', 'Aloe Grapple Watermelon.webp', 'original-aloe-grapple-watermelon'],
  ['Original Series', 'Aloe Kiwi Strawberry.webp', 'original-aloe-kiwi-strawberry'],
  ['Original Series', 'Blue Razzle Ice.webp', 'original-blue-razzle-ice'],
  ['Original Series', 'Blueberry Cereal donut Milk.webp', 'original-blueberry-cereal-donut-milk'],
  ['Original Series', 'Cinnamon Funnel Cake.webp', 'original-cinnamon-funnel-cake'],
  ['Original Series', 'Diamond Peach Ice.webp', 'original-diamond-peach-ice'],
  ['Original Series', 'Juicy Mango Melon Ice.webp', 'original-juicy-mango-melon-ice'],
  ['Original Series', 'Kyoho Grape Jelly.webp', 'original-kyoho-grape-jelly'],
  ['Original Series', 'Mint.webp', 'original-mint'],
  ['Original Series', 'Pacifc Cooler.webp', 'original-pacific-cooler'],
  ['Original Series', 'Pink Squares.webp', 'original-pink-squares'],
  ['Original Series', 'Tobaccocino.webp', 'original-tobaccocino'],
  ['Original Series', 'Triple Watermelon.webp', 'original-triple-watermelon'],
  ['Original Series', 'Vanilla Custard.webp', 'original-vanilla-custard'],
  // White Series
  ['White Series', 'Baja Mango.webp', 'white-baja-mango'],
  ['White Series', 'Clear.webp', 'white-clear'],
  ['White Series', 'Fresh Mango Lychee.webp', 'white-fresh-mango-lychee'],
  ['White Series', 'Frozen Apple.webp', 'white-frozen-apple'],
  ['White Series', 'Frozen Orange Mango Pear.webp', 'white-frozen-orange-mango-pear'],
  ['White Series', 'Frozen Watermelon.webp', 'white-frozen-watermelon'],
  ['White Series', 'Mint.webp', 'white-mint'],
  ['White Series', 'Pineapple Whip.webp', 'white-pineapple-whip'],
  ['White Series', 'Strawberry Kiwi Ice.webp', 'white-strawberry-kiwi-ice'],
  ['White Series', 'Strawberry Lemon Grape.webp', 'white-strawberry-lemon-grape'],
  ['White Series', 'Strawberry Watermelon Twist.webp', 'white-strawberry-watermelon-twist'],
  // Black Series
  ['Black Series', 'Blueberry Cereal Donut Milk.webp', 'black-blueberry-cereal-donut-milk'],
  ['Black Series', 'Blueberry Yogurt.webp', 'black-blueberry-yogurt'],
  ['Black Series', 'Butterbean.webp', 'black-butterbean'],
  ['Black Series', 'Cinnamon Funnel Cake.webp', 'black-cinnamon-funnel-cake'],
  ['Black Series', 'Gold Tobacco.webp', 'black-gold-tobacco'],
  ['Black Series', 'Kentucky Tobacco.webp', 'black-kentucky-tobacco'],
  ['Black Series', 'Milky Loops.webp', 'black-milky-loops'],
  ['Black Series', 'Raspberry Jam.webp', 'black-raspberry-jam'],
  ['Black Series', 'Strawberry Cereal Donut Milk.webp', 'black-strawberry-cereal-donut-milk'],
  ['Black Series', 'Strawberry Super Strudel.webp', 'black-strawberry-super-strudel'],
  ['Black Series', 'Vanilla Custard.webp', 'black-vanilla-custard'],
  // Fifty Bar X Fruitia 20K
  ['Fifty Bar X Fruita', 'B-POP.webp', 'fruitia-b-pop'],
  ['Fifty Bar X Fruita', 'Baja Burst.webp', 'fruitia-baja-burst'],
  ['Fifty Bar X Fruita', 'Blueberry Pound Cake.webp', 'fruitia-blueberry-pound-cake'],
  ['Fifty Bar X Fruita', 'Bonker Berries.webp', 'fruitia-bonker-berries'],
  ['Fifty Bar X Fruita', 'Cookie Butter.webp', 'fruitia-cookie-butter'],
  ['Fifty Bar X Fruita', 'Hawaiian Punch.webp', 'fruitia-hawaiian-punch'],
  ['Fifty Bar X Fruita', 'Polar Ice.webp', 'fruitia-polar-ice'],
  ['Fifty Bar X Fruita', 'Sour Batch.webp', 'fruitia-sour-batch'],
  ['Fifty Bar X Fruita', 'Southern Tobacco.webp', 'fruitia-southern-tobacco'],
  ['Fifty Bar X Fruita', 'Spearmint.webp', 'fruitia-spearmint'],
  ['Fifty Bar X Fruita', 'Strawberry Beltz.webp', 'fruitia-strawberry-beltz'],
  ['Fifty Bar X Fruita', 'Swedish Fish.webp', 'fruitia-swedish-fish'],
  // Fifty Bar X Humble
  ['Fifty Bar X Humble', 'banana-funnel-cake-1.webp', 'humble-banana-funnel-cake'],
  ['Fifty Bar X Humble', 'BLUE-RAZZ-BUBBLEGUM-1-1.webp', 'humble-blue-razz-bubblegum'],
  ['Fifty Bar X Humble', 'BLUE-SLUSH-1-1.webp', 'humble-blue-slush'],
  ['Fifty Bar X Humble', 'GOLDEN-MANGO-1-1.webp', 'humble-golden-mango'],
  ['Fifty Bar X Humble', 'LEMON-WATERMELON-1-1.webp', 'humble-lemon-watermelon'],
  ['Fifty Bar X Humble', 'ORANGE-MANGO-SHERBET-1-1.webp', 'humble-orange-mango-sherbet'],
  ['Fifty Bar X Humble', 'STRAWBERRY-BANANA-1-1.webp', 'humble-strawberry-banana'],
  ['Fifty Bar X Humble', 'SWEET-MINT-1-1.webp', 'humble-sweet-mint'],
  ['Fifty Bar X Humble', 'VANILLA-TOBACCO-1-1.webp', 'humble-vanilla-tobacco'],
  ['Fifty Bar X Humble', 'WATERMELON-LYCHEE-1-1.webp', 'humble-watermelon-lychee'],
  // Fifty Bar X Hidden Hills
  ['Fifty Bar X Hidden Hills', 'Hawaiian Nectar.webp', 'hiddenhills-hawaiian-nectar'],
  ['Fifty Bar X Hidden Hills', 'Honeyberry Cream.webp', 'hiddenhills-honeyberry-cream'],
  ['Fifty Bar X Hidden Hills', 'Lava Blast.webp', 'hiddenhills-lava-blast'],
  ['Fifty Bar X Hidden Hills', 'Lemon Cake Dough.webp', 'hiddenhills-lemon-cake-dough'],
  ['Fifty Bar X Hidden Hills', 'Pina Lush.webp', 'hiddenhills-pina-lush'],
  ['Fifty Bar X Hidden Hills', 'Pink Milk.webp', 'hiddenhills-pink-milk'],
  ['Fifty Bar X Hidden Hills', 'Pink Sour Straws.webp', 'hiddenhills-pink-sour-straws'],
  ['Fifty Bar X Hidden Hills', 'Sour Peach Ringz.webp', 'hiddenhills-sour-peach-ringz'],
  ['Fifty Bar X Hidden Hills', 'Vanilla Bean Tobacco.webp', 'hiddenhills-vanilla-bean-tobacco'],
  ['Fifty Bar X Hidden Hills', 'Wazza Limon.webp', 'hiddenhills-wazza-limon'],
  ['Fifty Bar X Hidden Hills', 'Yeti Mint.webp', 'hiddenhills-yeti-mint'],
  // Midnight Series (Fresh-Mango-Lychee.png excluded — not an official Midnight flavor)
  ['Midnight Series', 'Banana-Fresca.png', 'midnight-banana-fresca'],
  ['Midnight Series', 'Frozen-Orange-Pom.png', 'midnight-frozen-orange-pom'],
  ['Midnight Series', 'Frozen-Peach-Lime-Razz.png', 'midnight-frozen-peach-lime-razz'],
  ['Midnight Series', 'Iced Green Rancher.png', 'midnight-iced-green-rancher'],
  ['Midnight Series', 'Iced-Blue-Rancher.png', 'midnight-iced-blue-rancher'],
  ['Midnight Series', 'Iced-Strawberry-Pear.png', 'midnight-iced-strawberry-pear'],
  ['Midnight Series', 'Limoncello.png', 'midnight-limoncello'],
  ['Midnight Series', 'Orange Mint.png', 'midnight-orange-mint'],
  ['Midnight Series', 'Sour-Strawberry-Melon.png', 'midnight-sour-strawberry-melon'],
];

async function run() {
  mkdirSync(outDir, { recursive: true });
  let ok = 0, skipped = 0;
  for (const [folder, file, slug] of jobs) {
    const srcPath = join(srcRoot, folder, file);
    if (!existsSync(srcPath)) {
      console.warn(`⚠ skip (not found): ${folder}/${file}`);
      skipped++;
      continue;
    }

    const trimmed = sharp(await sharp(srcPath).ensureAlpha().trim({ threshold: 8 }).toBuffer());
    const meta = await trimmed.metadata();

    const scale = Math.min((CANVAS_W * FILL) / meta.width, (CANVAS_H * FILL) / meta.height);
    const targetW = Math.round(meta.width * scale);
    const targetH = Math.round(meta.height * scale);

    const resized = await trimmed.resize(targetW, targetH, { kernel: sharp.kernel.lanczos3 }).toBuffer();

    const composed = sharp({
      create: { width: CANVAS_W, height: CANVAS_H, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
    }).composite([{ input: resized, gravity: 'center' }]);

    // Adaptive WebP quality, stay under ~150KB
    let quality = 88;
    let buffer = await composed.webp({ quality }).toBuffer();
    while (buffer.length > 150000 && quality > 40) {
      quality -= 8;
      buffer = await composed.webp({ quality }).toBuffer();
    }
    writeFileSync(join(outDir, `${slug}.webp`), buffer);
    ok++;
  }
  console.log(`✓ ${ok} product images normalized to public/images/products/fifty-bar/ (${skipped} skipped)`);
}

run();
