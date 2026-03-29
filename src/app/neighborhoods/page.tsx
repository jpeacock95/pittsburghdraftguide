import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "Pittsburgh Neighborhoods Guide for Draft Visitors",
  description:
    "Where to eat, drink, and explore in Pittsburgh during the NFL Draft. North Shore, Strip District, South Side, Lawrenceville, and more.",
};

const neighborhoods = [
  {
    name: "North Shore",
    slug: "north-shore",
    vibe: "Sports central. Loud, packed, and buzzing with energy all draft weekend. This is ground zero.",
    bestFor: "Die-hard football fans, people who want to be in the middle of it all",
    gettingThere:
      "You're already here. The Draft Main Stage is at Acrisure Stadium. PNC Park is next door. Walk everywhere.",
    spots: [
      {
        name: "Tom's Watch Bar",
        desc: "Steps from Acrisure Stadium. Massive video walls. Built for events like this.",
      },
      {
        name: "Shorty's Goodtimes Bar",
        desc: "Hosting Steve Aoki (draft eve), Nelly (day 1), and 2 Chainz (day 2). THE after-party spot.",
      },
      {
        name: "Federal Galley",
        desc: "Food hall with 4 restaurant concepts and a full bar. Half-off drafts during happy hour. Great when your group can't agree on a restaurant.",
      },
      {
        name: "Mike's Beer Bar",
        desc: "500+ beers and 80 rotating taps. Right next to PNC Park. If you like craft beer, you'll lose an hour here.",
      },
    ],
  },
  {
    name: "Downtown / Market Square",
    slug: "downtown",
    vibe: "Business district turned festival zone. Point State Park hosts the Draft Experience. Market Square is the downtown gathering spot with solid restaurants and cocktail bars.",
    bestFor: "Families, foodies, people who want the Draft Experience attractions",
    gettingThere:
      "15-min walk from North Shore across Roberto Clemente Bridge (pedestrian-only during draft). Or take the T one stop from Allegheny Station. Free ride.",
    spots: [
      {
        name: "Bridges & Bourbon",
        desc: "High-end cocktail bar downtown. Whiskey list is serious. Good date night spot.",
      },
      {
        name: "Butcher and the Rye",
        desc: "Craft cocktails and New American food. One of the best whiskey bars in the city.",
      },
      {
        name: "The Original Oyster House",
        desc: "Oldest restaurant in Pittsburgh. It's a landmark. Tourists love it for a reason.",
      },
      {
        name: "Condado Tacos",
        desc: "Build-your-own tacos near Market Square. Affordable, casual, and perfect for groups.",
      },
    ],
  },
  {
    name: "Strip District",
    slug: "strip-district",
    vibe: "Pittsburgh's foodie neighborhood. Markets, street vendors, international food, and craft distilleries packed into a few walkable blocks. Saturday morning here is quintessential Pittsburgh.",
    bestFor: "Foodies, morning people, anyone who wants the real Pittsburgh experience",
    gettingThere:
      "10-min walk from Point State Park. 15 min from North Shore. Head east along the river.",
    spots: [
      {
        name: "Pamela's Diner",
        desc: "Pittsburgh's most famous breakfast. Thin, crispy pancakes. Over 1,000 TripAdvisor reviews. Expect a line draft weekend.",
      },
      {
        name: "DiAnoia's Eatery",
        desc: "Italian market and restaurant with 1,200+ Yelp reviews. Fresh pasta that'll ruin every other Italian restaurant for you.",
      },
      {
        name: "The PA Market",
        desc: "European-inspired food hall. Two floors: cocktail bars, food vendors, wine garden. 14,000 square feet of good decisions.",
      },
      {
        name: "Wigle Whiskey Distillery",
        desc: "Local craft whiskey with a tasting room. Unique Pittsburgh experience you won't find anywhere else.",
      },
    ],
  },
  {
    name: "South Side / Carson Street",
    slug: "south-side",
    vibe: "80+ bars crammed into about 10 blocks. THE nightlife destination. This is where draft visitors go after the picks end for the night. Gets rowdy after 10pm. You've been warned.",
    bestFor: "Nightlife seekers, bar crawlers, anyone under 40 who wants to party",
    gettingThere:
      "10-15 min by Uber from downtown. Or take the 10th Street Bridge on foot (about a 20-min walk from Point State Park). Free street parking if you're driving.",
    spots: [
      {
        name: "Hofbrauhaus Pittsburgh",
        desc: "Authentic German beer hall with live music. Massive steins, pretzels, and a crowd that gets louder every hour.",
      },
      {
        name: "Pins Mechanical",
        desc: "Pinball, duckpin bowling, and craft drinks. Fun group activity that doesn't require shouting over music.",
      },
      {
        name: "Jack's Bar",
        desc: "#1 bar on TripAdvisor for the South Side. Great atmosphere, solid food, and drinks that won't bankrupt you.",
      },
      {
        name: "Acacia",
        desc: "Craft cocktails in an upscale setting. If you want South Side energy without the dive bar vibe.",
      },
    ],
  },
  {
    name: "Lawrenceville",
    slug: "lawrenceville",
    vibe: "Trendy restaurants and the best brewery density in Pittsburgh. More hip and foodie than sports bar. Butler Street is lined with independent shops, breweries, and some of the city's best food.",
    bestFor: "Craft beer lovers, foodies, couples, anyone who says 'gastropub' unironically",
    gettingThere:
      "10-15 min Uber from downtown. Not walkable from the draft venues. Worth the ride.",
    spots: [
      {
        name: "Church Brew Works",
        desc: "A brewery inside a converted Catholic church. The altar is the brew kettle. One of the most unique dining spots in the country.",
      },
      {
        name: "Grist House Craft Brewery",
        desc: "Huge outdoor patio. Dog-friendly. Great beer. If the weather cooperates, this is the move.",
      },
      {
        name: "Dancing Gnome Brewery",
        desc: "Made Hop Culture's best breweries list. IPAs that hop heads travel for.",
      },
      {
        name: "Cinderlands Foederhouse",
        desc: "Belgian-style foederbier in a cozy Lawrenceville space. For the beer nerd who's done with IPAs.",
      },
    ],
  },
  {
    name: "Mt. Washington",
    slug: "mt-washington",
    vibe: "The best views of the city. Period. Come here for sunset photos and a nice dinner. The inclines (basically cable cars up the mountain) are a must-do Pittsburgh experience. USA Today ranked it the best city view in America.",
    bestFor: "Couples, photographers, anyone who wants a great dinner with a view",
    gettingThere:
      "10 min from downtown by car. Or ride the Monongahela Incline from Station Square (a few bucks each way). The Duquesne Incline is another option from the North Side.",
    spots: [
      {
        name: "Altius",
        desc: "4.6 stars on TripAdvisor (845 reviews). Contemporary American with the best view in the city. Chef Jessica Bauer. Reservations required draft weekend.",
      },
      {
        name: "Monterey Bay Fish Grotto",
        desc: "Seafood atop Mt. Washington with 1,077 TripAdvisor reviews. Skyline views while you eat.",
      },
      {
        name: "Duquesne Incline",
        desc: "Historic cable car to the top. THE must-do Pittsburgh tourist experience. The observation deck at the top is free.",
      },
      {
        name: "Shiloh Gastro",
        desc: "Not fancy, no view, but great food on a side street near the Mon Incline. Hidden gem for foodies who skip the tourist spots.",
      },
    ],
  },
  {
    name: "Station Square",
    slug: "station-square",
    vibe: "Riverfront entertainment complex across from downtown. Restaurants, shops, and the Gateway Clipper river cruises. Less chaotic than North Shore or South Side. Good for families and people who want options without the crush.",
    bestFor: "Families, casual visitors, anyone catching the Gateway Clipper ferry",
    gettingThere:
      "Right across the Smithfield Street Bridge from downtown. The T stops here (Station Square stop). Or ride the Monongahela Incline up to Mt. Washington from here.",
    spots: [
      {
        name: "Grand Concourse",
        desc: "Fine dining inside a stunning historic train station. Beautiful woodwork. Worth it for the building alone.",
      },
      {
        name: "Gateway Clipper Fleet",
        desc: "Riverboat service running between North Shore and downtown all draft weekend. It's transportation AND entertainment.",
      },
      {
        name: "Hofbrauhaus (yes, another one)",
        desc: "German beer hall in a riverfront setting. If you missed the South Side location.",
      },
      {
        name: "Texas de Brazil",
        desc: "All-you-can-eat Brazilian steakhouse. Bring an empty stomach and a willingness to overeat.",
      },
    ],
  },
  {
    name: "Oakland",
    slug: "oakland",
    vibe: "University area. Pitt and Carnegie Mellon are here. More cultural than party. The Carnegie Museums, Cathedral of Learning, and Phipps Conservatory make this a solid half-day trip if you want a break from the draft chaos.",
    bestFor: "Culture seekers, families with older kids, museum lovers",
    gettingThere:
      "15 min from downtown by bus (many routes run to Oakland). Not walkable from draft venues. Easy Uber.",
    spots: [
      {
        name: "Carnegie Museum of Art + Natural History",
        desc: "Two world-class museums in one building. Dinosaur skeletons, gems, fine art. One ticket covers both.",
      },
      {
        name: "Phipps Conservatory",
        desc: "Gorgeous botanical garden and greenhouse. Peaceful escape from 500,000 football fans.",
      },
      {
        name: "Cathedral of Learning",
        desc: "42-story Gothic tower at Pitt. 30 Nationality Rooms inside. Free to walk in and look around. Incredible architecture.",
      },
      {
        name: "The Porch at Schenley",
        desc: "Solid restaurant right at the edge of Schenley Park. Good food, nice patio, chill vibe.",
      },
    ],
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Neighborhoods", href: "/neighborhoods" },
        ]}
      />

      {/* Hero */}
      <section
        className="relative text-white py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/pgh-clemente-bridge.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary-dark/75" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            Pittsburgh Neighborhoods Guide for Draft Visitors
          </h1>
          <p className="text-gray-300">
            Pittsburgh isn't just the draft venues. It's a city of
            neighborhoods, and each one has its own personality. Here's where to
            eat, drink, and explore while you're in town.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <LastUpdated date="March 29, 2026" />

        {/* Quick nav */}
        <section className="mb-14">
          <h2 className="text-xl font-heading mb-3">Jump to a Neighborhood</h2>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((n) => (
              <a
                key={n.slug}
                href={`#${n.slug}`}
                className="px-3 py-1.5 text-sm font-semibold hover:bg-primary-dark hover:text-white transition-colors text-muted"
              >
                {n.name}
              </a>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="mb-14">
          <p className="text-muted mb-3">
            The 2026 NFL Draft has two main venues: the Draft Theater at
            Acrisure Stadium on the{" "}
            <strong>North Shore</strong> and the Draft Experience at{" "}
            <strong>Point State Park</strong> downtown. They're connected by
            Roberto Clemente Bridge (pedestrian-only during draft weekend) and
            the T light rail (free fare zone).
          </p>
          <p className="text-muted">
            But you didn't come to Pittsburgh just to stand in one spot. These 8
            neighborhoods are all worth exploring. Each section below tells you
            the vibe, the top spots, how to get there from the draft, and who
            it's best for.
          </p>
        </section>

        <div className="rounded-lg overflow-hidden mb-8">
          <iframe
            src="https://www.youtube.com/embed/a6g67ib1fxw"
            width="100%"
            height="350"
            className="border-0"
            allowFullScreen
            loading="lazy"
            title="Pittsburgh, Pennsylvania In 4K By Drone"
          />
        </div>

        <Image
          src="/pgh-clemente-bridge.jpg"
          alt="Roberto Clemente Bridge and Pittsburgh skyline from the North Shore"
          width={800}
          height={450}
          className="rounded-lg w-full h-auto mb-8"
        />

        {/* Neighborhood cards */}
        {neighborhoods.map((neighborhood) => (
          <section
            key={neighborhood.slug}
            id={neighborhood.slug}
            className="mb-14 scroll-mt-20"
          >
            <div className="overflow-hidden">
              <div className="bg-primary-dark text-white p-5">
                <h2 className="text-2xl font-heading">{neighborhood.name}</h2>
                <p className="text-gray-300 text-sm mt-1">
                  {neighborhood.vibe}
                </p>
              </div>

              <div className="p-5">
                <div className="flex flex-col sm:flex-row gap-4 mb-5">
                  <div className="flex-1 border-l-2 border-accent pl-4">
                    <p className="text-xs font-bold text-foreground uppercase mb-1">
                      Best for
                    </p>
                    <p className="text-sm text-muted">
                      {neighborhood.bestFor}
                    </p>
                  </div>
                  <div className="flex-1 border-l-2 border-accent pl-4">
                    <p className="text-xs font-bold text-foreground uppercase mb-1">
                      Getting there
                    </p>
                    <p className="text-sm text-muted">
                      {neighborhood.gettingThere}
                    </p>
                  </div>
                </div>

                <h3 className="font-bold mb-3">Top Spots</h3>
                <div className="space-y-3">
                  {neighborhood.spots.map((spot) => (
                    <div
                      key={spot.name}
                      className="border-l-2 border-accent pl-4"
                    >
                      <p className="font-semibold text-sm">{spot.name}</p>
                      <p className="text-sm text-muted">{spot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <Image
          src="/pgh-incline-view.jpg"
          alt="View of Pittsburgh skyline from the top of the Duquesne Incline"
          width={800}
          height={450}
          className="rounded-lg w-full h-auto mb-8"
        />

        {/* Pro tips */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Quick Tips for Exploring Pittsburgh
          </h2>
          <div className="space-y-3">
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground text-sm mb-1">
                Saturday morning in the Strip District
              </p>
              <p className="text-sm text-muted">
                This is the quintessential Pittsburgh experience. Markets, street
                vendors, fresh produce, imported Italian goods. Get there before
                10am for the best experience. It's draft day 3, so the rest of
                the city won't be as crazy yet.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground text-sm mb-1">
                Uber away from the venues
              </p>
              <p className="text-sm text-muted">
                Surge pricing right at Acrisure Stadium or Point State Park will
                be brutal. Walk 3-4 blocks in any direction before you request a
                ride. You'll save $20-30 easily.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground text-sm mb-1">
                The T is free downtown
              </p>
              <p className="text-sm text-muted">
                Pittsburgh's light rail (called "the T") runs through a free
                fare zone that covers downtown and the North Shore. Use it to
                hop between the two draft venues. Allegheny Station serves the
                North Shore side.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground text-sm mb-1">
                Reservations everywhere
              </p>
              <p className="text-sm text-muted">
                If you want a sit-down dinner at any of the restaurants listed
                here, book it now. Draft weekend will be the busiest restaurant
                weekend Pittsburgh has seen in years. Walk-in waits of 90+ minutes
                are realistic at popular spots.
              </p>
            </div>
          </div>
        </section>

        {/* Thinking about moving */}
        <section className="mb-8">
          <p className="text-muted leading-relaxed mb-3">
            <strong>Thinking about living here?</strong> A lot of people come for
            an event and end up falling in love with Pittsburgh. If that's you
            and you want to know what it's really like to live in any of these
            neighborhoods,{" "}
            <TrackedLink href="https://danteegizio.remax.com/" partner="dante" action="remax_profile" page="neighborhoods" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              Dante Egizio
            </TrackedLink>{" "}
            is a friend of mine who's been helping people buy and sell homes here
            for 7 years. He lives in Ohio Township and knows every one of these
            areas firsthand. He can tell you the stuff that doesn't show up on
            Realtor.com.
          </p>
          <p className="text-xs text-gray-500">
            Dante Egizio, Associate Broker, RE/MAX Select Realty | 400 Broad St.
            Suite 2006, Sewickley, PA 15143 | (724) 933-6300 | (412) 347-8125 |
            PA License #AB069313 | Brokerage License #RB063030C | Equal Housing
            Opportunity
          </p>
        </section>

        {/* Cross-links */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-heading mb-2">
            Plan the rest of your trip
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Now that you know the neighborhoods, figure out how to get around
            and where to eat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/getting-around"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Getting Around
            </Link>
            <Link
              href="/bars-restaurants"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Bars &amp; Restaurants
            </Link>
            <Link
              href="/parking-transportation"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Parking Guide
            </Link>
            <Link
              href="/cranberry-township"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Cranberry Township
            </Link>
          </div>
        </section>
      </article>

      <RelatedPages current="neighborhoods" slugs={["food", "getting_around", "hotels", "itinerary"]} />
    </>
  );
}
