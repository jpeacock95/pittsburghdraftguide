import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-3">Pittsburgh Draft Guide</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your complete guide to the 2026 NFL Draft in Pittsburgh. April
              23-25 at Point State Park and Acrisure Stadium.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/parking-transportation" className="hover:text-white">
                  Parking &amp; Transportation
                </Link>
              </li>
              <li>
                <Link href="/where-to-stay" className="hover:text-white">
                  Where to Stay
                </Link>
              </li>
              <li>
                <Link href="/bars-restaurants" className="hover:text-white">
                  Bars &amp; Restaurants
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-white">
                  Schedule &amp; What to Expect
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-3">More Guides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/itinerary" className="hover:text-white">
                  Day-by-Day Itinerary
                </Link>
              </li>
              <li>
                <Link href="/cranberry-township" className="hover:text-white">
                  Getting There from Cranberry
                </Link>
              </li>
              <li>
                <Link href="/budget-guide" className="hover:text-white">
                  Draft Weekend on a Budget
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="hover:text-white">
                  Pittsburgh Neighborhoods
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>Made in Cranberry Township, PA</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} Pittsburgh Draft Guide. Not
            affiliated with the NFL.
          </p>
        </div>
      </div>
    </footer>
  );
}
