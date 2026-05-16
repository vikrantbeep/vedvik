import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vedvik Machinery – Packaging Machinery Manufacturer & Supplier in India",
  description: "Vedvik Machinery manufactures packaging systems and represents Effytec, Varpe, Filtec and other leading brands in India. HFFS, liquid filling, checkweighers, vision inspection and more.",
  keywords: "packaging machinery India, HFFS machine, liquid filling machine, checkweigher, vision inspection, Effytec India, Varpe India, Ahmedabad packaging machinery",
  openGraph: {
    title: "Vedvik Machinery – Packaging Machinery Manufacturer & Supplier in India",
    description: "Vedvik Machinery manufactures packaging systems and represents Effytec, Varpe, Filtec and other leading brands in India.",
    url: "https://vedvikmachinery.com",
    siteName: "Vedvik Machinery",
    images: [
      {
        url: "https://vedvikmachinery.com/og-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Vedvik Machinery",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedvik Machinery – Packaging Machinery Manufacturer & Supplier in India",
    description: "Vedvik Machinery manufactures packaging systems and represents Effytec, Varpe, Filtec and other leading brands in India.",
    images: ["https://vedvikmachinery.com/og-thumbnail.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Hind:wght@400;500;600&family=Inter:wght@400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
