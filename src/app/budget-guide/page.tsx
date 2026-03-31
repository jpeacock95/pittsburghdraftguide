import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh on a Budget 2026",
  description:
    "How to do the 2026 NFL Draft in Pittsburgh without going broke. Free entry, cheap hotels, budget restaurants, and money-saving transit tips.",
};

const budgetFAQs = [
  {
    question: "Can I do the NFL Draft for free?",
    answer:
      "Yes. Entry to the Draft Experience at Point State Park is completely free. The concerts are free. The drone show is free. You just need a OnePass (also free) to get in. The only costs are getting there, eating, and sleeping somewhere.",
  },
  {
    question: "What's the cheapest hotel option for the NFL Draft in Pittsburgh?",
    answer:
      "McKnight Road in Ross Township has budget hotels starting around $80-130/night during draft weekend. Cranberry Township runs $120-180/night. Both are 20-30 minutes from downtown by car or bus. Avoid downtown hotels where rates hit $500-2,000/night.",
  },
  {
    question: "Is it worth paying for VIP at the NFL Draft?",
    answer:
      "For most people, no. The free Draft Experience has everything: mock drafts, player appearances, interactive games, concerts, and the main stage viewing. VIP packages exist but the core experience is already free. Save that money for food and transit.",
  },
  {
    question: "How much should I budget for food at the NFL Draft?",
    answer:
      "Plan for $30-50 per person per day. Food trucks near the venues run $8-15 per item. Primanti Bros is about $12 for a sandwich. Pizza by the slice is $3-5. The biggest money trap is $12-15 beers at the event. Bring a water bottle and snacks to cut costs.",
  },
];

export default function BudgetGuide() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Budget Guide", href: "/budget-guide" },
        ]}
      />
      <FAQSchema items={budgetFAQs} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Budget Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            NFL Draft Pittsburgh on a Budget 2026
          </h1>
          <p className="text-gray-300">
            You don't need $2,000 to have an amazing draft weekend. Here's
            how to do the whole thing for around $500.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <LastUpdated date="March 31, 2026" />

        {/* The Good News */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            The Good News: The Draft Is Free
          </h2>
          <p className="text-muted mb-3">
            Let's start with the best part. Entry to the NFL Draft is
            completely free. The Draft Experience at Point State Park? Free.
            The concerts? Free. The drone show over the rivers? Free. The
            main stage at Acrisure Stadium where they announce the picks?
            Free.
          </p>
          <p className="text-muted mb-3">
            All you need is a{" "}
            <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">OnePass</a> (the NFL's free digital pass) to get
            through the gates. Download it before you come. That's it. No
            tickets to buy. No wristbands. No entry fees.
          </p>
          <p className="text-muted">
            You can literally walk in, watch the picks on a massive screen,
            catch a free concert, see the drone show, and walk out without
            spending a dime on the event itself. The NFL wants butts in
            seats. They're not charging for them.
          </p>
        </section>

        {/* Where the Money Goes */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Where the Money Actually Goes
          </h2>
          <p className="text-muted mb-3">
            If the draft is free, why are people on Reddit talking about
            spending $2,000+ for the weekend? Three things:
          </p>
          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <p className="font-semibold text-foreground">
                1. Lodging (the killer)
              </p>
              <p className="text-sm text-muted">
                Downtown hotel suites are going for over $2,000/night.
                Regular rooms are $500-700/night. Even suburban hotels have
                jacked up rates. Airbnb hosts are charging $1,500-2,000/night.
                Hotels are drip-feeding inventory, holding rooms back to
                release at higher prices later.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-foreground">
                2. Transportation
              </p>
              <p className="text-sm text-muted">
                Downtown parking garages are expected to hit $100+ per day.
                North Shore lots are mostly closed for stage construction.
                Uber surge pricing could mean $80 rides from the suburbs.
                This adds up fast if you don't have a plan.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold text-foreground">3. Food and drinks</p>
              <p className="text-sm text-muted">
                $15 beers at the event. $18 cocktails at North Shore bars.
                Sit-down restaurants charging draft weekend premiums. Three
                days of eating out adds up to $200-300 before you even think
                about it.
              </p>
            </div>
          </div>
          <p className="text-muted">
            The good news? Every single one of these has a budget-friendly
            alternative. That's what this guide is for.
          </p>
        </section>

        {/* Budget Hotels */}
        <section className="mb-14">
          <h2 id="budget-hotels" className="text-2xl font-heading mb-4">
            Budget Hotels: $80-180/Night
          </h2>
          <p className="text-muted mb-4">
            Skip downtown. Seriously. You'll save $400-500/night by staying
            in the suburbs and taking transit in. Here are your best bets:
          </p>

          <h3 className="text-lg font-heading mt-6 mb-2">
            McKnight Road, Ross Township ($80-130/night)
          </h3>
          <p className="text-sm text-muted mb-4">
            The cheapest option near the city. Budget chains like Red Roof
            Inn, Motel 6, and Super 8 line McKnight Road. It's not glamorous
            but it's clean, it's close, and it's a fraction of downtown
            prices. About 20 minutes to the draft by bus from the Ross Park
            &amp; Ride.
          </p>

          <h3 className="text-lg font-heading mt-6 mb-2">
            Cranberry Township ($120-180/night)
          </h3>
          <p className="text-sm text-muted mb-4">
            A step up from McKnight Road. Hampton Inn, Hilton Garden Inn, and
            Residence Inn are all out here. Newer hotels, more restaurants
            nearby, and Cranberry has its own shopping and dining if you want
            a break from the draft. About 25-30 minutes to downtown.
          </p>

          <h3 className="text-lg font-heading mt-6 mb-2">
            Robinson / Airport Area ($100-150/night)
          </h3>
          <p className="text-sm text-muted mb-4">
            Good option if you're flying in. Plenty of chain hotels near the
            airport with shuttle service. Take the 28X bus from the airport
            to downtown for cheap. Robinson also has tons of restaurants and
            shopping.
          </p>

          <h3 className="text-lg font-heading mt-6 mb-2">
            Along the T Line ($120-250/night)
          </h3>
          <p className="text-sm text-muted mb-4">
            Hotels near South Hills Village or Dormont T stations let you
            ride the light rail straight to both draft venues. The T runs
            through a free fare zone downtown. No parking, no Uber, no
            stress.
          </p>

          <p className="text-sm text-muted">
            <Link
              href="/where-to-stay"
              className="text-primary font-semibold hover:underline"
            >
              Full hotel guide with prices and availability &rarr;
            </Link>
          </p>
          <p className="text-sm text-muted mt-1">
            <Link
              href="/cranberry-township"
              className="text-primary font-semibold hover:underline"
            >
              Cranberry Township visitor guide &rarr;
            </Link>
          </p>
        </section>

        {/* Skip Parking */}
        <section className="mb-14">
          <h2 id="skip-parking" className="text-2xl font-heading mb-4">
            Skip Parking, Save $100+
          </h2>
          <p className="text-muted mb-3">
            This is the single biggest money saver. Don't drive downtown.
            Don't do it. Parking will cost $50-100+ per day, and half the
            lots are closed anyway. Here's what to do instead:
          </p>
          <ul className="space-y-3 text-muted list-disc pl-5 mb-4">
            <li>
              <strong>Park-and-ride lots are free.</strong> Park at Ross Park
              &amp; Ride (from the north), South Hills Village (from the
              south), or Wilkinsburg (from the east). Free parking. Grab the
              bus or T downtown.
            </li>
            <li>
              <strong>Football Flyer buses.</strong> PRT is running special
              draft weekend bus routes from park-and-ride locations in every
              direction. Cheap, direct, no navigation headaches.
            </li>
            <li>
              <strong>The T light rail has a free fare zone.</strong> Rides
              between downtown and the North Shore (the two draft venues) are
              free. You can bounce between Acrisure Stadium and Point State
              Park all day without paying a cent.
            </li>
            <li>
              <strong>If someone in your group drives anyway,</strong> drop
              everyone off, park in South Side or Lawrenceville where street
              parking is free, and walk or bus the rest of the way. You'll
              save $50-100 vs. a downtown garage.
            </li>
          </ul>
          <p className="text-sm text-muted">
            <Link
              href="/parking-transportation"
              className="text-primary font-semibold hover:underline"
            >
              Full parking and transit guide with routes and maps &rarr;
            </Link>
          </p>
        </section>

        {/* Budget Eats */}
        <section className="mb-14">
          <h2 id="budget-eats" className="text-2xl font-heading mb-4">
            Budget Eats Under $15
          </h2>
          <p className="text-muted mb-3">
            You don't need to eat at a steakhouse every meal. Pittsburgh has
            plenty of cheap, good food near the draft venues. Here's where
            to look:
          </p>
          <div className="space-y-3 mb-4">
            <div className="card-minimal p-4">
              <p className="font-semibold">Food trucks near the venues</p>
              <p className="text-sm text-muted">
                Expect dozens of food trucks lining the draft footprint.
                Most items run $8-15. Look for the ones with the longest
                lines. That's usually where the best food is.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">
                The PA Market (Strip District)
              </p>
              <p className="text-sm text-muted">
                European-inspired food hall about a 10-15 minute walk from
                Point State Park. Two floors of food vendors, cocktail bars,
                and a wine garden. Multiple price points so you can eat
                cheap or splurge on one meal.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">Primanti Bros (~$12)</p>
              <p className="text-sm text-muted">
                The iconic Pittsburgh sandwich with fries and coleslaw
                piled on top. It's a Pittsburgh rite of passage and it's
                under $12. There's one in Market Square, a short walk from
                Point State Park.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">Pizza by the slice ($3-5)</p>
              <p className="text-sm text-muted">
                Pizzaiolo Primo downtown and several spots in the Strip
                District sell slices for $3-5. Two slices and a drink for
                under $15. That's a meal.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">
                Condado Tacos (Market Square, ~$10-14)
              </p>
              <p className="text-sm text-muted">
                Build-your-own tacos near Point State Park. Fills you up
                without emptying your wallet. Good for groups.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">Convenience stores for water and snacks</p>
              <p className="text-sm text-muted">
                Grab a case of water and some granola bars before you head
                downtown. A bottle of water at the event could cost $5-6.
                One from a gas station costs $1. Do the math.
              </p>
            </div>
          </div>
          <p className="text-muted font-semibold">
            Pro tip: Don't buy $12-15 beers at the event. Pre-game at your
            hotel or hit a happy hour at Federal Galley on the North Side
            (half off drafts and cocktails, Tue-Fri 4:30-6:30pm).
          </p>
        </section>

        {/* Free Things */}
        <section className="mb-14">
          <h2 id="free-things" className="text-2xl font-heading mb-4">
            Free Things to Do
          </h2>
          <p className="text-muted mb-4">
            Here's the part nobody talks about: you can fill an entire
            weekend with free stuff and never feel like you're missing out.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-2 sm:p-3 font-semibold">Activity</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">Cost</th>
                  <th className="text-left p-2 sm:p-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Draft Experience</td>
                  <td className="p-2 sm:p-3 text-accent font-semibold">Free</td>
                  <td className="p-2 sm:p-3 text-muted">
                    The entire fan zone at Point State Park. Interactive
                    games, mock drafts, player appearances, photo ops.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Concerts</td>
                  <td className="p-2 sm:p-3 text-accent font-semibold">Free</td>
                  <td className="p-2 sm:p-3 text-muted">
                    Live music on the main stage all three days. Past drafts
                    have had major artists.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Drone Show</td>
                  <td className="p-2 sm:p-3 text-accent font-semibold">Free</td>
                  <td className="p-2 sm:p-3 text-muted">
                    Over the rivers at night. Visible from the North Shore,
                    Point State Park, and Mt. Washington.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">PicksBURGH 5K</td>
                  <td className="p-2 sm:p-3">$TBD</td>
                  <td className="p-2 sm:p-3 text-muted">
                    A themed 5K run through the draft footprint. Registration
                    fee TBD.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Riverwalk</td>
                  <td className="p-2 sm:p-3 text-accent font-semibold">Free</td>
                  <td className="p-2 sm:p-3 text-muted">
                    Walk along the Three Rivers Heritage Trail. Connects
                    North Shore to Point State Park.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Roberto Clemente Bridge</td>
                  <td className="p-2 sm:p-3 text-accent font-semibold">Free</td>
                  <td className="p-2 sm:p-3 text-muted">
                    Closed to cars during the draft. Walk across the iconic
                    yellow bridge connecting the two venue areas.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2 sm:p-3 font-semibold">Mt. Washington Views</td>
                  <td className="p-2 sm:p-3">$6 (Incline)</td>
                  <td className="p-2 sm:p-3 text-muted">
                    Take the <a href="https://www.duquesneincline.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Duquesne Incline</a> for the best skyline views in
                    America. The overlook at the top is free once you're up
                    there.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* The $400 Draft Weekend */}
        <section className="mb-14">
          <h2 id="sample-budget" className="text-2xl font-heading mb-4">
            The $500 Draft Weekend (Sample Budget)
          </h2>
          <p className="text-muted mb-4">
            Here's proof you can do the entire 3-day weekend without
            breaking the bank. This is a real budget for one person:
          </p>

          <div className="border-l-2 border-accent pl-5 mb-6">
            <h3 className="text-lg font-bold text-foreground mb-3">
              The Budget Approach
            </h3>
            <div className="space-y-2 text-muted">
              <div className="flex justify-between">
                <span>Hotel (Cranberry or McKnight Rd)</span>
                <span className="font-semibold">
                  $130/night x 3 = $390
                </span>
              </div>
              <div className="flex justify-between">
                <span>Transit (park-and-ride + Football Flyer)</span>
                <span className="font-semibold">$0-25</span>
              </div>
              <div className="flex justify-between">
                <span>Food ($30-50/day x 3 days)</span>
                <span className="font-semibold">$90-150</span>
              </div>
              <div className="flex justify-between">
                <span>Incline ride</span>
                <span className="font-semibold">$6</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2 mt-2">
                <span className="font-bold">Total</span>
                <span className="font-bold text-lg">~$500-565</span>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-accent pl-5 mb-4">
            <h3 className="text-lg font-bold text-foreground mb-3">
              The "I Didn't Plan" Approach
            </h3>
            <div className="space-y-2 text-muted">
              <div className="flex justify-between">
                <span>Downtown hotel</span>
                <span className="font-semibold">
                  $700/night x 3 = $2,100
                </span>
              </div>
              <div className="flex justify-between">
                <span>Downtown parking (per day)</span>
                <span className="font-semibold">$100/day x 3 = $300</span>
              </div>
              <div className="flex justify-between">
                <span>Restaurants and event drinks</span>
                <span className="font-semibold">$75-100/day x 3 = $225-300</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2 mt-2">
                <span className="font-bold">Total</span>
                <span className="font-bold text-lg">$2,600+</span>
              </div>
            </div>
          </div>

          <p className="text-muted">
            Same event. Same concerts. Same drone show. Same picks. One
            costs $500. The other costs $2,600. The only difference is
            where you sleep and how you get there.
          </p>
        </section>

        {/* Money-Saving Tips */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Money-Saving Tips
          </h2>
          <p className="text-muted mb-3">
            Little things that'll save you $50-100 over the weekend:
          </p>
          <ul className="space-y-3 text-muted list-disc pl-5">
            <li>
              <strong>Bring a refillable water bottle.</strong> Water at
              events is $5-6 a bottle. Bring your own and refill at water
              fountains. Pittsburgh tap water is fine.
            </li>
            <li>
              <strong>Pack snacks.</strong> Granola bars, trail mix, beef
              jerky. Toss them in your clear bag. You'll thank yourself at
              3pm when the food truck line is 45 minutes long.
            </li>
            <li>
              <strong>Buy a clear bag on Amazon for $8.</strong> The NFL
              requires clear bags at draft venues. You can get one on
              Amazon for $8. Don't wait and pay $25 for one at the event.
            </li>
            <li>
              <strong>Download OnePass at your hotel on WiFi.</strong> Don't
              burn through your data trying to download a big app in a crowd
              of 200,000 people. Get it set up the night before.
            </li>
            <li>
              <strong>Charge your phone overnight.</strong> Bring a portable
              charger too. You'll be using your phone all day for maps,
              OnePass, photos, and checking the schedule. A dead phone at
              the draft is miserable.
            </li>
            <li>
              <strong>Share Uber costs with your group.</strong> If you do
              rideshare, pack the car. An $80 Uber split 4 ways is $20
              each. That's reasonable. Alone? That's painful.
            </li>
            <li>
              <strong>Eat a big breakfast at the hotel.</strong> Most
              suburban hotels include free breakfast. Load up. That's one
              less meal you're buying downtown at inflated prices.
            </li>
            <li>
              <strong>Pre-game drinks at the hotel.</strong> A 6-pack from
              a gas station costs $10. That's less than one beer at the
              event.
            </li>
          </ul>
        </section>

        {/* FAQ section */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-6">
            Budget FAQ
          </h2>
          <div className="space-y-4">
            {budgetFAQs.map((faq) => (
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
            Plan the rest of your weekend
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Got the budget figured out? Now plan where to stay, how to get
            there, and where to eat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/where-to-stay"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Where to Stay
            </Link>
            <Link
              href="/parking-transportation"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Parking &amp; Transit
            </Link>
            <Link
              href="/bars-restaurants"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Bars &amp; Restaurants
            </Link>
          </div>
        </section>
      </article>

      <RelatedPages current="budget" slugs={["parking", "hotels", "food", "cranberry"]} />
    </>
  );
}
