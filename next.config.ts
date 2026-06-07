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
  ],
};

export default nextConfig;
