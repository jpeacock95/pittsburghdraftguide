import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Things to Do During NFL Draft Weekend Pittsburgh",
  description:
    "What to do during the 2026 NFL Draft in Pittsburgh beyond watching picks. Draft Experience, concerts, 5K race, food events, and attractions.",
};

const thingsToDoFAQs = [
  {
    question: "What is there to do at the NFL Draft besides watch picks?",
    answer:
      "The NFL Draft is a 3-day festival, not just a broadcast. The free Draft Experience at Point State Park has a 40-yard dash, field goal challenge, autograph stage, and the Lombardi Trophy. There are free concerts on the draft stage, a drone show, the PicksBURGH 5K race, and the Taste of the Draft food event. Pittsburgh itself has world-class museums, inclines, breweries, and restaurants within walking distance of the venues.",
  },
  {
    question: "Is the NFL Draft Experience really free?",
    answer:
      "Yes. The NFL Draft Experience at Point State Park is completely free. You just need to register for a free NFL OnePass (download the NFL OnePass app). Hours are Thursday and Friday 12pm to 10pm, and Saturday 9am to 6pm.",
  },
  {
    question: "What concerts are at the 2026 NFL Draft in Pittsburgh?",
    answer:
      "Free concerts happen on the main draft stage each night. The 2026 lineup hasn't been announced yet, but past drafts featured Fall Out Boy, Weezer, and Brad Paisley. There's also a drone show after Day 2. Paid concerts include Jason Aldean at Rivers Casino (April 22) and Shorty's after-parties featuring Steve Aoki, Nelly, and 2 Chainz.",
  },
  {
    question: "Is the NFL Draft good for families with kids?",
    answer:
      "Absolutely. The Draft Experience is built for all ages with interactive games and photo ops. Carnegie Science Center is on the North Shore right next to the action. Kennywood amusement park opens the same weekend. The Pittsburgh Zoo is about 7 miles away. Just note that the National Aviary is closed Thursday and Friday for draft setup.",
  },
];

export default function ThingsToDoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Things to Do", href: "/things-to-do" },
        ]}
      />
      <FAQSchema items={thingsToDoFAQs} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Things to Do
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Things to Do During NFL Draft Weekend Pittsburgh
          </h1>
          <p className="text-gray-300">
            The draft isn't just names being read off a card. It's a 3-day
            festival with free concerts, interactive experiences, a 5K race,
            food events, and one of the best cities in America as your backdrop.
            Here's everything worth doing.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* What is there to do? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            What Is There to Do Besides Watch Picks?
          </h2>
          <p className="text-muted mb-3">
            This is the #1 question people ask. And it makes sense. If you've
            only seen the draft on TV, it looks like a guy walking to a podium
            and reading a name. Why would 500,000+ people show up for that?
          </p>
          <p className="text-muted mb-3">
            Because the modern NFL Draft isn't a broadcast event. It's a
            full-blown festival that takes over the entire city. Think of it
            like a Super Bowl block party that lasts 3 days. There's a massive
            free fan zone with games and attractions. Free concerts every night.
            A drone show. A 5K race. A $845-per-plate food event. Watch parties
            at every bar within 2 miles. And Pittsburgh itself brings world-class
            museums, 90+ craft breweries, the best views in America, and a food
            scene that'll keep you busy between every pick.
          </p>
          <p className="text-muted">
            You don't need to care about football to have a great weekend here.
            But if you do care about football, this is Disneyland.
          </p>
        </section>

        {/* Draft Experience */}
        <Image
          src="/point-state-park.png"
          alt="Aerial view of Point State Park with fountain where Pittsburgh's three rivers meet"
          width={800}
          height={450}
          className="rounded-lg w-full h-auto mb-8"
        />
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            NFL Draft Experience (Free Fan Zone at Point State Park)
          </h2>
          <p className="text-muted mb-3">
            The Draft Experience is the centerpiece of the whole weekend, and
            it's completely free. It takes over Point State Park (where
            Pittsburgh's three rivers meet) with interactive football
            activities, exhibits, and appearances.
          </p>

          <div className="bg-surface border border-border rounded-lg p-5 mb-4">
            <p className="font-bold mb-3">What you'll find inside:</p>
            <ul className="space-y-2 text-muted list-disc pl-5">
              <li>
                <strong>40-yard dash</strong> with an official NFL timer so you
                can see how slow you really are
              </li>
              <li>
                <strong>Field goal challenge</strong> on a real setup
              </li>
              <li>
                <strong>Vertical jump station</strong> to test your combine
                numbers
              </li>
              <li>
                <strong>Autograph stage</strong> with current and former NFL
                players (schedule released closer to the event)
              </li>
              <li>
                <strong>Lombardi Trophy</strong> photo op. Yes, you can hold it.
              </li>
              <li>
                <strong>Team displays</strong> for all 32 NFL teams
              </li>
              <li>
                Interactive exhibits, sponsor activations, and merch vendors
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="font-bold text-green-900 mb-1">Hours &amp; Admission</p>
            <ul className="text-sm text-green-800 space-y-1">
              <li>
                <strong>Thursday &amp; Friday:</strong> 12:00 PM to 10:00 PM
              </li>
              <li>
                <strong>Saturday:</strong> 9:00 AM to 6:00 PM
              </li>
              <li>
                <strong>Cost:</strong> Free. Register for a free NFL OnePass
                (download the app ahead of time).
              </li>
            </ul>
          </div>

          <p className="text-sm text-muted">
            Pro tip: Saturday morning is the least crowded time. Day 1 (Thursday)
            is the most packed. If you want to actually do the activities without
            waiting in long lines, go early on Saturday.
          </p>
        </section>

        {/* Concerts & Entertainment */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Concerts &amp; Entertainment
          </h2>
          <p className="text-muted mb-3">
            Every NFL Draft has free concerts on the main stage, and they're not
            small acts. Previous drafts featured Fall Out Boy, Brad Paisley, and
            Weezer. The 2026 lineup hasn't been announced yet, but expect
            similar caliber. These concerts happen in the evening after draft
            picks wrap up for the day.
          </p>

          <div className="space-y-3 mb-4">
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Free Draft Stage Concerts</p>
              <p className="text-sm text-muted">
                Lineup TBA. Concerts happen each evening on the main stage at
                the North Shore (Acrisure Stadium area). Past years had
                major headliners. Check back as the lineup drops.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Drone Show (After Day 2)</p>
              <p className="text-sm text-muted">
                A massive drone light show over the rivers after the Friday
                night session. Free to watch from anywhere with a view of the
                North Shore. The Mt. Washington overlooks and Roberto Clemente
                Bridge are prime viewing spots.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">
                Jason Aldean at Rivers Casino (April 22)
              </p>
              <p className="text-sm text-muted">
                The night before Round 1. Aldean's also got a restaurant on the
                North Shore (Jason Aldean's Kitchen + Bar) that'll be packed
                all weekend. Rivers Casino is offering concert + hotel packages.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">
                Shorty's After-Parties (Draft Eve through Day 2)
              </p>
              <p className="text-sm text-muted">
                Shorty's Goodtimes Bar on the North Shore is hosting the
                official draft after-parties. Steve Aoki on draft eve, Nelly
                after Day 1, and 2 Chainz after Day 2. These are ticketed
                events. Prices TBA.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted">
            Want to know where to go after the concerts?{" "}
            <Link
              href="/bars-restaurants"
              className="text-primary font-semibold hover:underline"
            >
              Check our bars and restaurants guide &rarr;
            </Link>
          </p>
        </section>

        {/* PicksBURGH 5K */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">PicksBURGH 5K</h2>
          <p className="text-muted mb-3">
            P3R (the organization behind the Pittsburgh Marathon) is running a
            5K race on Saturday morning of draft weekend. It's called the
            PicksBURGH 5K and the route goes through some of Pittsburgh's most
            scenic areas near the draft venues.
          </p>
          <div className="bg-surface border border-border rounded-lg p-4 mb-3">
            <ul className="text-sm text-muted space-y-1">
              <li>
                <strong>When:</strong> Saturday morning (Day 3 of the draft)
              </li>
              <li>
                <strong>Organized by:</strong> P3R (Pittsburgh Three Rivers
                Marathon Inc.)
              </li>
              <li>
                <strong>Registration:</strong> Check P3R's website for signups
                and pricing
              </li>
              <li>
                <strong>Note:</strong> The 16th Street Bridge is expected to
                close Saturday morning for the race route
              </li>
            </ul>
          </div>
          <p className="text-sm text-muted">
            Even if you don't run, it's a cool atmosphere. Grab coffee, watch
            the runners, and then head to the{" "}
            <Link
              href="/things-to-do#draft-experience"
              className="text-primary font-semibold hover:underline"
            >
              Draft Experience
            </Link>{" "}
            when it opens at 9 AM.
          </p>
        </section>

        {/* Taste of the Draft */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Taste of the Draft (April 22)
          </h2>
          <p className="text-muted mb-3">
            This is the premium food event of draft week. Held at Tower at PNC
            Plaza the night before Round 1, Taste of the Draft features 20+
            restaurants and is a charity event benefiting GENYOUth (which fights
            student hunger).
          </p>
          <div className="bg-surface border border-border rounded-lg p-4 mb-3">
            <ul className="text-sm text-muted space-y-1">
              <li>
                <strong>When:</strong> Tuesday, April 22 (the night before the
                draft starts)
              </li>
              <li>
                <strong>Where:</strong> Tower at PNC Plaza, North Shore
              </li>
              <li>
                <strong>Tickets:</strong> $845 per person
              </li>
              <li>
                <strong>What you get:</strong> 20+ restaurant tastings, open bar,
                NFL player appearances, charity fundraiser
              </li>
            </ul>
          </div>
          <p className="text-sm text-muted">
            Yeah, $845 is steep. This one's for the splurge crowd. If you want
            great Pittsburgh food without the price tag, the{" "}
            <Link
              href="/bars-restaurants"
              className="text-primary font-semibold hover:underline"
            >
              restaurant guide
            </Link>{" "}
            has you covered.
          </p>
        </section>

        {/* Pittsburgh Attractions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Pittsburgh Attractions Worth Visiting
          </h2>
          <p className="text-muted mb-4">
            Between draft sessions, you've got hours to fill. Pittsburgh's got
            more to do than most visitors expect. Here are the highlights, all
            within a short ride (or walk) from the draft venues.
          </p>

          <div className="space-y-3">
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">
                Duquesne Incline &amp; Monongahela Incline
              </p>
              <p className="text-sm text-muted">
                Two historic cable cars that take you up Mt. Washington for the
                best views in the entire city. USA Today named it the best
                overlook in America. $6 round trip. The Duquesne Incline is
                the more popular one, but both are worth it. Go at sunset if
                you can.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Carnegie Science Center</p>
              <p className="text-sm text-muted">
                Right on the North Shore, walking distance from the draft
                venues. Great for families. Planetarium, interactive exhibits,
                and a submarine you can tour. You can easily fit this in
                between draft sessions.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Andy Warhol Museum</p>
              <p className="text-sm text-muted">
                The world's largest collection of Warhol's art, right on the
                North Shore. Seven floors of pop art from Pittsburgh's most
                famous artist. Walking distance from both draft venues.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Phipps Conservatory</p>
              <p className="text-sm text-muted">
                A stunning botanical garden in Oakland (about 15 minutes from
                downtown by car or bus). Beautiful glass greenhouses, seasonal
                flower shows. One of the most beautiful buildings in
                Pittsburgh.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="font-bold text-amber-900">
                National Aviary (CLOSED Thu-Fri)
              </p>
              <p className="text-sm text-amber-800">
                America's only independent indoor aviary with 700+ birds.
                Normally a must-visit, but it's{" "}
                <strong>closed Thursday and Friday</strong> during draft week
                because of the event footprint. Open Saturday and other days.
                Plan accordingly.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Steelers Hall of Honor Museum</p>
              <p className="text-sm text-muted">
                Inside Acrisure Stadium. If you're a Steelers fan (or any
                football fan, honestly), this is a no-brainer since you're
                already right there for the draft.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Roberto Clemente Bridge Walk</p>
              <p className="text-sm text-muted">
                The yellow bridge that connects the North Shore (Acrisure
                Stadium) to downtown (Point State Park). It's pedestrian-only
                during draft weekend, so you'll probably walk it multiple
                times. Enjoy the river views. It connects the two main draft
                venues.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Randyland</p>
              <p className="text-sm text-muted">
                A free, wildly colorful public art installation on the North
                Side. Covered in murals, sculptures, and random art
                everywhere. Great for photos. Totally free, totally unique. You
                won't see anything like it anywhere else.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Cathedral of Learning</p>
              <p className="text-sm text-muted">
                A 42-story Gothic tower on the University of Pittsburgh campus
                in Oakland. Free to walk into the lobby. The Nationality Rooms
                on the first and third floors are incredible. About 15
                minutes from downtown.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold">Strip District Saturday Morning</p>
              <p className="text-sm text-muted">
                Pittsburgh's famous market neighborhood. Saturday mornings are
                the best time to go. Street vendors, fresh produce, meat
                markets, cheese shops, bakeries, and some of the best food in
                the city. It's a 10-15 minute walk from Point State Park.
                Hit Pamela's Diner or DeLuca's for breakfast if you don't mind
                a line.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted mt-4">
            Want to explore by neighborhood?{" "}
            <Link
              href="/neighborhoods"
              className="text-primary font-semibold hover:underline"
            >
              See our neighborhood guide &rarr;
            </Link>
          </p>
        </section>

        {/* Family-friendly */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Family-Friendly Activities
          </h2>
          <p className="text-muted mb-3">
            Bringing the kids? Pittsburgh's actually a great draft weekend
            destination for families. There's plenty to do beyond the bars and
            late-night concerts.
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5 mb-3">
            <li>
              <strong>NFL Draft Experience</strong> is built for all ages. The
              40-yard dash, field goal kick, and vertical jump are a blast for
              kids. Free with OnePass registration.
            </li>
            <li>
              <strong>Kennywood</strong> (Pittsburgh's beloved amusement park)
              opens for the season the same weekend. It's about 12 miles
              southeast of downtown. Perfect for a half-day if the kids need a
              break from football.
            </li>
            <li>
              <strong>Carnegie Science Center</strong> is right on the North
              Shore, steps from the draft. Interactive science exhibits, a
              planetarium, and a real submarine. Half-day easy.
            </li>
            <li>
              <strong>Children's Museum of Pittsburgh</strong> is on the North
              Side. Interactive exhibits designed specifically for younger kids.
              Check their website for draft weekend hours.
            </li>
            <li>
              <strong>Pittsburgh Zoo &amp; Aquarium</strong> is about 7 miles
              from downtown in Highland Park. A solid option if you want a full
              day away from the draft crowds.
            </li>
          </ul>
          <p className="text-sm text-muted">
            One heads-up: the <strong>National Aviary is closed Thursday and
            Friday</strong> because of the draft event footprint. It should be
            open Saturday and Sunday. Plan around that if the kids are animal
            lovers.
          </p>
        </section>

        {/* Non-football fans */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            For Non-Football Fans
          </h2>
          <p className="text-muted mb-3">
            Coming with someone who's obsessed with the draft but you couldn't
            care less? Good news. Pittsburgh has more than enough to keep you
            busy without watching a single pick.
          </p>
          <p className="text-muted mb-3">
            Here's a weekend that has nothing to do with football:
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5 mb-3">
            <li>
              Ride the <strong>Duquesne Incline</strong> to Mt. Washington for
              skyline views and dinner at Altius or Monterey Bay Fish Grotto
            </li>
            <li>
              Spend a morning in the <strong>Strip District</strong> eating your
              way through bakeries, cheese shops, and food halls (The PA Market
              is a newer standout)
            </li>
            <li>
              Visit the <strong>Andy Warhol Museum</strong> and the{" "}
              <strong>Mattress Factory</strong> (immersive installation art) on
              the North Side
            </li>
            <li>
              Do a <strong>brewery crawl</strong> in Lawrenceville. Church Brew
              Works (a brewery inside a converted church) is the headliner, but
              there are 8+ breweries within walking distance
            </li>
            <li>
              Walk through <strong>Phipps Conservatory</strong> in Oakland, then
              check out the Cathedral of Learning across the street
            </li>
            <li>
              Book a <strong>Gateway Clipper</strong> river cruise for views from
              the water
            </li>
            <li>
              Take a <strong>CulturvaTOUR Party Bus</strong> for a guided tour
              of Pittsburgh's food, history, and culture ($109, Black-owned
              business)
            </li>
          </ul>
          <p className="text-muted">
            Honestly, Pittsburgh is underrated as a travel destination. The
            draft is just the excuse to visit. The city does the rest.
          </p>
        </section>

        {/* FAQ section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Things to Do FAQ
          </h2>
          <div className="space-y-4">
            {thingsToDoFAQs.map((faq) => (
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

        {/* Quick links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Plan the Rest of Your Weekend
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/schedule"
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary transition-colors"
            >
              <p className="font-bold mb-1">Draft Schedule</p>
              <p className="text-sm text-muted">
                Round-by-round times and what happens each day.
              </p>
            </Link>
            <Link
              href="/bars-restaurants"
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary transition-colors"
            >
              <p className="font-bold mb-1">Bars &amp; Restaurants</p>
              <p className="text-sm text-muted">
                Where to eat and drink near the draft venues.
              </p>
            </Link>
            <Link
              href="/itinerary"
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary transition-colors"
            >
              <p className="font-bold mb-1">Day-by-Day Itinerary</p>
              <p className="text-sm text-muted">
                How to plan each day for the best experience.
              </p>
            </Link>
            <Link
              href="/neighborhoods"
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary transition-colors"
            >
              <p className="font-bold mb-1">Neighborhoods</p>
              <p className="text-sm text-muted">
                Explore Pittsburgh beyond the draft footprint.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-2">
            Need help getting there?
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Parking is a mess and road closures are everywhere. Read the
            transportation guide before you go.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/parking-transportation"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
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
