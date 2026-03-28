import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { EventSchema } from "@/components/schema/EventSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "2026 NFL Draft Schedule & What to Expect",
  description:
    "NFL Draft Pittsburgh 2026 schedule: Round 1 Thu 8pm, Rounds 2-3 Fri 7pm, Rounds 4-7 Sat noon. Free entry with OnePass. Bag policy, hours, and registration info.",
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
      "The Draft Experience at Point State Park allows clear bags up to 16x16x6 inches. The Draft Theater at Acrisure Stadium has a stricter policy: clear bags up to 12x6x12 inches only. No backpacks, large purses, or non-clear bags at either venue.",
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
      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Schedule
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            2026 NFL Draft Schedule &amp; What to Expect
          </h1>
          <p className="text-gray-300">
            Round-by-round times, gate hours, the bag policy, what to bring, and
            everything happening beyond the picks. Here's your complete game
            plan.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Draft Schedule */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Draft Schedule (Round-by-Round)
          </h2>
          <p className="text-muted mb-4">
            The 2026 NFL Draft runs Thursday through Saturday, April 23-25.
            Here's the full breakdown.
          </p>
          <div className="grid gap-4">
            {/* Thursday */}
            <div className="bg-surface border border-border rounded-lg p-5">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Day 1
                  </p>
                  <p className="text-lg font-bold mt-1">
                    Thursday, April 23
                  </p>
                </div>
                <span className="bg-primary-dark text-white text-sm font-bold px-3 py-1 rounded-full">
                  8:00 PM ET
                </span>
              </div>
              <p className="text-sm text-muted mt-3">
                <strong>Round 1</strong> (32 picks). The main event. This is
                when the top prospects hear their names called. Expect the
                biggest crowds, loudest reactions, and heaviest security. Each
                pick gets 10 minutes, so this goes late.
              </p>
              <p className="text-xs text-muted mt-2">
                TV: ABC, ESPN, NFL Network
              </p>
            </div>

            {/* Friday */}
            <div className="bg-surface border border-border rounded-lg p-5">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Day 2
                  </p>
                  <p className="text-lg font-bold mt-1">
                    Friday, April 24
                  </p>
                </div>
                <span className="bg-primary-dark text-white text-sm font-bold px-3 py-1 rounded-full">
                  7:00 PM ET
                </span>
              </div>
              <p className="text-sm text-muted mt-3">
                <strong>Rounds 2-3</strong> (64 picks total for Day 2). The
                pace picks up. Picks move faster (7 minutes each in Round 2, 5
                minutes in Round 3). Still prime-time energy. Drone show
                expected after the last pick.
              </p>
              <p className="text-xs text-muted mt-2">
                TV: ABC, ESPN, NFL Network
              </p>
            </div>

            {/* Saturday */}
            <div className="bg-surface border border-border rounded-lg p-5">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Day 3
                  </p>
                  <p className="text-lg font-bold mt-1">
                    Saturday, April 25
                  </p>
                </div>
                <span className="bg-primary-dark text-white text-sm font-bold px-3 py-1 rounded-full">
                  12:00 PM ET
                </span>
              </div>
              <p className="text-sm text-muted mt-3">
                <strong>Rounds 4-7</strong> (163 picks). Starts at noon, wraps
                up by early evening. This is the most relaxed day. Locals say
                Saturday is the best day to go. Smaller crowds, more space, plus
                the featured concert happens after the final pick.
              </p>
              <p className="text-xs text-muted mt-2">
                TV: ABC, ESPN, NFL Network
              </p>
            </div>
          </div>
        </section>

        {/* Free entry */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
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
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4"><a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">NFL OnePass App</a></h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-amber-900 font-bold mb-2">
              Download this BEFORE you get to Pittsburgh
            </p>
            <p className="text-amber-800 text-sm mb-3">
              Don't wait until you're standing in line. Download the NFL OnePass
              app now, create your account, and register for the event. Here's
              why it matters:
            </p>
            <ul className="text-amber-800 text-sm space-y-2 list-disc pl-5">
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
          </div>
        </section>

        {/* Draft Experience */}
        <Image
          src="/point-state-park.png"
          alt="Point State Park where the NFL Draft Experience fan zone is located"
          width={800}
          height={450}
          className="rounded-lg w-full h-auto mb-8"
        />
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Draft Experience at Point State Park
          </h2>
          <p className="text-muted mb-4">
            The Draft Experience is the free fan zone at Point State Park. It's
            basically a football-themed festival with interactive attractions,
            and it's open to everyone with an NFL OnePass registration.
          </p>
          <div className="bg-surface border border-border rounded-lg p-5 mb-4">
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
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold text-sm">40-Yard Dash</p>
              <p className="text-xs text-muted mt-1">
                Run the same 40 the prospects run. Get your time. Brag about it.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold text-sm">Field Goal Challenge</p>
              <p className="text-xs text-muted mt-1">
                Try to kick a field goal. It's harder than it looks on TV.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold text-sm">Autograph Stage</p>
              <p className="text-xs text-muted mt-1">
                Current and former NFL players signing autographs. Schedule
                announced through the OnePass app.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold text-sm">Lombardi Trophy Photos</p>
              <p className="text-xs text-muted mt-1">
                Get your photo with the actual Vince Lombardi Trophy. The line
                will be long. It's worth it.
              </p>
            </div>
          </div>
        </section>

        {/* Draft Theater */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Draft Theater at Acrisure Stadium
          </h2>
          <p className="text-muted mb-3">
            This is the main stage where picks get announced. It's on the North
            Shore near Acrisure Stadium (where the Steelers play). The big stage,
            the commissioner, the boos, the hugs, the phone calls. This is
            where it all happens.
          </p>
          <p className="text-muted mb-3">
            For Rounds 1-3 (Thursday and Friday), fans can watch from inside
            Acrisure Stadium on the field. It's a massive screen and the
            atmosphere is electric. Saturday's Rounds 4-7 are typically outdoor
            viewing only.
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
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Bag Policy</h2>
          <p className="text-muted mb-4">
            This is critical. The two venues have{" "}
            <strong>different bag policies</strong>. Read this carefully so you
            don't get turned away at the gate.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-surface border border-border rounded-lg p-5">
              <p className="font-bold mb-2">Draft Experience (Point State Park)</p>
              <ul className="text-sm text-muted space-y-1 list-disc pl-5">
                <li>Clear bags up to <strong>16" x 16" x 6"</strong></li>
                <li>Small clutch purses (4.5" x 6.5")</li>
                <li>No backpacks</li>
                <li>No non-clear bags</li>
              </ul>
            </div>
            <div className="bg-surface border border-border rounded-lg p-5">
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
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What to Wear &amp; Bring</h2>
          <p className="text-muted mb-4">
            April in Pittsburgh is unpredictable. It could be 45 degrees and
            raining. It could be 75 and sunny. Sometimes both in the same day.
            Here's your packing checklist.
          </p>
          <div className="bg-surface border border-border rounded-lg p-5">
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
              <li>
                <strong>Portable charger.</strong> Non-negotiable. The OnePass
                app, photos, social media, and maps will drain your phone. Cell
                service will be spotty with 500,000 people on the same towers.
                Bring a fully charged power bank.
              </li>
              <li>
                <strong>Rain gear.</strong> A light rain jacket or poncho. Don't
                rely on the forecast. Pittsburgh weather changes fast.
              </li>
              <li>
                <strong>Clear bag.</strong> You need one. Get a 12x6x12 clear
                bag from Amazon or Target before you go.
              </li>
              <li>
                <strong>Sunscreen.</strong> If it's sunny, you're outside for
                hours with no shade at Point State Park.
              </li>
              <li>
                <strong>Your team jersey.</strong> Obviously. Rep your team.
                Expect friendly trash talk from Steelers fans.
              </li>
            </ul>
          </div>
        </section>

        {/* Events Beyond the Draft */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Events Beyond the Draft</h2>
          <p className="text-muted mb-4">
            The draft isn't just about picks. There's a full week of events
            surrounding it. Here's what's happening.
          </p>
          <div className="grid gap-3">
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Taste of the Draft</p>
              <p className="text-xs text-muted">
                Tuesday, April 22 &middot; Tower at PNC Plaza
              </p>
              <p className="text-sm text-muted mt-2">
                Charity food event with 20+ restaurants. Benefits GENYOUth
                (ending student hunger). Tickets are $845. Premium experience
                with NFL player appearances.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Jason Aldean "The Night Before" Concert</p>
              <p className="text-xs text-muted">
                Tuesday, April 22 &middot; Rivers Casino
              </p>
              <p className="text-sm text-muted mt-2">
                Country star Jason Aldean kicks off draft week at Rivers Casino
                the night before Round 1. Presented by Audacy and S&amp;T Bank.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Draft After-Parties at <a href="https://www.shortysx.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Shorty's</a></p>
              <p className="text-xs text-muted">
                Wed-Sat &middot; <a href="https://www.shortysx.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Shorty's Goodtimes Bar</a>, North Shore
              </p>
              <p className="text-sm text-muted mt-2">
                The official draft after-party spot. Steve Aoki (draft eve
                opening party), Nelly (after Day 1), 2 Chainz (after Day 2).
                This is where the party moves after picks end.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">PicksBURGH 5K</p>
              <p className="text-xs text-muted">
                Saturday, April 25 &middot; Morning (before Day 3)
              </p>
              <p className="text-sm text-muted mt-2">
                Run by P3R (the Pittsburgh marathon organization). Expected to
                close the 16th Street Bridge Saturday morning. A fun way to
                start the final day of the draft.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
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
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Free Concerts at the Draft</p>
              <p className="text-xs text-muted">
                All 3 days &middot; Draft Experience stage
              </p>
              <p className="text-sm text-muted mt-2">
                The NFL hosts free concerts as part of the Draft Experience.
                Past drafts had Fall Out Boy, Weezer, Brad Paisley, and Big
                Sean. The 2026 lineup hasn't been announced yet, but the Day 3
                headliner is typically the biggest act.
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
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            FAQ: Schedule Questions
          </h2>
          <div className="space-y-4">
            {scheduleFAQs.map((faq) => (
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
    </>
  );
}
