import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Things to Do During NFL Draft Weekend Pittsburgh",
  description:
    "What to do during the 2026 NFL Draft in Pittsburgh beyond watching picks. Draft Experience, concerts, 5K race, food events, and attractions.",
};

export default function ThingsToDo() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Things to Do", href: "/things-to-do" },
        ]}
      />

      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Things to Do
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Things to Do During Draft Weekend
          </h1>
          <p className="text-gray-300">
            Everything happening beyond the picks. Concerts, the Draft Experience, the 5K race,
            food events, Pittsburgh attractions, and activities for non-football fans too.
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
            <Link href="/faq" className="text-primary font-semibold hover:underline text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
