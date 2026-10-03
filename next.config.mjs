/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict framing and document targets without blocking Next.js scripts.
          { key: 'Content-Security-Policy', value: "base-uri 'self'; object-src 'none'; frame-ancestors 'self'" },
        ],
      },
    ];
  },
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
        destination: "/#capabilities",
        permanent: true,
      },
      {
        source: "/capabilities",
        destination: "/#capabilities",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
