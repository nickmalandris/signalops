import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SignalOps — AI Alerts That Tell Shopify Operators When to Act",
  description:
    "SignalOps monitors your Shopify and marketing data 24/7 and sends actionable alerts when something important happens. No dashboards. No noise. Just high-signal insights.",
  openGraph: {
    title: "SignalOps — AI Alerts That Tell Shopify Operators When to Act",
    description:
      "SignalOps monitors your Shopify and marketing data 24/7 and sends actionable alerts when something important happens. No dashboards. No noise. Just high-signal insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="signalops">
      <body className="bg-base-100 text-base-content antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
