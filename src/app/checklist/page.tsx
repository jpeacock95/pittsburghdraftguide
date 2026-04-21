import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft Packing & Prep Checklist",
  description:
    "Your printable checklist for the 2026 NFL Draft in Pittsburgh. What to pack, apps to download, transit plans, day-of essentials, and items to leave home.",
};

export default function ChecklistPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Draft Weekend Checklist", href: "/checklist" },
        ]}
      />

      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Draft Weekend Checklist
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            Your Draft Weekend Checklist
          </h1>
          <p className="text-gray-300">
            Everything you need to pack, download, and plan before April 23.
            Bookmark this page and come back to it the night before you leave.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <LastUpdated date="April 21, 2026" />

        {/* Weather note */}
        <div className="card-minimal p-4 mb-8 border-l-4 border-amber-400">
          <p className="text-sm text-muted">
            <strong className="text-foreground">Weather update (Apr 21):</strong> Current forecast for draft weekend:
          </p>
          <ul className="text-sm text-muted mt-2 space-y-1 list-disc pl-5">
            <li><strong className="text-foreground">Thursday (Apr 23):</strong> Clear, low 70s dropping to upper 60s, no rain expected.</li>
            <li><strong className="text-foreground">Friday (Apr 24):</strong> Low 70s, slight chance of evening showers.</li>
            <li><strong className="text-foreground">Saturday (Apr 25):</strong> Rain likely, possible thunder. Pack a poncho.</li>
          </ul>
          <p className="text-sm text-muted mt-2">
            Umbrellas are banned at the draft. Bring a rain poncho or packable rain jacket instead. Check the{" "}
            <a href="https://forecast.weather.gov/MapClick.php?CityName=Pittsburgh&state=PA" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">latest forecast</a>{" "}
            before you head out each day. Read our{" "}
            <Link href="/blog/nfl-draft-pittsburgh-rain-plan" className="text-primary underline font-semibold">full rain plan</Link> for Saturday strategy.
          </p>
        </div>

        {/* Before you go */}
        <section className="mb-14">
          <h2 id="before-you-leave" className="text-2xl font-heading mb-4">Before You Leave Home</h2>
          <div className="space-y-3">
            <CheckItem>Download the <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">NFL OnePass app</a> and register (required for free entry)</CheckItem>
            <CheckItem text="Book your hotel if you haven't already (prices are only going up)" />
            <CheckItem>Pre-book parking on <a href="https://spothero.com/city/pittsburgh-parking" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">SpotHero</a> if you're driving (or skip parking entirely. ALL T rides are free April 23-25 thanks to Sheetz)</CheckItem>
            <CheckItem text="Download the Ready2Ride app if you want the $25 Draft Pass (7 days unlimited PRT rides including buses)" />
            <CheckItem>Download the <a href="https://transitapp.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Transit app</a> for real-time PRT bus and T arrival times (works better than Google Maps for Pittsburgh transit)</CheckItem>
            <CheckItem text="Check the road closure map. Several bridges and I-279 exits are closed" />
            <CheckItem text="Charge your portable battery pack (you'll need it)" />
            <CheckItem text="Check the weather forecast for Pittsburgh April 23-25" />
            <CheckItem text="Screenshot or save the park-and-ride directions for your approach" />
            <CheckItem text="Make dinner reservations if you want a sit-down meal (everywhere will be packed)" />
          </div>
        </section>

        {/* Packing list */}
        <section className="mb-14">
          <h2 id="what-to-pack" className="text-2xl font-heading mb-4">What to Pack</h2>

          <h3 className="text-lg font-heading mt-6 mb-3">Must-Haves</h3>
          <div className="space-y-3">
            {/* TODO: Replace Amazon links with affiliate links once Associate tag is received */}
            <CheckItem>
              <a href="https://www.amazon.com/s?k=clear+stadium+bag+12x6x12" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Clear bag</a> (12x6x12 max for Acrisure Stadium, 16x16x6 for Point State Park). Buy one on Amazon for $8, don't pay $25 at the event
            </CheckItem>
            <CheckItem>
              <a href="https://www.amazon.com/s?k=portable+phone+charger+10000mah" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Portable phone charger</a> (10,000mAh minimum). This is Reddit's #1 tip. With 500K people on temporary cell towers, your phone works overtime searching for signal, draining 2-3x faster than normal. Add OnePass running constantly, photos, maps, and rideshare apps. You WILL hit 0% without a backup battery. Bring two if you can.
            </CheckItem>
            <CheckItem text="Comfortable walking shoes. You'll walk 5-10 miles per day between venues" />
            <CheckItem text="Layers. April in Pittsburgh can be 45 or 75 degrees. Seriously. Pack for both." />
            <CheckItem>
              <a href="https://www.amazon.com/s?k=packable+rain+jacket" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Rain jacket or poncho</a>. It's an outdoor event and April showers are real
            </CheckItem>
            <CheckItem>Your phone with <a href="https://www.nfl.com/apps/one-pass/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">OnePass</a> installed and your account set up</CheckItem>
          </div>

          <h3 className="text-lg font-heading mt-6 mb-3">Smart Additions</h3>
          <div className="space-y-3">
            <CheckItem>
              <a href="https://www.amazon.com/s?k=sport+sunscreen+spf+50" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Sunscreen</a>. If it's a clear day, you're outside for hours
            </CheckItem>
            <CheckItem text="Sunglasses and a hat" />
            <CheckItem>
              <a href="https://www.amazon.com/s?k=collapsible+water+bottle" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Water bottle</a> (refill stations will be available)
            </CheckItem>
            <CheckItem text="Snacks. Food lines will be long and $15 beers add up" />
            <CheckItem text="Credit card. The entire Draft Experience is cashless. No cash accepted anywhere inside the event." />
            <CheckItem text="Your team's jersey or gear (this is a football event, rep your team)" />
            <CheckItem text="Rain poncho or light rain jacket. Umbrellas are banned by the NFL." />
          </div>

          <h3 className="text-lg font-heading mt-6 mb-3">Leave at Home</h3>
          <div className="space-y-3">
            <CheckItem
              text="Large bags, backpacks, or purses (won't pass security)"
              isNo
            />
            <CheckItem text="Coolers, outside food/drinks into the event areas" isNo />
            <CheckItem text="Chairs, blankets, tents" isNo />
            <CheckItem text="Cigarettes/e-cigarettes (entire campus is smoke-free)" isNo />
            <CheckItem text="Drones" isNo />
            <CheckItem text="Weapons of any kind" isNo />
          </div>
        </section>

        {/* Bag Policy */}
        <section className="mb-14">
          <h2 id="bag-policy" className="text-2xl font-heading mb-4">Bag Policy</h2>
          <p className="text-muted mb-4">
            The two draft venues have <strong>different bag rules</strong>. Read
            this so you don't get turned away at the gate.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 mb-4">
            <div className="card-minimal p-5">
              <p className="font-bold mb-2">Draft Theater (North Shore)</p>
              <ul className="text-sm text-muted space-y-1 list-disc pl-5">
                <li>Clear bags only, max <strong>12" x 12" x 6"</strong></li>
                <li>Small clutch purses (4.5" x 6.5") are OK</li>
                <li>No professional cameras</li>
                <li>No backpacks or non-clear bags</li>
              </ul>
            </div>
            <div className="card-minimal p-5">
              <p className="font-bold mb-2">Draft Experience (Point State Park)</p>
              <ul className="text-sm text-muted space-y-1 list-disc pl-5">
                <li>Clear bags only, max <strong>16" x 16" x 6"</strong></li>
                <li>Small clutch purses (4.5" x 6.5") are OK</li>
                <li>No professional cameras</li>
                <li>No backpacks or non-clear bags</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted">
            <strong>Pro tip:</strong> If you're going to both venues (and you
            probably are), size your bag for the stricter Stadium policy. A
            12x12x6 clear bag works at both locations.
          </p>
        </section>

        {/* OnePass Registration */}
        <section className="border-l-2 border-accent pl-5 mb-14">
          <h2 className="text-xl font-heading mb-2">Register for OnePass Now</h2>
          <p className="text-muted mb-3">
            OnePass registration is required for free entry. Don't wait until
            you're in line. Register now at{" "}
            <a href="https://www.nfl.com/draft/access" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">NFL.com/DraftAccess</a>{" "}
            or download the NFL OnePass app from the App Store or Google Play.
            Create your account, register for the event, and you're set.
          </p>
          <p className="text-sm text-muted">
            <strong>Why this matters:</strong> The app drains your battery fast with 500,000 people on the same cell towers. Get it set up at home on Wi-Fi, not standing in a crowd with 3% battery.
          </p>
        </section>

        {/* Day-of checklist */}
        <section className="mb-14">
          <h2 id="day-of" className="text-2xl font-heading mb-4">Day-Of Checklist</h2>
          <div className="space-y-3">
            <CheckItem text="Phone charged to 100%" />
            <CheckItem text="Portable charger fully charged" />
            <CheckItem text="OnePass app open and working" />
            <CheckItem text="Clear bag packed with essentials" />
            <CheckItem text="Check weather one more time. Adjust layers" />
            <CheckItem text="Eat a real meal before you go (food at the event is expensive and lines are long)" />
            <CheckItem text="Know your parking/transit plan (don't wing it). Remember ALL T rides are FREE" />
            <CheckItem text="Screenshot your return transit route. Cell signal will be weak with 200K people around you" />
            <CheckItem text="Watch out for scams. BBB warns about fake tickets, counterfeit merchandise, and rental fraud. The draft is FREE. If someone is selling tickets, it's a scam." />
            <CheckItem text="Tell someone where you're going and when you expect to be back" />
          </div>
        </section>

        {/* Key times */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">Key Times to Remember</h2>
          <div className="space-y-3">
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">Wednesday, April 22</p>
                  <p className="text-sm text-muted">Opening Night | <Link href="/blog/picksburgh-music-crawl" className="text-primary hover:underline">PicksBURGH Music Crawl</Link> (13 venues, 4:45 PM) | Nelly at The Plaza ($43, 6 PM) | Market Square Grand Reopening</p>
                </div>
                <span className="text-xs bg-accent text-foreground px-2 py-1 rounded font-semibold">
                  Pre-Draft
                </span>
              </div>
            </div>
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">Thursday, April 23</p>
                  <p className="text-sm text-muted">Gates: 12:00 PM | Round 1: 8:00 PM ET | KELS sings anthem (FREE) | Steve Aoki at The Plaza (12 PM, ticketed)</p>
                </div>
                <span className="text-xs bg-primary text-white px-2 py-1 rounded font-semibold">
                  Day 1
                </span>
              </div>
            </div>
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">Friday, April 24</p>
                  <p className="text-sm text-muted">Gates: 12:00 PM | Rounds 2-3: 7:00 PM ET | Wiz Khalifa + Bret Michaels at 5:15 PM (FREE) | Drone show after picks</p>
                </div>
                <span className="text-xs bg-primary text-white px-2 py-1 rounded font-semibold">
                  Day 2
                </span>
              </div>
            </div>
            <div className="card-minimal p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">Saturday, April 25</p>
                  <p className="text-sm text-muted">Gates: 9:00 AM | Rounds 4-7: 12:00 PM ET | PicksBURGH 5K | Kane Brown (FREE) | 2 Chainz at The Plaza (6 PM, ticketed)</p>
                </div>
                <span className="text-xs bg-primary text-white px-2 py-1 rounded font-semibold">
                  Day 3
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Free transit callout */}
        <section className="border-l-2 border-accent pl-5 mb-10">
          <p className="font-bold text-foreground text-lg mb-2">
            T, Football Flyer, and Mon Incline All FREE April 23-25
          </p>
          <div className="space-y-2 text-sm text-muted">
            <p><strong>From North:</strong> Ross Park &amp; Ride (I-279 Exit 5), Football Flyer 99N, 25 min, FREE</p>
            <p><strong>From South:</strong> South Hills Village T Station, ride the T for free, 35 min, FREE</p>
            <p><strong>From East:</strong> Monroeville Mall, Football Flyer 99E on the East Busway, FREE</p>
            <p><strong>From West/Airport:</strong> University Blvd P&amp;R, Football Flyer 99W, FREE (or 28X bus)</p>
            <p><strong>From Butler County:</strong> Zelienople Route 528 park-and-ride, Butler Transit every 30 min to Ross Park lot ($10 round trip, exact cash)</p>
          </div>
          <p className="text-sm text-muted mt-3">
            Sheetz covers the T and Monongahela Incline. The Pittsburgh Organizing Committee and The Pittsburgh Foundation cover all four Football Flyer buses (99N, 99E, 99S, 99W). No ticket, no pass, just hop on.
          </p>
        </section>

        {/* Airport arrival tip */}
        <section className="card-minimal p-4 mb-10">
          <p className="font-bold text-foreground text-sm mb-2">
            Flying in? Look for the draft photo ops
          </p>
          <p className="text-sm text-muted">
            Pittsburgh International Airport (PIT) has NFL Draft-themed photo opportunities set up for arriving visitors throughout draft week. Good for a quick social post on the way to your hotel. Easiest transit from PIT: 28X bus to downtown, then the T or Football Flyer from there (all free during the draft).
          </p>
        </section>

        {/* Quick reference links */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">Quick Reference Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/parking-transportation"
              className="card-minimal p-4 hover:shadow-md transition-all block"
            >
              <p className="font-bold">Parking Guide</p>
              <p className="text-sm text-muted">Park-and-ride locations, pricing, road closures</p>
            </Link>
            <Link
              href="/schedule"
              className="card-minimal p-4 hover:shadow-md transition-all block"
            >
              <p className="font-bold">Full Schedule</p>
              <p className="text-sm text-muted">Round times, bag policy, OnePass details</p>
            </Link>
            <Link
              href="/itinerary"
              className="card-minimal p-4 hover:shadow-md transition-all block"
            >
              <p className="font-bold">Day-by-Day Itinerary</p>
              <p className="text-sm text-muted">Hour-by-hour plan for each day</p>
            </Link>
            <Link
              href="/bars-restaurants"
              className="card-minimal p-4 hover:shadow-md transition-all block"
            >
              <p className="font-bold">Where to Eat</p>
              <p className="text-sm text-muted">Restaurants and bars by neighborhood</p>
            </Link>
            <Link
              href="/watch-parties"
              className="card-minimal p-4 hover:shadow-md transition-all block"
            >
              <p className="font-bold">Watch Parties</p>
              <p className="text-sm text-muted">17 verified events across Pittsburgh</p>
            </Link>
            <Link
              href="/where-to-stay"
              className="card-minimal p-4 hover:shadow-md transition-all block"
            >
              <p className="font-bold">Where to Stay</p>
              <p className="text-sm text-muted">Hotels from $120/night, plus alternatives</p>
            </Link>
          </div>
        </section>

        {/* Final note */}
        <section className="border-l-2 border-accent pl-5 text-center">
          <p className="font-bold text-foreground">You're ready.</p>
          <p className="text-sm text-muted mt-1">
            Bookmark this page and check it the night before you head to Pittsburgh.
            Have an amazing draft weekend.
          </p>
        </section>
      </article>

      <RelatedPages current="checklist" slugs={["parking", "schedule", "food", "getting_around"]} />
    </>
  );
}

function CheckItem({ text, isNo, children }: { text?: string; isNo?: boolean; children?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-0.5 text-lg ${isNo ? "text-muted" : "text-accent"}`}>
        {isNo ? "\u2717" : "\u2713"}
      </span>
      <p className="text-sm text-muted">{children || text}</p>
    </div>
  );
}
