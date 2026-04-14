import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh Transit (Free Rides)",
  description:
    "The T light rail is free downtown. Football Flyer buses run all weekend. Rideshare, walking routes, and how to get between venues without a car.",
};

const gettingAroundFAQs = [
  {
    question:
      "How do I get between the two NFL Draft venues in Pittsburgh?",
    answer:
      "The two venues (Acrisure Stadium on the North Shore and Point State Park downtown) are connected by the Roberto Clemente Bridge, which is pedestrian-only during draft weekend. It's about a 15-minute walk. You can also take the T light rail from North Side Station to any downtown station for free (Allegheny Station is closed during draft weekend). The Gateway Clipper ferry also runs between the two sites on Friday and Saturday.",
  },
  {
    question: "Is the T light rail free during the NFL Draft?",
    answer:
      "Yes. ALL T rides are completely free April 23-25 thanks to a Sheetz and PRT partnership. That covers every station on the red, blue, and silver lines plus the Monongahela Incline. You can park at South Hills Village and ride the T all the way downtown for $0. There's also a $25 Draft Pass in the Ready2Ride app for 7 days of unlimited rides including buses.",
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
      <section
        className="photo-section text-white py-16 md:py-20"
        style={{ backgroundImage: "url('/pgh-transit-train.webp')" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Getting Around
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
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
        <LastUpdated date="April 13, 2026" />

        {/* FREE Transit - Major Announcement */}
        <section className="border-l-2 border-accent pl-5 mb-14">
          <h2 className="text-xl font-heading mb-2">
            FREE Transit All Draft Weekend (Sheetz + PRT)
          </h2>
          <p className="text-muted mb-3">
            Sheetz is sponsoring <strong>free rides on the T (light rail) and the
            <a href="https://monongahelaincline.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Monongahela Incline</a></strong> for the entire draft weekend, April
            23-25. That covers every station on the red, blue, and silver lines.
            This is a partnership between Sheetz and <a href="https://www.rideprt.org/2026-draft/draft/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pittsburgh Regional Transit
            (PRT)</a>. The <a href="https://www.duquesneincline.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Duquesne Incline</a> is separately operated and not included.
          </p>
          <p className="text-muted mb-3">
            Park at South Hills Village, Castle Shannon, or Dormont and ride the T
            straight to the draft venues for $0. This is the single best
            transportation hack for the weekend.
          </p>
        </section>

        {/* Allegheny Station Closure Warning */}
        <section className="border-l-2 border-red-500/60 pl-5 mb-14">
          <h2 className="text-xl font-heading mb-2">
            Allegheny T Station is CLOSED April 22-25
          </h2>
          <p className="text-muted mb-2">
            If you were planning to get off at Allegheny Station on the T, you can't. It's closed for draft infrastructure from April 22 through April 25. Use <strong>North Side Station</strong> instead. It's one stop south on the same line, about a 3-minute walk difference. You'll still end up in the same North Shore area near Acrisure Stadium.
          </p>
          <p className="text-sm text-muted">
            Downtown stations (Gateway, Wood Street, Steel Plaza, First Avenue) are all open and connect to North Side Station.
          </p>
        </section>

        {/* Road Closures - Already Started */}
        <section className="border-l-2 border-red-500/60 pl-5 mb-14">
          <h2 className="text-xl font-heading mb-2">
            Road Closures (Already in Effect)
          </h2>
          <p className="text-muted mb-3">
            Phase 1 road closures began March 28. This is not a future event. The
            roads are already closed. Six phases of closures escalate through
            April 25, with cleanup running through May 10.
          </p>
          <ul className="text-muted space-y-2 list-disc pl-5 mb-3">
            <li><strong>Phase 1 (active since March 28):</strong> Art Rooney Ave, West General Robinson St, Scotland Ave</li>
            <li><strong>Phase 2 (active now, April 13-21):</strong> Casino Drive, North Shore Drive (to Chuck Noll Way), Reedsdale Street, Chuck Noll Way, Tony Dorsett Drive. The <strong>I-279 Southbound Exit 1B ramp to the North Shore is also already shut down</strong> (closed earlier than originally scheduled). Kamin Science Center is closed to walk-ins April 13-May 1.</li>
            <li><strong>Phase 3 (April 22-25, draft week):</strong> Adds Sproat Way, Mazeroski Way, Lacock Street, Federal Street, the 6th Street (Roberto Clemente) and 7th Street (Andy Warhol) bridges, Sixth Street, Commonwealth Place, Liberty Ave Extension, and Penn Ave from Stanwix to 9th Street.</li>
            <li><strong>Roberto Clemente Bridge:</strong> Pedestrian-only during draft weekend (no vehicles)</li>
            <li><strong>Andy Warhol Bridge:</strong> Closed to vehicles. Pedestrians routed to Roberto Clemente Bridge.</li>
            <li><strong>Fort Pitt Bridge on-ramp</strong> closed from 10th Street Bypass</li>
          </ul>
          <p className="text-muted mb-3">
            <strong>Pittsburgh Public Schools are going remote April 22-24</strong> because of the closures. Major downtown employers (PPG, Highmark, PNC, Koppers) are also telling employees to work from home April 20-24. That should tell you everything about how serious this is.
          </p>
          <p className="text-muted text-sm">
            <strong>Expected attendance:</strong> 500,000 to 700,000 visitors over the 3-day event.
          </p>
        </section>

        {/* River Security + Cell Tower */}
        <section className="card-minimal p-5 mb-14">
          <h3 className="font-bold mb-2">Other Things to Know</h3>
          <ul className="text-sm text-muted space-y-2 list-disc pl-5">
            <li><strong>Coast Guard river security zone:</strong> No recreational boats allowed in the river near the draft venues during the event.</li>
            <li><strong>Cell phone tower built in Point State Park:</strong> The NFL and local authorities installed a temporary cell tower to handle the massive crowd capacity. Your phone will still be slow, but it helps.</li>
          </ul>
        </section>

        {/* The two venues */}
        <Image
          src="/pgh-clemente-bridge.webp"
          alt="Roberto Clemente Bridge connecting downtown Pittsburgh to the North Shore draft venues"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-lg w-full h-auto mb-8"
        />
        <section className="mb-14">
          <h2 id="venues" className="text-2xl font-heading mb-4">
            The Two Venues (And How to Get Between Them)
          </h2>
          <p className="text-muted mb-3">
            The 2026 NFL Draft is split across two locations separated by the
            Allegheny River:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="card-minimal p-4">
              <p className="font-bold mb-1">Draft Theater</p>
              <p className="text-sm text-muted">
                North Shore, near Acrisure Stadium. This is the main stage where
                picks get announced. Fan viewing on the field for Rounds 1-3.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold mb-1">Draft Experience</p>
              <p className="text-sm text-muted">
                Point State Park, downtown. Free fan festival with the 40-yard
                dash, autograph stage, Lombardi Trophy, and field goal
                challenge.
              </p>
            </div>
          </div>
          <div className="border-l-2 border-accent pl-5">
            <p className="font-bold text-foreground text-sm mb-2">
              3 ways to get between them:
            </p>
            <ul className="text-sm text-muted space-y-2 list-disc pl-5">
              <li>
                <strong>Walk across Roberto Clemente Bridge:</strong> Pedestrian-only during draft weekend. About 15 minutes door to
                door. The easiest option.
              </li>
              <li>
                <strong>Ride the T light rail:</strong> North Side Station
                (North Shore) to any downtown station. Free. About 5 minutes. Note: Allegheny Station is closed during draft weekend.
              </li>
              <li>
                <strong>Take the <a href="https://www.gatewayclipper.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Gateway Clipper</a> ferry:</strong> Boat service
                between North Shore and downtown/Station Square. Unique way to
                travel. Confirmed running all draft weekend.
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="mt-6">
            <h3 className="text-lg font-heading mb-2">Draft Venue Map</h3>
            <p className="text-sm text-muted mb-3">
              Point State Park (Draft Experience) is at the bottom. Acrisure
              Stadium (Draft Theater) is across the river at the top. Roberto
              Clemente Bridge connects them. Transit stops are pinned.
            </p>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6068!2d-80.008!3d40.442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stransit+stops+near+Point+State+Park+and+Acrisure+Stadium+Pittsburgh+PA!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="350"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Transit stops near NFL Draft venues in Pittsburgh"
              />
            </div>
          </div>
        </section>

        {/* The T */}
        <section className="mb-14">
          <h2 id="t-light-rail" className="text-2xl font-heading mb-4">
            The T Light Rail (Your Best Friend)
          </h2>
          <div className="border-l-2 border-accent pl-5 mb-4">
            <p className="font-bold text-foreground text-lg mb-2">
              ALL T rides are FREE during draft weekend
            </p>
            <p className="text-sm text-muted mb-3">
              Sheetz and PRT just announced a partnership covering all fares on
              the T (red, blue, and silver lines) and the Monongahela Incline
              from April 23-25. Not just the downtown Free Fare Zone. Every
              station. Every line. Every ride. Free. (Note: the Duquesne
              Incline is separately operated and not included.)
            </p>
            <p className="text-sm text-muted">
              That means you can park at South Hills Village, ride the T all
              the way downtown, and pay $0. This is the single best
              transportation hack for draft weekend.
            </p>
          </div>
          <p className="text-muted mb-3">
            Pittsburgh has a light rail system called "the T." Normally, the
            downtown/North Shore area is a permanent Free Fare Zone. But during
            draft weekend, Sheetz is covering fares on the entire system.
          </p>
          <div className="card-minimal p-5 mb-4">
            <h3 className="font-bold mb-3">Draft weekend transit details</h3>
            <ul className="text-sm text-muted space-y-2 list-disc pl-5">
              <li>
                <strong>Free fares April 23-25</strong> on all T lines (red,
                blue, silver) and the Monongahela Incline. Courtesy of Sheetz.
              </li>
              <li>
                The T connects South Hills suburbs all the way through
                downtown and across to North Shore. Three lines: Red (South Hills
                Village), Blue (Library), and Silver.
              </li>
              <li>
                <strong>PRT fare options:</strong> A 3-hour pass is just $2.75 (unlimited buses/T for 3 hours). A day pass is $7. The <strong>$25 Draft Pass</strong> in the <a href="https://www.rideprt.org/fares-and-passes/connectcard/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Ready2Ride
                app</a> covers 7 days of unlimited rides including buses. If you're only making one round trip, the $2.75 pass is the move.
              </li>
              <li>
                <strong><a href="https://www.butlertransitauthority.com/news-draft-in-pittsburgh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Butler Transit Authority</a></strong> is running service
                every 30 minutes between the Route 528 park-and-ride in
                Zelienople (150 Lindsay Rd, Jackson Township) and PRT's <a href="https://www.rideprt.org/park-and-ride-lots/park-and-rides/ross/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Ross
                Park</a> lot. $10 round trip, exact cash only. 350 parking spaces
                available. Great if you're coming from Butler County.
              </li>
            </ul>
          </div>
          <div className="border-l-2 border-accent pl-5">
            <p className="font-bold text-foreground text-sm mb-1">
              Pro tip for drivers
            </p>
            <p className="text-sm text-muted">
              Park at South Hills Village, Dormont, or Castle Shannon T
              stations. Ride the T straight downtown for free. You'll
              skip all the parking chaos and road closures. About 35
              minutes from South Hills Village to North Side Station. Cost: $0.
            </p>
          </div>
        </section>

        {/* Football Flyer */}
        <section className="mb-14">
          <h2 id="bus-routes" className="text-2xl font-heading mb-4">
            Football Flyer Bus Routes
          </h2>
          <p className="text-muted mb-3">
            <a href="https://www.rideprt.org/2026-draft/draft/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Pittsburgh Regional Transit (PRT)</a> is running special "Football
            Flyer" buses from park-and-ride lots in every direction. These are
            dedicated draft shuttle routes that skip regular stops and go
            straight to the venues.
          </p>
          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm">From the North (Route 99N)</p>
              <p className="text-sm text-muted">
                McCandless Park &amp; Ride (9700 McKnight Rd) to Ross Park &amp;
                Ride (5204 Perry Hwy), then via I-279 HOV lanes to the venues.
                Every 15 min Thu/Fri, every 30 min Saturday. About 25 minutes.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm">From the South (Route 99S + T)</p>
              <p className="text-sm text-muted">
                Large Park &amp; Ride (219 Peters Creek Rd) via South Busway.
                Or take the T from South Hills Village or Dormont stations for
                free (Sheetz sponsorship covers the T, not buses).
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm">From the East (Route 99E)</p>
              <p className="text-sm text-muted">
                Starts at Monroeville Mall, serves every East Busway station.
                The East Busway is one of Pittsburgh's fastest transit routes.
                15 minutes from Wilkinsburg.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm">From the West / Airport (Route 99W + 28X)</p>
              <p className="text-sm text-muted">
                University Blvd Park &amp; Ride (9000 University Blvd) via West
                Busway. Also serves the lower stations of both the Duquesne Incline and Monongahela Incline.
                PRT Route 28X has extra airport service. 45-60 min from the airport.
              </p>
            </div>
            <p className="text-xs text-muted mt-2">
              All four Football Flyers drop off and pick up at two locations: near Point State Park in Downtown and near PNC Park on the North Shore. They run every 15 min Thu/Fri, every 30 min Saturday, 10 AM to 1 AM. Regular PRT fare or $25 Draft Pass required (only the T and Mon Incline are free). PRT is also increasing service systemwide on Saturday.
            </p>
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

        {/* Regional Transit */}
        <section className="mb-14">
          <h2 id="regional-transit" className="text-2xl font-heading mb-4">
            Regional Transit (Outside Allegheny County)
          </h2>
          <p className="text-muted mb-4">
            Coming from outside Pittsburgh? Six regional transit agencies are running expanded service specifically for draft weekend. You don't have to figure out city parking if you're staying in the suburbs or surrounding counties.
          </p>
          <div className="space-y-3">
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm"><a href="https://www.bcta.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Beaver County Transit Authority</a></p>
              <p className="text-sm text-muted">
                Express trips between Beaver County Expressway Travel Center and Downtown. <strong>$5 each way or $10 unlimited day pass.</strong> Timed for draft activities.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm"><a href="https://www.butlertransitauthority.com/news-draft-in-pittsburgh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Butler Transit Authority</a></p>
              <p className="text-sm text-muted">
                Direct service from Route 528 Park &amp; Ride (Zelienople) to Ross Park &amp; Ride. $10 round trip, exact cash. Connect to PRT from there.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm"><a href="https://www.ncata.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Newcastle Area Transit Authority</a></p>
              <p className="text-sm text-muted">
                Regular commuter service to Downtown on Thursday and Friday, with adjusted routes for traffic changes.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm"><a href="https://www.freedom-transit.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Freedom Transit</a> (Washington County)</p>
              <p className="text-sm text-muted">
                Extended service hours and late-night return trips from Downtown. Good option if you're coming from the south and want to stay for the evening picks.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm">Fayette Area Coordinated Transit</p>
              <p className="text-sm text-muted">
                Draft-specific service connecting Uniontown and surrounding communities to regional park-and-ride locations. Extra midday and evening service.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm"><a href="https://mmvta.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mid-Mon Valley Transit Authority</a></p>
              <p className="text-sm text-muted">
                Regular commuter service plus a "Pittsburgh Express" route with late evening return trips from Downtown.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted mt-3">
            Source: VisitPittsburgh regional transportation plan (March 27, 2026)
          </p>
        </section>

        {/* Walking routes */}
        <section className="mb-14">
          <h2 id="walking" className="text-2xl font-heading mb-4">Walking Routes</h2>
          <p className="text-muted mb-4">
            Pittsburgh is more walkable than most people expect, especially in
            the draft area. Here are the key walking routes and times.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[560px] text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-2 sm:p-3 font-semibold">From</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">To</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">Walk Time</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">Route</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3">North Shore (Acrisure)</td>
                  <td className="p-2 sm:p-3">Point State Park</td>
                  <td className="p-2 sm:p-3 font-semibold">15 min</td>
                  <td className="p-2 sm:p-3 text-muted">
                    Roberto Clemente Bridge (pedestrian-only)
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3">Downtown</td>
                  <td className="p-2 sm:p-3">Strip District</td>
                  <td className="p-2 sm:p-3 font-semibold">12 min</td>
                  <td className="p-2 sm:p-3 text-muted">
                    East along Liberty Ave or Penn Ave
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3">Downtown</td>
                  <td className="p-2 sm:p-3">Station Square</td>
                  <td className="p-2 sm:p-3 font-semibold">10 min</td>
                  <td className="p-2 sm:p-3 text-muted">
                    Smithfield Street Bridge (stays open)
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3">North Shore</td>
                  <td className="p-2 sm:p-3">Strip District</td>
                  <td className="p-2 sm:p-3 font-semibold">20 min</td>
                  <td className="p-2 sm:p-3 text-muted">
                    Fort Duquesne Bridge walkway, then east along the river
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3">Point State Park</td>
                  <td className="p-2 sm:p-3">Market Square</td>
                  <td className="p-2 sm:p-3 font-semibold">7 min</td>
                  <td className="p-2 sm:p-3 text-muted">
                    Straight up 4th Ave or Forbes Ave
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3">Downtown</td>
                  <td className="p-2 sm:p-3">South Side (Carson St)</td>
                  <td className="p-2 sm:p-3 font-semibold">20 min</td>
                  <td className="p-2 sm:p-3 text-muted">
                    10th Street Bridge or Smithfield St Bridge to Station Sq,
                    then walk east
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-l-2 border-accent pl-5">
            <p className="font-bold text-foreground text-sm mb-1">
              The Riverwalk trail
            </p>
            <p className="text-sm text-muted">
              Pittsburgh's Three Rivers Heritage Trail runs along the riverfront
              on both sides. It connects the North Shore, Point State Park,
              Station Square, and the Strip District. It's flat, paved, and
              scenic. Perfect for walking between areas if you don't mind a
              slightly longer but nicer route.
            </p>
          </div>
        </section>

        {/* Pedestrian Pathway */}
        <section className="mb-14">
          <h2 id="pedestrian-pathway" className="text-2xl font-heading mb-4">
            The Pedestrian Pathway (It's Part of the Show)
          </h2>
          <p className="text-muted mb-3">
            The walk between Downtown and the North Shore isn't just transportation. VisitPittsburgh is turning the pedestrian pathway into an experience. Nearly <strong>100 local buskers and street performers</strong> will line the route. Large-scale photo installations are set up along the way. Wayfinding elements connect you to nearby shops, restaurants, and small businesses.
          </p>
          <p className="text-muted">
            Don't rush through it. The walk from Point State Park to the Draft Theater takes about 15 minutes, and there's going to be something worth stopping for every 30 seconds.
          </p>
        </section>

        {/* Uber/Lyft */}
        <section className="mb-14">
          <h2 id="rideshare" className="text-2xl font-heading mb-4">Uber &amp; Lyft Tips</h2>
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
        <section className="mb-14">
          <h2 id="river-ferry" className="text-2xl font-heading mb-4">
            <a href="https://www.gatewayclipper.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Gateway Clipper</a> (FREE River Ferry)
          </h2>
          <p className="text-muted mb-3">
            This is the fun option, and it's <strong>free</strong>. The <a href="https://www.gatewayclipper.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Gateway Clipper Fleet</a> is running
            free riverboat shuttles between North Shore and Station Square on{" "}
            <strong>Friday and Saturday (April 24-25)</strong>. Four vessels
            will operate, moving visitors to the North Shore and Downtown with
            routes between Station Square and PNC Park, and between Point State
            Park and Acrisure Stadium Quay.
          </p>
          <div className="card-minimal p-4">
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
                cruise on Thursday, April 23 (sold out).
              </li>
              <li>
                The NFL confirmed the Gateway Clipper will offer <strong>free fan
                transportation</strong> between Point State Park and the North
                Shore during the draft. Boarding locations at North Shore and
                Station Square.
              </li>
            </ul>
          </div>
        </section>

        {/* Bridges */}
        <section className="mb-14">
          <h2 id="bridges" className="text-2xl font-heading mb-4">
            Bridges You Need to Know
          </h2>
          <p className="text-muted mb-4">
            Pittsburgh has 446 bridges. You don't need to know all of them.
            Here are the 5 that matter for draft weekend.
          </p>
          <div className="space-y-3">
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground text-sm">
                Roberto Clemente Bridge (6th Street)
              </p>
              <p className="text-sm text-muted">
                Pedestrian-only all draft weekend. This is THE bridge connecting
                the two draft sites. You'll probably walk it 5 times. It's the
                iconic yellow one in every Pittsburgh photo. <strong>Expect it to be a scene.</strong> Street performers, photo ops with the skyline behind you, and 100,000+ people crossing it daily. It's going to be one of the most photographed spots of the entire draft. Plan your walk across it, don't rush it.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground text-sm">
                Andy Warhol Bridge (7th Street)
              </p>
              <p className="text-sm text-muted">
                Closed to vehicles during the draft. Officials are routing all
                pedestrian traffic to Roberto Clemente Bridge instead. Don't plan
                on using this one.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground text-sm">
                Fort Duquesne Bridge
              </p>
              <p className="text-sm text-muted">
                Walkable. Connects the North Shore to the northeast edge of
                downtown. Good alternate route if Roberto Clemente Bridge is too
                crowded. Also useful for walking to the Strip District from the
                North Shore.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground text-sm">
                Smithfield Street Bridge
              </p>
              <p className="text-sm text-muted">
                Open to vehicles and pedestrians. Connects downtown to Station
                Square and the South Side. Your best bet for crossing the
                Monongahela River on foot.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground text-sm">
                10th Street Bridge (South 10th Street)
              </p>
              <p className="text-sm text-muted">
                Connects downtown to the South Side directly. About a 20-min
                walk from Point State Park to Carson Street via this bridge.
                Good option for getting to South Side nightlife.
              </p>
            </div>
          </div>
        </section>

        {/* POGOH Bike Share */}
        <section className="mb-14">
          <h2 id="bike-share" className="text-2xl font-heading mb-4">
            <a href="https://pogoh.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">POGOH Bike Share</a>
          </h2>
          <p className="text-muted mb-3">
            Pittsburgh's public bike-share program has stations across Downtown,
            the North Shore, and surrounding neighborhoods. Pedal bikes start at <strong>$4.50 per 30 minutes</strong>. Electric-assist bikes are <strong>$6 per 30 minutes</strong>. Card only. Unlock with the <a href="https://pogoh.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">POGOH app</a>.
            Good for short trips between neighborhoods when the T doesn't go
            where you need or the Uber surge is insane. Multiple Reddit users called POGOH a legit transit alternative for draft weekend, not just a tourist novelty.
          </p>
          <p className="text-muted text-sm mb-3">
            <strong>Heads up:</strong> The Three Rivers Heritage Trail goes through Point State Park but will be completely blocked by draft restrictions. Park on the South Side and use First Avenue as an alternate route if you're cycling.
          </p>
        </section>

        {/* Transit Apps */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">Transit Apps You Should Download</h2>
          <div className="space-y-3">
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm"><a href="https://www.rideprt.org/fares-passes/ready2ride/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ready2Ride</a> (PRT's Official App)</p>
              <p className="text-sm text-muted mt-1">
                Buy the $25 Draft Pass for 7 days of unlimited PRT rides (buses + T). Also load single fares and day passes. This is the official PRT app.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm"><a href="https://transitapp.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Transit App</a> (Real-Time Bus/Train Tracking)</p>
              <p className="text-sm text-muted mt-1">
                Shows real-time arrival times for PRT buses and the T. Works better than Google Maps for Pittsburgh transit. Reddit's go-to recommendation for navigating the bus system. Free.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm"><a href="https://www.parkpgh.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ParkPGH</a> (Garage Availability)</p>
              <p className="text-sm text-muted mt-1">
                Real-time parking garage availability for downtown Pittsburgh. If you're driving in, check this before you leave.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-sm"><a href="https://pogoh.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">POGOH</a> (Bike Share)</p>
              <p className="text-sm text-muted mt-1">
                Unlock pedal or e-bikes at stations across Pittsburgh. $4.50-6 per 30 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Regular bus routes */}
        <section className="card-minimal p-4 mb-14">
          <p className="font-semibold text-sm mb-1">Are Regular PRT Bus Routes Running?</p>
          <p className="text-sm text-muted">
            Yes, but with changes. PRT is running most regular routes on <strong>Saturday-level service</strong> Thursday and Friday. Some routes near the North Shore and Point State Park are suspended or rerouted. The Football Flyer express routes (99N, 99S, 99E, 99W) supplement regular service. Check <a href="https://www.rideprt.org/2026-draft/draft/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">rideprt.org/2026-draft</a> for the latest route-by-route status before you leave.
          </p>
        </section>

        {/* On-site help */}
        <section className="border-l-2 border-accent pl-5 mb-14">
          <p className="font-bold text-foreground text-sm mb-1">Need help on site?</p>
          <p className="text-sm text-muted">
            Text <strong>NFLDRAFT</strong> with a brief description of your
            issue to <strong>69050</strong>. Or visit a Fan Services booth
            anywhere in the draft footprint.
          </p>
        </section>

        {/* FAQ section */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-6">
            Getting Around FAQ
          </h2>
          <div className="space-y-4">
            {gettingAroundFAQs.map((faq) => (
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

      <RelatedPages current="getting_around" slugs={["parking", "neighborhoods", "food", "schedule"]} />
    </>
  );
}
