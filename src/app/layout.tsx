import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const GTM_ID = "GTM-NXN9MTXW";
const GA_MEASUREMENT_ID = "G-EMR88WJD0N";

const SITE_URL = "https://suchgroupecommerce.com";
const SITE_NAME = "Such Group E-Commerce";
const SITE_DESCRIPTION =
  "Nationwide Amazon FBA prep and 3PL fulfillment from Great Falls, Montana, with qualified 24–48 hour turnaround targets and transparent service terms.";

export const metadata: Metadata = {
  metadataBase: new URL("https://suchgroupecommerce.com"),

  title: {
    default: `${SITE_NAME} | Tax-Free 3PL & FBA Prep in Montana`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "-vyD0aKVKWL1W8RkEjbwI4G2Z3BdlUHYmwiCK_LFE3U",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Tax-Free Amazon Prep & 3PL in Montana`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Such Group E-Commerce — Tax-Free Amazon Prep in Montana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Tax-Free Amazon Prep & 3PL`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Google Consent Mode v2 Default Configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              
              // Check local storage for existing consent preference
              var consentStatus = null;
              try {
                consentStatus = localStorage.getItem('cookie-consent-status');
              } catch (e) {}

              var state = consentStatus === 'granted' ? 'granted' : 'denied';
              
              gtag('consent', 'default', {
                'ad_storage': state,
                'ad_user_data': state,
                'ad_personalization': state,
                'analytics_storage': state
              });
            `.trim(),
          }}
        />
        {/* Google tag (gtag.js) for Google Analytics */}
        <Script
          id="google-tag-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-tag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `.trim(),
          }}
        />
        {/* Google Tag Manager — fires after page is interactive, non-blocking */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#000000] text-[#EAEAEA] min-h-screen selection:bg-white/20 selection:text-white`}
      >
        {/* GTM noscript fallback — required for environments with JS disabled */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
