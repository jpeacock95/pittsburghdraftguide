import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthorByline } from "@/components/ui/AuthorByline";

const EmailBanner = dynamic(() => import("@/components/ui/EmailBanner").then(m => m.EmailBanner));
const FeedbackWidget = dynamic(() => import("@/components/ui/FeedbackWidget").then(m => m.FeedbackWidget));
const BackToTop = dynamic(() => import("@/components/ui/BackToTop").then(m => m.BackToTop));

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pittsburghdraftguide.com"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "NFL Draft Pittsburgh 2026: Your Complete Guide",
    template: "%s | Pittsburgh Draft Guide",
  },
  description:
    "The ultimate guide to the 2026 NFL Draft in Pittsburgh. Parking, hotels, restaurants, schedule, and everything you need for April 23-25 at Point State Park and Acrisure Stadium.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pittsburgh Draft Guide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pittsburgh Draft Guide 2026 - Your Complete Guide to the NFL Draft in Pittsburgh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cloud.umami.is" />
      </head>
      <body className="min-h-full flex flex-col font-body">
        {/* Google Analytics (GA4) - lazyOnload to avoid blocking paint */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GJ0PDB2N27"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GJ0PDB2N27');
          `}
        </Script>
        {/* Umami Analytics - lazyOnload to avoid blocking paint */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="683b54f5-fcff-4ec7-94ed-1b992587765b"
          strategy="lazyOnload"
        />
        <Header />
        <AuthorByline />
        <main className="flex-1 pb-28 sm:pb-20">
          {children}
          <div className="max-w-3xl mx-auto px-4">
            <FeedbackWidget />
          </div>
        </main>
        <Footer />
        <BackToTop />
        <EmailBanner />
      </body>
    </html>
  );
}
