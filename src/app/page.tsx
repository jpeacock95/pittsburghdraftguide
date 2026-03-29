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

export default function HomePage() {
  return (
    <>
      <EventSchema />
      <WebSiteSchema />

      {/* Hero */}
      <section
        className="relative text-white py-28 md:py-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-pittsburgh.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/70 to-primary-dark/90" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">
            April 23&ndash;25, 2026 &bull; Pittsburgh, PA
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Your Complete Guide to the 2026 NFL Draft in Pittsburgh
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            500,000+ visitors. Three days. Two venues connected by a river. This
            is everything you need to know about parking, hotels, food, the
            schedule, and what to actually do during draft weekend.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/parking-transportation"
              className="bg-accent hover:bg-accent-dark text-primary-dark font-bold py-3.5 px-7 rounded-lg transition-colors text-base"
            >
              Parking Guide (Start Here)
            </Link>
            <Link
              href="/schedule"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-7 rounded-lg border border-white/25 transition-colors text-base backdrop-blur-sm"
            >
              See the Schedule
            </Link>
          </div>
          <div className="max-w-sm mx-auto">
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="bg-surface border-b border-border py-7">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-heading text-2xl font-bold text-primary">Apr 23&ndash;25</p>
              <p className="text-sm text-muted mt-0.5">Thu&ndash;Sat, 2026</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-primary">FREE</p>
              <p className="text-sm text-muted mt-0.5">Entry with <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">OnePass</a> app</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-primary">2 Venues</p>
              <p className="text-sm text-muted mt-0.5">Point State Park + North Shore</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-primary">500K+</p>
              <p className="text-sm text-muted mt-0.5">Expected visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free transit banner */}
      <section className="bg-green-800 text-white py-3.5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm font-bold">
            &#x1f689; All T light rail and most PRT buses are FREE April 23&ndash;25.{" "}
            <Link href="/getting-around" className="underline underline-offset-2 hover:text-green-200">
              See all free transit options
            </Link>
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted text-center">
          <span className="flex items-center gap-1">&#128221; Built by a Cranberry Township local</span>
          <span className="flex items-center gap-1">&#128172; Data from 27 Reddit threads</span>
          <span className="flex items-center gap-1">&#128269; 12 competitor sites analyzed</span>
          <span className="flex items-center gap-1">&#127860; 70+ businesses researched</span>
          <span className="flex items-center gap-1">&#128197; Updated March 2026</span>
        </div>
      </section>

      {/* Guide sections -- mixed layout, NOT uniform cards */}
      <section className="bg-surface-alt py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">
            Everything You Need for Draft Weekend
          </h2>

          {/* Top 2 -- large featured cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <Link
              href="/parking-transportation"
              className="group relative bg-surface rounded-xl p-6 border border-border hover:border-accent transition-all hover:shadow-lg"
            >
              <span className="text-3xl mb-3 block">&#128663;</span>
              <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">Parking & Transportation</h3>
              <p className="text-muted text-sm leading-relaxed">Where to park, park-and-ride options, road closures, and why officials say don't drive.</p>
              <span className="text-primary text-sm font-semibold mt-3 inline-block">Read guide &rarr;</span>
            </Link>
            <Link
              href="/where-to-stay"
              className="group relative bg-surface rounded-xl p-6 border border-border hover:border-accent transition-all hover:shadow-lg"
            >
              <span className="text-3xl mb-3 block">&#127976;</span>
              <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">Where to Stay</h3>
              <p className="text-muted text-sm leading-relaxed">Hotels from $120/night in Cranberry to $2,000 downtown. Plus Airbnb and budget alternatives.</p>
              <span className="text-primary text-sm font-semibold mt-3 inline-block">Read guide &rarr;</span>
            </Link>
          </div>

          {/* Bottom 4 -- compact row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/bars-restaurants"
              className="group bg-surface rounded-xl p-5 border border-border hover:border-accent transition-all hover:shadow-md"
            >
              <span className="text-2xl mb-2 block">&#127867;</span>
              <h3 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors">Bars & Restaurants</h3>
              <p className="text-muted text-xs leading-relaxed">44 spots to eat and drink near both venues.</p>
            </Link>
            <Link
              href="/schedule"
              className="group bg-surface rounded-xl p-5 border border-border hover:border-accent transition-all hover:shadow-md"
            >
              <span className="text-2xl mb-2 block">&#128197;</span>
              <h3 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors">Schedule & What to Expect</h3>
              <p className="text-muted text-xs leading-relaxed">Round times, free entry, bag policy.</p>
            </Link>
            <Link
              href="/faq"
              className="group bg-surface rounded-xl p-5 border border-border hover:border-accent transition-all hover:shadow-md"
            >
              <span className="text-2xl mb-2 block">&#10067;</span>
              <h3 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors">FAQ</h3>
              <p className="text-muted text-xs leading-relaxed">Top 20 questions answered.</p>
            </Link>
            <Link
              href="/cranberry-township"
              className="group bg-surface rounded-xl p-5 border border-border hover:border-accent transition-all hover:shadow-md"
            >
              <span className="text-2xl mb-2 block">&#128205;</span>
              <h3 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors">From Cranberry Township</h3>
              <p className="text-muted text-xs leading-relaxed">Park-and-ride, bus routes, tips.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* What is the draft -- editorial style */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-6">
            What Is the NFL Draft, and Why Are 500,000 People Coming?
          </h2>
          <div className="text-muted space-y-4 text-base leading-relaxed">
            <p>
              If you're wondering why half a million people would show up to watch
              names get read off a list, you're not alone. Reddit is full of that
              question. Here's the short version: the NFL Draft isn't just a
              draft. It's a three-day football festival.
            </p>
            <p>
              The main stage at Acrisure Stadium on the North Shore is where teams
              make their picks. But across the river at Point State Park, there's
              the NFL Draft Experience &mdash; a free fan zone with a 40-yard dash,
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

          <div className="rounded-xl overflow-hidden border border-border mt-8 shadow-sm">
            <iframe
              src="https://www.youtube.com/embed/Q1Rwwi_5Mck"
              width="100%"
              height="350"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="Pittsburgh Selected to Host 2026 NFL Draft"
            />
          </div>
          <p className="text-xs text-muted text-center mt-2">
            Watch: Pittsburgh's official announcement as the 2026 NFL Draft host city
          </p>
        </div>
      </section>

      {/* Schedule -- timeline style */}
      <section className="bg-primary-dark text-white py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Draft Schedule at a Glance</h2>
          <div className="space-y-0">
            {[
              { day: "THU", date: "Apr 23", label: "Round 1", desc: "Starts at 8:00 PM ET. Gates open at 12:00 PM. The biggest night of the draft. Expect the largest crowds.", accent: true },
              { day: "FRI", date: "Apr 24", label: "Rounds 2-3", desc: "Starts at 7:00 PM ET. Gates open at 12:00 PM. Slightly smaller crowds. Great day for the Draft Experience fan zone.", accent: false },
              { day: "SAT", date: "Apr 25", label: "Rounds 4-7", desc: "Starts at 12:00 PM ET. Gates open at 9:00 AM. Locals say this is the best day. Less chaos, featured concert, PicksBURGH 5K in the morning.", accent: false },
            ].map((item) => (
              <div key={item.day} className="flex items-start gap-5 py-5 border-b border-white/10 last:border-0">
                <div className={`text-center min-w-[56px] py-2 px-1 rounded-lg ${item.accent ? 'bg-accent text-primary-dark' : 'bg-white/10'}`}>
                  <p className="text-xs font-bold uppercase">{item.day}</p>
                  <p className="text-sm font-bold">{item.date}</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-lg">{item.label}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/schedule"
              className="text-accent font-semibold hover:underline underline-offset-2"
            >
              Full schedule, bag policy, and registration info &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Cranberry callout */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-4xl mb-4 block">&#128652;</span>
          <h2 className="font-heading text-2xl font-bold mb-3">
            Coming from Cranberry Township or the Northern Suburbs?
          </h2>
          <p className="text-muted mb-6 max-w-lg mx-auto">
            The T light rail doesn't go north. But there are park-and-ride
            options that'll get you downtown in 25 minutes. We wrote a guide
            specifically for you.
          </p>
          <Link
            href="/cranberry-township"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
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
      <section className="bg-surface-alt py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold mb-3">Draft Weekend on a Budget</h2>
          <p className="text-muted mb-5 max-w-lg mx-auto">
            Hotels downtown are $500&ndash;2,000 a night. Parking garages are charging
            $100+. But the draft itself is free, and there are ways to do this
            weekend without emptying your bank account.
          </p>
          <Link
            href="/budget-guide"
            className="text-primary font-semibold hover:underline underline-offset-2"
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
