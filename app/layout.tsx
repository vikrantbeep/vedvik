import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const OG_IMAGE = "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778775822/Primary_Logo_1_zjdriv.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vedvikmachinery.com"),
  title: {
    default: "Vedvik Machinery – Packaging & Inspection Machinery",
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
        {/* Global design system: buttons, links, cards, backgrounds, reveal */}
        <style>{`
          /* ── Backgrounds ── */
          .v-dotgrid {
            background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
            background-size: 24px 24px;
          }
          .v-tint { background-color: #f8faff; }

          /* ── Buttons ── */
          .v-btn-primary {
            display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
            background: #0C4CA2; color: #fff;
            padding: .75rem 1.5rem; border-radius: .5rem;
            font-weight: 500; cursor: pointer;
            transition: all .2s ease;
            box-shadow: 0 1px 2px rgba(12,76,162,.2);
          }
          .v-btn-primary:hover {
            background: #0a3d8a; transform: translateY(-2px);
            box-shadow: 0 10px 24px rgba(12,76,162,.28);
          }
          .v-btn-primary:active { transform: translateY(0); box-shadow: 0 1px 3px rgba(12,76,162,.2); }
          .v-btn-primary:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(12,76,162,.4); }

          .v-btn-secondary {
            display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
            background: transparent; color: #0C4CA2;
            border: 2px solid #0C4CA2;
            padding: .75rem 1.5rem; border-radius: .5rem;
            font-weight: 500; cursor: pointer;
            transition: all .2s ease;
          }
          .v-btn-secondary:hover { background: #0C4CA2; color: #fff; }
          .v-btn-secondary:active { transform: scale(.98); }
          .v-btn-secondary:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(12,76,162,.4); }

          /* ── Ghost / text links: underline slides in from left ── */
          .v-link { position: relative; cursor: pointer; transition: color .15s ease; }
          .v-link::after {
            content: ""; position: absolute; left: 0; bottom: -2px;
            width: 100%; height: 2px; background: #0C4CA2;
            transform: scaleX(0); transform-origin: left;
            transition: transform .15s ease;
          }
          .v-link:hover { color: #0C4CA2; }
          .v-link:hover::after { transform: scaleX(1); }
          .v-link.v-link-active { color: #0C4CA2; }
          .v-link.v-link-active::after { transform: scaleX(1); }

          /* ── Cards ── */
          .v-card {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: .75rem;
            cursor: pointer;
            transition: all .25s ease;
          }
          .v-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(12,76,162,.12);
            border-color: rgba(12,76,162,.3);
          }
          .v-card:active { transform: translateY(-2px) scale(.99); }

          /* ── Chips ── */
          .v-chip {
            display: inline-flex; align-items: center;
            padding: .125rem .625rem; border-radius: 9999px;
            background: #f1f5f9; color: #475569;
            font-size: .6875rem; font-weight: 500; white-space: nowrap;
          }

          /* ── Scroll reveal: fadeInUp only ── */
          .scroll-fade {
            opacity: 0; transform: translateY(24px);
            transition: opacity .5s ease-out, transform .5s ease-out;
          }
          .scroll-fade.visible { opacity: 1; transform: translateY(0); }

          @keyframes vFadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          a, button { -webkit-tap-highlight-color: transparent; }
        `}</style>
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
      <body className="v-dotgrid" style={{ backgroundColor: 'white' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    
    </html>
  );
}
