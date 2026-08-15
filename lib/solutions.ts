export type Spec = { label: string; value: string };

export type Solution = {
  slug: string;
  category: "Packaging" | "Inspection";
  name: string;
  tagline: string;
  desc: string;
  partner: string;
  partnerNote: string;
  specs: Spec[];
  heroImage: string;
  youtubeId: string;
  brochureUrl?: string;
  showcaseImages: string[];
  showcaseLabels?: string[];
};

const C = "https://res.cloudinary.com/dnts8gzbh/image/upload";
const BLOB = "https://yibemnxprjltprpa.public.blob.vercel-storage.com";

export const solutions: Solution[] = [
  {
    slug: "horizontal-form-fill-seal",
    category: "Packaging",
    name: "Pouch Packing (HFFS)",
    tagline: "Horizontal form-fill-seal (HFFS) machines",
    desc: "High-speed HFFS pouch packing machines — up to 320 PPM for shaped, spouted and ziplock pouches across food, pharma and personal care. Supplied and serviced from Ahmedabad.",
    partner: "Effytec · Spain",
    partnerNote: "Advanced HFFS systems since 2004.",
    heroImage: `${C}/v1778774880/Effytec_rnrkwy.png`,
    youtubeId: "3W37kQxRTnw",
    brochureUrl: `${BLOB}/Effytec%20Brochure.pdf`,
    specs: [
      { label: "Min Pouch Dimensions", value: "H60 mm X B40 mm" },
      { label: "Maximum Speed", value: "Upto 320 PPM (with Quadruplex)" },
      { label: "Material compatibility", value: "PE, PET, ALU, Bio-Composites" },
      { label: "Monomaterial", value: "Monomaterial Compatible" },
      { label: "Filling stations", value: "1 to 3" },
      { label: "HMI Control System", value: "Siemens Standard" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmaektmZQxq9dNwffq38NanshUV_oFLLw05U50OfHmqJt4RV5o088qomi-gfgJXPKdku9qs76feKt997glc3qc4L4SPuZguJ19dodPNkP811ZDmzuY6kyiitEPVZOa9Zb4g9_EonvVKxd5Suno2NTSz5m4gcroRK3myOZTb4i3-ZReAgpEItI-Y_AadMYtVh7Z1XZ6oNpCcZ_lI954gTbmXE-nmEyKPfpF-T3vFjwjsLtVLYUdry9eAhsJs9bBHwrnqUeEmoKWL4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgPhd7Npd41TxrmYcBziTB1NYXtTxrsiS49qB_3sSaXaa1xj2i0sGKKQ_okSGlhTQ_8grYdElrhwv89J6ikYGwegHTuWFzUtAxVGgSo5WUAAHzb5fod9z2iUn07LEWScq70Wu7GSspkmX2TLLwYHo-nSErOzoIRnTtDg0WNjqwHW099AqUI3SU0PRCZv_lrQSZh8wvaMxW4DUdS55FhmGm9WWE_CjYLL7fu0GQ2b1p3EfSPCZC83wHPh9-m7aCP1LP6Yi9Y7atCMo",
      `${C}/v1778824273/producthome-1221_xgts9h.jpg`,
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0Rhuo5sWwxTKvISGISt2XIswf7GWBddctXBRRkUPvwD9jXQWwnDTlVqsVH5xel4UWqZRhxzSGaoiTm1xdi15pkS2-isNaSu0jZ7MUMOo6F0AcjcvS1hzDouyhrg8t93fLmsVv7E-AJrvyZN7mJFtorKXfzqfacnmPZPIYmbYcyDBAID-NwG__L8kkGyCVbQTSIMcncr3KcNYbfWLJDqMjbiWhynHDrvrZNWwDVhdBcnR8SznTJrjVPMA1Wkgzb6zGXR7b2LNxuc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4q2UinzZZOH-_bZODrsStRe-ejRhvH4nob8ieCJybE_EnWHJ8off8ek-PWtcioYBz1yiI4EfwC8Ly6Flf7wUeywfzwiHQCeCUzY2E3gG5O6OMBNj1tw3ldZM-4Wji2Pg0-lppP5mccEIQfmJvtME02LbUb97VHZvk6Kfut9Mpyi6nIXBklJLJzmHuJexyyuvG_qUX9cMz6Piyl6vqRJNsvEmU0el4kwGBz6L6KYVdwgycEwqSOZEGxjqmQ",
      `${C}/v1778824509/17_uuqvhu.png`,
    ],
  },
  {
    slug: "liquid-filling",
    category: "Packaging",
    name: "Liquid Filling",
    tagline: "Rotary & inline filling lines",
    desc: "Rotary filling lines from 50 ml to 50 L — servo and gravity fill, CIP/SIP ready for food, beverage and pharmaceutical products.",
    partner: "Filtec · South Africa",
    partnerNote: "Specialists in liquid filling and capping technology.",
    heroImage: `${C}/v1778774882/Filtec_pjlyz3.png`,
    youtubeId: "s_QoZlLEJ30",
    brochureUrl: `${BLOB}/Filtec%20Automation%20Brochure.pdf`,
    specs: [
      { label: "Filling Range", value: "50 ml – 50000 ml" },
      { label: "Operating Speed", value: "Up to 400 BPM" },
      { label: "Filling Heads", value: "Up to 40" },
      { label: "Cleaning System", value: "CIP / SIP Ready" },
      { label: "Filling Mechanism", value: "Servo driven and Gravity fill" },
      { label: "Viscosity", value: "Efficient Filling of High-Viscosity Products" },
    ],
    showcaseImages: [
      `${C}/v1778826395/images_l1obmy.jpg`,
      `${C}/v1778826396/images-1_cilkh9.jpg`,
      `${C}/v1778826409/images-2_vtpx8o.jpg`,
      `${C}/v1778826411/plastic-bottle-on-white-2023-11-27-04-55-55-utc_ev3ovw.jpg`,
      `${C}/v1778826398/automobile-engine-oil-bottle_uf6sg8.png`,
      `${C}/v1778826412/this-site-refers-to-this-as-a-jug-of-milk-whereas-in-nz-wed-v0-J1O1IJnhec0RQWUcxnpWxDsNFbAJlnG5LC9tiD7KzCY_f2rrwf.webp`,
    ],
  },
  {
    slug: "pick-fill-seal",
    category: "Packaging",
    name: "Pick Fill Seal (PFS)",
    tagline: "Cam-driven pick fill seal machines",
    desc: "Pick fill seal (PFS) machines for pre-made doy pouches and ziplock bags — 50 g to 5 kg, up to 60 cycles per minute. Manufactured in-house by Vedvik Machinery in Ahmedabad.",
    partner: "Vedvik · India",
    partnerNote: "In-house engineered pick fill seal solutions.",
    heroImage: `${C}/v1778774881/VMpfs_fazimw.png`,
    youtubeId: "8kjHI-fzna0",
    specs: [
      { label: "Speed", value: "Up to 60 cycles / min" },
      { label: "Cup Diameter", value: "30 – 120 mm" },
      { label: "Fill Weight", value: "50 gm – 5000 gm" },
      { label: "Pouch Type", value: "Doy pouch / Ziplock / Corner spout" },
      { label: "Drive System", value: "Cam driven" },
      { label: "Weighing System", value: "Multihead Weigher" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0Rhuo5sWwxTKvISGISt2XIswf7GWBddctXBRRkUPvwD9jXQWwnDTlVqsVH5xel4UWqZRhxzSGaoiTm1xdi15pkS2-isNaSu0jZ7MUMOo6F0AcjcvS1hzDouyhrg8t93fLmsVv7E-AJrvyZN7mJFtorKXfzqfacnmPZPIYmbYcyDBAID-NwG__L8kkGyCVbQTSIMcncr3KcNYbfWLJDqMjbiWhynHDrvrZNWwDVhdBcnR8SznTJrjVPMA1Wkgzb6zGXR7b2LNxuc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmaektmZQxq9dNwffq38NanshUV_oFLLw05U50OfHmqJt4RV5o088qomi-gfgJXPKdku9qs76feKt997glc3qc4L4SPuZguJ19dodPNkP811ZDmzuY6kyiitEPVZOa9Zb4g9_EonvVKxd5Suno2NTSz5m4gcroRK3myOZTb4i3-ZReAgpEItI-Y_AadMYtVh7Z1XZ6oNpCcZ_lI954gTbmXE-nmEyKPfpF-T3vFjwjsLtVLYUdry9eAhsJs9bBHwrnqUeEmoKWL4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgPhd7Npd41TxrmYcBziTB1NYXtTxrsiS49qB_3sSaXaa1xj2i0sGKKQ_okSGlhTQ_8grYdElrhwv89J6ikYGwegHTuWFzUtAxVGgSo5WUAAHzb5fod9z2iUn07LEWScq70Wu7GSspkmX2TLLwYHo-nSErOzoIRnTtDg0WNjqwHW099AqUI3SU0PRCZv_lrQSZh8wvaMxW4DUdS55FhmGm9WWE_CjYLL7fu0GQ2b1p3EfSPCZC83wHPh9-m7aCP1LP6Yi9Y7atCMo",
      `${C}/v1778828031/flat-bottom-pouch-with-zipper_hick5b.png`,
    ],
  },
  {
    slug: "bulk-packing",
    category: "Packaging",
    name: "Bulk Packing",
    tagline: "Heavy-duty bagging",
    desc: "Heavy-duty bag packing in HFFS / VFFS format for 5–50 kg loads. Heat seal or stitch seal, built for continuous industrial duty.",
    partner: "MF Tecno · Italy",
    partnerNote: "Italian engineering for heavy-duty bulk packaging.",
    heroImage: `${C}/v1778774883/MFtecno_t1p2xp.png`,
    youtubeId: "OvarTSOQcSc",
    brochureUrl: `${BLOB}/MF%20Tecno%20Brochure.pdf`,
    specs: [
      { label: "Bag Weight Range", value: "5 – 50 kg" },
      { label: "Speed", value: "Up to 600 bags / hour" },
      { label: "Bag Format", value: "HFFS / VFFS" },
      { label: "Film Thickness", value: "80 – 200 microns" },
      { label: "Sealing System", value: "Heat seal / Stitch seal" },
      { label: "Secondary", value: "Palletising and Pick-and-place" },
    ],
    showcaseImages: [
      `${C}/v1778828401/1029_n_doypack_w3ilto.jpg`,
      `${C}/v1778828401/buy-montego-classic-adult-dog-online_mgrxtv.webp`,
      `${C}/v1778828031/flat-bottom-pouch-with-zipper_hick5b.png`,
      `${C}/v1778828498/IMG_1110_cwbh32.webp`,
    ],
  },
  {
    slug: "twist-tying",
    category: "Packaging",
    name: "Twist Tying",
    tagline: "Bag clipping & twist-tie",
    desc: "Reliable bag clipping and twist-tying systems for fast, consistent package closure across bakery, fresh produce and food packaging.",
    partner: "Comipack · Italy",
    partnerNote: "Bag clipping and twisting experts",
    heroImage: `${C}/v1780314168/ChatGPT_Image_Jun_1_2026_05_12_27_PM_tpx536.png`,
    youtubeId: "KCVvmnyqUak",
    specs: [{ label: "Application", value: "FMCG / Pharma" }],
    showcaseImages: [
      `${C}/v1779096037/Screenshot_2026-05-18_at_2.49.08_PM_e21w10.png`,
      `${C}/v1779096037/Screenshot_2026-05-18_at_2.48.56_PM_mfolif.png`,
      `${C}/v1779096037/Screenshot_2026-05-18_at_1.50.19_PM_f5m3vw.png`,
      `${C}/v1779096037/Screenshot_2026-05-18_at_2.49.33_PM_dqreeu.png`,
      `${C}/v1779096036/Screenshot_2026-05-18_at_2.49.46_PM_cq1qte.png`,
      `${C}/v1779096036/Screenshot_2026-05-18_at_2.49.21_PM_jxiwe0.png`,
    ],
  },
  {
    slug: "stick-packing",
    category: "Packaging",
    name: "Stick Packing",
    tagline: "Stick & sachet formats",
    desc: "Advanced multi-lane packaging for high-production stick and sachet formats — ideal for powders, granules and single-serve liquids.",
    partner: "Boato Pack · Italy",
    partnerNote: "Advanced packaging machinery for high throughput lines.",
    heroImage: `${C}/v1780312396/ChatGPT_Image_Jun_1_2026_04_42_50_PM_gibudi.png`,
    youtubeId: "IO4G05NqgpQ",
    brochureUrl: `${BLOB}/4SIDESEAL_EVO_en%20copy.pdf`,
    specs: [
      { label: "Product Type", value: "Liquids, semi-liquids, powders, solids, wet wipes" },
      { label: "Packaging Format", value: "3 side and 4 side seal" },
      { label: "Production Speed", value: "4,000+ sachets/min" },
      { label: "Sachet Size Range", value: "Width 25–150 mm, Length up to 250 mm" },
      { label: "Machine Dimensions", value: "2800 × 2260 × 2210 mm" },
    ],
    showcaseImages: [
      `${C}/v1779096374/download-2_smujau.jpg`,
      `${C}/v1779096374/download-1_p3qiq8.jpg`,
      `${C}/v1779096374/stick_eafk33.jpg`,
      `${C}/v1779096374/download_kcy2o7.jpg`,
    ],
  },
  {
    slug: "feeding-systems",
    category: "Packaging",
    name: "Feeding Systems",
    tagline: "Component feeding & sorting",
    desc: "Versatile feeding systems for pumps, triggers, spouts, spray heads, roll-ons and similar components — orienting and delivering at line speed.",
    partner: "GMS · Spain",
    partnerNote: "Versatile feeding solutions for diverse industries.",
    heroImage: `${C}/v1779350063/th_alimentadores-vibratorios-para-obturadores-de-goma-o-liofilizados_8195478_jl7lui.jpg`,
    youtubeId: "3_p-Do_6OH8",
    specs: [{ label: "Application", value: "Multi-category" }],
    showcaseImages: [
      `${C}/v1779350063/th_alimentadores-vibratorios-para-obturadores-de-goma-o-liofilizados_8195478_jl7lui.jpg`,
    ],
  },
  {
    slug: "friction-feeders",
    category: "Packaging",
    name: "Friction Feeders",
    tagline: "Friction feeding & product handling",
    desc: "Servo-driven friction feeders for precise feeding, transfer and placement of cards, leaflets, cartons and other flat products across high-speed packaging lines.",
    partner: "Kraus · Germany",
    partnerNote: "German-engineered friction feeders and product handling systems.",
    heroImage: `${C}/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png`,
    youtubeId: "cQYWR1K5C54",
    brochureUrl: `${BLOB}/E_JoKerEco_englisch.pdf`,
    specs: [
      { label: "Product Types", value: "Cards, leaflets, cartons, folded paper products, flat items" },
      { label: "Feeding Speed", value: "Up to 50 m/min" },
      { label: "Dimensions", value: "50 × 50 mm to 350 × 320 mm" },
      { label: "Thickness", value: "0 – 10 mm" },
      { label: "Drive", value: "Compact servo-driven design" },
      { label: "Origin", value: "Germany" },
    ],
    showcaseImages: [
      `${C}/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png`,
      `${C}/v1780315965/kraus_collator_3_tkrwpw.jpg`,
      `${C}/v1780315965/joker_labelling_2_r99usj.jpg`,
      `${C}/v1780315964/joker_shingled_feeder_1_s1swsi.jpg`,
      `${C}/v1780315964/joker_labelling_stacking_1_pl2xxs.jpg`,
    ],
  },
  {
    slug: "secondary-packaging",
    category: "Packaging",
    name: "Secondary Packaging",
    tagline: "End-of-line automation",
    desc: "Cartoning, case packing, shrink wrapping, pick-and-place and palletising — designed to integrate seamlessly with any primary packaging line.",
    partner: "Vedvik · India",
    partnerNote: "Custom secondary automation for diverse industries.",
    heroImage: `${C}/v1778774885/Secondary_zqcr5t.png`,
    youtubeId: "6WXoDSMERsQ",
    specs: [
      { label: "System Type", value: "Cartoning / Case Packing / Shrink-wrapping / Pick-and-place" },
      { label: "Speed", value: "Up to 15 cartons / min" },
      { label: "Integration", value: "Compatible with all primary lines" },
      { label: "Control", value: "PLC" },
    ],
    showcaseImages: [
      `${C}/v1778829619/supplyhut-25-8x6x4-Cardboard-Paper-Boxes-Mailing-Packing-Shipping-Box-Corrugated-Carton-Brown_d0ee1a95-8476-4caa-8fd4-595856a16f1c.b2f26a0a14de30fc1b93b958d782a372_udoqks.avif`,
      `${C}/v1778829533/SecondaryPackaging_SplitImage1_r5mq7u.webp`,
      `${C}/v1778829877/images_nydi4p.jpg`,
    ],
  },
  {
    slug: "vision-inspection",
    category: "Inspection",
    name: "Vision Inspection",
    tagline: "Camera-based quality control",
    desc: "Camera-based inspection for cap defects, label placement, fill level and seal integrity — verifying up to 1,200 units per minute.",
    partner: "E2M Couth · Spain",
    partnerNote: "Vision inspection specialists for packaging lines.",
    heroImage: `${C}/v1778774877/E2Mcouth_mzicf1.png`,
    youtubeId: "OMhUTB7oiXk",
    brochureUrl: `${BLOB}/E2M%20Couth%20Brochure.pdf`,
    specs: [
      { label: "Camera Resolution", value: "Up to 20 MP" },
      { label: "Inspection Speed", value: "Up to 1200 units / min" },
      { label: "Detection", value: "Cap, Label, Fill Level, Seal" },
      { label: "Reject System", value: "Pneumatic / Diverter" },
      { label: "Interface", value: "Industry 4.0 / OPC-UA" },
      { label: "Lighting", value: "LED Multi-angle" },
    ],
    showcaseImages: [],
    showcaseLabels: [
      "Seal Inspection",
      "Crimp Inspection",
      "Fill Level Inspection",
      "Mark Inspection",
      "Orientation",
      "Foreign Particle Detection",
    ],
  },
  {
    slug: "checkweighers",
    category: "Inspection",
    name: "Checkweighers",
    tagline: "Dynamic inline weighing",
    desc: "Dynamic inline checkweighing from 5 g to 15 kg — up to 300 packs per minute with automatic reject. OIML and CE certified.",
    partner: "Varpe · Spain",
    partnerNote: "Precision weighing and detection systems.",
    heroImage: `${C}/v1778774880/Varpe_kdbgnh.png`,
    youtubeId: "R8PBFOouWf8",
    brochureUrl: `${BLOB}/Varpe%20Brochure.pdf`,
    specs: [
      { label: "Weighing Range", value: "5 g – 15 kg" },
      { label: "Speed", value: "Up to 300 packs / min" },
      { label: "Reject System", value: "Air blast / Push arm" },
      { label: "Certification", value: "OIML / CE" },
    ],
    showcaseImages: [
      `${C}/v1778835381/Screenshot_2026-05-15_at_2.24.22_PM_a7bixd.png`,
      `${C}/v1778835379/Screenshot_2026-05-15_at_2.25.14_PM_vzqwtn.png`,
      `${C}/v1778835378/Screenshot_2026-05-15_at_2.24.52_PM_i2sbtb.png`,
      `${C}/v1778835376/Screenshot_2026-05-15_at_2.25.03_PM_zmgr23.png`,
    ],
  },
  {
    slug: "x-ray-and-metal-detection",
    category: "Inspection",
    name: "X-Ray & Metal Detection",
    tagline: "Foreign-body detection",
    desc: "Detection of foreign bodies, voids and underfill, combined with metal detection (Fe, Non-Fe, SS). CE and FDA 21 CFR compliant.",
    partner: "Varpe · Spain",
    partnerNote: "Advanced detection systems for food and pharma safety.",
    heroImage: `${C}/v1778823792/X_ray_obgczv.png`,
    youtubeId: "R8PBFOouWf8",
    brochureUrl: `${BLOB}/Varpe%20Brochure.pdf`,
    specs: [
      { label: "Detection Type", value: "X-ray + Metal (Fe / Non-Fe / SS)" },
      { label: "Belt Speed", value: "Up to 60 m/min" },
      { label: "Max Product Weight", value: "10 kg" },
      { label: "Certification", value: "CE / FDA 21 CFR" },
    ],
    showcaseImages: [
      `${C}/v1778842096/IRIX-DL-SIDE_no_sombra-scaled_i1kffr.png`,
      `${C}/v1778842091/1646333242741_DM_p7xd1u.jpg`,
      `${C}/v1778842097/download-1_gq9atg.jpg`,
      `${C}/v1778842100/download_jwfowr.jpg`,
    ],
  },
  {
    slug: "printers-coders",
    category: "Inspection",
    name: "Printers & Coders",
    tagline: "Coding & marking",
    desc: "TIJ, CIJ and laser coders for batch codes, MRP dates and barcodes — Industry 4.0 and MQTT enabled for full traceability.",
    partner: "MapleJet · Canada",
    partnerNote: "Industrial coding and marking solutions.",
    heroImage: `${C}/v1778774882/MapleJet_yrppqj.png`,
    youtubeId: "zjZzPCnCJTk",
    specs: [
      { label: "Technology", value: "TIJ / CIJ / Laser" },
      { label: "Print Resolution", value: "Up to 600 DPI" },
      { label: "Line Speed", value: "Up to 300 m/min" },
      { label: "Connectivity", value: "Wi-Fi / Ethernet / USB" },
      { label: "Industry 4.0", value: "OPC-UA / MQTT Ready" },
      { label: "Ink Types", value: "Aqueous / Solvent / UV" },
    ],
    showcaseImages: [
      `${C}/v1778831423/Hx-Nitro-on-flexible-packaging-line-1024x564_ulknop.jpg`,
      `${C}/v1778831421/Jx-Nitro-Advanced-Product-Thumbnail-600x593-2-1-300x300_k8qxcb.png`,
      `${C}/v1778831420/A7S08465_72_vpl21z.jpg`,
      `${C}/v1778831421/Hx-Cartro-mobile-communication-crop_927X600_u41fjk.jpg`,
    ],
  },
  {
    slug: "slitting-lamination",
    category: "Inspection",
    name: "Slitting & Lamination",
    tagline: "Film converting",
    desc: "Converting solutions for cutting, printing and bonding flexible packaging films — producing finished, print-ready laminate rolls.",
    partner: "Vedvik · India",
    partnerNote: "In-house engineered film processing systems.",
    heroImage: `${C}/v1778823717/Unwinder_h1jw5i.png`,
    youtubeId: "09AKIjPx8rI",
    specs: [
      { label: "Slitting Type", value: "Razor / Shear / Score" },
      { label: "Web Width", value: "Up to 1600 mm" },
      { label: "Max Speed", value: "Up to 400 m/min" },
      { label: "Rewind Tension", value: "Servo controlled" },
      { label: "Lamination", value: "Solvent-less / Dry / Wet" },
      { label: "Drive", value: "AC Servo" },
    ],
    showcaseImages: [
      `${C}/v1778841717/rovema_upgradekit-vorabrollung_vfbaoq.webp`,
      `${C}/v1778841777/ChatGPT_Image_May_15_2026_04_12_34_PM_dglsl6.png`,
      `${C}/v1778831423/Hx-Nitro-on-flexible-packaging-line-1024x564_ulknop.jpg`,
      `${C}/v1778831421/Jx-Nitro-Advanced-Product-Thumbnail-600x593-2-1-300x300_k8qxcb.png`,
    ],
  },
];

export const packaging = solutions.filter((s) => s.category === "Packaging");
export const inspection = solutions.filter((s) => s.category === "Inspection");

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

/**
 * Case-insensitive lookup. Slugs carry the exact casing of the previous site
 * (e.g. "Liquid-Filling") so indexed URLs keep working, but links in the wild
 * are often lower-cased — this resolves those to the canonical page.
 */
export function findSolutionLoose(slug: string): Solution | undefined {
  const target = slug.toLowerCase();
  return solutions.find((s) => s.slug.toLowerCase() === target);
}

export const solutionSlugs = solutions.map((s) => s.slug);

// Long-form overview prose per solution (rendered on the slug page for SEO depth).
export const solutionOverview: Record<string, string[]> = {
  "horizontal-form-fill-seal": [
    "A horizontal form-fill-seal (HFFS) machine is the right architecture when your product ships in a premium pouch — stand-up, spouted, ziplock or a shaped die-cut pack. Because the pouch is formed and filled lying flat, product is placed rather than dropped by gravity, which is exactly what makes shaped and resealable formats possible at high speed. The Effytec HB Series runs these formats at up to 320 packs per minute with one to three filling stations.",
    "It suits powders, granules, liquids and pastes across food, beverage, personal care and pharmaceutical lines, and works with PE, PET, ALU and mono-material films for recyclability. Typical applications include sauces and purees in spouted pouches, premium snacks in stand-up packs, and powders in ziplock pouches. Format changeover is built around repeatability, so a single line can serve several SKUs without long downtime.",
  ],
  "liquid-filling": [
    "Liquid filling demands accuracy and hygiene in equal measure, and the right filler depends entirely on the product. Filtec rotary lines fill from 50 ml to 50 L using servo-driven and gravity systems, with flow-meter or weigh-based control for tight tolerances on everything from thin juices to viscous sauces, oils and gels. CIP/SIP-ready construction keeps the product path clean for food, beverage and pharmaceutical applications.",
    "Anti-drip nozzles, no-bottle/no-fill logic and inline checkweighing protect against giveaway and spillage at speed. Common applications include beverages and juices, edible oils, dairy, agrochemicals and personal-care liquids in bottles, jars, jerry cans and spouted pouches — with capping and labelling integrated into the same line.",
  ],
  "pick-fill-seal": [
    "A pick fill seal (PFS) machine handles pre-made pouches — doy packs, ziplock bags and corner-spout pouches — by picking the empty pouch, opening it, filling and sealing it. Manufactured in-house by Vedvik Machinery in Ahmedabad, our cam-driven pick fill seal machines run up to 60 cycles per minute for fills from 50 g to 5 kg, paired with a multihead weigher for accurate dosing of granular and free-flowing products.",
    "Pick fill seal is ideal where premium pre-made pouch presentation matters but the volumes or formats don't justify a full HFFS line — pulses, snacks, powders, frozen and confectionery products. Because our PFS machines are built and supported locally, lead times, spares and service are all handled from Ahmedabad, with engineers reaching customer sites across India.",
    "Choosing between pick fill seal and HFFS usually comes down to pouch supply and output. PFS uses ready-made pouches you buy printed and finished, giving excellent shelf presentation at moderate speed with lower tooling cost. HFFS forms the pouch from roll film on the machine, which suits higher volumes and lower per-pack film cost. We supply both and will size the right one against your actual throughput.",
  ],
  "bulk-packing": [
    "Bulk packing covers the heavy end of the line — 5 to 50 kg bags formed in HFFS or VFFS format from heavy-gauge film. MF Tecno systems handle grains, pulses, chemicals, pet food and powders at up to 600 bags per hour, with heat-seal or stitch-seal closure to survive rough handling, stacking and transit.",
    "Accurate net or gross weighing controls giveaway on every bag, and the line integrates with palletising and pick-and-place for a complete end-of-line solution. Robust, chemical-resistant construction suits dusty and aggressive products, making it a workhorse for agricultural and industrial manufacturers.",
  ],
  "twist-tying": [
    "Twist-tying and bag-clipping systems close bagged products quickly and consistently — the fast, low-cost closure behind bakery, fresh-produce and many food packaging lines. Comipack systems handle wicketed, poly and net bags with tool-free format changes, keeping pace with high-throughput lines.",
    "Because closure is mechanical rather than heat-sealed, twist-tying suits products that need a re-openable or breathable pack — bread, rolls, fresh produce and bunched items. It pairs naturally with checkweighing and coding for a compliant, presentable finished pack.",
  ],
  "stick-packing": [
    "Stick packs and small sachets are the format of choice for single-serve powders, granules and liquids — sugar, coffee, nutraceuticals, spices and pharmaceuticals. Boato Pack multi-lane systems reach 4,000+ sachets per minute in three- and four-side-seal formats, handling liquids, semi-liquids, powders, solids and even wet wipes.",
    "Multi-lane operation delivers very high throughput in a compact footprint, while moisture-barrier films keep sensitive actives stable. Sachet sizes run from 25–150 mm wide and up to 250 mm long, covering most single-serve and sample formats.",
  ],
  "feeding-systems": [
    "Feeding and orienting systems are the unglamorous components that keep a line running — vibratory and centrifugal feeders that present pumps, triggers, spouts, spray heads, caps and roll-ons in the right orientation at line speed. GMS systems integrate ahead of fillers and cappers so components arrive correctly every cycle.",
    "Reliable feeding is the difference between a line that runs and one that stops every few minutes for a jam. These systems are widely used in personal care, home care and pharmaceutical assembly, and are configured to the specific component geometry.",
  ],
  "friction-feeders": [
    "A friction feeder is the connective tissue of a packaging line — it separates flat products from a stack and feeds them one at a time, exactly where they need to be, at line speed. Kraus JoKer friction feeders handle flat items from 50 × 50 mm up to 350 × 320 mm and up to 10 mm thick, feeding at up to 50 m/min with a compact servo-driven design.",
    "Typical applications include feeding leaflets and cards into cartoning lines, labelling and stacking operations, collating, and precise placement tasks across food, pharmaceutical and print-finishing lines. Engineered and built in Germany, each system is supplied, installed and supported in India by Vedvik from Ahmedabad.",
  ],
  "secondary-packaging": [
    "Secondary automation is everything that happens after the primary pack is made — cartoning, case packing, shrink-wrapping, pick-and-place and palletising. Engineered and integrated by Vedvik, these systems connect to any primary line to automate the end of line and remove manual handling.",
    "Automating secondary packaging cuts labour, improves pack consistency and protects product in transit. Systems run up to 15 cartons per minute under PLC control and are configured around your existing line layout and throughput.",
  ],
  "vision-inspection": [
    "Vision inspection is the camera-based quality gate for high-speed lines. E2M Couth systems verify cap defects, label placement, fill level, seal integrity, coding and orientation at up to 1,200 units per minute, rejecting any non-conforming unit automatically with a validated reject chain.",
    "For pharmaceutical, nutraceutical and food lines, 100% vision verification protects patients and consumers and provides the documented quality record regulators and retailers expect. Multi-angle LED lighting and up to 20 MP cameras catch defects the human eye and line speed would miss, with Industry 4.0 / OPC-UA connectivity for data capture.",
  ],
  "checkweighers": [
    "A checkweigher weighs every pack while it moves and rejects any outside tolerance — protecting both compliance and margin. Varpe V2000 systems weigh from 5 g to 15 kg at up to 300 packs per minute, with air-blast or push-arm reject and OIML/CE certification for legal-for-trade use.",
    "Underweight packs are a legal and reputational risk; overweight packs give away free product on every unit. By tightening the target band, a checkweigher turns giveaway back into margin and provides the documented conformance major retailers and regulators require. It is the natural feedback partner to your filler.",
  ],
  "x-ray-and-metal-detection": [
    "X-ray and metal detection screen finished product for contaminants and defects in a single pass. Varpe IRIX systems detect metal (ferrous, non-ferrous and stainless), glass, stone and bone, and simultaneously check for voids, underfill and missing items — at belt speeds up to 60 m/min, certified to CE and FDA 21 CFR.",
    "For food and pharmaceutical manufacturers, foreign-body detection is both a safety requirement and a brand-protection measure against costly recalls. Combining X-ray with metal detection in one station gives complete contaminant coverage plus a mass-and-count check on every pack.",
  ],
  "printers-coders": [
    "Coding and marking put the batch code, manufacturing and expiry dates, barcodes and serialisation data onto every pack. MapleJet systems span Thermal Inkjet (TIJ), Continuous Inkjet (CIJ) and laser, printing up to 600 DPI at line speeds to 300 m/min on film, carton, foil and glass.",
    "Industry 4.0 / MQTT connectivity makes coders part of a traceable, data-driven line — essential as serialisation requirements tighten across pharma and food. Aqueous, solvent and UV inks cover porous and non-porous substrates, and Wi-Fi/Ethernet/USB connectivity simplifies fleet management.",
  ],
  "slitting-lamination": [
    "Film converting turns base films into finished, print-ready packaging laminate — slitting reels to width, printing graphics, and laminating multiple layers for barrier performance. Vedvik in-house systems slit at up to 400 m/min with servo-controlled tension, and laminate using solvent-less, dry and wet processes up to 1,600 mm web width.",
    "Consistent slit width, registration and bond strength are what make downstream pouching and FFS run reliably. Converting in-house gives film suppliers and large manufacturers control over quality, lead time and cost across the whole flexible-packaging chain.",
  ],
};
