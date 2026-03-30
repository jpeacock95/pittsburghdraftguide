import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "Draft Weekend Checklist: What to Pack & Know",
  description:
    "The complete packing list and preparation checklist for the 2026 NFL Draft in Pittsburgh. What to bring, download, and plan before you go.",
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
        <LastUpdated date="March 29, 2026" />

        {/* Weather note */}
        <div className="card-minimal p-4 mb-8">
          <p className="text-sm text-muted">
            <strong className="text-foreground">Pittsburgh weather in late April:</strong> Expect 45-65&#176;F (7-18&#176;C). Rain is common. Dress in layers and bring a light rain jacket. Check the{" "}
            <a href="https://forecast.weather.gov/MapClick.php?CityName=Pittsburgh&state=PA" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">forecast</a>{" "}
            the week of the draft.
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
              <a href="https://www.amazon.com/s?k=portable+phone+charger+10000mah" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Portable phone charger</a>. OnePass drains your battery fast, and 500K other people will be competing for cell signal
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
            <CheckItem text="Cash. Some vendors and parking lots are cash-only" />
            <CheckItem text="Your team's jersey or gear (this is a football event, rep your team)" />
            <CheckItem text="Small umbrella that fits in your clear bag" />
          </div>

          <h3 className="text-lg font-heading mt-6 mb-3">Leave at Home</h3>
          <div className="space-y-3">
            <CheckItem
              text="Large bags, backpacks, or purses (won't pass security)"
              isNo
            />
            <CheckItem text="Coolers, outside food/drinks into the event areas" isNo />
            <CheckItem text="Chairs, blankets, tents" isNo />
            <CheckItem text="Drones" isNo />
            <CheckItem text="Weapons of any kind" isNo />
          </div>
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
                  <p className="text-sm text-muted">Opening Night | Draft Experience opens | Nelly concert at Plaza at North Shore</p>
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
                  <p className="text-sm text-muted">Gates: 12:00 PM | Round 1: 8:00 PM ET | DJ Steve Aoki concert</p>
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
                  <p className="text-sm text-muted">Gates: 12:00 PM | Rounds 2-3: 7:00 PM ET</p>
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
                  <p className="text-sm text-muted">Gates: 9:00 AM | Rounds 4-7: 12:00 PM ET | PicksBURGH 5K | 2 Chainz concert</p>
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
            ALL T Rides FREE April 23-25 (Sheetz + PRT)
          </p>
          <div className="space-y-2 text-sm text-muted">
            <p><strong>From North:</strong> Ross Park &amp; Ride (I-279 Exit 5), Football Flyer bus, 25 min</p>
            <p><strong>From South:</strong> South Hills Village T Station, ride the T for free, 35 min</p>
            <p><strong>From East:</strong> Wilkinsburg Park &amp; Ride, P1 bus, 15 min</p>
            <p><strong>From West/Airport:</strong> PRT Route 28X, 45-60 min</p>
            <p><strong>From Butler County:</strong> Zelienople Route 528 park-and-ride, Butler Transit every 30 min to Ross Park lot ($10 round trip, exact cash)</p>
          </div>
          <p className="text-sm text-muted mt-3">
            Sheetz is covering all fares on the T (red, blue, silver lines) and the Monongahela Incline all 3 days. Park at any T station and ride downtown for $0.
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
