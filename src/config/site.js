/* ================================================================
   VAPORVAULT — Single Source of Truth
   Every route, meta tag, schema block, sitemap entry and nav link
   is generated from this file. Never hand-write a domain elsewhere.
   ================================================================ */

export const SITE = {
  domain: 'DOMAIN.com', // pending — set the real domain, rebuild, redeploy. Never find-and-replace.
  name: 'VaporVault USA',
  shortName: 'VaporVault',
  tagline: 'Premium US Vape Store',
  email: 'orders@vaporvaultusa.com',
  target: 'vercel',
  themeColor: '#0EA5E9',
  entityStatement:
    "VaporVault USA is an online adult vape retailer serving the United States, stocking authentic disposable vapes, pod systems, and nicotine products from brands verified against real US retail sales data. VaporVault operates as a fully PACT Act-compliant, 21+ only retailer — every order requires age verification at checkout and an adult signature at delivery.",
};

export const RULES = {
  minOrder: 50,
  freeShipping: 100,
  shippingCost: 9.99,
  cryptoDiscount: 0.10,
  ageMinimum: 21,
  restrictedStates: ['California', 'Massachusetts'],
};

export const FORMS = {
  provider: 'web3forms',
  web3formsKey: 'YOUR-WEB3FORMS-KEY', // pending — get a free key at web3forms.com
  resendFrom: '',
  turnstileSiteKey: '',
};

export const CHAT = {
  channels: [
    { type: 'email', value: SITE.email },
  ],
};

export const PAYMENT_METHODS = [
  { id: 'crypto', label: 'Crypto', icon: '₿', sub: '10% OFF — BTC, ETH, LTC', discount: true },
  { id: 'cash-app', label: 'Cash App', icon: '💸', sub: '' },
  { id: 'apple-pay', label: 'Apple Pay', icon: '', sub: '' },
  { id: 'chime', label: 'Chime', icon: '💳', sub: '' },
];

export const BRANDS = [
  {
    id: 'geek-bar', label: 'Geek Bar', emoji: '⚡', pmta: 'pending', rank: 3,
    badge: '📊 Circana Top 3',
    heroImg: '/images/brand-geek-bar.jpg', logo: '/images/logo-geek-bar.png',
    about: "Geek Bar is the most popular disposable vape brand in the US consumer market for 2026, with over 25% disposable market share according to retail analytics. Their dual mesh coil technology and Pulse Mode — which alternates between high and low power for enhanced flavor — set new industry standards. The Pulse series features smart digital display screens showing battery level, e-liquid level, and puff count. Based in China, Geek Bar products are widely distributed through both brick-and-mortar and online retailers across the United States.",
  },
  {
    id: 'raz-vape', label: 'RAZ Vape', emoji: '🔷', pmta: 'pending', rank: 5,
    badge: '📊 Circana Top 5',
    heroImg: '/images/brand-raz-vape.jpg', logo: '/images/logo-raz-vape.png',
    about: "RAZ Vape distinguishes itself through premium flavor engineering — their development process reportedly involves food scientists and mixologists creating complex, layered flavor profiles. The DC25000 model features adjustable wattage from 12W to 25W, allowing experienced vapers to fine-tune their experience. An HD screen displays battery percentage, e-liquid level, wattage setting, and puff counter. RAZ devices are known for their mod-like aesthetic with animated display screens and durable build quality.",
  },
  {
    id: 'lost-mary', label: 'Lost Mary', emoji: '🌸', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/brand-lost-mary.jpg', logo: '/images/logo-lost-mary.png',
    about: "Lost Mary is a sub-brand of Elf Bar (iMiracle), created in 2022 and rapidly developing a cult following in the US market. Distinctive for its ultra-slim form factor and clean aesthetic, Lost Mary devices are manufactured in Shenzhen, China. The brand offers both low-puff and high-puff disposables featuring rechargeable batteries and advanced mesh coils. Lost Mary is consistently ranked second to Geek Bar in US brand recognition among online vape retailers and editorial review sites.",
  },
  {
    id: 'flum', label: 'Flum', emoji: '💨', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/brand-flum.jpg', logo: '/images/logo-flum.png',
    about: "Flum has built a loyal following with its sleek, compact disposable vape designs that are particularly popular among beginner vapers. The distinctive pebble-shaped form factor is immediately recognizable and highly portable. Flum devices are draw-activated with no buttons, making them the simplest entry point for adults transitioning from cigarettes. The Flum Pebble 6000 is the brand's flagship device, delivering 6,000 puffs of consistent flavor in a palm-sized package.",
  },
  {
    id: 'breeze', label: 'Breeze Smoke', emoji: '🌬️', pmta: 'pending', rank: 4,
    badge: '📊 Circana Top 4 & Top 7',
    heroImg: '/images/brand-breeze.jpg', logo: '/images/logo-breeze.png',
    about: "Breeze Smoke holds two spots in the Circana top 10 — Breeze Smoke at #4 and Breeze Prime at #7 — making it one of the most widely sold disposable vape brands in US convenience and multi-outlet retail. Both lines deliver smooth, consistent vapor with a wide flavor selection. The Breeze Pro offers 2,000 puffs for entry-level users, while the Breeze Prime 6000 extends the experience to 6,000 puffs with a rechargeable battery and broader flavor library.",
  },
  {
    id: 'fifty-bar', label: 'Fifty Bar', emoji: '🇺🇸', pmta: 'pending', rank: null,
    badge: '🇺🇸 USA Made', founded: 2023, hq: 'California',
    heroImg: '/images/brand-fifty-bar.jpg', logo: '/images/logo-fifty-bar.png',
    about: "Fifty Bar Vape launched in 2023 out of California with a straightforward goal: build a disposable vape entirely on American soil instead of importing another overseas device. Every unit is assembled and filled at the brand's US facility, a commitment that now supports over 150 American jobs. The debut collection — the Original Series — came out of a partnership with Beard Vape Co., translating their well-known numbered e-liquid profiles into disposable form for the first time. Fifty Bar has since expanded to seven collections and 70+ flavors through further collaborations with Fruitia, Hidden Hills Club, and Humble Juice Co., while keeping every device built around a Dual Parallel Mesh Coil and, on the 20,000-puff lines, an Always Active Boost Mode with 3-level adjustable airflow.",
  },
  {
    id: 'tyson', label: 'Tyson 2.0', emoji: '🥊', pmta: 'pending', rank: null,
    badge: '🥊 Celebrity Brand',
    heroImg: '/images/brand-tyson.jpg', logo: '/images/logo-tyson.png',
    about: "Tyson 2.0 is a celebrity co-branded disposable vape line developed in collaboration with boxing legend Mike Tyson. The brand leverages Tyson's iconic boxing imagery — gloves, championship belts, and the \"Iron Mike\" nickname — across its product line. The Heavyweight 7000 delivers 7,000 puffs in a bold, recognizable package. Tyson 2.0 has become one of the most recognized celebrity vape brands in the US market, driving strong awareness among adult consumers through sports and entertainment channels.",
  },
  {
    id: 'vuse', label: 'Vuse', emoji: '✅', pmta: 'authorized', rank: 1,
    badge: '📊 #1 US Retail',
    heroImg: '/images/hero-1.jpg', logo: '/images/logo-vuse.png',
    about: "Vuse, owned by British American Tobacco (BAT), is the #1 e-cigarette brand in US retail by dollar sales according to Circana data. Critically, Vuse is one of the very few brands with FDA Pre-Market Tobacco Product Application (PMTA) marketing authorization — including for the Vuse Alto with tobacco and menthol flavors. This makes Vuse legal to stock and sell in all US states including those with PMTA directory requirements. The Vuse Alto pod system is widely available in gas stations and convenience stores nationwide.",
  },
  {
    id: 'njoy', label: 'NJOY', emoji: '✅', pmta: 'authorized', rank: 6,
    badge: '📊 Circana Top 6',
    heroImg: '/images/brand-njoy.jpg', logo: '/images/logo-njoy.png',
    about: "NJOY, acquired by Altria Group (maker of Marlboro), is one of only a handful of vape brands with FDA PMTA marketing authorization in the United States. With Altria's nationwide distribution network behind it, NJOY products are available in tens of thousands of retail locations. The NJOY Ace and NJOY Daily Extra are legal to sell in all US states including states with strict PMTA directory requirements like North Carolina and Virginia. NJOY focuses exclusively on tobacco and menthol flavors as authorized by the FDA.",
  },
  {
    id: 'smok', label: 'SMOK', emoji: '🔥', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/brand-smok.jpg', logo: '/images/logo-smok.png',
    about: "SMOK (Shenzhen IVPS Technology) has been a dominant force in refillable vape kit markets since 2010, often called the \"godfather\" of vape kits. With a diversified portfolio spanning tanks, pods, mods, and replacement coils, SMOK caters to all experience levels. Their Nord 5 pod mod represents the current flagship for experienced vapers seeking adjustable airflow, multiple coil options, and a reliable 2000mAh battery. SMOK products have strong presence in both online retailers and dedicated vape shops.",
  },
  {
    id: 'vaporesso', label: 'Vaporesso', emoji: '💡', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/brand-vaporesso.jpg', logo: '/images/logo-vaporesso.png',
    about: "Vaporesso (Smoore Technology) is recognized as an innovation leader in pod systems, consistently winning industry awards for product design and technology. The XROS Pro 2 delivers best-in-class flavor through COREX heating technology, a 1200mAh battery, and a refined MTL (mouth-to-lung) experience that closely mimics the draw of a cigarette. For adult smokers transitioning to vaping, the XROS series is widely recommended by harm-reduction advocates and vape review sites as the gold standard for refillable pod systems.",
  },
  {
    id: 'hqd', label: 'HQD', emoji: '💎', pmta: 'pending', rank: 8,
    badge: '📊 Circana Top 8',
    heroImg: '/images/brand-hqd.jpg', logo: '/images/logo-hqd.png',
    about: "HQD ranks #8 in US retail e-cigarette sales according to Circana data — a strong position that reflects its appeal as an affordable, accessible disposable vape option. The Cuvie Bar series offers a slim bar form factor with draw activation and a wide selection of popular fruit and ice flavors at accessible price points. HQD has maintained consistent retail presence across convenience stores and vape shops, making it a reliable choice for budget-conscious adult vapers.",
  },
  {
    id: 'nexa', label: 'Nexa', emoji: '🌀', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/hero-1.jpg', logo: '/images/logo-nexa.png',
    about: 'Nexa is a disposable vape brand carried at VaporVault. Full product listings for Nexa are coming soon.',
  },
  {
    id: 'elf-bar', label: 'Elf Bar', emoji: '🧚', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/hero-1.jpg', logo: '/images/logo-elf-bar.png',
    about: 'Elf Bar is a disposable vape brand carried at VaporVault. Full product listings for Elf Bar are coming soon.',
  },
  {
    id: 'off-stamp', label: 'Off Stamp', emoji: '🎯', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/hero-1.jpg', logo: '/images/logo-off-stamp.png',
    about: 'Off Stamp is a disposable vape brand carried at VaporVault. Full product listings for Off Stamp are coming soon.',
  },
  {
    id: 'fume', label: 'Fume', emoji: '💭', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/hero-1.jpg', logo: '/images/logo-fume.png',
    about: 'Fume is a disposable vape brand carried at VaporVault. Full product listings for Fume are coming soon.',
  },
  {
    id: 'foger', label: 'Foger', emoji: '🌫️', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/hero-1.jpg', logo: '/images/logo-foger.png',
    about: 'Foger is a disposable vape brand carried at VaporVault. Full product listings for Foger are coming soon.',
  },
  {
    id: 'ut-vape', label: 'UT Vape', emoji: '💨', pmta: 'pending', rank: null,
    badge: '',
    heroImg: '/images/hero-1.jpg', logo: '/images/logo-ut-vape.png',
    about: "UT Vape's flagship disposable, the UT Bar, is manufactured by Flum — the same team behind the Flum Pebble and Flum Mello lines — across three device tiers: the entry-level UT Bar 6000, the clear-tank UT Bar Clear Tank 50K, and the dual-mesh UT Bar Pro 25000. Each tier carries its own flavor lineup, from candy and fruit blends to icy menthol profiles.",
  },
];

export const getBrand = (id) => BRANDS.find((b) => b.id === id);

/* ── Fifty Bar — sourced from thefiftybar.org (real device specs + full flavor
   lineup across all 7 collections). Descriptions are written fresh, not copied. ── */
const FIFTY_BAR_TIERS = {
  small: { puffs: '6,500', price: 18.99, nic: '5% (50mg)', ml: '18mL', battery: '650mAh Rechargeable', coil: 'Mesh Coil', boost: null, airflow: null, cat: '5000-10000' },
  large: { puffs: '20,000', price: 24.99, nic: '5% (50mg)', ml: '28mL', battery: '900mAh Grade A Rechargeable', coil: 'Dual Parallel Mesh Coil', boost: 'Always Active', airflow: '3-Level Adjustable', cat: '20000-plus' },
};

const FIFTY_BAR_COLLECTIONS = [
  {
    series: 'original', label: 'Original Series', tier: 'small',
    flavors: [
      ['Aloe Grapple Watermelon', 'Cool aloe vera layered with tart green apple and juicy watermelon for a smooth, hydrating draw from first puff to last.', 'Popular'],
      ['Aloe Kiwi Strawberry', 'Ripe strawberry and tangy kiwi riding on a mellow aloe vera base — a fan-favorite fruit combo with a smooth finish.'],
      ['Blue Razzle Ice', 'Tangy blue raspberry candy hits an arctic ice finish for one of the coldest, most intense draws in the Original lineup.', 'Best Seller'],
      ['Blueberry Cereal Donut Milk', 'Sweet blueberry cereal, glazed donut, and cold milk stacked into a breakfast-inspired dessert vape.'],
      ['Cinnamon Funnel Cake', 'Warm cinnamon sugar over fresh fairground funnel cake — a cozy dessert flavor built for all-day vaping.', 'Hot'],
      ['Diamond Peach Ice', 'Ripe Georgia peach crushed over a diamond-grade ice blend for a maximum-chill fruit finish.'],
      ['Juicy Mango Melon Ice', 'Tropical mango and sweet honeydew melon paired over a light ice finish for a refreshing everyday vape.'],
      ['Kyoho Grape Jelly', 'Dark, sweet Kyoho grape captured as a smooth, jelly-rich draw with real depth.'],
      ['Mint', 'Clean, icy American peppermint with no sweeteners or add-ons — just a crisp, classic mint draw.'],
      ['Pacific Cooler', 'A citrus-forward tropical punch blend inspired by the classic juice-aisle cooler, smoothed out for vaping.'],
      ['Pink Squares', 'Old-school chewy pink candy squares translated into a nostalgic, sweet-candy vape flavor.'],
      ['Tobaccocino', 'Smooth American tobacco meets rich espresso for a grown-up, coffeehouse-inspired blend.', 'Popular'],
      ['Triple Watermelon', 'Three layers of watermelon — fresh rind, sweet heart, and an icy finish — stacked into one draw.', 'Best Seller'],
      ['Vanilla Custard', "Rich, velvety vanilla custard with a smooth, creamy finish — the Original Series' all-day classic."],
    ],
  },
  {
    series: 'white', label: 'White Series', tier: 'small',
    flavors: [
      ['Baja Mango', 'Sun-ripened mango with a slightly tangy edge, inspired by fruit fresh off the Baja coast.'],
      ['Clear', 'Pure, unflavored vapor for adult vapers who want a clean draw with no added flavoring.'],
      ['Fresh Mango Lychee', 'Ripe mango balanced against delicately floral lychee for a light, well-rounded tropical draw.', 'Popular'],
      ['Frozen Apple', 'Crisp Granny Smith apple frozen at peak tartness for a shockingly fresh, icy bite.'],
      ['Frozen Orange Mango Pear', 'A frozen tropical trio of citrus orange, sweet mango, and juicy pear in one smooth draw.', 'Best Seller'],
      ['Frozen Watermelon', 'The purest watermelon flavor in the White Series lineup, chilled to a crisp, clean finish.'],
      ['Mint', 'White Series Mint leans even cooler and glacial than the Original — fresh peppermint, nothing added.'],
      ['Pineapple Whip', 'Tangy pineapple churned into a smooth, creamy whip-style finish, reminiscent of soft-serve.', 'Hot'],
      ['Strawberry Kiwi Ice', 'The classic strawberry-kiwi pairing chilled to a crisp, refreshing ice finish.', 'Popular'],
      ['Strawberry Lemon Grape', 'A bold three-way mashup of ripe strawberry, sharp lemon zest, and deep Concord grape.'],
      ['Strawberry Watermelon Twist', 'Sweet strawberry twisted together with fresh watermelon for a bright, easy-drinking draw.'],
    ],
  },
  {
    series: 'black', label: 'Black Series', tier: 'large',
    flavors: [
      ['Blueberry Cereal Donut Milk', 'The Black Series flagship — sweet blueberry cereal, glazed donut, and cold milk, now in the 20K format.', 'Best Seller'],
      ['Blueberry Yogurt', 'Creamy Greek-style yogurt swirled with ripe blueberries for a tart, refreshing dessert draw.'],
      ['Butterbean', 'Smooth butterscotch-tinged vanilla cream with a warm, buttery finish.'],
      ['Cinnamon Funnel Cake', "Fairground-fresh funnel cake and cinnamon sugar, scaled up to the Black Series' 20,000-puff format.", 'Hot'],
      ['Gold Tobacco', 'Premium gold-leaf American tobacco, smooth and slightly sweet with a refined finish.'],
      ['Kentucky Tobacco', 'Bold, full-bodied Kentucky-style tobacco — the most robust tobacco profile in the lineup.'],
      ['Milky Loops', 'Rainbow fruit cereal loops soaked in cold, sweet milk — a nostalgic breakfast-bowl draw.', 'Popular'],
      ['Raspberry Jam', 'Thick, rich raspberry jam with a touch of tartness and real berry depth.'],
      ['Strawberry Cereal Donut Milk', 'The fruity counterpart to the blueberry classic — strawberry cereal, glazed donut, cold milk.', 'Popular'],
      ['Strawberry Super Strudel', 'Flaky pastry crust, sweet strawberry jam filling, and a dusting of powdered sugar.', 'Best Seller'],
      ['Vanilla Custard', 'The all-time classic vanilla custard profile, now delivering 20,000 puffs of smooth, creamy flavor.', 'USA Made'],
    ],
  },
  {
    series: 'fruitia', label: 'Fifty Bar × Fruitia 20K', tier: 'large', partner: 'Fruitia',
    flavors: [
      ['B-Pop', "Fruitia's signature B-Pop profile — sweet, explosive bubblegum candy with a bright tropical edge."],
      ['Baja Burst', "A tangy tropical citrus blast built around Fruitia's Baja-inspired flavor profile."],
      ['Blueberry Pound Cake', 'Dense, buttery pound cake loaded with fresh blueberries — a Fruitia bakery-style favorite.'],
      ['Bonker Berries', "A wild mixed-berry collision of strawberry, blueberry, and raspberry in Fruitia's signature style."],
      ['Cookie Butter', 'Rich, spiced speculoos cookie butter with warm notes of caramel and cinnamon.', 'Hot'],
      ['Hawaiian Punch', "Fruitia's take on the iconic tropical fruit punch blend — sweet, familiar, and instantly recognizable.", 'Best Seller'],
      ['Polar Ice', 'A sub-zero arctic menthol built for vapers who want the coldest possible draw in the lineup.', 'Popular'],
      ['Sour Batch', 'A mouth-puckering sour candy mix across a medley of mixed berries.'],
      ['Southern Tobacco', 'A smooth, Southern-style tobacco profile with warm, mellow sweetness.'],
      ['Spearmint', 'Cool, sweet spearmint — lighter and sweeter than peppermint with a lingering fresh finish.'],
      ['Strawberry Beltz', 'Sweet chewy strawberry candy belts, captured in vapor form.', 'Popular'],
      ['Swedish Fish', 'The iconic berry-forward gummy candy profile, translated into a nostalgic all-day vape.'],
    ],
  },
  {
    series: 'humble', label: 'Fifty Bar × Humble', tier: 'small', partner: 'Humble Juice Co.',
    flavors: [
      ['Banana Funnel Cake', 'Ripe banana layered over warm, crispy fried funnel cake and cinnamon sugar.', 'Popular'],
      ['Blue Razz Bubblegum', "Tangy blue raspberry wrapped in sweet bubblegum candy — a Humble Juice Co. classic profile."],
      ['Blue Slush', 'An ice-cold blue raspberry slushie translated into a smooth, refreshing vape.'],
      ['Golden Mango', 'Ripe, golden Ataulfo mango with a buttery-sweet richness, less tart than typical mango blends.'],
      ['Lemon Watermelon', 'Bright lemon zest meets sweet summer watermelon for a tart-sweet balance.', 'Hot'],
      ['Orange Mango Sherbet', 'Creamy sherbet swirled with sweet orange and ripe mango for a frozen-dessert-style draw.', 'Best Seller'],
      ['Strawberry Banana', "Humble's iconic smoothie-inspired pairing of sweet strawberry and ripe banana."],
      ['Sweet Mint', 'A dialed-in mint profile — cooler than spearmint, sweeter than peppermint.'],
      ['Vanilla Tobacco', 'Smooth American tobacco layered with sweet, creamy vanilla for a sophisticated finish.'],
      ['Watermelon Lychee', 'Fresh summer watermelon paired with delicately floral lychee for an exotic fruit combo.'],
    ],
  },
  {
    series: 'hiddenhills', label: 'Fifty Bar × Hidden Hills', tier: 'small', partner: 'Hidden Hills Club',
    flavors: [
      ['Hawaiian Nectar', "A tropical fruit blend of guava, papaya, and passion fruit in Hidden Hills Club's signature style.", 'Popular'],
      ['Honeyberry Cream', 'Sweet honeyed berries draped in smooth, rich cream for an indulgent finish.'],
      ['Lava Blast', 'An explosive tropical mix of mango, passion fruit, and citrus built for maximum flavor intensity.', 'Hot'],
      ['Lemon Cake Dough', 'Bright lemon zest baked into soft, sweet cake dough — tart citrus meets warm pastry.'],
      ['Piña Lush', 'A creamy piña colada profile — tropical pineapple and coconut cream blended smooth.'],
      ['Pink Milk', 'Sweet strawberry-cereal milk, the leftover-bowl flavor everyone remembers, elevated to a full vape profile.'],
      ['Pink Sour Straws', 'The iconic pink sour straw candy — a sharp sour-sweet strawberry-lemon punch.', 'Popular'],
      ['Sour Peach Ringz', 'Sugar-coated sour peach gummy rings, captured as a sweet-tart candy vape.'],
      ['Vanilla Bean Tobacco', "Premium vanilla bean over smooth American tobacco — Hidden Hills Club's most refined blend."],
      ['Wazza Limon', 'A bold, sharp lemon-citrus candy profile with an intensely tangy finish.'],
      ['Yeti Mint', 'An arctic-grade mint profile built for vapers who want the coldest, most intense menthol available.'],
    ],
  },
  {
    series: 'midnight', label: 'Midnight Series', tier: 'large',
    flavors: [
      ['Iced Strawberry Pear', 'Sweet ripe strawberry blended with crisp, juicy pear, then frozen to an icy finish.', 'New'],
      ['Iced Green Rancher', 'A hard-candy-inspired green apple profile with a sharp, icy edge.', 'New'],
      ['Iced Blue Rancher', 'The blue raspberry take on a classic hard candy, delivered with an icy finish.', 'New'],
      ['Sour Strawberry Melon', 'A sour candy spin on strawberry and fresh watermelon.', 'New'],
      ['Orange Mint', 'Fresh citrus orange meets clean, cool spearmint for an unexpected, refreshing pairing.', 'New'],
      ['Limoncello', 'A zesty, Italian-inspired lemon liqueur profile with a bright citrus punch.', 'New'],
      ['Frozen Peach Lime Razz', 'A frozen triple-fruit mix of Georgia peach, tart lime, and blue raspberry.', 'New'],
      ['Frozen Orange Pom', 'Sun-ripened orange meets tart pomegranate, both flash-frozen for a bold, refreshing finish.', 'New'],
      ['Banana Fresca', 'Ripe tropical banana with a light, sparkling fresca-style finish.', 'New'],
    ],
  },
];

const fbSlug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const FIFTY_BAR_PRODUCTS = FIFTY_BAR_COLLECTIONS.flatMap((col) => {
  const spec = FIFTY_BAR_TIERS[col.tier];
  return col.flavors.map(([name, desc, badge]) => {
    const imgSlug = `${col.series}-${fbSlug(name)}`;
    return {
      id: `fifty-bar-${imgSlug}`,
      brand: 'fifty-bar',
      name: `Fifty Bar ${col.label} — ${name}`,
      puffs: spec.puffs,
      price: spec.price,
      nic: spec.nic,
      ml: spec.ml,
      battery: spec.battery,
      coil: spec.coil,
      boost: spec.boost,
      airflow: spec.airflow,
      desc,
      flavors: [name],
      badge: badge || '',
      cat: spec.cat,
      emoji: '🇺🇸',
      image: `/images/products/fifty-bar/${imgSlug}.webp`,
      series: col.label,
      partner: col.partner || null,
    };
  });
});

/* ── Batch 2 — Breeze, Flum, Geek Bar, RAZ, Tyson, UT Bar, Lost Mary ──
   Specs sourced from manufacturer/retailer listings (search-verified). Descriptions are
   generated from a topical template keyed off each flavor's own name (not copied from any
   source) — pragmatic given the volume (~300 SKUs) versus the hand-written Fifty Bar batch. */
const B2_TIERS = {
  'breeze-pro': { puffs: '2,000', price: 11.99, nic: '50mg', ml: '6ml', cat: 'under-5000' },
  'flum-pebble': { puffs: '6,000', price: 14.99, nic: '50mg', ml: '14ml', cat: '5000-10000' },
  'flum-float-x-10k': { puffs: '10,000', price: 17.99, nic: '5% (50mg)', ml: '8mL', coil: 'Dual Mesh Coil', cat: 'under-20000' },
  'flum-gio': { puffs: '3,000', price: 12.99, nic: '5% (50mg)', ml: '8mL', battery: '800mAh', cat: 'under-5000' },
  'flum-mello': { puffs: '20,000', price: 21.99, nic: '5% (50mg)', ml: '15mL', battery: '650mAh', coil: 'Hybrid 2.0 Mesh Coil', cat: '20000-plus' },
  'geek-bar-pulse': { puffs: '15,000', price: 19.99, nic: '50mg', ml: '16ml', cat: 'under-20000' },
  'geek-bar-pulse-x': { puffs: '25,000', price: 24.99, nic: '50mg', ml: '22ml', cat: '20000-plus' },
  'geek-bar-pulse-2': { puffs: '25,000', price: 24.99, nic: '5% (50mg)', battery: '800mAh', coil: 'Dual Mesh Coil', cat: '20000-plus' },
  'geek-bar-pulse-x-2': { puffs: '50,000', price: 32.99, nic: '5% (50mg)', ml: '18mL', battery: '1000mAh', coil: 'Dual Mesh Coil', cat: '20000-plus' },
  'raz-tn9000': { puffs: '9,000', price: 16.99, nic: '50mg', ml: '10ml', cat: '5000-10000' },
  'raz-dc25000': { puffs: '25,000', price: 26.99, nic: '50mg', ml: '22ml', cat: '20000-plus' },
  'raz-ca6000': { puffs: '6,000', price: 15.99, nic: '5% (50mg)', ml: '10mL', battery: '650mAh', coil: 'Mesh Coil', cat: '5000-10000' },
  'raz-ryl-classic-35k': { puffs: '35,000', price: 29.99, nic: '5% (50mg)', ml: '16.5mL', battery: '820mAh', coil: 'Mesh Coil', cat: '20000-plus' },
  'raz-rx50k': { puffs: '50,000', price: 32.99, nic: '5% (50mg)', ml: '19mL', battery: '800mAh', coil: 'Mesh Coil', airflow: 'Adjustable', cat: '20000-plus' },
  'tyson-heavyweight': { puffs: '7,000', price: 16.99, nic: '50mg', ml: '12ml', cat: '5000-10000' },
  'tyson-round2-7500': { puffs: '7,500', price: 16.99, nic: '5% (50mg)', ml: '16mL', battery: '650mAh', coil: 'Mesh Coil', cat: '5000-10000' },
  'tyson-iron-mike-15000': { puffs: '15,000', price: 19.99, nic: '5% (50mg)', ml: '14mL', battery: '600mAh', coil: 'Mesh Coil', cat: 'under-20000' },
  'tyson-legend-30k': { puffs: '30,000', price: 27.99, nic: '5% (50mg)', ml: '16mL', battery: '850mAh', coil: 'Triple Mesh Coil', cat: '20000-plus' },
  'tyson-lightweight-6000': { puffs: '6,000 (3 × 2,000)', price: 16.99, nic: '5% (50mg)', ml: '4mL × 3', battery: '550mAh (non-rechargeable)', coil: 'Mesh Coil', cat: '5000-10000' },
  'ut-vape-clear-tank-50k': { puffs: '50,000', price: 32.99, nic: '5% (50mg)', ml: '17mL', battery: '760mAh', coil: 'Dual Mesh Coil', cat: '20000-plus' },
  'ut-vape-ut-bar-6000': { puffs: '6,000', price: 15.99, nic: '5% (50mg)', ml: '10mL', battery: '550mAh', coil: 'Mesh Coil', cat: '5000-10000' },
  'ut-vape-pro-25000': { puffs: '25,000', price: 24.99, nic: '5% (50mg)', ml: '15.5mL', battery: '760mAh', coil: 'Dual Mesh Coil', cat: '20000-plus' },
  'lost-mary-viz-55k': { puffs: '55,000', price: 34.99, nic: '5% (50mg)', ml: '16.7mL', battery: '850mAh', coil: 'Dual Mesh Coil', cat: '20000-plus' },
  'lost-mary-mt15000-turbo': { puffs: '15,000', price: 19.99, nic: '5% (50mg)', ml: '16mL', battery: '600mAh', coil: 'Dual Mesh Coil', cat: 'under-20000' },
  'lost-mary-mt35000-turbo': { puffs: '35,000', price: 29.99, nic: '5% (50mg)', ml: '18mL', battery: '1000mAh', coil: 'Dual Mesh Coil', cat: '20000-plus' },
  'lost-mary-nera-pods': { puffs: '35,000 per pod', price: 24.99, nic: '5% (50mg)', ml: '12mL per pod', battery: '800mAh', coil: 'Mesh Coil', cat: 'pod-system' },
};

const B2_DESC_TEMPLATES = {
  ice: [(n) => `${n} — a chilled, icy take on the profile, built for a crisp all-day draw.`, (n) => `${n} — frosty and refreshing, with a cold finish that lingers.`],
  mint: [(n) => `${n} — a clean, cooling mint profile with a crisp finish.`, (n) => `${n} — smooth minty freshness from first puff to last.`],
  tobacco: [(n) => `${n} — a smooth, familiar tobacco profile for adult smokers.`],
  berry: [(n) => `${n} — a bold berry blend with a sweet-tart finish.`, (n) => `${n} — layered berry flavor, sweet with a tangy edge.`],
  melon: [(n) => `${n} — juicy and sweet, refreshing from first puff to last.`],
  tropical: [(n) => `${n} — a bright tropical fruit blend with real depth.`, (n) => `${n} — sun-ripened tropical fruit, sweet and smooth.`],
  citrus: [(n) => `${n} — a zesty citrus profile with a tangy edge.`],
  candy: [(n) => `${n} — nostalgic candy-shop sweetness in every puff.`],
  dessert: [(n) => `${n} — a rich, dessert-inspired profile, smooth and indulgent.`],
  default: [(n, s) => `${n} — part of the ${s} lineup, sourced direct for guaranteed authenticity.`],
};
function b2Classify(name) {
  const n = name.toLowerCase();
  if (/ice|icy|frozen|frost/.test(n)) return 'ice';
  if (/mint|menthol/.test(n)) return 'mint';
  if (/tobacco/.test(n)) return 'tobacco';
  if (/berry|razz|grape/.test(n)) return 'berry';
  if (/melon/.test(n)) return 'melon';
  if (/mango|peach|pineapple|guava|tropical|coconut|passion|hawaiian|piña|pina|colada|banana/.test(n)) return 'tropical';
  if (/lemon|lime|citrus|orange/.test(n)) return 'citrus';
  if (/gummy|candy|pop|bubblegum|jam|hubba|bull/.test(n)) return 'candy';
  if (/cake|custard|cream|milk|cereal|donut|dessert|strudel/.test(n)) return 'dessert';
  return 'default';
}
function b2Desc(name, seriesLabel) {
  const templates = B2_DESC_TEMPLATES[b2Classify(name)];
  const hash = Math.abs([...name].reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0));
  return templates[hash % templates.length](name, seriesLabel);
}
const b2Slug = fbSlug; // same NFD-normalizing slugify as Fifty Bar

// [brand, brandLabel, tierKey, seriesId, seriesLabel, flavorNames[]]
const B2_COLLECTIONS = [
  ['breeze', 'Breeze Pro', 'breeze-pro', 'pro', 'Breeze Pro', ['Banana Mint', 'Blue Raspberry', 'Blueberry Banana', 'Blueberry Mint', 'Blueberry Watermelon', 'Cherry Lemon', 'Citrus', 'Grape', 'Lemon Mint', 'Menthol', 'Mint', 'Orange Mango Watermelon', 'Pineapple Coconut', 'Pomegranate Berry Mint', 'Raspberry Lemon', 'Spearmint', 'Strawberry Banana', 'Strawberry Peach Mint', 'Tobacco']],
  ['flum', 'Flum Pebble', 'flum-pebble', 'pebble', 'Flum Pebble', ['Aloe Watermelon Splash', 'Berrymelon Icy', 'Blanco Grapefruit', 'Blue Razz Icy', 'Blueberry Mint', 'Cherry Berry', 'Clear', 'Luscious Watermelon', 'Menthol', 'Mighty Grapefruit', 'Peach Orange', 'Pineapple Coconut', "Sour X'Max", 'Straw Guava', 'Strawberry Coconut', 'Strawmelon Apple', 'Strawmelon', 'Summer Glacier', 'Tobacco', 'White Gummy']],
  ['flum', 'Flum Float X 10K', 'flum-float-x-10k', 'float-x-10k', 'Flum Float X 10K', ['Banana', 'Clear', 'Clear Oolong', 'Crisp Green', 'Green Grape', 'Lemon Pineapple', 'Lush Ice', 'Peach Ice', 'Pink Guava', 'Taro Ice']],
  ['flum', 'Flum Gio', 'flum-gio', 'gio', 'Flum Gio', ['Berry Fusion', 'Coffee Pump', 'Juicy Apple', 'Litchi Ice', 'Power Bull', 'Tobacco Cream', 'Tropical Punch']],
  ['flum', 'Flum Mello', 'flum-mello', 'mello', 'Flum Mello', ['Blue Razz Icy', 'Cool Mint', 'Midnight Barcelona', 'Peach Icy', 'Rome', 'Sour Apple Icy', 'Strawberry Blast', 'Summer Deluxe', 'Sunshine Cherry', 'Watermelon Icy']],
  ['geek-bar', 'Geek Bar Pulse 15000', 'geek-bar-pulse', 'pulse', 'Geek Bar Pulse 15000', ['Banana Ice', 'Drop Sour Savers', 'Frozen Blackberry Fab', 'Frozen Cherry Apple', 'Frozen Pina Colada', 'Frozen Strawberry', 'Frozen Watermelon', 'Frozen White Grape', 'Orange Mint Saver', 'Peach Lemonade', 'Pineapple Savers', 'Punch', 'Raspberry Watermelon', 'Strawberry Banana', 'Strawberry Kiwi', 'Strawberry Savers', 'Wild Berry Savers']],
  ['geek-bar', 'Geek Bar Pulse X 25000', 'geek-bar-pulse-x', 'pulse-x', 'Geek Bar Pulse X 25000', ['Blackberry Blueberry', 'Blueberry Jam', 'Cola Slush', 'Cool Mint', 'Dualicious', 'Miami Mint', 'Orange Fab', 'Orange Jam', 'Orange Mint', 'Peach Jam', 'Peach Perfect Slush', 'Pear of Thieves', 'Pink Berry Lemonade', 'Raspberry Jam', 'Sour Straws', 'Strawberry Dragon', 'Strawberry Jam', 'White Peach Raspberry']],
  ['geek-bar', 'Geek Bar Pulse 2', 'geek-bar-pulse-2', 'pulse-2', 'Geek Bar Pulse 2', ['Blue Razz Hubba', 'Grape Hubba', 'Lemon Hubba', 'Strawberry Watermelon Hubba', 'White Peach Hubba']],
  ['geek-bar', 'Geek Bar Pulse X 2 50K Bull Edition', 'geek-bar-pulse-x-2', 'pulse-x-2', 'Geek Bar Pulse X 2 50K Bull Edition', ['Blue Razz Bull', 'Coco Berry Bull', 'Peach Bull', 'Strawberry Bull', 'Watermelon Bull']],
  ['raz-vape', 'RAZ TN9000', 'raz-tn9000', 'tn9000', 'RAZ TN9000', ['Black Cherry Peach', 'Blue Raz B-Pop', 'Cactus Jack', 'Clear', 'Graham Twist', 'Grape Ice', 'Mango Colada', 'Orange Raspberry', 'Sour Mango Pineapple', 'Strawberry Ice', 'Strawberry Orange Mango', 'Tiffany', 'Triple Berry Ice', 'Tropical Storm', 'Violet', 'Watermelon Ice', 'White Gummy Grape']],
  ['raz-vape', 'RAZ DC25000', 'raz-dc25000', 'dc25000', 'RAZ DC25000', ["Bangin' Sour Berries", 'Blue Raz Gush', 'Blueberry Watermelon', 'Fire & Ice', 'Frozen Dragon Fruit Lemon', 'Hawaiian Punch', 'Miami Mint', "Pink Lemonade Minty O's", 'Sour Apple Ice', 'Sour Raspberry Punch', 'Strawberry Burst', 'Triple Berry Gush', 'Triple Berry Punch']],
  ['raz-vape', 'RAZ CA6000', 'raz-ca6000', 'ca6000', 'RAZ CA6000', ['Alaskan Mint', 'Crushed Berries', 'Dragon Fruit Lemonade', 'Frozen Strawberry', 'Georgia Peach', 'Hawaii Sunset', 'Peach Pear', 'Spearmint', 'Strawberry Kiwi', 'Watermelon Ice']],
  ['raz-vape', 'RAZ RYL Classic 35K', 'raz-ryl-classic-35k', 'ryl-classic-35k', 'RAZ RYL Classic 35K', ['Blue Raz Ice', 'Miami Mint', 'Orange Mango', 'Peach Passionfruit', 'Rainbow', 'Raspberry Watermelon', 'Sour Apple Ice', 'Sour Strawberry', 'Triple Berry', 'Watermelon Ice', 'White Yummy Ice']],
  ['raz-vape', 'RAZ RX50K', 'raz-rx50k', 'rx50k', 'RAZ RX50K', ['Code Blue', 'Code Green', 'Code Pink', 'Code Red', 'Lemon Batch', 'Triple Berry Batch', 'Watermelon Batch', 'White Peach Batch']],
  ['tyson', 'Tyson 2.0 Heavyweight', 'tyson-heavyweight', 'heavyweight', 'Tyson 2.0 Heavyweight', ['Mint Berry', 'Passion Punch', 'Peach Mango', 'Peach Watermelon', 'Strawberry Banana', 'Watermelon']],
  ['tyson', 'Tyson 2.0 Round 2 7500', 'tyson-round2-7500', 'round2-7500', 'Tyson 2.0 Round 2 7500', ['Apple Melonberry', 'Lush Lime', 'Melonhead', 'Pineapple Melon', 'Watermelon']],
  ['tyson', 'Tyson 2.0 Iron Mike 15000', 'tyson-iron-mike-15000', 'iron-mike-15000', 'Tyson 2.0 Iron Mike 15000', ['Cake', 'California Cherry', 'Peach Punch', 'Pineapple Melon', 'Pineapple Sour Berry']],
  ['tyson', 'Tyson 2.0 Legend 30K', 'tyson-legend-30k', 'legend-30k', 'Tyson 2.0 Legend 30K', ['Apple Melonberry', 'B-Burst', 'Cool Mint', 'Miami Mint']],
  ['tyson', 'Tyson 2.0 Lightweight 6000 (3-Pack)', 'tyson-lightweight-6000', 'lightweight-6000', 'Tyson 2.0 Lightweight 6000 (3-Pack)', ['Blue Razz', 'Frozen Blueberry', 'Grape Razz', 'Strawberry Banana', 'Watermelon']],
  ['ut-vape', 'UT Bar 6000', 'ut-vape-ut-bar-6000', 'ut-bar-6000', 'UT Bar 6000', ['Aloe Mango Icy', 'Black Pink', 'Blue Razz Icy', 'Cali Blossom', 'Citrus Cake', 'Clear', 'Guava Sunrise', 'Honey Peach', 'Jewel Berry', 'Jungle Juice', 'Lone Star Cactus', 'Milky', 'Mt. Rainier', 'Naked', 'Peach Mango Watermelon', 'Purple Rain', 'Sakura Grape', 'Strawberry Banana', 'Strawberry Lemonade', 'Super Mint', 'Triple Berries Ice']],
  ['ut-vape', 'UT Bar Clear Tank 50K', 'ut-vape-clear-tank-50k', 'clear-tank-50k', 'UT Bar Clear Tank 50K', ['Aloe Grape', 'Blue Razz Ice', 'Cherry Strawberry Gummy', 'Cola Ice', 'Frozen Watermelon', 'Green Apple Ice', 'Green Crisp Watermelon Icy', 'Icy Mint', 'Mango Peach', 'Mango Tango', 'Peach Ice', 'Peach Mango Watermelon', 'Raspberry Grape Guava', 'Slushy Lemon', 'Sour Straws', 'Strawberry Lemonade', 'Strawberry Red Fuji', 'White Gummy Strawberry', 'White Gummy']],
  ['ut-vape', 'UT Bar Pro 25000', 'ut-vape-pro-25000', 'pro-25000', 'UT Bar Pro 25000', ['Blue Razz Icy', 'Cool Mint', 'Grape Pop Icy', 'Strawmelon Peach', 'Thai Mango Icy', 'Watermelon Blueberry', 'White Gummy', 'Tobacco Cream', 'Watermelon Icy']],
  ['lost-mary', 'Lost Mary Viz 55K', 'lost-mary-viz-55k', 'viz-55k', 'Lost Mary Viz 55K', ['Baja Splash', 'Blackberry Chill', 'Blue Razz Ice', 'Cool Mint', 'Dragon Strawnana', 'Fab', 'Hawaiian Blast', 'Mexico Mango', 'Miami Mint', 'Nana Berries', 'Peach Berry', 'Raspberry Dragon Lime', 'Sour Apple Ice', 'Sour Strawberry Peach', 'Strawberry Kiwi', 'Tiger Drip', 'Watermelon Ice']],
  ['lost-mary', 'Lost Mary MT15000 Turbo', 'lost-mary-mt15000-turbo', 'mt15000-turbo', 'Lost Mary MT15000 Turbo', ['Baja Splash', 'Banana Cake', 'Berry Burst', 'Blue Raspberry Lemon', 'Blue Razz Ice', 'Miami Mint', 'Peach+', 'Pineapple B-Burst', 'Raspberry Watermelon', 'Rocket Pop', 'Strawberry Banana', 'Strawberry Kiwi', 'Winter Mint']],
  ['lost-mary', 'Lost Mary MT35000 Turbo', 'lost-mary-mt35000-turbo', 'mt35000-turbo', 'Lost Mary MT35000 Turbo', ['Black Razz Lemon', 'Classic Tobacco', 'Miami Mint', 'Mint Lemonade', 'Pink Lemonade+', 'Scary Berry+', 'Strawberry Kiwi+', 'Strawberry+', 'Summer Grape', 'Toasted Banana', 'Watermelon+', 'White Gami+', 'Winter Mint', 'Yellow Pixy']],
  ['lost-mary', 'Lost Mary Nera Fullview Pods', 'lost-mary-nera-pods', 'nera-pods', 'Lost Mary Nera Fullview Pods', ['Black Mint', 'Blackberry Blueberry', 'Blue Carnival', 'Golden Berry', 'Lemon Pop', 'Pink Lemonade', 'Pomegranate Blast', 'Rocket Freeze', 'Scary Berry', 'Sour Apple Ice', 'Watermelon Fab', 'Watermelon Ice', 'Winter Mint']],
];

const BRAND_EMOJI = { breeze: '🌬️', flum: '💨', 'geek-bar': '⚡', 'raz-vape': '🔷', tyson: '🥊', 'ut-vape': '💨', 'lost-mary': '🌸' };

const B2_PRODUCTS = B2_COLLECTIONS.flatMap(([brand, , tierKey, seriesId, seriesLabel, flavors]) => {
  const spec = B2_TIERS[tierKey];
  return flavors.map((name) => {
    const imgSlug = `${seriesId}-${b2Slug(name)}`;
    return {
      id: `${brand}-${imgSlug}`,
      brand,
      name: `${seriesLabel} — ${name}`,
      puffs: spec.puffs,
      price: spec.price,
      nic: spec.nic,
      ml: spec.ml,
      battery: spec.battery || null,
      coil: spec.coil || null,
      airflow: spec.airflow || null,
      desc: b2Desc(name, seriesLabel),
      flavors: [name],
      badge: '',
      cat: spec.cat,
      emoji: BRAND_EMOJI[brand] || '💨',
      image: `/images/products/${brand}/${imgSlug}.webp`,
      series: seriesLabel,
      partner: brand === 'ut-vape' ? 'Flum' : null,
    };
  });
});

export const PRODUCTS = [
  ...FIFTY_BAR_PRODUCTS,
  ...B2_PRODUCTS,
  { id: 'breeze-prime-6000', brand: 'breeze', name: 'Breeze Prime 6000', puffs: '6,000', price: 15.99, nic: '50mg', ml: '10ml', desc: 'Upgraded Breeze experience. #7 retail brand US by Circana. Rechargeable battery, expanded flavor library.', flavors: ['Mango Ice', 'Blueberry Mint', 'Peach Ice', 'Watermelon Patch', 'Cool Mint'], badge: '', cat: '5000-10000', emoji: '🌬️' },
  { id: 'vuse-alto', brand: 'vuse', name: 'Vuse Alto', puffs: 'N/A', price: 8.99, nic: '50mg', ml: '1.8ml pod', desc: '#1 US retail brand. Full FDA PMTA authorization. Pre-filled pods in Tobacco, Menthol — only FDA-authorized flavors.', flavors: ['Rich Tobacco', 'Menthol'], badge: 'FDA Auth', cat: 'pod-system', emoji: '✅' },
  { id: 'njoy-ace', brand: 'njoy', name: 'NJOY Ace', puffs: 'N/A', price: 7.99, nic: '45mg', ml: 'per pod', desc: 'FDA marketing authorization granted. Altria distribution network. Widely available. Tobacco and menthol flavors only.', flavors: ['Tobacco', 'Menthol'], badge: 'FDA Auth', cat: 'pod-system', emoji: '✅' },
  { id: 'smok-nord-5', brand: 'smok', name: 'SMOK Nord 5', puffs: 'refillable', price: 39.99, nic: 'varies', ml: 'refillable', desc: 'The iconic pod mod. Adjustable airflow, multiple coil options, 2000mAh battery. For experienced vapers who want control.', flavors: ['All e-liquids compatible'], badge: '', cat: 'pod-system', emoji: '🔥' },
  { id: 'vaporesso-xros-pro', brand: 'vaporesso', name: 'Vaporesso XROS Pro 2', puffs: 'refillable', price: 34.99, nic: 'varies', ml: 'refillable', desc: 'Premium pod system. Consistent MTL experience, COREX heating tech, 1200mAh. Best-in-class flavor for pod users.', flavors: ['All e-liquids compatible'], badge: '', cat: 'pod-system', emoji: '💡' },
  { id: 'hqd-cuvie-bar', brand: 'hqd', name: 'HQD Cuvie Bar', puffs: '7,000', price: 13.99, nic: '50mg', ml: '12ml', desc: '#8 US retail brand (Circana data). Slim bar form, auto-draw, wide flavor selection at accessible price point.', flavors: ['Peach Ice', 'Watermelon Ice', 'Blueberry Ice', 'Strawberry Kiwi', 'Lemon Mint', 'Grape Ice'], badge: '', cat: '5000-10000', emoji: '💎' },
];

// p.puffs is usually a bare number ("15,000") but sometimes already a full phrase
// ("35,000 per pod", "N/A", "refillable") — only append "puffs" onto the bare-number form.
export const puffsLabel = (puffs) => (/^[\d,]+$/.test(puffs) ? `${puffs} puffs` : puffs);

export const getById = (id) => PRODUCTS.find((p) => p.id === id);
export const getByBrand = (brandId) => PRODUCTS.filter((p) => p.brand === brandId);
export const getByCat = (cat) => PRODUCTS.filter((p) => p.cat === cat);
export const FEATURED_IDS = ['geek-bar-pulse-strawberry-banana', 'raz-vape-dc25000-hawaiian-punch', 'fifty-bar-black-vanilla-custard', 'lost-mary-viz-55k-watermelon-ice', 'breeze-prime-6000', 'tyson-heavyweight-watermelon', 'flum-pebble-luscious-watermelon', 'hqd-cuvie-bar'];
export const getFeatured = () => PRODUCTS.filter((p) => FEATURED_IDS.includes(p.id));
export const getNewArrivals = () => PRODUCTS.filter((p) => p.badge === 'New' || p.badge === 'USA Made');
export const getBestSellers = () => PRODUCTS.filter((p) => p.badge === 'Best Seller' || p.badge === 'Hot' || FEATURED_IDS.includes(p.id));

export const PUFF_RANGES = [
  { id: 'under-5000', label: 'Under 5,000', icon: '💧', sub: 'Entry-level & travel' },
  { id: '5000-10000', label: '5,000–10,000', icon: '⚡', sub: 'Most popular tier' },
  { id: 'under-20000', label: '10,000–20,000', icon: '🔋', sub: 'High-puff premium' },
  { id: '20000-plus', label: '20,000+', icon: '🚀', sub: 'Ultra long-lasting' },
];

export const CATEGORIES = [
  { id: 'disposable-vapes', label: 'Disposable Vapes', emoji: '💨', desc: 'Single-use devices in every puff-count tier, from entry-level to 25,000+ puff flagships.' },
  { id: 'pod-systems', label: 'Pod Systems', emoji: '💡', desc: 'Refillable and pre-filled pod devices, including FDA-authorized options.' },
  { id: 'e-liquids', label: 'E-Liquids', emoji: '🧪', desc: 'Bottled e-liquid for refillable pod systems and tanks.' },
  { id: 'nicotine-pouches', label: 'Nicotine Pouches', emoji: '📦', desc: 'Tobacco-free nicotine pouches for smoke-free, vapor-free nicotine use.' },
  { id: 'accessories', label: 'Accessories', emoji: '🔧', desc: 'Coils, batteries, chargers, and cases for pod systems and mods.' },
];

export const FLAVORS = [
  { id: 'blue-razz-ice', label: 'Blue Razz Ice', keyword: 'blue razz' },
  { id: 'blueberry-ice', label: 'Blueberry Ice', keyword: 'blueberry' },
  { id: 'mint', label: 'Mint & Menthol', keyword: 'mint' },
  { id: 'peach-mango', label: 'Peach Mango', keyword: 'peach' },
  { id: 'strawberry-mango', label: 'Strawberry Mango', keyword: 'strawberry mango' },
  { id: 'watermelon-ice', label: 'Watermelon Ice', keyword: 'watermelon' },
];

export const getByFlavor = (keyword) => {
  const kw = keyword.toLowerCase();
  const found = PRODUCTS.filter((p) => p.flavors?.some((f) => f.toLowerCase().includes(kw)));
  return found.length ? found : getFeatured().slice(0, 4);
};

export const FAQS = [
  { q: 'What is the minimum order amount?', a: 'VaporVault has a minimum order of $50. This helps us cover PACT Act-compliant shipping costs including adult signature confirmation on every delivery.' },
  { q: 'Do you verify age before shipping?', a: 'Yes. Age verification is required at checkout for all orders. We use third-party age verification to confirm all customers are 21 years of age or older. Adult signature is also required at delivery per the PACT Act.' },
  { q: 'What payment methods do you accept?', a: 'We accept cryptocurrency (Bitcoin, Ethereum, Litecoin — 10% discount applied automatically), Cash App, Apple Pay, and Chime. We do not accept traditional credit or debit cards due to payment processor restrictions on vape products.' },
  { q: 'Do you offer free shipping?', a: 'Yes! Orders of $100 or more qualify for free shipping. Orders under $100 incur a flat $9.99 shipping fee. All orders ship via PACT Act-compliant private carrier with adult signature required.' },
  { q: 'Which states do you ship to?', a: 'We ship to most US states. We currently cannot ship to California (Prop 31 flavor ban) or Massachusetts. Some states may have product restrictions. Check our Vape Laws by State guide for specifics.' },
  { q: 'How long does shipping take?', a: 'Most orders arrive within 3-7 business days. We use PACT Act-compliant private carriers rather than USPS or FedEx, which means slightly different routing than standard e-commerce. Someone 21+ must be available to sign for the package.' },
  { q: 'Are all your products authentic?', a: 'Yes. VaporVault sources all products directly to ensure authenticity. Counterfeit disposable vapes are dangerous — they may contain unknown substances or improperly assembled batteries. We only carry genuine branded products.' },
  { q: 'What is PMTA status and why does it matter?', a: "PMTA (Pre-Market Tobacco Product Application) is the FDA's authorization process for tobacco and nicotine products. Most flavored disposable vapes on the market are sold under PMTA-pending status. Only Vuse and NJOY have full FDA marketing authorization among major consumer brands. We disclose PMTA status on every brand page." },
  { q: 'Can I return a product?', a: 'Due to the nature of nicotine products and health regulations, we do not accept returns on opened vaping products. If you receive a defective product, contact us within 7 days of delivery with photos and we will work to resolve the issue.' },
  { q: 'Do you offer wholesale pricing?', a: 'Yes, we have a wholesale program for licensed retailers. Visit our Wholesale page or email us with your business information.' },
];

export const POSTS = [
  {
    slug: 'best-disposable-vapes-2026',
    title: 'Best Disposable Vapes 2026: Top Brands Ranked by Real Data',
    category: 'Buying Guide',
    date: '2026-05-01',
    dateLabel: 'May 2026',
    readTime: '8 min read',
    excerpt: 'Top brands ranked using real Circana retail sales data — not marketing claims.',
    emoji: '⚡',
    body: `<p>Finding the best disposable vape in 2026 means cutting through a crowded market full of competing claims. Rather than relying on manufacturer marketing, this guide uses real Circana retail POS sales data — the same data cited by the CDC Foundation in their Tobacco Monitoring reports — to rank the top brands by actual US consumer purchases.</p>
<h2>How We Ranked These Brands</h2>
<p>The Circana retail POS data covers multi-outlet and convenience store sales across the US. It tracks dollar sales across thousands of SKUs and is updated regularly by the CDC Foundation (<a href="https://tobaccomonitoring.org/national/" target="_blank" rel="noopener noreferrer">tobaccomonitoring.org</a>). This is the most reliable publicly available snapshot of what adult consumers are actually buying.</p>
<p>Note: These figures reflect brick-and-mortar retail sales. Online vape shops like VaporVault may carry a different mix of brands that reflect online consumer preferences.</p>
<h2>#1 Geek Bar Pulse 15000</h2>
<p><strong>Why it tops the list:</strong> Geek Bar Pulse holds the #3 spot in US retail (Circana 2025) and dominates online vape store best-seller lists. The Pulse 15000 features dual mesh coil technology and Pulse Mode — which alternates between high and low power for enhanced flavor intensity. The smart digital display screen shows battery level, e-liquid level, and puff count in real time.</p>
<ul>
<li>15,000 puffs from 16ml of e-liquid</li>
<li>50mg/ml nicotine salt</li>
<li>USB-C rechargeable battery</li>
<li>Available in 15+ flavors including Strawberry Mango, Watermelon Ice, and Miami Mint</li>
</ul>
<h2>#2 RAZ DC25000</h2>
<p>RAZ Vape's DC25000 represents the premium end of the disposable market. With adjustable wattage from 12W to 25W, an HD animated display screen, and 25,000 puffs, it delivers a customizable experience that rivals refillable devices. RAZ reportedly uses food scientists and mixologists in flavor development, producing complex layered profiles that evolve throughout the vaping session.</p>
<h2>#3 Fifty Bar 20K — The Only USA-Made Option</h2>
<p>Fifty Bar sets itself apart as one of the only major disposable vape brands manufactured and filled in the United States. For adult vapers who prefer domestically-made products, the Fifty Bar 20K is the clear choice. With 34+ bold American flavor options, 18ml of e-liquid, and Dual Parallel Mesh Coil technology, it delivers outstanding quality.</p>
<h2>#4 Lost Mary MO5000</h2>
<p>Lost Mary has developed a cult following thanks to its distinctive ultra-slim form factor and premium flavor delivery. The MO5000 is the brand's most popular device — compact, reliable, and available in flavors like Blueberry Ice, Peach Mango Watermelon, and Mint. Created in 2022 by the same manufacturer as Elf Bar, Lost Mary quickly became the second most recognized disposable brand in the US.</p>
<h2>Compliance Note</h2>
<p>The majority of flavored disposable vapes — including most on this list — do not currently have FDA PMTA marketing authorization. This is the regulatory reality of the US disposable vape market in 2026. For FDA-authorized options, Vuse (BAT) and NJOY (Altria) are the two major brands with authorization for tobacco and menthol flavors.</p>
<h2>Bottom Line</h2>
<p>For sheer flavor performance and puff count value, the <strong>Geek Bar Pulse 15000</strong> and <strong>RAZ DC25000</strong> lead the pack. For a USA-made option with exceptional flavor variety, the <strong>Fifty Bar 20K</strong> is unmatched. For a beginner-friendly slim device, <strong>Lost Mary MO5000</strong> remains the cult favorite.</p>`,
  },
  {
    slug: 'buy-disposable-vapes-online',
    title: 'How to Buy Disposable Vapes Online Safely: The Complete 2026 Guide',
    category: 'Buying Guide',
    date: '2026-04-01',
    dateLabel: 'April 2026',
    readTime: '7 min read',
    excerpt: 'Age verification, PACT Act shipping, state restrictions, and how to spot counterfeits.',
    emoji: '📊',
    body: `<p>Buying disposable vapes online in 2026 is more regulated than ever, but it remains a legal option for adults 21 and older in most US states. This guide covers everything you need to know about the process — from age verification to shipping expectations to spotting counterfeit products.</p>
<h2>Legal Requirements for Online Vape Purchases</h2>
<p>Federal law requires all online vape retailers to comply with the Prevent All Cigarette Trafficking (PACT) Act. For you as a consumer, this means:</p>
<ul>
<li><strong>Age verification at checkout:</strong> Legitimate online vape stores use third-party age verification services to confirm you are 21 or older before processing your order.</li>
<li><strong>Adult signature at delivery:</strong> Every package containing vaping products must require an adult signature at the door. No leaving packages on porches or in mailboxes.</li>
<li><strong>Private carrier shipping:</strong> USPS, FedEx, and UPS have banned or severely restricted direct-to-consumer nicotine vape shipments. Reputable online vape stores use PACT Act-compliant private carriers.</li>
</ul>
<h2>State Restrictions — Know Before You Buy</h2>
<p>Not all US states allow online purchases of all vaping products. Key restrictions as of 2026:</p>
<ul>
<li><strong>California:</strong> Proposition 31 bans all flavored vaping products statewide. Only tobacco and menthol flavors are permitted — and even those face restrictions.</li>
<li><strong>Massachusetts:</strong> Strict restrictions on online vape sales and high excise taxes make most online retailers unable to ship there.</li>
<li><strong>North Carolina, Virginia, Tennessee, and others:</strong> These states have product directory laws requiring PMTA compliance. Check the <a href="/vape-laws/">full state-by-state guide</a> before ordering.</li>
</ul>
<h2>How to Verify Authenticity</h2>
<p>Counterfeit disposable vapes are a real problem in the market. Signs that a product may be counterfeit include: unusually low pricing ($5 for a device that should cost $15+), packaging quality issues, QR codes that lead to suspicious websites, and inconsistent flavor or vapor quality. Always buy from reputable retailers that source products directly from brands or authorized distributors.</p>
<h2>What Information You Will Need to Provide</h2>
<p>At minimum, reputable online vape retailers require your full name, shipping address, date of birth for age verification, and email address for order confirmation. Some age verification systems may require a government ID scan as part of the process.</p>
<h2>Shipping Timelines</h2>
<p>Because most online vape orders ship via private PACT Act-compliant carriers rather than USPS, expect slightly longer delivery times than standard e-commerce. Typical transit times are 3-7 business days depending on your location. Signature at delivery is always required — make sure someone 21+ will be available to receive the package.</p>`,
  },
  {
    slug: 'how-long-does-a-disposable-vape-last',
    title: 'How Long Does a Disposable Vape Last? Puff Counts Explained',
    category: 'Device Guide',
    date: '2026-05-01',
    dateLabel: 'May 2026',
    readTime: '6 min read',
    excerpt: 'What puff counts really mean, and how to estimate real-world duration by tier.',
    emoji: '🔋',
    body: `<p>One of the most common questions for adults considering disposable vapes is: how long will it actually last? The puff count printed on the packaging is a maximum under ideal laboratory conditions. Real-world usage is almost always different. This guide explains what puff counts mean and how to estimate how long your device will last based on your personal usage.</p>
<h2>What Is a Puff Count?</h2>
<p>Manufacturers calculate puff counts using a standardized test: a machine takes puffs of a fixed duration (typically 1.5 to 2 seconds) at regular intervals. This is ideal lab testing, not real-world vaping. Most users take longer, harder draws than the testing standard, which means real puff counts are lower than advertised.</p>
<p>As a general rule, plan for 70-80% of the advertised puff count as your realistic expectation for average-intensity vaping.</p>
<h2>Real-World Duration by Puff Count</h2>
<p><strong>Under 5,000 puffs (e.g., Breeze Pro 2000):</strong> A light vaper who takes 100-150 puffs per day can expect 1-3 weeks. A heavier user (300-400 puffs/day, equivalent to roughly a pack-a-day smoker) might use it up in 5-7 days.</p>
<p><strong>5,000-10,000 puffs (e.g., Lost Mary MO5000, RAZ TN9000):</strong> At average usage of 200 puffs/day, a 5,000-puff device lasts 3-4 weeks. A 10,000-puff device lasts 6-8 weeks for the same user.</p>
<p><strong>10,000-20,000 puffs (e.g., Geek Bar Pulse 15000):</strong> At 200 puffs per day, a 15,000-puff device provides approximately 10-12 weeks of use. This is the "monthly supply" tier for moderate vapers.</p>
<p><strong>20,000+ puffs (e.g., RAZ DC25000, Fifty Bar 20K):</strong> At 200 puffs per day, a 20,000-puff device provides 3-4 months of use. These are the best value for regular vapers who want to minimize how often they need to reorder.</p>
<h2>Factors That Affect Battery and E-Liquid Life</h2>
<ul>
<li><strong>Puff duration:</strong> Longer draws consume more e-liquid per puff. A 3-second puff uses significantly more than a 1.5-second puff.</li>
<li><strong>Wattage (on adjustable devices):</strong> Higher wattage settings on devices like the RAZ DC25000 consume e-liquid faster but produce more vapor and flavor intensity.</li>
<li><strong>Temperature:</strong> Cold temperatures can temporarily reduce battery performance. Warm temperatures may thin the e-liquid and increase consumption rate.</li>
<li><strong>Storage:</strong> Keeping your device upright when not in use helps prevent e-liquid from pooling unevenly and extends consistent performance.</li>
</ul>
<h2>Which Puff Count Should I Choose?</h2>
<p>If you are transitioning from cigarettes, consider your daily smoking habit as a baseline. A pack-a-day smoker (20 cigarettes) takes roughly 200-400 puffs from a cigarette daily. At that rate, a 10,000-puff device would last 25-50 days. For light smokers (5-10 cigarettes per day), the same device could last 3-6 months.</p>
<p>For most adult vapers, the 5,000-10,000 puff tier delivers the best combination of portability, price, and duration. The 20,000+ puff tier is best for heavy users or those who prefer to order less frequently.</p>`,
  },
  {
    slug: 'what-is-nicotine-salt',
    title: 'What Is Nicotine Salt? Why Most Disposable Vapes Use Nic Salt',
    category: 'Education',
    date: '2026-04-01',
    dateLabel: 'April 2026',
    readTime: '5 min read',
    excerpt: 'Freebase vs nic salt, why disposables use 50mg/ml, and what concentration means for you.',
    emoji: '🧪',
    body: `<p>Almost every disposable vape on the market today uses nicotine salt (commonly called "nic salt") rather than traditional freebase nicotine. If you are new to vaping, understanding this distinction helps you make better purchasing decisions and set accurate expectations for your experience.</p>
<h2>Freebase Nicotine vs Nicotine Salt: The Key Difference</h2>
<p>Traditional freebase nicotine — used in most e-liquids until around 2015 — delivers nicotine in its pure, alkaline form. At high concentrations (above 18-24mg/ml), freebase nicotine creates a harsh throat hit that many users find uncomfortable. This limited the practical nicotine concentrations that could be used in low-wattage devices.</p>
<p>Nicotine salt is freebase nicotine chemically combined with an organic acid, most commonly benzoic acid. This process lowers the pH of the nicotine, which dramatically reduces the throat harshness while allowing much higher concentrations to be vaped comfortably. JUUL pioneered nic salt technology for consumer vaping, and it transformed the industry.</p>
<h2>Why Disposable Vapes Use Nicotine Salt</h2>
<p>Most disposable vapes contain 50mg/ml (5%) nicotine salt. This is significant: at this concentration, a single disposable vape contains significantly more nicotine than traditional e-liquids. The benzoic acid formulation makes this concentration smooth enough to inhale without harshness. For adult smokers transitioning from cigarettes, this high-concentration, smooth delivery closely matches the nicotine satisfaction of a cigarette, which is why disposable vapes have been effective as cigarette alternatives for many adult users.</p>
<h2>Standard Concentrations</h2>
<p>The most common nicotine salt concentrations you will see on disposable vapes:</p>
<ul>
<li><strong>50mg/ml (5%):</strong> The most common. Used in most Geek Bar, RAZ, Lost Mary, and Fifty Bar products. Appropriate for adult smokers who were moderate-to-heavy cigarette users.</li>
<li><strong>35mg/ml (3.5%):</strong> Less common in disposables, more common in refillable pod system e-liquids. Suitable for lighter former smokers.</li>
<li><strong>0mg/ml (0%):</strong> Nicotine-free disposables are available for adult vapers who have reduced their nicotine dependency and wish to eliminate it entirely while retaining the behavioral aspect of vaping.</li>
</ul>
<h2>A Note on Health</h2>
<p>Nicotine at any concentration is an addictive chemical. Vaping products containing nicotine are intended for adult smokers who have chosen vaping as an alternative to combustible cigarettes — not for non-smokers or people who have never used tobacco products. If you have never smoked or vaped, these products are not for you.</p>`,
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
