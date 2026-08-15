export type Requirement = { title: string; desc: string };

export type Industry = {
  slug: string;
  name: string;
  desc: string;
  overview: string;
  requirements: Requirement[];
  recommended: string[]; // solution slugs
};

export const industries: Industry[] = [
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    desc: "Precision dosing and sterile packaging for tablets, capsules, liquids and powders.",
    overview:
      "Pharmaceutical packaging demands validated accuracy, full traceability and contamination control. Every machine must meet regulatory documentation, serialisation and inspection requirements at production speed.",
    requirements: [
      { title: "Dosing Accuracy", desc: "Tablets, capsules and liquids need validated fill accuracy with rejection of any out-of-spec unit." },
      { title: "Serialisation", desc: "Track-and-trace coding and aggregation are mandatory for regulated markets." },
      { title: "Vision Verification", desc: "100% inspection of fill, seal and print protects patient safety and compliance." },
      { title: "Clean Construction", desc: "GMP-grade stainless, easy cleaning and minimal product contact surfaces." },
    ],
    recommended: ["liquid-filling", "stick-packing", "vision-inspection", "checkweighers", "x-ray-and-metal-detection", "printers-coders", "friction-feeders", "secondary-packaging"],
  },
  {
    slug: "food-snacks",
    name: "Food & Snacks",
    desc: "High-speed packing for namkeens, chips, biscuits and ready-to-eat formats.",
    overview:
      "Snack lines run at very high speeds across light, bulky and fragile products. Gas flushing, accurate weighing and gentle handling protect shelf life and product integrity.",
    requirements: [
      { title: "High Throughput", desc: "Multihead weighing and VFFS systems sustain thousands of packs per hour." },
      { title: "Gentle Handling", desc: "Fragile snacks need low-drop, low-breakage feeding and filling." },
      { title: "Freshness", desc: "Nitrogen flushing and strong seals extend shelf life." },
      { title: "Format Flexibility", desc: "Quick changeover between pillow packs, gusseted and stand-up pouches." },
    ],
    recommended: ["horizontal-form-fill-seal", "pick-fill-seal", "bulk-packing", "checkweighers", "x-ray-and-metal-detection", "printers-coders", "secondary-packaging"],
  },
  {
    slug: "beverages",
    name: "Juices & Beverages",
    desc: "Filling and sealing lines for juices, energy drinks and liquid sachets.",
    overview:
      "Beverage filling combines speed with hygiene. Lines must handle thin to viscous liquids, hot or cold fill, and a range of bottle and pouch formats without product loss.",
    requirements: [
      { title: "Hygienic Fill", desc: "CIP/SIP-ready filling protects against contamination in liquid products." },
      { title: "Fill Accuracy", desc: "Servo and flow-meter filling control giveaway across bottles and pouches." },
      { title: "Fill Level Check", desc: "Vision systems verify level and cap presence at line speed." },
      { title: "Format Range", desc: "PET, glass and spouted pouch handling on a single line." },
    ],
    recommended: ["liquid-filling", "horizontal-form-fill-seal", "stick-packing", "vision-inspection", "checkweighers", "printers-coders"],
  },
  {
    slug: "dairy",
    name: "Dairy",
    desc: "Hygienic filling systems for milk, curd, butter, ghee and dairy powders.",
    overview:
      "Dairy products are sensitive to contamination and temperature. Packaging must be hygienic, fast and gentle across liquids, semi-solids and powders.",
    requirements: [
      { title: "Cold-Chain Hygiene", desc: "Sanitary, CIP-ready contact parts for perishable dairy products." },
      { title: "Viscosity Range", desc: "Accurate filling from thin milk to thick curd, ghee and paste." },
      { title: "Leak-Proof Seals", desc: "Reliable sealing prevents leakage through cold-chain transit." },
      { title: "Date Coding", desc: "Clear, durable batch and expiry coding on every pack." },
    ],
    recommended: ["liquid-filling", "horizontal-form-fill-seal", "stick-packing", "checkweighers", "x-ray-and-metal-detection", "printers-coders"],
  },
  {
    slug: "edible-oils",
    name: "Edible Oils",
    desc: "Accurate volumetric filling for sunflower, mustard, palm and blended oils.",
    overview:
      "Edible oil packing requires drip-free, accurate volumetric filling across a wide range of pack sizes, with secure capping and clear coding for retail and bulk.",
    requirements: [
      { title: "Drip-Free Filling", desc: "Anti-drip nozzles keep packs and machines clean at high speed." },
      { title: "Volumetric Accuracy", desc: "Temperature-compensated filling controls giveaway across pack sizes." },
      { title: "Secure Capping", desc: "Tamper-evident capping for pouches, bottles and jerry cans." },
      { title: "Bulk & Retail", desc: "One line spanning small retail packs to large bulk containers." },
    ],
    recommended: ["liquid-filling", "horizontal-form-fill-seal", "vision-inspection", "checkweighers", "printers-coders", "secondary-packaging"],
  },
  {
    slug: "agrochemicals",
    name: "Agrochemicals",
    desc: "Safe and precise filling for pesticides, herbicides and fertilisers.",
    overview:
      "Agrochemical packaging handles hazardous, often corrosive products. Operator safety, chemical-resistant construction and tamper-evident sealing are essential.",
    requirements: [
      { title: "Operator Safety", desc: "Enclosed filling and fume control protect operators from hazardous chemicals." },
      { title: "Corrosion Resistance", desc: "Chemically resistant materials throughout the product path." },
      { title: "Tamper Evidence", desc: "Induction sealing and tamper-evident closures for regulated products." },
      { title: "Accurate Dosing", desc: "Precise fill of liquids, granules and powders with reject control." },
    ],
    recommended: ["liquid-filling", "stick-packing", "bulk-packing", "checkweighers", "printers-coders", "secondary-packaging"],
  },
  {
    slug: "seeds-grains",
    name: "Seeds & Grains",
    desc: "Weighing and pouch packing systems for paddy, wheat, vegetable seeds and pulses.",
    overview:
      "Free-flowing grains and seeds pack across a huge weight range. Accurate weighing and robust bagging handle everything from small seed packs to bulk sacks.",
    requirements: [
      { title: "Weight Range", desc: "From small seed sachets to 50 kg bulk sacks on matched systems." },
      { title: "Gentle on Seed", desc: "Low-impact handling preserves germination and seed quality." },
      { title: "Accurate Weighing", desc: "Multihead and net weighers control giveaway on free-flowing product." },
      { title: "Durable Sealing", desc: "Heat or stitch seals that survive rough handling and storage." },
    ],
    recommended: ["bulk-packing", "horizontal-form-fill-seal", "pick-fill-seal", "checkweighers", "x-ray-and-metal-detection", "printers-coders"],
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    desc: "Sachet and bottle filling for shampoos, lotions, creams and hygiene products.",
    overview:
      "Personal care spans thin liquids to thick creams across premium pack formats. Presentation, fill accuracy and clean dispensing components matter as much as speed.",
    requirements: [
      { title: "Viscosity Handling", desc: "Accurate filling from runny shampoo to thick cream and gel." },
      { title: "Component Feeding", desc: "Pumps, triggers, sprayers and roll-ons fed and fitted reliably." },
      { title: "Premium Finish", desc: "Clean, presentable packs befitting retail personal care brands." },
      { title: "Format Variety", desc: "Sachets, bottles, tubes and pouches across one portfolio." },
    ],
    recommended: ["liquid-filling", "feeding-systems", "horizontal-form-fill-seal", "stick-packing", "vision-inspection", "secondary-packaging"],
  },
  {
    slug: "detergents",
    name: "Detergents & Homecare",
    desc: "Powder and liquid packing for detergents, dishwash and surface cleaners.",
    overview:
      "Detergent and homecare packaging involves corrosive chemicals, high-dust powder environments, and products ranging from free-flowing powders to thick gels — demanding robust, chemical-resistant machines.",
    requirements: [
      { title: "Corrosion Resistance", desc: "SS316, HDPE or resistant polymers throughout to resist alkaline cleaners." },
      { title: "Dust Containment", desc: "Enclosed filling with extraction protects operators and reduces loss." },
      { title: "Seal Strength", desc: "Seal-integrity testing and checkweighing guard against leakage claims." },
      { title: "Large-Format Packing", desc: "Robust HFFS/VFFS for 1–5 kg powder and liquid packs." },
    ],
    recommended: ["horizontal-form-fill-seal", "liquid-filling", "bulk-packing", "feeding-systems", "checkweighers", "printers-coders"],
  },
  {
    slug: "spices-powders",
    name: "Spices & Powders",
    desc: "Auger-based filling and sealing for masalas, spice blends and dry powders.",
    overview:
      "Spice and powder packing needs precise auger dosing, dust control and aroma retention. Lines run from small consumer sachets to bulk catering packs.",
    requirements: [
      { title: "Auger Dosing", desc: "Accurate auger fillers handle fine, aerated and free-flowing powders." },
      { title: "Dust Control", desc: "Enclosed dosing keeps powders contained and operators safe." },
      { title: "Aroma Retention", desc: "Strong seals and barrier films preserve flavour and freshness." },
      { title: "Pack Range", desc: "Small consumer sachets through to bulk catering packs." },
    ],
    recommended: ["horizontal-form-fill-seal", "stick-packing", "pick-fill-seal", "checkweighers", "x-ray-and-metal-detection", "printers-coders"],
  },
  {
    slug: "pet-food",
    name: "Pet Food",
    desc: "Multihead weighing and doypack filling for dry kibble, treats and wet food.",
    overview:
      "Pet food packs across dry kibble, treats and wet pouches at high volume. Accurate weighing, strong seals and premium doypack presentation drive shelf appeal.",
    requirements: [
      { title: "Accurate Weighing", desc: "Multihead weighers handle irregular kibble and treats with low giveaway." },
      { title: "Doypack Presentation", desc: "Resealable stand-up pouches for premium retail shelf appeal." },
      { title: "Wet & Dry", desc: "Systems for both dry kibble and retort-ready wet pouches." },
      { title: "Strong Seals", desc: "Durable seals for heavy bags that face rough handling." },
    ],
    recommended: ["horizontal-form-fill-seal", "pick-fill-seal", "bulk-packing", "checkweighers", "x-ray-and-metal-detection", "secondary-packaging"],
  },
  {
    slug: "industrial-chemicals",
    name: "Industrial Chemicals",
    desc: "Bulk and drum filling for industrial solvents, lubricants and specialty chemicals.",
    overview:
      "Industrial chemical filling handles hazardous and viscous products in bulk. Safety, accuracy and chemical-resistant construction are paramount across drums and containers.",
    requirements: [
      { title: "Hazard Handling", desc: "Closed-loop, fume-controlled filling for solvents and reactive chemicals." },
      { title: "Bulk Accuracy", desc: "Flow-meter and weigh filling for drums, IBCs and large containers." },
      { title: "Chemical Resistance", desc: "Resistant wetted parts for aggressive industrial media." },
      { title: "Traceability", desc: "Batch coding and records for regulated industrial supply." },
    ],
    recommended: ["liquid-filling", "bulk-packing", "checkweighers", "printers-coders", "secondary-packaging"],
  },
  {
    slug: "bakery",
    name: "Bakery & Confectionery",
    desc: "Twist tying, flow wrapping and case packing for breads, cakes and sweets.",
    overview:
      "Bakery and confectionery products are fragile and varied. Gentle handling, flexible formats and quick closure keep delicate goods presentable and fresh.",
    requirements: [
      { title: "Gentle Handling", desc: "Soft feeding and flow wrapping protect delicate breads and cakes." },
      { title: "Fast Closure", desc: "Clip and twist-tie systems close bagged bakery products at speed." },
      { title: "Freshness", desc: "Flow wrap and modified atmosphere extend shelf life of baked goods." },
      { title: "Format Flexibility", desc: "Handles a wide mix of shapes and pack styles." },
    ],
    recommended: ["twist-tying", "friction-feeders", "checkweighers", "x-ray-and-metal-detection", "printers-coders", "secondary-packaging"],
  },
  {
    slug: "nutraceuticals",
    name: "Nutraceuticals",
    desc: "Sachet and stick pack filling for protein powders, supplements and vitamins.",
    overview:
      "Nutraceutical packaging balances dosing accuracy with single-serve convenience and traceability. Stick packs and sachets dominate alongside bottled formats.",
    requirements: [
      { title: "Single-Serve Dosing", desc: "Precise multi-lane stick and sachet filling for supplements." },
      { title: "Traceability", desc: "Batch coding and verification for health-regulated products." },
      { title: "Powder Handling", desc: "Accurate auger dosing of fine protein and vitamin powders." },
      { title: "Barrier Seals", desc: "Moisture-barrier films keep sensitive actives stable." },
    ],
    recommended: ["stick-packing", "horizontal-form-fill-seal", "vision-inspection", "checkweighers", "x-ray-and-metal-detection", "printers-coders"],
  },
  {
    slug: "coffee-tea",
    name: "Coffee & Tea",
    desc: "Drip bag, sachet and canister filling for ground coffee, instant coffee and teas.",
    overview:
      "Coffee and tea packaging protects aroma and freshness while supporting premium formats like drip bags, sachets and valve pouches.",
    requirements: [
      { title: "Aroma Protection", desc: "One-way valves and barrier films lock in freshness and aroma." },
      { title: "Format Range", desc: "Drip bags, sachets, pillow packs and canisters on flexible lines." },
      { title: "Accurate Dosing", desc: "Consistent fill of ground, whole-bean and instant products." },
      { title: "Premium Finish", desc: "Clean, branded packs for premium coffee and tea shelves." },
    ],
    recommended: ["horizontal-form-fill-seal", "stick-packing", "pick-fill-seal", "checkweighers", "printers-coders", "secondary-packaging"],
  },
];

export const industrySlugs = industries.map((i) => i.slug);

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

// Curated Unsplash photos per industry — each shows the industry's *packaged* product
// (pouches, bottles, sacks, blister packs...), fitting for a packaging machinery company.
const imageIds: Record<string, string> = {
  pharmaceuticals: "m1Hq4ibP9rc", // pile of medicine blister packs
  "food-snacks": "BK_DI2rHApU", // potato chips in a golden packet
  beverages: "_bQxQlLpoVY", // juice bottles on a shelf
  dairy: "2dzhYsVhLVA", // milk bottles
  "edible-oils": "c_xqdv4QIcU", // bottled cooking oil
  agrochemicals: "qHo65Xyzcvo", // warehouse stacked with white sacks
  "seeds-grains": "BuEWD0IbTKQ", // sacks of legumes and grains
  "personal-care": "5eoYsqzmDW4", // pump bottles of shampoo & conditioner
  detergents: "9ASolF48rzE", // detergent bottle at washing machine
  "spices-powders": "AdErRzhuv2U", // jars of spices
  "pet-food": "HONSlXP3bpE", // pet food bag
  "industrial-chemicals": "_hOkO9ooc0A", // blue chemical drums on pallets
  bakery: "XNNurImW1xM", // bread in paper bag
  nutraceuticals: "PSiWzYyLwuQ", // whey protein container & shaker
  "coffee-tea": "GllXcy74_Y8", // coffee pouch pack
};

export function industryImage(slug: string, w = 700, h = 500): string {
  const id = imageIds[slug];
  if (!id) return industryImageFallback(slug, w, h);
  // Unsplash's download endpoint redirects to the optimized image at the requested width.
  return `https://unsplash.com/photos/${id}/download?force=true&w=${w}`;
}

// Reliable high-quality fallback if an Unsplash photo ever fails to load.
export function industryImageFallback(slug: string, w = 700, h = 500): string {
  return `https://picsum.photos/seed/vedvik-${slug}/${w}/${h}`;
}
