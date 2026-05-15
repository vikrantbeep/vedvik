import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vedvik Machinery",
  description: "Advanced packaging and filling systems engineered for high-speed pharmaceutical and food manufacturing.",
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
