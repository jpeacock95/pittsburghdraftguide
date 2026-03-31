import Link from "next/link";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white mt-0">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Pittsburgh Draft Guide</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your complete guide to the 2026 NFL Draft in Pittsburgh. April
              23&ndash;25 at Point State Park and Acrisure Stadium.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/parking-transportation" className="hover:text-accent transition-colors">
                  Parking &amp; Transportation
                </Link>
              </li>
              <li>
                <Link href="/where-to-stay" className="hover:text-accent transition-colors">
                  Where to Stay
                </Link>
              </li>
              <li>
                <Link href="/bars-restaurants" className="hover:text-accent transition-colors">
                  Bars &amp; Restaurants
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-accent transition-colors">
                  Schedule &amp; What to Expect
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">More Guides</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/watch-parties" className="hover:text-accent transition-colors">
                  Watch Parties
                </Link>
              </li>
              <li>
                <Link href="/itinerary" className="hover:text-accent transition-colors">
                  Day-by-Day Itinerary
                </Link>
              </li>
              <li>
                <Link href="/cranberry-township" className="hover:text-accent transition-colors">
                  Getting There from Cranberry
                </Link>
              </li>
              <li>
                <Link href="/budget-guide" className="hover:text-accent transition-colors">
                  Draft Weekend on a Budget
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="hover:text-accent transition-colors">
                  Pittsburgh Neighborhoods
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About This Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + credits */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-400">
              Built by{" "}
              <TrackedLink
                href="/about"
                eventName="peacock_builtby_footer_click"
                className="text-accent hover:text-white font-semibold transition-colors"
              >
                Jordan Peacock
              </TrackedLink>
              {" "}in Cranberry Township, PA.
            </p>
            <p className="text-sm text-gray-500 mt-1.5">
              Questions about the guide or anything else?{" "}
              <TrackedLink
                href="mailto:jordan@peacockbookkeepingservices.com"
                eventName="peacock_getintouch_footer_click"
                className="text-accent hover:text-white font-semibold underline underline-offset-2 transition-colors"
              >
                Get in touch
              </TrackedLink>
            </p>
          </div>
          <div className="text-center text-sm text-gray-500 mt-4">
            <p>&copy; {new Date().getFullYear()} Pittsburgh Draft Guide. Not
              affiliated with the NFL.
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Disclosure: Some links on this site are affiliate links. If you
              book a hotel, buy gear, or reserve parking through our links, we
              may earn a small commission at no extra cost to you. This helps
              keep the guide free.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
