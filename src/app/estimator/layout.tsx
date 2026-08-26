import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FBA Prep Cost Estimator",
  description:
    "Estimate published Amazon FBA prep, labeling, poly-bagging, bundling, storage, and carton-forwarding rates from our Great Falls, Montana facility.",
  alternates: {
    canonical: "/estimator",
  },
  openGraph: {
    title: "FBA Prep Cost Estimator | Such Group E-Commerce",
    description:
      "Estimate published Amazon FBA prep, labeling, poly-bagging, bundling, storage, and carton-forwarding rates from Great Falls, Montana.",
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
      "Estimate published Amazon FBA prep, labeling, poly-bagging, bundling, storage, and carton-forwarding rates from Great Falls, Montana.",
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
