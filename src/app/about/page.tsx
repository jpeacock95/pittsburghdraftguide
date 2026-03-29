import type { Metadata } from "next";
import { TrackedLink } from "@/components/ui/TrackedLink";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "About This Guide | Pittsburgh Draft Guide",
  description:
    "This guide was built by Jordan Peacock, a Cranberry Township local and bookkeeper who wanted a better resource for NFL Draft visitors coming to Pittsburgh.",
};

export default function About() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About This Guide", href: "/about" },
        ]}
      />

      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / About This Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Why This Guide Exists
          </h1>
          <p className="text-gray-300">
            And who built it.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <LastUpdated date="March 29, 2026" />

        {/* Jordan's story */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <div className="flex-shrink-0 sm:mt-1">
            <Image
              src="/jordan-headshot.jpg"
              alt="Jordan Peacock"
              width={120}
              height={120}
              className="rounded-lg w-28 h-28 sm:w-30 sm:h-30 object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">Jordan Peacock</h2>
            <p className="text-sm text-muted mb-3">
              Cranberry Township, PA
            </p>
          </div>
        </div>

        <div className="prose-custom space-y-4 text-muted leading-relaxed">
          <p>
            I'm Jordan. I live in Cranberry Township, about 25 minutes north of
            downtown Pittsburgh.
          </p>

          <p>
            When I found out the NFL Draft was coming here, I did what everybody
            does. I started Googling. Where do I park? What's the schedule? Where
            should I eat? And every single result was either a 200-word news
            article that barely said anything, or a sponsored post trying to sell
            me something.
          </p>

          <p>
            So I just built what I wished existed.
          </p>

          <p>
            I'm not a journalist or a travel writer. I'm a bookkeeper. I run{" "}
            <TrackedLink
              href="https://www.peacockbookkeepingservices.com"
              partner="peacock"
              action="website"
              page="about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Peacock Bookkeeping Services
            </TrackedLink>{" "}
            out of Cranberry Township. I help small business owners figure out
            where their money is going, clean up their QuickBooks, and stop
            losing money they don't know they're losing. I've got three
            QuickBooks ProAdvisor certifications and a 5.0 Google rating. That's
            my actual job.
          </p>

          <p>
            But I'm also a tech geek. I build things on weekends. I set up my
            own websites, configure my own DNS, and I've been deep into AI tools
            for the last year. When I saw that nobody had built a real, useful
            draft guide for Pittsburgh, I figured I'd just do it myself.
          </p>

          <p>
            I spent weeks pulling information from Reddit threads, news articles,
            transit updates, and local Facebook groups. I called hotels. I
            checked parking prices. I verified everything with local news sources
            like WPXI, CBS Pittsburgh, and the Post-Gazette. This guide has 20
            pages because there's 20 pages worth of stuff you actually need to
            know.
          </p>

          <p>
            It's free. No catches. No paywall. If you find a hotel or parking
            spot through one of the links on this site, I might earn a small
            affiliate commission. That's it. That's how the site stays free.
          </p>
        </div>

        {/* Bookkeeping section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-bold mb-4">If you need a bookkeeper</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I wasn't going to put this here, but it felt weird not to. This is
              my site. I built it. And yeah, I'm also a bookkeeper.
            </p>

            <p>
              If you're a business owner and your books are a mess, or you're not
              sure if your bookkeeper is doing it right, or you just want someone
              to look at things with fresh eyes, that's what I do. I've found an
              average of $18,000 per client in their first year. Duplicate
              charges, forgotten deductions, vendors overcharging. Stuff that
              adds up.
            </p>

            <p>
              I work with businesses in Pittsburgh and across PA, plus remote
              clients anywhere in the US. If you want to talk, here's my
              Calendly. 30 minutes, free, no pressure.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <TrackedLink
                href="https://calendly.com/peacockbookkeepingservices/30min"
                partner="peacock"
                action="calendly"
                page="about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
              >
                Book a Free Call
              </TrackedLink>
              <TrackedLink
                href="https://www.peacockbookkeepingservices.com"
                partner="peacock"
                action="website"
                page="about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white border border-amber-600 text-amber-600 hover:bg-amber-50 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
              >
                Visit My Website
              </TrackedLink>
            </div>

            <div className="mt-3 bg-surface rounded-lg p-3">
              <div className="flex flex-col sm:flex-row gap-2 text-sm">
                <span className="text-muted">
                  Phone:{" "}
                  <TrackedLink
                    href="tel:+14124077420"
                    partner="peacock"
                    action="phone"
                    page="about"
                    className="text-primary font-semibold hover:underline"
                  >
                    (412) 407-7420
                  </TrackedLink>
                </span>
                <span className="hidden sm:inline text-gray-300">|</span>
                <span className="text-muted">
                  Email:{" "}
                  <TrackedLink
                    href="mailto:jordan@peacockbookkeepingservices.com"
                    partner="peacock"
                    action="email"
                    page="about"
                    className="text-primary font-semibold hover:underline"
                  >
                    jordan@peacockbookkeepingservices.com
                  </TrackedLink>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dante section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-bold mb-4">About Dante</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <div className="flex flex-col sm:flex-row gap-6 mb-4">
              <div className="flex-shrink-0">
                <Image
                  src="/remax-logo.png"
                  alt="RE/MAX Select Realty logo"
                  width={140}
                  height={44}
                  className="w-36 h-auto object-contain mb-2"
                />
                <Image
                  src="/dante-headshot.jpg"
                  alt="Dante Egizio, Pittsburgh realtor with RE/MAX Select Realty"
                  width={120}
                  height={120}
                  className="rounded-lg w-28 h-28 object-cover"
                />
              </div>
              <div>
                <p>
                  Dante Egizio is a friend of mine. He's a real estate agent with
                  RE/MAX Select Realty who's been selling homes across Pittsburgh
                  and the surrounding areas for 7 years. He lives in Ohio Township
                  and started the Ohio Township Community Facebook Group (1,500+
                  members) because he actually cares about the community, not just
                  commissions.
                </p>
                <p className="mt-3">
                  If you're visiting Pittsburgh for the draft and you start
                  thinking "I could live here," Dante's the person I'd tell you to
                  call. He knows every neighborhood, from the North Hills suburbs
                  to downtown and everything in between.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

            <div className="bg-surface rounded-lg p-3">
              <p className="text-xs text-muted font-semibold uppercase mb-1">
                Contact Dante
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

            <div className="flex flex-col sm:flex-row gap-3">
              <TrackedLink
                href="https://danteegizio.remax.com/"
                partner="dante"
                action="remax_profile"
                page="about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
              >
                View Dante's RE/MAX Profile
              </TrackedLink>
              <TrackedLink
                href="tel:+14123478125"
                partner="dante"
                action="phone"
                page="about"
                className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
              >
                Call Dante
              </TrackedLink>
            </div>

            {/* RE/MAX compliance footer */}
            <div className="pt-4 border-t border-border text-xs text-gray-500 text-center">
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

        {/* What happens after the draft */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-bold mb-4">What happens after the draft</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              This site isn't going away on April 26. I'm planning to turn it
              into a year-round Pittsburgh guide. Neighborhoods, restaurants,
              things to do, moving here, all of it. If you grabbed the checklist,
              I'll keep you posted when new stuff goes live.
            </p>
          </div>
        </div>

        {/* Want to be featured */}
        <section className="mt-12 bg-surface border border-border rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-2">
            Want to Be Featured on This Site?
          </h2>
          <p className="text-sm text-muted mb-4">
            I'm looking for Pittsburgh-area businesses who want visibility during
            draft weekend and beyond. Restaurants, bars, hotels, tour guides,
            photographers, and local services. Spots are limited.
          </p>
          <a
            href="mailto:jordan@peacockbookkeepingservices.com?subject=Featured%20Listing%20Inquiry%20-%20Pittsburgh%20Draft%20Guide"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Inquire About a Featured Spot
          </a>
        </section>
      </article>

      <RelatedPages current="about" slugs={["checklist", "schedule", "parking", "food"]} />
    </>
  );
}
