import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vedvik Machinery – Packaging Machinery Manufacturer & Supplier in India",
  description: "Advanced packaging and inspection systems engineered for efficient FMCG and pharmaceutical applications.",
};

const HERO_IMAGE = "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780753138/ChatGPT_Image_Jun_6_2026_06_55_05_PM_kavigy.png";

interface Machine { title: string; description: string; image: string; }
interface InspectionSystem { title: string; description: string; icon: string; }

const machineSlugMap: Record<string, string> = {
  "Twist Tying": "Comipack",
  "Stick Packing": "Boato-Pack",
  "Feeding Systems": "GMS",
  "Product Handling": "Kraus",
  "Liquid Filling": "Liquid-Filling",
  "Pouch Packing": "HFFS",
  "Pick Fill Seal": "PFS",
  "Bulk Packing": "Bulk-Packing",
  "Secondary Packaging": "Secondary-Automation",
};
const inspectionSlugMap: Record<string, string> = {
  "Inspection Machines": "Inspection",
  "Checkweighers": "Checkweighers",
  "X-Ray and Metal Detectors": "xray-metal-detector",
  "Printer and Coder": "Printing",
  "Roller Unwinders": "roller-unwinders",
};

const industries = [
  { label: "Juices & Beverages", icon: "water_drop" },
  { label: "Bakery & Snacks", icon: "bakery_dining" },
  { label: "Pet Food", icon: "pets" },
  { label: "Pharmaceuticals", icon: "medication" },
  { label: "Edible Oils", icon: "oil_barrel" },
  { label: "Dairy", icon: "egg" },
  { label: "Agrochemicals", icon: "agriculture" },
  { label: "Personal Care", icon: "soap" },
  { label: "Detergents", icon: "cleaning_services" },
  { label: "Spices & Powders", icon: "set_meal" },
];

const packagingMachines: Machine[] = [
  { title: "Twist Tying", description: "Twist tying packaging systems engineered for precision and reliability across FMCG and pharma applications requirements.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780376386/Screenshot_2026-06-02_at_10.29.18_AM_j5z9jz.png" },
  { title: "Stick Packing", description: "Advanced packaging solutions for high production environments for stick and sachet packing.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312396/ChatGPT_Image_Jun_1_2026_04_42_50_PM_gibudi.png" },
  { title: "Feeding Systems", description: "Versatile range of feeding systems for pumps, triggers, spouts, spray heads, roll-ons and similar applications.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312482/ChatGPT_Image_Jun_1_2026_04_44_32_PM_njslyg.png" },
  { title: "Product Handling", description: "Product handling and automation systems
