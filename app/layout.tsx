import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroller from "@/components/shared/SmoothScroller";

// Self-hosted, zero-latency font loading with font-display: swap
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Buzzcrafterss — Brand Experience & Integrated Marketing Agency",
  description:
    "Buzzcrafterss is a brand experience and integrated marketing agency creating campaigns across campuses, communities, workplaces, social platforms and digital spaces. BTL activations, creator marketing, campus programs, events and digital experiences.",
  keywords: [
    "marketing agency",
    "brand experience agency",
    "BTL agency",
    "experiential marketing",
    "influencer marketing agency",
    "campus marketing agency",
    "youth marketing agency",
    "campus activation agency",
    "event marketing agency",
    "corporate activation agency",
    "creator marketing",
    "microsite development",
    "Buzzcrafterss",
  ],
  authors: [{ name: "Buzzcrafterss" }],
  openGraph: {
    title: "Buzzcrafterss — Brand Experiences. Creator Influence. Digital Impact.",
    description:
      "We make brands impossible to ignore. Experiential campaigns, creator marketing, campus programs and digital experiences — all from one agency.",
    type: "website",
    url: "https://buzzcrafterss.com",
    siteName: "Buzzcrafterss",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzzcrafterss — Brand Experience Agency",
    description: "Brand Experiences. Creator Influence. Digital Impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://buzzcrafterss.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} bg-[#fbfbfa]`}>
      <head>
        {/* Preconnect and non-blocking font delivery for Satoshi */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: "Buzzcrafterss",
              description:
                "Brand experience and integrated marketing agency creating campaigns across campuses, communities, workplaces, social platforms and digital spaces.",
              url: "https://buzzcrafterss.com",
              email: "hello@buzzcrafterss.com",
              sameAs: [
                "https://instagram.com/buzzcrafterss",
                "https://linkedin.com/company/buzzcrafterss",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#fbfbfa] text-[#121113] min-h-screen flex flex-col w-full antialiased selection:bg-[#ffd6e0] selection:text-[#ff3366] font-inter">
        <SmoothScroller />
        <CustomCursor />
        <Navbar />
        <div className="flex-1 w-full flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
