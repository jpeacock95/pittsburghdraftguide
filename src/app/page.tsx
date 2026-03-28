import type { Metadata } from "next";
import Link from "next/link";
import { EventSchema } from "@/components/schema/EventSchema";
import { WebSiteSchema } from "@/components/schema/WebSiteSchema";
import { EmailCapture } from "@/components/ui/EmailCapture";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh 2026: Your Complete Guide",
  description:
    "The ultimate guide to the 2026 NFL Draft in Pittsburgh. Parking, hotels, restaurants, schedule, and everything you need for April 23-25 at Point State Park and Acrisure Stadium.",
};

const quickLinks = [
  {
    href: "/parking-transportation",
    title: "Parking & Transportation",
    desc: "Where to park, park-and-ride options, road closures, and why officials say don't drive.",
  },
  {
    href: "/where-to-stay",
    title: "Where to Stay",
    desc: "Hotels from $120/night in Cranberry to $2,000 downtown. Plus Airbnb and budget alternatives.",
  },
  {
    href: "/bars-restaurants",
    title: "Bars & Restaurants",
    desc: "Where to eat and drink near both venues. North Shore, Strip District, South Side, and more.",
  },
  {
    href: "/schedule",
    title: "Schedule & What to Expect",
    desc: "Round-by-round times, free entry, OnePass registration, bag policy, and what to bring.",
  },
  {
    href: "/faq",
    title: "FAQ",
    desc: "Answers to the 20 most-asked questions about the Pittsburgh NFL Draft.",
  },
  {
    href: "/cranberry-township",
    title: "From Cranberry Township",
    desc: "Park-and-ride options, bus routes, and tips for visitors from the northern suburbs.",
  },
];

export default function HomePage() {
  return (
    <>
      <EventSchema />
      <WebSiteSchema />

      {/* Hero */}
      <section
        className="relative text-white py-24 md:py-36 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-pittsburgh.png')" }}
      >
        <div className="absolute inset-0 bg-primary-dark/75" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">
            April 23-25, 2026 &bull; Pittsburgh, PA
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Complete Guide to the 2026 NFL Draft in Pittsburgh
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            500,000+ visitors. Three days. Two venues connected by a river. This
            is everything you need to know about parking, hotels, food, the
            schedule, and what to actually do during draft weekend.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/parking-transportation"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Parking Guide (Start Here)
            </Link>
            <Link
              href="/schedule"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg border border-white/20 transition-colors"
            >
              See the Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-surface border-b border-border py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">Apr 23-25</p>
              <p className="text-sm text-muted">Thu-Sat, 2026</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">FREE</p>
              <p className="text-sm text-muted">Entry with <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">OnePass</a> app</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">2 Venues</p>
              <p className="text-sm text-muted">
                Point State Park + North Shore
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">500K+</p>
              <p className="text-sm text-muted">Expected visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-muted text-center">
          <span>Built by a Cranberry Township local</span>
          <span>Data from 27 Reddit threads</span>
          <span>12 competitor sites analyzed</span>
          <span>70+ businesses researched</span>
          <span>Updated March 2026</span>
        </div>
      </section>

      {/* Guide sections */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Everything You Need for Draft Weekend
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-white border border-border rounded-lg p-5 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-bold mb-1">{link.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* What is the draft */}
      <section className="bg-surface border-y border-border py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            What Is the NFL Draft, and Why Are 500,000 People Coming?
          </h2>
          <p className="text-muted mb-4">
            If you're wondering why half a million people would show up to watch
            names get read off a list, you're not alone. Reddit is full of that
            question. Here's the short version: the NFL Draft isn't just a
            draft. It's a three-day football festival.
          </p>
          <p className="text-muted mb-4">
            The main stage at Acrisure Stadium on the North Shore is where teams
            make their picks. But across the river at Point State Park, there's
            the NFL Draft Experience -- a free fan zone with a 40-yard dash,
            field goal challenge, autograph stage, Lombardi Trophy photo ops,
            and a whole lot more.
          </p>
          <p className="text-muted mb-4">
            Add free concerts, a 5K race, drone shows, a charity food event
            called Taste of the Draft, and the fact that 9 NFL team markets are
            within a 6-hour drive of Pittsburgh, and you've got the biggest
            event this city has ever hosted.
          </p>
          <p className="text-muted">
            Detroit drew 775,000 visitors in 2024. Nashville drew 600,000 in
            2019. Pittsburgh is aiming to top both. The economic impact is
            projected at $120-200 million.
          </p>
        </div>
      </section>

      {/* Draft schedule quick overview */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Draft Schedule at a Glance</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-border">
            <div className="text-center min-w-[60px]">
              <p className="text-sm font-semibold text-primary">THU</p>
              <p className="text-lg font-bold">Apr 23</p>
            </div>
            <div>
              <p className="font-bold">Round 1</p>
              <p className="text-sm text-muted">
                Starts at 8:00 PM ET. Gates open at 12:00 PM. The biggest night
                of the draft. Expect the largest crowds.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-border">
            <div className="text-center min-w-[60px]">
              <p className="text-sm font-semibold text-primary">FRI</p>
              <p className="text-lg font-bold">Apr 24</p>
            </div>
            <div>
              <p className="font-bold">Rounds 2-3</p>
              <p className="text-sm text-muted">
                Starts at 7:00 PM ET. Gates open at 12:00 PM. Slightly smaller
                crowds. Great day for the Draft Experience fan zone.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-border">
            <div className="text-center min-w-[60px]">
              <p className="text-sm font-semibold text-primary">SAT</p>
              <p className="text-lg font-bold">Apr 25</p>
            </div>
            <div>
              <p className="font-bold">Rounds 4-7</p>
              <p className="text-sm text-muted">
                Starts at 12:00 PM ET. Gates open at 9:00 AM. Locals say this
                is the best day. Less chaos, featured concert, PicksBURGH 5K in
                the morning.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/schedule"
            className="text-primary font-semibold hover:underline"
          >
            Full schedule, bag policy, and registration info &rarr;
          </Link>
        </div>
      </section>

      {/* Cranberry callout */}
      <section className="bg-primary-dark text-white py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-2">
            Coming from Cranberry Township or the Northern Suburbs?
          </h2>
          <p className="text-gray-300 mb-4">
            The T light rail doesn't go north. But there are park-and-ride
            options that'll get you downtown in 25 minutes. We wrote a guide
            specifically for you.
          </p>
          <Link
            href="/cranberry-township"
            className="inline-block bg-accent hover:bg-accent-dark text-foreground font-bold py-2.5 px-5 rounded-lg transition-colors"
          >
            Cranberry Township Draft Guide
          </Link>
        </div>
      </section>

      {/* Email capture */}
      <div className="max-w-3xl mx-auto px-4">
        <EmailCapture />
      </div>

      {/* Budget callout */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-xl font-bold mb-2">Draft Weekend on a Budget</h2>
        <p className="text-muted mb-4">
          Hotels downtown are $500-2,000 a night. Parking garages are charging
          $100+. But the draft itself is free, and there are ways to do this
          weekend without emptying your bank account.
        </p>
        <Link
          href="/budget-guide"
          className="text-primary font-semibold hover:underline"
        >
          Read the budget guide &rarr;
        </Link>
      </section>
    </>
  );
}
