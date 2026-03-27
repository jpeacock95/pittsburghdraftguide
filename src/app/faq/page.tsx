import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh FAQ: Top 20 Questions",
  description:
    "Answers to the 20 most-asked questions about the 2026 NFL Draft in Pittsburgh. Parking, hotels, food, schedule, bag policy, and more.",
};

export default function FAQ() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            NFL Draft Pittsburgh 2026: Frequently Asked Questions
          </h1>
          <p className="text-gray-300">
            Quick answers to the most common questions about parking, tickets, hotels, food,
            bag rules, and everything else visitors are asking.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-muted mb-6">
          This guide is being finalized. Check back soon for the complete version with detailed
          information, pricing, and recommendations.
        </p>
        <div className="bg-surface border border-border rounded-lg p-6 text-center">
          <p className="font-semibold mb-2">Full guide coming soon</p>
          <p className="text-sm text-muted mb-4">
            In the meantime, check out our other completed guides:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/parking-transportation" className="text-primary font-semibold hover:underline text-sm">
              Parking Guide
            </Link>
            <Link href="/where-to-stay" className="text-primary font-semibold hover:underline text-sm">
              Where to Stay
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
