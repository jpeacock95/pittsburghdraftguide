import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "PicksBURGH Music Crawl: 13 Venues the Night Before the Draft",
  description:
    "The PicksBURGH Music Crawl hits 13 venues across Pittsburgh on Wednesday, April 22. Free shows, jazz, metal, EDM, and commemorative guitar picks. Full venue list and times.",
};

const faqs = [
  {
    question: "What is the PicksBURGH Music Crawl?",
    answer:
      "It's a city-wide music event on Wednesday, April 22, the night before the 2026 NFL Draft. 13 venues across multiple Pittsburgh neighborhoods host live music from 4:45 PM to 2 AM. It's organized by VisitPittsburgh and the Pittsburgh Downtown Partnership. Some venues are free, some charge a cover.",
  },
  {
    question: "Is the PicksBURGH Music Crawl free?",
    answer:
      "Some venues are free: Park House, Elks Lodge #339, The Original Pittsburgh Winery, White Rabbit at One Oxford Centre, and Heinz Hall Garden. Others charge a cover fee. Check each venue's listing for details.",
  },
  {
    question: "Do I need tickets for the Music Crawl?",
    answer:
      "Most venues are walk-up. Some ticketed venues may sell out. Check individual venue pages for ticket info. Market Square is open to everyone with no tickets needed.",
  },
  {
    question: "Where does the PicksBURGH Music Crawl start?",
    answer:
      "It kicks off at Market Square in Downtown Pittsburgh at 4:45 PM with DJ Arie Cole, followed by NASH-V.ILL and Big Jus & Steeltown Horns. From there, the crawl spreads across 13 venues in Downtown, the Strip District, South Side, North Side, and Lawrenceville.",
  },
];

export default function MusicCrawlPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          {
            name: "PicksBURGH Music Crawl",
            href: "/blog/picksburgh-music-crawl",
          },
        ]}
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / PicksBURGH Music Crawl
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            PicksBURGH Music Crawl: 13 Venues, One Night Before the Draft
          </h1>
          <p className="text-gray-300">
            Wednesday, April 22. The night before the NFL Draft. 13 venues.
            Every genre from jazz to metal. Free guitar picks at every stop.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">

        {/* Overview */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            What Is the Music Crawl?
          </h2>
          <p className="text-muted mb-3">
            VisitPittsburgh and the Pittsburgh Downtown Partnership are turning the night before the draft into a city-wide music event. It's called the <strong>PicksBURGH Music Crawl</strong>, and it hits 13 venues across Downtown, the Strip District, South Side, North Side, and Lawrenceville.
          </p>
          <p className="text-muted mb-3">
            Everything starts at Market Square at 4:45 PM with a ribbon cutting for the newly renovated space, followed by live performances. From there, you pick your path across 13 venues with genres spanning hip-hop, jazz, reggae, metal, EDM, classical, and more.
          </p>
          <p className="text-muted">
            Every venue has <strong>commemorative PicksBURGH guitar picks</strong>. Collect them all if you're into that sort of thing.
          </p>
        </section>

        {/* Market Square Kickoff */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Market Square Kickoff (4:45-7:00 PM)
          </h2>
          <p className="text-muted mb-4">
            The crawl starts at Market Square with a ribbon cutting followed by three performances. This is the gathering point before everyone fans out across the city.
          </p>
          <div className="space-y-3">
            <div className="border-l-2 border-accent pl-4">
              <p className="font-semibold text-sm">4:45-5:00 PM: DJ Arie Cole</p>
              <p className="text-xs text-muted">Sets the vibe before the ribbon cutting</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-semibold text-sm">5:00-5:45 PM: NASH-V.ILL</p>
              <p className="text-xs text-muted">Live performance right after the grand reopening</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-semibold text-sm">6:00-6:50 PM: Big Jus &amp; Steeltown Horns</p>
              <p className="text-xs text-muted">Full band set to close out the Market Square stage</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-semibold text-sm">6:50-7:00 PM: DJ Arie Cole</p>
              <p className="text-xs text-muted">Closing set at Market Square</p>
            </div>
          </div>
        </section>

        {/* All 13 Venues */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            All 13 Venues
          </h2>
          <p className="text-muted mb-4">
            Here's every venue on the crawl with times, genres, and which ones are free. Sorted roughly by start time so you can plan your route.
          </p>
          <div className="space-y-3">
            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">Heinz Hall Garden &amp; Open House</p>
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">FREE</span>
              </div>
              <p className="text-xs text-muted">Downtown &middot; 4:00-9:00 PM &middot; Classical / Live Performances</p>
              <p className="text-sm text-muted mt-1">Open house at Pittsburgh's iconic concert hall. Live classical performances in the garden. Walk through the building if you've never been inside.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">The Original Pittsburgh Winery</p>
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">FREE</span>
              </div>
              <p className="text-xs text-muted">Strip District &middot; 5:00-7:30 PM &middot; Pop / Rock Covers</p>
              <p className="text-sm text-muted mt-1">Live cover band at Pittsburgh's first urban winery. Wine, snacks, and an early evening vibe before the later shows kick off.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">August Wilson African American Cultural Center</p>
              </div>
              <p className="text-xs text-muted">Downtown &middot; 5:30-8:00 PM &middot; R&amp;B / Funk / Jazz</p>
              <p className="text-sm text-muted mt-1">Named after Pittsburgh's own August Wilson. Expect a soulful, classy set in one of Downtown's best cultural venues.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">Howl at the Moon</p>
              </div>
              <p className="text-xs text-muted">Downtown &middot; Doors 6:00 PM, Show 7:00 PM &middot; Pop / Party Hits</p>
              <p className="text-sm text-muted mt-1">Dueling piano bar with high-energy pop covers. This place gets loud and fun fast.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">Con Alma</p>
              </div>
              <p className="text-xs text-muted">Downtown &middot; 7:00-10:00 PM &middot; International Jazz</p>
              <p className="text-sm text-muted mt-1">Intimate jazz club. If you want something more refined than a bar crawl, this is your stop.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">The Government Center</p>
              </div>
              <p className="text-xs text-muted">North Side &middot; 7:00 PM &middot; Indie / Punk / Metal</p>
              <p className="text-sm text-muted mt-1">For the heavier side of Pittsburgh's music scene. Walking distance from the draft venues on the North Shore.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">White Rabbit at One Oxford Centre</p>
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">FREE</span>
              </div>
              <p className="text-xs text-muted">Downtown &middot; Doors 7:00 PM, Show 8:00 PM &middot; Live Party Concert</p>
              <p className="text-sm text-muted mt-1">Free show in the heart of Downtown. Good spot to catch a set without committing to a cover charge.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">Elks Lodge #339</p>
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">FREE</span>
              </div>
              <p className="text-xs text-muted">North Side &middot; Doors 7:15 PM, Show 8:00 PM &middot; Banjo Night</p>
              <p className="text-sm text-muted mt-1">Yes, banjo night. At an Elks Lodge. On the North Side. This is the most Pittsburgh thing on the entire list.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">Park House</p>
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">FREE</span>
              </div>
              <p className="text-xs text-muted">North Side &middot; 8:00-11:00 PM &middot; Soul / Blues / Americana</p>
              <p className="text-sm text-muted mt-1">Cozy North Side bar with soul, blues, and Americana. Free show. Close to the draft venues.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">Club Cafe</p>
              </div>
              <p className="text-xs text-muted">South Side &middot; Doors 7:00 PM, Show 8:00 PM &middot; Reggae</p>
              <p className="text-sm text-muted mt-1">Legendary South Side listening room. Reggae night is a nice change of pace from the football energy.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">Thunderbird Cafe</p>
              </div>
              <p className="text-xs text-muted">Lawrenceville &middot; Doors 7:00 PM, Show 8:00 PM &middot; Jam Band / Tribute</p>
              <p className="text-sm text-muted mt-1">Lawrenceville staple for live music. Jam band and tribute acts. Grab dinner on Butler Street before the show.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">Spirit Hall</p>
              </div>
              <p className="text-xs text-muted">Lawrenceville &middot; Doors 7:00 PM, Show 8:00 PM &middot; Metal</p>
              <p className="text-sm text-muted mt-1">If Lawrenceville metal is your thing, Spirit Hall delivers. Not for the faint of heart.</p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <p className="font-bold">Enclave</p>
              </div>
              <p className="text-xs text-muted">South Side &middot; 10:30 PM-2:00 AM &middot; EDM / DJ</p>
              <p className="text-sm text-muted mt-1">Late-night EDM on the South Side. This is where you end up if you're still going at midnight.</p>
            </div>
          </div>
        </section>

        {/* How to Do the Crawl */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            How to Do the Crawl
          </h2>
          <p className="text-muted mb-3">
            You're not going to hit all 13 venues in one night. Pick 3-4 based on your music taste and build a route. Here are some suggestions.
          </p>
          <div className="space-y-4">
            <div className="border-l-2 border-accent pl-4">
              <p className="font-semibold text-sm">The Downtown Loop (walkable)</p>
              <p className="text-sm text-muted">Market Square (4:45) &rarr; Heinz Hall (5:00) &rarr; August Wilson Center (5:30) &rarr; Con Alma (7:00) &rarr; White Rabbit (8:00). All within a 10-minute walk of each other.</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-semibold text-sm">The North Side Route (near draft venues)</p>
              <p className="text-sm text-muted">Market Square (4:45) &rarr; The Government Center (7:00) &rarr; Elks Lodge (8:00) &rarr; Park House (8:00). All on the North Side within walking distance of Acrisure Stadium.</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-semibold text-sm">The Late Night Route</p>
              <p className="text-sm text-muted">Market Square (4:45) &rarr; Thunderbird Cafe in Lawrenceville (8:00) &rarr; Enclave on the South Side (10:30). You'll need a rideshare between neighborhoods.</p>
            </div>
          </div>
          <div className="card-minimal p-4 mt-4">
            <p className="font-semibold text-sm mb-1">Transit Tips for the Crawl</p>
            <ul className="text-sm text-muted space-y-1 list-disc pl-5">
              <li>The T is free April 23-25 but not on Wednesday April 22. Regular PRT fares apply.</li>
              <li>Downtown and North Side venues are all walkable from each other.</li>
              <li>Lawrenceville and South Side require a rideshare or bus from Downtown.</li>
              <li>If you're staying on the North Shore for the draft, stick to Downtown + North Side venues.</li>
            </ul>
          </div>
          <p className="text-sm text-muted mt-3">
            <Link
              href="/getting-around"
              className="text-primary font-semibold hover:underline"
            >
              Full transit guide for draft week &rarr;
            </Link>
          </p>
        </section>

        {/* FAQ section */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-6">Music Crawl FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-minimal p-5">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-heading mb-2">
            Plan the Rest of Your Draft Week
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            The Music Crawl is just Wednesday night. Here's everything else happening.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/schedule"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Full Draft Schedule
            </Link>
            <Link
              href="/getting-around"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Getting Around
            </Link>
            <Link
              href="/bars-restaurants"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Bars &amp; Restaurants
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
