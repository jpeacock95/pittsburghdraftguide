import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Pittsburgh Local Professionals We Recommend",
  description:
    "Trusted Pittsburgh professionals hand-picked by the Pittsburgh Draft Guide team. Local realtor and bookkeeper serving Cranberry Township and the North Hills.",
};

export default function LocalProfessionals() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          {
            name: "Local Professionals",
            href: "/local-professionals",
          },
        ]}
      />

      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Local Professionals
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Pittsburgh Professionals We Recommend
          </h1>
          <p className="text-gray-300">
            Local people we personally know and trust. Whether you're
            visiting for the draft and need help with something, or
            you fell in love with Pittsburgh and want to stay, these
            are the people to call.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-muted mb-10">
          This page features Pittsburgh-area professionals we've
          vetted and recommend. No pay-to-play. These are people we
          know, trust, and would refer to our own friends and family.
        </p>

        {/* Dante Egizio */}
        <section className="mb-12">
          <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="bg-blue-600 px-6 py-3">
              <p className="text-white font-bold text-sm uppercase tracking-wide">
                Featured Real Estate Agent
              </p>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 text-center">
                  <Image
                    src="/remax-logo.png"
                    alt="RE/MAX Select Realty logo"
                    width={160}
                    height={50}
                    className="w-40 h-auto object-contain mb-3"
                  />
                  <Image
                    src="/dante-headshot.jpg"
                    alt="Dante Egizio, Pittsburgh realtor with RE/MAX Select Realty"
                    width={160}
                    height={160}
                    className="rounded-lg w-40 h-40 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">Dante Egizio</h2>
                  <p className="text-muted text-sm mb-3">
                    Associate Broker &bull; RE/MAX Select Realty &bull;
                    Pittsburgh &amp; Surrounding Areas Expert
                  </p>
                  <p className="text-muted mb-4">
                    Dante has been helping families buy and sell homes across
                    Pittsburgh and the surrounding areas for 7 years. He lives
                    and works in Ohio Township and founded the Ohio Township
                    Community Facebook Group (1,500+ members) because he
                    actually cares about the community, not just the commission.
                  </p>
                  <p className="text-muted mb-4">
                    If you're visiting Pittsburgh for the draft and you start
                    thinking "I could live here," Dante is the person to call.
                    He knows the city inside and out, from the North Hills
                    suburbs to downtown, and every neighborhood in between.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-surface rounded-lg p-3">
                  <p className="text-xs text-muted font-semibold uppercase mb-1">
                    Specialties
                  </p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>Buyer &amp; Seller Representation</li>
                    <li>First Time Homebuyers</li>
                    <li>Investment Properties</li>
                    <li>Luxury Homes</li>
                    <li>New Construction</li>
                  </ul>
                </div>
                <div className="bg-surface rounded-lg p-3">
                  <p className="text-xs text-muted font-semibold uppercase mb-1">
                    Areas Served
                  </p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>Pittsburgh &amp; surrounding areas</li>
                    <li>North Hills, Cranberry Township, Mars</li>
                    <li>Ohio Township, Sewickley, Ben Avon</li>
                    <li>Bellevue, Emsworth, Kilbuck</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-surface rounded-lg p-3">
                <p className="text-xs text-muted font-semibold uppercase mb-1">
                  Contact
                </p>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <span className="text-muted">
                    Phone:{" "}
                    <a
                      href="tel:+14123478125"
                      className="text-primary font-semibold hover:underline"
                    >
                      (412) 347-8125
                    </a>
                  </span>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <span className="text-muted">
                    Email:{" "}
                    <a
                      href="mailto:degizio9@gmail.com"
                      className="text-primary font-semibold hover:underline"
                    >
                      degizio9@gmail.com
                    </a>
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://danteegizio.remax.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
                >
                  View RE/MAX Profile
                </a>
                <a
                  href="tel:+14123478125"
                  className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
                >
                  Call Dante
                </a>
              </div>

              {/* RE/MAX compliance footer */}
              <div className="mt-5 pt-4 border-t border-border text-xs text-gray-500 text-center">
                <p>
                  RE/MAX Select Realty | 400 Broad St. Suite 2006, Sewickley, PA
                  15143 |{" "}
                  <a href="tel:+17249336300" className="hover:underline">
                    (724) 933-6300
                  </a>
                </p>
                <p className="mt-1">
                  Dante Egizio, Associate Broker |{" "}
                  <a href="tel:+14123478125" className="hover:underline">
                    (412) 347-8125
                  </a>
                </p>
                <p className="mt-1">
                  PA License #AB069313 | Brokerage License #RB063030C | Equal
                  Housing Opportunity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Jordan Peacock */}
        <section className="mb-12">
          <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="bg-amber-600 px-6 py-3">
              <p className="text-white font-bold text-sm uppercase tracking-wide">
                Featured Bookkeeper
              </p>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/jordan-headshot.jpg"
                    alt="Jordan Peacock, owner of Peacock Bookkeeping Services in Cranberry Township PA"
                    width={160}
                    height={160}
                    className="rounded-lg w-40 h-40 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">Jordan Peacock</h2>
                  <p className="text-muted text-sm mb-3">
                    Owner &bull; Peacock Bookkeeping Services LLC &bull;
                    Cranberry Township, PA
                  </p>
                  <p className="text-muted mb-4">
                    Jordan is the person behind this entire draft guide. He
                    built it because he lives in Cranberry Township and wanted
                    visitors to have a better resource than what existed. But
                    his real business is bookkeeping.
                  </p>
                  <p className="text-muted mb-4">
                    He helps small business owners stop losing money they don't
                    know they're losing. He's found an average of $18,000 per
                    client in the first year through duplicate charges,
                    forgotten deductions, and vendor overcharges. Three
                    QuickBooks ProAdvisor certifications. 5.0 Google rating.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-surface rounded-lg p-3">
                  <p className="text-xs text-muted font-semibold uppercase mb-1">
                    Services
                  </p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>Monthly bookkeeping</li>
                    <li>QuickBooks setup and training</li>
                    <li>Catch-up bookkeeping</li>
                    <li>Tax preparation support</li>
                    <li>Payroll services</li>
                    <li>Financial analysis and reporting</li>
                  </ul>
                </div>
                <div className="bg-surface rounded-lg p-3">
                  <p className="text-xs text-muted font-semibold uppercase mb-1">
                    Areas Served
                  </p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>Cranberry Township, Wexford, Mars</li>
                    <li>Pittsburgh and surrounding areas</li>
                    <li>Remote clients throughout PA</li>
                  </ul>
                  <p className="text-xs text-muted font-semibold uppercase mt-3 mb-1">
                    Credentials
                  </p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>3x QuickBooks ProAdvisor Certified</li>
                    <li>5.0 Google Rating (7 reviews)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-surface rounded-lg p-3">
                <p className="text-xs text-muted font-semibold uppercase mb-1">
                  Contact
                </p>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <span className="text-muted">
                    Phone:{" "}
                    <a
                      href="tel:+14124077420"
                      className="text-primary font-semibold hover:underline"
                    >
                      (412) 407-7420
                    </a>
                  </span>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <span className="text-muted">
                    Email:{" "}
                    <a
                      href="mailto:jordan@peacockbookkeepingservices.com"
                      className="text-primary font-semibold hover:underline"
                    >
                      jordan@peacockbookkeepingservices.com
                    </a>
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/peacockbookkeepingservices/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
                >
                  Book a Free Call
                </a>
                <a
                  href="https://www.peacockbookkeepingservices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white border border-amber-600 text-amber-600 hover:bg-amber-50 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Want to be featured */}
        <section className="bg-surface border border-border rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-2">
            Want to Be Featured Here?
          </h2>
          <p className="text-sm text-muted mb-4">
            We're looking for Pittsburgh-area professionals who want
            visibility during draft weekend and beyond. Restaurants,
            bars, hotels, tour guides, photographers, and local
            services. Spots are limited.
          </p>
          <a
            href="mailto:jordan@peacockbookkeepingservices.com?subject=Featured%20Listing%20Inquiry%20-%20Pittsburgh%20Draft%20Guide"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Inquire About a Featured Spot
          </a>
        </section>
      </article>
    </>
  );
}
