// One-off utility: normalizes the second client-supplied product photo batch (Breeze,
// Flum, Geek Bar, RAZ, Tyson, UT Bar, Lost Mary — ~300 files) onto uniform white 4:3
// canvases, same treatment as scripts/normalize-fiftybar-products.mjs. Run manually when
// new product photos are supplied — not part of the build pipeline.
//
// Output path: public/images/products/<brand>/<series>-<flavor-slug>.webp
// The <series>-<flavor-slug> portion MUST exactly match the slug the corresponding
// PRODUCTS entry in src/config/site.js computes, via the identical `slug()` function.
import sharp from 'sharp';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcRoot = join(root, 'product images');
const outRoot = join(root, 'public', 'images', 'products');

const CANVAS_W = 1600;
const CANVAS_H = 1200;
const FILL = 0.94;

const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// [srcFolder, srcFile, brand, seriesId, flavorName]
const jobs = [
  // ── Breeze Pro (existing device, new flavor photos) ──
  ['breeze/pro', 'Banana Mint Breeze Pro.png', 'breeze', 'pro', 'Banana Mint'],
  ['breeze/pro', 'Blue Raspberry BREEZE Pro.png', 'breeze', 'pro', 'Blue Raspberry'],
  ['breeze/pro', 'Blueberry Banana BREEZE Pro.png', 'breeze', 'pro', 'Blueberry Banana'],
  ['breeze/pro', 'Blueberry Mint BREEZE Pro.png', 'breeze', 'pro', 'Blueberry Mint'],
  ['breeze/pro', 'Blueberry Watermelon BREEZE Pro.png', 'breeze', 'pro', 'Blueberry Watermelon'],
  ['breeze/pro', 'Cherry Lemon BREEZE Pro.png', 'breeze', 'pro', 'Cherry Lemon'],
  ['breeze/pro', 'Citrus BREEZE Pro.png', 'breeze', 'pro', 'Citrus'],
  ['breeze/pro', 'Grape BREEZE Pro.png', 'breeze', 'pro', 'Grape'],
  ['breeze/pro', 'Lemon Mint Breeze Pro.png', 'breeze', 'pro', 'Lemon Mint'],
  ['breeze/pro', 'Menthol BREEZE Pro.png', 'breeze', 'pro', 'Menthol'],
  ['breeze/pro', 'Mint BREEZE Pro.png', 'breeze', 'pro', 'Mint'],
  ['breeze/pro', 'Orange Mango Watermelon BREEZE Pro.png', 'breeze', 'pro', 'Orange Mango Watermelon'],
  ['breeze/pro', 'Pineapple Coconut BREEZE Pro.png', 'breeze', 'pro', 'Pineapple Coconut'],
  ['breeze/pro', 'Pomegranate Berry Mint BREEZE Pro.png', 'breeze', 'pro', 'Pomegranate Berry Mint'],
  ['breeze/pro', 'Raspberry Lemon BREEZE Pro.png', 'breeze', 'pro', 'Raspberry Lemon'],
  ['breeze/pro', 'Spearmint BREEZE Pro.png', 'breeze', 'pro', 'Spearmint'],
  ['breeze/pro', 'Strawberry Banana BREEZE Pro.png', 'breeze', 'pro', 'Strawberry Banana'],
  ['breeze/pro', 'Strawberry Peach Mint BREEZE Pro.png', 'breeze', 'pro', 'Strawberry Peach Mint'],
  ['breeze/pro', 'Tobacco BREEZE Pro.png', 'breeze', 'pro', 'Tobacco'],

  // ── Flum Float X 10K (new device) ──
  ['flum/float', 'Banana FLOAT X 10K.png', 'flum', 'float-x-10k', 'Banana'],
  ['flum/float', 'Clear FLOAT X 10K.png', 'flum', 'float-x-10k', 'Clear'],
  ['flum/float', 'Clear Oolong FLOAT X 10K.png', 'flum', 'float-x-10k', 'Clear Oolong'],
  ['flum/float', 'Crisp Green FLOAT X 10K.png', 'flum', 'float-x-10k', 'Crisp Green'],
  ['flum/float', 'Green Grape FLOAT X 10K.png', 'flum', 'float-x-10k', 'Green Grape'],
  ['flum/float', 'Lemon Pineapple FLOAT X 10K.png', 'flum', 'float-x-10k', 'Lemon Pineapple'],
  ['flum/float', 'Lush Ice FLOAT X 10K.png', 'flum', 'float-x-10k', 'Lush Ice'],
  ['flum/float', 'Peach Ice FLOAT X 10K.png', 'flum', 'float-x-10k', 'Peach Ice'],
  ['flum/float', 'Pink Guava FLOAT X 10K.png', 'flum', 'float-x-10k', 'Pink Guava'],
  ['flum/float', 'Taro Ice FLOAT X 10K.png', 'flum', 'float-x-10k', 'Taro Ice'],

  // ── Flum Gio (new device) ──
  ['flum/gio', 'Flum Gio Berry Fusion.webp', 'flum', 'gio', 'Berry Fusion'],
  ['flum/gio', 'Flum Gio Coffee Pump.webp', 'flum', 'gio', 'Coffee Pump'],
  ['flum/gio', 'Flum Gio Juicy Apple.webp', 'flum', 'gio', 'Juicy Apple'],
  ['flum/gio', 'Flum Gio Litchi Ice.webp', 'flum', 'gio', 'Litchi Ice'],
  ['flum/gio', 'Flum Gio Power Bull.webp', 'flum', 'gio', 'Power Bull'],
  ['flum/gio', 'Flum Gio Tobacco Cream.webp', 'flum', 'gio', 'Tobacco Cream'],
  ['flum/gio', 'Flum Gio Tropical Punch.webp', 'flum', 'gio', 'Tropical Punch'],

  // ── Flum Mello (new device) ──
  ['flum/mello', 'FLUM Mello Blue Razz Icy.webp', 'flum', 'mello', 'Blue Razz Icy'],
  ['flum/mello', 'FLUM Mello Cool Mint.webp', 'flum', 'mello', 'Cool Mint'],
  ['flum/mello', 'FLUM Mello Midnight Barcelona.webp', 'flum', 'mello', 'Midnight Barcelona'],
  ['flum/mello', 'FLUM Mello Peach Icy.webp', 'flum', 'mello', 'Peach Icy'],
  ['flum/mello', 'FLUM Mello Rome.webp', 'flum', 'mello', 'Rome'],
  ['flum/mello', 'FLUM Mello Sour Apple Icy.webp', 'flum', 'mello', 'Sour Apple Icy'],
  ['flum/mello', 'FLUM Mello Strawberry Blast.webp', 'flum', 'mello', 'Strawberry Blast'],
  ['flum/mello', 'FLUM Mello Summer Delux.webp', 'flum', 'mello', 'Summer Deluxe'],
  ['flum/mello', 'FLUM Mello Sunshine Cherry.webp', 'flum', 'mello', 'Sunshine Cherry'],
  ['flum/mello', 'FLUM Mello Watermelon Icy.webp', 'flum', 'mello', 'Watermelon Icy'],

  // ── Flum Pebble (existing device, new flavor photos) ──
  ['flum/pebble', 'Aloe Watermelon Splash FLUM Pebble.png', 'flum', 'pebble', 'Aloe Watermelon Splash'],
  ['flum/pebble', 'Berrymelon Icy FLUM Pebble.png', 'flum', 'pebble', 'Berrymelon Icy'],
  ['flum/pebble', 'Blanco Grapefruit FLUM Pebble.png', 'flum', 'pebble', 'Blanco Grapefruit'],
  ['flum/pebble', 'Blue Razz Icy FLUM Pebble.png', 'flum', 'pebble', 'Blue Razz Icy'],
  ['flum/pebble', 'Blueberry Mint FLUM Pebble.png', 'flum', 'pebble', 'Blueberry Mint'],
  ['flum/pebble', 'Cherry Berry FLUM Pebble.png', 'flum', 'pebble', 'Cherry Berry'],
  ['flum/pebble', 'Clear FLUM Pebble.png', 'flum', 'pebble', 'Clear'],
  ['flum/pebble', 'Luscious Watermelon FLUM Pebble.png', 'flum', 'pebble', 'Luscious Watermelon'],
  ['flum/pebble', 'Menthol FLUM Pebble.png', 'flum', 'pebble', 'Menthol'],
  ['flum/pebble', 'Mighty Grapefruit FLUM Pebble.png', 'flum', 'pebble', 'Mighty Grapefruit'],
  ['flum/pebble', 'Peach Orange FLUM Pebble.png', 'flum', 'pebble', 'Peach Orange'],
  ['flum/pebble', 'Pineapple Coconut FLUM Pebble.png', 'flum', 'pebble', 'Pineapple Coconut'],
  ["flum/pebble", "Sour X'Max FLUM Pebble.png", 'flum', 'pebble', "Sour X'Max"],
  ['flum/pebble', 'Straw Guava FLUM Pebble.png', 'flum', 'pebble', 'Straw Guava'],
  ['flum/pebble', 'Strawberry Coconut FLUM Pebble.png', 'flum', 'pebble', 'Strawberry Coconut'],
  ['flum/pebble', 'Strawmelon Apple FLUM Pebble.png', 'flum', 'pebble', 'Strawmelon Apple'],
  ['flum/pebble', 'Strawmelon FLUM Pebble.png', 'flum', 'pebble', 'Strawmelon'],
  ['flum/pebble', 'Summer Glacier FLUM Pebble.png', 'flum', 'pebble', 'Summer Glacier'],
  ['flum/pebble', 'Tobacco Flum Pebble.png', 'flum', 'pebble', 'Tobacco'],
  ['flum/pebble', 'White Gummy FLUM Pebble.png', 'flum', 'pebble', 'White Gummy'],

  // ── Geek Bar Pulse 15000 (existing device, new flavor photos) ──
  ['geek bar/disposables/pulse', 'Banana Ice Geek Bar Pulse (Thermal Edition).png', 'geek-bar', 'pulse', 'Banana Ice'],
  ['geek bar/disposables/pulse', 'Drop Sour Savers Geek Bar Pulse (Savers Edition).png', 'geek-bar', 'pulse', 'Drop Sour Savers'],
  ['geek bar/disposables/pulse', 'Frozen Blackberry Fab Geek Bar Pulse (Frozen Edition).png', 'geek-bar', 'pulse', 'Frozen Blackberry Fab'],
  ['geek bar/disposables/pulse', 'Frozen Cherry Apple Geek Bar Pulse (Frozen Edition).png', 'geek-bar', 'pulse', 'Frozen Cherry Apple'],
  ['geek bar/disposables/pulse', 'Frozen Pina Colada Geek Bar Pulse (Frozen Edition).png', 'geek-bar', 'pulse', 'Frozen Pina Colada'],
  ['geek bar/disposables/pulse', 'Frozen Strawberry Geek Bar Pulse (Frozen Edition).png', 'geek-bar', 'pulse', 'Frozen Strawberry'],
  ['geek bar/disposables/pulse', 'Frozen Watermelon Geek Bar Pulse (Frozen Edition).png', 'geek-bar', 'pulse', 'Frozen Watermelon'],
  ['geek bar/disposables/pulse', 'Frozen White Grape Geek Bar Pulse (Frozen Edition).png', 'geek-bar', 'pulse', 'Frozen White Grape'],
  ['geek bar/disposables/pulse', 'Orange Mint Saver Geek Bar Pulse (Savers Edition).png', 'geek-bar', 'pulse', 'Orange Mint Saver'],
  ['geek bar/disposables/pulse', 'Peach Lemonade Geek Bar Pulse (Thermal Edition).png', 'geek-bar', 'pulse', 'Peach Lemonade'],
  ['geek bar/disposables/pulse', 'Pineapple Savers Geek Bar Pulse (Savers Edition).png', 'geek-bar', 'pulse', 'Pineapple Savers'],
  ['geek bar/disposables/pulse', 'Punch Geek Bar Pulse (Thermal Edition).png', 'geek-bar', 'pulse', 'Punch'],
  ['geek bar/disposables/pulse', 'Raspberry Watermelon Geek Bar Pulse (Thermal Edition).png', 'geek-bar', 'pulse', 'Raspberry Watermelon'],
  ['geek bar/disposables/pulse', 'Strawberry Banana Geek Bar Pulse.png', 'geek-bar', 'pulse', 'Strawberry Banana'],
  ['geek bar/disposables/pulse', 'Strawberry Kiwi Geek Bar Pulse (Thermal Edition).png', 'geek-bar', 'pulse', 'Strawberry Kiwi'],
  ['geek bar/disposables/pulse', 'Strawberry Savers Geek Bar Pulse (Savers Edition).png', 'geek-bar', 'pulse', 'Strawberry Savers'],
  ['geek bar/disposables/pulse', 'Wild Berry Savers Geek Bar Pulse (Savers Edition).png', 'geek-bar', 'pulse', 'Wild Berry Savers'],

  // ── Geek Bar Pulse 2 (new device) ──
  ['geek bar/disposables/pulse 2', 'Blue Razz Hubba Geek Bar Pulse 2.png', 'geek-bar', 'pulse-2', 'Blue Razz Hubba'],
  ['geek bar/disposables/pulse 2', 'Grape Hubba Geek Bar Pulse 2.png', 'geek-bar', 'pulse-2', 'Grape Hubba'],
  ['geek bar/disposables/pulse 2', 'Lemon Hubba Geek Bar Pulse 2.png', 'geek-bar', 'pulse-2', 'Lemon Hubba'],
  ['geek bar/disposables/pulse 2', 'Strawberry Watermelon Hubba Geek Bar Pulse 2.png', 'geek-bar', 'pulse-2', 'Strawberry Watermelon Hubba'],
  ['geek bar/disposables/pulse 2', 'White Peach Hubba Geek Bar Pulse 2.png', 'geek-bar', 'pulse-2', 'White Peach Hubba'],

  // ── Geek Bar Pulse X 25000 (existing device, new flavor photos) ──
  ['geek bar/disposables/pulse x', 'Blackberry Blueberry Geek Bar Pulse X 25K.png', 'geek-bar', 'pulse-x', 'Blackberry Blueberry'],
  ['geek bar/disposables/pulse x', 'Blueberry Jam Geek Bar Pulse X 25K Jam Edition.png', 'geek-bar', 'pulse-x', 'Blueberry Jam'],
  ['geek bar/disposables/pulse x', 'Cola Slush Geek Bar Pulse X 25K Slush Edition.png', 'geek-bar', 'pulse-x', 'Cola Slush'],
  ['geek bar/disposables/pulse x', 'Cool Mint Geek Bar Pulse X 25K.png', 'geek-bar', 'pulse-x', 'Cool Mint'],
  ['geek bar/disposables/pulse x', 'Dualicious Geek Bar Pulse X 25K (Thermal).png', 'geek-bar', 'pulse-x', 'Dualicious'],
  ['geek bar/disposables/pulse x', 'Miami Mint Geek Bar Pulse X 25k.gif', 'geek-bar', 'pulse-x', 'Miami Mint'],
  ['geek bar/disposables/pulse x', 'Orange Fcuking Fab Geek Bar Pulse X 25k.gif', 'geek-bar', 'pulse-x', 'Orange Fab'],
  ['geek bar/disposables/pulse x', 'Orange Jam Geek Bar Pulse X 25K Jam Edition.png', 'geek-bar', 'pulse-x', 'Orange Jam'],
  ['geek bar/disposables/pulse x', 'Orange Mint Geek Bar Pulse X 25K (Thermal).png', 'geek-bar', 'pulse-x', 'Orange Mint'],
  ['geek bar/disposables/pulse x', 'Peach Jam Geek Bar Pulse X 25K Jam Edition.png', 'geek-bar', 'pulse-x', 'Peach Jam'],
  ['geek bar/disposables/pulse x', 'Peach Perfect Slush Geek Bar Pulse X 25K Slush Edition.png', 'geek-bar', 'pulse-x', 'Peach Perfect Slush'],
  ['geek bar/disposables/pulse x', 'Pear of Thieves Geek Bar Pulse X 25K (Thermal).png', 'geek-bar', 'pulse-x', 'Pear of Thieves'],
  ['geek bar/disposables/pulse x', 'Pink Berry Lemonade Geek Bar Pulse X 25K (Thermal).png', 'geek-bar', 'pulse-x', 'Pink Berry Lemonade'],
  ['geek bar/disposables/pulse x', 'Raspberry Jam Geek Bar Pulse X 25K Jam Edition.png', 'geek-bar', 'pulse-x', 'Raspberry Jam'],
  ['geek bar/disposables/pulse x', 'Sour Straws Geek Bar Pulse X 25K.png', 'geek-bar', 'pulse-x', 'Sour Straws'],
  ['geek bar/disposables/pulse x', 'Strawberry Dragon Geek Bar Pulse X 25K (Thermal).png', 'geek-bar', 'pulse-x', 'Strawberry Dragon'],
  ['geek bar/disposables/pulse x', 'Strawberry Jam Geek Bar Pulse X 25K Jam Edition.png', 'geek-bar', 'pulse-x', 'Strawberry Jam'],
  ["geek bar/disposables/pulse x", "White Peach Raspberry Geek Bar Pulse X 25k.gif", 'geek-bar', 'pulse-x', 'White Peach Raspberry'],

  // ── Geek Bar Pulse X 2 50K Bull Edition (new device) ──
  ['geek bar/disposables/pulse x 2', 'Blue Razz Bull GEEK BAR Pulse X 2 50K BULL EDITION.png', 'geek-bar', 'pulse-x-2', 'Blue Razz Bull'],
  ['geek bar/disposables/pulse x 2', 'Coco Berry Bull GEEK BAR Pulse X 2 50K BULL EDITION.png', 'geek-bar', 'pulse-x-2', 'Coco Berry Bull'],
  ['geek bar/disposables/pulse x 2', 'Peach Bull GEEK BAR Pulse X 2 50K BULL EDITION.png', 'geek-bar', 'pulse-x-2', 'Peach Bull'],
  ['geek bar/disposables/pulse x 2', 'Strawberry Bull GEEK BAR Pulse X 2 50K BULL EDITION.png', 'geek-bar', 'pulse-x-2', 'Strawberry Bull'],
  ['geek bar/disposables/pulse x 2', 'Watermelon Bull GEEK BAR Pulse X 2 50K BULL EDITION.png', 'geek-bar', 'pulse-x-2', 'Watermelon Bull'],

  // ── Lost Mary Viz 55K (new device) ──
  ['Lost Mary/Disposables/Viz', 'Baja Splash LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Baja Splash'],
  ['Lost Mary/Disposables/Viz', 'Blackberry Chill LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Blackberry Chill'],
  ['Lost Mary/Disposables/Viz', 'Blue Razz Ice LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Blue Razz Ice'],
  ['Lost Mary/Disposables/Viz', 'Cool Mint LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Cool Mint'],
  ['Lost Mary/Disposables/Viz', 'Dragon Strawnana LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Dragon Strawnana'],
  ['Lost Mary/Disposables/Viz', 'Fcuking Fab LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Fab'],
  ['Lost Mary/Disposables/Viz', 'Hawaiian Blast LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Hawaiian Blast'],
  ['Lost Mary/Disposables/Viz', 'Mexico Mango LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Mexico Mango'],
  ['Lost Mary/Disposables/Viz', 'Miami Mint LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Miami Mint'],
  ['Lost Mary/Disposables/Viz', 'Nana Berries LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Nana Berries'],
  ['Lost Mary/Disposables/Viz', 'Peach Berry LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Peach Berry'],
  ['Lost Mary/Disposables/Viz', 'Raspberry Dragon Lime LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Raspberry Dragon Lime'],
  ['Lost Mary/Disposables/Viz', 'Sour Apple Ice LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Sour Apple Ice'],
  ['Lost Mary/Disposables/Viz', 'Sour Strawberry Peach LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Sour Strawberry Peach'],
  ['Lost Mary/Disposables/Viz', 'Strawberry Kiwi LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Strawberry Kiwi'],
  ['Lost Mary/Disposables/Viz', 'Tiger Drip LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Tiger Drip'],
  ['Lost Mary/Disposables/Viz', 'Watermelon Ice LOST MARY VIZ 55K.png', 'lost-mary', 'viz-55k', 'Watermelon Ice'],

  // ── Lost Mary MT15000 Turbo (new device) ──
  ['Lost Mary/Disposables/mt', 'Baja Splash Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Baja Splash'],
  ['Lost Mary/Disposables/mt', 'Banana Cake Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Banana Cake'],
  ['Lost Mary/Disposables/mt', 'Berry Burst Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Berry Burst'],
  ['Lost Mary/Disposables/mt', 'Blue Raspberry Lemon Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Blue Raspberry Lemon'],
  ['Lost Mary/Disposables/mt', 'Blue Razz Ice Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Blue Razz Ice'],
  ['Lost Mary/Disposables/mt', 'Miami Mint Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Miami Mint'],
  ['Lost Mary/Disposables/mt', 'Peach+ Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Peach+'],
  ['Lost Mary/Disposables/mt', 'Pineapple B-Burst LOST MARY MT15000 TURBO.png', 'lost-mary', 'mt15000-turbo', 'Pineapple B-Burst'],
  ['Lost Mary/Disposables/mt', 'Raspberry Watermelon Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Raspberry Watermelon'],
  ['Lost Mary/Disposables/mt', 'Rocket Pop Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Rocket Pop'],
  ['Lost Mary/Disposables/mt', 'Strawberry Banana Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Strawberry Banana'],
  ['Lost Mary/Disposables/mt', 'Strawberry Kiwi Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Strawberry Kiwi'],
  ['Lost Mary/Disposables/mt', 'Winter Mint Lost Mary MT15000 Turbo.png', 'lost-mary', 'mt15000-turbo', 'Winter Mint'],

  // ── Lost Mary MT35000 Turbo (new device) ──
  ['Lost Mary/Disposables/mt', 'Black Razz Lemon LOST MARY MT35K TURBO 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Black Razz Lemon'],
  ['Lost Mary/Disposables/mt', 'Classic Tobacco Lost Mary MT35K Turbo.gif', 'lost-mary', 'mt35000-turbo', 'Classic Tobacco'],
  ['Lost Mary/Disposables/mt', 'Miami Mint LOST MARY MT35K 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Miami Mint'],
  ['Lost Mary/Disposables/mt', 'Mint Lemonade Lost Mary MT35K Turbo.png', 'lost-mary', 'mt35000-turbo', 'Mint Lemonade'],
  ['Lost Mary/Disposables/mt', 'Pink Lemonade+ LOST MARY MT35000 TURBO 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Pink Lemonade+'],
  ['Lost Mary/Disposables/mt', 'Scary Berry+ LOST MARY MT35000 TURBO 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Scary Berry+'],
  ['Lost Mary/Disposables/mt', 'Strawberry Kiwi+ LOST MARY MT35K TURBO 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Strawberry Kiwi+'],
  ['Lost Mary/Disposables/mt', 'Strawberry+ LOST MARY MT35K TURBO 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Strawberry+'],
  ['Lost Mary/Disposables/mt', 'Summer Grape LOST MARY MT35K TURBO 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Summer Grape'],
  ['Lost Mary/Disposables/mt', 'Toasted Banana LOST MARY MT35K TURBO 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Toasted Banana'],
  ['Lost Mary/Disposables/mt', 'Watermelon+ LOST MARY MT35K Turbo 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Watermelon+'],
  ['Lost Mary/Disposables/mt', 'White Gami+ LOST MARY MT35K TURBO 20mg.gif', 'lost-mary', 'mt35000-turbo', 'White Gami+'],
  ['Lost Mary/Disposables/mt', 'Winter Mint LOST MARY MT35K TURBO 20mg.gif', 'lost-mary', 'mt35000-turbo', 'Winter Mint'],
  ['Lost Mary/Disposables/mt', 'Yellow Pixy Lost Mary MT35K Turbo.png', 'lost-mary', 'mt35000-turbo', 'Yellow Pixy'],

  // ── Lost Mary Nera Fullview Pods (new device — pod system) ──
  ['Lost Mary/pods/nera', 'Black Mint Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Black Mint'],
  ['Lost Mary/pods/nera', 'Blackberry Blueberry Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Blackberry Blueberry'],
  ['Lost Mary/pods/nera', 'Blue Carnival Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Blue Carnival'],
  ['Lost Mary/pods/nera', 'Golden Berry Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Golden Berry'],
  ['Lost Mary/pods/nera', 'Lemon Pop Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Lemon Pop'],
  ['Lost Mary/pods/nera', 'Pink Lemonade Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Pink Lemonade'],
  ['Lost Mary/pods/nera', 'Pomegranate Blast Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Pomegranate Blast'],
  ['Lost Mary/pods/nera', 'Rocket Freeze Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Rocket Freeze'],
  ['Lost Mary/pods/nera', 'Scary Berry Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Scary Berry'],
  ['Lost Mary/pods/nera', 'Sour Apple Ice Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Sour Apple Ice'],
  ['Lost Mary/pods/nera', 'Watermelon Fcuking Fab Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Watermelon Fab'],
  ['Lost Mary/pods/nera', 'Watermelon Ice Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Watermelon Ice'],
  ['Lost Mary/pods/nera', 'Winter Mint Lost Mary Nera Fullview Pods (2pk).png', 'lost-mary', 'nera-pods', 'Winter Mint'],

  // ── RAZ CA6000 (new device) ──
  ['raz vapes/RAZ CA6000', 'Alaskan Mint Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Alaskan Mint'],
  ['raz vapes/RAZ CA6000', 'Crushed Berries Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Crushed Berries'],
  ['raz vapes/RAZ CA6000', 'Dragon Fruit Lemonade Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Dragon Fruit Lemonade'],
  ['raz vapes/RAZ CA6000', 'Frozen Strawberry Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Frozen Strawberry'],
  ['raz vapes/RAZ CA6000', 'Georgia Peach Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Georgia Peach'],
  ['raz vapes/RAZ CA6000', 'Hawaii Sunset Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Hawaii Sunset'],
  ['raz vapes/RAZ CA6000', 'Peach Pear Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Peach Pear'],
  ['raz vapes/RAZ CA6000', 'Spearmint Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Spearmint'],
  ['raz vapes/RAZ CA6000', 'Strawberry Kiwi Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Strawberry Kiwi'],
  ['raz vapes/RAZ CA6000', 'Watermelon Ice Flavor RAZ CA6000 Disposable Vape.jpg', 'raz-vape', 'ca6000', 'Watermelon Ice'],

  // ── RAZ RYL Classic 35K (new device) ──
  ['raz vapes/Raz RYL Classic', 'Blue Raz Ice Flavor Raz RYL Classic 35k Disposable Vape.png', 'raz-vape', 'ryl-classic-35k', 'Blue Raz Ice'],
  ['raz vapes/Raz RYL Classic', 'Miami Mint Flavor Raz RYL Classic 35k Disposable Vape.png', 'raz-vape', 'ryl-classic-35k', 'Miami Mint'],
  ['raz vapes/Raz RYL Classic', 'Orange Mango Flavor Raz RYL Classic 35k Disposable Vape.png', 'raz-vape', 'ryl-classic-35k', 'Orange Mango'],
  ['raz vapes/Raz RYL Classic', 'Peach Passionfruit Flavor Raz RYL Classic 35k Disposable Vape.png', 'raz-vape', 'ryl-classic-35k', 'Peach Passionfruit'],
  ['raz vapes/Raz RYL Classic', 'Rainbow Flavor Raz RYL Classic 35k Disposable Vape.webp', 'raz-vape', 'ryl-classic-35k', 'Rainbow'],
  ['raz vapes/Raz RYL Classic', 'Raspberry Watermelon Flavor Raz RYL Classic 35k Disposable Vape.png', 'raz-vape', 'ryl-classic-35k', 'Raspberry Watermelon'],
  ['raz vapes/Raz RYL Classic', 'Sour Apple Ice Flavor Raz RYL Classic 35k Disposable Vape.png', 'raz-vape', 'ryl-classic-35k', 'Sour Apple Ice'],
  ['raz vapes/Raz RYL Classic', 'Sour Strawberry Flavor Raz RYL Classic 35k Disposable Vape.png', 'raz-vape', 'ryl-classic-35k', 'Sour Strawberry'],
  ['raz vapes/Raz RYL Classic', 'Triple Berry Flavor Raz RYL Classic 35k Disposable Vape.webp', 'raz-vape', 'ryl-classic-35k', 'Triple Berry'],
  ['raz vapes/Raz RYL Classic', 'Watermelon Ice Flavor Raz RYL Classic 35k Disposable Vape.png', 'raz-vape', 'ryl-classic-35k', 'Watermelon Ice'],
  ['raz vapes/Raz RYL Classic', 'White Yummy Ice Flavor Raz RYL Classic 35k Disposable Vape.png', 'raz-vape', 'ryl-classic-35k', 'White Yummy Ice'],

  // ── RAZ DC25000 (existing device, new flavor photos — generic device shot skipped) ──
  ['raz vapes/raz dc 25000', 'Bangin Sour Berries Flavor RAZ DC25000 Disposable Vape.jpg', 'raz-vape', 'dc25000', "Bangin' Sour Berries"],
  ['raz vapes/raz dc 25000', 'Blue Raz Gush RAZ DC25000 Disposable Vape.webp', 'raz-vape', 'dc25000', 'Blue Raz Gush'],
  ['raz vapes/raz dc 25000', 'Blueberry Watermelon Flavor RAZ DC25000 Disposable Vape.png', 'raz-vape', 'dc25000', 'Blueberry Watermelon'],
  ['raz vapes/raz dc 25000', 'Fire & Ice RAZ DC25000 Disposable Vape.webp', 'raz-vape', 'dc25000', 'Fire & Ice'],
  ['raz vapes/raz dc 25000', 'Frozen Dragon Fruit Lemon Flavor RAZ DC25000 Disposable Vape.png', 'raz-vape', 'dc25000', 'Frozen Dragon Fruit Lemon'],
  ['raz vapes/raz dc 25000', 'Hawaiian Punch RAZ DC25000 Disposable Vape.webp', 'raz-vape', 'dc25000', 'Hawaiian Punch'],
  ['raz vapes/raz dc 25000', 'Miami Mint Flavor RAZ DC25000 Disposable Vape.png', 'raz-vape', 'dc25000', 'Miami Mint'],
  ["raz vapes/raz dc 25000", "Pink Lemonade Minty O's Flavor RAZ DC25000 Disposable Vape.webp", 'raz-vape', 'dc25000', "Pink Lemonade Minty O's"],
  ['raz vapes/raz dc 25000', 'Sour Apple Ice Flavor RAZ DC25000 Disposable Vape.jpg', 'raz-vape', 'dc25000', 'Sour Apple Ice'],
  ['raz vapes/raz dc 25000', 'Sour Raspberry Punch RAZ DC25000 Disposable Vape.webp', 'raz-vape', 'dc25000', 'Sour Raspberry Punch'],
  ['raz vapes/raz dc 25000', 'Strawberry Burst Flavor RAZ DC25000 Disposable Vape.png', 'raz-vape', 'dc25000', 'Strawberry Burst'],
  ['raz vapes/raz dc 25000', 'Triple Berry Gush RAZ DC25000 Disposable Vape.png', 'raz-vape', 'dc25000', 'Triple Berry Gush'],
  ['raz vapes/raz dc 25000', 'Triple Berry Punch RAZ DC25000 Disposable Vape.webp', 'raz-vape', 'dc25000', 'Triple Berry Punch'],

  // ── RAZ RX50K (new device) ──
  ['raz vapes/raz rx 50k', 'Code Blue RAZ RX50K Dew Edition Disposable Vape.jpg', 'raz-vape', 'rx50k', 'Code Blue'],
  ['raz vapes/raz rx 50k', 'Code Green RAZ RX50K Dew Edition Disposable Vape.jpg', 'raz-vape', 'rx50k', 'Code Green'],
  ['raz vapes/raz rx 50k', 'Code Pink RAZ RX50K Dew Edition Disposable Vape.jpg', 'raz-vape', 'rx50k', 'Code Pink'],
  ['raz vapes/raz rx 50k', 'Code Red RAZ RX50K Dew Edition Disposable Vape.jpg', 'raz-vape', 'rx50k', 'Code Red'],
  ['raz vapes/raz rx 50k', 'Lemon Batch Raz RX50K Batch Edition.jpg', 'raz-vape', 'rx50k', 'Lemon Batch'],
  ['raz vapes/raz rx 50k', 'Triple Berry Batch Raz RX50K Batch Edition.jpg', 'raz-vape', 'rx50k', 'Triple Berry Batch'],
  ['raz vapes/raz rx 50k', 'Watermelon Batch Raz RX50K Batch Edition.jpg', 'raz-vape', 'rx50k', 'Watermelon Batch'],
  ['raz vapes/raz rx 50k', 'White Peach Batch Raz RX50K Batch Edition.jpg', 'raz-vape', 'rx50k', 'White Peach Batch'],

  // ── RAZ TN9000 (existing device, new flavor photos) ──
  ['raz vapes/raz tn9000', 'Black Cherry Peach Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Black Cherry Peach'],
  ['raz vapes/raz tn9000', 'Blue Raz B-POP Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Blue Raz B-Pop'],
  ['raz vapes/raz tn9000', 'Cactus Jack Flavor RAZ TN9000 Disposable Vape.webp', 'raz-vape', 'tn9000', 'Cactus Jack'],
  ['raz vapes/raz tn9000', 'Clear Flavor RAZ TN9000 Disposable Vape.jpg', 'raz-vape', 'tn9000', 'Clear'],
  ['raz vapes/raz tn9000', 'Graham Twist Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Graham Twist'],
  ['raz vapes/raz tn9000', 'Grape Ice Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Grape Ice'],
  ['raz vapes/raz tn9000', 'Mango Colada Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Mango Colada'],
  ['raz vapes/raz tn9000', 'Orange Raspberry Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Orange Raspberry'],
  ['raz vapes/raz tn9000', 'Sour Mango Pineapple Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Sour Mango Pineapple'],
  ['raz vapes/raz tn9000', 'Strawberry Ice Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Strawberry Ice'],
  ['raz vapes/raz tn9000', 'Strawberry Orange Mango Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Strawberry Orange Mango'],
  ['raz vapes/raz tn9000', 'Tiffany Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Tiffany'],
  ['raz vapes/raz tn9000', 'Triple Berry Ice Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Triple Berry Ice'],
  ['raz vapes/raz tn9000', 'Tropical Storm Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Tropical Storm'],
  ['raz vapes/raz tn9000', 'Violet Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'Violet'],
  ['raz vapes/raz tn9000', 'Watermelon Ice Flavor RAZ TN9000 Disposable Vape.jpg', 'raz-vape', 'tn9000', 'Watermelon Ice'],
  ['raz vapes/raz tn9000', 'White Gummy Grape Flavor RAZ TN9000 Disposable Vape.png', 'raz-vape', 'tn9000', 'White Gummy Grape'],

  // ── Tyson 2.0 Round 2 7500 (new device) ──
  ['tyson/2.0 7500', 'Mike Tyson 2.0 7500 Hits Round 2 Apple Melonberry Disposable Vape.webp', 'tyson', 'round2-7500', 'Apple Melonberry'],
  ['tyson/2.0 7500', 'Mike Tyson 2.0 7500 Hits Round 2 Lush Lime Disposable Vape.webp', 'tyson', 'round2-7500', 'Lush Lime'],
  ['tyson/2.0 7500', 'Mike Tyson 2.0 7500 Hits Round 2 Melonhead Disposable Vape.webp', 'tyson', 'round2-7500', 'Melonhead'],
  ['tyson/2.0 7500', 'Mike Tyson 2.0 7500 Hits Round 2 Pineapple Melon Disposable Vape.webp', 'tyson', 'round2-7500', 'Pineapple Melon'],
  ['tyson/2.0 7500', 'Mike Tyson 2.0 7500 Hits Round 2 Watermelon Disposable Vape.webp', 'tyson', 'round2-7500', 'Watermelon'],

  // ── Tyson 2.0 Heavyweight 7000 (existing device, new flavor photos) ──
  ['tyson/heavy weight 7000', 'tyson_2.0_heavy_weight_7000_puffs_disposable_vape_mintberry.webp', 'tyson', 'heavyweight', 'Mint Berry'],
  ['tyson/heavy weight 7000', 'tyson_2.0_heavy_weight_7000_puffs_disposable_vape_passion_pon.webp', 'tyson', 'heavyweight', 'Passion Punch'],
  ['tyson/heavy weight 7000', 'tyson_2.0_heavy_weight_7000_puffs_disposable_vape_peach_mango.webp', 'tyson', 'heavyweight', 'Peach Mango'],
  ['tyson/heavy weight 7000', 'tyson_2.0_heavy_weight_7000_puffs_disposable_vape_peach_watermelon.webp', 'tyson', 'heavyweight', 'Peach Watermelon'],
  ['tyson/heavy weight 7000', 'tyson_2.0_heavy_weight_7000_puffs_disposable_vape_strawberry_banan.webp', 'tyson', 'heavyweight', 'Strawberry Banana'],
  ['tyson/heavy weight 7000', 'tyson_2.0_heavy_weight_7000_puffs_disposable_vape_watermelon.webp', 'tyson', 'heavyweight', 'Watermelon'],

  // ── Tyson 2.0 Iron Mike 15000 (new device) ──
  ['tyson/iron mike', 'Tyson 2.0 Iron Mike 15000 Hits Cake Disposable Vape.webp', 'tyson', 'iron-mike-15000', 'Cake'],
  ['tyson/iron mike', 'Tyson 2.0 Iron Mike 15000 Hits California Cherry Disposable Vape.webp', 'tyson', 'iron-mike-15000', 'California Cherry'],
  ['tyson/iron mike', 'Tyson 2.0 Iron Mike 15000 Hits Peach Punch Disposable Vape.webp', 'tyson', 'iron-mike-15000', 'Peach Punch'],
  ['tyson/iron mike', 'Tyson 2.0 Iron Mike 15000 Hits Pineapple Melon Disposable Vape.webp', 'tyson', 'iron-mike-15000', 'Pineapple Melon'],
  ['tyson/iron mike', 'Tyson 2.0 Iron Mike 15000 Hits Pineapple Sour Berry Disposable Vape.webp', 'tyson', 'iron-mike-15000', 'Pineapple Sour Berry'],

  // ── Tyson 2.0 Legend 30K (new device) ──
  ['tyson/legend', 'Apple Melonberry Tyson 2.0 Legend 30K Disposable.webp', 'tyson', 'legend-30k', 'Apple Melonberry'],
  ['tyson/legend', 'B-Burst Tyson 2.0 Legend 30K Disposable.webp', 'tyson', 'legend-30k', 'B-Burst'],
  ['tyson/legend', 'Cool Mint Tyson 2.0 Legend 30K Disposable.webp', 'tyson', 'legend-30k', 'Cool Mint'],
  ['tyson/legend', 'Miami Mint Tyson 2.0 Legend 30K Disposable.webp', 'tyson', 'legend-30k', 'Miami Mint'],

  // ── Tyson 2.0 Lightweight 6000 (3-Pack) (new device) ──
  ['tyson/lightwieht', 'Blue Razz Tyson 2.0 Lightweight Disposable 6000 Puffs 3 Pack.webp', 'tyson', 'lightweight-6000', 'Blue Razz'],
  ['tyson/lightwieht', 'Frozen Blueberry Tyson 2.0 Lightweight Disposable 6000 Puffs 3 Pack.webp', 'tyson', 'lightweight-6000', 'Frozen Blueberry'],
  ['tyson/lightwieht', 'Grape Razz Tyson 2.0 Lightweight Disposable 6000 Puffs 3 Pack.webp', 'tyson', 'lightweight-6000', 'Grape Razz'],
  ['tyson/lightwieht', 'Strawberry Banana Tyson 2.0 Lightweight Disposable 6000 Puffs 3 Pack.webp', 'tyson', 'lightweight-6000', 'Strawberry Banana'],
  ['tyson/lightwieht', 'Watermelon Tyson 2.0 Lightweight Disposable 6000 Puffs 3 Pack.webp', 'tyson', 'lightweight-6000', 'Watermelon'],

  // ── UT Bar Clear Tank 50K (new device, made by Flum; brand = ut-vape) ──
  ['ut bar/ut bar 50k', 'Aloe Grape UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'Aloe Grape'],
  ['ut bar/ut bar 50k', 'Blue Razz Ice UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'Blue Razz Ice'],
  ['ut bar/ut bar 50k', 'Cherry Strawberry Gummy UT 50K.png', 'ut-vape', 'clear-tank-50k', 'Cherry Strawberry Gummy'],
  ['ut bar/ut bar 50k', 'Cola Ice UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'Cola Ice'],
  ['ut bar/ut bar 50k', 'Frozen Watermelon UT Clear.png', 'ut-vape', 'clear-tank-50k', 'Frozen Watermelon'],
  ['ut bar/ut bar 50k', 'Green Apple Ice UT Clear Tank.png', 'ut-vape', 'clear-tank-50k', 'Green Apple Ice'],
  ['ut bar/ut bar 50k', 'Green Crisp Watermelon Icy UT 50K.png', 'ut-vape', 'clear-tank-50k', 'Green Crisp Watermelon Icy'],
  ['ut bar/ut bar 50k', 'Icy Mint UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'Icy Mint'],
  ['ut bar/ut bar 50k', 'Mango Peach UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'Mango Peach'],
  ['ut bar/ut bar 50k', 'Mango Tango UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'Mango Tango'],
  ['ut bar/ut bar 50k', 'Peach Ice UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'Peach Ice'],
  ['ut bar/ut bar 50k', 'Peach Mango Watermelon UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'Peach Mango Watermelon'],
  ['ut bar/ut bar 50k', 'Raspberry Grape Guava UT 50K.png', 'ut-vape', 'clear-tank-50k', 'Raspberry Grape Guava'],
  ['ut bar/ut bar 50k', 'Slushy Lemon UT 50K.png', 'ut-vape', 'clear-tank-50k', 'Slushy Lemon'],
  ['ut bar/ut bar 50k', 'Sour Straws UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'Sour Straws'],
  ['ut bar/ut bar 50k', 'Strawberry Lemonade UT 50K.png', 'ut-vape', 'clear-tank-50k', 'Strawberry Lemonade'],
  ['ut bar/ut bar 50k', 'Strawberry Red Fuji UT 50K.png', 'ut-vape', 'clear-tank-50k', 'Strawberry Red Fuji'],
  ['ut bar/ut bar 50k', 'White Gummy Strawberry UT 50K.png', 'ut-vape', 'clear-tank-50k', 'White Gummy Strawberry'],
  ['ut bar/ut bar 50k', 'White Gummy UT Clear Tank 50K.png', 'ut-vape', 'clear-tank-50k', 'White Gummy'],

  // ── UT Bar 6000 (new device, made by Flum; brand = ut-vape) ──
  ['ut bar/utbar 6000', 'ALOE MANGO ICY UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Aloe Mango Icy'],
  ['ut bar/utbar 6000', 'BLACK PINK UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Black Pink'],
  ['ut bar/utbar 6000', 'BLUE RAZZ ICY UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Blue Razz Icy'],
  ['ut bar/utbar 6000', 'CALI BLOSSOM UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Cali Blossom'],
  ['ut bar/utbar 6000', 'CITRUS CAKE UT BAR.webp', 'ut-vape', 'ut-bar-6000', 'Citrus Cake'],
  ['ut bar/utbar 6000', 'CLEAR UT BAR.webp', 'ut-vape', 'ut-bar-6000', 'Clear'],
  ['ut bar/utbar 6000', 'GUAVA SUNRISE UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Guava Sunrise'],
  ['ut bar/utbar 6000', 'HONEY PEACH UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Honey Peach'],
  ['ut bar/utbar 6000', 'JEWEL BERRY UT BAR.webp', 'ut-vape', 'ut-bar-6000', 'Jewel Berry'],
  ['ut bar/utbar 6000', 'JUNGLE JUICE UT BAR.webp', 'ut-vape', 'ut-bar-6000', 'Jungle Juice'],
  ['ut bar/utbar 6000', 'LONE STAR CACTUS UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Lone Star Cactus'],
  ['ut bar/utbar 6000', 'MILKY UT BAR.webp', 'ut-vape', 'ut-bar-6000', 'Milky'],
  ['ut bar/utbar 6000', 'MT RAINIER UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Mt. Rainier'],
  ['ut bar/utbar 6000', 'NAKED UT BAR.webp', 'ut-vape', 'ut-bar-6000', 'Naked'],
  ['ut bar/utbar 6000', 'PEACH MANGO WATERMELON UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Peach Mango Watermelon'],
  ['ut bar/utbar 6000', 'PURPLE RAIN UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Purple Rain'],
  ['ut bar/utbar 6000', 'SAKURA GRAPE UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Sakura Grape'],
  ['ut bar/utbar 6000', 'STRAWBERRY BANANA UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Strawberry Banana'],
  ['ut bar/utbar 6000', 'STRAWBERRY LEMONADE UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Strawberry Lemonade'],
  ['ut bar/utbar 6000', 'SUPER MINT UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Super Mint'],
  ['ut bar/utbar 6000', 'TRIPLE BERRIES ICE UT BAR.jpg', 'ut-vape', 'ut-bar-6000', 'Triple Berries Ice'],

  // ── UT Bar Pro 25000 (new device, made by Flum; brand = ut-vape; one dup jpg skipped) ──
  ['ut bar/utbar pro 25000', 'UT BAR PRO BLUE RAZZ ICY.webp', 'ut-vape', 'pro-25000', 'Blue Razz Icy'],
  ['ut bar/utbar pro 25000', 'UT BAR PRO COOL MINT.webp', 'ut-vape', 'pro-25000', 'Cool Mint'],
  ['ut bar/utbar pro 25000', 'UT BAR PRO GRAPE POP ICY.webp', 'ut-vape', 'pro-25000', 'Grape Pop Icy'],
  ['ut bar/utbar pro 25000', 'UT BAR PRO STRAWMELON PEACH.webp', 'ut-vape', 'pro-25000', 'Strawmelon Peach'],
  ['ut bar/utbar pro 25000', 'UT BAR PRO THAI MANGO ICY.webp', 'ut-vape', 'pro-25000', 'Thai Mango Icy'],
  ['ut bar/utbar pro 25000', 'UT BAR PRO WATERMELON BLUEBERRY.webp', 'ut-vape', 'pro-25000', 'Watermelon Blueberry'],
  ['ut bar/utbar pro 25000', 'UT BAR PRO WHITE GUMMY.webp', 'ut-vape', 'pro-25000', 'White Gummy'],
  ['ut bar/utbar pro 25000', 'Ut Bar Pro – Tobacco Cream 25k.webp', 'ut-vape', 'pro-25000', 'Tobacco Cream'],
  ['ut bar/utbar pro 25000', 'WATERMELON ICY UT BAR PRO.webp', 'ut-vape', 'pro-25000', 'Watermelon Icy'],
];

async function run() {
  let ok = 0, skipped = 0;
  for (const [folder, file, brand, series, flavorName] of jobs) {
    const srcPath = join(srcRoot, folder, file);
    const outDir = join(outRoot, brand);
    mkdirSync(outDir, { recursive: true });
    const outSlug = `${series}-${slug(flavorName)}`;

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

    let quality = 88;
    let buffer = await composed.webp({ quality }).toBuffer();
    while (buffer.length > 150000 && quality > 40) {
      quality -= 8;
      buffer = await composed.webp({ quality }).toBuffer();
    }
    writeFileSync(join(outDir, `${outSlug}.webp`), buffer);
    ok++;
  }
  console.log(`✓ ${ok} product images normalized to public/images/products/<brand>/ (${skipped} skipped)`);
}

run();
