import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh Hotels & Where to Stay",
  description:
    "Hotels for the 2026 NFL Draft are $500-2,000/night downtown. Here are cheaper options in Cranberry Township, McKnight Rd, and along the T line.",
};

const hotelFAQs = [
  {
    question: "How much do hotels cost for the NFL Draft in Pittsburgh?",
    answer:
      "Downtown hotels range from $500 to over $2,000 per night during draft weekend (April 23-25, 2026). Spring Hill Suites on the North Shore was quoted at $2,173/night. Suburban hotels along McKnight Road and in Cranberry Township are significantly cheaper at $100-180/night.",
  },
  {
    question: "Are there any affordable hotels near the NFL Draft in Pittsburgh?",
    answer:
      "Yes. Hotels on McKnight Road run $100-180/night and are on a bus line to downtown. Cranberry Township hotels are $120-180/night and about 30 minutes from the draft venues. Hotels along the T light rail line in the South Hills let you ride the train directly to both draft venues for free.",
  },
  {
    question: "Is Airbnb cheaper than hotels for the NFL Draft?",
    answer:
      "Not necessarily. Airbnb and VRBO prices near downtown are $1,500-2,000/night for draft weekend. One Reddit user called it 'the Super Bowl of Airbnb pricing.' Whole-house rentals split between a group of 4-6 people might bring the per-person cost below a downtown hotel, but suburban hotels are still the cheapest option overall.",
  },
  {
    question: "Should I book a hotel now or wait for NFL Draft weekend prices to drop?",
    answer:
      "Book now with a free cancellation policy, then keep checking. Revenue managers are holding rooms and releasing them slowly at higher prices. In Green Bay (2025 Draft), some hotels had rooms available a week before the event and prices actually dropped. Lock in a rate now, but don't stop looking.",
  },
];

export default function WhereToStay() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Where to Stay", href: "/where-to-stay" },
        ]}
      />
      <FAQSchema items={hotelFAQs} />

      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "NFL Draft Pittsburgh Hotels & Where to Stay",
            description:
              "Hotels for the 2026 NFL Draft are $500-2,000/night downtown. Here are cheaper options in Cranberry Township, McKnight Rd, and along the T line.",
            datePublished: "2026-03-27",
            dateModified: "2026-03-27",
            author: {
              "@type": "Organization",
              name: "Pittsburgh Draft Guide",
              url: "https://pittsburghdraftguide.com",
            },
          }),
        }}
      />

      {/* Hero */}
      <section
        className="photo-section text-white py-16 md:py-20"
        style={{ backgroundImage: "url('/pgh-skyline-night.jpg')" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Where to Stay
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            NFL Draft Pittsburgh Hotels &amp; Where to Stay
          </h1>
          <p className="text-gray-300">
            Downtown hotels are $500-2,000/night. Airbnbs aren't much better.
            Here's where to actually find a room you can afford, ranked by
            price and transit access to the draft.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <Image
          src="/pgh-skyline-night.jpg"
          alt="Pittsburgh skyline at night from the Duquesne Incline overlook"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-lg w-full h-auto mb-8 max-w-3xl mx-auto px-4"
        />

        <LastUpdated date="March 30, 2026" />

        {/* Section 1: Price reality */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            How Bad Are Hotel Prices? (The Honest Truth)
          </h2>
          <p className="text-muted mb-3">
            Let's not sugarcoat it. NFL Draft Pittsburgh hotels are the most
            expensive in draft history. We're talking Taylor Swift prices on
            steroids.
          </p>
          <div className="border-l-2 border-accent pl-5 mb-4">
            <p className="text-foreground font-bold text-lg mb-2">
              Real prices people are seeing right now:
            </p>
            <ul className="text-muted space-y-2 list-disc pl-5">
              <li>
                Spring Hill Suites North Shore:{" "}
                <strong>$2,173/night</strong>
              </li>
              <li>
                Downtown suites: <strong>$2,000+/night</strong>
              </li>
              <li>
                Airbnbs near downtown: <strong>$1,500-2,000/night</strong>
              </li>
              <li>
                Even suburban hotels are jacking up rates
              </li>
            </ul>
          </div>
          <p className="text-muted mb-3">
            One Reddit user put it perfectly: you need "tech bro money" to stay
            downtown for draft weekend. That's not a joke. The Spring Hill
            Suites on the North Shore is a Marriott-branded hotel that normally
            runs $150-200/night. It's listed at $2,173 for draft weekend.
            That's a 10x markup.
          </p>
          <p className="text-muted mb-3">
            But here's the thing. You don't need to stay downtown. Pittsburgh
            isn't that big. There are hotels 15-30 minutes from the draft that
            cost 80% less. And some of them are on direct bus or train lines to
            the venues.
          </p>
          <p className="text-muted">
            Keep reading. We'll break it down by neighborhood, with real
            prices and transit access for each option.
          </p>
        </section>

        {/* Section 2: Downtown Hotels */}
        <section className="mb-14">
          <h2 id="downtown-hotels" className="text-2xl font-heading mb-4">
            Downtown Hotels (Closest to the Action)
          </h2>
          <p className="text-muted mb-4">
            If money isn't an issue and you want to walk to Point State Park
            (the Draft Experience), downtown is the move. You're looking at
            $500/night minimum, and realistically $800-1,500+ for anything
            decent.
          </p>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.omnihotels.com/hotels/pittsburgh-william-penn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Omni William Penn Hotel</a>
                <span className="text-sm text-muted font-semibold">$600-1,200+</span>
              </div>
              <p className="text-sm text-muted mb-1">530 William Penn Pl, Downtown</p>
              <p className="text-sm text-muted">
                Pittsburgh's grand historic hotel. Walking distance to Point
                State Park. They're running a "William Penn Draft Den"
                activation all week. This is where the media and VIPs will be.
                Expect $600-1,200+/night.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.fairmont.com/en/hotels/pittsburgh/fairmont-pittsburgh.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Fairmont Pittsburgh</a>
                <span className="text-sm text-muted font-semibold">$700-1,500+</span>
              </div>
              <p className="text-sm text-muted mb-1">510 Market St, Downtown</p>
              <p className="text-sm text-muted">
                Luxury hotel right at Market Square. 10 minute walk to Point
                State Park. NFL teams and front offices tend to book here.
                Draft weekend rates will be $700-1,500+/night.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.druryhotels.com/locations/pittsburgh-pa/drury-plaza-hotel-pittsburgh-downtown" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Drury Plaza Hotel</a>
                <span className="text-sm text-muted font-semibold">$500+</span>
              </div>
              <p className="text-sm text-muted mb-1">745 Grant St, Downtown</p>
              <p className="text-sm text-muted">
                Solid chain hotel in the heart of downtown. Free hot breakfast
                and evening kickback (free drinks and snacks). Normally $180.
                Draft weekend? $500+.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted italic">
            Bottom line: Downtown hotels put you within walking distance of
            everything, but you're paying a massive premium for that
            convenience. If you can swing $500+/night, it's worth it for the
            experience.
          </p>
        </section>

        {/* Section 3: North Shore Hotels */}
        <section className="mb-14">
          <h2 id="north-shore-hotels" className="text-2xl font-heading mb-4">
            North Shore Hotels (Walking Distance to Acrisure)
          </h2>
          <p className="text-muted mb-4">
            The North Shore is where the main draft stage is at Acrisure
            Stadium. If you want to walk to the picks, this is where you want
            to be. But these hotels know it, and they're pricing accordingly.
          </p>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.marriott.com/en-us/hotels/pitns-springhill-suites-pittsburgh-north-shore/overview/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">SpringHill Suites North Shore</a>
                <span className="text-sm text-muted font-semibold">$2,173/night</span>
              </div>
              <p className="text-sm text-muted mb-1">223 Federal St, North Shore</p>
              <p className="text-sm text-muted">
                The hotel that broke Reddit. $2,173/night for a standard
                Marriott-branded suite that normally runs $180. It's steps
                from Acrisure Stadium, which is why they can charge that. If
                you see availability, it's not a glitch. That's the real price.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.hyatt.com/hyatt-place/en-US/pitzn-hyatt-place-pittsburgh-north-shore" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Hyatt Place North Shore</a>
                <span className="text-sm text-muted font-semibold">$800-1,500+</span>
              </div>
              <p className="text-sm text-muted mb-1">260 North Shore Dr</p>
              <p className="text-sm text-muted">
                Another hotel within walking distance of the draft stage.
                Expect $800-1,500+/night during draft weekend. Free breakfast
                included, which is a small consolation at those prices.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://thelandinghotelpgh.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">The Landing Hotel at Rivers Casino</a>
                <span className="text-sm text-muted font-semibold">$400+</span>
              </div>
              <p className="text-sm text-muted mb-1">777 Casino Dr, North Shore</p>
              <p className="text-sm text-muted">
                Rivers Casino is going all-in on draft weekend. Hotel
                packages include parking (free with hotel stay), draft watch
                parties, and a Jason Aldean concert. They're running a $500
                four-day parking package separately. Draft weekend room
                rates are $400+/night.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted italic">
            If you booked a North Shore hotel months ago at a reasonable rate,
            congratulations. You're sitting on gold. If you didn't, keep
            scrolling. There are much cheaper options.
          </p>
        </section>

        {/* Section 4: T Line Hotels */}
        <section className="mb-14">
          <h2 id="t-line-hotels" className="text-2xl font-heading mb-4">
            Hotels on the T Line (Park-and-Ride Strategy)
          </h2>
          <p className="text-muted mb-3">
            This is the smart budget play that most out-of-towners don't know
            about. Pittsburgh has a light rail system called "the T." It runs
            from the South Hills suburbs directly into downtown, and here's
            the kicker: the ride between downtown and the North Shore is
            completely free (it's called the "Free Fare Zone").
          </p>
          <p className="text-muted mb-4">
            Stay at a hotel near a T station, ride straight to the draft, and
            ride back at night. No parking fees. No Uber surge. No sitting in
            traffic.
          </p>

          <div className="border-l-2 border-accent pl-5 mb-4">
            <p className="text-foreground font-bold mb-2">
              How the T Line Strategy Works
            </p>
            <ol className="text-muted space-y-2 list-decimal pl-5 text-sm">
              <li>Book a hotel near a T station in the South Hills</li>
              <li>Drive to the T station and park for free</li>
              <li>Ride the T into downtown (about 25-35 minutes)</li>
              <li>
                Walk across Roberto Clemente Bridge (pedestrian-only during
                the draft) to get to the North Shore stage
              </li>
              <li>Ride the T back after the events. No surge pricing.</li>
            </ol>
          </div>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold">Hotels near South Hills Village T Station</p>
                <span className="text-sm text-muted font-semibold">$150-250</span>
              </div>
              <p className="text-sm text-muted">
                South Hills Village has a large park-and-ride lot. Several
                hotels within 5 minutes of the station. You'll find rooms
                in the $150-250 range. It's about 35 minutes on the T to
                downtown.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold">Hotels near Dormont / Castle Shannon T Stations</p>
                <span className="text-sm text-muted font-semibold">$120-200</span>
              </div>
              <p className="text-sm text-muted">
                Closer to downtown than South Hills Village. Paid parking
                lots at the stations, but free street parking on nearby
                residential streets. Hotels in this area run $120-200/night.
                About 20 minutes on the T to downtown.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.marriott.com/en-us/hotels/pitps-sheraton-pittsburgh-hotel-at-station-square/overview/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Sheraton at Station Square</a>
                <span className="text-sm text-muted font-semibold">$300-500+</span>
              </div>
              <p className="text-sm text-muted mb-1">Station Square, South Shore</p>
              <p className="text-sm text-muted">
                Right on the T line, one stop from downtown. They're hosting
                "The Pick Is In: Legends Draft Party" (GA $162 / Seated
                $215). Pricier than South Hills options but you're basically
                across the river from Point State Park. The Monongahela
                Incline to Mt. Washington is right next door.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted">
            For more on how to use the T and other transit options, check our{" "}
            <Link
              href="/parking-transportation"
              className="text-primary font-semibold hover:underline"
            >
              Parking &amp; Transportation Guide
            </Link>
            .
          </p>
        </section>

        {/* Section 5: McKnight Road */}
        <section className="mb-14">
          <h2 id="mcknight-road" className="text-2xl font-heading mb-4">
            McKnight Road Budget Hotels ($100-180/night)
          </h2>
          <p className="text-muted mb-3">
            McKnight Road is Reddit's number one recommendation for budget
            hotels. It's a commercial corridor about 15 minutes north of
            downtown, lined with chain hotels, fast food, and strip malls.
            It's not glamorous. It's not walkable. But it's functional, cheap,
            and it's on a bus line.
          </p>

          <blockquote className="border-l-2 border-accent pl-5 mb-4">
            <p className="text-sm italic text-muted">
              "Hotels will be insanely expensive downtown. If I were you, I'd
              look at hotels on McKnight Rd. It should be cheaper and it's on
              a bus line."
            </p>
            <p className="text-xs text-gray-400 mt-1">
              - Reddit user, r/pittsburgh
            </p>
          </blockquote>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.redroof.com/property/pa/pittsburgh/RRI006" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Red Roof Inn McKnight Road</a>
                <span className="text-sm text-muted font-semibold">$80-120</span>
              </div>
              <p className="text-sm text-muted">
                Yes, this is the one from that legendary Reddit comment about
                the "VIP NFL Draft Weekend Experience at the Red Roof Inn with
                catering from the nearby Arby's." That joke got 526 upvotes.
                But seriously, it's cheap. Expect $80-120/night, which is
                90% less than the North Shore. No frills. Clean enough.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.hilton.com/en/hotels/pitnohx-hampton-pittsburgh-mcknight-rd/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Hampton Inn &amp; Holiday Inn Express (McKnight area)</a>
                <span className="text-sm text-muted font-semibold">$120-180</span>
              </div>
              <p className="text-sm text-muted">
                A step up from the Red Roof. Free breakfast, clean rooms, pool.
                $120-180/night for draft weekend. These will book up fast once
                people realize downtown is out of reach.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.choicehotels.com/pennsylvania/pittsburgh/comfort-inn-hotels" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Comfort Inn &amp; Budget Chains (McKnight corridor)</a>
                <span className="text-sm text-muted font-semibold">$100-150</span>
              </div>
              <p className="text-sm text-muted">
                Several budget chains along the McKnight corridor. Rates
                $100-150/night. Nothing fancy, but you'll sleep and shower,
                which is really all you need when you're spending the whole
                day at the draft.
              </p>
            </div>
          </div>

          <div className="card-minimal p-4">
            <p className="font-semibold text-sm mb-1">Getting downtown from McKnight Road</p>
            <p className="text-sm text-muted">
              Take the #8 bus from McKnight to downtown (about 25-30
              minutes). Or drive to the Ross Park &amp; Ride at I-279 Exit 5
              and catch the bus from there. Uber/Lyft will run $20-40 without
              surge.
            </p>
          </div>
        </section>

        {/* Section 6: Cranberry Township */}
        <section className="mb-14">
          <h2 id="cranberry-township" className="text-2xl font-heading mb-4">
            Cranberry Township Hotels ($120-180/night)
          </h2>
          <p className="text-muted mb-3">
            Cranberry Township is about 25 miles north of downtown Pittsburgh
            on I-79. It's a quiet suburb with plenty of chain hotels, good
            restaurants, and zero draft chaos. Hotels here are 40-60% cheaper
            than downtown. The tradeoff is a 30-45 minute drive (longer with
            event traffic).
          </p>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.hilton.com/en/hotels/pitcmhx-hampton-suites-cranberry-pittsburgh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Hampton Inn &amp; Suites Cranberry Pittsburgh</a>
                <span className="text-sm text-muted font-semibold">$120-160</span>
              </div>
              <p className="text-sm text-muted mb-1">10015 Pendleton Way, Cranberry Woods Business Park</p>
              <p className="text-sm text-muted">
                Free hot breakfast, indoor pool, 24-hour gym. Easy access to
                I-79 and the Turnpike. About 30 minutes to downtown per
                Hilton's own estimate. $120-160/night range for draft weekend.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.marriott.com/en-us/hotels/pitct-courtyard-pittsburgh-north-cranberry-woods/overview/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Courtyard by Marriott Cranberry Woods</a>
                <span className="text-sm text-muted font-semibold">$92-180</span>
              </div>
              <p className="text-sm text-muted mb-1">Cranberry Township</p>
              <p className="text-sm text-muted">
                From $92/night normally. Draft weekend will be higher, but
                still well under $200. Fitness center. Marriott loyalty
                points. Solid option.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.hilton.com/en/hotels/pitcrgi-hilton-garden-inn-pittsburgh-cranberry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Hilton Garden Inn Cranberry</a>
                <span className="text-sm text-muted font-semibold">$130-180</span>
              </div>
              <p className="text-sm text-muted">
                Full-service Hilton property. Restaurant on site. Reliable
                option if you want more than a basic room. $130-180/night
                range.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.hilton.com/en/hotels/pitltht-home2-suites-pittsburgh-cranberry-pa/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Home2 Suites by Hilton Cranberry</a>
                <span className="text-sm text-muted font-semibold">$130-170</span>
              </div>
              <p className="text-sm text-muted">
                Extended stay with kitchenettes. Perfect for families staying
                multiple days. You can cook your own meals and save even more.
                $130-170/night range.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.bestwestern.com/en_US/book/hotels-in-cranberry-township/best-western-plus-cranberry-pittsburgh-north/propertyCode.39142.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Best Western Plus Cranberry-Pittsburgh North</a>
                <span className="text-sm text-muted font-semibold">$100-150</span>
              </div>
              <p className="text-sm text-muted">
                Indoor pool, free buffet breakfast, 24-hour gym. Travelers
                love the location. $100-150/night for draft weekend.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <a href="https://www.marriott.com/en-us/hotels/pitno-pittsburgh-marriott-north/overview/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Pittsburgh Marriott North &amp; TownePlace Suites</a>
                <span className="text-sm text-muted font-semibold">$130-180</span>
              </div>
              <p className="text-sm text-muted">
                Full-service Marriott and extended stay option. Both in
                Cranberry Township. $130-180/night range. The TownePlace has
                kitchen suites for longer stays.
              </p>
            </div>
          </div>

          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold text-sm mb-1">
              Getting downtown from Cranberry Township
            </p>
            <p className="text-sm text-muted">
              Drive to the Ross Park &amp; Ride (I-279 Exit 5), about 15
              minutes south. Take the #8 bus or O1 express to downtown (25
              minutes). Total trip: about 40-45 minutes. Or just drive and
              pre-book parking on{" "}
              <a href="https://spothero.com/city/pittsburgh-parking" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">SpotHero</a>. Uber from Cranberry with surge
              pricing could hit $80.
            </p>
          </div>

          <p className="text-sm text-muted">
            We've got a full guide on restaurants, things to do, and transit
            from Cranberry Township:{" "}
            <Link
              href="/cranberry-township"
              className="text-primary font-semibold hover:underline"
            >
              Cranberry Township Draft Guide &rarr;
            </Link>
          </p>
        </section>

        {/* Section 7: Airbnb */}
        <section className="mb-14">
          <h2 id="airbnb-vrbo" className="text-2xl font-heading mb-4">
            Airbnb &amp; VRBO: Is It Actually Cheaper?
          </h2>
          <p className="text-muted mb-3">
            Short answer: not really. Airbnb hosts saw the same opportunity
            hotels did, and they're charging accordingly.
          </p>

          <blockquote className="border-l-2 border-accent pl-5 mb-4">
            <p className="text-sm italic text-muted">
              Reddit called it "the Super Bowl of Airbnb pricing." Houses near
              downtown are listing at $1,500-2,000/night. Some hosts are
              openly admitting they're charging as much as the market will
              bear.
            </p>
          </blockquote>

          <p className="text-muted mb-3">
            Here's the honest breakdown:
          </p>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm mb-1">Downtown / North Shore Airbnbs</p>
              <p className="text-sm text-muted">
                $1,500-2,000+/night. Honestly, at these prices, a hotel with
                room service and housekeeping is the better deal. At least
                you'll get clean towels.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold text-sm mb-1">
                Whole-house rentals (for groups)
              </p>
              <p className="text-sm text-muted">
                This is where Airbnb can actually make sense. A 4-bedroom
                house in Lawrenceville or the South Side might run $1,200-
                1,800/night total. Split that 4-6 ways and you're looking at
                $200-450 per person. That's competitive with downtown hotels
                and you get a kitchen, living room, and more space.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold text-sm mb-1">
                Suburban Airbnbs
              </p>
              <p className="text-sm text-muted">
                Airbnbs in Cranberry Township, Robinson, and Monroeville are
                more reasonable, but at that point, a hotel with free
                breakfast and an indoor pool is probably the smarter play. You
                also get the reliability of a chain hotel vs. a random host.
              </p>
            </div>
          </div>

          <p className="text-muted">
            One more thing: some locals are seriously considering renting their
            houses and leaving town for the weekend. As one Reddit user said,
            "Living walking distance to the stadiums, I don't know if I should
            get out of dodge or sell parking on my yard and water bottles
            outside the stadium." If a listing shows up in a great location at
            a somewhat reasonable price, grab it.
          </p>
        </section>

        {/* Section 8: Booking tips */}
        <section className="mb-14">
          <h2 id="booking-tips" className="text-2xl font-heading mb-4">
            How to Book Smart
          </h2>
          <p className="text-muted mb-4">
            Hotel revenue managers are playing a game right now. Here's how to
            play it better.
          </p>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4 flex gap-3">
              <span className="text-lg font-bold text-primary shrink-0">1.</span>
              <div>
                <p className="font-semibold text-sm">Book now with free cancellation</p>
                <p className="text-sm text-muted">
                  Lock in a rate today. Many hotels offer free cancellation up
                  to 24-48 hours before check-in. If you find something
                  cheaper later, cancel and rebook. You lose nothing.
                </p>
              </div>
            </div>

            <div className="card-minimal p-4 flex gap-3">
              <span className="text-lg font-bold text-primary shrink-0">2.</span>
              <div>
                <p className="font-semibold text-sm">Check back every few days</p>
                <p className="text-sm text-muted">
                  Revenue managers are holding rooms and releasing them slowly
                  at higher prices. But as the event gets closer, unsold rooms
                  get released. A Reddit user who claims to be a hotel revenue
                  manager confirmed this: hotels "drip-feed" inventory.
                </p>
              </div>
            </div>

            <div className="card-minimal p-4 flex gap-3">
              <span className="text-lg font-bold text-primary shrink-0">3.</span>
              <div>
                <p className="font-semibold text-sm">Don't trust third-party sites blindly</p>
                <p className="text-sm text-muted">
                  Reddit users reported that third-party booking sites
                  sometimes show "available" rooms that the hotel doesn't
                  actually have. Book directly with the hotel when possible,
                  especially for draft weekend.
                </p>
              </div>
            </div>

            <div className="card-minimal p-4 flex gap-3">
              <span className="text-lg font-bold text-primary shrink-0">4.</span>
              <div>
                <p className="font-semibold text-sm">Look at the Green Bay precedent</p>
                <p className="text-sm text-muted">
                  Green Bay hosted the 2025 NFL Draft. Hotels that looked
                  completely sold out had rooms available a week before the
                  event. Some prices even dropped. It doesn't mean Pittsburgh
                  will be the same (Pittsburgh is a bigger market), but it
                  gives you hope.
                </p>
              </div>
            </div>

            <div className="card-minimal p-4 flex gap-3">
              <span className="text-lg font-bold text-primary shrink-0">5.</span>
              <div>
                <p className="font-semibold text-sm">Consider Robinson and Monroeville</p>
                <p className="text-sm text-muted">
                  If McKnight Road and Cranberry Township are booked, check
                  Robinson (west, near the airport) and Monroeville (east).
                  Both have clusters of chain hotels at $120-200/night.
                  They're further out, but 30-40 minutes by car or bus.
                </p>
              </div>
            </div>

            <div className="card-minimal p-4 flex gap-3">
              <span className="text-lg font-bold text-primary shrink-0">6.</span>
              <div>
                <p className="font-semibold text-sm">The Marriott near the airport</p>
                <p className="text-sm text-muted">
                  Multiple Reddit users mentioned the airport-area Marriott as
                  having "reasonable" availability. It's 25-30 minutes from
                  downtown. PRT is adding extra 28X airport bus service for
                  draft weekend.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            <a
              href="https://www.booking.com/city/us/pittsburgh.html"
              target="_blank"
              rel="noopener noreferrer"
              className="card-minimal p-4 hover:bg-surface transition-colors block"
            >
              <p className="font-bold text-foreground mb-1">Search Pittsburgh Hotels on Booking.com</p>
              <p className="text-sm text-primary">
                Compare rates across all downtown, North Shore, and suburban hotels. Free cancellation on most rooms.
              </p>
            </a>
            <a
              href="https://spothero.com/city/pittsburgh-parking"
              target="_blank"
              rel="noopener noreferrer"
              className="card-minimal p-4 hover:bg-surface transition-colors block"
            >
              <p className="font-bold text-foreground mb-1">Pre-Book Parking on SpotHero</p>
              <p className="text-sm text-primary">
                Lock in downtown parking rates now before draft weekend surge pricing kicks in. Spots fill fast.
              </p>
            </a>
          </div>
        </section>

        {/* Price comparison table */}
        <section className="mb-14">
          <h2 id="price-comparison" className="text-2xl font-heading mb-4">
            Price Comparison at a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-2 sm:p-3 font-semibold">Area</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">Price/Night</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">Transit to Draft</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">Vibe</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Downtown</td>
                  <td className="p-2 sm:p-3">$500-1,500+</td>
                  <td className="p-2 sm:p-3 text-muted">Walk (5-15 min)</td>
                  <td className="p-2 sm:p-3 text-muted">In the chaos. Love it or hate it.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">North Shore</td>
                  <td className="p-2 sm:p-3">$800-2,173+</td>
                  <td className="p-2 sm:p-3 text-muted">Walk (5 min to Acrisure)</td>
                  <td className="p-2 sm:p-3 text-muted">Closest to draft stage. Insane prices.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">T Line (South Hills)</td>
                  <td className="p-2 sm:p-3">$120-250</td>
                  <td className="p-2 sm:p-3 text-muted">T train (20-35 min)</td>
                  <td className="p-2 sm:p-3 text-muted">Smart play. Direct train to venues.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">McKnight Road</td>
                  <td className="p-2 sm:p-3">$100-180</td>
                  <td className="p-2 sm:p-3 text-muted">Bus (25-30 min)</td>
                  <td className="p-2 sm:p-3 text-muted">Budget king. Not pretty, but works.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Cranberry Township</td>
                  <td className="p-2 sm:p-3">$120-180</td>
                  <td className="p-2 sm:p-3 text-muted">Drive + bus (40-45 min)</td>
                  <td className="p-2 sm:p-3 text-muted">Quiet suburb. Families love it.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Robinson / Airport</td>
                  <td className="p-2 sm:p-3">$120-200</td>
                  <td className="p-2 sm:p-3 text-muted">Bus/drive (30-40 min)</td>
                  <td className="p-2 sm:p-3 text-muted">Backup plan. Furthest out.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Airbnb (downtown)</td>
                  <td className="p-2 sm:p-3">$1,500-2,000+</td>
                  <td className="p-2 sm:p-3 text-muted">Walk</td>
                  <td className="p-2 sm:p-3 text-muted">"Super Bowl of Airbnb pricing."</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-6">
            Where to Stay FAQ
          </h2>
          <div className="space-y-4">
            {hotelFAQs.map((faq) => (
              <div
                key={faq.question}
                className="card-minimal p-5"
              >
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beyond draft weekend */}
        <section className="mb-8">
          <p className="text-muted leading-relaxed mb-3">
            <strong>Beyond draft weekend:</strong> Every time Pittsburgh hosts a
            major event, some visitors end up falling in love with the city. If
            you're one of them, check out the{" "}
            <Link href="/neighborhoods" className="text-primary font-semibold hover:underline">
              neighborhoods page
            </Link>{" "}
            for a breakdown of what each area is actually like. And if you want
            to talk to someone who knows the housing market here,{" "}
            <TrackedLink href="https://danteegizio.remax.com/" eventName="dante_remax_link_wheretostay_click" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              Dante Egizio
            </TrackedLink>{" "}
            is a friend of mine who's been selling homes across Pittsburgh for 7
            years. He can tell you things Zillow can't.
          </p>
          <p className="text-xs text-gray-500">
            Dante Egizio, Associate Broker, RE/MAX Select Realty | 400 Broad St.
            Suite 2006, Sewickley, PA 15143 | (724) 933-6300 | (412) 347-8125 |
            PA License #AB069313 | Brokerage License #RB063030C | Equal Housing
            Opportunity
          </p>
        </section>

        {/* CTA */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-heading mb-2">
            Got your hotel? Now figure out the rest.
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Where to park, how to get downtown, and how to do it all without
            going broke.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/parking-transportation"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Parking &amp; Transportation
            </Link>
            <Link
              href="/cranberry-township"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Cranberry Township Guide
            </Link>
            <Link
              href="/budget-guide"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Budget Guide
            </Link>
          </div>
        </section>
      </article>

      <RelatedPages current="hotels" slugs={["parking", "budget", "neighborhoods", "food"]} />
    </>
  );
}
