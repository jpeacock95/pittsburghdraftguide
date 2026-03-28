import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

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

      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Draft Weekend Checklist
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Your Draft Weekend Checklist
          </h1>
          <p className="text-gray-300">
            Everything you need to pack, download, and plan before April 23.
            Bookmark this page and come back to it the night before you leave.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Before you go */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Before You Leave Home</h2>
          <div className="space-y-3">
            <CheckItem text="Download the NFL OnePass app and register (required for free entry)" />
            <CheckItem text="Book your hotel if you haven't already (prices are only going up)" />
            <CheckItem text="Pre-book parking on SpotHero if you're driving" />
            <CheckItem text="Check the road closure map — several bridges and I-279 exits are closed" />
            <CheckItem text="Charge your portable battery pack (you'll need it)" />
            <CheckItem text="Check the weather forecast for Pittsburgh April 23-25" />
            <CheckItem text="Screenshot or save the park-and-ride directions for your approach" />
            <CheckItem text="Make dinner reservations if you want a sit-down meal (everywhere will be packed)" />
          </div>
        </section>

        {/* Packing list */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What to Pack</h2>

          <h3 className="text-lg font-bold mt-6 mb-3">Must-Haves</h3>
          <div className="space-y-3">
            <CheckItem text="Clear bag (12x6x12 max for Acrisure Stadium, 16x16x6 for Point State Park) — buy one on Amazon for $8, don't pay $25 at the event" />
            <CheckItem text="Portable phone charger — OnePass drains your battery fast, and 500K other people will be competing for cell signal" />
            <CheckItem text="Comfortable walking shoes — you'll walk 5-10 miles per day between venues" />
            <CheckItem text="Layers — April in Pittsburgh can be 45 or 75 degrees. Seriously. Pack for both." />
            <CheckItem text="Rain jacket or poncho — it's an outdoor event and April showers are real" />
            <CheckItem text="Your phone with OnePass installed and your account set up" />
          </div>

          <h3 className="text-lg font-bold mt-6 mb-3">Smart Additions</h3>
          <div className="space-y-3">
            <CheckItem text="Sunscreen — if it's a clear day, you're outside for hours" />
            <CheckItem text="Sunglasses and a hat" />
            <CheckItem text="Water bottle (refill stations will be available)" />
            <CheckItem text="Snacks — food lines will be long and $15 beers add up" />
            <CheckItem text="Cash — some vendors and parking lots are cash-only" />
            <CheckItem text="Your team's jersey or gear (this is a football event, rep your team)" />
            <CheckItem text="Small umbrella that fits in your clear bag" />
          </div>

          <h3 className="text-lg font-bold mt-6 mb-3">Leave at Home</h3>
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
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Day-Of Checklist</h2>
          <div className="space-y-3">
            <CheckItem text="Phone charged to 100%" />
            <CheckItem text="Portable charger fully charged" />
            <CheckItem text="OnePass app open and working" />
            <CheckItem text="Clear bag packed with essentials" />
            <CheckItem text="Check weather one more time — adjust layers" />
            <CheckItem text="Eat a real meal before you go (food at the event is expensive and lines are long)" />
            <CheckItem text="Know your parking/transit plan (don't wing it)" />
            <CheckItem text="Screenshot your return transit route — cell signal will be weak with 200K people around you" />
            <CheckItem text="Tell someone where you're going and when you expect to be back" />
          </div>
        </section>

        {/* Key times */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Key Times to Remember</h2>
          <div className="space-y-3">
            <div className="bg-surface border border-border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">Thursday, April 23</p>
                  <p className="text-sm text-muted">Gates: 12:00 PM | Round 1: 8:00 PM ET</p>
                </div>
                <span className="text-xs bg-primary text-white px-2 py-1 rounded font-semibold">
                  Day 1
                </span>
              </div>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
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
            <div className="bg-surface border border-border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">Saturday, April 25</p>
                  <p className="text-sm text-muted">Gates: 9:00 AM | Rounds 4-7: 12:00 PM ET</p>
                </div>
                <span className="text-xs bg-primary text-white px-2 py-1 rounded font-semibold">
                  Day 3
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick reference links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Quick Reference Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/parking-transportation"
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary transition-colors block"
            >
              <p className="font-bold">Parking Guide</p>
              <p className="text-sm text-muted">Park-and-ride locations, pricing, road closures</p>
            </Link>
            <Link
              href="/schedule"
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary transition-colors block"
            >
              <p className="font-bold">Full Schedule</p>
              <p className="text-sm text-muted">Round times, bag policy, OnePass details</p>
            </Link>
            <Link
              href="/itinerary"
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary transition-colors block"
            >
              <p className="font-bold">Day-by-Day Itinerary</p>
              <p className="text-sm text-muted">Hour-by-hour plan for each day</p>
            </Link>
            <Link
              href="/bars-restaurants"
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary transition-colors block"
            >
              <p className="font-bold">Where to Eat</p>
              <p className="text-sm text-muted">Restaurants and bars by neighborhood</p>
            </Link>
          </div>
        </section>

        {/* Final note */}
        <section className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
          <p className="font-bold text-green-900">You're ready.</p>
          <p className="text-sm text-green-800 mt-1">
            Bookmark this page and check it the night before you head to Pittsburgh.
            Have an amazing draft weekend.
          </p>
        </section>
      </article>
    </>
  );
}

function CheckItem({ text, isNo }: { text: string; isNo?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-0.5 text-lg ${isNo ? "text-red-500" : "text-green-600"}`}>
        {isNo ? "\u2717" : "\u2713"}
      </span>
      <p className="text-sm text-muted">{text}</p>
    </div>
  );
}
