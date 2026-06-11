/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  redirects: async () => [
    {
      source: '/solutions/pouch-packing-systems',
      destination: '/solutions/HFFS',
      permanent: true,
    },
    {
      source: '/solutions/automatic-unwinder-machines',
      destination: '/solutions/roller-unwinders',
      permanent: true,
    },
    {
      source: '/solutions/packaging-machinery-solutions',
      destination: '/solutions',
      permanent: true,
    },
    // Lowercase variants were published in an earlier sitemap and may be
    // indexed — redirect them to the canonical case-sensitive URLs.
    { source: '/solutions/hffs', destination: '/solutions/HFFS', permanent: true },
    { source: '/solutions/liquid-filling', destination: '/solutions/Liquid-Filling', permanent: true },
    { source: '/solutions/pfs', destination: '/solutions/PFS', permanent: true },
    { source: '/solutions/bulk-packing', destination: '/solutions/Bulk-Packing', permanent: true },
    { source: '/solutions/secondary-automation', destination: '/solutions/Secondary-Automation', permanent: true },
    { source: '/solutions/inspection', destination: '/solutions/Inspection', permanent: true },
    { source: '/solutions/checkweighers', destination: '/solutions/Checkweighers', permanent: true },
    { source: '/solutions/printing', destination: '/solutions/Printing', permanent: true },
    { source: '/solutions/comipack', destination: '/solutions/Comipack', permanent: true },
    { source: '/solutions/boato-pack', destination: '/solutions/Boato-Pack', permanent: true },
    { source: '/solutions/gms', destination: '/solutions/GMS', permanent: true },
    { source: '/solutions/kraus', destination: '/solutions/Kraus', permanent: true },
  ],
};

export default nextConfig;
