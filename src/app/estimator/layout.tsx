import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FBA Prep Cost Estimator",
  description:
    "Calculate exact Amazon FBA prep costs for labeling, poly bagging, bundling, and storage from our zero-sales-tax Montana facility. Get an instant quote.",
  alternates: {
    canonical: "/estimator",
  },
  openGraph: {
    title: "FBA Prep Cost Estimator | Such Group E-Commerce",
    description:
      "Calculate exact Amazon FBA prep costs for labeling, poly bagging, bundling, and storage from our zero-sales-tax Montana facility. Get an instant quote.",
    url: "https://suchgroupecommerce.com/estimator",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FBA Prep Cost Estimator | Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FBA Prep Cost Estimator | Such Group E-Commerce",
    description:
      "Calculate exact Amazon FBA prep costs for labeling, poly bagging, bundling, and storage from our zero-sales-tax Montana facility. Get an instant quote.",
    images: ["/og-image.png"],
  },
};

export default function EstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
