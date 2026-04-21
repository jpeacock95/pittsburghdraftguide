import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { EventSchema } from "@/components/schema/EventSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh Tickets, Venue & Free Entry (2026)",
  description:
    "There are no tickets. Admission is free with NFL OnePass. Here's exactly where the 2026 NFL Draft is in Pittsburgh, how to get in, and what to bring.",
  alternates: {
    canonical: "https://www.pittsburghdraftguide.com/tickets-and-venue",
  },
};

const faqItems = [
  {
    question: "Do I need a ticket for the NFL Draft in Pittsburgh?",
    answer:
      "No. Admission is free. You just need to register on the NFL OnePass app (or at NFL.com/DraftAccess) to get a free QR code. No paper ticket exists. The only real tickets are VIP hospitality packages through On Location and ticketed events like Taste of the Draft.",
  },
  {
    question: "Where exactly is the NFL Draft in Pittsburgh?",
    answer:
      "Two venues. The Draft Theater and Main Stage sit at Acrisure Stadium (100 Art Rooney Ave) on the North Shore. The NFL Draft Experience fan festival is across the river at Point State Park (601 Commonwealth Pl) downtown. They're connected by the Roberto Clemente Bridge, which is closed to vehicles and serves as a pedestrian fan corridor.",
  },
  {
    question: "What time does the NFL Draft start in Pittsburgh?",
    answer:
      "Round 1 starts Thursday April 23 at 8:00 PM ET. Rounds 2 and 3 run Friday April 24 at 7:00 PM ET. Rounds 4 through 7 run Saturday April 25 at 12:00 PM ET. Gates open at noon Thursday and Friday, 9 AM Saturday.",
  },
  {
    question: "Is parking free for the NFL Draft?",
    answer:
      "No. Expect $40 to $200 per day for downtown garages. Most North Shore lots are closed for stage construction. Park-and-Ride from the suburbs is cheaper and faster. See our parking guide for full options.",
  },
  {
    question: "What is the NFL Draft bag policy?",
    answer:
      "Clear bags only, max 12 inches by 6 inches by 12 inches at the Draft Theater, or up to 16 by 16 by 6 at Point State Park. Small clutch purses up to 4.5 by 6.5 inches are also allowed. No backpacks, no non-clear bags, no umbrellas. Bring a rain poncho instead.",
  },
  {
    question: "Can I bring my kids to the NFL Draft?",
    answer:
      "Yes. Point State Park has the Play 60 Zone, NFL FLAG drills, kids' clinics, and the 40-yard dash. Each kid needs their own NFL OnePass registration with a parent-signed waiver. Saturday is the most family-friendly day because crowds are smallest.",
  },
  {
    question: "How do I get from Acrisure Stadium to Point State Park?",
    answer:
      "Walk the Roberto Clemente Bridge. It's 0.3 miles, closed to cars, and turned into a pedestrian fan corridor. You can also take the free Gateway Clipper Fleet boats across the Allegheny River Friday and Saturday only, or ride the free T light rail between downtown and the North Shore.",
  },
  {
    question: "Will I see players in person at the draft?",
    answer:
      "At the Draft Theater, first-round picks usually come out after they're announced. At Point State Park, current and former NFL players sign autographs throughout the day at the Autograph Stage. The full player appearance schedule is inside the NFL OnePass app.",
  },
  {
    question: "Can I bring food and drink into the NFL Draft?",
    answer:
      "No outside food or drink, except an empty reusable water bottle that you can fill at free refill stations inside. Food and beverage vendors are on-site at both venues, including Taste of Pittsburgh presented by Heinz. The whole event is cashless, credit cards or Apple Pay only.",
  },
];

export default function TicketsAndVenue() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Tickets & Venue", href: "/tickets-and-venue" },
        ]}
      />
      <FAQSchema items={faqItems} />
      <EventSchema />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Tickets &amp; Venue
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            NFL Draft Pittsburgh Tickets &amp; Venue: Where It Is and How to Get
            In (2026)
          </h1>
          <p className="text-gray-300">
            There are no tickets. Admission is free with NFL OnePass. Here's
            exactly where the draft is, how to get through the gate, and what
            you can bring.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Quick Answer */}
        <div className="card-minimal p-5 mb-8 border-l-4 border-accent">
          <p className="label mb-2">Quick Answer</p>
          <p className="text-sm leading-relaxed">
            <strong>There are no tickets.</strong> Admission is free. You just
            need to register on the{" "}
            <a
              href="https://www.nfl.com/draftaccess"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              NFL OnePass app
            </a>{" "}
            before you arrive. The draft runs April 23-25 at two venues
            connected by the Roberto Clemente Bridge: the Draft Theater at
            Acrisure Stadium on the North Shore and the Draft Experience at
            Point State Park downtown. Both are a 0.3-mile walk apart. Hours are
            Thursday and Friday 12 PM to 10 PM, Saturday 9 AM to 6 PM.
          </p>
        </div>

        <LastUpdated date="April 21, 2026" />

        {/* ========== SECTION 1: Ticket Confusion ========== */}
        <section className="mb-16 mt-10">
          <h2 className="text-2xl font-heading mb-4">
            The Ticket Confusion, Cleared Up
          </h2>
          <p className="text-muted leading-relaxed mb-3">
            Most people searching "NFL Draft Pittsburgh tickets" expect a
            checkout page. There isn't one. Here's why.
          </p>
          <p className="text-muted leading-relaxed mb-3">
            The 2026 NFL Draft is free. You register through the NFL OnePass
            app, get a QR code, and walk in. No credit card, no paper ticket, no
            email confirmation with barcodes. The NFL learned from Detroit 2024
            (775,000 attendees) that a crowd that big can't move through a paid
            gate fast enough. Free plus digital QR is what you get.
          </p>
          <p className="text-muted leading-relaxed mb-3">
            There are <strong>two exceptions</strong> where a real ticket
            exists:
          </p>
          <ol className="list-decimal list-inside text-muted leading-relaxed space-y-2 ml-2">
            <li>
              <strong>VIP hospitality passes</strong> (On Location Lounge, The
              Pit, Pittsburgh Pavilion, Bud Light Draft Zone). Sold through{" "}
              <a
                href="https://onlocationexp.com/nfl/nfl-draft-tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                onlocationexp.com
              </a>
              . Prices start around $750 and climb from there.
            </li>
            <li>
              <strong>Taste of the Draft</strong> ticketed dinner events sold
              through Ticketmaster.
            </li>
          </ol>
          <p className="text-muted leading-relaxed mt-3">
            If you're a first-timer just trying to see the stage, watch picks,
            and enjoy the festival, you don't need either of these. Register
            free, show up, walk in.
          </p>
        </section>

        {/* ========== SECTION 2: Where the Draft Is ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-4">
            Where the Draft Actually Is
          </h2>
          <p className="text-muted leading-relaxed mb-5">
            Two venues, one river, 0.3 miles apart. Here's the side-by-side:
          </p>

          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="text-left p-3 font-heading font-normal">
                    &nbsp;
                  </th>
                  <th className="text-left p-3 font-heading font-normal">
                    Draft Theater
                  </th>
                  <th className="text-left p-3 font-heading font-normal">
                    Draft Experience
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Venue</td>
                  <td className="p-3">Acrisure Stadium (North Shore)</td>
                  <td className="p-3">Point State Park (Downtown)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Address</td>
                  <td className="p-3">100 Art Rooney Ave, 15212</td>
                  <td className="p-3">601 Commonwealth Pl, 15222</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Role</td>
                  <td className="p-3">Picks announced on TV</td>
                  <td className="p-3">Free fan festival + interactive zone</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Main features</td>
                  <td className="p-3">
                    Main stage, commissioner, on-field viewing inside Acrisure
                    (Rounds 1-3)
                  </td>
                  <td className="p-3">
                    40-yard dash, field goal kick, autographs, Lombardi Trophy
                    photos, Steelers Country
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Bag size</td>
                  <td className="p-3">Clear, max 12" x 6" x 12"</td>
                  <td className="p-3">Clear, max 16" x 16" x 6"</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Entry</td>
                  <td className="p-3">Free with OnePass QR</td>
                  <td className="p-3">Free with OnePass QR</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Hours</td>
                  <td className="p-3">
                    Thu/Fri 12 PM-10 PM, Sat 9 AM-6 PM
                  </td>
                  <td className="p-3">
                    Thu/Fri 12 PM-10 PM, Sat 9 AM-6 PM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card-minimal p-5">
            <p className="text-sm leading-relaxed">
              <strong>Pro tip from a local:</strong> the Roberto Clemente Bridge
              is closed to cars for the entire draft. It becomes a wide
              pedestrian corridor and it's the single most Pittsburgh part of
              the whole experience. Walk it. You'll see the skyline, the river,
              and both venues at once.
            </p>
          </div>
        </section>

        {/* ========== SECTION 3: Stage vs Festival Mental Model ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-4">
            The "Stage vs Festival" Mental Model
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            This is the part nobody explains well. If you think of the draft as
            one event, you'll waste half your day figuring out why the stage is
            across the river from the football drills. Instead, think of it as{" "}
            <strong>two things happening at once</strong>:
          </p>
          <div className="space-y-4">
            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                The Festival (Point State Park)
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Interactive, all day, bring your kids. Lines for the field goal
                kick, autographs with retired players, Lombardi Trophy photo
                ops, the 12,000 sq ft Steelers Country exhibit with all six
                Super Bowl rings. This is where you spend the afternoon.
              </p>
            </div>
            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                The Stage (Acrisure Stadium North Shore)
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                The televised part. The commissioner, the picks, the boos, the
                hugs. Crowds peak here 6-8 PM Thursday when Round 1 starts at 8
                PM ET.
              </p>
            </div>
          </div>
          <p className="text-muted leading-relaxed mt-4">
            <strong>Best approach for most people:</strong> start at Point State
            Park in the early afternoon, cross the Roberto Clemente Bridge
            around 5 PM, settle in at the North Shore for Round 1 at 8 PM.
            You'll miss the worst security lines and still catch the picks
            live.
          </p>
        </section>

        {/* ========== SECTION 4: NFL OnePass Step-by-Step ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-4">
            NFL OnePass: The Step-by-Step
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            You need this app. Here's how to do it in 3 minutes:
          </p>
          <ol className="list-decimal list-inside text-muted leading-relaxed space-y-2 ml-2 mb-4">
            <li>
              <strong>Download the NFL OnePass app</strong> from the App Store
              or Google Play, or visit{" "}
              <a
                href="https://www.nfl.com/draftaccess"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                NFL.com/DraftAccess
              </a>
            </li>
            <li>
              <strong>Create a free account</strong> with your email
            </li>
            <li>
              <strong>Register each person in your party separately</strong>{" "}
              (including kids, who need a waiver for the 40-yard dash and other
              activations)
            </li>
            <li>
              <strong>Your QR code lives in the app.</strong> Security scans it
              at any checkpoint.
            </li>
            <li>
              <strong>Bring a portable charger.</strong> The app drains your
              battery. Dead phone means slow manual registration line.
            </li>
          </ol>
          <p className="text-muted leading-relaxed">
            No smartphone? Walk-up registration kiosks at every checkpoint. It
            works, it's just slower.
          </p>
        </section>

        {/* ========== SECTION 5: Bag Policy ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-4">
            What You Can Bring (Bag Policy + Prohibited Items)
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            The two venues have <strong>different bag size limits</strong>. Size
            for the stricter one (Acrisure Stadium) and you're good everywhere.
            A 12 by 6 by 12 clear bag works at both locations.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-3">
                Allowed at Both Venues
              </h3>
              <ul className="text-muted text-sm leading-relaxed space-y-2">
                <li>Clear bags up to 12" x 6" x 12" (PVC or vinyl)</li>
                <li>Small clutch purses up to 4.5" x 6.5"</li>
                <li>One-gallon clear freezer bag</li>
                <li>Empty reusable water bottle</li>
                <li>Medically necessary items (after inspection)</li>
                <li>Strollers and diaper bags (after inspection)</li>
                <li>Small cameras and binoculars</li>
                <li>Blankets (not inside the Draft Theater)</li>
              </ul>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-3">
                Prohibited Everywhere
              </h3>
              <ul className="text-muted text-sm leading-relaxed space-y-2">
                <li>Alcohol</li>
                <li>Umbrellas (bring a rain poncho instead)</li>
                <li>Backpacks (even clear ones over the size limit)</li>
                <li>Chairs, stools, seating devices</li>
                <li>Coolers, thermoses, glass, aerosol cans</li>
                <li>Footballs, frisbees, inflatables</li>
                <li>Drones, laser pointers</li>
                <li>Weapons of any kind</li>
                <li>Banners or flags larger than 22" x 28"</li>
                <li>Noisemakers, whistles, horns</li>
                <li>Motorized scooters and skateboards</li>
                <li>Professional cameras (credentialed media only)</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Source:{" "}
            <a
              href="https://www.nfl.com/_amp/draft-2026-security-procedures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              NFL Draft 2026 Security Procedures
            </a>
            . Verified 2026-04-15.
          </p>
        </section>

        {/* ========== SECTION 6: Security Checkpoints ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-4">Security Checkpoints</h2>
          <p className="text-muted leading-relaxed mb-4">
            Multiple entry points, not one single gate. On the North Shore, the
            security perimeter stretches from Tony Dorsett Drive to the Kamin
            Science Center. Point State Park has its own checkpoints on the
            downtown side.
          </p>
          <p className="text-muted leading-relaxed mb-3">
            <strong>Expected wait times</strong> (based on Detroit 2024 patterns
            adjusted for Pittsburgh geography):
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="text-left p-3 font-heading font-normal">
                    When
                  </th>
                  <th className="text-left p-3 font-heading font-normal">
                    Expected wait
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-gray-200">
                  <td className="p-3">Thursday 12-3 PM</td>
                  <td className="p-3">Under 15 minutes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Thursday 5-8 PM</td>
                  <td className="p-3">30-60 minutes (worst)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Friday all day</td>
                  <td className="p-3">15-30 minutes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Saturday morning</td>
                  <td className="p-3">10-20 minutes</td>
                </tr>
                <tr>
                  <td className="p-3">Saturday afternoon</td>
                  <td className="p-3">15-25 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted leading-relaxed">
            Have your QR code pulled up on your phone <strong>before</strong>{" "}
            you get in line. That alone cuts your wait in half.
          </p>
        </section>

        {/* ========== SECTION 7: VIP Worth It ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-4">
            Is VIP Worth It? Decision Matrix
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="text-left p-3 font-heading font-normal">
                    You are...
                  </th>
                  <th className="text-left p-3 font-heading font-normal">
                    Recommendation
                  </th>
                  <th className="text-left p-3 font-heading font-normal">
                    Why
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-gray-200">
                  <td className="p-3">First-timer with family</td>
                  <td className="p-3 font-semibold">Free entry</td>
                  <td className="p-3">
                    Point State Park is already incredible and free
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">
                    Die-hard who wants Round 1 under the lights
                  </td>
                  <td className="p-3 font-semibold">
                    On Location Draft Theater
                  </td>
                  <td className="p-3">
                    Worth it if seeing Round 1 live is your life goal
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Budget-conscious fan</td>
                  <td className="p-3 font-semibold">Free entry</td>
                  <td className="p-3">
                    You'll get the real experience at zero cost
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Company entertaining clients</td>
                  <td className="p-3 font-semibold">
                    Pittsburgh Pavilion / The Pit
                  </td>
                  <td className="p-3">
                    Elevated food, open bar, climate-controlled
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Out-of-town, one night only</td>
                  <td className="p-3 font-semibold">
                    Free entry + good hotel
                  </td>
                  <td className="p-3">
                    Money better spent on a hotel near the action
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Fan hoping to meet a pick</td>
                  <td className="p-3 font-semibold">
                    Free + Autograph Stage
                  </td>
                  <td className="p-3">
                    You don't need VIP for autographs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========== SECTION 8: Accessibility ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-4">Accessibility</h2>
          <ul className="text-muted leading-relaxed space-y-3">
            <li>
              <strong>Wheelchair entrances</strong> at all checkpoints. Look for
              the ADA lanes marked "Accessible Entry."
            </li>
            <li>
              <strong>Accessible parking:</strong> limited ADA spots in the
              Acrisure Stadium lots, first-come first-served, requires ADA
              placard. Suburban park-and-rides have more availability.
            </li>
            <li>
              <strong>Wheelchair loans</strong> are available at Fan Services
              booths.
            </li>
            <li>
              <strong>Service animals</strong> allowed everywhere. Non-service
              animals prohibited.
            </li>
            <li>
              <strong>ASL interpreter</strong> in a dedicated section of the
              Draft Theater. Caption-enabled screens across the campus.
            </li>
            <li>
              <strong>Sensory space</strong> planned at Point State Park.
              Confirm the exact location in the NFL OnePass app when you
              arrive.
            </li>
            <li>
              <strong>Family restrooms</strong> at both venues, medical tents
              marked on the in-app map.
            </li>
          </ul>
          <p className="text-muted leading-relaxed mt-4">
            For advance accommodations, email{" "}
            <a
              href="mailto:nfldraftmobility@gmail.com"
              className="text-primary hover:underline"
            >
              nfldraftmobility@gmail.com
            </a>{" "}
            or contact VisitPittsburgh at (412) 281-7711.
          </p>
        </section>

        {/* ========== SECTION 9: How to Get There ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-4">
            How to Actually Get There
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Full routing on our{" "}
            <Link
              href="/parking-transportation"
              className="text-primary hover:underline font-semibold"
            >
              parking and transportation page
            </Link>
            . The short version:
          </p>
          <ul className="text-muted leading-relaxed space-y-2 mb-4">
            <li>
              <strong>From the suburbs:</strong> use a park-and-ride (Ross,
              McCandless, Jefferson Hills, Monroeville Mall). Don't drive
              downtown.
            </li>
            <li>
              <strong>From the airport:</strong> 28X bus runs direct to
              downtown, then walk or take the Football Flyer shuttle.
            </li>
            <li>
              <strong>From downtown hotels:</strong> walk. Most are within 1
              mile of Point State Park.
            </li>
            <li>
              <strong>Football Flyer shuttle (FREE):</strong> runs 10 AM to 1 AM all three days. Drops at Point State Park and near PNC Park. Every 15 min Thu/Fri, every 30 min Sat. No fare, no pass, just hop on.
            </li>
            <li>
              <strong>T light rail:</strong> free between downtown and the
              North Shore. Fastest option between venues if the bridge walk
              seems long.
            </li>
          </ul>
          <p className="text-muted leading-relaxed mb-3">
            Coming from a specific suburb? Check these guides:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/cranberry-township"
              className="text-primary font-semibold hover:underline text-sm"
            >
              From Cranberry Township &rarr;
            </Link>
            <Link
              href="/getting-around"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Getting around &rarr;
            </Link>
          </div>
        </section>

        {/* ========== SECTION 10: FAQ ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-6">Frequently Asked</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.question} className="card-minimal p-5">
                <h3 className="font-heading text-lg mb-2">{item.question}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="card-minimal p-6 text-center">
          <h2 className="text-xl font-heading mb-3">
            What to Do Next
          </h2>
          <ol className="text-sm text-muted text-left leading-relaxed space-y-2 mb-5 max-w-md mx-auto">
            <li>
              <strong>1.</strong> Download NFL OnePass now at{" "}
              <a
                href="https://www.nfl.com/draftaccess"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                NFL.com/DraftAccess
              </a>
              . Register everyone in your group.
            </li>
            <li>
              <strong>2.</strong> Pick your day. Thursday = biggest crowds,
              Saturday = most relaxed.
            </li>
            <li>
              <strong>3.</strong> Pick a park-and-ride if you're coming from the
              suburbs.
            </li>
            <li>
              <strong>4.</strong> Pack smart: clear bag 12x6x12, portable
              charger, rain poncho, walking shoes.
            </li>
            <li>
              <strong>5.</strong> Grab the free draft weekend checklist PDF.
            </li>
          </ol>
          <Link
            href="/checklist"
            className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded hover:opacity-90 transition-opacity"
          >
            Get the Free Draft Checklist
          </Link>
        </section>
      </article>

      <RelatedPages
        current="tickets"
        slugs={["schedule", "parking", "checklist", "faq"]}
      />
    </>
  );
}
