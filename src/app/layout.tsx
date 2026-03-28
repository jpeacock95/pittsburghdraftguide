import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailBanner } from "@/components/ui/EmailBanner";
import { FeedbackWidget } from "@/components/ui/FeedbackWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="f0268c92-9074-4ea3-9c6b-e2197c409bd8"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 pb-16">
          {children}
          <div className="max-w-3xl mx-auto px-4">
            <FeedbackWidget />
          </div>
        </main>
        <Footer />
        <EmailBanner />
      </body>
    </html>
  );
}
