import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh FAQ (20+ Answers)",
  description:
    "20+ answers to the most-asked questions about the 2026 NFL Draft in Pittsburgh. Parking, free entry, bag policy, hotels, transit, and what to expect.",
};

const faqItems = [
  // Getting There & Parking
  {
    question: "Where do I park for the NFL Draft in Pittsburgh?",
    answer:
      "Honestly? Don't drive. City officials, PRT, and the NFL are all begging people to use transit. Most North Shore lots are closed for stage construction. North Shore lots that charged $50 for Taylor Swift will hit $100+. Downtown garages will be even worse. Your best bet is a park-and-ride lot: Ross Park & Ride (I-279 Exit 5) from the north, South Hills Village T Station from the south, Wilkinsburg Park & Ride from the east. Pre-book a spot on SpotHero if you absolutely must drive.",
  },
  {
    question:
      "How do I get to the NFL Draft in Pittsburgh without driving?",
    answer:
      "PRT is running special Football Flyer bus routes from park-and-ride lots in every direction. The T light rail runs through a free fare zone downtown and stops at North Side Station on the North Shore (Allegheny Station is closed during draft weekend). The East Busway from the east side is fast and reliable. From Cranberry Township, park at Ross Park & Ride and take the #8 bus or O1 express. Budget 25-40 minutes depending on your starting point.",
  },
  {
    question:
      "Which bridges and roads are closed during the NFL Draft?",
    answer:
      "Roberto Clemente Bridge (6th Street) and Andy Warhol Bridge (7th Street) are closed to vehicles. Fort Pitt Bridge on-ramp from 10th Street Bypass, I-279 Southbound Exit 1B, and areas near Fort Duquesne Boulevard are also affected. The closures happen in 6 phases from March 28 through May 10. Phase 3 (April 22-25) is the biggest. Roberto Clemente Bridge stays open for pedestrians and is the key walking route between the two draft venues.",
  },
  {
    question: "How bad will traffic be during the NFL Draft in Pittsburgh?",
    answer:
      "Bad. Really bad. One Redditor put it perfectly: 'Imagine the Taylor Swift concert. Now multiply it by five. And it's 4 days.' Offices are telling workers to stay home. Pittsburgh Public Schools went remote for 3 days. Locals are taking PTO or stocking the fridge and hunkering down. If you're visiting, just don't drive downtown. Take transit. You'll thank yourself.",
  },
  {
    question:
      "How much will Uber and Lyft cost during draft weekend?",
    answer:
      "Expect surge pricing. One Reddit commenter estimated $80 from Cranberry Township with surge. Late-night rides back to your hotel will be nearly impossible with 500,000+ people competing for the same drivers. As one person put it: 'Good luck getting an Uber/Lyft back to the hotel.' Your best strategy: take transit in, and if you must rideshare, set your pickup location a few blocks away from the main venues to avoid the worst surge zones.",
  },
  // Tickets & Entry
  {
    question: "Is the NFL Draft free to attend?",
    answer:
      "Yes, the NFL Draft Experience and main stage viewing are 100% free. But you do need to register for an NFL OnePass (it's a free app). Download it before you go because you'll need it to get through the gates. VIP packages through On Location existed but sold out fast. Three-day and first-round packages are gone. If you see resale tickets, that's for VIP areas only. The main event is free for everyone.",
  },
  {
    question: "Do I need to register for the NFL Draft?",
    answer:
      "Yes. Download the NFL OnePass app and register before you arrive. It's free, but it's required for entry. Don't wait until you're standing in line with no cell service to figure this out. Download it at home, create your account, and have it ready. Your phone battery is your lifeline at this event.",
  },
  {
    question: "What is the NFL Draft bag policy?",
    answer:
      "The NFL uses a clear bag policy. You can bring one clear plastic bag (12\" x 6\" x 12\" or smaller) or a small clutch purse (4.5\" x 6.5\"). No backpacks, no large purses, no tinted bags. This is the same policy as NFL games. Don't learn this the hard way at the gate. There likely won't be anywhere convenient to drop off a banned bag.",
  },
  {
    question: "What time should I arrive at the NFL Draft?",
    answer:
      "Gates open times vary by day, but plan to arrive early. Day 1 (Thursday) is the busiest. First-round picks start at 8 PM ET, but the NFL Draft Experience and attractions open hours earlier. If you want a good viewing spot near the main stage, arrive by mid-afternoon. Days 2 and 3 are progressively less crowded. Saturday (Day 3) is the most relaxed day by far.",
  },
  // Where to Stay
  {
    question:
      "Are there affordable hotels left for NFL Draft weekend in Pittsburgh?",
    answer:
      "Downtown? Not really. Spring Hill Suites on the North Shore was quoted at $2,173/night. Even the Oaklander in Oakland is $500-700/night. But here's the trick: look at McKnight Road hotels (budget-friendly, on a bus line), Robinson Township, or Monroeville. They won't be cheap by normal standards, but they're a fraction of downtown prices. Also, hotels drip-feed inventory. Rooms that look 'sold out' now might reappear closer to the event as revenue managers release held blocks.",
  },
  {
    question:
      "Hotel vs Airbnb for the NFL Draft: which is cheaper?",
    answer:
      "Neither is cheap. Reddit is calling this 'the Super Bowl of Airbnb pricing.' Hosts are charging $1,500-2,000/night for houses near downtown. Hotels are gouging too. Your cheapest play is a suburban hotel on McKnight Road, in Robinson, or in Cranberry Township, combined with a park-and-ride bus into downtown. You'll pay more than normal, but you won't need 'tech bro money' to afford it.",
  },
  {
    question:
      "Should I stay in Cranberry Township for the NFL Draft?",
    answer:
      "It's a solid budget option. Hotels in Cranberry Township are cheaper than downtown, and it's about 25 miles north of Pittsburgh. The catch: there's no direct transit. Your best move is driving to Ross Park & Ride (I-279 Exit 5) and taking the #8 bus or O1 express downtown. That adds about 25 minutes each way. Worth it if you're saving $1,500/night on your hotel.",
  },
  // What to Do
  {
    question:
      "What is there to do at the NFL Draft besides watching picks?",
    answer:
      "Way more than you'd think. The NFL Draft Experience is a massive football-themed festival with interactive games, autograph sessions, photo ops with the Lombardi Trophy, and team exhibits. The NFL typically has free entertainment on the main stage (previous years featured Fall Out Boy, Weezer, and Brad Paisley). The Plaza at North Shore has ticketed concerts with Nelly, Steve Aoki, and 2 Chainz. There's a drone show after Day 2. A 5K race on Saturday morning. The Taste of the NFL charity food event on April 22 with 20+ local restaurants. Plus Pittsburgh itself: the Warhol Museum, Strip District food shopping, Mt. Washington inclines, and some of the best bar neighborhoods in the country.",
  },
  {
    question:
      "Is it worth going to the NFL Draft on Day 3 (Saturday)?",
    answer:
      "Actually, Saturday might be the smartest day to go. Multiple locals on Reddit recommended it as the best day. Day 3 is the least crowded. It looked 'empty' in Green Bay last year. There's a 5K race in the morning, the featured concert, and you can actually enjoy the NFL Draft Experience without fighting through 200,000 people. If you're a casual fan or bringing the family, Saturday is your day.",
  },
  {
    question: "Are there free concerts at the NFL Draft?",
    answer:
      "Yes. The NFL Draft Entertainment Series is free at the Draft Theater (next to Acrisure Stadium). Friday features Wiz Khalifa and Bret Michaels at 5:15 PM. Saturday features Kane Brown after the final picks. Thursday opens with KELS singing the national anthem and the Heritage Gospel Chorale of Pittsburgh. All free with OnePass registration, first-come first-served standing room. Separately, The Plaza at North Shore has ticketed concerts: Nelly on Wednesday (6 PM), Steve Aoki on Thursday (12 PM), and 2 Chainz on Saturday (6 PM). Those are paid events. Tickets at gofevo.com.",
  },
  {
    question: "Is the NFL Draft family-friendly?",
    answer:
      "The official NFL Draft Experience is designed for all ages. Interactive football games, photo ops, team exhibits. Kids love it. But keep a few things in mind: Pittsburgh Public Schools closed for 3 days because of the event, the National Aviary is closed Thursday and Friday, and the Children's Museum status is uncertain during draft week. If you're bringing young kids, Saturday (Day 3) is your best bet. Smaller crowds, more room to move, and you won't be fighting 200,000 people for a spot.",
  },
  // Practical Stuff
  {
    question:
      "What should I wear and bring to the NFL Draft in Pittsburgh?",
    answer:
      "Layers. Seriously. Late April in Pittsburgh can be 40 degrees or 85 degrees. Average highs are 58-62F, but rain is likely. Bring a clear bag (required by NFL policy), a portable phone charger (this is non-negotiable with 500,000+ people draining cell towers), comfortable walking shoes, a rain jacket or poncho (umbrellas are banned), and sunscreen. Wear your team jersey if you've got one. Leave your cash at the hotel. The entire Draft Experience is cashless, credit cards only. You can bring an empty reusable water bottle and fill it at free water stations inside the event. Download the NFL OnePass app before you leave the hotel.",
  },
  {
    question:
      "How many people are actually coming to the NFL Draft in Pittsburgh?",
    answer:
      "VisitPittsburgh says 500,000-700,000. But here's what that number actually means: it's cumulative over 3 days. The same person gets counted every day they show up. As one highly-upvoted Redditor explained: 'Those bigger numbers where you see 500K reported is more like 200K day one, 200K day two, 100K day 3. The same person is double or triple counted.' Detroit's record was 775,000 cumulative but roughly 312,000 unique individuals. Still massive. Still more people than live in the entire city of Pittsburgh. But it's not 700,000 people all at once.",
  },
  {
    question:
      "What's the weather like in Pittsburgh in late April?",
    answer:
      "Unpredictable. Average highs are 58-62F, but it could be 40 degrees and raining or 85 degrees and sunny. As one local put it: 'Could be 40 or 85.' The draft is an outdoor event with no covered seating for general admission. Pack layers, a rain jacket, and sunscreen. Check the forecast the day before, but prepare for anything. Pittsburgh weather changes fast.",
  },
  {
    question:
      "Where can I charge my phone at the NFL Draft?",
    answer:
      "This is the question nobody else is answering. With 500,000+ people using their phones for NFL OnePass, photos, rideshare apps, and social media, cell service will be strained and batteries will die fast. Bring a portable charger. Bring two if you can. There may be charging stations inside the NFL Draft Experience, but don't count on them being available when your phone hits 5%. A dead phone means no OnePass, no Uber, and no way to find your group.",
  },
  // For Locals
  {
    question:
      "Can I still get to work downtown during the NFL Draft?",
    answer:
      "Technically yes, but it won't be fun. Most offices are telling workers to work from home Thursday through Saturday. Pittsburgh Public Schools went remote for 3 days. PRT is running Saturday-level service on Thursday and Friday, which means many weekday-only bus routes won't run at all. Road closures affect I-279 exits, the 6th and 7th Street bridges, and Fort Duquesne Boulevard. If you have to be downtown, take the T or find a bus route that's still running. Or better yet, talk to your boss about working from home.",
  },
];

export default function FAQ() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            NFL Draft Pittsburgh 2026: Top 20 Questions Answered
          </h1>
          <p className="text-gray-300">
            Real answers to the questions people are actually asking on Reddit,
            Twitter, and in every group chat. Parking, hotels, bag policy,
            weather, crowd size, and everything else.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Intro */}
        <p className="text-muted mb-8">
          We scraped 27 Reddit threads, hundreds of comments, and every NFL
          Draft FAQ we could find. These are the 20 questions that kept coming
          up. Not the questions the NFL wants you to ask. The ones real people
          are actually asking.
        </p>

        <LastUpdated date="April 3, 2026" />

        {/* ========== SECTION 1: Getting There & Parking ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-6">
            Getting There &amp; Parking
          </h2>

          <div className="space-y-5">
            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Where do I park for the NFL Draft in Pittsburgh?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Honestly? Don't drive. City officials, PRT, and the NFL are all
                begging people to use transit. Most North Shore lots are closed
                for stage construction. North Shore lots that charged $50 for
                Taylor Swift will hit <strong>$100+</strong>. Downtown garages will be even worse.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Your best bet is a park-and-ride lot:{" "}
                <strong>Ross Park &amp; Ride</strong> (I-279 Exit 5) from the
                north, <strong>South Hills Village T Station</strong> from the
                south, <strong>Wilkinsburg Park &amp; Ride</strong> from the
                east. Pre-book a spot on <a href="https://spothero.com/city/pittsburgh-parking" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">SpotHero</a> if you must drive.
              </p>
              <p className="mt-3">
                <Link
                  href="/parking-transportation"
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Full parking &amp; transportation guide &rarr;
                </Link>
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                How do I get to the NFL Draft without driving?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                PRT is running special <strong>Football Flyer</strong> bus
                routes from park-and-ride lots in every direction. The{" "}
                <strong>T light rail</strong> runs through a free fare zone
                downtown and stops at North Side Station on the North Shore (Allegheny Station is closed during draft weekend). The{" "}
                <strong>East Busway</strong> from the east side is fast and
                reliable.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                From Cranberry Township, park at Ross Park &amp; Ride and take
                the #8 bus or O1 express. Budget 25-40 minutes depending on
                where you're starting.
              </p>
              <p className="mt-3">
                <Link
                  href="/getting-around"
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Getting around guide &rarr;
                </Link>
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Which bridges and roads are closed during the NFL Draft?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                <strong>Roberto Clemente Bridge</strong> (6th Street) and{" "}
                <strong>Andy Warhol Bridge</strong> (7th Street) are closed to
                vehicles. Fort Pitt Bridge on-ramp, several I-279 exit ramps,
                and Fort Duquesne Boulevard are also closed. The closures happen
                in <strong>6 phases from March 28 through May 10</strong>.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Phase 3 (April 22-25) is the biggest, shutting down most of the
                Allegheny-side of downtown. Roberto Clemente Bridge stays open
                for pedestrians and is actually a key walking route between the
                two draft venues.
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                How bad will traffic be during the NFL Draft?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Bad. Really bad. One Redditor put it perfectly:{" "}
                <em>
                  "Imagine the Taylor Swift concert. Now multiply it by five.
                  And it's 4 days."
                </em>{" "}
                Offices are telling workers to stay home. Pittsburgh Public
                Schools went remote for 3 days. Locals are taking PTO or
                stocking the fridge and hunkering down.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                If you're visiting, just don't drive downtown. Take transit.
                You'll thank yourself.
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                How much will Uber and Lyft cost during draft weekend?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Expect surge pricing. One Reddit commenter estimated{" "}
                <strong>$80 from Cranberry Township</strong> with surge.
                Late-night rides back to your hotel will be nearly impossible
                with 500,000+ people competing for the same drivers.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                As one person put it:{" "}
                <em>"Good luck getting an Uber/Lyft back to the hotel."</em>{" "}
                Your best strategy: take transit in, and if you must rideshare,
                set your pickup location a few blocks away from the main venues
                to avoid the worst surge zones.
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION 2: Tickets & Entry ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-6">Tickets &amp; Entry</h2>

          <div className="space-y-5">
            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Is the NFL Draft free to attend?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Yes. The NFL Draft Experience and main stage viewing are{" "}
                <strong>100% free</strong>. But you do need to register for an{" "}
                <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">NFL OnePass</a> (it's a free app). Download it
                before you go because you'll need it to get through the gates.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                VIP packages through On Location existed but sold out fast.
                Three-day and first-round packages are gone. If you see resale
                tickets, that's for VIP areas only. The main event is free for
                everyone.
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Do I need to register for the NFL Draft?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Yes. Download the <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">NFL OnePass app</a> and register
                before you arrive. It's free, but it's required for entry. Don't
                wait until you're standing in line with no cell service to figure
                this out. Download it at home, create your account, and have it
                ready.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Your phone battery is your lifeline at this event. Which brings
                us to the charger question below.
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                What is the NFL Draft bag policy?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                The NFL uses a <strong>clear bag policy</strong>. You can bring
                one clear plastic bag (12&quot; x 6&quot; x 12&quot; or smaller)
                or a small clutch purse (4.5&quot; x 6.5&quot;). No backpacks,
                no large purses, no tinted bags. Same rules as NFL games.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Don't learn this the hard way at the gate. There likely won't be
                anywhere convenient to drop off a banned bag.
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                What time should I arrive at the NFL Draft?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Gate times vary by day, but plan to arrive early.{" "}
                <strong>Day 1 (Thursday)</strong> is the busiest. First-round
                picks start at 8 PM ET, but the NFL Draft Experience opens hours
                earlier. If you want a good spot near the main stage, arrive by
                mid-afternoon.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Days 2 and 3 are progressively less crowded. Saturday (Day 3) is
                the most relaxed by far.
              </p>
              <p className="mt-3">
                <Link
                  href="/schedule"
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Full draft schedule &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION 3: Where to Stay ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-6">Where to Stay</h2>

          <div className="space-y-5">
            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Are there affordable hotels left for draft weekend?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Downtown? Not really. Spring Hill Suites on the North Shore was
                quoted at <strong>$2,173/night</strong>. Even the Oaklander in
                Oakland is $500-700/night. But here's the trick: look at{" "}
                <strong>McKnight Road hotels</strong> (budget-friendly, on a bus
                line), Robinson Township, or Monroeville.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Also, hotels drip-feed inventory. Rooms that look "sold out" now
                might reappear closer to the event as revenue managers release
                held blocks.
              </p>
              <p className="mt-3">
                <Link
                  href="/where-to-stay"
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Full hotel &amp; lodging guide &rarr;
                </Link>
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Hotel vs. Airbnb: which is cheaper for draft weekend?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Neither is cheap. Reddit is calling this{" "}
                <em>"the Super Bowl of Airbnb pricing."</em> Hosts are charging{" "}
                <strong>$1,500-2,000/night</strong> for houses near downtown.
                Hotels are gouging too.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Your cheapest play is a suburban hotel on McKnight Road, in
                Robinson, or in Cranberry Township, combined with a
                park-and-ride bus into downtown. You'll pay more than normal, but
                you won't need "tech bro money" to afford it.
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Should I stay in Cranberry Township for the draft?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                It's a solid budget option. Hotels in Cranberry are cheaper than
                downtown, and it's about 25 miles north of Pittsburgh. The
                catch: there's no direct transit.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Your best move is driving to{" "}
                <strong>Ross Park &amp; Ride</strong> (I-279 Exit 5) and taking
                the #8 bus or O1 express downtown. Adds about 25 minutes each
                way. Worth it if you're saving $1,500/night on your hotel.
              </p>
              <p className="mt-3">
                <Link
                  href="/cranberry-township"
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Full Cranberry Township guide &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION 4: What to Do ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-6">What to Do</h2>

          <div className="space-y-5">
            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                What is there to do at the draft besides watching picks?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Way more than you'd think. The{" "}
                <strong>NFL Draft Experience</strong> is a massive
                football-themed festival with interactive games, autograph
                sessions, photo ops with the Lombardi Trophy, and team exhibits.
                The NFL typically has <strong>free entertainment on the main
                stage</strong> (previous years featured Fall Out Boy, Weezer,
                and Brad Paisley). The Plaza at North Shore has ticketed concerts
                with Nelly, Steve Aoki, and 2 Chainz.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                There's a drone show after Day 2, a 5K race on Saturday morning,
                and the <strong>Taste of the NFL</strong> charity food event on
                April 22 with 20+ local restaurants. Plus Pittsburgh itself: the
                <a href="https://www.warhol.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Warhol Museum</a>, Strip District food shopping, Mt. Washington
                inclines, and some of the best bar neighborhoods in the country.
              </p>
              <p className="mt-3">
                <Link
                  href="/things-to-do"
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Full things to do guide &rarr;
                </Link>
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Is it worth going on Day 3 (Saturday)?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Actually, Saturday might be the smartest day to go. Multiple
                locals on Reddit recommended it as the best day. Day 3 is the{" "}
                <strong>least crowded</strong>. It looked "empty" in Green Bay
                last year.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                There's a 5K race in the morning, the featured concert, and you
                can actually enjoy the NFL Draft Experience without fighting
                through 200,000 people. If you're a casual fan or bringing the
                family, Saturday is your day.
              </p>
              <p className="mt-3">
                <Link
                  href="/itinerary"
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Day-by-day itinerary guide &rarr;
                </Link>
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Are there free concerts at the NFL Draft?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Yes. The <strong>NFL Draft Entertainment Series</strong> is free at the Draft Theater (next to Acrisure Stadium). <strong>Friday:</strong> Wiz Khalifa and Bret Michaels at 5:15 PM. <strong>Saturday:</strong> Kane Brown after the final picks. <strong>Thursday:</strong> KELS sings the national anthem, Heritage Gospel Chorale of Pittsburgh opens. All free with OnePass, first-come first-served.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Separately, <strong>The Plaza at North Shore</strong> has
                ticketed concerts: Nelly on Wednesday (6 PM), Steve Aoki on
                Thursday (12 PM), and 2 Chainz on Saturday (6 PM). Those are
                paid events. Tickets at{" "}
                <a href="https://gofevo.com/group/ThePlazaAtNorthShore" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">gofevo.com</a>.
                Jeezy is playing an unofficial show at Pitt, and McFadden's is
                hosting a DJ Pauly D event on draft Wednesday.
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Is the NFL Draft family-friendly?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                The official NFL Draft Experience is designed for all ages.
                Interactive football games, photo ops, team exhibits. Kids love
                it. But keep a few things in mind: the{" "}
                <strong>National Aviary is closed</strong> Thursday and Friday,
                and the Children's Museum status is uncertain during draft week.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                If you're bringing young kids,{" "}
                <strong>Saturday (Day 3)</strong> is your best bet. Smaller
                crowds, more room to move, and you won't be fighting 200,000
                people for a spot.
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION 5: Practical Stuff ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-6">Practical Stuff</h2>

          <div className="space-y-5">
            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                What should I wear and bring to the NFL Draft?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                <strong>Layers.</strong> Seriously. Late April in Pittsburgh can
                be 40 degrees or 85 degrees. Average highs are 58-62F, but rain
                is likely. Here's your packing list:
              </p>
              <ul className="text-muted text-sm mt-2 space-y-1 list-disc pl-5">
                <li>Clear bag (required by NFL policy)</li>
                <li>
                  Portable phone charger (non-negotiable with 500,000+ people
                  draining cell towers)
                </li>
                <li>Comfortable walking shoes</li>
                <li>Rain poncho or jacket (umbrellas are banned)</li>
                <li>Sunscreen</li>
                <li>Credit card (entire event is cashless, no cash accepted)</li>
                <li>Empty reusable water bottle (free refill stations inside)</li>
                <li>NFL OnePass app downloaded before you leave</li>
              </ul>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                How many people are actually coming? Is it really 700,000?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                VisitPittsburgh says 500,000-700,000. But here's what that
                number actually means: it's{" "}
                <strong>cumulative over 3 days</strong>. The same person gets
                counted every day they show up.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                As one highly-upvoted Redditor (241 points) explained:{" "}
                <em>
                  "Those bigger numbers where you see 500K reported is more like
                  200K day one, 200K day two, 100K day 3. The same person is
                  double or triple counted."
                </em>{" "}
                Detroit's record was 775,000 cumulative but roughly{" "}
                <strong>312,000 unique individuals</strong>. Still massive. Still
                more people than live in the entire city of Pittsburgh. But it's
                not 700,000 people all at once.
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                What's the weather like in Pittsburgh in late April?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Unpredictable. Average highs are 58-62F, but it could be 40
                degrees and raining or 85 degrees and sunny. As one local put
                it: <em>"Could be 40 or 85."</em>
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                The draft is an outdoor event with no covered seating for
                general admission. Pack layers, a rain jacket, and sunscreen.
                Check the forecast the day before, but prepare for anything.
                Pittsburgh weather changes fast.
              </p>
            </div>

            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Where can I charge my phone at the NFL Draft?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                This is the question nobody else is answering. With 500,000+
                people using their phones for OnePass, photos, rideshare apps,
                and social media, cell service will be strained and batteries
                will die fast.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                <strong>Bring a portable charger. Bring two if you can.</strong>{" "}
                There may be charging stations inside the NFL Draft Experience,
                but don't count on them. A dead phone means no OnePass, no Uber,
                and no way to find your group.
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION 6: For Locals ========== */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading mb-6">For Locals</h2>

          <div className="space-y-5">
            <div className="card-minimal p-5">
              <h3 className="font-heading text-lg mb-2">
                Can I still get to work downtown during the NFL Draft?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Technically yes, but it won't be fun. Most offices are telling
                workers to work from home Thursday through Saturday. Pittsburgh
                Public Schools went remote for 3 days. PRT is running{" "}
                <strong>Saturday-level service</strong> on Thursday and Friday,
                which means many weekday-only bus routes won't run at all.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-2">
                Road closures affect I-279 exits, the 6th and 7th Street
                bridges, and Fort Duquesne Boulevard. If you have to be
                downtown, take the T or find a bus route that's still running.
                Or better yet, talk to your boss about working from home.
              </p>
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="card-minimal p-6 text-center">
          <h2 className="text-xl font-heading mb-3">
            Still Have Questions? We've Got More Guides.
          </h2>
          <p className="text-sm text-muted mb-5">
            Each guide goes deep on a single topic. Written with real data from
            Reddit, local news, and official sources.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link
              href="/parking-transportation"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Parking Guide
            </Link>
            <Link
              href="/where-to-stay"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Where to Stay
            </Link>
            <Link
              href="/things-to-do"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Things to Do
            </Link>
            <Link
              href="/schedule"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Draft Schedule
            </Link>
            <Link
              href="/bars-restaurants"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Bars &amp; Restaurants
            </Link>
            <Link
              href="/neighborhoods"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Neighborhood Guide
            </Link>
            <Link
              href="/cranberry-township"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Cranberry Township
            </Link>
            <Link
              href="/budget-guide"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Budget Guide
            </Link>
            <Link
              href="/getting-around"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Getting Around
            </Link>
          </div>
        </section>
      </article>

      <RelatedPages current="faq" slugs={["parking", "schedule", "checklist", "budget"]} />
    </>
  );
}
