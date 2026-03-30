import type { Metadata } from "next";
import Link from "next/link";
import { EventSchema } from "@/components/schema/EventSchema";
import { WebSiteSchema } from "@/components/schema/WebSiteSchema";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { RelatedPages } from "@/components/ui/RelatedPages";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh 2026: Your Complete Guide",
  description:
    "The ultimate guide to the 2026 NFL Draft in Pittsburgh. Parking, hotels, restaurants, schedule, and everything you need for April 23-25 at Point State Park and Acrisure Stadium.",
};

const guides = [
  {
    href: "/parking-transportation",
    label: "Essential",
    title: "Parking & Transportation",
    desc: "Where to park, park-and-ride options, road closures, and why officials say don't drive.",
  },
  {
    href: "/where-to-stay",
    label: "Essential",
    title: "Where to Stay",
    desc: "Hotels from $120/night in Cranberry to $2,000 downtown. Plus Airbnb and budget alternatives.",
  },
  {
    href: "/bars-restaurants",
    label: "Food & Drink",
    title: "Bars & Restaurants",
    desc: "44 spots to eat and drink near both venues, organized by neighborhood.",
  },
  {
    href: "/schedule",
    label: "Planning",
    title: "Schedule & What to Expect",
    desc: "Round-by-round times, free entry, bag policy, and concerts.",
  },
  {
    href: "/faq",
    label: "Planning",
    title: "FAQ",
    desc: "Answers to the 20 most-asked questions about the draft.",
  },
  {
    href: "/cranberry-township",
    label: "Local",
    title: "From Cranberry Township",
    desc: "Park-and-ride, bus routes, and tips from the northern suburbs.",
  },
];

export default function HomePage() {
  return (
    <>
      <EventSchema />
      <WebSiteSchema />

      {/* Hero - cinematic full-bleed */}
      <section
        className="photo-section text-white py-32 md:py-44"
        style={{ backgroundImage: "url('/pgh-skyline-night.jpg')" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="label text-accent/90 mb-5">
            April 23&ndash;25, 2026
          </p>
          <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
            Your Complete Guide to the<br className="hidden md:block" /> 2026 NFL Draft in Pittsburgh
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
            500,000+ visitors. Three days. Two venues connected by a river.
            Everything you need to know.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/parking-transportation"
              className="bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-7 rounded transition-colors"
            >
              Parking Guide
            </Link>
            <Link
              href="/schedule"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-7 rounded border border-white/20 transition-colors backdrop-blur-sm"
            >
              See the Schedule
            </Link>
          </div>
          <div className="max-w-xs mx-auto">
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Quick facts - minimal strip */}
      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-heading text-2xl text-foreground">Apr 23&ndash;25</p>
              <p className="text-xs text-muted mt-1">Thursday&ndash;Saturday</p>
            </div>
            <div>
              <p className="font-heading text-2xl text-foreground">Free Entry</p>
              <p className="text-xs text-muted mt-1">Register with <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">OnePass</a></p>
            </div>
            <div>
              <p className="font-heading text-2xl text-foreground">2 Venues</p>
              <p className="text-xs text-muted mt-1">Point State Park + North Shore</p>
            </div>
            <div>
              <p className="font-heading text-2xl text-foreground">500K+</p>
              <p className="text-xs text-muted mt-1">Expected visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free transit - understated bar */}
      <section className="bg-primary-dark text-white py-3">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm">
            All T light rail and most PRT buses are <strong>free</strong> April 23&ndash;25.{" "}
            <Link href="/getting-around" className="text-accent hover:underline">
              See all free transit options
            </Link>
          </p>
        </div>
      </section>

      {/* Trust line */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-center text-xs text-muted tracking-wide">
          Built by a Cranberry Township local &middot; Data from 27 Reddit threads &middot; 70+ businesses researched &middot; Updated March 2026
        </p>
      </section>

      {/* Guides - editorial grid */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Everything You Need for Draft Weekend
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {guides.map((g) => (
            <Link key={g.href} href={g.href} className="group block">
              <p className="label mb-2">{g.label}</p>
              <h3 className="text-xl md:text-2xl group-hover:text-accent transition-colors mb-2">
                {g.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>

        {/* Email capture - right after guide grid, before they click away */}
        <div className="mt-12">
          <EmailCapture />
        </div>
      </section>

      {/* What is the draft - editorial prose */}
      <section className="bg-surface-alt py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="label mb-4">Background</p>
          <h2 className="text-3xl md:text-4xl mb-8">
            What Is the NFL Draft, and Why Are 500,000 People Coming?
          </h2>
          <div className="text-muted space-y-5 leading-relaxed">
            <p>
              If you're wondering why half a million people would show up to watch
              names get read off a list, you're not alone. Reddit is full of that
              question. Here's the short version: the NFL Draft isn't just a
              draft. It's a three-day football festival.
            </p>
            <p>
              The main stage at Acrisure Stadium on the North Shore is where teams
              make their picks. But across the river at Point State Park, there's
              the NFL Draft Experience, a free fan zone with a 40-yard dash,
              field goal challenge, autograph stage, Lombardi Trophy photo ops,
              and a whole lot more.
            </p>
            <p>
              Add free concerts, a 5K race, drone shows, a charity food event
              called Taste of the Draft, and the fact that 9 NFL team markets are
              within a 6-hour drive of Pittsburgh, and you've got the biggest
              event this city has ever hosted.
            </p>
            <p>
              Detroit drew 775,000 visitors in 2024. Nashville drew 600,000 in
              2019. Pittsburgh is aiming to top both. The economic impact is
              projected at $120&ndash;200 million.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden mt-10">
            <iframe
              src="https://www.youtube.com/embed/Q1Rwwi_5Mck"
              width="100%"
              height="380"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="Pittsburgh Selected to Host 2026 NFL Draft"
            />
          </div>
          <p className="text-xs text-muted text-center mt-3">
            Pittsburgh's official announcement as the 2026 NFL Draft host city
          </p>
        </div>
      </section>

      {/* Schedule overview - dark cinematic section */}
      <section
        className="photo-section text-white py-20"
        style={{ backgroundImage: "url('/pgh-bridge-night.jpg')" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="label mb-4">Schedule</p>
          <h2 className="text-3xl md:text-4xl mb-10">Draft Schedule at a Glance</h2>
          <div className="divide-y divide-white/10">
            {[
              { day: "Thursday", date: "April 23", label: "Round 1", time: "8:00 PM ET", desc: "Gates open at noon. The biggest night. Expect the largest crowds." },
              { day: "Friday", date: "April 24", label: "Rounds 2-3", time: "7:00 PM ET", desc: "Gates open at noon. Slightly smaller crowds. Great day for the Draft Experience." },
              { day: "Saturday", date: "April 25", label: "Rounds 4-7", time: "12:00 PM ET", desc: "Gates open at 9 AM. Locals say this is the best day. PicksBURGH 5K in the morning." },
            ].map((item) => (
              <div key={item.day} className="flex items-start gap-6 py-6 first:pt-0">
                <div className="min-w-[80px] shrink-0">
                  <p className="text-accent font-semibold text-sm">{item.day}</p>
                  <p className="text-gray-400 text-xs">{item.date}</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <p className="font-heading text-xl">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.time}</p>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/schedule"
              className="text-accent font-semibold hover:underline underline-offset-4 text-sm"
            >
              Full schedule, bag policy, and registration info &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Cranberry callout */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="label mb-4">Northern Suburbs</p>
          <h2 className="text-3xl mb-4">
            Coming from Cranberry Township?
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto leading-relaxed">
            The T light rail doesn't go north. But there are park-and-ride
            options that'll get you downtown in 25 minutes. We wrote a guide
            specifically for you.
          </p>
          <Link
            href="/cranberry-township"
            className="inline-block bg-primary-dark hover:bg-primary text-white font-semibold py-3 px-7 rounded transition-colors"
          >
            Cranberry Township Guide
          </Link>
        </div>
      </section>

      {/* Budget callout */}
      <section className="bg-surface-alt py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="label mb-4">Save Money</p>
          <h2 className="text-3xl mb-4">Draft Weekend on a Budget</h2>
          <p className="text-muted mb-6 max-w-md mx-auto leading-relaxed">
            Hotels downtown are $500&ndash;2,000 a night. Parking garages are charging
            $100+. But the draft itself is free, and there are ways to do this
            weekend without emptying your bank account.
          </p>
          <Link
            href="/budget-guide"
            className="text-accent font-semibold hover:underline underline-offset-4"
          >
            Read the budget guide &rarr;
          </Link>
        </div>
      </section>

      <RelatedPages
        current="home"
        slugs={["parking", "schedule", "checklist", "food"]}
      />
    </>
  );
}
