import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Vedvik Machinery – Packaging Machinery Solutions",
  description: "Vedvik Machinery manufactures packaging systems and represents leading international brands in India.",
  keywords: "packaging machinery India, HFFS machine, liquid filling machine, checkweigher, vision inspection, Effytec India, Varpe India, Ahmedabad packaging machinery",
  openGraph: {
    title: "Vedvik Machinery – Packaging Machinery Solutions",
    description: "Vedvik Machinery manufactures packaging systems and represents leading international brands in India.",
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
      <body>{children}</body>
    </html>
  );
}
