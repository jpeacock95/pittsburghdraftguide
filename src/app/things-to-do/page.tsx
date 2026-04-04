import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh: Things to Do 2026",
  description:
    "There's way more than just picks. Free Draft Experience, concerts, a 5K race, food festivals, and city attractions. Here's everything happening April 23-25.",
};

const thingsToDoFAQs = [
  {
    question: "What is there to do at the NFL Draft besides watch picks?",
    answer:
      "The NFL Draft is a 3-day festival, not just a broadcast. The free Draft Experience at Point State Park has a 40-yard dash, field goal challenge, autograph stage, and the Lombardi Trophy. The NFL typically has free entertainment on the main draft stage, plus a drone show, the PicksBURGH 5K race, and the Taste of the Draft food event. The Plaza at North Shore also has ticketed concerts (Nelly, Steve Aoki, 2 Chainz). Pittsburgh itself has world-class museums, inclines, breweries, and restaurants within walking distance of the venues.",
  },
  {
    question: "Is the NFL Draft Experience really free?",
    answer:
      "Yes. The NFL Draft Experience at Point State Park is completely free. You just need to register for a free NFL OnePass (download the NFL OnePass app). Hours are Thursday and Friday 12pm to 10pm, and Saturday 9am to 6pm.",
  },
  {
    question: "What concerts are at the 2026 NFL Draft in Pittsburgh?",
    answer:
      "The NFL Draft Entertainment Series is free at the Draft Theater. Wiz Khalifa and Bret Michaels perform Friday after the picks. Kane Brown headlines Saturday after the final picks. Thursday opens with KELS singing the national anthem and Heritage Gospel Chorale of Pittsburgh. All free with OnePass registration, first-come first-served. There's also a drone show after Day 2. Separately, The Plaza at North Shore has ticketed concerts: Nelly on Wednesday April 22 (6 PM), Steve Aoki on Thursday April 23 (12 PM), and 2 Chainz on Saturday April 25 (6 PM). Tickets at gofevo.com. Jason Aldean is also playing Rivers Casino on April 22.",
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
      <section
        className="photo-section text-white py-16 md:py-20"
        style={{ backgroundImage: "url('/pgh-fountain-sunset.webp')" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Things to Do
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            Things to Do During NFL Draft Weekend Pittsburgh
          </h1>
          <p className="text-gray-300">
            The draft isn't just names being read off a card. It's a 3-day
            festival with live entertainment, interactive experiences, a 5K race,
            food events, and one of the best cities in America as your backdrop.
            Here's everything worth doing.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <LastUpdated date="April 3, 2026" />

        {/* What is there to do? */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
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
            free fan zone with games and attractions. Live entertainment on the
            main stage. Ticketed concerts at The Plaza at North Shore.
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
          src="/pgh-point-state-park.webp"
          alt="Point State Park fountain at golden hour where Pittsburgh's three rivers meet"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-lg w-full h-auto mb-8"
        />
        <section className="mb-14">
          <h2 id="draft-experience" className="text-2xl font-heading mb-4">
            NFL Draft Experience (Free Fan Zone at Point State Park)
          </h2>
          <p className="text-muted mb-3">
            The Draft Experience is the centerpiece of the whole weekend, and
            it's completely free. It takes over Point State Park (where
            Pittsburgh's three rivers meet) with interactive football
            activities, exhibits, and appearances.
          </p>

          <div className="card-minimal p-5 mb-4">
            <p className="font-bold mb-3">Point State Park attractions:</p>
            <ul className="space-y-2 text-muted list-disc pl-5">
              <li>
                <strong>40-yard dash</strong> with an official NFL timer and a giant LED wall showing you racing against digital NFL players
              </li>
              <li>
                <strong>Hail Mary</strong> throw over defenders into a drop-in net. Test your deep ball.
              </li>
              <li>
                <strong>Field goal challenge</strong> on a real setup
              </li>
              <li>
                <strong>Long snap station</strong> to try your hand at punt and field goal snaps
              </li>
              <li>
                <strong>Autograph stage</strong> with current and former NFL
                players. Schedule drops April 14 in the <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">OnePass app</a> with updates throughout the weekend.
              </li>
              <li>
                <strong>Steelers' Lombardi Trophies</strong> photo op. All six of them.
              </li>
              <li>
                <strong>First Overall Pick podium</strong> replica. Stand behind the podium like you just went #1.
              </li>
              <li>
                <strong>Taste of Pittsburgh</strong> food vendors from local restaurants on site. (Different from the $845 Taste of the Draft charity event.)
              </li>
              <li>
                <strong>NFL Shop</strong> with the largest assortment of draft and team merchandise
              </li>
            </ul>
          </div>

          <div className="card-minimal p-5 mb-4">
            <p className="font-bold mb-3">North Shore attractions (near Acrisure Stadium):</p>
            <ul className="space-y-2 text-muted list-disc pl-5">
              <li>
                <strong>Vertical jump</strong> to find out your combine differential, just like at the NFL Scouting Combine
              </li>
              <li>
                <strong>NFL Museum</strong> with a replica NFL locker room, Pro Football Hall of Fame busts, all 59 Super Bowl rings, and the Heisman Trophy
              </li>
              <li>
                <strong>Look Like A Pro</strong> photo station. Step inside a body-cast mold with your favorite team's uniform.
              </li>
              <li>
                <strong>Pepsi Team Helmets</strong> oversized replicas of all 32 NFL team helmets
              </li>
              <li>
                <strong>Bud Light Beer Hall</strong> with photo ops (21+ for drinks)
              </li>
              <li>
                <strong>Gear Up and Go</strong> (kids can try on NFL equipment)
              </li>
              <li>
                <strong>Fan viewing on Acrisure Stadium field</strong> for Rounds 1-3. Blankets are allowed on the field but must be in use at all times.
              </li>
              <li>
                <strong>Play Football Field</strong> with USA Football clinics for kids ages 6-14. First-come, first-served.
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-accent pl-5 mb-4">
            <p className="font-bold text-foreground mb-1">NFL Films' "The Football Town"</p>
            <p className="text-sm text-muted mb-2">
              A special NFL Films presentation narrated by Pittsburgh-area native Pat McAfee about the region's football heritage. Shown in a first-of-its-kind immersive large-screen format at the Rangos Giant Cinema inside the <a href="https://kaminsciencecenter.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Kamins Science Center</a> on the North Shore. Free with draft entry.
            </p>
            <ul className="text-sm text-muted space-y-1">
              <li><strong>Thu &amp; Fri:</strong> 1:00, 2:30, 4:00, 5:30 PM</li>
              <li><strong>Saturday:</strong> 10:00, 11:30 AM, 1:00, 2:30 PM</li>
            </ul>
          </div>

          <div className="border-l-2 border-accent pl-5 mb-4">
            <p className="font-bold text-foreground mb-1">Hours &amp; Admission</p>
            <ul className="text-sm text-muted space-y-1">
              <li>
                <strong>Thursday &amp; Friday:</strong> 12:00 PM to 10:00 PM
              </li>
              <li>
                <strong>Saturday:</strong> 9:00 AM to 6:00 PM
              </li>
              <li>
                <strong>Cost:</strong> Free. Register for a free <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">NFL OnePass</a>
                (download the app ahead of time).
              </li>
              <li>
                <strong>Cash-free event.</strong> No cash accepted anywhere. Credit cards only. American Express is the NFL's official payments partner.
              </li>
              <li>
                <strong>Water bottles:</strong> You can bring an empty, reusable water bottle and fill it at free water refill stations inside the event.
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
        <section className="mb-14">
          <h2 id="concerts" className="text-2xl font-heading mb-4">
            Concerts &amp; Entertainment
          </h2>
          <p className="text-muted mb-3">
            The NFL Draft Entertainment Series is FREE at the Draft Theater
            (next to Acrisure Stadium). Just announced: <strong>Wiz Khalifa</strong> and <strong>Bret Michaels</strong> perform Friday, and <strong>Kane Brown</strong> headlines Saturday after the final picks. Register through <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">NFL OnePass</a> for free entry. First-come, first-served standing room. Separately, The
            Plaza at North Shore is hosting three ticketed concerts with major
            artists. These are paid events at a private venue, not part of the
            free draft experience. Tickets at{" "}
            <a href="https://gofevo.com/group/ThePlazaAtNorthShore" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">gofevo.com</a>.
          </p>

          <div className="space-y-3 mb-4">
            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold">NFL Draft Entertainment Series (FREE)</p>
              <p className="text-sm text-muted mb-2">
                Presented by Bud Light. All free with OnePass registration.
              </p>
              <ul className="text-sm text-muted space-y-1 list-disc pl-5">
                <li><strong>Thursday, April 23:</strong> KELS sings the national anthem. Heritage Gospel Chorale of Pittsburgh performs.</li>
                <li><strong>Friday, April 24:</strong> Wiz Khalifa and Bret Michaels at the Draft Theater after the picks.</li>
                <li><strong>Saturday, April 25:</strong> Kane Brown headlines after the final picks wrap up.</li>
              </ul>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold">Drone Show (After Day 2)</p>
              <p className="text-sm text-muted">
                A massive drone light show over the rivers after the Friday
                night session. Free to watch from anywhere with a view of the
                North Shore. The Mt. Washington overlooks and Roberto Clemente
                Bridge are prime viewing spots.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold">
                Jason Aldean at Rivers Casino (April 22)
              </p>
              <p className="text-sm text-muted">
                The night before Round 1. Aldean's also got a restaurant on the
                North Shore (Jason Aldean's Kitchen + Bar) that'll be packed
                all weekend. Rivers Casino is offering concert + hotel packages.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold">
                The Plaza at North Shore Concerts (Ticketed)
              </p>
              <p className="text-sm text-muted">
                The Plaza at North Shore is hosting three ticketed concerts
                during draft week. Nelly on Wednesday April 22 at 6 PM
                (Official Draft Opening Party), Steve Aoki on Thursday April 23
                at 12 PM (The Ultimate Tailgate Party), and 2 Chainz on Saturday
                April 25 at 6 PM (Official Draft Closing Party). These are
                separate paid events, not part of the free draft. Tickets at{" "}
                <a href="https://gofevo.com/group/ThePlazaAtNorthShore" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">gofevo.com</a>.
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
        <section className="mb-14">
          <h2 id="5k-race" className="text-2xl font-heading mb-4"><a href="https://p3r.org/races/picksburgh-draft-day-5k" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">PicksBURGH 5K</a></h2>
          <p className="text-muted mb-3">
            <a href="https://p3r.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">P3R</a> (the organization behind the Pittsburgh Marathon) is running a
            5K race on Saturday morning of draft weekend. It's called the
            PicksBURGH 5K and the route goes through some of Pittsburgh's most
            scenic areas near the draft venues.
          </p>
          <div className="card-minimal p-4 mb-3">
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
        <section className="mb-14">
          <h2 id="taste-of-draft" className="text-2xl font-heading mb-4">
            Taste of the Draft (April 22)
          </h2>
          <p className="text-muted mb-3">
            This is the premium food event of draft week. Held at Tower at PNC
            Plaza the night before Round 1, Taste of the Draft features 20+
            restaurants and is a charity event benefiting GENYOUth (which fights
            student hunger).
          </p>
          <div className="card-minimal p-4 mb-3">
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
        <section className="mb-14">
          <h2 id="attractions" className="text-2xl font-heading mb-4">
            Pittsburgh Attractions Worth Visiting
          </h2>
          <p className="text-muted mb-4">
            Between draft sessions, you've got hours to fill. Pittsburgh's got
            more to do than most visitors expect. Here are the highlights, all
            within a short ride (or walk) from the draft venues.
          </p>

          <div className="rounded-lg overflow-hidden mb-8">
            <iframe
              src="https://www.youtube.com/embed/TYmRger4pSg"
              width="100%"
              height="350"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="Amazing Duquesne Incline Ride - Built in 1877 - Pittsburgh, PA"
            />
          </div>

          <div className="space-y-3">
            <div className="card-minimal p-4">
              <p className="font-bold">
                <a href="https://www.duquesneincline.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Duquesne Incline</a> &amp; <a href="https://monongahelaincline.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Monongahela Incline</a>
              </p>
              <p className="text-sm text-muted">
                Two historic cable cars that take you up Mt. Washington for the
                best views in the entire city. USA Today named it the best
                overlook in America. $6 round trip. The Duquesne Incline is
                the more popular one, but both are worth it. Go at sunset if
                you can.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold"><a href="https://kaminsciencecenter.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Carnegie Science Center</a></p>
              <p className="text-sm text-muted">
                Right on the North Shore, walking distance from the draft
                venues. Great for families. Planetarium, interactive exhibits,
                and a submarine you can tour. You can easily fit this in
                between draft sessions.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold"><a href="https://www.warhol.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Andy Warhol Museum</a></p>
              <p className="text-sm text-muted">
                The world's largest collection of Warhol's art, right on the
                North Shore. Seven floors of pop art from Pittsburgh's most
                famous artist. Walking distance from both draft venues.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold"><a href="https://www.phipps.conservatory.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Phipps Conservatory</a></p>
              <p className="text-sm text-muted">
                A stunning botanical garden in Oakland (about 15 minutes from
                downtown by car or bus). Beautiful glass greenhouses, seasonal
                flower shows. One of the most beautiful buildings in
                Pittsburgh.
              </p>
            </div>

            <div className="border-l-2 border-accent pl-5">
              <p className="font-bold text-foreground">
                <a href="https://www.aviary.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">National Aviary</a> (CLOSED Thu-Fri)
              </p>
              <p className="text-sm text-muted">
                America's only independent indoor aviary with 700+ birds.
                Normally a must-visit, but it's{" "}
                <strong>closed Thursday and Friday</strong> during draft week
                because of the event footprint. Open Saturday and other days.
                Plan accordingly.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold">Steelers Hall of Honor Museum</p>
              <p className="text-sm text-muted">
                Inside Acrisure Stadium. If you're a Steelers fan (or any
                football fan, honestly), this is a no-brainer since you're
                already right there for the draft.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold">Roberto Clemente Bridge Walk</p>
              <p className="text-sm text-muted">
                The yellow bridge that connects the North Shore (Acrisure
                Stadium) to downtown (Point State Park). It's pedestrian-only
                during draft weekend, so you'll probably walk it multiple
                times. Enjoy the river views. It connects the two main draft
                venues.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold"><a href="https://randyland.club/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Randyland</a></p>
              <p className="text-sm text-muted">
                A free, wildly colorful public art installation on the North
                Side. Covered in murals, sculptures, and random art
                everywhere. Great for photos. Totally free, totally unique. You
                won't see anything like it anywhere else.
              </p>
            </div>

            <div className="card-minimal p-4">
              <p className="font-bold"><a href="https://www.tour.pitt.edu/tour/cathedral-learning" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Cathedral of Learning</a></p>
              <p className="text-sm text-muted">
                A 42-story Gothic tower on the University of Pittsburgh campus
                in Oakland. Free to walk into the lobby. The Nationality Rooms
                on the first and third floors are incredible. About 15
                minutes from downtown.
              </p>
            </div>

            <div className="card-minimal p-4">
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
        <section className="mb-14">
          <h2 id="family-friendly" className="text-2xl font-heading mb-4">
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
              <a href="https://www.kennywood.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Kennywood</a> (Pittsburgh's beloved amusement park)
              opens for the season the same weekend. It's about 12 miles
              southeast of downtown. Perfect for a half-day if the kids need a
              break from football.
            </li>
            <li>
              <a href="https://kaminsciencecenter.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Carnegie Science Center</a> is right on the North
              Shore, steps from the draft. Interactive science exhibits, a
              planetarium, and a real submarine. Half-day easy.
            </li>
            <li>
              <a href="https://pittsburghkids.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Children's Museum of Pittsburgh</a> is on the North
              Side. Interactive exhibits designed specifically for younger kids.
              Check their website for draft weekend hours.
            </li>
            <li>
              <a href="https://www.pittsburghzoo.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Pittsburgh Zoo &amp; Aquarium</a> is about 7 miles
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
        <section className="mb-14">
          <h2 id="non-football" className="text-2xl font-heading mb-4">
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
              Ride the <a href="https://www.duquesneincline.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Duquesne Incline</a> to Mt. Washington for
              skyline views and dinner at <a href="https://altiuspgh.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Altius</a> or Monterey Bay Fish Grotto
            </li>
            <li>
              Spend a morning in the <strong>Strip District</strong> eating your
              way through bakeries, cheese shops, and food halls (The PA Market
              is a newer standout)
            </li>
            <li>
              Visit the <a href="https://www.warhol.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Andy Warhol Museum</a> and the{" "}
              <a href="https://mattress.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Mattress Factory</a> (immersive installation art) on
              the North Side
            </li>
            <li>
              Do a <strong>brewery crawl</strong> in Lawrenceville. <a href="https://churchbrew.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Church Brew
              Works</a> (a brewery inside a converted church) is the headliner, but
              there are 8+ breweries within walking distance
            </li>
            <li>
              Walk through <a href="https://www.phipps.conservatory.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Phipps Conservatory</a> in Oakland, then
              check out the <a href="https://www.tour.pitt.edu/tour/cathedral-learning" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Cathedral of Learning</a> across the street
            </li>
            <li>
              Book a <a href="https://www.gatewayclipper.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Gateway Clipper</a> river cruise for views from
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
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-6">
            Things to Do FAQ
          </h2>
          <div className="space-y-4">
            {thingsToDoFAQs.map((faq) => (
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

        {/* Quick links */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Plan the Rest of Your Weekend
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/schedule"
              className="card-minimal p-4 hover:shadow-md transition-all"
            >
              <p className="font-bold mb-1">Draft Schedule</p>
              <p className="text-sm text-muted">
                Round-by-round times and what happens each day.
              </p>
            </Link>
            <Link
              href="/bars-restaurants"
              className="card-minimal p-4 hover:shadow-md transition-all"
            >
              <p className="font-bold mb-1">Bars &amp; Restaurants</p>
              <p className="text-sm text-muted">
                Where to eat and drink near the draft venues.
              </p>
            </Link>
            <Link
              href="/itinerary"
              className="card-minimal p-4 hover:shadow-md transition-all"
            >
              <p className="font-bold mb-1">Day-by-Day Itinerary</p>
              <p className="text-sm text-muted">
                How to plan each day for the best experience.
              </p>
            </Link>
            <Link
              href="/neighborhoods"
              className="card-minimal p-4 hover:shadow-md transition-all"
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
          <h2 className="text-lg font-heading mb-2">
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

      <RelatedPages current="things_to_do" slugs={["neighborhoods", "food", "schedule", "getting_around"]} />
    </>
  );
}
