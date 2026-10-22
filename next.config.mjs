/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  // 'unsafe-inline' covers Next.js hydration scripts. va.vercel-scripts.com is the Vercel Web Analytics debug script. Production analytics loads from /_vercel/insights/script.js ('self').
  `script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io",
  "font-src 'self' data:",
  [
    "connect-src 'self'",
    "https://vitals.vercel-insights.com",
    "https://va.vercel-scripts.com",
    "https://*.sanity.io",
    "https://*.api.sanity.io",
    isDev ? "ws: wss:" : "",
  ]
    .filter(Boolean)
    .join(" "),
  isDev ? "" : "upgrade-insecure-requests",
]
  .filter(Boolean)
  .join("; ");

const permissionsPolicy = [
  "accelerometer=()",
  "autoplay=()",
  "camera=()",
  "display-capture=()",
  "encrypted-media=()",
  "fullscreen=(self)",
  "geolocation=()",
  "gyroscope=()",
  "magnetometer=()",
  "microphone=()",
  "midi=()",
  "payment=()",
  "usb=()",
  "browsing-topics=()",
  "interest-cohort=()",
].join(", ");

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Permissions-Policy", value: permissionsPolicy },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
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
