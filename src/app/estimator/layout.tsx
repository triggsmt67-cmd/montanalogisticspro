import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FBA Prep Cost Estimator",
  description:
    "Calculate your exact Amazon FBA prep costs — units, bundling, poly bagging, labeling, and storage — all from our zero-sales-tax Montana facility. Get a precise quote in seconds.",
  alternates: {
    canonical: "/estimator",
  },
  openGraph: {
    title: "FBA Prep Cost Estimator | Such Group E-Commerce",
    description:
      "Calculate your exact Amazon FBA prep costs — units, bundling, poly bagging, labeling, and storage — all from our zero-sales-tax Montana facility.",
    url: "https://suchgroupecommerce.com/estimator",
  },
};

export default function EstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
