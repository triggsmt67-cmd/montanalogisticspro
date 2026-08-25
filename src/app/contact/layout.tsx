import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Such Group E-Commerce for questions regarding zero sales tax Amazon FBA prep, DTC fulfillment, and inventory warehousing in Great Falls, Montana.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Such Group E-Commerce | Montana 3PL & FBA Prep",
    description:
      "Contact Such Group E-Commerce for questions regarding zero sales tax Amazon FBA prep and fulfillment in Great Falls, Montana.",
    url: "https://suchgroupecommerce.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Such Group E-Commerce | Montana 3PL & FBA Prep",
    description:
      "Contact Such Group E-Commerce for questions regarding zero sales tax Amazon FBA prep and fulfillment in Great Falls, Montana.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
