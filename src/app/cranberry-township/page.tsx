import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NFL Draft from Cranberry Township: Transit Guide",
  description:
    "Getting to the 2026 NFL Draft from Cranberry Township PA. Park-and-ride options, bus routes, hotels under $180/night, and restaurants nearby.",
};

export default function CranberryTownship() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Cranberry Township", href: "/cranberry-township" },
        ]}
      />

      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Cranberry Township
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Getting to the NFL Draft from Cranberry Township
          </h1>
          <p className="text-gray-300">
            Park-and-ride locations, bus routes into downtown, affordable hotels under $180/night,
            and local restaurants if you're staying north of the city.
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
