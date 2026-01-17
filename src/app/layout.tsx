import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

import { siteUrl, localBusinessJsonLd } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";

const cairo = localFont({
  src: [
    { path: "../../public/brand/fonts/Cairo/Cairo-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/brand/fonts/Cairo/Cairo-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/brand/fonts/Cairo/Cairo-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/brand/fonts/Cairo/Cairo-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-cairo",
  display: "swap",
});

const TITLE = "غنام للعقارات | المحلة الكبرى";
const DESC =
  "غنّام للعقارات - شريكك الموثوق في عالم العقارات الفاخرة في المحلة الكبرى. نقدم خدمات متكاملة للبيع والشراء والاستثمار العقاري.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    url: siteUrl(),
    siteName: "غنام للعقارات",
    locale: "ar_EG",
    type: "website",
    images: [{ url: "/media/hero.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/media/hero.jpg"],
  },
  icons: {
    icon: [
      { url: "/brand/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/brand/favicons/apple-touch-icon-180.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased">
        {/* JSON-LD */}
        <Script
          id="ld-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />

        {/* Netlify Forms (Hidden) so Netlify registers forms at build time */}
<Navbar />
        <StickyActions />
        {children}
        <Footer />
      </body>
    </html>
  );
}
