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
