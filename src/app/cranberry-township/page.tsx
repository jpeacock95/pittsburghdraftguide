import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft from Cranberry Township: Transit Guide",
  description:
    "Getting to the 2026 NFL Draft from Cranberry Township PA. Park-and-ride options, bus routes, hotels under $180/night, and restaurants nearby.",
};

const cranberryFAQs = [
  {
    question:
      "How do I get from Cranberry Township to the NFL Draft in Pittsburgh?",
    answer:
      "The best option is to drive to the Ross Park & Ride at I-279 Exit 5, park for free, and take the #8 bus or O1 express to downtown Pittsburgh. The ride takes about 25 minutes. You can also take the Butler Transit Authority commuter bus from the 528 lot if you're coming from further north. Uber/Lyft will cost $40-80 with surge pricing during draft weekend.",
  },
  {
    question: "How much are hotels in Cranberry Township during the NFL Draft?",
    answer:
      "Hotels in Cranberry Township typically run $120-180/night during draft weekend. That includes Hampton Inn, Hilton Garden Inn, Courtyard by Marriott, and Home2 Suites. Compare that to $500-2,000/night downtown. You'll save $300-1,800 per night by staying in Cranberry and taking the bus in.",
  },
  {
    question:
      "Is it worth staying in Cranberry Township for the NFL Draft instead of downtown?",
    answer:
      "Yes, if you want to save serious money. Cranberry Township hotels are 40-60% cheaper than downtown, and you're only 25-30 minutes from the draft venues via park-and-ride. You also get free parking, more restaurant options, and you skip the downtown chaos entirely. The trade-off is you can't walk to the venues, and late-night bus service is limited.",
  },
  {
    question:
      "Where is the Ross Park & Ride and how do I get there from Cranberry?",
    answer:
      "The Ross Park & Ride is at I-279 Exit 5, about 10 minutes south of Cranberry Township. From Cranberry, take I-79 South to I-279 South. Get off at Exit 5 and the park-and-ride lot is right there. Parking is free. From there, take the #8 bus or O1 express downtown. This is the route Reddit unanimously recommends for anyone coming from the north.",
  },
];

export default function CranberryTownship() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Cranberry Township", href: "/cranberry-township" },
        ]}
      />
      <FAQSchema items={cranberryFAQs} />

      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "NFL Draft from Cranberry Township: Transit Guide",
            description:
              "Getting to the 2026 NFL Draft from Cranberry Township PA. Park-and-ride options, bus routes, hotels under $180/night, and restaurants nearby.",
            datePublished: "2026-03-27",
            dateModified: "2026-03-31",
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
        style={{ backgroundImage: "url('/pgh-suburban-road.jpg')" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Cranberry Township
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            Getting to the NFL Draft from Cranberry Township
          </h1>
          <p className="text-gray-300">
            Stay 25 minutes north. Pay 40-60% less for hotels. Park for free.
            Bus straight to the draft. This is the guide no other site wrote
            because none of them live here. We do.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <Image
          src="/pgh-incline-view.jpg"
          alt="View of Pittsburgh skyline from the Duquesne Incline, the city Cranberry Township visitors will see"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-lg w-full h-auto mb-8"
        />

        <LastUpdated date="March 31, 2026" />

        {/* Section 1: Why Stay in Cranberry */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Why Stay in Cranberry Township?
          </h2>
          <p className="text-muted mb-3">
            Here's what nobody's telling out-of-town visitors. You don't need to
            stay downtown to enjoy the NFL Draft. Cranberry Township is 25-30
            minutes north of the venues, and it's where a lot of locals would
            tell you to book if you asked them.
          </p>
          <p className="text-muted mb-3">
            The math is simple. Downtown hotels are running $500-2,000/night for
            draft weekend. Cranberry hotels? $120-180/night. That's not a typo.
            You'll save enough on one night's stay to cover gas, food, and
            probably a jersey.
          </p>

          <div className="border-l-2 border-accent pl-5 mb-4">
            <p className="text-foreground font-bold text-lg mb-2">
              Why Cranberry works for draft weekend:
            </p>
            <ul className="text-muted space-y-2 list-disc pl-5">
              <li>
                Hotels run <strong>$120-180/night</strong> vs. $500-2,000
                downtown
              </li>
              <li>
                <strong>25-30 minutes</strong> to the draft via park-and-ride
                bus
              </li>
              <li>
                <strong>Free parking</strong> at Ross Park &amp; Ride
              </li>
              <li>
                Great restaurants, shopping, and suburban comfort
              </li>
              <li>
                You skip the downtown chaos entirely
              </li>
            </ul>
          </div>

          <p className="text-muted">
            Cranberry isn't some random truck stop. It's one of the fastest-growing
            communities in western Pennsylvania. There are chain restaurants, local
            gems, craft breweries, shopping centers, and every hotel brand you
            can think of. You're not roughing it. You're being smart.
          </p>
        </section>

        {/* Section 2: Getting Downtown from Cranberry */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            How to Get Downtown from Cranberry Township
          </h2>
          <p className="text-muted mb-4">
            This is the most important section on this page. Getting from
            Cranberry to the draft is straightforward if you know your options.
            Here they are, ranked from best to worst.
          </p>

          {/* Option 1: Ross Park & Ride */}
          <div className="border-l-2 border-accent pl-5 mb-4">
            <div className="flex items-start gap-3 mb-3">
              <span className="label">
                #1 BEST OPTION
              </span>
            </div>
            <h3 className="text-xl font-heading mb-2">
              Ross Park &amp; Ride (I-279 Exit 5)
            </h3>
            <p className="text-muted mb-3">
              This is it. The option Reddit recommends unanimously. Every single
              thread about getting from Cranberry to the draft says the same
              thing: drive to Ross Park &amp; Ride.
            </p>
            <div className="bg-white rounded-lg p-4 mb-3">
              <p className="font-semibold text-sm mb-2">Step by step:</p>
              <ol className="text-sm text-muted space-y-2 list-decimal pl-5">
                <li>
                  From Cranberry, take <strong>I-79 South</strong> to{" "}
                  <strong>I-279 South</strong>
                </li>
                <li>
                  Get off at <strong>Exit 5</strong>. The park-and-ride lot is
                  right there.
                </li>
                <li>
                  <strong>Park for free</strong>. That's right. Free.
                </li>
                <li>
                  Take the <strong>#8 bus</strong> or{" "}
                  <strong>O1 express</strong> to downtown Pittsburgh.
                </li>
                <li>
                  You're at the draft in about <strong>25 minutes</strong>.
                </li>
              </ol>
            </div>
            <p className="text-muted text-sm">
              The drive from most Cranberry hotels to Ross Park &amp; Ride is
              about 10 minutes. Total door-to-draft time: 35-40 minutes. And you
              paid $0 for parking.
            </p>
          </div>

          {/* Option 2: Butler Transit Authority */}
          <div className="card-minimal p-5 mb-4">
            <h3 className="text-lg font-heading mb-2">
              Butler Transit Authority (528 Lot)
            </h3>
            <p className="text-muted mb-3">
              If you're coming from further north (Butler, Slippery Rock, even
              closer to I-80), the Butler Transit Authority runs a commuter bus
              from the 528 lot. It takes longer (40-70 minutes depending on the
              route), but it picks you up further north so you don't have to
              drive as far south.
            </p>
            <p className="text-sm text-muted">
              <strong>Cost:</strong> $2-6 depending on the route.{" "}
              <strong>Best for:</strong> People coming from north of Cranberry
              who don't want to deal with I-279 at all.
            </p>
          </div>

          {/* Option 3: Driving yourself */}
          <div className="border-l-2 border-accent pl-5 mb-4">
            <h3 className="text-lg font-heading mb-2">
              Driving Yourself Downtown (Not Recommended)
            </h3>
            <p className="text-muted mb-3">
              Can you do it? Sure. Should you? Probably not. Here's why.
            </p>
            <ul className="text-muted space-y-2 list-disc pl-5 mb-3">
              <li>
                Road closures are massive. Roberto Clemente Bridge, Andy Warhol
                Bridge, multiple I-279 exits, and Fort Duquesne Boulevard are
                all shut down.
              </li>
              <li>
                Downtown parking garages are expected to hit{" "}
                <strong>$50-100+</strong> during draft weekend. North Shore lots
                that normally run $20 will be higher.
              </li>
              <li>
                Traffic will be unlike anything Pittsburgh has ever seen.
                Officials are literally telling people not to drive downtown.
              </li>
            </ul>
            <p className="text-muted text-sm">
              If you absolutely must drive, take I-279 South from Cranberry,
              exit before downtown, and park in a neighborhood lot. South Side
              or the Strip District are your best bets. Then walk or take the T
              from there. But seriously, just do the park-and-ride.
            </p>
          </div>

          {/* Option 4: Uber/Lyft */}
          <div className="card-minimal p-5 mb-4">
            <h3 className="text-lg font-heading mb-2">Uber/Lyft from Cranberry</h3>
            <p className="text-muted mb-3">
              It works. It's just expensive. Expect <strong>$40-80</strong> one
              way with surge pricing during draft weekend. One Reddit commenter
              estimated $80 from Cranberry with surge. That's $160 round trip
              for one day.
            </p>
            <p className="text-muted mb-3">
              The bigger problem is getting a ride <em>back</em> to Cranberry
              at night. When 200,000+ people are all trying to leave downtown
              at the same time, drivers go where the money is. Getting matched
              with a driver heading 30 minutes north won't be easy.
            </p>
            <p className="text-sm text-muted">
              <strong>Pro tip:</strong> If you go the Uber route, pre-schedule
              your rides in the app. Book your return trip before you even head
              downtown. And accept that surge pricing is going to hit.
            </p>
          </div>

          <p className="text-muted text-sm italic">
            For more transit details across all of Pittsburgh, check out our{" "}
            <Link
              href="/parking-transportation"
              className="text-primary font-semibold hover:underline"
            >
              full Parking &amp; Transportation Guide
            </Link>
            .
          </p>
        </section>

        {/* Section 3: Hotels */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Cranberry Township Hotels ($120-180/night)
          </h2>
          <p className="text-muted mb-4">
            While downtown visitors are paying $500-2,000/night, you can stay at
            a perfectly good hotel in Cranberry for a fraction of the cost. Every
            hotel listed here has easy access to I-79 and I-76 (the Turnpike),
            which gets you to the Ross Park &amp; Ride in about 10 minutes.
          </p>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold">
                  <a href="https://www.hilton.com/en/hotels/pitcmhx-hampton-suites-cranberry-pittsburgh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Hampton Inn &amp; Suites Cranberry</a>
                </p>
                <span className="text-sm text-muted font-semibold">
                  $120-160
                </span>
              </div>
              <p className="text-sm text-muted mb-1">
                10015 Pendleton Way, Cranberry Woods Business Park
              </p>
              <p className="text-sm text-muted">
                Free hot breakfast, indoor pool, 24-hour gym. Easy highway
                access. Hilton says it's 30 minutes from downtown, and that
                tracks. Solid choice if you want reliable and straightforward.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold">
                  <a href="https://www.marriott.com/en-us/hotels/pitct-courtyard-pittsburgh-north-cranberry-woods/overview/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Courtyard by Marriott Cranberry Woods</a>
                </p>
                <span className="text-sm text-muted font-semibold">
                  From $92
                </span>
              </div>
              <p className="text-sm text-muted mb-1">Cranberry Township</p>
              <p className="text-sm text-muted">
                One of the cheapest name-brand options. Fitness center, clean
                rooms, Marriott loyalty points. <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Booking.com</a> lists it at 20
                miles from the <a href="https://www.warhol.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Andy Warhol Museum</a>. Good value for Marriott
                members.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold">
                  <a href="https://www.hilton.com/en/hotels/pitcrgi-hilton-garden-inn-pittsburgh-cranberry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Hilton Garden Inn Pittsburgh/Cranberry</a>
                </p>
                <span className="text-sm text-muted font-semibold">
                  $140-180
                </span>
              </div>
              <p className="text-sm text-muted mb-1">Cranberry Township</p>
              <p className="text-sm text-muted">
                Full-service Hilton property. A step up from the Hampton Inn if
                you want a slightly nicer room. On-site restaurant saves you a
                trip if you get back late from the draft.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold">
                  <a href="https://www.hilton.com/en/hotels/pitltht-home2-suites-pittsburgh-cranberry-pa/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Home2 Suites by Hilton Cranberry</a>
                </p>
                <span className="text-sm text-muted font-semibold">
                  $130-170
                </span>
              </div>
              <p className="text-sm text-muted mb-1">Cranberry Township</p>
              <p className="text-sm text-muted">
                Extended stay with kitchenettes. Perfect if you're coming for
                all 3 days of the draft and want to cook some meals instead of
                eating out every night. Saves money on top of already saving
                money.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold"><a href="https://www.marriott.com/en-us/hotels/pitno-pittsburgh-marriott-north/overview/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Pittsburgh Marriott North</a></p>
                <span className="text-sm text-muted font-semibold">
                  $140-180
                </span>
              </div>
              <p className="text-sm text-muted mb-1">Cranberry Township</p>
              <p className="text-sm text-muted">
                Full-service Marriott. The biggest property in the area. Good
                for groups who want a bit more space and don't mind paying a
                little extra to stay within the Marriott ecosystem.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold"><a href="https://www.marriott.com/en-us/hotels/pitrr-towneplace-suites-pittsburgh-cranberry-township/overview/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">TownePlace Suites Cranberry</a></p>
                <span className="text-sm text-muted font-semibold">
                  $120-160
                </span>
              </div>
              <p className="text-sm text-muted mb-1">Cranberry Township</p>
              <p className="text-sm text-muted">
                Another extended-stay Marriott option with kitchen suites.
                Great if you're making a long weekend out of it and want to
                keep food costs down.
              </p>
            </div>

            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold">
                  <a href="https://www.bestwestern.com/en_US/book/hotels-in-cranberry-township/best-western-plus-cranberry-pittsburgh-north/propertyCode.39142.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Best Western Plus Cranberry-Pittsburgh North</a>
                </p>
                <span className="text-sm text-muted font-semibold">
                  $100-140
                </span>
              </div>
              <p className="text-sm text-muted mb-1">Cranberry Township</p>
              <p className="text-sm text-muted">
                Indoor pool, free buffet breakfast, 24-hour gym. The cheapest
                option on this list. Travelers consistently rate the location
                highly. No-frills, but clean and well-run.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-accent pl-5">
            <p className="text-muted text-sm">
              <strong>Book now.</strong> These hotels know the draft is
              happening. Prices will climb as April 23 gets closer. Lock in a
              free-cancellation rate today and keep checking. Even at $180/night
              in Cranberry, you're saving $300-1,800 per night compared to
              downtown. For more options, see our{" "}
              <Link
                href="/where-to-stay"
                className="text-primary font-semibold hover:underline"
              >
                full Where to Stay guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section 4: Restaurants & Bars */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Restaurants &amp; Bars in Cranberry Township
          </h2>
          <p className="text-muted mb-4">
            You don't need to eat downtown every night. Cranberry has legit
            dining options. Grab dinner here before heading to the draft, or eat
            when you get back so you're not fighting 200,000 other people for a
            table on the North Shore.
          </p>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold"><a href="https://junipergrill.com/locations/cranberry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Juniper Grill</a></p>
                <span className="text-sm text-muted font-semibold">
                  #1 on TripAdvisor
                </span>
              </div>
              <p className="text-sm text-muted">
                American cuisine with a full bar. 326 reviews and the top-rated
                restaurant in Cranberry Township. Good for a nicer sit-down
                meal without downtown prices.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1"><a href="https://theturnclubs.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">The Turn Club</a></p>
              <p className="text-sm text-muted">
                #2 on TripAdvisor. Newer spot that's earned a solid reputation
                fast. American menu. Worth checking out if Juniper is packed.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1">
                <a href="https://firebirdsrestaurants.com/cranberry" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Firebirds Wood Fired Grill</a>
              </p>
              <p className="text-sm text-muted">
                #3 on TripAdvisor with 229 reviews. Wood-fired steaks and
                seafood. A step up if you want a nicer dinner after a long day
                at the draft.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1"><a href="https://www.napaprimechophouse.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Napa Prime Chophouse</a></p>
              <p className="text-sm text-muted">
                Upscale steakhouse. OpenTable top pick. If you're celebrating
                your team's first-round pick, this is where you do it.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1"><a href="https://www.thesportsgrillecranberry.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">The Sports Grille at Cranberry</a></p>
              <p className="text-sm text-muted">
                The spot to watch draft coverage if you don't feel like heading
                downtown. Sports on every TV, happy hour specials, and you can
                actually hear yourself think, unlike the North Shore.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1">
                <a href="https://www.offthehookfish.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Off The Hook</a> / <a href="https://www.mrmisterpgh.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Mr. Mister Supper Club</a>
              </p>
              <p className="text-sm text-muted">
                Both OpenTable top picks. Off The Hook for seafood, Mr. Mister
                for a supper club vibe. Solid date-night options.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1"><a href="https://tamarindpa.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Tamarind</a></p>
              <p className="text-sm text-muted">
                Reddit's pick for the best Indian food in the Pittsburgh area.
                Tons of vegetarian options. Not what you'd expect to find in
                Cranberry, but it's genuinely excellent.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-heading mb-3">Local Breweries</h3>
          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <p className="font-semibold mb-1"><a href="https://smiling-moose.com/cranberry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Smiling Moose</a></p>
              <p className="text-sm text-muted">
                #1 bar on Yelp for Cranberry (77 reviews). Good spot for a beer
                after the draft.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1">
                <a href="https://www.reconbrewing.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Recon Brewing</a> / <a href="https://www.dentedkeg.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Dented Keg</a> / <a href="https://www.stickcitybeer.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Stick City Brewing</a>
              </p>
              <p className="text-sm text-muted">
                Three local craft breweries in the Cranberry area. If you're a
                beer person, you can hit all three without ever going downtown.
                Recon is the Yelp top pick.
              </p>
            </div>
          </div>

          <p className="text-muted text-sm italic">
            Want to explore the downtown food scene too? Check out our{" "}
            <Link
              href="/bars-restaurants"
              className="text-primary font-semibold hover:underline"
            >
              Bars &amp; Restaurants Guide
            </Link>{" "}
            for North Shore, Strip District, and South Side options.
          </p>
        </section>

        {/* Section 5: Day-Trip Strategy */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            The Day-Trip Strategy
          </h2>
          <p className="text-muted mb-3">
            Not staying overnight? No problem. This is the playbook for people
            driving in from Ohio, West Virginia, or further north in
            Pennsylvania who want to do the draft as a day trip.
          </p>

          <div className="card-minimal p-5 mb-4">
            <p className="font-semibold mb-3">The day-trip game plan:</p>
            <ol className="text-muted space-y-3 list-decimal pl-5">
              <li>
                <strong>Drive to Cranberry Township</strong>. If you're coming
                from I-80, I-79, or the Turnpike, Cranberry is the natural
                stopping point. You don't need to fight traffic any further
                south than this.
              </li>
              <li>
                <strong>Park at Ross Park &amp; Ride</strong> (I-279 Exit 5).
                It's about 10 minutes south of Cranberry. Free parking.
              </li>
              <li>
                <strong>Take the #8 bus or O1 express downtown</strong>. 25
                minutes. Enjoy the ride.
              </li>
              <li>
                <strong>Spend the day at the draft</strong>. Walk between
                Acrisure Stadium (main stage) and Point State Park (Draft
                Experience) via the Roberto Clemente Bridge, which is
                pedestrian-only all weekend.
              </li>
              <li>
                <strong>Bus back to Ross Park &amp; Ride</strong>. Grab your
                car and you're on the highway in 5 minutes.
              </li>
              <li>
                <strong>Drive home</strong>. Or stop for dinner in Cranberry
                first. <a href="https://junipergrill.com/locations/cranberry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Juniper Grill</a> or <a href="https://firebirdsrestaurants.com/cranberry" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Firebirds</a> are right off the highway.
              </li>
            </ol>
          </div>

          <p className="text-muted mb-3">
            This strategy works perfectly for Day 1 (Thursday, picks start at
            8pm ET) or Day 3 (Saturday, starts at noon). Saturday is the best
            day for casual fans and day-trippers. Smaller crowds, free concerts,
            and the 5K run in the morning.
          </p>
          <p className="text-muted text-sm italic">
            For a full breakdown of which day is best for you, see our{" "}
            <Link
              href="/budget-guide"
              className="text-primary font-semibold hover:underline"
            >
              Budget Guide
            </Link>
            .
          </p>
        </section>

        {/* Section 6: Things to Do in Cranberry */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Things to Do in Cranberry (When You're Not at the Draft)
          </h2>
          <p className="text-muted mb-4">
            If you're staying for the whole weekend, you'll have downtime.
            Cranberry has options.
          </p>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <p className="font-semibold mb-1"><a href="https://funforeall.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Fun Fore All Family Fun Park</a></p>
              <p className="text-sm text-muted">
                Go-karts, mini-golf, arcade, bumper boats. TripAdvisor's top
                family activity in Cranberry. Great if you've got kids who
                need to burn energy before or after the draft.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1"><a href="https://www.facebook.com/StreetsofCranberry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Streets of Cranberry</a></p>
              <p className="text-sm text-muted">
                Outdoor shopping center with restaurants and stores. Good for
                killing time or picking up anything you forgot to pack.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1"><a href="https://axethrowingpgh.com/cranberry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">LumberjAxes Axe Throwing</a></p>
              <p className="text-sm text-muted">
                Axe throwing in Cranberry. Fun group activity, especially if
                you're here with a crew and need something to do before the
                evening picks start.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1">Graham Park</p>
              <p className="text-sm text-muted">
                Local park for walking and relaxing. Nice in late April when
                the weather cooperates. (Pittsburgh weather in late April can
                be 40 degrees or 85 degrees. Pack layers.)
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Other Northern Suburbs */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Other Northern Suburbs (Wexford, Mars, Warrendale)
          </h2>
          <p className="text-muted mb-3">
            Cranberry isn't the only option up north. A few neighboring towns
            have similar hotel prices and the same highway access.
          </p>

          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <p className="font-semibold mb-1">Wexford</p>
              <p className="text-sm text-muted">
                Just south of Cranberry on I-79. Home to Wexford Public
                (locally owned, creative comfort food) and Tapville Social.
                Slightly closer to the Ross Park &amp; Ride, which shaves a
                few minutes off your commute.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1">Mars</p>
              <p className="text-sm text-muted">
                East of Cranberry along Route 228. Smaller and quieter, but
                some hotels and restaurants are available. About the same
                distance to downtown.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-semibold mb-1">Warrendale</p>
              <p className="text-sm text-muted">
                Between Cranberry and Wexford on I-79. Some hotel options and
                quick access to the same park-and-ride routes. If Cranberry
                hotels are booked, check here.
              </p>
            </div>
          </div>

          <p className="text-muted text-sm">
            All three towns use the same strategy: drive to Ross Park &amp;
            Ride, bus downtown, enjoy the draft, bus back. The route is
            identical. It's just a question of which hotel has availability
            and the best price.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Cranberry Township NFL Draft FAQ
          </h2>
          <div className="space-y-4">
            {cranberryFAQs.map((faq, index) => (
              <div
                key={index}
                className="card-minimal p-5"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About the author */}
        <section className="mb-8">
          <p className="text-muted leading-relaxed">
            <strong>About this page:</strong> This was written by someone who
            actually lives here. I'm Jordan Peacock, I've been in Cranberry
            Township for years, and I built this entire guide because I wanted
            visitors to have something better than what was out there. If you
            want to know more about who's behind this site,{" "}
            <Link href="/about" className="text-primary font-semibold hover:underline">
              here's the full story
            </Link>
            .
          </p>
        </section>

        {/* Cross-links */}
        <section className="card-minimal p-6">
          <p className="font-semibold mb-3">More Draft Weekend Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/parking-transportation"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Parking &amp; Transportation
            </Link>
            <Link
              href="/where-to-stay"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Where to Stay
            </Link>
            <Link
              href="/budget-guide"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Budget Guide
            </Link>
          </div>
        </section>
      </article>

      <RelatedPages current="cranberry" slugs={["parking", "getting_around", "budget", "hotels"]} />
    </>
  );
}
