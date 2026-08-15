import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://vedvikmachinery.com"),
  title: {
    default: "Packaging Machines Manufacturer in Ahmedabad — Vedvik Machinery",
    template: "%s · Vedvik Machinery",
  },
  description:
    "Packaging machines manufacturer and supplier in Ahmedabad, India. HFFS pouch packing up to 320 PPM, pick fill seal (PFS), liquid filling, stick packing, checkweighers, X-ray and vision inspection systems for food, pharma and FMCG lines. Request a quote.",
  keywords: [
    "packaging machines",
    "packaging machines in Ahmedabad",
    "packaging machine manufacturer Ahmedabad",
    "packaging machinery India",
    "pick fill seal",
    "pick fill seal machine",
    "PFS machine",
    "HFFS",
    "HFFS machine",
    "horizontal form fill seal machine",
    "pouch packing machine",
    "liquid filling machine",
    "stick packing machine",
    "checkweigher",
    "X-ray inspection system",
    "vision inspection system",
    "inspection systems India",
  ],
  openGraph: {
    title: "Packaging Machines Manufacturer in Ahmedabad — Vedvik Machinery",
    description:
      "HFFS pouch packing, pick fill seal, liquid filling, checkweighers, X-ray and vision inspection for FMCG & pharma lines — manufactured and serviced from Ahmedabad, India.",
    type: "website",
    locale: "en_IN",
    siteName: "Vedvik Machinery",
    url: "https://vedvikmachinery.com",
    images: [{ url: "/og-thumbnail.jpg", width: 1200, height: 630, alt: "Vedvik Machinery — packaging machines manufacturer in Ahmedabad, India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Machines Manufacturer in Ahmedabad — Vedvik Machinery",
    description:
      "HFFS pouch packing, pick fill seal, liquid filling and inspection systems — built and supported from Ahmedabad, India.",
    images: ["/og-thumbnail.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "9, Siddhi Vinayak Industrial Estate, Bakrol",
  addressLocality: "Ahmedabad",
  addressRegion: "Gujarat",
  postalCode: "382210",
  addressCountry: "IN",
};

const SAME_AS = [
  "https://www.linkedin.com/company/vedvik-machinery-india/",
  "https://www.youtube.com/@Vedvik_Machinery",
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vedvik Machinery",
  url: "https://vedvikmachinery.com",
  logo: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780846274/Vedvik_Logo_TightCrop_ght0v2.svg",
  description:
    "Packaging machines manufacturer and supplier in Ahmedabad, India — HFFS pouch packing, pick fill seal (PFS), liquid filling, stick packing and inspection systems for food, pharmaceutical and FMCG production lines.",
  address: ADDRESS,
  areaServed: "IN",
  email: "vikrant@vedvikmachinery.com",
  telephone: "+91-8155892080",
  sameAs: SAME_AS,
  slogan: "Packaging, engineered.",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Manufacturer"],
  name: "Vedvik Machinery",
  image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780846274/Vedvik_Logo_TightCrop_ght0v2.svg",
  url: "https://vedvikmachinery.com",
  email: "vikrant@vedvikmachinery.com",
  telephone: "+91-8155892080",
  address: ADDRESS,
  sameAs: SAME_AS,
  areaServed: "India",
  priceRange: "$$$",
  knowsAbout: [
    "Packaging machines",
    "Packaging machines in Ahmedabad",
    "HFFS horizontal form fill seal machines",
    "Pick fill seal (PFS) machines",
    "Pouch packing machines",
    "Liquid filling machines",
    "Stick packing machines",
    "Bulk bagging machines",
    "Checkweighers",
    "X-ray and metal detection",
    "Vision inspection",
    "Coding and marking",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Packaging machines and inspection systems",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "HFFS Pouch Packing Machine" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pick Fill Seal (PFS) Machine" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Liquid Filling Machine" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Stick Packing Machine" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bulk Packing Machine" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Checkweigher" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "X-Ray & Metal Detection System" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Vision Inspection System" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vedvik Machinery",
  url: "https://vedvikmachinery.com",
  publisher: { "@type": "Organization", name: "Vedvik Machinery" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Inter:wght@400;500;600&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
