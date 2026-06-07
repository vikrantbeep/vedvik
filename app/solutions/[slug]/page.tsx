import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return { title: "Product Not Found – Vedvik Machinery" };
  return {
    title: `${product.name} – Vedvik Machinery`,
    description: product.description,
  };
}

const products: Record<string, {
  badge: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  youtubeId: string;
  brand: string;
  brandDesc: string;
  specs: { parameter: string; rating: string }[];
  showcaseImages: string[];
  showcaseLabels?: string[];
  brochureUrl?: string;
}> = {
  "Comipack": {
    badge: "Packaging",
    name: "Clipping & Twisting",
    subtitle: "Bag packing systems",
    description: "Reliable bag clipping and twist-tying systems designed for fast and consistent package closure across bakery, fresh produce, and food packaging applications.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780314168/ChatGPT_Image_Jun_1_2026_05_12_27_PM_tpx536.png",
    youtubeId: "KCVvmnyqUak",
    brand: "Comipack, Italy",
    brandDesc: "Bag clipping and twisting experts",
    specs: [
      { parameter: "Application", rating: "FMCG / Pharma" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096037/Screenshot_2026-05-18_at_2.49.08_PM_e21w10.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096037/Screenshot_2026-05-18_at_2.48.56_PM_mfolif.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096037/Screenshot_2026-05-18_at_1.50.19_PM_f5m3vw.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096037/Screenshot_2026-05-18_at_2.49.33_PM_dqreeu.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096036/Screenshot_2026-05-18_at_2.49.46_PM_cq1qte.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096036/Screenshot_2026-05-18_at_2.49.21_PM_jxiwe0.png",
    ],
  },

  "Boato-Pack": {
    badge: "Packaging",
    name: "Stick Packing Solutions",
    subtitle: "EVO Series",
    description: "Packaging solutions for stick pack and small sachet formats with high throughput requirements and secondary packing compatibility.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312396/ChatGPT_Image_Jun_1_2026_04_42_50_PM_gibudi.png",
    youtubeId: "IO4G05NqgpQ",
    brand: "Boato Pack, Italy",
    brandDesc: "Advanced packaging machinery for high throughput lines.",
    brochureUrl: "https://yibemnxprjltprpa.public.blob.vercel-storage.com/4SIDESEAL_EVO_en%20copy.pdf",
    specs: [
      { parameter: "Product Type", rating: "Liquids, semi-liquids, powders, solids, wet wipes" },
      { parameter: "Packaging Format", rating: "3 side and 4 side seal" },
      { parameter: "Production Speed", rating: "4,000+ sachets/min" },
      { parameter: "Sachet Size Range", rating: "Width 25–150 mm, Length up to 250 mm" },
      { parameter: "Machine Dimensions", rating: "2800 × 2260 × 2210 mm" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096374/download-2_smujau.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096374/download-1_p3qiq8.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096374/stick_eafk33.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779096374/download_kcy2o7.jpg",
    ],
  },

  "GMS": {
    badge: "Feeding Systems",
    name: "Feeding Systems",
    subtitle: "Vibratory & Bowl Feeders",
    description: "Versatile vibratory and bowl feeding systems designed for flexible integration across multiple product categories including rubber stoppers, lyophilisates, and similar components.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779350063/th_alimentadores-vibratorios-para-obturadores-de-goma-o-liofilizados_8195478_jl7lui.jpg",
    youtubeId: "3_p-Do_6OH8",
    brand: "GMS, Italy",
    brandDesc: "Versatile feeding solutions for diverse industries.",
    specs: [
      { parameter: "Application", rating: "Multi-category" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779350063/th_alimentadores-vibratorios-para-obturadores-de-goma-o-liofilizados_8195478_jl7lui.jpg",
    ],
  },

  "Kraus": {
    badge: "Product Handling",
    name: "Product Handling Systems",
    subtitle: "Conveying & Transfer Solutions",
    description: "Robust product handling and conveying systems engineered for precise transfer, accumulation, and distribution across high-speed packaging lines.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png",
    youtubeId: "cQYWR1K5C54",
    brand: "Kraus, Germany",
    brandDesc: "German-engineered product handling and conveying systems.",
    brochureUrl: "https://yibemnxprjltprpa.public.blob.vercel-storage.com/E_JoKerEco_englisch.pdf",
    specs: [
      { parameter: "Product Types", rating: "Cards, leaflets, cartons, folded paper products, flat items" },
      { parameter: "Feeding Speed", rating: "Up to 50 m/min" },
      { parameter: "Dimensions", rating: "50 × 50 mm to 350 × 320 mm" },
      { parameter: "Thickness", rating: "0 - 10mm" },
      { parameter: "Drive", rating: "Compact servo-driven design" },
      { parameter: "Origin", rating: "Germany" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780315965/kraus_collator_3_tkrwpw.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780315965/joker_labelling_2_r99usj.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780315964/joker_shingled_feeder_1_s1swsi.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780315964/joker_labelling_stacking_1_pl2xxs.jpg",
    ],
  },

  "HFFS": {
    badge: "Packaging",
    name: "Horizontal Form Fill Seal",
    subtitle: "HB series",
    description: "Advanced horizontal form-fill-seal systems engineered for high-speed pouching compatible with shaped, spouted and ziplock pouch in PFS and FFS format. Ideal for powders, granules, liquids and similar products.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png",
    youtubeId: "3W37kQxRTnw",
    brand: "Effytec, Spain",
    brandDesc: "Advanced HFFS systems since 2004.",
    brochureUrl: "https://yibemnxprjltprpa.public.blob.vercel-storage.com/Effytec%20Brochure.pdf",
    specs: [
      { parameter: "Min Pouch Dimensions", rating: "H60 mm X B40 mm" },
      { parameter: "Maximum Speed", rating: "Upto 320 PPM (with Quadruplex)" },
      { parameter: "Material compatibility", rating: "PE, PET, ALU, Bio-Composites" },
      { parameter: "Monomaterial", rating: "Monomaterial Compatible" },
      { parameter: "Filling stations", rating: "1 to 3" },
      { parameter: "HMI Control System", rating: "Siemens Standard" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmaektmZQxq9dNwffq38NanshUV_oFLLw05U50OfHmqJt4RV5o088qomi-gfgJXPKdku9qs76feKt997glc3qc4L4SPuZguJ19dodPNkP811ZDmzuY6kyiitEPVZOa9Zb4g9_EonvVKxd5Suno2NTSz5m4gcroRK3myOZTb4i3-ZReAgpEItI-Y_AadMYtVh7Z1XZ6oNpCcZ_lI954gTbmXE-nmEyKPfpF-T3vFjwjsLtVLYUdry9eAhsJs9bBHwrnqUeEmoKWL4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgPhd7Npd41TxrmYcBziTB1NYXtTxrsiS49qB_3sSaXaa1xj2i0sGKKQ_okSGlhTQ_8grYdElrhwv89J6ikYGwegHTuWFzUtAxVGgSo5WUAAHzb5fod9z2iUn07LEWScq70Wu7GSspkmX2TLLwYHo-nSErOzoIRnTtDg0WNjqwHW099AqUI3SU0PRCZv_lrQSZh8wvaMxW4DUdS55FhmGm9WWE_CjYLL7fu0GQ2b1p3EfSPCZC83wHPh9-m7aCP1LP6Yi9Y7atCMo",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778824273/producthome-1221_xgts9h.jpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0Rhuo5sWwxTKvISGISt2XIswf7GWBddctXBRRkUPvwD9jXQWwnDTlVqsVH5xel4UWqZRhxzSGaoiTm1xdi15pkS2-isNaSu0jZ7MUMOo6F0AcjcvS1hzDouyhrg8t93fLmsVv7E-AJrvyZN7mJFtorKXfzqfacnmPZPIYmbYcyDBAID-NwG__L8kkGyCVbQTSIMcncr3KcNYbfWLJDqMjbiWhynHDrvrZNWwDVhdBcnR8SznTJrjVPMA1Wkgzb6zGXR7b2LNxuc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4q2UinzZZOH-_bZODrsStRe-ejRhvH4nob8ieCJybE_EnWHJ8off8ek-PWtcioYBz1yiI4EfwM__UjON14JMTe9afCB8Ly6Flf7wUeywfzwiHQCeCUzY2E3gG5O6OMBNj1tw3ldZM-4Wji2Pg0-lppP5mccEIQfmJvtME02LbUb97VHZvk6Kfut9Mpyi6nIXBklJLJzmHuJexyyuvG_qUX9cMz6Piyl6vqRJNsvEmU0el4kwGBz6L6KYVdwgycEwqSOZEGxjqmQ",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778824509/17_uuqvhu.png",
    ],
  },

  "Liquid-Filling": {
    badge: "Packaging",
    name: "Liquid Filling Lines",
    subtitle: "NWF Series",
    description: "Aseptic weight based and volumetric rotary filling systems with high accuracy. CIP/SIP ready for FMCG and pharmaceutical applications with precision dosing and hygienic design.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png",
    youtubeId: "s_QoZlLEJ30",
    brand: "Filtec Automation, South Africa",
    brandDesc: "Specialists in liquid filling and capping technology.",
    brochureUrl: "https://yibemnxprjltprpa.public.blob.vercel-storage.com/Filtec%20Automation%20Brochure.pdf",
    specs: [
      { parameter: "Filling Range", rating: "50 ml – 50000 ml" },
      { parameter: "Operating Speed", rating: "Up to 400 BPM" },
      { parameter: "Filling Heads", rating: "Up to 40" },
      { parameter: "Cleaning System", rating: "CIP / SIP Ready" },
      { parameter: "Filling Mechanism", rating: "Servo driven and Gravity fill" },
      { parameter: "Viscosity", rating: "Efficient Filling of High-Viscosity Products" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778826395/images_l1obmy.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778826396/images-1_cilkh9.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778826409/images-2_vtpx8o.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778826411/plastic-bottle-on-white-2023-11-27-04-55-55-utc_ev3ovw.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778826398/automobile-engine-oil-bottle_uf6sg8.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778826412/this-site-refers-to-this-as-a-jug-of-milk-whereas-in-nz-wed-v0-J1O1IJnhec0RQWUcxnpWxDsNFbAJlnG5LC9tiD7KzCY_f2rrwf.webp",
    ],
  },

  "PFS": {
    badge: "Packaging",
    name: "Pick Fill Seal",
    subtitle: "Automated Hygienic Packaging",
    description: "Automated pick, fill and seal systems for precise and hygienic packaging of products. Capable of packing doy packs with ziplocks and corner spouts.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png",
    youtubeId: "8kjHI-fzna0",
    brand: "Vedvik Machinery, India",
    brandDesc: "In-house engineered pick fill seal solutions.",
    specs: [
      { parameter: "Speed", rating: "Up to 60 cycles / min" },
      { parameter: "Cup Diameter", rating: "30 – 120 mm" },
      { parameter: "Fill Weight", rating: "50 gm – 1000 gm" },
      { parameter: "Pouch Type", rating: "Doy pouch / Ziplock / Corner spout" },
      { parameter: "Drive System", rating: "Cam driven" },
      { parameter: "Weighing System", rating: "Multihead Weigher" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0Rhuo5sWwxTKvISGISt2XIswf7GWBddctXBRRkUPvwD9jXQWwnDTlVqsVH5xel4UWqZRhxzSGaoiTm1xdi15pkS2-isNaSu0jZ7MUMOo6F0AcjcvS1hzDouyhrg8t93fLmsVv7E-AJrvyZN7mJFtorKXfzqfacnmPZPIYmbYcyDBAID-NwG__L8kkGyCVbQTSIMcncr3KcNYbfWLJDqMjbiWhynHDrvrZNWwDVhdBcnR8SznTJrjVPMA1Wkgzb6zGXR7b2LNxuc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmaektmZQxq9dNwffq38NanshUV_oFLLw05U50OfHmqJt4RV5o088qomi-gfgJXPKdku9qs76feKt997glc3qc4L4SPuZguJ19dodPNkP811ZDmzuY6kyiitEPVZOa9Zb4g9_EonvVKxd5Suno2NTSz5m4gcroRK3myOZTb4i3-ZReAgpEItI-Y_AadMYtVh7Z1XZ6oNpCcZ_lI954gTbmXE-nmEyKPfpF-T3vFjwjsLtVLYUdry9eAhsJs9bBHwrnqUeEmoKWL4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgPhd7Npd41TxrmYcBziTB1NYXtTxrsiS49qB_3sSaXaa1xj2i0sGKKQ_okSGlhTQ_8grYdElrhwv89J6ikYGwegHTuWFzUtAxVGgSo5WUAAHzb5fod9z2iUn07LEWScq70Wu7GSspkmX2TLLwYHo-nSErOzoIRnTtDg0WNjqwHW099AqUI3SU0PRCZv_lrQSZh8wvaMxW4DUdS55FhmGm9WWE_CjYLL7fu0GQ2b1p3EfSPCZC83wHPh9-m7aCP1LP6Yi9Y7atCMo",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778828031/flat-bottom-pouch-with-zipper_hick5b.png",
    ],
  },

  "Bulk-Packing": {
    badge: "Packaging",
    name: "Bulk HFFS & VFFS",
    subtitle: "IABA 1000 Series",
    description: "Heavy-duty bulk packing systems in HFFS and VFFS format. Designed for 5 to 50 kg applications in agricultural, chemical, and food processing industries.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png",
    youtubeId: "OvarTSOQcSc",
    brand: "MF Tecno, Italy",
    brandDesc: "Italian engineering for heavy-duty bulk packaging.",
    brochureUrl: "https://yibemnxprjltprpa.public.blob.vercel-storage.com/MF%20Tecno%20Brochure.pdf",
    specs: [
      { parameter: "Bag Weight Range", rating: "5 – 50 kg" },
      { parameter: "Speed", rating: "Up to 600 bags / hour" },
      { parameter: "Bag Format", rating: "HFFS / VFFS" },
      { parameter: "Film Thickness", rating: "80 – 200 microns" },
      { parameter: "Sealing System", rating: "Heat seal / Stitch seal" },
      { parameter: "Secondary", rating: "Palletising and Pick-and-place" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778828401/1029_n_doypack_w3ilto.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778828401/buy-montego-classic-adult-dog-online_mgrxtv.webp",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778828031/flat-bottom-pouch-with-zipper_hick5b.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778828498/IMG_1110_cwbh32.webp",
    ],
  },

  "Secondary-Automation": {
    badge: "Packaging",
    name: "Secondary Automation",
    subtitle: "End-of-Line Packaging Systems",
    description: "End-of-line secondary packaging systems including cartoning, case packing, and shrink wrapping. Designed for seamless integration with primary packaging lines.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774885/Secondary_zqcr5t.png",
    youtubeId: "6WXoDSMERsQ",
    brand: "Vedvik Machinery, India",
    brandDesc: "Custom secondary automation for diverse industries.",
    specs: [
      { parameter: "System Type", rating: "Cartoning / Case Packing / Shrink-wrapping / Pick-and-place" },
      { parameter: "Speed", rating: "Up to 15 cartons / min" },
      { parameter: "Integration", rating: "Compatible with all primary lines" },
      { parameter: "Control", rating: "PLC" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778829619/supplyhut-25-8x6x4-Cardboard-Paper-Boxes-Mailing-Packing-Shipping-Box-Corrugated-Carton-Brown_d0ee1a95-8476-4caa-8fd4-595856a16f1c.b2f26a0a14de30fc1b93b958d782a372_udoqks.avif",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778829533/SecondaryPackaging_SplitImage1_r5mq7u.webp",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778829877/images_nydi4p.jpg",
    ],
  },

  "Inspection": {
    badge: "Inspection",
    name: "Vision Inspection",
    subtitle: "Artificial Vision Series",
    description: "Vision-based quality control systems for cap defects, label integrity, fill level detection, and seal verification. Suitable for high-speed FMCG and pharma lines.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png",
    youtubeId: "OMhUTB7oiXk",
    brand: "E2M Couth, Spain",
    brandDesc: "Vision inspection specialists for packaging lines.",
    brochureUrl: "https://yibemnxprjltprpa.public.blob.vercel-storage.com/E2M%20Couth%20Brochure.pdf",
    specs: [
      { parameter: "Camera Resolution", rating: "Up to 20 MP" },
      { parameter: "Inspection Speed", rating: "Up to 1200 units / min" },
      { parameter: "Detection", rating: "Cap, Label, Fill Level, Seal" },
      { parameter: "Reject System", rating: "Pneumatic / Diverter" },
      { parameter: "Interface", rating: "Industry 4.0 / OPC-UA" },
      { parameter: "Lighting", rating: "LED Multi-angle" },
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

  "Checkweighers": {
    badge: "Quality Control",
    name: "Checkweighers",
    subtitle: "V2000 Series",
    description: "Advanced dynamic inline weighing systems with integrated automatic reject mechanisms for high-speed production lines, delivering precise weight inspection, regulatory compliance, and uninterrupted operational efficiency.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png",
    youtubeId: "R8PBFOouWf8",
    brand: "Varpe, Spain",
    brandDesc: "Precision weighing and detection systems.",
    brochureUrl: "https://yibemnxprjltprpa.public.blob.vercel-storage.com/Varpe%20Brochure.pdf",
    specs: [
      { parameter: "Weighing Range", rating: "5 g – 15 kg" },
      { parameter: "Speed", rating: "Up to 300 packs / min" },
      { parameter: "Reject System", rating: "Air blast / Push arm" },
      { parameter: "Certification", rating: "OIML / CE" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778835381/Screenshot_2026-05-15_at_2.24.22_PM_a7bixd.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778835379/Screenshot_2026-05-15_at_2.25.14_PM_vzqwtn.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778835378/Screenshot_2026-05-15_at_2.24.52_PM_i2sbtb.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778835376/Screenshot_2026-05-15_at_2.25.03_PM_zmgr23.png",
    ],
  },

  "roller-unwinders": {
    badge: "Packaging Support",
    name: "Slitting, Printing and Lamination Machines",
    subtitle: "",
    description: "Complete converting solutions for cutting, printing and bonding flexible packaging materials to create finished packaging films.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780828263/ChatGPT_Image_Jun_7_2026_04_00_26_PM_safla9.png",
    youtubeId: "09AKIjPx8rI",
    brand: "Vedvik Machinery, India",
    brandDesc: "In-house designed film handling systems.",
    specs: [
      { parameter: "Tension Control", rating: "Dancer / Servo" },
      { parameter: "Splicing", rating: "Manual / Auto Splice" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778841717/rovema_upgradekit-vorabrollung_vfbaoq.webp",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778841777/ChatGPT_Image_May_15_2026_04_12_34_PM_dglsl6.png",
    ],
  },

  "Printing": {
    badge: "Printing",
    name: "Printers and Coders",
    subtitle: "HX Nitro TIJ Series",
    description: "From Thermal Inkjet (TIJ) printers to advanced IoT and Industry 4.0 enabled coding systems. Reliable, high-resolution printing for batch codes, dates, and barcodes.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png",
    youtubeId: "zjZzPCnCJTk",
    brand: "MapleJet, Canada",
    brandDesc: "Industrial coding and marking solutions.",
    specs: [
      { parameter: "Technology", rating: "TIJ / CIJ / Laser" },
      { parameter: "Print Resolution", rating: "Up to 600 DPI" },
      { parameter: "Line Speed", rating: "Up to 300 m/min" },
      { parameter: "Connectivity", rating: "Wi-Fi / Ethernet / USB" },
      { parameter: "Industry 4.0", rating: "OPC-UA / MQTT Ready" },
      { parameter: "Ink Types", rating: "Aqueous / Solvent / UV" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778831423/Hx-Nitro-on-flexible-packaging-line-1024x564_ulknop.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778831421/Jx-Nitro-Advanced-Product-Thumbnail-600x593-2-1-300x300_k8qxcb.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778831420/A7S08465_72_vpl21z.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778831421/Hx-Cartro-mobile-communication-crop_927X600_u41fjk.jpg",
    ],
  },

  "xray-metal-detector": {
    badge: "Inspection",
    name: "X-ray and Metal Detector",
    subtitle: "IRIX Series",
    description: "High-sensitivity X-ray inspection for detecting foreign bodies, voids, and fill-level anomalies combined with metal detection for complete product safety.",
    heroImage: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778823792/X_ray_obgczv.png",
    youtubeId: "R8PBFOouWf8",
    brand: "Varpe, Spain",
    brandDesc: "Advanced detection systems for food and pharma safety.",
    brochureUrl: "https://yibemnxprjltprpa.public.blob.vercel-storage.com/Varpe%20Brochure.pdf",
    specs: [
      { parameter: "Detection Type", rating: "X-ray + Metal (Fe / Non-Fe / SS)" },
      { parameter: "Belt Speed", rating: "Up to 60 m/min" },
      { parameter: "Max Product Weight", rating: "10 kg" },
      { parameter: "Certification", rating: "CE / FDA 21 CFR" },
    ],
    showcaseImages: [
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778842096/IRIX-DL-SIDE_no_sombra-scaled_i1kffr.png",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778842091/1646333242741_DM_p7xd1u.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778842097/download-1_gq9atg.jpg",
      "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778842100/download_jwfowr.jpg",
    ],
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary font-headline mb-4">Product Not Found</h1>
            <Link href="/solutions" className="text-secondary underline">Back to Solutions</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="pt-24 flex-grow">

        {/* Hero */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{product.badge}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none mb-4 md:mb-6 font-headline">
              {product.name} <br />{product.subtitle}
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-8">{product.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary-container text-on-primary px-8 py-4 rounded-md font-bold tracking-tight shadow-sm text-center">Request Technical Quote</Link>
              {product.brochureUrl ? (
                <a href={product.brochureUrl} target="_blank" rel="noopener noreferrer" className="border border-outline-variant/20 text-secondary px-8 py-4 rounded-md font-bold tracking-tight hover:bg-surface-container transition-colors text-center">Download Brochure</a>
              ) : (
                <button disabled className="border border-outline-variant/20 text-secondary/40 px-8 py-4 rounded-md font-bold tracking-tight cursor-not-allowed">Download Brochure</button>
              )}
            </div>
          </div>
          {product.heroImage && (
            <div className="lg:col-span-5">
              <div className="aspect-square bg-surface-container-lowest rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover" src={product.heroImage} alt={product.name} />
              </div>
            </div>
          )}
        </section>

        {/* YouTube Demo */}
        {product.youtubeId && (
          <section className="bg-primary py-16">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
              <div className="flex flex-col items-center mb-10 text-center">
                <h2 className="text-white text-3xl font-bold mb-4 tracking-tight">Machine Demo</h2>
                <div className="h-1 w-24 bg-secondary" />
              </div>
              <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${product.youtubeId}?autoplay=1&mute=1`}
                  title="Machine Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        {/* Specs + Showcase */}
        <section className="py-24 max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-12 text-primary border-l-4 border-secondary pl-6">Technical Specifications</h3>
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-surface-container-low border-b border-outline-variant/20">
                    <tr>
                      <th className="px-6 py-4 font-bold text-primary uppercase tracking-widest text-[0.6875rem]">Parameter</th>
                      <th className="px-6 py-4 font-bold text-primary uppercase tracking-widest text-[0.6875rem]">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {product.specs.map((spec) => (
                      <tr key={spec.parameter}>
                        <td className="px-6 py-5 font-semibold text-on-surface">{spec.parameter}</td>
                        <td className="px-6 py-5 text-on-surface-variant">{spec.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-12 flex items-center gap-6 p-8 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-4xl text-secondary">verified_user</span>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Manufacturer Info</p>
                  <p className="text-lg font-bold text-primary">Engineering by {product.brand}</p>
                  <p className="text-sm text-on-surface-variant">{product.brandDesc}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-12 text-primary border-l-4 border-secondary pl-6">Packaging Showcase</h3>
              {product.showcaseLabels && product.showcaseLabels.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {product.showcaseLabels.map((label, i) => (
                    <div key={i} className="aspect-square bg-surface-container-low rounded-lg flex items-center justify-center border border-outline-variant/20 p-4">
                      <p className="text-sm font-bold text-primary text-center uppercase tracking-wide">{label}</p>
                    </div>
                  ))}
                </div>
              ) : product.showcaseImages.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {product.showcaseImages.map((src, i) => (
                    <div key={i} className="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
                      <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={src} alt={`Showcase ${i + 1}`} />
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-12 p-8 bg-surface-container-lowest shadow-sm rounded-xl border border-outline-variant/10">
                <h4 className="font-bold text-primary mb-4 italic">Custom Tooling Available</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Our modular systems allow for rapid changeovers between formats. Whether you require custom configurations or specialised integrations, our team adapts the solution to your line&apos;s unique requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
