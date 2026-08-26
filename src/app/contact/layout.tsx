import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Such Group E-Commerce for questions regarding nationwide Amazon FBA prep, DTC order fulfillment, and wholesale inventory storage in Montana.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Such Group E-Commerce | Montana 3PL & FBA Prep",
    description:
      "Contact Such Group E-Commerce for questions regarding nationwide Amazon FBA prep, DTC order fulfillment, and wholesale inventory storage in Montana.",
    url: "https://suchgroupecommerce.com/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Such Group E-Commerce | Montana 3PL & FBA Prep",
    description:
      "Contact Such Group E-Commerce for questions regarding nationwide Amazon FBA prep, DTC order fulfillment, and wholesale inventory storage in Montana.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
