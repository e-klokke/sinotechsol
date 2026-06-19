/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy Wix URL redirects
      {
        source: "/about-4",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/why-us",
        destination: "/capabilities",
        permanent: true,
      },
      // Catch-all for other legacy paths - add more as identified
    ];
  },
};

export default nextConfig;
