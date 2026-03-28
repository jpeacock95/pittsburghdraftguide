import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Getting Around Pittsburgh During the NFL Draft",
  description:
    "How to get around Pittsburgh during the 2026 NFL Draft. The T light rail, Football Flyer buses, rideshare tips, and walking routes between venues.",
};

const gettingAroundFAQs = [
  {
    question:
      "How do I get between the two NFL Draft venues in Pittsburgh?",
    answer:
      "The two venues (Acrisure Stadium on the North Shore and Point State Park downtown) are connected by the Roberto Clemente Bridge, which is pedestrian-only during draft weekend. It's about a 15-minute walk. You can also take the T light rail from Allegheny Station to any downtown station for free. The Gateway Clipper ferry also runs between the two sites.",
  },
  {
    question: "Is the T light rail free during the NFL Draft?",
    answer:
      "Yes. Pittsburgh's T light rail has a permanent Free Fare Zone that covers all downtown stations and the North Shore (Allegheny Station). You can ride between the two draft venues for free. If you board outside the Free Fare Zone (like from South Hills Village), you'll pay standard fare until you enter the free zone.",
  },
  {
    question:
      "How much will Uber and Lyft cost during the NFL Draft in Pittsburgh?",
    answer:
      "Expect surge pricing, especially right at the venues and after evening events. One Reddit estimate put a ride from Cranberry Township at $80 with surge. Walk a few blocks away from the main venues before requesting a ride. Late-night pickups will be the hardest. Pre-schedule your return trip if possible.",
  },
  {
    question:
      "Can I walk between Pittsburgh neighborhoods during the NFL Draft?",
    answer:
      "Yes for nearby neighborhoods. North Shore to Point State Park is 15 minutes across Roberto Clemente Bridge. Downtown to the Strip District is about 12 minutes. Downtown to Station Square is 10 minutes across Smithfield Street Bridge. South Side and Lawrenceville are better reached by Uber or bus.",
  },
];

export default function GettingAroundPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Getting Around", href: "/getting-around" },
        ]}
      />
      <FAQSchema items={gettingAroundFAQs} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Getting Around
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Getting Around Pittsburgh During the NFL Draft
          </h1>
          <p className="text-gray-300">
            Two venues separated by a river. 500,000+ visitors. Major road
            closures. Here's every way to move around the city without losing
            your mind.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* The two venues */}
        <Image
          src="/north-shore.png"
          alt="North Shore riverwalk connecting the two NFL Draft venues in Pittsburgh"
          width={800}
          height={450}
          className="rounded-lg w-full h-auto mb-8"
        />
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            The Two Venues (And How to Get Between Them)
          </h2>
          <p className="text-muted mb-3">
            The 2026 NFL Draft is split across two locations separated by the
            Allegheny River:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">Draft Theater</p>
              <p className="text-sm text-muted">
                North Shore, near Acrisure Stadium. This is the main stage where
                picks get announced. Fan viewing on the field for Rounds 1-3.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">Draft Experience</p>
              <p className="text-sm text-muted">
                Point State Park, downtown. Free fan festival with the 40-yard
                dash, autograph stage, Lombardi Trophy, and field goal
                challenge.
              </p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="font-bold text-green-900 text-sm mb-2">
              3 ways to get between them:
            </p>
            <ul className="text-sm text-green-800 space-y-2 list-disc pl-5">
              <li>
                <strong>Walk across Roberto Clemente Bridge</strong> --
                Pedestrian-only during draft weekend. About 15 minutes door to
                door. The easiest option.
              </li>
              <li>
                <strong>Ride the T light rail</strong> -- Allegheny Station
                (North Shore) to any downtown station. Free. About 5 minutes.
              </li>
              <li>
                <strong>Take the Gateway Clipper ferry</strong> -- Boat service
                between North Shore and downtown/Station Square. Unique way to
                travel. Confirmed running all draft weekend.
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Draft Venue Map</h3>
            <p className="text-sm text-muted mb-3">
              Point State Park (Draft Experience) is at the bottom. Acrisure
              Stadium (Draft Theater) is across the river at the top. Roberto
              Clemente Bridge connects them.
            </p>
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6067.84!2d-80.0095!3d40.4425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f157d1e0e0a1%3A0x0!2zNDDCsDI2JzMzLjAiTiA4MMKwMDAnMzQuMiJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="350"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of NFL Draft venues in Pittsburgh"
              />
            </div>
          </div>
        </section>

        {/* The T */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            The T Light Rail (Your Best Friend)
          </h2>
          <p className="text-muted mb-3">
            If you remember one thing from this page, make it this: Pittsburgh
            has a light rail system called "the T," and it's{" "}
            <strong>free</strong> in the downtown/North Shore area.
          </p>
          <div className="bg-surface border border-border rounded-lg p-5 mb-4">
            <h3 className="font-bold mb-3">How the Free Fare Zone works</h3>
            <ul className="text-sm text-muted space-y-2 list-disc pl-5">
              <li>
                The Free Fare Zone covers every station from{" "}
                <strong>Allegheny Station</strong> (North Shore) through all
                downtown stations to <strong>First Avenue Station</strong>.
              </li>
              <li>
                That means free rides between both draft venues. Just hop on, hop
                off. No ticket, no tap, no fare.
              </li>
              <li>
                If you board outside the Free Fare Zone (like South Hills
                Village), you pay standard fare until you enter the zone.
              </li>
              <li>
                The T runs from the South Hills suburbs all the way through
                downtown and across to North Shore. Two lines: Red (South Hills
                Village) and Blue (Library).
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-bold text-blue-900 text-sm mb-1">
              Pro tip for drivers
            </p>
            <p className="text-sm text-blue-800">
              Park at South Hills Village, Dormont, or Castle Shannon T
              stations. Ride the T straight into the Free Fare Zone. You'll
              skip all the downtown parking chaos and road closures. About 35
              minutes from South Hills Village to Allegheny Station.
            </p>
          </div>
        </section>

        {/* Football Flyer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Football Flyer Bus Routes
          </h2>
          <p className="text-muted mb-3">
            Pittsburgh Regional Transit (PRT) is running special "Football
            Flyer" buses from park-and-ride lots in every direction. These are
            dedicated draft shuttle routes that skip regular stops and go
            straight to the venues.
          </p>
          <div className="space-y-3 mb-4">
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold text-sm">From the North</p>
              <p className="text-sm text-muted">
                Ross Park &amp; Ride (I-279 Exit 5). The #1 recommendation for
                anyone coming from Cranberry, McCandless, or Ross Township.
                About 25 minutes to the draft venues.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold text-sm">From the South</p>
              <p className="text-sm text-muted">
                South Hills Village T Station or Dormont T stations. Park and
                ride the T directly into the Free Fare Zone.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold text-sm">From the East</p>
              <p className="text-sm text-muted">
                Wilkinsburg Park &amp; Ride on the East Busway. P1 bus. 15
                minutes to downtown. One of Pittsburgh's fastest transit
                routes.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold text-sm">From the West / Airport</p>
              <p className="text-sm text-muted">
                PRT Route 28X airport bus. Extra service added for draft
                weekend. About 45-60 minutes from the airport to downtown.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted">
            <Link
              href="/parking-transportation"
              className="text-primary font-semibold hover:underline"
            >
              Full park-and-ride details and pricing on our Parking Guide &rarr;
            </Link>
          </p>
        </section>

        {/* Walking routes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Walking Routes</h2>
          <p className="text-muted mb-4">
            Pittsburgh is more walkable than most people expect, especially in
            the draft area. Here are the key walking routes and times.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-3 font-semibold">From</th>
                  <th className="text-left p-3 font-semibold">To</th>
                  <th className="text-left p-3 font-semibold">Walk Time</th>
                  <th className="text-left p-3 font-semibold">Route</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3">North Shore (Acrisure)</td>
                  <td className="p-3">Point State Park</td>
                  <td className="p-3 font-semibold">15 min</td>
                  <td className="p-3 text-muted">
                    Roberto Clemente Bridge (pedestrian-only)
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Downtown</td>
                  <td className="p-3">Strip District</td>
                  <td className="p-3 font-semibold">12 min</td>
                  <td className="p-3 text-muted">
                    East along Liberty Ave or Penn Ave
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Downtown</td>
                  <td className="p-3">Station Square</td>
                  <td className="p-3 font-semibold">10 min</td>
                  <td className="p-3 text-muted">
                    Smithfield Street Bridge (stays open)
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">North Shore</td>
                  <td className="p-3">Strip District</td>
                  <td className="p-3 font-semibold">20 min</td>
                  <td className="p-3 text-muted">
                    Fort Duquesne Bridge walkway, then east along the river
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Point State Park</td>
                  <td className="p-3">Market Square</td>
                  <td className="p-3 font-semibold">7 min</td>
                  <td className="p-3 text-muted">
                    Straight up 4th Ave or Forbes Ave
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Downtown</td>
                  <td className="p-3">South Side (Carson St)</td>
                  <td className="p-3 font-semibold">20 min</td>
                  <td className="p-3 text-muted">
                    10th Street Bridge or Smithfield St Bridge to Station Sq,
                    then walk east
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="font-bold text-amber-900 text-sm mb-1">
              The Riverwalk trail
            </p>
            <p className="text-sm text-amber-800">
              Pittsburgh's Three Rivers Heritage Trail runs along the riverfront
              on both sides. It connects the North Shore, Point State Park,
              Station Square, and the Strip District. It's flat, paved, and
              scenic. Perfect for walking between areas if you don't mind a
              slightly longer but nicer route.
            </p>
          </div>
        </section>

        {/* Uber/Lyft */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Uber &amp; Lyft Tips</h2>
          <p className="text-muted mb-4">
            Rideshare will work. But it won't be cheap, and it won't be fast.
            Here's how to make it less painful.
          </p>
          <ul className="space-y-3 text-muted list-disc pl-5 mb-4">
            <li>
              <strong>Walk away from the venues before requesting.</strong>{" "}
              Surge pricing is highest right at Acrisure Stadium and Point
              State Park. Walk 3-4 blocks in any direction and you'll see the
              price drop. One Reddit user estimated $80 from Cranberry Township
              with surge active.
            </li>
            <li>
              <strong>Late night is the hardest.</strong> After Round 1 ends
              Thursday night and the concerts let out, every single person will
              want a ride at the same time. If you're staying on the South
              Side, walk to Carson Street for easier pickups. Otherwise,
              consider staying near the venues and walking back to your hotel.
            </li>
            <li>
              <strong>Pre-schedule your return trip</strong> if the app lets
              you. It won't guarantee a price, but it helps with availability.
            </li>
            <li>
              <strong>Designated pickup/dropoff spots</strong> will be
              announced closer to the event. They probably won't be right at
              the venue entrance. Expect a 5-10 minute walk to the pickup
              zone.
            </li>
            <li>
              <strong>Consider the T instead.</strong> For anything between
              North Shore, downtown, and the South Hills, the T is faster and
              cheaper (free in the downtown zone). Don't pay surge pricing for
              a ride that the light rail covers for $0.
            </li>
          </ul>
          <p className="text-sm text-muted">
            <Link
              href="/parking-transportation"
              className="text-primary font-semibold hover:underline"
            >
              More rideshare details on our Parking &amp; Transportation page
              &rarr;
            </Link>
          </p>
        </section>

        {/* Gateway Clipper */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            <a href="https://www.gatewayclipper.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Gateway Clipper</a> (River Ferry)
          </h2>
          <p className="text-muted mb-3">
            This is the fun option. The <a href="https://www.gatewayclipper.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Gateway Clipper Fleet</a> is running
            riverboat service between North Shore and downtown/Station Square
            all draft weekend. It's confirmed for events and games, and the NFL
            Draft qualifies.
          </p>
          <div className="bg-surface border border-border rounded-lg p-4">
            <ul className="text-sm text-muted space-y-2 list-disc pl-5">
              <li>
                Connects North Shore, downtown, and Station Square by water.
              </li>
              <li>
                It's not the fastest option (the T or walking is quicker), but
                it's the most fun. You're on a boat on the river looking at the
                Pittsburgh skyline.
              </li>
              <li>
                They're also hosting "DVE Rocks the Draft" watch party
                cruises (waitlist only as of March 2026).
              </li>
              <li>
                Boarding locations at North Shore and Station Square. Check
                Gateway Clipper's site for draft weekend schedules and pricing.
              </li>
            </ul>
          </div>
        </section>

        {/* Bridges */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Bridges You Need to Know
          </h2>
          <p className="text-muted mb-4">
            Pittsburgh has 446 bridges. You don't need to know all of them.
            Here are the 5 that matter for draft weekend.
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-green-900 text-sm">
                Roberto Clemente Bridge (6th Street)
              </p>
              <p className="text-sm text-green-800">
                Pedestrian-only all draft weekend. This is THE bridge connecting
                the two draft sites. You'll probably walk it 5 times. It's the
                iconic yellow one in every Pittsburgh photo.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-bold text-red-900 text-sm">
                Andy Warhol Bridge (7th Street)
              </p>
              <p className="text-sm text-red-800">
                Closed to vehicles AND pedestrians during the draft. Don't plan
                on using this one.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-green-900 text-sm">
                Fort Duquesne Bridge
              </p>
              <p className="text-sm text-green-800">
                Walkable. Connects the North Shore to the northeast edge of
                downtown. Good alternate route if Roberto Clemente Bridge is too
                crowded. Also useful for walking to the Strip District from the
                North Shore.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-green-900 text-sm">
                Smithfield Street Bridge
              </p>
              <p className="text-sm text-green-800">
                Open to vehicles and pedestrians. Connects downtown to Station
                Square and the South Side. Your best bet for crossing the
                Monongahela River on foot.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-green-900 text-sm">
                10th Street Bridge (South 10th Street)
              </p>
              <p className="text-sm text-green-800">
                Connects downtown to the South Side directly. About a 20-min
                walk from Point State Park to Carson Street via this bridge.
                Good option for getting to South Side nightlife.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Getting Around FAQ
          </h2>
          <div className="space-y-4">
            {gettingAroundFAQs.map((faq) => (
              <div
                key={faq.question}
                className="bg-surface border border-border rounded-lg p-5"
              >
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-2">
            Now that you know how to get around...
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Check out the neighborhoods, find a place to eat, or figure out
            where to park.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/neighborhoods"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Neighborhoods
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
              href="/itinerary"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Day-by-Day Itinerary
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
