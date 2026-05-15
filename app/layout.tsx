// 1. Your metadata object configuration
export const metadata = {
  title: 'Vedvik Machinery | Packaging Machinery Solutions',
  description: 'Discover top-quality packaging machinery for the Indian subcontinent. We specialize in liquid filling machines, inspection machines, and automated systems.',
  openGraph: {
    title: 'Vedvik Machinery | Packaging Machinery Solutions',
    description: 'Discover top-quality packaging machinery for the Indian subcontinent.',
    url: 'https://vedvikmachinery.com',
    siteName: 'Vedvik Machinery',
    images: [
      {
        url: 'https://vedvikmachinery.com/og-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Vedvik Machinery Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// 2. The critical default layout function (Make sure "export default" is present)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
