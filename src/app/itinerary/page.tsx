import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh Day-by-Day Itinerary",
  description:
    "Your day-by-day plan for the 2026 NFL Draft in Pittsburgh. What to do Thursday, Friday, and Saturday with times, routes, and food stops.",
};

function TimeSlot({
  time,
  title,
  children,
  highlight,
}: {
  time: string;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex gap-4 rounded-lg border p-4 ${
        highlight
          ? "border-accent bg-amber-50"
          : "border-border bg-surface"
      }`}
    >
      <div className="shrink-0 w-24 md:w-28">
        <span className="text-sm font-bold text-primary-dark">{time}</span>
      </div>
      <div className="flex-1">
        <p className="font-bold mb-1">{title}</p>
        <div className="text-sm text-muted">{children}</div>
      </div>
    </div>
  );
}

function DayHeader({
  day,
  date,
  tagline,
  color,
}: {
  day: string;
  date: string;
  tagline: string;
  color: string;
}) {
  return (
    <div className={`rounded-lg p-5 mb-4 ${color}`}>
      <p className="text-sm font-semibold uppercase tracking-wide opacity-80">
        {day}
      </p>
      <h2 className="text-2xl font-bold">{date}</h2>
      <p className="text-sm mt-1 opacity-90">{tagline}</p>
    </div>
  );
}

export default function ItineraryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Itinerary", href: "/itinerary" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Itinerary
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            NFL Draft Pittsburgh Day-by-Day Itinerary
          </h1>
          <p className="text-gray-300">
            No competitor has this. A structured, hour-by-hour plan for
            Wednesday through Saturday with real times, real restaurant names,
            and tips from locals and Reddit.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Quick nav */}
        <nav className="bg-surface border border-border rounded-lg p-4 mb-10">
          <p className="font-bold mb-2">Jump to a day:</p>
          <div className="flex flex-wrap gap-2">
            <a
              href="#wednesday"
              className="text-sm bg-primary-dark text-white px-3 py-1.5 rounded-md hover:opacity-90"
            >
              Wednesday (Pre-Draft)
            </a>
            <a
              href="#thursday"
              className="text-sm bg-primary-dark text-white px-3 py-1.5 rounded-md hover:opacity-90"
            >
              Thursday (Day 1)
            </a>
            <a
              href="#friday"
              className="text-sm bg-primary-dark text-white px-3 py-1.5 rounded-md hover:opacity-90"
            >
              Friday (Day 2)
            </a>
            <a
              href="#saturday"
              className="text-sm bg-primary-dark text-white px-3 py-1.5 rounded-md hover:opacity-90"
            >
              Saturday (Day 3)
            </a>
            <a
              href="#pro-tips"
              className="text-sm bg-accent text-foreground px-3 py-1.5 rounded-md hover:opacity-90 font-semibold"
            >
              Pro Tips
            </a>
          </div>
        </nav>

        {/* Intro */}
        <p className="text-muted mb-3">
          The 2026 NFL Draft in Pittsburgh runs from Thursday, April 23 through
          Saturday, April 25. But if you're smart, you'll arrive Wednesday
          night. That's when the parties start, the crowds are still
          manageable, and you can actually get a table at a restaurant.
        </p>
        <p className="text-muted mb-8">
          This itinerary covers all four days. Every time slot, every food
          recommendation, every move. Treat it like a playbook. Adjust as
          needed.
        </p>

        {/* ===================== WEDNESDAY ===================== */}
        <section id="wednesday" className="mb-12 scroll-mt-20">
          <DayHeader
            day="Pre-Draft"
            date="Wednesday, April 22"
            tagline="Arrive early. Settle in. The calm before 500,000 people show up."
            color="bg-gray-100 text-foreground"
          />

          <div className="space-y-3">
            <TimeSlot time="Afternoon" title="Check in and explore">
              <p>
                Get to your hotel early. If you're staying downtown or North
                Shore, walk the area while it's still quiet. Grab coffee at
                Reyna Foods in the Strip District or Peace, Love &amp; Little
                Donuts for something quick.
              </p>
            </TimeSlot>

            <TimeSlot
              time="4:00 PM"
              title="Hit the Strip District"
            >
              <p>
                Pittsburgh's foodie neighborhood is a 10-minute walk from Point
                State Park. Hit Pennsylvania Macaroni Co. for imported cheese
                and Italian goods, Wigle Whiskey for a tasting, or DeLuca's
                Diner for a late lunch. It's way less crowded today than it
                will be Saturday.
              </p>
            </TimeSlot>

            <TimeSlot
              time="5:30 PM"
              title="Taste of the Draft charity food event"
              highlight
            >
              <p>
                20+ local restaurants serving signature dishes. Benefits
                GENYOUth, a youth nutrition nonprofit. This is your first
                chance to sample Pittsburgh food all in one spot. Location TBA
                but expected near the draft footprint. Tickets required.
              </p>
            </TimeSlot>

            <TimeSlot
              time="8:00 PM"
              title='Jason Aldean "The Night Before" concert at Rivers Casino'
              highlight
            >
              <p>
                Rivers Casino on the North Shore is hosting the big pre-draft
                concert. Jason Aldean literally has a restaurant on the North
                Shore too. If country isn't your thing, Shorty's Goodtimes Bar
                on the North Shore is hosting Steve Aoki for an official draft
                eve after-party.
              </p>
            </TimeSlot>

            <TimeSlot time="10:00 PM" title="Set up your phone for tomorrow">
              <p>
                Download the NFL OnePass app. Set up your profile, link your
                tickets if you have them, and get familiar with the Draft
                Experience map. Charge your portable battery. You'll thank
                yourself at 11 PM tomorrow when your phone's at 8%.
              </p>
            </TimeSlot>
          </div>
        </section>

        {/* ===================== THURSDAY ===================== */}
        <section id="thursday" className="mb-12 scroll-mt-20">
          <DayHeader
            day="Day 1 — The Big Night"
            date="Thursday, April 23"
            tagline="Biggest crowds. First-round picks. The energy is unreal."
            color="bg-primary-dark text-white"
          />

          <div className="space-y-3">
            <TimeSlot time="8:00 AM" title="Breakfast at a Pittsburgh institution">
              <p>
                Pamela's Diner in the Strip District. Famous for thin, crispy
                crepe-style pancakes. Over 1,000 reviews on TripAdvisor and
                it's the #1-rated spot in the neighborhood. Get there early
                because the line will be brutal by 9:30. Alternative: DeLuca's
                Diner, just down the street.
              </p>
            </TimeSlot>

            <TimeSlot time="9:30 AM" title="Walk the riverwalk to Point State Park">
              <p>
                After breakfast, walk along the Allegheny River trail toward
                Point State Park. It's about 15 minutes. You'll see the draft
                stage setup across the river at Acrisure Stadium. Great photo
                ops before the crowds arrive.
              </p>
            </TimeSlot>

            <TimeSlot
              time="12:00 PM"
              title="Draft Experience opens at Point State Park"
              highlight
            >
              <p>
                This is the free, interactive fan zone. Run the 40-yard dash,
                try the field goal challenge, hit the autograph stage, check
                out team exhibits. It's massive. Plan to spend 2-3 hours here
                minimum. Today will be the most crowded day at the Experience.
              </p>
              <p className="mt-2">
                <Link
                  href="/things-to-do"
                  className="text-primary font-semibold hover:underline"
                >
                  Full breakdown of Draft Experience attractions &rarr;
                </Link>
              </p>
            </TimeSlot>

            <TimeSlot time="3:00 PM" title="Cross to the North Shore">
              <p>
                Walk across the Roberto Clemente Bridge (it's pedestrian-only
                during the draft). Or take the T light rail for free from
                downtown to Allegheny Station. Both get you to the North Shore
                in under 10 minutes.
              </p>
              <p className="mt-2">
                <Link
                  href="/getting-around"
                  className="text-primary font-semibold hover:underline"
                >
                  Getting between venues &rarr;
                </Link>
              </p>
            </TimeSlot>

            <TimeSlot time="5:00 PM" title="Early dinner on the North Shore">
              <p>
                Eat before the Round 1 rush. Crowds will flood in around 6-7 PM.
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>Federal Galley</strong> — 4 restaurant concepts under
                  one roof. Great if your group can't agree on food. Half-off
                  drafts at happy hour until 6:30 PM.
                </li>
                <li>
                  <strong>Tom's Watch Bar</strong> — Steps from Acrisure Stadium.
                  Massive video walls so you won't miss a pick.
                </li>
                <li>
                  <strong>Southern Tier Brewery</strong> — Indoor/outdoor seating,
                  solid beer, dogs allowed. 4-minute walk to PNC Park.
                </li>
                <li>
                  <strong>Burgatory</strong> — Gourmet burgers. Reliable, popular,
                  won't disappoint.
                </li>
              </ul>
              <p className="mt-2">
                <Link
                  href="/bars-restaurants"
                  className="text-primary font-semibold hover:underline"
                >
                  Full restaurant guide &rarr;
                </Link>
              </p>
            </TimeSlot>

            <TimeSlot
              time="8:00 PM"
              title="Round 1 picks begin at Acrisure Stadium"
              highlight
            >
              <p>
                This is the main event. The NFL commissioner walks to the
                podium, the crowd goes nuts, and 32 teams make their
                first-round picks. The atmosphere around Acrisure Stadium is
                unlike anything Pittsburgh has hosted. Find a spot early if you
                want to be near the main stage.
              </p>
            </TimeSlot>

            <TimeSlot time="11:00 PM+" title="After-parties and late night">
              <p>
                Round 1 wraps up around 11:30 PM. You've got two main moves:
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>Stay North Shore:</strong> Shorty's Goodtimes Bar is
                  hosting Nelly as the official Day 1 after-party. Mike's Beer
                  Bar has 500+ beers and 80 rotating taps. SoHo Pittsburgh is
                  the OG North Shore restaurant.
                </li>
                <li>
                  <strong>South Side (Carson Street):</strong> 80+ bars within
                  10 blocks. Hofbrauhaus for a beer hall vibe, Pins Mechanical
                  for pinball and bowling, Jack's Bar for a classic dive. Walk
                  a few blocks from the venues before calling an Uber to dodge
                  the worst surge pricing.
                </li>
              </ul>
            </TimeSlot>
          </div>
        </section>

        {/* ===================== FRIDAY ===================== */}
        <section id="friday" className="mb-12 scroll-mt-20">
          <DayHeader
            day="Day 2 — The Sweet Spot"
            date="Friday, April 24"
            tagline="Smaller crowds than Thursday. Better vibes. Locals call this the best day."
            color="bg-blue-700 text-white"
          />

          <div className="space-y-3">
            <TimeSlot time="8:30 AM" title="Coffee and the Duquesne Incline">
              <p>
                Start the morning slow. Grab coffee, then ride the Duquesne
                Incline up Mount Washington for the most famous skyline view in
                America. It's $6 round trip and takes about 5 minutes each
                way. The view of the three rivers and downtown from the top is
                the single best photo you'll take all weekend.
              </p>
            </TimeSlot>

            <TimeSlot time="10:30 AM" title="Explore something non-football">
              <p>
                If you've got kids, the Carnegie Science Center is right on the
                North Shore near the draft venues. No kids? The Andy Warhol
                Museum is the world's largest collection of Warhol's work, and
                it's walking distance from Acrisure Stadium. Randyland is
                free, colorful, and wildly Instagram-friendly.
              </p>
            </TimeSlot>

            <TimeSlot
              time="12:00 PM"
              title="Draft Experience reopens (less crowded)"
              highlight
            >
              <p>
                Same attractions as Thursday but noticeably fewer people.
                Lines for the 40-yard dash and field goal challenge will be
                shorter. If you skipped anything yesterday, hit it today.
                This is the sweet spot for actually enjoying the Experience
                without being shoulder-to-shoulder.
              </p>
            </TimeSlot>

            <TimeSlot time="2:00 PM" title="Lunch in the Strip District">
              <p>
                You're close. Walk over and eat well.
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>DiAnoia's Eatery</strong> — 1,200+ Yelp reviews.
                  Italian market and restaurant. Get the pasta.
                </li>
                <li>
                  <strong>The PA Market</strong> — European-style food hall.
                  Two floors: cocktail bars, food vendors, wine garden. 14,000
                  sq ft.
                </li>
                <li>
                  <strong>Novo Asian Food Hall</strong> — Sushi, pho, spring
                  rolls from multiple vendors. Great variety.
                </li>
                <li>
                  <strong>Gaucho Parrilla Argentina</strong> — 4.5 stars on
                  TripAdvisor with 833 reviews. Argentine grill. One of the
                  highest-rated restaurants near the draft.
                </li>
              </ul>
            </TimeSlot>

            <TimeSlot time="4:00 PM" title="Pre-dinner drinks downtown">
              <p>
                Head back toward downtown. The area between Point State Park
                and Market Square has great spots to kill time before the
                picks start.
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>Bridges &amp; Bourbon</strong> — High-end cocktail
                  bar. Whiskey-forward.
                </li>
                <li>
                  <strong>Butcher and the Rye</strong> — Craft cocktails, New
                  American food. Popular with foodies.
                </li>
                <li>
                  <strong>The Original Oyster House</strong> — The oldest
                  restaurant in Pittsburgh. Tourists love it.
                </li>
              </ul>
            </TimeSlot>

            <TimeSlot time="5:30 PM" title="Dinner downtown">
              <p>
                Eat before 7 PM. Once Rounds 2-3 start, everything nearby
                gets slammed.
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>Gaucho Parrilla Argentina</strong> — If you didn't
                  hit it at lunch, do it now.
                </li>
                <li>
                  <strong>Proper Brick Oven and Tap Room</strong> — 4.5 stars,
                  725 TripAdvisor reviews. Great pizza and craft beer.
                </li>
                <li>
                  <strong>Alta Via</strong> — Italian at Market Square. Perfect
                  central location.
                </li>
              </ul>
            </TimeSlot>

            <TimeSlot
              time="7:00 PM"
              title="Rounds 2-3 picks begin"
              highlight
            >
              <p>
                The atmosphere is different tonight. Still electric, but more
                relaxed than Round 1. True football fans love this session
                because the picks are faster and the talent debates are
                better. Find your spot at the main stage or watch from a
                nearby bar with a big screen.
              </p>
            </TimeSlot>

            <TimeSlot time="10:30 PM+" title="Drone show and late night">
              <p>
                After the picks wrap, look up. The draft features a drone
                light show over the rivers. Don't miss it. Then make your
                move:
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>Lawrenceville breweries:</strong> Church Brew Works
                  (a brewery inside a historic church, it's as cool as it
                  sounds), Grist House (great outdoor patio), Dancing Gnome
                  (best IPAs in the city).
                </li>
                <li>
                  <strong>South Side round 2:</strong> Acacia for upscale
                  cocktails, Jekyl &amp; Hyde for a fun vibe, Bar 11 for a
                  hidden gem off the main strip.
                </li>
                <li>
                  <strong>Stay North Shore:</strong> Shorty's is hosting 2
                  Chainz tonight for the official Day 2 after-party.
                </li>
              </ul>
            </TimeSlot>
          </div>
        </section>

        {/* ===================== SATURDAY ===================== */}
        <section id="saturday" className="mb-12 scroll-mt-20">
          <DayHeader
            day="Day 3 — The Local's Pick"
            date="Saturday, April 25"
            tagline="The insider's day. Smaller crowds. 5K run. Concert. Last call at the Draft Experience."
            color="bg-accent text-foreground"
          />

          <div className="space-y-3">
            <TimeSlot
              time="7:00 AM"
              title="PicksBURGH 5K run"
              highlight
            >
              <p>
                P3R (the organization behind the Pittsburgh Marathon) is
                running the PicksBURGH 5K. Registration required. The route
                is expected to close the 16th Street Bridge Saturday morning.
                Even if you don't run, it's fun to watch. Check
                p3r.org for registration details.
              </p>
            </TimeSlot>

            <TimeSlot time="8:30 AM" title="Breakfast before the gates open">
              <p>
                If you haven't tried Pamela's yet, today's the day. Or hit
                the Strip District Saturday morning market. Vendors, street
                food, produce, meat, cheese. It's the quintessential
                Pittsburgh experience and it happens to be draft day 3.
              </p>
            </TimeSlot>

            <TimeSlot
              time="9:00 AM"
              title="Draft Experience opens early"
              highlight
            >
              <p>
                Gates open early on Saturday. Get in before the afternoon
                crowds build. Lines for the popular attractions (40-yard
                dash, autograph stage) will be the shortest they've been all
                weekend right at open. This is your last chance. The Draft
                Experience closes at 6 PM.
              </p>
            </TimeSlot>

            <TimeSlot time="11:00 AM" title="Explore a neighborhood you missed">
              <p>
                Today is looser. Fewer people, less pressure. Pick a
                neighborhood you haven't explored yet:
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>Lawrenceville</strong> — Trendy restaurants and
                  independent shops along Butler Street. Great breweries.
                </li>
                <li>
                  <strong>South Side</strong> — Walk Carson Street during the
                  day when it's calmer. Hit SouthSide Works for shopping.
                </li>
                <li>
                  <strong>North Side (beyond stadiums)</strong> — The Mattress
                  Factory has immersive contemporary art. $22 admission, open
                  11 AM to 6 PM. Randyland is free.
                </li>
              </ul>
              <p className="mt-2">
                <Link
                  href="/neighborhoods"
                  className="text-primary font-semibold hover:underline"
                >
                  Full neighborhood guide &rarr;
                </Link>
              </p>
            </TimeSlot>

            <TimeSlot
              time="12:00 PM"
              title="Rounds 4-7 begin"
              highlight
            >
              <p>
                The final rounds. 4 through 7 all happen today. This is
                where the deep draft picks happen. The pace is fast and the
                vibe is more casual. True football nerds love Day 3. It wraps
                up by early evening.
              </p>
            </TimeSlot>

            <TimeSlot time="1:00 PM" title="Lunch near the action">
              <p>
                Keep it simple. You'll want to be near the draft stage or
                Experience this afternoon.
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>Condado Tacos</strong> — Build-your-own tacos near
                  Market Square. Casual, affordable, fast.
                </li>
                <li>
                  <strong>The Yard</strong> — Monster grilled cheese
                  sandwiches and a solid draft beer list. Fun spot.
                </li>
                <li>
                  <strong>City Works</strong> — 90 craft beers on tap. Modern
                  American menu. Good lunch-and-watch spot.
                </li>
              </ul>
            </TimeSlot>

            <TimeSlot
              time="3:00 PM"
              title="Featured concert on the draft stage"
              highlight
            >
              <p>
                The NFL brings in a big musical act for Saturday afternoon.
                Previous years have featured Fall Out Boy, Weezer, and Brad
                Paisley. The 2026 lineup hasn't been announced yet, but it's
                always a major name. Free with draft attendance.
              </p>
              <p className="mt-2">
                <Link
                  href="/schedule"
                  className="text-primary font-semibold hover:underline"
                >
                  Latest schedule and concert updates &rarr;
                </Link>
              </p>
            </TimeSlot>

            <TimeSlot time="6:00 PM" title="Draft Experience closes. Last call.">
              <p>
                The Draft Experience shuts down at 6 PM. Take your last
                photos, grab any free swag you missed, and head to dinner.
                The final picks will still be going on the main stage.
              </p>
            </TimeSlot>

            <TimeSlot time="7:00 PM" title="Farewell dinner in a Pittsburgh classic">
              <p>
                Make your last night count. Go somewhere you'll remember.
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>Church Brew Works</strong> — A brewery inside a
                  converted 1902 church in Lawrenceville. Copper brew kettles
                  sit where the altar used to be. One of the most unique
                  restaurants in America.
                </li>
                <li>
                  <strong>Grist House Craft Brewery</strong> — Huge outdoor
                  patio space. If the weather's good, this is the move.
                </li>
                <li>
                  <strong>Hofbrauhaus Pittsburgh</strong> — German beer hall on
                  the South Side. Live music, big steins, great atmosphere for
                  a group.
                </li>
                <li>
                  <strong>Eddie Merlot's</strong> — If you want to go upscale.
                  Prime aged beef downtown. They're running draft-specific
                  promotions.
                </li>
              </ul>
            </TimeSlot>

            <TimeSlot time="9:00 PM+" title="Last night out">
              <p>
                The draft's over but Pittsburgh isn't done with you. A few
                final options:
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>Bar Marco</strong> — Some of the best bartenders in
                  the city. Strip District. Small plates and craft cocktails.
                </li>
                <li>
                  <strong>Olive or Twist</strong> — Hosting the YinzerMOB
                  Draft Party on the 2nd floor. $100 ticket. Premium
                  cocktails downtown.
                </li>
                <li>
                  <strong>Cadence Cellars</strong> — Speakeasy-style wine bar
                  near downtown. Low-key ending to a big weekend.
                </li>
              </ul>
            </TimeSlot>
          </div>
        </section>

        {/* ===================== PRO TIPS ===================== */}
        <section id="pro-tips" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">
            Pro Tips from Locals and Reddit
          </h2>
          <p className="text-muted mb-4">
            These aren't generic tips. They come from r/pittsburgh threads,
            local business owners, and people who've attended previous drafts
            in other cities.
          </p>

          <div className="space-y-3">
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">Saturday is the insider's pick</p>
              <p className="text-sm text-muted">
                Locals say it. Reddit confirms it. Day 3 has the smallest
                crowds, the 5K, the big concert, and the most relaxed vibe.
                Green Bay's Day 3 "looked empty" compared to Day 1. If you
                can only come one day, Saturday is the move for casual fans.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">
                Thursday is for die-hards. Friday is the sweet spot.
              </p>
              <p className="text-sm text-muted">
                Thursday has Round 1 and the biggest energy, but also the
                biggest crowds. Friday gives you Rounds 2-3 with 30-40%
                fewer people. If you want the full experience without being
                crushed, Friday's your day.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">
                Download OnePass Wednesday night
              </p>
              <p className="text-sm text-muted">
                The NFL OnePass app is your ticket to draft attractions,
                schedules, maps, and exclusive content. Don't waste Thursday
                morning fumbling with it on slow cell service. Set it up the
                night before when you're on hotel wifi.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">
                Bring a portable charger. Your phone will die.
              </p>
              <p className="text-sm text-muted">
                500,000+ people on their phones, taking photos, using apps,
                calling Ubers. Cell service will be strained and your
                battery will drain fast. A portable charger isn't optional.
                Bring one that can do at least 2 full charges.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">
                Don't drive. Seriously.
              </p>
              <p className="text-sm text-muted">
                Park at a suburban park-and-ride and take the bus or T
                downtown. Downtown garages are expected to hit $100+. North
                Shore parking lots are closed for stage construction. Multiple
                bridges and highway exits are shut down. The T is free between
                the two draft venues.
              </p>
              <p className="text-sm mt-2">
                <Link
                  href="/parking-transportation"
                  className="text-primary font-semibold hover:underline"
                >
                  Full parking and transit guide &rarr;
                </Link>
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">
                Eat early or eat late. Never at peak time.
              </p>
              <p className="text-sm text-muted">
                Restaurants near the draft footprint will have hour-long waits
                between 6-8 PM on Thursday and Friday. Eat dinner at 5 PM
                or after 9:30 PM. Or walk 10-15 minutes to the Strip District
                or Market Square where it's slightly less insane.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">
                Check the weather. Pittsburgh in late April is unpredictable.
              </p>
              <p className="text-sm text-muted">
                It could be 45 degrees and rainy or 80 degrees and sunny.
                That's not an exaggeration. Layer up. Bring a light rain
                jacket. Don't assume it'll be warm just because it's late
                April.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-bold mb-1">
                Walk a few blocks before calling an Uber
              </p>
              <p className="text-sm text-muted">
                Surge pricing will be highest right at the draft venues.
                Walk 3-4 blocks in any direction before requesting a ride.
                One Reddit user estimated $80 from the North Shore to
                Cranberry Township with surge. Late-night rides home will be
                the hardest to get.
              </p>
            </div>
          </div>
        </section>

        {/* Which day is right for you */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Which Day Is Right for You?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-3 font-semibold">If you're...</th>
                  <th className="text-left p-3 font-semibold">Go on...</th>
                  <th className="text-left p-3 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3">A die-hard football fan</td>
                  <td className="p-3 font-semibold">Thursday</td>
                  <td className="p-3 text-muted">
                    Round 1 picks. Biggest energy. This is the night you've
                    been waiting for.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Here for the full experience</td>
                  <td className="p-3 font-semibold">Friday</td>
                  <td className="p-3 text-muted">
                    Best balance of football and fun. Fewer crowds than
                    Thursday, better than Saturday for picks.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">A casual fan or family</td>
                  <td className="p-3 font-semibold">Saturday</td>
                  <td className="p-3 text-muted">
                    Smallest crowds. 5K run. Concert. Draft Experience is
                    easiest to enjoy. Locals' pick.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Doing the whole weekend</td>
                  <td className="p-3 font-semibold">Arrive Wednesday</td>
                  <td className="p-3 text-muted">
                    Pre-draft parties, concert at Rivers Casino, and a chance
                    to explore before the chaos starts.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-2">Plan the rest of your trip</h2>
          <p className="text-gray-300 text-sm mb-4">
            This itinerary tells you when. These guides tell you everything
            else.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link
              href="/parking-transportation"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Parking &amp; Transit
            </Link>
            <Link
              href="/where-to-stay"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Where to Stay
            </Link>
            <Link
              href="/bars-restaurants"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Bars &amp; Restaurants
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
    </>
  );
}
