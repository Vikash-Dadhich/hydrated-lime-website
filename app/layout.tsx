import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vikaslimeindustries.com"),
  title: {
    default: "Vikas Lime Industries",
    template: "%s | Vikas Lime Industries",
  },
  description:
    "Premium hydrated lime, quick lime & limestone gitti manufacturer since 2007 — Jodhpur, Rajasthan.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vikas Lime Industries",
    title: "Vikas Lime Industries",
    description:
      "Premium hydrated lime, quick lime & limestone manufacturer since 2007 — Jodhpur, Rajasthan.",
    url: "https://vikaslimeindustries.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Lime Industries",
    description:
      "Premium hydrated lime, quick lime & limestone manufacturer since 2007 — Jodhpur, Rajasthan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vikas Lime Industries",
              "description": "Premium hydrated lime, quick lime & limestone manufacturer since 2007 — Jodhpur, Rajasthan.",
              "url": "https://vikaslimeindustries.com",
              "telephone": "+919414135630",
              "email": "vikashlime@gmail.com",
              "foundingDate": "2007",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-280, Saraswati Nagar, Basni",
                "addressLocality": "Jodhpur",
                "addressRegion": "Rajasthan",
                "postalCode": "342005",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.2389,
                "longitude": 72.9826
              },
              "makesOffer": [
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Hydrated Lime" } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Quick Lime Lumps" } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Quick Lime Powder" } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Limestone" } }
              ],
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />
      </head>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          color: "#0f172a",
          margin: 0,
          overflowX: "hidden",
        }}
      >
        <Header />

        <main style={{ flex: 1, width: "100%" }}>
          {children}
        </main>

        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
