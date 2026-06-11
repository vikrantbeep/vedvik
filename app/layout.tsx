import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const OG_IMAGE = "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778775822/Primary_Logo_1_zjdriv.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vedvikmachinery.com"),
  title: {
    default: "Vedvik Machinery – Packaging Machinery Manufacturer & Supplier in India",
    template: "%s | Vedvik Machinery",
  },
  description: "Packaging machinery manufacturer in Ahmedabad, India. Official representative of Effytec, Varpe, Filtec, E2M Couth, MF Tecno & MapleJet. HFFS, liquid filling, checkweighers & inspection systems.",
  keywords: "packaging machinery India, HFFS machine, liquid filling machine, checkweigher, vision inspection, Effytec India, Varpe India, Ahmedabad packaging machinery",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vedvik Machinery – Packaging Machinery Solutions",
    description: "Packaging machinery manufacturer in Ahmedabad, India. Official representative of Effytec, Varpe, Filtec, E2M Couth, MF Tecno & MapleJet.",
    url: "https://www.vedvikmachinery.com",
    siteName: "Vedvik Machinery",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Vedvik Machinery – Packaging Machinery Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedvik Machinery – Packaging Machinery Manufacturer & Supplier in India",
    description: "Vedvik Machinery manufactures packaging systems and represents Effytec, Varpe, Filtec and other leading brands in India.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.vedvikmachinery.com/#organization",
  name: "Vedvik Machinery",
  url: "https://www.vedvikmachinery.com",
  logo: OG_IMAGE,
  image: OG_IMAGE,
  description:
    "Packaging machinery manufacturer and supplier based in Ahmedabad, India. Manufactures pick-fill-seal machines, secondary automation and film processing machines in-house, and is the official Indian representative of Effytec (Spain), Varpe (Spain), Filtec Automation (South Africa), E2M Couth (Spain), MF Tecno (Italy), MapleJet (Canada), Comipack (Italy), Boato Pack (Italy), GMS (Italy) and Kraus (Germany).",
  email: "vikrant@vedvikmachinery.com",
  telephone: "+918155892080",
  address: {
    "@type": "PostalAddress",
    streetAddress: "E401, Savvy Swaraaj Aakanksha Phase 1, Gota",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382481",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "packaging machinery",
    "horizontal form fill seal machines",
    "liquid filling machines",
    "checkweighers",
    "X-ray inspection",
    "vision inspection systems",
    "pick fill seal machines",
    "film slitting, printing and lamination machines",
  ],
  brand: [
    { "@type": "Brand", name: "Effytec" },
    { "@type": "Brand", name: "Varpe" },
    { "@type": "Brand", name: "Filtec Automation" },
    { "@type": "Brand", name: "E2M Couth" },
    { "@type": "Brand", name: "MF Tecno" },
    { "@type": "Brand", name: "MapleJet" },
    { "@type": "Brand", name: "Comipack" },
    { "@type": "Brand", name: "Boato Pack" },
    { "@type": "Brand", name: "GMS" },
    { "@type": "Brand", name: "Kraus" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Hind:wght@400;500;600&family=Inter:wght@400;500;600&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-8WKGFHWWG6" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8WKGFHWWG6');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x36lcs1018");
  `}
</Script>
      </head>
      <body style={{ background: 'white', backgroundImage: 'none' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    
    </html>
  );
}
