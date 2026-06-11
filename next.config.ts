/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  redirects: async () => [
    // Legacy URLs from the old Hostinger site only.
    // NOTE: Do NOT add redirects whose source differs from an existing route
    // only by letter case (e.g. /solutions/comipack -> /solutions/Comipack).
    // Next.js matches redirect sources case-insensitively, so such a redirect
    // also matches its own destination and causes ERR_TOO_MANY_REDIRECTS.
    // Lowercase slug correction is handled inside app/solutions/[slug]/page.tsx.
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
  ],
};

export default nextConfig;
