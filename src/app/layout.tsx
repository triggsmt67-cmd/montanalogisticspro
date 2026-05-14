import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans", 
});

export const metadata: Metadata = {
  title: "Montana Logistics Pro | Tax-Free Amazon Prep & 3PL",
  description: "Tax-Free Montana Prep. 48-Hour Turnaround Guaranteed. The scalable solution for high-volume Amazon sellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#000000] text-[#EAEAEA] min-h-screen selection:bg-white/20 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
