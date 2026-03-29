import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { QuickFacts } from "@/components/ui/QuickFacts";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh Parking Guide 2026",
  description:
    "Where to park for the 2026 NFL Draft in Pittsburgh. North Shore lots, downtown garages, park-and-ride options, pricing, and why officials say don't drive.",
};

const parkingFAQs = [
  {
    question: "Where do I park for the NFL Draft in Pittsburgh?",
    answer:
      "The best option is to NOT drive. Use a park-and-ride lot and take the bus or T light rail. If you must drive, pre-book a spot on SpotHero ($10-35 for suburban lots, $100+ downtown). North Shore lots near Acrisure Stadium are mostly closed for draft construction.",
  },
  {
    question: "How much does parking cost for the NFL Draft?",
    answer:
      "Downtown garages are expected to charge $50-100+ during draft weekend. North Shore lots that are open could reach $100+. SpotHero pre-booking ranges from $10.99 for suburban lots to $220+ for North Shore. Rivers Casino is offering a $500 four-day parking package.",
  },
  {
    question: "Is there free parking near the NFL Draft?",
    answer:
      "Free street parking exists in some neighborhoods (South Side, Lawrenceville) but you'll need to walk or take transit from there. The best free option is to park at a suburban park-and-ride lot and take the Football Flyer bus.",
  },
  {
    question: "What bridges and roads are closed during the NFL Draft?",
    answer:
      "Roberto Clemente Bridge (6th Street) and Andy Warhol Bridge (7th Street) are closed to vehicles. Fort Pitt Bridge on-ramp, several I-279 exits, and Fort Duquesne Boulevard are also closed. The closures happen in 6 phases from March 28 through May 10.",
  },
];

export default function ParkingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Parking & Transportation", href: "/parking-transportation" },
        ]}
      />
      <FAQSchema items={parkingFAQs} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Parking &amp; Transportation
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            NFL Draft Pittsburgh Parking Guide 2026
          </h1>
          <p className="text-gray-300">
            The single most asked question about the draft. Here's everything
            you need to know about parking, transit, road closures, and getting
            to the event without losing your mind.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <QuickFacts facts={[
          "All T light rail rides are FREE April 23-25",
          "Downtown garage parking: $125-250/day",
          "North Shore lots mostly closed for draft construction",
          "Best option: Park-and-ride + Football Flyer bus (free)",
          "Pre-book on SpotHero if you must drive ($10-35 suburban)",
        ]} />
        <p className="text-xs text-muted text-center mb-2">
          Sources: PRT announcements, visitpittsburgh.com, 27 Reddit threads,
          SpotHero listings, local news coverage.
        </p>
        <LastUpdated date="March 29, 2026" />
        <div className="mb-6" />

        {/* Don't drive warning */}
        <section className="border-l-2 border-accent pl-5 mb-14">
          <h2 className="text-xl font-heading mb-2">
            Should You Drive? Officials Say No. Here's Why.
          </h2>
          <p className="text-muted mb-3">
            Pittsburgh city officials, PRT (the transit authority), and the NFL
            are all saying the same thing: don't drive downtown for the draft.
            They're not being dramatic. Here's what you're up against:
          </p>
          <ul className="text-muted space-y-2 list-disc pl-5">
            <li>
              Most North Shore parking lots are{" "}
              <strong>closed for stage construction</strong>
            </li>
            <li>
              Downtown garages that charged $50 for Taylor Swift are expected to
              hit <strong>$100+</strong>
            </li>
            <li>
              Roberto Clemente Bridge and Andy Warhol Bridge are{" "}
              <strong>closed to cars</strong>
            </li>
            <li>
              Multiple I-279 exit ramps are <strong>shut down</strong>
            </li>
            <li>
              500,000+ people and <strong>not nearly enough parking</strong> for
              all of them
            </li>
          </ul>
          <p className="text-muted mt-3 font-semibold">
            The best move: park at a suburban lot, take the bus or T downtown.
            Keep reading for exactly how to do that.
          </p>
        </section>

        {/* Free transit callout */}
        <section className="border-l-2 border-accent pl-5 mb-14">
          <h2 className="text-xl font-heading mb-2">
            ALL T Rides Are FREE April 23-25 (Sheetz + PRT)
          </h2>
          <p className="text-muted mb-3">
            Sheetz just partnered with PRT to cover all fares on the T light
            rail (red, blue, and silver lines) and the Monongahela Incline
            during draft weekend. Every station. Every line. $0.
          </p>
          <ul className="text-muted space-y-2 list-disc pl-5 mb-3">
            <li>
              Park at <strong>South Hills Village</strong>, <strong>Dormont</strong>, or <strong>Castle Shannon</strong> T stations and ride straight downtown for free
            </li>
            <li>
              <strong>$25 Draft Pass</strong> in the Ready2Ride app gives you 7 days of unlimited PRT rides (buses too)
            </li>
            <li>
              <strong>Butler Transit</strong> is running service every 30 min from Zelienople (150 Lindsay Rd, Route 528 park-and-ride) to Ross Park lot — $10 round trip, exact cash only
            </li>
          </ul>
          <p className="text-muted text-sm">
            <Link
              href="/getting-around"
              className="text-primary font-semibold hover:underline"
            >
              Full transit details on our Getting Around page &rarr;
            </Link>
          </p>
        </section>

        {/* Downtown parking map */}
        <section className="mb-14">
          <h3 className="text-lg font-heading mb-2">Parking Near Draft Venues</h3>
          <p className="text-sm text-muted mb-3">
            Parking garages and lots near Point State Park and Acrisure
            Stadium. Most North Shore lots are closed for stage
            construction. Downtown garages are your closest option if
            you're driving.
          </p>
          <div className="rounded-lg overflow-hidden mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6068!2d-80.008!3d40.442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparking+garages+near+Point+State+Park+Pittsburgh+PA!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="350"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Parking garages near NFL Draft venues in Pittsburgh"
            />
          </div>

          <h3 className="text-lg font-heading mb-2">Park-and-Ride Locations</h3>
          <p className="text-sm text-muted mb-3">
            Officials say don't drive downtown. These park-and-ride
            lots let you park for free and take the bus or T light rail
            to the draft.
          </p>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48540!2d-80.05!3d40.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spark+and+ride+pittsburgh+PA!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="350"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Park and ride locations near Pittsburgh for NFL Draft"
            />
          </div>
        </section>

        {/* Park and ride */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Park-and-Ride Locations (By Direction)
          </h2>
          <p className="text-muted mb-4">
            PRT is running special "Football Flyer" bus routes from
            park-and-ride lots in every direction. Here are the best options
            based on where you're coming from.
          </p>

          <h3 className="text-lg font-heading mt-6 mb-2">From the North (Cranberry, Ross, McCandless)</h3>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold">Ross Park &amp; Ride (I-279 Exit 5)</p>
            <p className="text-sm text-muted">
              The #1 recommendation on Reddit for anyone coming from the north.
              Take the #8 bus or O1 express to downtown. About 25 minutes to the
              draft venues.
            </p>
          </div>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold">Butler Transit Authority (Route 528 Lot)</p>
            <p className="text-sm text-muted">
              Commuter bus from Butler County. Good option if you're coming from
              further north. Check Butler Transit for draft weekend schedules.
            </p>
          </div>
          <p className="text-sm text-muted mb-4">
            <Link
              href="/cranberry-township"
              className="text-primary font-semibold hover:underline"
            >
              Full guide for Cranberry Township visitors &rarr;
            </Link>
          </p>

          <h3 className="text-lg font-heading mt-6 mb-2">From the South</h3>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold">South Hills Village T Station</p>
            <p className="text-sm text-muted">
              Park here and ride the T light rail directly to Allegheny Station
              (North Shore) or downtown. The T runs through a free fare zone
              downtown. About 35 minutes.
            </p>
          </div>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold">Dormont T Stations (Beechview, Dormont, Castle Shannon)</p>
            <p className="text-sm text-muted">
              Multiple stations along the T line with paid parking lots and free
              street parking nearby. Closer to downtown than South Hills Village.
            </p>
          </div>

          <h3 className="text-lg font-heading mt-6 mb-2">From the East</h3>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold">Wilkinsburg Park &amp; Ride</p>
            <p className="text-sm text-muted">
              Take the P1 bus. 15 minutes to downtown. The East Busway is one of
              Pittsburgh's best transit routes -- fast, reliable, and frequent
              service.
            </p>
          </div>

          <h3 className="text-lg font-heading mt-6 mb-2">From the West / Airport</h3>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold">PRT Route 28X</p>
            <p className="text-sm text-muted">
              Airport bus service to downtown. PRT is adding extra 28X service
              for draft weekend. About 45-60 minutes from the airport.
            </p>
          </div>
        </section>

        {/* Downtown parking */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            If You Must Drive: Parking Options and Pricing
          </h2>

          <h3 className="text-lg font-heading mt-6 mb-3">Pre-Book on SpotHero</h3>
          <p className="text-muted mb-4">
            The smartest move if you're driving is to pre-book a guaranteed spot.{" "}
            <a
              href="https://spothero.com/city/pittsburgh-parking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              SpotHero
            </a>{" "}
            has listings starting from $10.99 for suburban lots and
            $50+ for downtown locations. Prices go up as the event gets closer.
          </p>
          <div className="border-l-2 border-accent pl-5 mb-4">
            <a
              href="https://spothero.com/city/pittsburgh-parking"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-foreground hover:underline"
            >
              Search Pittsburgh Parking on SpotHero &rarr;
            </a>
            <p className="text-sm text-muted mt-1">
              Pre-book a guaranteed spot now. Prices are going up daily as the draft gets closer.
            </p>
          </div>

          <h3 className="text-lg font-heading mt-6 mb-3">Downtown Garages</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">Est. Price</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3">Alco North Shore Lots</td>
                  <td className="p-3">$15-35 (normal)</td>
                  <td className="p-3 text-muted">Many closed for draft. Check availability.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Downtown Garages (6th &amp; Penn area)</td>
                  <td className="p-3">$50-100+</td>
                  <td className="p-3 text-muted">Charged $50 for Taylor Swift. Draft will be more.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Rivers Casino Parking</td>
                  <td className="p-3">$500 (4-day pass)</td>
                  <td className="p-3 text-muted">Package deal with hotel. Walking distance to North Shore.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">South Side street parking</td>
                  <td className="p-3">Free-$5</td>
                  <td className="p-3 text-muted">Walk across 10th Street Bridge (~20 min) or take bus.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* The T */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            The T Light Rail: Free Rides Between Both Venues
          </h2>
          <p className="text-muted mb-3">
            Here's something most visitors don't know: Pittsburgh has a light
            rail system called "the T," and it runs through a{" "}
            <strong>free fare zone</strong> downtown. That means you can ride
            between the two draft venues -- Allegheny Station (North Shore, near
            Acrisure Stadium) and downtown (near Point State Park) -- for free.
          </p>
          <p className="text-muted">
            The T is also the easiest way to get to the draft from the south
            suburbs. Park at South Hills Village, Dormont, or any station along
            the Red or Blue line, and ride straight to the action.
          </p>
        </section>

        {/* Road closures */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Road Closures You Need to Know
          </h2>
          <p className="text-muted mb-4">
            The city has a 6-phase closure plan that runs from March 28 through
            May 10. Here's what matters for draft weekend (Phase 3, April
            22-25):
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5">
            <li>
              <strong>Roberto Clemente Bridge (6th Street)</strong> -- Closed to
              vehicles. Open to pedestrians (it connects the two draft areas).
            </li>
            <li>
              <strong>Andy Warhol Bridge (7th Street)</strong> -- Closed to
              vehicles.
            </li>
            <li>
              <strong>Fort Duquesne Boulevard</strong> -- Closed between 6th
              and 10th Streets.
            </li>
            <li>
              <strong>I-279 Exit Ramps</strong> -- Several exits near downtown
              are closed. Check PennDOT for specifics.
            </li>
            <li>
              <strong>Fort Pitt Bridge on-ramp</strong> -- Closed from the
              Boulevard of the Allies.
            </li>
          </ul>
          <p className="text-muted mt-3">
            Companies are telling workers to stay home. Pittsburgh Public Schools
            are going remote for 3 days. If that doesn't tell you how serious
            the closures are, nothing will.
          </p>
        </section>

        {/* Uber/Lyft */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Uber and Lyft Tips
          </h2>
          <p className="text-muted mb-3">
            Rideshare is an option, but expect surge pricing. One Reddit user
            estimated $80 from Cranberry Township with surge. Here's how to
            minimize the pain:
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5">
            <li>
              Designated pickup/dropoff spots will be announced closer to the
              event. They probably won't be convenient.
            </li>
            <li>
              Walk a few blocks away from the main venues before requesting a
              ride. Surge pricing is highest right at the event.
            </li>
            <li>
              Late night rides home will be the hardest to get. Consider staying
              on the South Side and walking to Carson Street for easier pickups.
            </li>
            <li>
              Pre-schedule your return ride if the app allows it.
            </li>
          </ul>
        </section>

        {/* FAQ section */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-6">
            Parking FAQ
          </h2>
          <div className="space-y-4">
            {parkingFAQs.map((faq) => (
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

        {/* CTA */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-heading mb-2">
            Need the full picture?
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Check our other guides for hotels, restaurants, and the day-by-day
            itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/where-to-stay"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Where to Stay
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

      <RelatedPages
        current="parking"
        slugs={["getting_around", "schedule", "budget", "checklist"]}
      />
    </>
  );
}
