import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vedvik Machinery | Packaging Machinery Solutions",
  description: "Advanced packaging and inspection systems engineered for high-speed FMCG and pharmaceutical applications.",
  keywords: "packaging machinery, HFFS, liquid filling, inspection systems, checkweighers, India",
  openGraph: {
    title: "Vedvik Machinery | Packaging Machinery Solutions",
    description: "Advanced packaging and inspection systems engineered for high-speed FMCG and pharmaceutical applications.",
    url: "https://vedvikmachinery.com",
    siteName: "Vedvik Machinery",
    images: [
      {
        url: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778775822/Primary_Logo_1_zjdriv.png",
        width: 1200,
        height: 630,
        alt: "Vedvik Machinery",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedvik Machinery | Packaging Machinery Solutions",
    description: "Advanced packaging and inspection systems engineered for high-speed FMCG and pharmaceutical applications.",
    images: ["https://res.cloudinary.com/dnts8gzbh/image/upload/v1778775822/Primary_Logo_1_zjdriv.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Hind:wght@400;500;600&family=Inter:wght@400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
