import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://www.signalops.io";
const TITLE = "SignalOps — AI Alerts That Tell Shopify Operators When to Act";
const DESCRIPTION =
  "SignalOps monitors your Shopify and marketing data 24/7 and sends actionable alerts when something important happens. No dashboards. No noise. Just high-signal insights.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "SignalOps",
    "Shopify alerts",
    "ecommerce monitoring",
    "AI analytics",
    "Shopify operator tools",
    "store performance alerts",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "SignalOps",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SignalOps",
  url: SITE_URL,
  description: DESCRIPTION,
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="signalops">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-base-100 text-base-content antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
