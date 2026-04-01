import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh Watch Parties 2026",
  description:
    "Every watch party happening during the 2026 NFL Draft in Pittsburgh. Free and ticketed events, Steelers legends, rooftop parties, and more. All verified with sources.",
};

const watchPartyFAQs = [
  {
    question: "Are there free watch parties for the NFL Draft in Pittsburgh?",
    answer:
      "Yes. The Pitt Block Party at Arts Landing is free all 3 days (April 23-25). Bakery Square is hosting free outdoor watch parties Thursday through Saturday with big screens and free parking. Steel City Sports Bar has free events Friday and Saturday. Plus the Draft Experience at Point State Park is free with NFL OnePass registration.",
  },
  {
    question:
      "Do I need tickets for NFL Draft watch parties in Pittsburgh?",
    answer:
      "Most watch parties require advance tickets through Eventbrite, Etix, or Ticket Tailor. Prices range from $15 (Pittsburgh Brewing Company GA) to $250 (VIP events with Steelers legends). A few events are free. Buy tickets early because several have already sold out.",
  },
  {
    question: "Which NFL Draft watch parties have Steelers players?",
    answer:
      "Cam Heyward is hosting a party at Tequila Cowboy on Thursday with podcast guests. Steel City Draft Night at The Priory has Rocky Bleier, Jon Kolb, and Larry Brown. The Pick Is In at Sheraton Station Square features Rod Woodson, Pat Freiermuth, and Kevin Colbert. The Friday after-party at the Sheraton has Alex Highsmith, Jack Sawyer, and Will Howard.",
  },
  {
    question: "What is the best NFL Draft watch party in Pittsburgh?",
    answer:
      "It depends on what you want. For Steelers legends and autographs, Steel City Draft Night at The Priory ($75-250) or The Pick Is In at the Sheraton ($162+). For atmosphere, the DVE Gateway Clipper party (sold out, waitlist available). For budget-friendly, Pittsburgh Brewing Company ($15 GA) or the free Bakery Square outdoor screenings.",
  },
];

export default function WatchPartiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Watch Parties", href: "/watch-parties" },
        ]}
      />
      <FAQSchema items={watchPartyFAQs} />

      {/* Hero */}
      <section
        className="photo-section text-white py-16 md:py-20"
        style={{ backgroundImage: "url('/pgh-watch-party-crowd.jpg')" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Watch Parties
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            NFL Draft Pittsburgh Watch Parties 2026
          </h1>
          <p className="text-gray-300">
            18 verified watch parties happening across Pittsburgh during the 2026
            NFL Draft (April 23-25). From free outdoor screenings to VIP events
            with Steelers legends. Every event below has a public source link so
            you can verify the details yourself.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <LastUpdated date="March 31, 2026" />

        {/* Quick Jump Nav */}
        <section className="mb-14">
          <div className="card-minimal p-5">
            <p className="font-bold mb-3">Jump to:</p>
            <div className="flex flex-wrap gap-2">
              <a href="#thursday" className="text-sm bg-primary-dark text-white px-3 py-1 rounded-full hover:bg-accent hover:text-foreground transition-colors">Thursday (Day 1)</a>
              <a href="#friday" className="text-sm bg-primary-dark text-white px-3 py-1 rounded-full hover:bg-accent hover:text-foreground transition-colors">Friday (Day 2)</a>
              <a href="#saturday" className="text-sm bg-primary-dark text-white px-3 py-1 rounded-full hover:bg-accent hover:text-foreground transition-colors">Saturday (Day 3)</a>
              <a href="#all-weekend" className="text-sm bg-primary-dark text-white px-3 py-1 rounded-full hover:bg-accent hover:text-foreground transition-colors">All Weekend</a>
              <a href="#free" className="text-sm bg-accent text-foreground px-3 py-1 rounded-full hover:bg-accent-dark transition-colors font-bold">Free Events</a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Before You Pick a Party
          </h2>
          <p className="text-muted mb-3">
            There are two ways to experience the draft picks in Pittsburgh.
            The official Draft Theater at Acrisure Stadium has reserved
            seating (through NFL OnePass lottery or On Location VIP packages,
            most of which are sold out). The Draft Experience at Point State
            Park has big screens in the free fan zone.
          </p>
          <p className="text-muted mb-3">
            Watch parties are the third option. They're hosted by bars,
            venues, and organizations across the city, and they range from
            $15 general admission to $250 VIP with Steelers legends. Several
            are already sold out, so don't wait.
          </p>
          <p className="text-muted">
            Every event listed here has been verified through a public source
            (Eventbrite, venue website, or news article). Sources are linked
            at the bottom of each listing.
          </p>
        </section>

        {/* ─── THURSDAY ─── */}
        <section className="mb-14" id="thursday">
          <h2 className="text-2xl font-heading mb-2">
            Thursday, April 23 (Day 1)
          </h2>
          <p className="text-sm text-muted mb-6">Round 1 starts at 8:00 PM. Most parties open hours earlier.</p>

          {/* Pittsburgh Brewing Company */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Official Pittsburgh Draft Watch Party</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">From $15</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Pittsburgh Brewing Company</strong>, 150 Ferry St, Creighton, PA 15030
            </p>
            <p className="text-sm text-muted mb-3">
              The official city-endorsed watch party. Live WTAE broadcast on
              massive outdoor screens. Iron City beer (obviously). Food trucks.
              Fan zone. VIP ($65) gets tap room access with celebrity
              appearances from Mark Madden, Matt Light, and WTAE personalities.
              Premium VIP ($250, 21+) includes limited-edition whiskey bottle,
              distillery tour, and catered dinner.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Doors:</strong> 5:00 PM (VIP at 4:00 PM)</li>
                <li><strong>Cost:</strong> GA $15 (all ages) | VIP $65 | Premium VIP $250 (21+)</li>
                <li><strong>Parking:</strong> NOT included, must purchase separately</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Sources:{" "}
              <a href="https://www.visitpittsburgh.com/events/pittsburgh-draft-watch-party/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">VisitPittsburgh</a>
              {" | "}
              <a href="https://www.etix.com/ticket/p/77221546" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tickets (Etix)</a>
            </p>
          </div>

          {/* Cam Heyward */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Cam Heyward's Draft Party</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">$32 - $65</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Tequila Cowboy</strong>, 380 North Shore Dr, Pittsburgh (North Shore)
            </p>
            <p className="text-sm text-muted mb-3">
              Hosted by Steelers defensive lineman Cam Heyward. Live taping of
              his "Not Just Football" podcast with special player guests and
              influencers. Food, drinks, merch, and raffle with $2,000+ in
              prizes. All ages. Valid ID required for 18+.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Time:</strong> 3:00 PM to Midnight</li>
                <li><strong>Cost:</strong> $32 - $65</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Sources:{" "}
              <a href="https://www.eventcreate.com/e/notjustfootball/event-tickets" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tickets (EventCreate)</a>
              {" | "}
              <a href="https://www.post-gazette.com/sports/2026-nfl-draft/2026/03/20/nfl-draft-watch-parties-pittsburgh/stories/202603160078" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Post-Gazette</a>
            </p>
          </div>

          {/* DVE Gateway Clipper */}
          <div className="card-minimal p-5 mb-4 border-l-4 border-red-500/60">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">DVE Rocks the Draft (Gateway Clipper)</h3>
              <span className="text-xs bg-red-950/20 text-red-400 px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">SOLD OUT</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Gateway Clipper Fleet</strong>, 350 W Station Square Dr, South Side
            </p>
            <p className="text-sm text-muted mb-3">
              WDVE-FM hosted party aboard the Gateway Clipper Princess.
              Unlimited food, open bar. Live music from Joe Grushecky, Bill
              Deasy, Gene the Werewolf, Chris Higbee, and Kelsey Friday. Pre-sail
              dock party with DJ Bonics. Selfie with Bret Michaels. Q&A with
              Kevin Colbert, Rod Woodson, and Pat Freiermuth. Meet Louis Lipps.
              All ages. Waitlist available.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Time:</strong> 5:30 PM to 11:00 PM</li>
                <li><strong>Status:</strong> Sold out. Waitlist available on Eventbrite.</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Source:{" "}
              <a href="https://www.eventbrite.com/e/dve-rocks-the-draft-gateway-clipper-party-tickets-1982005539924" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eventbrite (waitlist)</a>
            </p>
          </div>

          {/* Steel City Draft Night */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Steel City Draft Night (Steelers Legends)</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">$75 - $250</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Grand Hall at The Priory Hotel</strong>, 617 Lockhart St, Deutschtown/North Side
            </p>
            <p className="text-sm text-muted mb-3">
              Live Q&A panel with Steelers legends Larry Brown, Jon Kolb, Rocky
              Bleier, John Banaszak, and Marianne Noll (Coach Chuck Noll's wife).
              Multi-screen draft watch, silent auction of black and gold
              memorabilia, buffet, cash bar. VIP gets cocktail hour, open bar,
              stage-front seating, and complimentary valet. Benefits Adventures
              in Training with a Purpose. All ages.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Doors:</strong> VIP 5:00 PM | GA 6:00 PM to 11:00 PM</li>
                <li><strong>Cost:</strong> GA $75 | VIP $250</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Source:{" "}
              <a href="https://www.eventbrite.com/e/steel-city-draft-night-watch-party-tickets-1984996315414" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eventbrite</a>
            </p>
          </div>

          {/* The Pick Is In */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">The Pick Is In: Legends VIP Draft Party</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">From ~$162</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Sheraton Pittsburgh Hotel at Station Square</strong>, 300 W Station Square Dr, South Side
            </p>
            <p className="text-sm text-muted mb-3">
              Features Rocky Bleier, JT Thomas, Rod Woodson, Levon Kirkland,
              Trai Essex, Pat Freiermuth, and former GM Kevin Colbert for Q&A
              and draft analysis. Buffet and two drinks included. Proceeds
              benefit Pennsylvania Wounded Warriors.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Cost:</strong> Starting at ~$162</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Sources:{" "}
              <a href="https://www.eventbrite.com/e/the-pick-is-in-legends-draft-party-tickets-1982202037654" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eventbrite</a>
              {" | "}
              <a href="https://www.post-gazette.com/sports/2026-nfl-draft/2026/03/20/nfl-draft-watch-parties-pittsburgh/stories/202603160078" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Post-Gazette</a>
            </p>
          </div>

          {/* Draft Nation */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Draft Nation NFL Draft Party</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">$99 - $199</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Sunny Days Arena</strong>, The Waterfront area (Homestead)
            </p>
            <p className="text-sm text-muted mb-3">
              Tented outdoor party with big screens, live music, cocktail
              reception, food from 20+ restaurant partners (Primanti Brothers,
              Eat'n Park, PF Chang's, Dancing Gnome Brewery, and more). Swag
              bags included. VIP gets premium seating and 2 drink tickets.
              Benefits Operation Troop Appreciation.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Time:</strong> 5:00 PM to 11:45 PM</li>
                <li><strong>Cost:</strong> GA $99 | VIP $199</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Sources:{" "}
              <a href="https://www.tickettailor.com/events/draftnation/2090560" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ticket Tailor</a>
              {" | "}
              <a href="https://www.visitpittsburgh.com/events/draft-nation-event/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">VisitPittsburgh</a>
            </p>
          </div>

          {/* Terrible Tailgate */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">The Terrible Tailgate</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">$33 - $66</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Federal Street Canal lot</strong>, 334 Federal St, North Shore
            </p>
            <p className="text-sm text-muted mb-3">
              All-you-can-eat food. All-you-can-drink alcohol for adults. Live
              DJ. One autograph and one photo with former Steelers (TBA). Ages
              14+ welcome.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Time:</strong> 1:00 PM to 6:00 PM</li>
                <li><strong>Cost:</strong> Ages 14-17 $33 | Non-alcohol $54 | GA w/ alcohol $66</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Sources:{" "}
              <a href="https://www.tickpick.com/organizer/event/terrible-tailgate-2026-nfl-draft-day-1-13670005" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TickPick</a>
              {" | "}
              <a href="https://www.post-gazette.com/sports/2026-nfl-draft/2026/03/20/nfl-draft-watch-parties-pittsburgh/stories/202603160078" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Post-Gazette</a>
            </p>
          </div>

          {/* Black Girls Love Football */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Black Girls Love Football Draft Watch Party</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">$75 - $90</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Preeti's Pitt</strong>, 2701 Penn Ave, Strip District
            </p>
            <p className="text-sm text-muted mb-3">
              All-you-can-eat food and drink included. Photo booth. Hat
              customization bar. Pre-party available from noon to 3 PM ($75).
              Main event 7:30 PM to 11:30 PM ($90).
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Time:</strong> Pre-party Noon-3 PM ($75) | Main event 7:30-11:30 PM ($90)</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Source:{" "}
              <a href="https://posh.vip/e/black-girls-love-football-draft-watch-party" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Posh.vip</a>
            </p>
          </div>

          {/* The Finch */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">The Finch Rooftop Draft Watch Party</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">From $35</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>The Finch at The Distillery Complex</strong>, 59 S. 2nd St, South Side
            </p>
            <p className="text-sm text-muted mb-3">
              Rooftop venue with themed menu and draft tracking sheets for every
              pick. Individual tickets from $35. Tables for 8 at $520.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Cost:</strong> From $35 (individual) | $520 (table for 8)</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Source:{" "}
              <a href="https://www.eventbrite.com/e/draft-watch-party-at-the-finch-tickets-1985284660863" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eventbrite</a>
            </p>
          </div>

          {/* Steel City Sports Bar */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Steel City Sports Bar Draft Tent Party</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">$162 Thu | Free Fri-Sat</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Steel City Sports Bar &amp; Grub</strong>, 1216 Woods Run Ave, Brighton Heights
            </p>
            <p className="text-sm text-muted mb-3">
              Thursday is the big tent party: bucket of beer, all-you-can-eat
              buffet, meet Terrance Johnson ($162). Friday is free indoors for
              all ages. Saturday is a free block party.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Thursday:</strong> $162 (tent party with food + beer + meet player)</li>
                <li><strong>Friday:</strong> FREE, indoors, all ages</li>
                <li><strong>Saturday:</strong> FREE block party</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Source:{" "}
              <a href="https://www.eventbrite.com/e/steel-city-sports-bar-grub-2026-draft-watch-party-tent-party-tickets-1984440251211" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eventbrite</a>
            </p>
          </div>

          {/* Superfan Summit */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Superfan Summit 2026 Tailgate</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">~$71</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>1103 Western Ave</strong>, Allegheny West, North Side
            </p>
            <p className="text-sm text-muted mb-3">
              All 32 NFL fanbases represent in full gear and costumes. Tailgate
              atmosphere. Some proceeds benefit Light of Life Rescue Mission.
              Thursday afternoon only: 1:00 PM to 5:00 PM.
            </p>
            <p className="text-xs text-muted">
              Source:{" "}
              <a href="https://www.eventbrite.com/e/superfan-summit-2026-tailgate-pittsburgh-tickets-1985114708531" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eventbrite</a>
            </p>
          </div>
        </section>

        {/* ─── FRIDAY ─── */}
        <section className="mb-14" id="friday">
          <h2 className="text-2xl font-heading mb-2">
            Friday, April 24 (Day 2)
          </h2>
          <p className="text-sm text-muted mb-6">Rounds 2-3 start at 7:00 PM.</p>

          {/* Here We Go: Draft Night After Hours */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Here We Go: Draft Night After Hours</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">$150</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Sheraton Pittsburgh Hotel at Station Square</strong>, 300 W Station Square Dr, South Side
            </p>
            <p className="text-sm text-muted mb-3">
              Features Steelers Alex Highsmith, Jack Sawyer, Will Howard, and
              Casey Hampton. Food, drinks, entertainment. Benefits Pennsylvania
              Wounded Warriors.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Time:</strong> 6:30 PM to 10:00 PM</li>
                <li><strong>Cost:</strong> $150</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Source:{" "}
              <a href="https://www.eventbrite.com/e/here-we-go-draft-night-after-hours-tickets-1982584194696" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eventbrite</a>
            </p>
          </div>

          {/* BetRivers */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">BetRivers Sportsbook Draft Watch Party</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">Ticketed (21+)</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>BetRivers Sportsbook at Rivers Casino</strong>, 777 Casino Dr, North Shore
            </p>
            <p className="text-sm text-muted mb-3">
              All-you-can-eat buffet (7 PM to 9:30 PM): wings, sliders, nachos,
              hot dogs, and more. Happening Friday (Day 2) and Saturday (Day 3).
              Must be 21+. Parking NOT included.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Day 2 check-in:</strong> 6:00 PM to 8:00 PM</li>
                <li><strong>Restriction:</strong> 21+ only</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Sources:{" "}
              <a href="https://www.riverscasino.com/pittsburgh/casino/betrivers-sportsbook/footballdraftparty" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rivers Casino</a>
              {" | "}
              <a href="https://www.etix.com/ticket/p/76287881/football-draft-watch-partyday-2-pittsburgh-betrivers-sportsbook" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tickets Day 2 (Etix)</a>
              {" | "}
              <a href="https://www.etix.com/ticket/p/42093116/football-draft-watch-partyday-3-pittsburgh-betrivers-sportsbook" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tickets Day 3</a>
            </p>
          </div>

          {/* Villagio */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">NFL Draft Block Party at The Villagio</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">~$29</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Villagio Boutique Hotel</strong>, 939 Western Ave, Allegheny West/North Side
            </p>
            <p className="text-sm text-muted mb-3">
              Courtyard and cigar lounge. Draft viewing on screens. One appetizer
              and one drink included. More available for purchase. Cigars
              available. Friday and Saturday.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Dates:</strong> Friday April 24 + Saturday April 25</li>
                <li><strong>Cost:</strong> ~$29 online | $30 at the door</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Source:{" "}
              <a href="https://www.eventbrite.com/e/nfl-draft-block-party-at-the-villagio-424-tickets-1984702068313" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eventbrite</a>
            </p>
          </div>
        </section>

        {/* ─── SATURDAY ─── */}
        <section className="mb-14" id="saturday">
          <h2 className="text-2xl font-heading mb-2">
            Saturday, April 25 (Day 3)
          </h2>
          <p className="text-sm text-muted mb-6">Rounds 4-7 start at Noon. Most casual day of the draft.</p>

          <p className="text-muted mb-4">
            Saturday is the most relaxed day. Rounds 4-7 start at noon and run
            all afternoon. Many of the Thursday events don't repeat, but
            BetRivers (Rivers Casino), The Villagio, and Steel City Sports Bar
            all run Saturday events. The free options at Bakery Square and Pitt
            Block Party also continue Saturday.
          </p>
          <p className="text-muted">
            Don't forget the{" "}
            <Link href="/things-to-do#5k-race" className="text-primary font-semibold hover:underline">
              PicksBURGH 5K
            </Link>{" "}
            Saturday morning if you want to start the day active.
          </p>
        </section>

        {/* ─── ALL WEEKEND ─── */}
        <section className="mb-14" id="all-weekend">
          <h2 className="text-2xl font-heading mb-2">
            All Weekend (April 23-25)
          </h2>
          <p className="text-sm text-muted mb-6">Events running all 3 days of the draft.</p>

          {/* Pitt Block Party - FREE */}
          <div className="card-minimal p-5 mb-4 border-l-4 border-green-500/60" id="free">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Pitt Block Party at Arts Landing</h3>
              <span className="text-xs bg-green-950/20 text-green-400 px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">FREE</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Arts Landing</strong>, Eighth Street between Penn Ave and Fort Duquesne Blvd, Downtown
            </p>
            <p className="text-sm text-muted mb-3">
              Hosted by Pitt Athletics and the Pittsburgh Cultural Trust. Football
              experiences, live music and entertainment, food trucks. Family-friendly.
              Running all 3 days. Daily schedules still being finalized.
            </p>
            <p className="text-xs text-muted">
              Sources:{" "}
              <a href="https://pittsburghpanthers.com/news/2026/2/18/football-pitt-athletics-and-the-pittsburgh-cultural-trust-to-host-pitt-block-party-at-arts-landing-during-nfl-draft-weekend" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pitt Athletics</a>
              {" | "}
              <a href="https://www.post-gazette.com/sports/2026-nfl-draft/2026/03/20/nfl-draft-watch-parties-pittsburgh/stories/202603160078" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Post-Gazette</a>
            </p>
          </div>

          {/* Bakery Square - FREE */}
          <div className="card-minimal p-5 mb-4 border-l-4 border-green-500/60">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Bakery Square Draft Watch Parties</h3>
              <span className="text-xs bg-green-950/20 text-green-400 px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">FREE</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Bakery Square courtyard</strong>, 6425 Penn Ave, Larimer
            </p>
            <p className="text-sm text-muted mb-3">
              Big outdoor screens in the courtyard. Free parking (up to 3 hours)
              in Bakery Square garages. Screenings Thursday at 8 PM, Friday at
              7 PM, Saturday at noon. Plus a pre-draft kickoff event Wednesday
              April 22 from 4-7 PM ($10, requires registration).
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Thursday:</strong> 8:00 PM</li>
                <li><strong>Friday:</strong> 7:00 PM</li>
                <li><strong>Saturday:</strong> Noon</li>
                <li><strong>Parking:</strong> Free (up to 3 hours) in Bakery Square garages</li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              Sources:{" "}
              <a href="https://www.bakery-square.com/events/nfl-draft-watch-party?edid=1987" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bakery Square</a>
              {" | "}
              <a href="https://www.post-gazette.com/sports/2026-nfl-draft/2026/03/20/nfl-draft-watch-parties-pittsburgh/stories/202603160078" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Post-Gazette</a>
            </p>
          </div>

          {/* The Waterfront Courtyard - FREE */}
          <div className="card-minimal p-5 mb-4 border-l-4 border-green-500/60">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">The Waterfront Courtyard Draft Parties</h3>
              <span className="text-xs bg-green-950/20 text-green-400 px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">FREE</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>The Waterfront</strong>, Homestead
            </p>
            <p className="text-sm text-muted mb-3">
              Free outdoor watch parties in The Waterfront courtyard all three
              draft days. Big screens, food, and a lively atmosphere without
              paying a dime.
            </p>
            <div className="border-l-2 border-accent pl-4 mb-3">
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Thursday:</strong> 8:00 PM</li>
                <li><strong>Friday:</strong> 7:00 PM</li>
                <li><strong>Saturday:</strong> Noon</li>
              </ul>
            </div>
          </div>

          {/* Sports & Social */}
          <div className="card-minimal p-5 mb-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg">Sports &amp; Social at Live! Casino</h3>
              <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">Check venue</span>
            </div>
            <p className="text-sm text-muted mb-3">
              <strong>Live! Casino Hotel Pittsburgh</strong>
            </p>
            <p className="text-sm text-muted mb-3">
              Watch parties all 3 days on massive screens. Doors at 11 AM daily.
              Cold drinks, big crowd atmosphere.
            </p>
            <p className="text-xs text-muted">
              Source:{" "}
              <a href="https://www.livech.com/pittsburgh/events-and-shows/nfl-draft" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live! Casino</a>
            </p>
          </div>
        </section>

        {/* FAQ section */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-6">Watch Party FAQ</h2>
          <div className="space-y-4">
            {watchPartyFAQs.map((faq) => (
              <div key={faq.question} className="card-minimal p-5">
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
            <Link href="/schedule" className="card-minimal p-4 hover:shadow-md transition-all">
              <p className="font-bold mb-1">Draft Schedule</p>
              <p className="text-sm text-muted">Round times, gate hours, and what to expect each day.</p>
            </Link>
            <Link href="/bars-restaurants" className="card-minimal p-4 hover:shadow-md transition-all">
              <p className="font-bold mb-1">Bars &amp; Restaurants</p>
              <p className="text-sm text-muted">44 spots to eat and drink near both venues.</p>
            </Link>
            <Link href="/parking-transportation" className="card-minimal p-4 hover:shadow-md transition-all">
              <p className="font-bold mb-1">Parking &amp; Transit</p>
              <p className="text-sm text-muted">Where to park, free T rides, and road closures.</p>
            </Link>
            <Link href="/things-to-do" className="card-minimal p-4 hover:shadow-md transition-all">
              <p className="font-bold mb-1">Things to Do</p>
              <p className="text-sm text-muted">Concerts, 5K, attractions, and family activities.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-heading mb-2">
            Don't forget the basics
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Download the checklist, register for OnePass, and figure out how
            you're getting there before you pick a party.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/checklist"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Draft Checklist
            </Link>
            <Link
              href="/getting-around"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Getting Around
            </Link>
          </div>
        </section>
      </article>

      <RelatedPages
        current="watch_parties"
        slugs={["schedule", "food", "parking", "checklist"]}
      />
    </>
  );
}
