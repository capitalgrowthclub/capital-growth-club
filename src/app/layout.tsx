import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-PGWFSTSZ";

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
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
