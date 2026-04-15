import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { QuickFacts } from "@/components/ui/QuickFacts";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { EmailCapture } from "@/components/ui/EmailCapture";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh Parking (Don't Drive)",
  description:
    "Officials say don't drive to the 2026 NFL Draft. Here's every park-and-ride, garage, and North Shore lot with prices. Free T rides included.",
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
      "Downtown garages are expected to charge $125-250+ per day during draft weekend. North Shore lots that are open could reach $100+. SpotHero pre-booking ranges from $10.99 for suburban lots to $220+ for North Shore. Rivers Casino offers a 4-day advance pass for $500 (April 22-25, 24/7 in/out) or $250/day day-of with no re-entry. All parking is cashless. Use the ParkPGH app for real-time garage availability.",
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
  {
    question: "What is the best park-and-ride for the NFL Draft in Pittsburgh?",
    answer:
      "From the north (Cranberry, Wexford, Butler), Ross Park & Ride at I-279 Exit 5 is the top pick. About 25 minutes to downtown via the #8 bus or O1 express. From the south, South Hills Village T station is best because the T light rail runs free between South Hills and the North Shore April 23-25. From the east, Wilkinsburg Park & Ride takes the P1 East Busway and gets you downtown in about 15 minutes.",
  },
  {
    question: "When does the Roberto Clemente Bridge close for the NFL Draft?",
    answer:
      "The Roberto Clemente Bridge (6th Street Bridge) is closed to vehicles for the entire draft window. It stays open as a pedestrian-only fan corridor connecting Point State Park downtown to Acrisure Stadium on the North Shore. The walk is about 0.3 miles. The Andy Warhol Bridge (7th Street) is also closed to vehicles, but officials are routing all foot traffic through Roberto Clemente Bridge instead.",
  },
];

// Park-and-ride comparison matrix - structured for LLM citation
const parkAndRideOptions = [
  { lot: "Ross Park & Ride", direction: "North", coverage: "Cranberry, Wexford, Butler", route: "#8 bus / O1 express", time: "~25 min", cost: "Free park, free PRT during draft" },
  { lot: "Butler Transit Lot (Zelienople)", direction: "Far North", coverage: "Butler County", route: "Butler Transit commuter bus", time: "~45 min", cost: "Check BTA schedule" },
  { lot: "South Hills Village T Station", direction: "South", coverage: "Mt Lebanon, Bethel Park, USC", route: "T light rail (Red/Blue)", time: "~35 min", cost: "Free T April 23-25" },
  { lot: "Dormont / Castle Shannon T", direction: "South", coverage: "Dormont, Brookline", route: "T light rail", time: "~25 min", cost: "Free T April 23-25" },
  { lot: "Wilkinsburg Park & Ride", direction: "East", coverage: "Penn Hills, Monroeville, Wilkinsburg", route: "P1 East Busway", time: "~15 min", cost: "Free PRT during draft" },
  { lot: "PRT Route 28X (Airport)", direction: "West", coverage: "Pittsburgh International Airport", route: "28X Airport Flyer", time: "~45-60 min", cost: "Free PRT during draft" },
];

// Phase 3 (draft week only) road closure table
const draftWeekClosures = [
  { road: "Roberto Clemente Bridge (6th St)", from: "Apr 22 5 AM", reopens: "Apr 26 5 AM", impact: "No vehicles, pedestrians OK", detour: "Use bus shuttle or walk via Smithfield" },
  { road: "Andy Warhol Bridge (7th St)", from: "Apr 22 5 AM", reopens: "Apr 26 5 AM", impact: "No vehicles, no pedestrians", detour: "Pedestrians use Roberto Clemente Bridge" },
  { road: "Casino Drive (from Sproat Way)", from: "Apr 22", reopens: "Apr 26", impact: "Closed to thru traffic", detour: "Sproat Way to North Shore Dr" },
  { road: "North Shore Drive (to Chuck Noll Way)", from: "Apr 22", reopens: "Apr 26", impact: "Closed", detour: "Reedsdale St" },
  { road: "Reedsdale St (to Tony Dorsett Dr)", from: "Apr 22", reopens: "Apr 26", impact: "Closed", detour: "I-279 / Rt 28" },
  { road: "Chuck Noll Way", from: "Apr 22", reopens: "Apr 26", impact: "Closed", detour: "Pedestrian zone, no detour" },
  { road: "Tony Dorsett Drive", from: "Apr 22", reopens: "Apr 26", impact: "Closed", detour: "Use shuttle to North Shore" },
  { road: "Sproat Way", from: "Apr 22", reopens: "Apr 26", impact: "Closed", detour: "Casino Dr alternative" },
  { road: "I-279 Southbound Exit 1B (North Shore)", from: "Active now", reopens: "Apr 26", impact: "Ramp closed", detour: "Continue to Exit 1A or Fort Duquesne Bridge" },
  { road: "Fort Pitt Bridge on-ramp (10th St Bypass)", from: "Apr 22", reopens: "Apr 26", impact: "Closed", detour: "Use Boulevard of the Allies" },
  { road: "Penn Ave (Stanwix to 9th)", from: "Apr 22", reopens: "Apr 26", impact: "Closed downtown", detour: "Liberty Ave or Forbes Ave" },
  { road: "Liberty Ave Extension / Commonwealth Pl", from: "Apr 22", reopens: "Apr 26", impact: "Closed", detour: "Use Forbes Ave" },
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
      <section
        className="photo-section text-white py-16 md:py-20"
        style={{ backgroundImage: "url('/pgh-clemente-bridge.webp')" }}
      >
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
        <LastUpdated date="April 15, 2026" />
        <div className="mb-6" />

        {/* Don't drive warning */}
        <section className="border-l-2 border-accent pl-5 mb-14">
          <h2 id="driving" className="text-xl font-heading mb-2">
            Should You Drive? Officials Say No. Here's Why.
          </h2>
          <p className="text-muted mb-3">
            Pittsburgh city officials, <a href="https://www.rideprt.org/2026-draft/draft/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">PRT (Pittsburgh Regional Transit)</a>, and the NFL Host Committee are all saying the same thing: don't drive downtown for the 2026 NFL Draft. With 500,000-700,000 visitors expected over three days and most North Shore parking lots closed for stage construction, driving downtown is the worst way to get to the event. The city's 6-phase road closure plan runs from March 28 through May 10, affecting major bridges and highway exits. Here's what you're up against:
          </p>
          <ul className="text-muted space-y-2 list-disc pl-5">
            <li>
              Most North Shore parking lots are{" "}
              <strong>closed for stage construction</strong>
            </li>
            <li>
              North Shore lots that charged $50 for Taylor Swift are expected to
              hit <strong>$100+</strong>. Downtown garages will be even worse
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
          <h2 id="free-t-rides" className="text-xl font-heading mb-2">
            ALL T Rides Are FREE April 23-25 (Sheetz + PRT)
          </h2>
          <p className="text-muted mb-3">
            Sheetz partnered with Pittsburgh Regional Transit (PRT) to cover all fares on the T light rail during the 2026 NFL Draft weekend, April 23-25. All three T lines (Red, Blue, and Silver) and the Monongahela Incline are completely free. Every station, every line, $0. PRT also offers a $25 Draft Pass in the Ready2Ride app for 7 days of unlimited rides including buses. The Duquesne Incline is separately operated and not included in the Sheetz sponsorship.
          </p>
          <ul className="text-muted space-y-2 list-disc pl-5 mb-3">
            <li>
              Park at <strong>South Hills Village</strong>, <strong>Dormont</strong>, or <strong>Castle Shannon</strong> T stations and ride straight downtown for free
            </li>
            <li>
              <strong>$25 Draft Pass</strong> in the Ready2Ride app gives you 7 days of unlimited PRT rides (buses too)
            </li>
            <li>
              <strong><a href="https://www.butlertransitauthority.com/news-draft-in-pittsburgh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Butler Transit</a></strong> is running service every 30 min from Zelienople (150 Lindsay Rd, Route 528 park-and-ride) to <a href="https://www.rideprt.org/park-and-ride-lots/park-and-rides/ross/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ross Park</a> lot, $10 round trip, exact cash only
            </li>
            <li>
              <strong>Beaver County Transit Authority:</strong> $5 each way or $10 unlimited day pass from Beaver County Expressway Travel Center to Downtown Pittsburgh
            </li>
            <li>
              <strong>PRT Football Flyer buses:</strong> 4 special routes (99N, 99E, 99S, 99W) from park-and-ride lots in every direction. Running 10 AM to 1 AM each day. Every 15 minutes Thursday and Friday, every 30 minutes Saturday. Regular PRT fare or $25 Draft Pass required (only the T and Mon Incline are free).
            </li>
            <li>
              <strong>Heads up:</strong> Allegheny Station on the T is <strong>closed April 22-25</strong> for draft infrastructure. Use North Side Station instead. It's one stop south, about a 3-minute walk difference. Same area.
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

        {/* Email capture - after free transit info */}
        <EmailCapture />

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
          <h2 id="park-and-ride" className="text-2xl font-heading mb-4">
            Park-and-Ride Locations (By Direction)
          </h2>
          <p className="text-muted mb-4">
            PRT is running special "Football Flyer" bus routes from
            park-and-ride lots in every direction. Here are the best options
            based on where you're coming from.
          </p>

          {/* P&R comparison table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="text-left p-3 font-heading font-normal">Lot</th>
                  <th className="text-left p-3 font-heading font-normal">Direction</th>
                  <th className="text-left p-3 font-heading font-normal">Coverage area</th>
                  <th className="text-left p-3 font-heading font-normal">Route</th>
                  <th className="text-left p-3 font-heading font-normal">Time</th>
                  <th className="text-left p-3 font-heading font-normal">Cost</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {parkAndRideOptions.map((p) => (
                  <tr key={p.lot} className="border-b border-gray-200">
                    <td className="p-3 font-semibold">{p.lot}</td>
                    <td className="p-3">{p.direction}</td>
                    <td className="p-3">{p.coverage}</td>
                    <td className="p-3">{p.route}</td>
                    <td className="p-3">{p.time}</td>
                    <td className="p-3">{p.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mb-4">
            All PRT bus and T light rail rides are <strong>free April 23-25</strong> thanks to a Sheetz/PRT partnership. Detailed lot notes and addresses below.
          </p>

          <h3 className="text-lg font-heading mt-6 mb-2">From the North (Cranberry, Ross, McCandless)</h3>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold"><a href="https://www.rideprt.org/park-and-ride-lots/park-and-rides/ross/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ross Park &amp; Ride</a> (I-279 Exit 5)</p>
            <p className="text-sm text-muted">
              The #1 recommendation on Reddit for anyone coming from the north.
              Take the #8 bus or O1 express to downtown. About 25 minutes to the
              draft venues.
            </p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Ross+Park+and+Ride+Pittsburgh+PA" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1 inline-block py-2 px-3 -ml-3 rounded-md active:bg-primary/10 transition-colors">Get Directions</a>
          </div>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold"><a href="https://www.butlertransitauthority.com/news-draft-in-pittsburgh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Butler Transit Authority</a> (Route 528 Lot)</p>
            <p className="text-sm text-muted">
              Commuter bus from Butler County. Good option if you're coming from
              further north. Check Butler Transit for draft weekend schedules.
            </p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=150+Lindsay+Rd+Zelienople+PA+16063" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1 inline-block py-2 px-3 -ml-3 rounded-md active:bg-primary/10 transition-colors">Get Directions</a>
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
              Park here and ride the T light rail directly to North Side Station
              (North Shore) or downtown. The T runs through a free fare zone
              downtown. About 35 minutes.
            </p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=South+Hills+Village+T+Station+Pittsburgh+PA" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1 inline-block py-2 px-3 -ml-3 rounded-md active:bg-primary/10 transition-colors">Get Directions</a>
          </div>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold">Dormont T Stations (Beechview, Dormont, Castle Shannon)</p>
            <p className="text-sm text-muted">
              Multiple stations along the T line with paid parking lots and free
              street parking nearby. Closer to downtown than South Hills Village.
            </p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Dormont+T+Station+Pittsburgh+PA" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1 inline-block py-2 px-3 -ml-3 rounded-md active:bg-primary/10 transition-colors">Get Directions</a>
          </div>

          <h3 className="text-lg font-heading mt-6 mb-2">From the East</h3>
          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold">Wilkinsburg Park &amp; Ride</p>
            <p className="text-sm text-muted">
              Take the P1 bus. 15 minutes to downtown. The East Busway is one of
              Pittsburgh's best transit routes - fast, reliable, and frequent
              service.
            </p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Wilkinsburg+Station+Park+and+Ride+Pittsburgh+PA" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1 inline-block py-2 px-3 -ml-3 rounded-md active:bg-primary/10 transition-colors">Get Directions</a>
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

          <h3 className="text-lg font-heading mt-6 mb-3">Rent a Private Driveway (Prked App)</h3>
          <div className="card-minimal p-4 mb-6">
            <p className="font-semibold text-sm mb-1">
              <a href="https://www.prked.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Prked</a> - Reddit's #1 Insider Parking Tip
            </p>
            <p className="text-sm text-muted mt-1">
              <a href="https://www.prked.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Prked</a> lets you rent private driveways and parking spaces from homeowners near the venues. This came up in 4+ Reddit threads as the best-kept secret for event parking in Pittsburgh. Residents near Acrisure Stadium and the North Shore list their driveways, and you book in advance. Prices vary, but they're typically way less than garage rates. Check availability as you get closer to draft weekend.
            </p>
          </div>

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

          <div className="card-minimal p-4 mb-4">
            <p className="font-semibold text-sm"><a href="https://www.parkpgh.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ParkPGH App</a> (Real-Time Availability)</p>
            <p className="text-sm text-muted mt-1">
              Download the <a href="https://www.parkpgh.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ParkPGH app</a> to check real-time garage availability during draft weekend. You can also reserve spots through ParkWhiz. Between these two apps and SpotHero, you'll have the best shot at finding something.
            </p>
          </div>

          <h3 className="text-lg font-heading mt-6 mb-3">Downtown Garages</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-2 sm:p-3 font-semibold">Location</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">Est. Price</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3">Alco North Shore Lots</td>
                  <td className="p-2 sm:p-3">$15-35 (normal)</td>
                  <td className="p-2 sm:p-3 text-muted">Many closed for draft. Check availability.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3">Downtown Garages (6th &amp; Penn area)</td>
                  <td className="p-2 sm:p-3">$100-250+</td>
                  <td className="p-2 sm:p-3 text-muted">North Shore lots were $50 for Taylor Swift. Draft will be much more.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3"><a href="https://www.riverscasino.com/pittsburgh/visit/advancedpurchasedraftparkingpass" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rivers Casino Parking</a></td>
                  <td className="p-2 sm:p-3">$500 / $250</td>
                  <td className="p-2 sm:p-3 text-muted">4-day advance pass: $500 + fees (April 22-25, 24/7 in/out). Day-of: $250/day, no re-entry. All cashless. Must be 21+ to enter garage unless accompanied. Walking distance to North Shore.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3">South Side street parking</td>
                  <td className="p-2 sm:p-3">Free-$5</td>
                  <td className="p-2 sm:p-3 text-muted">Walk across 10th Street Bridge (~20 min) or take bus.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-minimal p-4 mt-4">
            <p className="font-semibold text-sm">Parking Meter Rate Increase</p>
            <p className="text-sm text-muted mt-1">
              The city is raising parking meter rates to <strong>$5/hour</strong> in Downtown and North Shore areas from April 22-27. Normal rates are $2-3/hour. If you're feeding a meter, budget accordingly.
            </p>
          </div>
          <div className="card-minimal p-4 mt-3">
            <p className="font-semibold text-sm">Heads up: Pirates home stand collides with Phase 2</p>
            <p className="text-sm text-muted mt-1">
              The Pirates are home April 13-19 while Phase 2 closures are active. Expect heavier traffic and tighter North Shore parking on weeknights leading into draft week. If you're scoping out the area early, plan for game-day crowds on top of the closures.
            </p>
          </div>
        </section>

        {/* The T */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            The T Light Rail: Free Rides Between Both Venues
          </h2>
          <p className="text-muted mb-3">
            Pittsburgh's light rail system, called "the T," connects both NFL Draft venues and is <a href="https://www.rideprt.org/2026-draft/draft/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">completely free during draft weekend</a> (April 23-25, 2026). The T runs between North Side Station on the North Shore (near Acrisure Stadium's main draft stage) and several downtown stops near Point State Park (the NFL Draft Experience fan zone). Normally, the T has a free fare zone downtown, but during the draft, Sheetz is sponsoring all fares on every line. The ride between the two venues takes about 5 minutes.
          </p>
          <p className="text-muted">
            The T is also the best way to reach the draft from Pittsburgh's south suburbs. Park at South Hills Village, Dormont, Castle Shannon, or any station along the Red or Blue line, and ride directly to either draft venue. The full ride from South Hills Village to North Side Station takes about 35 minutes.
          </p>
        </section>

        {/* Road closures */}
        <section className="mb-14">
          <h2 id="road-closures" className="text-2xl font-heading mb-4">
            Road Closures You Need to Know
          </h2>
          <p className="text-muted mb-4">
            The city has a <a href="https://www.visitpittsburgh.com/nfl-draft-pittsburgh/nfl-draft-central/nfl-draft-pittsburgh-transportation-guide/nfl-draft-road-closures-traffic-changes/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">6-phase closure plan</a> that runs from March 28 through
            May 10. The 12 closures below are <strong>Phase 3 (April 22-26)</strong> only. That's what's actually closed during draft weekend itself. We stripped out the Phase 1, 2, 4, 5, 6 closures because they don't affect your visit.
          </p>

          {/* Draft week closures table */}
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="text-left p-3 font-heading font-normal">Road</th>
                  <th className="text-left p-3 font-heading font-normal">Closes</th>
                  <th className="text-left p-3 font-heading font-normal">Reopens</th>
                  <th className="text-left p-3 font-heading font-normal">Impact</th>
                  <th className="text-left p-3 font-heading font-normal">Detour</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {draftWeekClosures.map((c) => (
                  <tr key={c.road} className="border-b border-gray-200">
                    <td className="p-3 font-semibold">{c.road}</td>
                    <td className="p-3 whitespace-nowrap">{c.from}</td>
                    <td className="p-3 whitespace-nowrap">{c.reopens}</td>
                    <td className="p-3">{c.impact}</td>
                    <td className="p-3">{c.detour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mb-4">
            Source: <a href="https://www.visitpittsburgh.com/nfl-draft-pittsburgh/nfl-draft-central/nfl-draft-pittsburgh-transportation-guide/nfl-draft-road-closures-traffic-changes/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">VisitPittsburgh closure plan</a>. Verified April 15, 2026. Closures may be added or extended; check before you travel.
          </p>
          <p className="text-muted mb-3">
            Highlights from the table above:
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5">
            <li>
              <strong>Roberto Clemente Bridge (6th Street)</strong> - Closed to
              vehicles. Open to pedestrians (it connects the two draft areas).
            </li>
            <li>
              <strong>Andy Warhol Bridge (7th Street)</strong> - Closed to
              vehicles. Officials are routing all pedestrians to Roberto Clemente Bridge instead.
            </li>
            <li>
              <strong>Fort Duquesne Boulevard</strong> - Expected to be affected
              by closures near the North Shore venues. Check the city's official
              closure map closer to the event.
            </li>
            <li>
              <strong>I-279 Southbound Exit 1B ramp</strong> - Closed, along with Rt. 65 ramps to and from Fort Duquesne Bridge.
            </li>
            <li>
              <strong>Fort Pitt Bridge on-ramp</strong> - Closed from the
              10th Street Bypass.
            </li>
            <li>
              <strong>Penn Avenue</strong> - Closed from Stanwix Street to Ninth Street.
            </li>
            <li>
              <strong>Liberty Ave Extension &amp; Commonwealth Place</strong> - Both closed during draft weekend.
            </li>
          </ul>
          <p className="text-muted mt-3">
            Companies are telling workers to stay home. Pittsburgh Public Schools
            are going remote for 3 days. The city issued a <strong>construction moratorium</strong> for draft week to keep construction traffic off the roads. If that doesn't tell you how serious
            the closures are, nothing will.
          </p>
          <p className="text-muted mt-3">
            <strong>Important:</strong> Road closures don't end when the draft does. The 6-phase plan runs through <strong>May 10</strong> for teardown and cleanup. If you're staying past the weekend or live in the area, expect continued disruptions for two weeks after the last pick.
          </p>
          <div className="card-minimal p-4 mt-4">
            <p className="font-semibold text-sm">PRT Bus Route Changes</p>
            <p className="text-sm text-muted mt-1">
              Multiple PRT bus routes are suspended or rerouted during draft weekend. Most regular routes will run on Saturday schedules Thursday and Friday. Check <a href="https://www.rideprt.org/2026-draft/draft/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">rideprt.org/2026-draft</a> for the latest route status before you leave.
            </p>
          </div>
        </section>

        {/* Uber/Lyft */}
        <section className="mb-14">
          <h2 id="rideshare" className="text-2xl font-heading mb-4">
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
              <strong>Walk a few blocks away from the main venues before requesting a
              ride.</strong> This is the single most repeated tip on Reddit. Surge pricing is highest right at the event. Walk to Market Square, the Strip District, or even across Smithfield Street Bridge to Station Square. You could save $20-40 just by moving 5 blocks.
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

        {/* Bike share */}
        <section className="mb-14">
          <h2 className="text-lg font-heading mb-2">
            <a href="https://pogoh.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">POGOH Bike Share</a>
          </h2>
          <p className="text-sm text-muted">
            Pittsburgh's public bike-share program has stations across Downtown,
            the North Shore, and surrounding neighborhoods. Pedal and electric-assist
            bikes available via the <a href="https://pogoh.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">POGOH app</a>.
            Good option for short trips when transit doesn't cover your route.
          </p>
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

        {/* Bottom CTA - cross-links + email capture */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center mb-8">
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
        <EmailCapture />
      </article>

      <RelatedPages
        current="parking"
        slugs={["getting_around", "schedule", "budget", "checklist"]}
      />
    </>
  );
}
