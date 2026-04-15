import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { EventSchema } from "@/components/schema/EventSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { QuickFacts } from "@/components/ui/QuickFacts";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { EmailCapture } from "@/components/ui/EmailCapture";

export const metadata: Metadata = {
  title: "Pittsburgh NFL Draft Schedule 2026: Times & All 3 Days",
  description:
    "Round 1 starts Thursday April 23 at 8 PM ET. Rounds 2-3 Friday 7 PM. Rounds 4-7 Saturday noon. Free entry with NFL OnePass. Full Pittsburgh NFL Draft schedule, gate times, and bag policy.",
  alternates: {
    canonical: "https://www.pittsburghdraftguide.com/schedule",
  },
};

const scheduleFAQs = [
  {
    question: "What time does the 2026 NFL Draft start?",
    answer:
      "Round 1 starts Thursday, April 23 at 8:00 PM ET. Rounds 2-3 start Friday, April 24 at 7:00 PM ET. Rounds 4-7 start Saturday, April 25 at 12:00 PM (noon) ET.",
  },
  {
    question: "Is the NFL Draft free to attend?",
    answer:
      "Yes. The NFL Draft is completely free to attend. You just need to register through the NFL OnePass app before you go. Download it, create an account, and register for the event. No tickets required.",
  },
  {
    question: "What is the NFL Draft bag policy?",
    answer:
      "Clear bags up to 12x6x12 inches or small clutch purses up to 4.5x6.5 inches. No backpacks, no non-clear bags. Umbrellas are banned. No footballs, inflatable balls, chairs, or coolers. Bring a rain poncho instead of an umbrella. You can bring an empty reusable water bottle and fill it at free refill stations inside the event. The entire event is cashless, credit cards only.",
  },
  {
    question: "Do I need the NFL OnePass app for the draft?",
    answer:
      "Yes. NFL OnePass is required for entry to the Draft Experience and Draft Theater. Download it before you arrive, create your account, and register for the event. Your phone battery will drain fast because of the app, so bring a portable charger.",
  },
  {
    question: "What happens if it rains during the NFL Draft?",
    answer:
      "The draft happens rain or shine. April in Pittsburgh can be anything from 45 to 75 degrees. Bring layers and rain gear just in case. The Draft Theater at Acrisure Stadium has covered seating, but the Draft Experience at Point State Park is mostly outdoors.",
  },
];

export default function Schedule() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Schedule", href: "/schedule" },
        ]}
      />
      <EventSchema />
      <FAQSchema items={scheduleFAQs} />

      {/* Hero */}
      <section
        className="photo-section text-white py-16 md:py-20"
        style={{ backgroundImage: "url('/pgh-schedule-football.webp')" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Schedule
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            Pittsburgh NFL Draft Schedule 2026: Times &amp; What to Expect
          </h1>
          <p className="text-gray-300">
            Round-by-round times, gate hours, the bag policy, what to bring, and
            everything happening beyond the picks. Here's your complete game
            plan.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <QuickFacts facts={[
          "Round 1: Thu Apr 23, 8:00 PM ET (gates open 12 PM)",
          "Rounds 2-3: Fri Apr 24, 7:00 PM ET (gates open 12 PM)",
          "Rounds 4-7: Sat Apr 25, 12:00 PM ET (gates open 9 AM)",
          "FREE entry with NFL OnePass app (download before you go)",
          "Bag policy: clear bags only, max 12x6x12 inches",
        ]} />
        <LastUpdated date="April 15, 2026" />

        {/* Draft preview video */}
        <div className="rounded-lg overflow-hidden mb-8">
          <iframe
            src="https://www.youtube.com/embed/DogQpaGD3Xw"
            width="100%"
            height="350"
            className="border-0"
            allowFullScreen
            loading="lazy"
            title="Countdown to the 2026 NFL Draft in Pittsburgh"
          />
        </div>

        {/* Draft Schedule */}
        <section className="mb-14">
          <h2 id="schedule" className="text-2xl font-heading mb-4">
            Pittsburgh NFL Draft Schedule (Round-by-Round)
          </h2>
          <p className="text-muted mb-4">
            The 2026 Pittsburgh NFL Draft runs Thursday through Saturday, April 23-25. Here's the at-a-glance table first, then the full breakdown.
          </p>

          {/* At-a-glance schedule table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="text-left p-3 font-heading font-normal">Day</th>
                  <th className="text-left p-3 font-heading font-normal">Date</th>
                  <th className="text-left p-3 font-heading font-normal">Rounds</th>
                  <th className="text-left p-3 font-heading font-normal">Picks start</th>
                  <th className="text-left p-3 font-heading font-normal">Gates open</th>
                  <th className="text-left p-3 font-heading font-normal">Crowd</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Thursday</td>
                  <td className="p-3">April 23</td>
                  <td className="p-3">Round 1 (32 picks)</td>
                  <td className="p-3">8:00 PM ET</td>
                  <td className="p-3">12:00 PM</td>
                  <td className="p-3">Biggest, loudest</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Friday</td>
                  <td className="p-3">April 24</td>
                  <td className="p-3">Rounds 2-3 (64 picks)</td>
                  <td className="p-3">7:00 PM ET</td>
                  <td className="p-3">12:00 PM</td>
                  <td className="p-3">Slightly smaller</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Saturday</td>
                  <td className="p-3">April 25</td>
                  <td className="p-3">Rounds 4-7 (161 picks)</td>
                  <td className="p-3">12:00 PM ET</td>
                  <td className="p-3">9:00 AM</td>
                  <td className="p-3">Most relaxed, best for families</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mb-4">
            All times Eastern. Gates open earlier than picks start. Free entry with NFL OnePass at both venues (Acrisure Stadium + Point State Park).
          </p>
          <div className="divide-y divide-border">
            {/* Thursday */}
            <div className="py-6 first:pt-0">
              <div className="flex items-start gap-4">
                <div className="min-w-[80px] shrink-0">
                  <p className="font-heading font-bold text-primary">Thursday</p>
                  <p className="text-xs text-muted">April 23</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <p className="font-heading text-lg font-bold">Round 1</p>
                    <p className="text-xs text-muted font-medium">8:00 PM ET</p>
                  </div>
                  <p className="text-sm text-muted">
                    32 picks. The main event. This is when the top prospects
                    hear their names called. Expect the biggest crowds, loudest
                    reactions, and heaviest security. Each pick gets 10 minutes,
                    so this goes late.
                  </p>
                  <p className="text-sm text-muted mt-2">
                    <strong>FREE at Draft Theater:</strong> Pittsburgh-native KELS sings the national anthem. Before that, the Heritage Gospel Chorale of Pittsburgh performs "Lift Every Voice and Sing" under Grammy-winning conductor Dr. Jeffery Redding.
                  </p>
                  <p className="text-sm text-muted mt-2">
                    <strong>Ticketed Concert:</strong> Steve Aoki at the Plaza at North Shore (12 PM, ticketed via <a href="https://www.gofevo.com/group/ThePlazaAtNorthShore" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">GoFevo</a>).
                  </p>
                  <p className="text-xs text-muted mt-2">TV: ABC, ESPN, NFL Network</p>
                </div>
              </div>
            </div>

            {/* Friday */}
            <div className="py-6">
              <div className="flex items-start gap-4">
                <div className="min-w-[80px] shrink-0">
                  <p className="font-heading font-bold text-primary">Friday</p>
                  <p className="text-xs text-muted">April 24</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <p className="font-heading text-lg font-bold">Rounds 2-3</p>
                    <p className="text-xs text-muted font-medium">7:00 PM ET</p>
                  </div>
                  <p className="text-sm text-muted">
                    64 picks total. The pace picks up. Picks move faster (7
                    minutes each in Round 2, 5 minutes in Round 3). Still
                    prime-time energy. Drone show expected after the last pick.
                  </p>
                  <p className="text-sm text-muted mt-2">
                    <strong>FREE Concert at Draft Theater (5:15 PM):</strong> Pittsburgh's own <strong>Wiz Khalifa</strong> and Butler-native <strong>Bret Michaels</strong> (Poison) perform ahead of Rounds 2-3. Free with OnePass. First-come, first-served standing room.
                  </p>
                  <p className="text-xs text-muted mt-2">TV: ABC, ESPN, NFL Network</p>
                </div>
              </div>
            </div>

            {/* Saturday */}
            <div className="py-6">
              <div className="flex items-start gap-4">
                <div className="min-w-[80px] shrink-0">
                  <p className="font-heading font-bold text-primary">Saturday</p>
                  <p className="text-xs text-muted">April 25</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <p className="font-heading text-lg font-bold">Rounds 4-7</p>
                    <p className="text-xs text-muted font-medium">12:00 PM ET</p>
                  </div>
                  <p className="text-sm text-muted">
                    163 picks. Starts at noon, wraps up by early evening. This
                    is the most relaxed day. Locals say Saturday is the best day
                    to go. Smaller crowds, more space.
                  </p>
                  <p className="text-sm text-muted mt-2">
                    <strong>FREE Concert at Draft Theater:</strong> Country star <strong>Kane Brown</strong> closes the NFL Draft Entertainment Series after the final selections. Free with OnePass. First-come, first-served.
                  </p>
                  <p className="text-sm text-muted mt-2">
                    <strong>Ticketed Concert:</strong> 2 Chainz at the Plaza at North Shore (6 PM, ticketed via <a href="https://www.gofevo.com/group/ThePlazaAtNorthShore" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">GoFevo</a>).
                  </p>
                  <p className="text-sm text-muted mt-2">
                    <strong>PicksBURGH Draft Day 5K:</strong> 8:00 AM near PNC Park. One-time event. Register on <a href="https://raceroster.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Race Roster</a>.
                  </p>
                  <p className="text-xs text-muted mt-2">TV: ABC, ESPN, NFL Network</p>
                </div>
              </div>
            </div>

            {/* Opening Night */}
            <div className="py-6">
              <div className="flex items-start gap-4">
                <div className="min-w-[80px] shrink-0">
                  <p className="font-heading font-bold text-accent">Wednesday</p>
                  <p className="text-xs text-muted">April 22</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <p className="font-heading text-lg font-bold">Opening Night</p>
                    <p className="text-xs text-muted font-medium">Pre-Draft</p>
                  </div>
                  <p className="text-sm text-muted mb-3">
                    The party starts before the picks do. <strong>Nelly</strong> performs
                    at the Plaza at North Shore for the Official Draft Opening Party (6 PM, $43, 18+, ticketed via <a href="https://www.gofevo.com/group/ThePlazaAtNorthShore" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">GoFevo</a>).
                    Get here a day early if you can.
                  </p>
                  <div className="space-y-2 mt-2">
                    <div className="border-l-2 border-accent pl-4">
                      <p className="text-sm font-semibold"><Link href="/blog/picksburgh-music-crawl" className="text-primary hover:underline">PicksBURGH Music Crawl</Link> (4:45 PM - Late)</p>
                      <p className="text-xs text-muted">13 venues across Pittsburgh with live music from jazz to metal. Starts at Market Square with DJ Arie Cole, NASH-V.ILL, and Big Jus &amp; Steeltown Horns (4:45-7 PM). Commemorative guitar picks at every venue. Multiple free shows.</p>
                    </div>
                    <div className="border-l-2 border-accent pl-4">
                      <p className="text-sm font-semibold">Market Square Grand Reopening</p>
                      <p className="text-xs text-muted">The newly renovated Market Square reopens with a ribbon cutting. Activations run all 3 draft days too: Thu-Fri 10 AM-9 PM, Sat 9 AM-7 PM. Steelers-themed bar, mini golf, live blacksmithing, photo stations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free entry */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Is the NFL Draft Free? (Yes)
          </h2>
          <p className="text-muted mb-3">
            100% free. No tickets required. You don't have to pay a dime to
            attend the NFL Draft.
          </p>
          <p className="text-muted mb-3">
            There's one catch: you need to register through the{" "}
            <strong>NFL OnePass app</strong> before you go. It's free to
            register, but they want everyone in the system for crowd management
            and security purposes. Think of it like a free RSVP.
          </p>
          <p className="text-muted">
            VIP packages exist through OnLocation (the NFL's official partner)
            but they're mostly sold out. 3-Day and First Round packages are
            gone. If you find resale tickets, expect to pay premium prices.
          </p>
        </section>

        {/* OnePass */}
        <section className="mb-14">
          <h2 id="onepass" className="text-2xl font-heading mb-4"><a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">NFL OnePass App</a></h2>
          <div className="card-minimal p-5">
            <p className="font-bold mb-2">
              Download this BEFORE you get to Pittsburgh
            </p>
            <p className="text-muted text-sm mb-3">
              Don't wait until you're standing in line. Download the NFL OnePass
              app now, create your account, and register for the event. Here's
              why it matters:
            </p>
            <ul className="text-muted text-sm space-y-2 list-disc pl-5">
              <li>
                <strong>Required for entry</strong> to the Draft Experience and
                Draft Theater
              </li>
              <li>
                <strong>Interactive maps</strong> showing attractions, food
                vendors, and restrooms
              </li>
              <li>
                <strong>Real-time updates</strong> on wait times and event
                changes
              </li>
              <li>
                <strong>Exclusive offers</strong> and giveaways throughout the
                event
              </li>
              <li>
                <strong>It drains your battery.</strong> Bring a portable
                charger. Seriously. 500,000 people using the same app on the
                same cell towers. Your phone will be working overtime.
              </li>
            </ul>
            <p className="text-muted text-sm mt-3">
              Register free at{" "}
              <a href="https://www.nfl.com/draft/access" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">NFL.com/DraftAccess</a>{" "}
              or download the NFL OnePass app from the App Store or Google Play.
            </p>
            <p className="text-muted text-sm mt-3">
              <strong>Don't have a smartphone?</strong> The NFL will have free on-site registration kiosks at the entrance. You can walk up and register in person. But downloading the app in advance saves you time in line and gives you access to the interactive map, real-time updates, and autograph stage schedules.
            </p>
          </div>
        </section>

        {/* Draft Experience vs Draft Theater Explainer */}
        <section className="border-l-2 border-accent pl-5 mb-14">
          <h2 className="text-xl font-heading mb-2">Draft Experience vs. Draft Theater: What's the Difference?</h2>
          <p className="text-muted mb-3">
            People confuse these two constantly. They're two separate areas at two separate locations. Here's the quick breakdown:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-minimal p-4">
              <p className="font-bold mb-1">Draft Experience</p>
              <p className="text-xs text-muted mb-2">Point State Park (Downtown)</p>
              <ul className="text-xs text-muted space-y-1 list-disc pl-4">
                <li>Interactive fan zone (40-yard dash, field goals, autographs)</li>
                <li>Lombardi Trophy photos, NFL Shop, food vendors</li>
                <li>Clear bags up to 16x16x6</li>
                <li>Thu/Fri: 12-10 PM, Sat: 9 AM-6 PM</li>
              </ul>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold mb-1">Draft Theater</p>
              <p className="text-xs text-muted mb-2">North Shore (Acrisure Stadium)</p>
              <ul className="text-xs text-muted space-y-1 list-disc pl-4">
                <li>Main stage where picks are announced (the one on TV)</li>
                <li>Free concerts (Wiz Khalifa, Kane Brown)</li>
                <li>On-field viewing inside Acrisure (Rounds 1-3)</li>
                <li>Clear bags up to 12x6x12 (stricter than Experience)</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted mt-3">
            They're about a <strong>15-minute walk apart</strong> across the Roberto Clemente Bridge (pedestrian-only during the draft). The T light rail also connects them for free. Plan to hit both.
          </p>
        </section>

        {/* Draft Experience */}
        <Image
          src="/pgh-point-state-park.webp"
          alt="Point State Park fountain at golden hour, home of the NFL Draft Experience fan zone"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-lg w-full h-auto mb-8"
        />
        <section className="mb-14">
          <h2 id="draft-experience" className="text-2xl font-heading mb-4">
            Draft Experience at Point State Park
          </h2>
          <p className="text-muted mb-4">
            The Draft Experience is the free fan zone at Point State Park. It's
            basically a football-themed festival with interactive attractions,
            and it's open to everyone with an NFL OnePass registration.
          </p>
          <div className="card-minimal p-5 mb-4">
            <p className="font-bold mb-3">Hours:</p>
            <ul className="text-sm text-muted space-y-1">
              <li>
                <strong>Thursday &amp; Friday:</strong> 12:00 PM - 10:00 PM
              </li>
              <li>
                <strong>Saturday:</strong> 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
          <p className="font-bold mb-2">What's there:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="card-minimal p-4">
              <p className="font-bold text-sm">40-Yard Dash</p>
              <p className="text-xs text-muted mt-1">
                Run the same 40 the prospects run. Get your time. Brag about it.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold text-sm">Field Goal Challenge</p>
              <p className="text-xs text-muted mt-1">
                Try to kick a field goal. It's harder than it looks on TV.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold text-sm">Autograph Stage</p>
              <p className="text-xs text-muted mt-1">
                Current and former NFL players signing autographs. Schedule
                announced through the OnePass app.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold text-sm">Lombardi Trophy Photos</p>
              <p className="text-xs text-muted mt-1">
                Get your photo with the actual Vince Lombardi Trophy. The line
                will be long. It's worth it.
              </p>
            </div>
          </div>
        </section>

        {/* Draft Theater */}
        <section className="mb-14">
          <h2 id="draft-theater" className="text-2xl font-heading mb-4">
            Draft Theater at Acrisure Stadium
          </h2>
          <p className="text-muted mb-3">
            This is the main stage where picks get announced. It's on the North
            Shore near Acrisure Stadium (where the Steelers play). The big stage,
            the commissioner, the boos, the hugs, the phone calls. This is
            where it all happens. <strong>Entry is completely free</strong> with your OnePass registration.
          </p>
          <p className="text-muted mb-3">
            For Rounds 1-3 (Thursday and Friday), fans can watch from inside
            Acrisure Stadium on the field. It's a massive screen and the
            atmosphere is electric. The NFL is also running on-field activities,
            autograph opportunities, and Lombardi Trophy photo ops inside the
            stadium itself. Saturday's Rounds 4-7 are typically outdoor
            viewing only.
          </p>
          <p className="text-muted mb-3">
            The free NFL Draft Entertainment Series concerts (Wiz Khalifa, Bret Michaels, Kane Brown) also happen at the Draft Theater. <a href="#free-concerts" className="text-primary hover:underline font-semibold">See the full concert schedule above.</a>
          </p>
          <p className="text-muted">
            Getting between the Draft Theater (North Shore) and the Draft
            Experience (Point State Park) is easy. The Roberto Clemente Bridge
            is pedestrian-only during draft weekend. You can walk it in about 15
            minutes. The T light rail also connects both areas for free. <a href="https://www.gatewayclipper.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Gateway
            Clipper</a> riverboats are running between the two sites as well.
          </p>
        </section>

        {/* Bag Policy */}
        <section className="mb-14">
          <h2 id="bag-policy" className="text-2xl font-heading mb-4">Bag Policy</h2>
          <p className="text-muted mb-4">
            This is critical. The two venues have{" "}
            <strong>different bag policies</strong>. Read this carefully so you
            don't get turned away at the gate.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-minimal p-5">
              <p className="font-bold mb-2">Draft Experience (Point State Park)</p>
              <ul className="text-sm text-muted space-y-1 list-disc pl-5">
                <li>Clear bags up to <strong>16" x 16" x 6"</strong></li>
                <li>Small clutch purses (4.5" x 6.5")</li>
                <li>No backpacks</li>
                <li>No non-clear bags</li>
              </ul>
            </div>
            <div className="card-minimal p-5">
              <p className="font-bold mb-2">Draft Theater (Acrisure Stadium)</p>
              <ul className="text-sm text-muted space-y-1 list-disc pl-5">
                <li>Clear bags up to <strong>12" x 6" x 12"</strong></li>
                <li>Small clutch purses (4.5" x 6.5")</li>
                <li>No backpacks</li>
                <li>No non-clear bags</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted mt-4">
            <strong>Pro tip:</strong> If you're going to both venues (and you
            probably are), size your bag for the stricter Stadium policy. A
            12x6x12 clear bag works at both locations.
          </p>
        </section>

        {/* What to Wear & Bring */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">What to Wear &amp; Bring</h2>
          <p className="text-muted mb-4">
            April in Pittsburgh is unpredictable. It could be 45 degrees and
            raining. It could be 75 and sunny. Sometimes both in the same day.
            Here's your packing checklist.
          </p>
          <div className="card-minimal p-5">
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <strong>Layers.</strong> A t-shirt, a hoodie or fleece, and a
                light jacket. You'll want options as the temperature swings
                throughout the day.
              </li>
              <li>
                <strong>Comfortable shoes.</strong> You're going to walk. A lot.
                The two draft venues are separated by a river, and you'll be on
                your feet for hours. Leave the new shoes at home.
              </li>
              {/* TODO: Replace Amazon links with affiliate links once Associate tag is received */}
              <li>
                <a href="https://www.amazon.com/s?k=portable+phone+charger+10000mah" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"><strong>Portable charger.</strong></a> Non-negotiable. The OnePass
                app, photos, social media, and maps will drain your phone. Cell
                service will be spotty with 500,000 people on the same towers.
                Bring a fully charged power bank.
              </li>
              <li>
                <a href="https://www.amazon.com/s?k=packable+rain+jacket" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"><strong>Rain gear.</strong></a> A light rain jacket or poncho. Don't
                rely on the forecast. Pittsburgh weather changes fast.
              </li>
              <li>
                <a href="https://www.amazon.com/s?k=clear+stadium+bag+12x6x12" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"><strong>Clear bag.</strong></a> You need one. Get a 12x6x12 clear
                bag from Amazon before you go.
              </li>
              <li>
                <a href="https://www.amazon.com/s?k=sport+sunscreen+spf+50" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"><strong>Sunscreen.</strong></a> If it's sunny, you're outside for
                hours with no shade at Point State Park.
              </li>
              <li>
                <strong>Your team jersey.</strong> Obviously. Rep your team.
                Expect friendly trash talk from Steelers fans.
              </li>
            </ul>
          </div>
        </section>

        {/* Email capture - after packing checklist */}
        <EmailCapture />

        {/* Free Entertainment Series */}
        <section className="mb-14">
          <h2 id="free-concerts" className="text-2xl font-heading mb-4">FREE NFL Draft Entertainment Series</h2>
          <p className="text-muted mb-4">
            The NFL just announced the headline acts for draft weekend. All performances are at the Draft Theater next to Acrisure Stadium. <strong>100% free with OnePass registration.</strong> Standing room is first-come, first-served, so get there early.
          </p>
          <div className="grid gap-3 mb-4">
            <div className="card-minimal p-4 border-l-2 border-accent">
              <p className="font-bold">Thursday, April 23: Draft Kickoff</p>
              <p className="text-sm text-muted mt-2">
                The Heritage Gospel Chorale of Pittsburgh performs "Lift Every Voice and Sing" under Grammy-winning conductor Dr. Jeffery Redding. Then Pittsburgh-native KELS sings the national anthem to open the draft.
              </p>
            </div>
            <div className="card-minimal p-4 border-l-2 border-accent">
              <p className="font-bold">Friday, April 24: Wiz Khalifa + Bret Michaels (5:15 PM)</p>
              <p className="text-sm text-muted mt-2">
                Two Pittsburgh icons on one stage. Wiz Khalifa ("Black and Yellow") and Bret Michaels (Poison, Butler native) perform ahead of Rounds 2-3. Wiz said: "Coming home to Pittsburgh for the Draft is pretty special. This city raised me."
              </p>
            </div>
            <div className="card-minimal p-4 border-l-2 border-accent">
              <p className="font-bold">Saturday, April 25: Kane Brown (after final picks)</p>
              <p className="text-sm text-muted mt-2">
                Multi-platinum country star Kane Brown closes out the 2026 NFL Draft with the finale performance. He's touring behind his 2025 album "The High Road."
              </p>
            </div>
          </div>
          <p className="text-sm text-muted">
            Source: <a href="https://www.post-gazette.com/sports/2026-nfl-draft/2026/04/02/nfl-draft-concerts-wiz-khalifa/stories/202604020053" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pittsburgh Post-Gazette (April 2, 2026)</a>
          </p>
        </section>

        {/* Events Beyond the Draft */}
        <section className="mb-14">
          <h2 id="events" className="text-2xl font-heading mb-4">More Events Beyond the Draft</h2>
          <p className="text-muted mb-4">
            Beyond the free concerts, there's a full week of ticketed and free events. Here's what's happening.
          </p>
          <div className="grid gap-3">
            <div className="card-minimal p-4">
              <p className="font-bold">Taste of the Draft</p>
              <p className="text-xs text-muted">
                Tuesday, April 22 &middot; Tower at PNC Plaza
              </p>
              <p className="text-sm text-muted mt-2">
                Hosted by celebrity chef <strong>Andrew Zimmern</strong> with 20+ local chefs. Benefits GENYOUth
                (ending student hunger in Pennsylvania). Tickets are $845. Mingle with past and present Steelers players and NFL Legends. Open bar, live entertainment.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold">Jason Aldean "The Night Before" Concert</p>
              <p className="text-xs text-muted">
                Tuesday, April 22 &middot; Rivers Casino Event Center
              </p>
              <p className="text-sm text-muted mt-2">
                Country star Jason Aldean kicks off draft week at the Rivers Casino
                Event Center the night before Round 1. Ticketed event. Presented by Audacy and S&amp;T Bank.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold">Draft After-Parties at <a href="https://www.shortysx.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Shorty's</a></p>
              <p className="text-xs text-muted">
                Wed-Sat &middot; <a href="https://www.shortysx.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Shorty's Goodtimes Bar</a>, North Shore
              </p>
              <p className="text-sm text-muted mt-2">
                The official draft after-party spot. Nelly (opening night Wed),
                Steve Aoki (Day 1 Thu), 2 Chainz (closing party Sat).
                Tickets available via GoFevo.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold">PicksBURGH Draft Day 5K</p>
              <p className="text-xs text-muted">
                Saturday, April 25 &middot; 8:00 AM &middot; Near PNC Park
              </p>
              <p className="text-sm text-muted mt-2">
                One-time event run by P3R (the Pittsburgh marathon organization).
                Expected to close the 16th Street Bridge Saturday morning. A
                fun way to start the final day of the draft. Registration on{" "}
                <a href="https://raceroster.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Race Roster</a>.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold">Drone Show</p>
              <p className="text-xs text-muted">
                After Day 2 (Friday night)
              </p>
              <p className="text-sm text-muted mt-2">
                A drone light show is expected after the last pick on Friday
                night. Previous drafts have featured stunning aerial displays.
                The Pittsburgh skyline will make this one special.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold">Concerts at the Plaza at North Shore</p>
              <p className="text-xs text-muted">
                Wed, Thu &amp; Sat &middot; <a href="https://www.gofevo.com/group/ThePlazaAtNorthShore" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Tickets on GoFevo</a>
              </p>
              <p className="text-sm text-muted mt-2">
                Three concerts at the brand new Plaza at North Shore, a 30,000 sq ft outdoor venue that opened April 2 right next to PNC Park (ticketed, not part of the free NFL Draft Experience):
              </p>
              <ul className="text-sm text-muted mt-2 space-y-1 list-disc pl-5">
                <li><strong>Wednesday, April 22 (Opening Party, 6 PM):</strong> Nelly ($43, 18+)</li>
                <li><strong>Thursday, April 23 (Tailgate Party, 12 PM):</strong> Steve Aoki ($43, 18+)</li>
                <li><strong>Saturday, April 25 (Closing Party, 6 PM):</strong> 2 Chainz ($46, 18+)</li>
              </ul>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold">Pitt Block Party at Arts Landing (FREE)</p>
              <p className="text-xs text-muted">
                Thu-Sat, April 23-25 &middot; 9 AM-6 PM &middot; Arts Landing, Cultural District
              </p>
              <p className="text-sm text-muted mt-2">
                Free three-day celebration hosted by Pitt Athletics and the Pittsburgh Cultural Trust. Experiential Pitt Football museum, interactive draft showcase, live music, food trucks, local vendors, and a dedicated children's activity zone. Walking distance to both draft venues.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold">Steel City Draft Weekend Urban Block Party</p>
              <p className="text-xs text-muted">
                Saturday, April 25 &middot; 8:00 PM &middot; Petersen Events Center
              </p>
              <p className="text-sm text-muted mt-2">
                Ticketed event featuring Jeezy, Boosie Badazz, Mya, and DJ Envy. Tickets available on <a href="https://www.ticketmaster.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Ticketmaster</a>.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold">NFL Draft Block Party at The Villagio</p>
              <p className="text-xs text-muted">
                Friday &amp; Saturday, April 24-25 &middot; Noon-9 PM &middot; 939 Western Ave, North Shore
              </p>
              <p className="text-sm text-muted mt-2">
                Block party on the North Shore both days. Tickets on <a href="https://www.eventbrite.com/e/nfl-draft-block-party-at-the-villagio-424-noon-9-pm-tickets-1984702068313" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Eventbrite</a>.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-bold">Gabby Barrett at Pittsburgh Mills</p>
              <p className="text-xs text-muted">
                Draft Weekend &middot; Pittsburgh Mills Mall
              </p>
              <p className="text-sm text-muted mt-2">
                Country star Gabby Barrett is headlining an alternative draft concert at Pittsburgh Mills mall, about 20 miles northeast of downtown. Good option if you want live music without the North Shore crowds.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted mt-4">
            <strong>More events:</strong> Omni William Penn "Draft Den"
            (activation running 2-11pm all draft week), Sheraton at Station
            Square "Legends Draft Party" ($162-$215), Trace Brewing
            "Draught Draft Party" (free, Thu-Fri 7-10pm), Grand Hall at The
            Priory "Steel City Draft Night" ($82-$269), and the love,
            Pittsburgh "Draft Darty" block party (free, Sat 3-6pm).
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-6">
            FAQ: Schedule Questions
          </h2>
          <div className="space-y-4">
            {scheduleFAQs.map((faq) => (
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
            Now figure out the logistics
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            You know the schedule. Now plan where to eat, where to park, and
            where to stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/bars-restaurants"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Bars &amp; Restaurants
            </Link>
            <Link
              href="/parking-transportation"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Parking &amp; Transportation
            </Link>
            <Link
              href="/where-to-stay"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Where to Stay
            </Link>
          </div>
        </section>
      </article>

      <RelatedPages
        current="schedule"
        slugs={["parking", "checklist", "food", "getting_around"]}
      />
    </>
  );
}
