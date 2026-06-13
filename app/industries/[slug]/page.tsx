import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.name} Packaging Solutions in Ahmedabad, Gujarat`,
    description: industry.description,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

type Machine = {
  name: string;
  brand: string;
  image: string;
  slug: string;
};

type Industry = {
  name: string;
  description: string;
  heroImage: string;
  overview: string;
  painPoints: { title: string; detail: string }[];
  machines: Machine[];
};

const industries: Record<string, Industry> = {
  "pharmaceuticals": {
    name: "Pharmaceuticals",
    description: "Precision dosing and sterile packaging for tablets, capsules, liquids and powders.",
    heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
    overview: "The pharmaceutical industry operates under some of the strictest regulatory and quality standards in the world. Every gram filled, every seal made, and every label applied must be traceable, verifiable, and compliant. Vedvik Machinery provides packaging and inspection systems that meet GMP, FDA, and CE requirements — designed for both large-scale production and flexible batch manufacturing.",
    painPoints: [
      { title: "Regulatory Compliance", detail: "Every machine and process must conform to GMP, FDA 21 CFR, and local CDSCO norms. Documentation, audit trails, and validated processes are non-negotiable." },
      { title: "Dosing Accuracy", detail: "Under- or over-filling a pharmaceutical product carries serious risk. Gravimetric and volumetric filling systems must maintain accuracy within ±0.5% across all batch sizes." },
      { title: "Seal Integrity", detail: "Broken or compromised seals can render entire batches unsellable. Vision and X-ray inspection systems are critical for 100% inline verification." },
      { title: "Contamination Control", detail: "Foreign particle detection — metal, glass, or plastic — is mandatory for injectables, oral solids, and liquid formulations." },
      { title: "Flexibility for SKUs", detail: "Pharmaceutical manufacturers often run dozens of SKUs with rapid changeovers. Machines must allow tool-free format changes with minimal downtime." },
    ],
    machines: [
      { name: "Liquid Filling Lines", brand: "Filtec Automation", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png", slug: "Liquid-Filling" },
      { name: "Vision Inspection", brand: "E2M Couth", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png", slug: "Inspection" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "X-ray and Metal Detector", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778823792/X_ray_obgczv.png", slug: "xray-metal-detector" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "food-snacks": {
    name: "Food & Snacks",
    description: "High-speed packing for namkeens, chips, biscuits, and ready-to-eat formats.",
    heroImage: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=1200&q=80",
    overview: "India's food and snacks industry is one of the fastest-growing FMCG segments, driven by demand for convenience, hygiene, and shelf-life. From namkeens to biscuits to ready-to-eat meals, packaging plays a central role in product quality and brand perception. Vedvik Machinery offers high-speed, flexible packaging lines that handle everything from pouching to secondary cartoning.",
    painPoints: [
      { title: "High-Speed Output", detail: "Snack lines often run at 200–400 packs per minute. Any downtime directly impacts output targets and profitability." },
      { title: "Film Compatibility", detail: "Laminated films, monomaterials, and metalized foils all behave differently. Machines must maintain consistent seal quality across film types." },
      { title: "Weight Accuracy", detail: "Regulatory requirements mandate declared weight compliance. Inline checkweighing with automatic reject is essential." },
      { title: "Shelf Appeal", detail: "Pouch format, seal quality, and print accuracy directly affect retail shelf performance. Vision inspection ensures every pack meets brand standards." },
      { title: "Foreign Body Risk", detail: "Metal or hard plastic contamination in snack products results in costly recalls. X-ray and metal detection are standard requirements for retail supply." },
    ],
    machines: [
      { name: "Horizontal Form Fill Seal", brand: "Effytec", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png", slug: "HFFS" },
      { name: "Pick Fill Seal", brand: "Vedvik Machinery", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png", slug: "PFS" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "X-ray and Metal Detector", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778823792/X_ray_obgczv.png", slug: "xray-metal-detector" },
      { name: "Secondary Automation", brand: "Vedvik Machinery", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774885/Secondary_zqcr5t.png", slug: "Secondary-Automation" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "beverages": {
    name: "Juices & Beverages",
    description: "Filling and sealing lines for juices, energy drinks, and liquid sachets.",
    heroImage: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1200&q=80",
    overview: "The beverages sector demands hygienic, high-speed filling with minimal product loss and maximum shelf life. Whether it is aseptic juice filling, energy drink lines, or single-serve liquid sachets, Vedvik Machinery provides systems built for CIP/SIP-ready operation, precision fill volumes, and tamper-evident packaging.",
    painPoints: [
      { title: "Fill Accuracy", detail: "Liquid products are sold by volume. Overfill wastes product; underfill triggers regulatory action. Servo-driven volumetric filling maintains ±1 ml accuracy at speed." },
      { title: "Hygiene Standards", detail: "FSSAI, BIS, and export regulations require documented hygiene protocols. CIP/SIP-ready machines eliminate manual cleaning risk." },
      { title: "Cap and Seal Integrity", detail: "A poorly sealed beverage bottle leads to leakage, contamination, and brand damage. Vision inspection for cap torque, fill level, and seal integrity is essential." },
      { title: "Labelling Accuracy", detail: "MRP, batch, and expiry coding must be legible and accurately placed. Inline TIJ or laser coding with camera verification ensures compliance." },
    ],
    machines: [
      { name: "Liquid Filling Lines", brand: "Filtec Automation", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png", slug: "Liquid-Filling" },
      { name: "Horizontal Form Fill Seal", brand: "Effytec", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png", slug: "HFFS" },
      { name: "Vision Inspection", brand: "E2M Couth", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png", slug: "Inspection" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "dairy": {
    name: "Dairy",
    description: "Hygienic filling systems for milk, curd, butter, ghee, and dairy powders.",
    heroImage: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1200&q=80",
    overview: "Dairy packaging requires exceptional hygiene standards, temperature-controlled environments, and equipment that can handle a wide range of viscosities — from thin milk to thick ghee and solid butter. Vedvik Machinery's liquid filling and inspection systems are designed to handle the full dairy portfolio with minimal contamination risk and maximum throughput.",
    painPoints: [
      { title: "Viscosity Range", detail: "Dairy products range from water-thin milk to semi-solid ghee. Filling systems must be configurable for the full viscosity spectrum without product damage." },
      { title: "Short Shelf Life Pressure", detail: "Dairy products have tight shelf lives. Any packaging downtime or rework directly impacts product usability and write-off costs." },
      { title: "Cold Chain Compatibility", detail: "Machines operating in cold, humid environments must be built with appropriate materials and IP ratings to avoid corrosion and electrical failure." },
      { title: "Weight Compliance", detail: "Dairy products sold by weight require inline verification and reject systems to meet legal metrology requirements." },
    ],
    machines: [
      { name: "Liquid Filling Lines", brand: "Filtec Automation", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png", slug: "Liquid-Filling" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Vision Inspection", brand: "E2M Couth", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png", slug: "Inspection" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "edible-oils": {
    name: "Edible Oils",
    description: "Accurate volumetric filling for sunflower, mustard, palm, and blended oils.",
    heroImage: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&q=80",
    overview: "Edible oil packaging demands precise fill volumes, leak-proof sealing, and machines that can handle the slippery, viscous nature of oils without product loss or contamination. Lines typically run bottles from 500 ml to 5 litres at high speed, with integrated capping, coding, and checkweighing.",
    painPoints: [
      { title: "Drip-Free Filling", detail: "Oil drips on bottles create labelling and handling problems downstream. Filling nozzles must be designed for zero-drip operation." },
      { title: "Cap Torque Consistency", detail: "Undertorqued caps lead to leakage in transit. Overtorqued caps are difficult to open. Automated torque control with inline verification is essential." },
      { title: "Legal Metrology", detail: "Oil sold by volume is subject to Legal Metrology Act compliance in India. Inline checkweighing and fill level inspection ensure declared quantity compliance." },
      { title: "Line Flexibility", detail: "Oil manufacturers run multiple SKUs — 500 ml, 1 L, 2 L, 5 L. Quick-changeover filling heads and conveyors reduce SKU transition time." },
    ],
    machines: [
      { name: "Liquid Filling Lines", brand: "Filtec Automation", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png", slug: "Liquid-Filling" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Vision Inspection", brand: "E2M Couth", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png", slug: "Inspection" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "agrochemicals": {
    name: "Agrochemicals",
    description: "Safe and precise filling for pesticides, herbicides, fertilisers, and seeds.",
    heroImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80",
    overview: "Agrochemical packaging involves hazardous liquids and powders that require explosion-proof equipment, chemical-resistant materials, and robust containment. Regulatory labelling requirements are strict, and product contamination can have serious downstream consequences for farmers and the environment.",
    painPoints: [
      { title: "Hazardous Material Handling", detail: "Pesticides and herbicides are toxic. Machines must be built with ATEX-rated components, chemical-resistant seals, and enclosed filling systems to protect operators." },
      { title: "Accurate Dosing", detail: "Agrochemical products are diluted before use. Incorrect fill volumes lead to improper dilution ratios, crop damage, or regulatory non-compliance." },
      { title: "Tamper-Evident Packaging", detail: "Agrochem regulators require tamper-evident closures. Automated capping and seal inspection ensure every bottle meets statutory requirements." },
      { title: "Label Compliance", detail: "CIB&RC and state agriculture department regulations mandate specific label content, language, and placement. Inline coding and vision verification are critical." },
    ],
    machines: [
      { name: "Liquid Filling Lines", brand: "Filtec Automation", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png", slug: "Liquid-Filling" },
      { name: "Horizontal Form Fill Seal", brand: "Effytec", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png", slug: "HFFS" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "seeds": {
    name: "Seeds & Grains",
    description: "Weighing and pouch packing systems for paddy, wheat, vegetable seeds, and pulses.",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
    overview: "Seed and grain packaging demands high accuracy weighing, gentle product handling to avoid germination damage, and robust pouching for storage and transit. From small retail seed packets to 50 kg bulk bags, Vedvik Machinery offers a complete range of weighing and packing systems suited to the seeds and grains sector.",
    painPoints: [
      { title: "Germination Preservation", detail: "Seeds are living products. Excessive mechanical stress, heat from sealing jaws, or moisture ingress can reduce germination rates. Gentle handling machines are essential." },
      { title: "Weight Accuracy for Small Packs", detail: "Retail seed packets of 10 g to 500 g require high-precision multihead weighing to ensure declared weight compliance." },
      { title: "Bulk Bag Handling", detail: "Agricultural grain bags of 25–50 kg require heavy-duty HFFS or VFFS equipment with stitch seal or heat seal options for jute and woven polypropylene bags." },
      { title: "Moisture Barrier", detail: "Seeds stored in humid conditions lose viability quickly. Film selection and seal quality are critical to maintaining the moisture barrier over the storage period." },
    ],
    machines: [
      { name: "Pick Fill Seal", brand: "Vedvik Machinery", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png", slug: "PFS" },
      { name: "Bulk HFFS & VFFS", brand: "MF Tecno", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png", slug: "Bulk-Packing" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "personal-care": {
    name: "Personal Care",
    description: "Sachet and bottle filling for shampoos, lotions, creams, and hygiene products.",
    heroImage: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80",
    overview: "Personal care packaging spans a wide range of viscosities, formats, and regulatory requirements. Single-use sachets, pump bottles, tubes, and jars all require different filling and sealing approaches. Vedvik Machinery provides flexible lines that handle the full personal care portfolio — from 2 ml sachets to 500 ml bottles.",
    painPoints: [
      { title: "Viscosity Handling", detail: "Shampoos, conditioners, lotions, and creams vary widely in viscosity. Filling systems must be configurable without product degradation or air entrapment." },
      { title: "Sachet Demand", detail: "India's personal care market is heavily sachet-driven. High-speed HFFS sachet lines with accurate fill volumes and consistent seal quality are core requirements." },
      { title: "Aesthetic Quality", detail: "Personal care brands compete heavily on shelf appeal. Seal quality, label placement, and cap integrity directly affect consumer perception and retail acceptance." },
      { title: "Regulatory Coding", detail: "BIS and import-export regulations require specific batch, MFG, and expiry information. Inline coding systems must integrate with ERP and production management systems." },
    ],
    machines: [
      { name: "Horizontal Form Fill Seal", brand: "Effytec", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png", slug: "HFFS" },
      { name: "Liquid Filling Lines", brand: "Filtec Automation", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png", slug: "Liquid-Filling" },
      { name: "Vision Inspection", brand: "E2M Couth", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png", slug: "Inspection" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
      { name: "Secondary Automation", brand: "Vedvik Machinery", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774885/Secondary_zqcr5t.png", slug: "Secondary-Automation" },
    ],
  },

  "detergents": {
    name: "Detergents & Homecare",
    description: "Powder and liquid packing for detergents, dishwash, and surface cleaners.",
    heroImage: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=1200&q=80",
    overview: "Detergent and homecare packaging involves corrosive chemicals, high-dust powder environments, and products that range from free-flowing powders to thick gels. Machines must be built with chemical-resistant materials, robust dust containment, and reliable sealing for products that face rough handling in transit and storage.",
    painPoints: [
      { title: "Corrosion Resistance", detail: "Alkaline detergents and bleach-based cleaners corrode standard steel components. Machines must use SS316, HDPE, or chemically resistant polymers throughout." },
      { title: "Dust Containment", detail: "Detergent powder lines generate significant airborne dust. Enclosed filling stations with dust extraction protect operators and prevent product loss." },
      { title: "Seal Strength", detail: "Detergent pouches and sachets are squeezed, stacked, and dropped in transit. Seal integrity testing and inline checkweighing protect against leakage claims." },
      { title: "Large Format Packing", detail: "Bulk detergent packs of 1–5 kg are standard. HFFS and VFFS systems with accurate auger filling and robust heat sealing are required." },
    ],
    machines: [
      { name: "Horizontal Form Fill Seal", brand: "Effytec", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png", slug: "HFFS" },
      { name: "Bulk HFFS & VFFS", brand: "MF Tecno", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png", slug: "Bulk-Packing" },
      { name: "Liquid Filling Lines", brand: "Filtec Automation", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png", slug: "Liquid-Filling" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "spices-powders": {
    name: "Spices & Powders",
    description: "Auger-based filling and sealing for masalas, spice blends, and dry powders.",
    heroImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80",
    overview: "Spice and powder packaging requires precise auger filling, aroma-barrier film, and dust-tight sealing. The Indian spice market is intensely competitive, and packaging quality directly affects shelf life, brand image, and retail acceptance. Vedvik Machinery provides filling and sealing systems that maintain aroma, prevent clumping, and deliver consistent fill weights.",
    painPoints: [
      { title: "Aroma Retention", detail: "Volatile aroma compounds escape rapidly through poorly sealed or permeable packaging. Film selection and seal quality directly determine product shelf life." },
      { title: "Fill Weight Consistency", detail: "Spices are sold by weight. Auger fill accuracy and inline checkweighing with automatic reject are mandatory for declared quantity compliance." },
      { title: "Caking and Bridging", detail: "Hygroscopic powders like salt and turmeric cake in hoppers and auger tubes. Machines must include vibration, agitation, and anti-bridging systems." },
      { title: "Dust Containment", detail: "Fine spice dust is a fire and health hazard. Filling stations must be enclosed with dust extraction to protect operators and prevent cross-contamination." },
    ],
    machines: [
      { name: "Horizontal Form Fill Seal", brand: "Effytec", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png", slug: "HFFS" },
      { name: "Pick Fill Seal", brand: "Vedvik Machinery", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png", slug: "PFS" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "pet-food": {
    name: "Pet Food",
    description: "Multihead weighing and doypack filling for dry kibble, treats, and wet food.",
    heroImage: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=1200&q=80",
    overview: "India's pet food market is growing rapidly, driven by premiumisation and increased pet ownership. Pet food packaging must preserve freshness, prevent oxidation, and withstand rough handling. Vedvik Machinery's doypack and HFFS systems are well-suited to the variety of formats demanded by this sector.",
    painPoints: [
      { title: "Freshness Preservation", detail: "Pet food — especially dry kibble — degrades rapidly when exposed to oxygen and moisture. High-barrier films and nitrogen flushing are standard requirements." },
      { title: "Doypack Demand", detail: "Premium pet food brands prefer standup doypacks with ziplocks for resealability. PFS and HFFS machines with doypack capability are core to this segment." },
      { title: "Foreign Body Safety", detail: "Bone fragments, metal shards, or plastic pieces in pet food pose serious harm. X-ray inspection is increasingly mandatory for retail supply." },
      { title: "Weight Compliance", detail: "Pet food is sold by weight across SKUs from 100 g to 10 kg. Multihead weighing with checkweighing ensures declared quantity across all formats." },
    ],
    machines: [
      { name: "Pick Fill Seal", brand: "Vedvik Machinery", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png", slug: "PFS" },
      { name: "Horizontal Form Fill Seal", brand: "Effytec", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png", slug: "HFFS" },
      { name: "Bulk HFFS & VFFS", brand: "MF Tecno", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png", slug: "Bulk-Packing" },
      { name: "X-ray and Metal Detector", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778823792/X_ray_obgczv.png", slug: "xray-metal-detector" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
    ],
  },

  "chemicals": {
    name: "Industrial Chemicals",
    description: "Bulk and drum filling for industrial solvents, lubricants, and specialty chemicals.",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
    overview: "Industrial chemical packaging demands robust, explosion-proof equipment capable of handling corrosive, flammable, and viscous materials safely. From 1-litre bottles to 200-litre drums, Vedvik Machinery's filling systems are configured for the specific safety and accuracy requirements of the chemicals sector.",
    painPoints: [
      { title: "Explosion-Proof Requirements", detail: "Flammable solvents and aerosols require ATEX-rated electrical components, grounding systems, and enclosed filling environments." },
      { title: "Accurate Bulk Filling", detail: "Industrial chemical products are sold by weight or volume. Gravimetric drum filling systems must deliver ±50 g accuracy at 200 kg fill weights." },
      { title: "Material Compatibility", detail: "Acids, bases, and solvents attack standard gaskets, seals, and coatings. Wetted parts must be specified in PTFE, Hastelloy, or SS316." },
      { title: "Spillage Containment", detail: "Chemical spills during filling create safety, environmental, and compliance risks. Enclosed filling stations with drip trays and emergency stops are mandatory." },
    ],
    machines: [
      { name: "Liquid Filling Lines", brand: "Filtec Automation", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png", slug: "Liquid-Filling" },
      { name: "Bulk HFFS & VFFS", brand: "MF Tecno", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png", slug: "Bulk-Packing" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "bakery": {
    name: "Bakery & Confectionery",
    description: "Twist tying, flow wrapping and case packing for breads, cakes, and sweets.",
    heroImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80",
    overview: "Bakery and confectionery packaging must preserve freshness, prevent crushing, and meet the aesthetic expectations of retail and gifting formats. From bread twist tying to chocolate flow wrapping to mithai box packing, Vedvik Machinery provides systems suited to the high-variety, high-speed demands of this sector.",
    painPoints: [
      { title: "Freshness and Shelf Life", detail: "Baked goods stale rapidly. Modified atmosphere packaging, tight seals, and moisture-barrier films directly extend shelf life and reduce returns." },
      { title: "Product Fragility", detail: "Cakes, biscuits, and confectionery break under mechanical stress. Gentle handling conveyors, soft-grip pick-and-place systems, and low-impact filling are required." },
      { title: "High SKU Variety", detail: "Bakeries run dozens of SKUs with different weights, pack sizes, and formats. Machines must allow rapid format changeovers with minimal downtime." },
      { title: "Retail Presentation", detail: "Confectionery and gifting formats compete on packaging aesthetics. Seal quality, twist accuracy, and label placement are closely monitored by retail buyers." },
    ],
    machines: [
      { name: "Clipping & Twisting", brand: "Comipack", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780314168/ChatGPT_Image_Jun_1_2026_05_12_27_PM_tpx536.png", slug: "Comipack" },
      { name: "Secondary Automation", brand: "Vedvik Machinery", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774885/Secondary_zqcr5t.png", slug: "Secondary-Automation" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Vision Inspection", brand: "E2M Couth", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png", slug: "Inspection" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "nutraceuticals": {
    name: "Nutraceuticals",
    description: "Sachet and stick pack filling for protein powders, health supplements, and vitamins.",
    heroImage: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1200&q=80",
    overview: "The nutraceutical sector is one of the fastest-growing packaging markets in India, driven by rising health consciousness and supplement adoption. Stick packs, sachets, and pouches are the dominant formats. Vedvik Machinery's HFFS and stick pack systems deliver accurate fill weights, tamper-evident seals, and high-barrier packaging for powders, granules, and liquids.",
    painPoints: [
      { title: "Dose Accuracy", detail: "Nutraceutical products are dosed for specific health outcomes. Underfill reduces efficacy; overfill increases cost. Auger and multihead weighing must maintain ±1% accuracy." },
      { title: "Moisture and Oxygen Barrier", detail: "Vitamins and probiotics degrade rapidly in the presence of moisture and oxygen. High-barrier films with nitrogen flushing are standard for premium supplement lines." },
      { title: "Regulatory Labelling", detail: "FSSAI, AYUSH, and import/export regulations require specific nutritional declarations, batch coding, and claims compliance on every pack." },
      { title: "Stick Pack Demand", detail: "Single-serve stick packs are the fastest-growing format in nutraceuticals. High-speed stick pack machines with accurate fill volumes and consistent seal quality are core requirements." },
    ],
    machines: [
      { name: "Stick Packing Solutions", brand: "Boato Pack", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312396/ChatGPT_Image_Jun_1_2026_04_42_50_PM_gibudi.png", slug: "Boato-Pack" },
      { name: "Horizontal Form Fill Seal", brand: "Effytec", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png", slug: "HFFS" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },

  "coffee-tea": {
    name: "Coffee & Tea",
    description: "Drip bag, sachet, and canister filling for ground coffee, instant coffee, and teas.",
    heroImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80",
    overview: "Coffee and tea packaging is driven by freshness, aroma retention, and premium presentation. From nitrogen-flushed ground coffee pouches to individually wrapped teabags, Vedvik Machinery provides systems that protect product quality while maintaining high throughput across multiple SKUs.",
    painPoints: [
      { title: "Aroma and Freshness", detail: "Coffee degrades within hours of roasting if not sealed in a high-barrier pack with a one-way degassing valve. Film selection and seal integrity are paramount." },
      { title: "Nitrogen Flushing", detail: "Oxygen in coffee and tea packaging accelerates staling. Nitrogen flushing integrated into the filling station extends shelf life from weeks to months." },
      { title: "Fine Powder Handling", detail: "Instant coffee and fine tea powders are highly hygroscopic and prone to caking. Filling stations must include agitation and anti-bridging systems." },
      { title: "Premium Presentation", detail: "Coffee and tea are premium categories. Packaging aesthetics — seal quality, valve placement, print accuracy — directly affect brand positioning and retail performance." },
    ],
    machines: [
      { name: "Horizontal Form Fill Seal", brand: "Effytec", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png", slug: "HFFS" },
      { name: "Pick Fill Seal", brand: "Vedvik Machinery", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png", slug: "PFS" },
      { name: "Checkweighers", brand: "Varpe", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png", slug: "Checkweighers" },
      { name: "Roller Unwinders", brand: "Vedvik Machinery", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778823717/Unwinder_h1jw5i.png", slug: "roller-unwinders" },
      { name: "Printers and Coders", brand: "MapleJet", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png", slug: "Printing" },
    ],
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries[slug];

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#020062] font-['Montserrat'] mb-4">Industry Not Found</h1>
            <Link href="/industries" className="text-[#0C4CA2] underline">Back to Industries</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-end">
          <div className="absolute inset-0">
            <img src={industry.heroImage} alt={industry.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 pb-12 w-full">
            <Link href="/industries" className="inline-flex items-center gap-1 text-white/70 text-xs font-medium uppercase tracking-wider mb-4 hover:text-white transition-colors duration-150 cursor-pointer">
              <span className="material-symbols-outlined text-sm">arrow_back</span> Industries
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              {industry.name}
            </h1>
            <p className="text-white/80 text-base md:text-lg mt-3 max-w-2xl">{industry.description}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2] mb-4">Overview</p>
            <p className="text-base text-slate-600 leading-relaxed">{industry.overview}</p>
          </div>
        </section>

        {/* Pain Points */}
        <section className="v-tint py-16 md:py-24">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <p className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2] mb-4">Challenges</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-12">
              Industry Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.painPoints.map((point, i) => (
                <div key={i} className="v-card !cursor-default p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#0C4CA2] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-semibold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800">{point.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Machines */}
        <section className="py-16 md:py-24">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <p className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2] mb-4">Equipment</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-12">
              Recommended Systems
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.machines.map((machine, i) => (
                <Link key={i} href={`/solutions/${machine.slug}`} className="v-card group block overflow-hidden">
                  <div className="aspect-video bg-slate-50 overflow-hidden">
                    <img src={machine.image} alt={machine.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{machine.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2] mb-4">{machine.brand}</p>
                    <div className="flex items-center gap-1.5 text-[#0C4CA2] text-sm font-medium">
                      View Specifications <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0C4CA2] py-16 text-white">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Need a solution for {industry.name}?</h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">Tell us your product, output speed, and pack format — our team will recommend the right system.</p>
            <Link href="/contact" className="inline-block bg-white text-[#0C4CA2] px-6 py-3 rounded-lg font-medium cursor-pointer hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-200">
              Talk to Our Team
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
