import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Prevent MIME type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Enable XSS filter in legacy browsers
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Control referrer information
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Restrict browser feature access
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // HTTP Strict Transport Security (2 year max-age)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // GTM requires unsafe-inline + unsafe-eval; GA4 scripts load from google domains
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
      // GA4 and GTM send beacons to these endpoints
      "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

if (process.env.VERCEL_ENV !== "production") {
  securityHeaders.push({
    key: "X-Robots-Tag",
    value: "noindex, nofollow",
  });
}

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Long-lived immutable cache for static media and fonts
        source: "/:path*.(png|jpg|jpeg|gif|webp|svg|ico|mp4|webm|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ── Canonical WWW to Apex 301 Redirect ───────────────────────────────
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.suchgroupecommerce.com",
          },
        ],
        destination: "https://suchgroupecommerce.com/:path*",
        permanent: true,
      },

      // ── Master Service 301 Redirects ─────────────────────────────────────
      // Amazon Prep Category routes
      {
        source: "/services/amazon/fba-prep-and-labeling",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/amazon/bundling-and-multipacks",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/amazon/poly-bagging-and-fragile-handling",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/amazon/removal-order-processing",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/amazon/inbound-shipment-creation",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/amazon/tax-free-inventory-storage",
        destination: "/services/wholesale-inventory-storage",
        permanent: true,
      },

      // Ecommerce / DTC Category routes
      {
        source: "/services/ecommerce/direct-to-consumer-pick-and-pack",
        destination: "/services/dtc-ecommerce-fulfillment",
        permanent: true,
      },
      {
        source: "/services/ecommerce/custom-kitting-and-assembly",
        destination: "/services/dtc-ecommerce-fulfillment",
        permanent: true,
      },
      {
        source: "/services/ecommerce/streamlined-returns",
        destination: "/services/dtc-ecommerce-fulfillment",
        permanent: true,
      },
      {
        source: "/services/ecommerce/branded-unboxing-experience",
        destination: "/services/dtc-ecommerce-fulfillment",
        permanent: true,
      },
      {
        source: "/services/ecommerce/secure-warehousing",
        destination: "/services/wholesale-inventory-storage",
        permanent: true,
      },
      {
        source: "/services/ecommerce/b2b-and-retail-routing",
        destination: "/services/wholesale-inventory-storage",
        permanent: true,
      },

      // Direct slug routes (without category prefix)
      {
        source: "/services/tax-free-inventory-storage",
        destination: "/services/wholesale-inventory-storage",
        permanent: true,
      },
      {
        source: "/services/secure-warehousing",
        destination: "/services/wholesale-inventory-storage",
        permanent: true,
      },
      {
        source: "/services/b2b-and-retail-routing",
        destination: "/services/wholesale-inventory-storage",
        permanent: true,
      },
      {
        source: "/services/fba-prep-and-labeling",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/bundling-and-multipacks",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/poly-bagging-and-fragile-handling",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/removal-order-processing",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/inbound-shipment-creation",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/direct-to-consumer-pick-and-pack",
        destination: "/services/dtc-ecommerce-fulfillment",
        permanent: true,
      },
      {
        source: "/services/custom-kitting-and-assembly",
        destination: "/services/dtc-ecommerce-fulfillment",
        permanent: true,
      },
      {
        source: "/services/streamlined-returns",
        destination: "/services/dtc-ecommerce-fulfillment",
        permanent: true,
      },
      {
        source: "/services/branded-unboxing-experience",
        destination: "/services/dtc-ecommerce-fulfillment",
        permanent: true,
      },

      // Category root fallbacks
      {
        source: "/services/amazon",
        destination: "/services/tax-free-amazon-fba-prep",
        permanent: true,
      },
      {
        source: "/services/ecommerce",
        destination: "/services/dtc-ecommerce-fulfillment",
        permanent: true,
      },
      {
        source: "/services/wholesale",
        destination: "/services/wholesale-inventory-storage",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      // ── Google Tag Manager first-party proxy ──────────────────────────────
      // Tunnels GTM container loads through your own domain.
      // Ad blockers block googletagmanager.com — they won't block /gtm/* on
      // your own domain, so tags fire reliably without a CDN-level gateway.
      {
        source: "/gtm/gtm.js",
        destination: "https://www.googletagmanager.com/gtm.js",
      },
      {
        source: "/gtm/ns.html",
        destination: "https://www.googletagmanager.com/ns.html",
      },
      // GA4 measurement endpoint (used by GTM's GA4 tags)
      {
        source: "/g/collect",
        destination: "https://www.google-analytics.com/g/collect",
      },
      // Legacy Universal Analytics collect (may still be triggered by some GTM tags)
      {
        source: "/collect",
        destination: "https://www.google-analytics.com/collect",
      },
    ];
  },
};

export default nextConfig;
