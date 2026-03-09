import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Capital Growth Club | High-Converting Sales Funnels for Service Businesses",
  description:
    "We build complete sales funnels for service businesses doing $250K+/month. From ad creative to CRM automations — we turn your leads into closed deals.",
  keywords: [
    "sales funnel",
    "lead generation",
    "CRM automation",
    "service business marketing",
    "high converting funnels",
    "paid advertising",
    "marketing agency",
  ],
  openGraph: {
    title: "Capital Growth Club | Scale Your Service Business to $1M/month",
    description:
      "Stop losing leads. We build complete sales funnels — from ad creative to CRM automations — for service businesses ready to scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
