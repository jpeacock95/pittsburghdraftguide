import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { EmailCapture } from "@/components/ui/EmailCapture";

export const metadata: Metadata = {
  title: "Where to Eat: NFL Draft Pittsburgh 2026",
  description:
    "44 bars and restaurants near the draft, sorted by neighborhood. North Shore, Strip District, South Side, and more. A local's picks, not a tourist list.",
};

function SpotCard({
  name,
  type,
  neighborhood,
  description,
  url,
  address,
  status,
}: {
  name: string;
  type: string;
  neighborhood?: string;
  description: string;
  url?: string;
  address?: string;
  status?: "closed" | "private" | "unverified";
}) {
  const isClosed = status === "closed";
  const isPrivate = status === "private";
  const directionsUrl = address
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
    : undefined;

  return (
    <div className={`p-4 ${isClosed ? "border-l-2 border-red-500/60 bg-red-950/20 pl-5" : isPrivate ? "border-l-2 border-accent pl-5" : "card-minimal"}`}>
      {isClosed && (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-red-400 bg-red-950/40 px-2 py-0.5 rounded">
            Permanently Closed
          </span>
        </div>
      )}
      {isPrivate && (
        <div className="flex items-center gap-2 mb-2">
          <span className="label">
            Private Events Only - Draft Weekend
          </span>
        </div>
      )}
      <div>
        {url && !isClosed ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline text-primary">
            {name}
          </a>
        ) : (
          <p className={`font-bold ${isClosed ? "line-through text-red-300" : ""}`}>{name}</p>
        )}
        <p className={`text-xs mt-0.5 ${isClosed ? "text-gray-400" : "text-muted"}`}>
          {type}
          {neighborhood && <> &middot; {neighborhood}</>}
        </p>
      </div>
      <p className={`text-sm mt-2 ${isClosed ? "text-gray-400" : "text-muted"}`}>{description}</p>
      {directionsUrl && !isClosed && (
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-2 inline-block py-2 px-3 -ml-3 rounded-md active:bg-primary/10 transition-colors">
          Get Directions
        </a>
      )}
    </div>
  );
}

export default function BarsRestaurants() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Bars & Restaurants", href: "/bars-restaurants" },
        ]}
      />
      <ItemListSchema
        name="Best Bars and Restaurants Near the NFL Draft in Pittsburgh"
        items={[
          { name: "Tom's Watch Bar", description: "Sports bar steps from Acrisure Stadium with massive video walls" },
          { name: "Federal Galley", description: "Food hall with 4 restaurant concepts and happy hour specials" },
          { name: "Gaucho Parrilla Argentina", description: "Top-rated Argentine steakhouse in the Strip District" },
          { name: "Butcher and the Rye", description: "Craft cocktails and New American cuisine downtown" },
          { name: "DiAnoia's Eatery", description: "Handmade Italian pasta and sandwiches in the Strip District" },
          { name: "Hofbrauhaus Pittsburgh", description: "Authentic German beer hall on the South Side" },
          { name: "Church Brew Works", description: "Brewery inside a converted church in Lawrenceville" },
          { name: "Pamela's Diner", description: "Famous thin crispy pancakes, Pittsburgh's favorite diner" },
          { name: "Altius", description: "Fine dining with the best view of the city on Mt. Washington" },
          { name: "Shorty's Goodtimes Bar", description: "Retro gaming bar hosting official draft after-parties" },
        ]}
      />

      {/* Hero */}
      <section
        className="photo-section text-white py-16 md:py-20"
        style={{ backgroundImage: "url('/pgh-restaurant-night.webp')" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Bars &amp; Restaurants
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            Where to Eat &amp; Drink: NFL Draft Pittsburgh
          </h1>
          <p className="text-gray-300">
            Every Pittsburgh NFL Draft food and restaurant recommendation you
            need, organized by neighborhood. Real spots. Real descriptions. No
            filler.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-muted mb-8">
          You've got 500,000+ people flooding into a city that's only 300,000
          strong. Every restaurant within a mile of the draft venues will have a
          wait. That's just reality. But Pittsburgh's food scene is legit, and if
          you know where to go, you'll eat well. Here's the breakdown by
          neighborhood.
        </p>

        <LastUpdated date="April 4, 2026" />

        <div className="border-l-2 border-accent pl-5 mb-6">
          <p className="text-sm font-bold text-foreground mb-1">Draft Weekend Heads Up</p>
          <p className="text-sm text-muted">
            Some bars and restaurants near the draft venues have been bought out
            for private NFL and corporate events, especially Thursday night (Round 1).
            Call ahead before you walk over, particularly on the North Shore. We've
            noted the ones we know about below, but more buyouts may pop up closer
            to the event.
          </p>
        </div>

        {/* Jump nav */}
        <div className="mb-8">
          <p className="text-sm font-bold text-muted mb-2">Jump to:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "north-shore", label: "North Shore" },
              { id: "downtown", label: "Downtown" },
              { id: "strip-district", label: "Strip District" },
              { id: "south-side", label: "South Side" },
              { id: "breweries", label: "Breweries" },
              { id: "budget", label: "Budget Eats" },
              { id: "taste", label: "Taste of the Draft" },
              { id: "locals", label: "Where Locals Eat" },
            ].map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs px-3 py-1.5 rounded-full hover:bg-primary-dark hover:text-white transition-colors text-muted"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <Image
          src="/pgh-bridge-night.webp"
          alt="Roberto Clemente Bridge lit up at night with Pittsburgh skyline"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-lg w-full h-auto mb-8"
        />

        {/* North Shore */}
        <section id="north-shore" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl font-heading mb-2">
            North Shore (Walking Distance from the Draft Stage)
          </h2>
          <p className="text-muted mb-4">
            This is ground zero. The Draft Theater is at Acrisure Stadium, and
            these spots are all within a 5-10 minute walk. Expect big crowds and
            long waits, especially Thursday and Friday evenings.
          </p>
          <div className="grid gap-3">
            <SpotCard
              name="Tom's Watch Bar"
              type="Sports Bar"
              url="https://tomswatchbar.com/pittsburgh/"
              address="261 North Shore Dr, Pittsburgh, PA 15212"
              description="It's a chain, not going to pretend otherwise. But the location is hard to beat - right between Acrisure and PNC Park with TVs on every wall. You'll see every pick without fighting for a spot."
            />
            <SpotCard
              name="North Shore Tavern"
              type="Bar & Restaurant"
              url="https://northshoretavern.com/"
              address="120 Federal St, Pittsburgh, PA 15212"
              description="On Federal Street across from PNC Park. Nothing fancy, just a solid neighborhood bar with decent food. It's going to be wall-to-wall people draft weekend because of the location."
            />
            <SpotCard
              name="Jason Aldean's Kitchen + Bar"
              type="Country Bar & Restaurant"
              url="https://jasonaldeansbar.com/pittsburgh/"
              address="393 N Shore Dr, Pittsburgh, PA 15212"
              description="Country-themed with big video walls and outdoor seating. Food is fine, not the reason to go. The vibe is. Aldean is performing at Rivers Casino draft eve, so expect this place to ride that energy all weekend."
            />
            <SpotCard
              name="Shorty's Goodtimes Bar"
              type="Bar & Entertainment"
              url="https://www.shortysx.com/"
              address="353 N Shore Dr, Pittsburgh, PA 15212"
              description="Retro-gaming bar on the North Shore. Right next to The Plaza at North Shore, which is hosting ticketed concerts: Nelly on Wednesday (Opening Party), Steve Aoki on Thursday (midday tailgate), and 2 Chainz on Saturday (Closing Party). Tickets at gofevo.com. Expect lines. Get there early or don't bother."
            />
            <SpotCard
              name="SugarBird"
              type="Restaurant (NEW)"
              url="https://sugarbirdchickenanddonuts.com/"
              address="151 Mazeroski Way, Pittsburgh, PA 15212"
              description="Now open at the Plaza at North Shore (grand opening April 2). Chicken fingers, soft-serve ice cream, donuts, and a full bar. The Plaza is a brand new 30,000 sq ft outdoor venue right next to PNC Park with live music and food. It's going to be packed during the draft, but it's worth the visit."
            />
            <SpotCard
              name="Southern Tier Brewery Pittsburgh"
              type="Brewery & Restaurant"
              url="https://pittsburgh.stbcbeer.com/"
              address="316 N Shore Dr, Pittsburgh, PA 15212"
              description="4-minute walk to PNC Park. Good beer, decent food, dogs allowed on the patio. Not the most exciting spot on this list, but reliable and less chaotic than anything on Federal Street."
            />
            <SpotCard
              name="Federal Galley"
              type="Food Hall"
              url="https://www.federalgalley.org/"
              address="200 Children's Way, Pittsburgh, PA 15212"
              description="Four different restaurants under one roof. This is where you go when your group can't agree on anything. Happy hour Tue-Fri 4:30-6:30pm, half-off drafts and cocktails. Underrated."
            />
            <SpotCard
              name="Mike's Beer Bar"
              type="Beer Bar"
              url="https://mikesbeerbar.com/"
              address="110 Federal St, Pittsburgh, PA 15212"
              description="80 rotating taps and 500+ beers. I've lost count of how many times I've been here before Pirates games. It's a beer nerd's paradise next to PNC Park. Open 11am-midnight daily."
            />
            <SpotCard
              name="City Works Restaurant & Bar"
              type="Restaurant & Bar"
              url="https://www.cityworksrestaurant.com/locations/pittsburgh/"
              address="2 PPG Pl, Pittsburgh, PA 15222"
              description="90 craft beers on tap with an actual full menu (not just bar food). Good for a sit-down meal without making a reservation weeks in advance."
            />
          </div>
          <p className="text-sm font-bold text-muted mt-6 mb-2">Also on the North Shore:</p>
          <div className="grid gap-3">
            <SpotCard
              name="SoHo Pittsburgh"
              type="Bar & Restaurant"
              url="https://sohopittsburgh.com/"
              address="203 Federal St, Pittsburgh, PA 15212"
              description="The original North Shore restaurant. Been around forever. Reliable spot across from PNC Park."
            />
            <SpotCard
              name="Burgatory"
              type="Gourmet Burgers"
              url="https://burgatorybar.com/north-shore"
              address="342 North Shore Dr, Pittsburgh, PA 15212"
              description="Gourmet burgers with creative toppings. Always a wait, especially game days. Draft weekend will be no different."
            />
            <SpotCard
              name="The Foundry Table & Tap"
              type="Gastropub"
              url="https://www.thefoundrypgh.com/"
              address="381 North Shore Dr, Pittsburgh, PA 15212"
              description="Multiple dining concepts under one roof. Good for groups who want options."
            />
            <SpotCard
              name="Hyde Park Prime Steakhouse"
              type="Steakhouse"
              url="https://www.hydeparkrestaurants.com/location/pittsburgh/"
              address="247 North Shore Dr, Pittsburgh, PA 15212"
              description="Upscale steakhouse on the North Shore. Make a reservation now or forget it during draft weekend."
            />
            <SpotCard
              name="Bar Louie"
              type="Gastrobar"
              url="https://barlouie.com/"
              address="330 North Shore Dr, Pittsburgh, PA 15212"
              description="Casual gastrobar with a big menu. Staffing up for draft week."
            />
            <SpotCard
              name="Shorty's Pins x Pints"
              type="Bowling & Bar"
              address="353 North Shore Dr, Pittsburgh, PA 15212"
              description="Bowling lanes, craft drinks, 0.25 miles from Acrisure Stadium. Good for killing time before picks start."
            />
          </div>
          <div className="grid gap-3 mt-3">
            <SpotCard
              name="Voodoo Brewing Co."
              type="Brewery"
              status="closed"
              description="Closed June 2025. You'll still see it on Google Maps but it's gone. The Meadville locations are still open."
            />
            <SpotCard
              name="North Shore Saloon"
              type="Bar"
              status="closed"
              description="Permanently closed. Still shows up in some search results but don't go looking for it."
            />
          </div>
        </section>

        {/* Downtown */}
        <section id="downtown" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl font-heading mb-2">
            Downtown &amp; Near Point State Park
          </h2>
          <p className="text-muted mb-4">
            The Draft Experience (the free fan zone) is at Point State Park.
            Downtown has Pittsburgh's best cocktail bars and upscale dining. Most
            of these are within a 10-minute walk of the park.
          </p>
          <div className="grid gap-3">
            <SpotCard
              name="Gaucho Parrilla Argentina"
              type="Argentine Steakhouse"
              url="https://www.eatgaucho.com/"
              address="146 6th St, Pittsburgh, PA 15222"
              description="Ask anyone in Pittsburgh for their top 3 restaurants and Gaucho comes up every time. Argentine grill in the Strip District, technically a 10-min walk from Point State Park. There will be a wait. Go anyway."
            />
            <SpotCard
              name="Proper Brick Oven and Tap Room"
              type="Pizza & Craft Beer"
              url="https://properpgh.com/"
              address="139 7th St, Pittsburgh, PA 15222"
              description="Good brick oven pizza and a solid beer list. Not trying to be fancy, just trying to be good. Close to Point State Park. You can do a lot worse for $15-20."
            />
            <SpotCard
              name="Butcher and the Rye"
              type="Cocktails & New American"
              url="https://butcherandtherye.com/"
              address="212 6th St, Pittsburgh, PA 15222"
              description="The whiskey menu is overwhelming (in a good way). New American food, cocktails that actually taste like someone cared. Pricier side. Good date spot if you're dragging a partner to the draft. Note: Reopening April 1 after renovation. Confirm before visiting."
            />
            <SpotCard
              name="Bridges & Bourbon"
              type="Cocktail Bar & Restaurant"
              url="https://www.bridgesandbourbonpgh.com/"
              address="930 Penn Ave, Pittsburgh, PA 15222"
              description="Upscale cocktail bar downtown. Feels more grown-up than most of Carson Street. Full menu, not just drinks. If you want a nice night out without the frat energy, this is it."
            />
            <SpotCard
              name="Olive or Twist"
              type="Cocktail Bar & Restaurant"
              url="https://www.olive-twist.com/"
              address="140 6th St, Pittsburgh, PA 15222"
              description="On 6th Street. Strong cocktails, nice atmosphere. They're hosting the YinzerMOB Draft Party on Saturday ($100, 2nd floor). Call ahead because some draft nights may be event-only."
            />
            <SpotCard
              name="The Original Oyster House"
              type="Seafood & Bar"
              url="http://www.originaloysterhousepittsburgh.com/"
              address="20 Market Sq, Pittsburgh, PA 15222"
              description="Oldest restaurant in Pittsburgh, right on Market Square. Tourists love it. Locals have opinions about it. The fish sandwiches are good though, no argument there. Cash only last I checked."
            />
            <SpotCard
              name="Condado Tacos"
              type="Build-Your-Own Tacos"
              url="https://condadotacos.com/"
              address="971 Liberty Ave, Pittsburgh, PA 15222"
              description="Build-your-own tacos on Market Square. It's a chain, but the tacos are $5 each and the margaritas do their job. Quick, cheap, and good for groups who don't want to wait 45 minutes for a table."
            />
            <SpotCard
              name="Eddie Merlot's"
              type="Fine Dining"
              url="https://www.eddiemerlots.com/pittsburgh/"
              address="444 Liberty Ave, Pittsburgh, PA 15222"
              description="Steakhouse. Expensive. They're actively marketing draft-weekend dining on their website, so they clearly want your business. If someone else is paying, go for it."
            />
          </div>
          <p className="text-sm font-bold text-muted mt-6 mb-2">More downtown options:</p>
          <div className="grid gap-3">
            <SpotCard
              name="The Warren Bar and Burrow"
              type="Cocktail Bar"
              url="https://thewarrenpgh.com/"
              address="245 7th St, Pittsburgh, PA 15222"
              description="Craft cocktails in an intimate setting. Cultural District location."
            />
            <SpotCard
              name="Alta Via"
              type="Italian"
              url="https://www.altaviapgh.com/market-square"
              address="2 PPG Pl, Pittsburgh, PA 15222"
              description="Italian at PPG Place. Good pasta, nice atmosphere. Market Square location."
            />
            <SpotCard
              name="Gi-Jin"
              type="Asian Fusion"
              url="https://gi-jin.com/"
              address="208 6th St, Pittsburgh, PA 15222"
              description="Asian fusion between Liberty and Penn. Creative menu, solid cocktails."
            />
            <SpotCard
              name="Vallozzi's"
              type="Italian"
              url="http://vallozzis.com/"
              address="220 5th Ave, Pittsburgh, PA 15222"
              description="Italian restaurant downtown. Reliable, good portions."
            />
            <SpotCard
              name="Puttery"
              type="Mini-Golf Bar"
              url="https://www.puttery.com/locations/pittsburgh/"
              address="1415 Smallman St, Pittsburgh, PA 15222"
              description="Mini-golf bar in the Strip District. Fun for groups who want to do something besides sit at a bar."
            />
            <SpotCard
              name="Ritual House"
              type="Coffee & Cocktails"
              url="https://www.ritualhousepgh.com/"
              address="524 William Penn Pl, Pittsburgh, PA 15219"
              description="Coffee by day, cocktails by night. Inside the Union Trust Building near the Omni William Penn."
            />
          </div>
          <div className="grid gap-3 mt-3">
            <SpotCard
              name="Space Bar"
              type="Molecular Mixology Lounge"
              neighborhood="Market Square"
              status="private"
              url="https://www.spacebarpittsburgh.com/nfl-draft-private-event-inquiry"
              address="416 Market St, Pittsburgh, PA 15222"
              description="Normally a cool cocktail spot on Market Square. During draft weekend, the entire venue is booked for private NFL/corporate events ($18K-$60K buyouts). Not open to the public April 23-25."
            />
          </div>
        </section>

        {/* Strip District */}
        <section id="strip-district" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl font-heading mb-2">
            Strip District (10-Minute Walk, Pittsburgh's Foodie Neighborhood)
          </h2>
          <p className="text-muted mb-4">
            This is where locals eat. It's a 10-15 minute walk from Point State
            Park, and it's worth every step. Saturday morning in the Strip
            District is the quintessential Pittsburgh experience, especially
            since Day 3 of the draft starts at noon.
          </p>
          <div className="grid gap-3">
            <SpotCard
              name="The PA Market"
              type="Food Hall"
              url="https://www.thepamarket.com/"
              address="108 19th St, Pittsburgh, PA 15222"
              description="Two floors of food vendors, cocktail bars, and a wine garden. 14,000 square feet. It feels more European market than American food court. Best food hall in the city, and it's not close."
            />
            <SpotCard
              name="Pamela's Diner"
              type="Diner / Breakfast"
              url="https://pamelasdiner.com/"
              address="60 21st St, Pittsburgh, PA 15222"
              description="The thin, crispy pancakes are famous for a reason. Get here early Saturday before Day 3 of the draft. The line will be insane but it moves fast. Cash is helpful."
            />
            <SpotCard
              name="DiAnoia's Eatery"
              type="Italian"
              url="https://dianoiaseatery.com/"
              address="2549 Penn Ave, Pittsburgh, PA 15222"
              description="Handmade pasta and sandwiches on Penn Ave. This is where Pittsburghers take out-of-town guests when they want to show off. 1,200+ Yelp reviews and they're almost all 5 stars. Go for lunch - dinner waits are brutal."
            />
            <SpotCard
              name="Wigle Whiskey Distillery"
              type="Distillery & Tasting Room"
              url="https://wiglewhiskey.com/"
              address="2401 Smallman St, Pittsburgh, PA 15222"
              description="Local craft whiskey with a tasting room in the Strip. Do the tasting flight, buy a bottle to bring home. It's the kind of thing you can't do in most cities."
            />
            <SpotCard
              name="Bar Marco"
              type="Craft Cocktails & Small Plates"
              url="https://www.barmarcopgh.com/"
              address="2216 Penn Ave, Pittsburgh, PA 15222"
              description="Small, intimate, bartenders who actually know what they're doing. Not cheap, not a sports bar, not a tourist trap. If you want a quiet cocktail away from draft chaos, this is your spot."
            />
            <SpotCard
              name="Novo Asian Food Hall"
              type="Asian Food Hall"
              url="https://novoasianfoodhall.com/"
              address="1931 Smallman St, Pittsburgh, PA 15222"
              description="Sushi, pho, spring rolls from multiple vendors at 1931 Smallman Street. Good variety if your group wants different things. Nothing mindblowing but solid and quick."
            />
          </div>
          <p className="text-sm font-bold text-muted mt-6 mb-2">More in the Strip:</p>
          <div className="grid gap-3">
            <SpotCard
              name="DeLuca's Diner"
              type="Diner / Breakfast"
              url="https://www.delucasinthestrip.com/"
              address="2015 Penn Ave, Pittsburgh, PA 15222"
              description="Another breakfast legend in the Strip. Competes with Pamela's for best pancakes in Pittsburgh."
            />
            <SpotCard
              name="Pennsylvania Macaroni Co."
              type="Specialty Market"
              url="https://www.pennmac.com/"
              address="2010 Penn Ave, Pittsburgh, PA 15222"
              description="Cheese and pasta since 1902. Imported Italian goods. A Strip District institution."
            />
            <SpotCard
              name="Enrico Biscotti"
              type="Bakery"
              url="https://www.enricobiscotti.com/"
              address="2022 Penn Ave, Pittsburgh, PA 15222"
              description="Artisan bakery with European-style breads and pastries. Worth a stop."
            />
            <SpotCard
              name="Kaya"
              type="Caribbean-Inspired"
              url="https://www.kaya.menu/"
              address="2000 Smallman St, Pittsburgh, PA 15222"
              description="Caribbean-inspired food and cocktails. Creative menu, fun vibe."
            />
            <SpotCard
              name="Reyna Foods"
              type="Latin American"
              url="https://www.facebook.com/ReynaFoods/"
              address="2031 Penn Ave, Pittsburgh, PA 15222"
              description="Authentic Latin food in the Strip District. Local favorite for real-deal cuisine."
            />
          </div>
        </section>

        {/* South Side */}
        <section id="south-side" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl font-heading mb-2">
            South Side / Carson Street (80+ Bars, Best Nightlife)
          </h2>
          <p className="text-muted mb-4">
            Carson Street has 80+ bars within 10 blocks. It's 10-15 minutes from
            downtown by car or Uber. This is where draft visitors go after the
            picks end for the night. It's Pittsburgh's party strip, and it's
            going to be absolutely slammed.
          </p>
          <div className="grid gap-3">
            <SpotCard
              name="Hofbrauhaus Pittsburgh"
              type="German Beer Hall"
              url="https://www.hofbrauhauspittsburgh.com/"
              address="2705 S Water St, Pittsburgh, PA 15203"
              description="German beer hall on the waterfront. Big space, live music, liter steins. Touristy? Yeah. Fun? Also yeah. If you've never been to one, go. If you have, you know what you're getting."
            />
            <SpotCard
              name="Pins Mechanical"
              type="Entertainment Bar"
              url="https://www.pinsbar.com/locations/pittsburgh/"
              address="407 Cinema Dr, Pittsburgh, PA 15203"
              description="Pinball, duckpin bowling, craft drinks. Good for groups who want to actually do something instead of just sit at a bar. Gets loud and crowded late night."
            />
            <SpotCard
              name="Jack's Bar"
              type="Bar"
              url="https://maps.google.com/?q=Jack%27s+Bar+1117+Carson+St+Pittsburgh+PA"
              address="1117 E Carson St, Pittsburgh, PA 15203"
              description="Local favorite on Carson Street. Good food, good drinks, good atmosphere. Not trying to be anything it's not. The kind of bar where you end up staying longer than you planned."
            />
            <SpotCard
              name="Acacia"
              type="Cocktail Bar"
              url="https://maps.google.com/?q=Acacia+Pittsburgh+South+Side"
              address="2108 E Carson St, Pittsburgh, PA 15203"
              description="If you want actual cocktails and not a $5 vodka soda in a plastic cup, Acacia is the move on the South Side. More chill than most of Carson Street."
            />
            <SpotCard
              name="Jekyl & Hyde"
              type="Bar"
              url="https://www.jekylandhydepgh.com/"
              address="1712 E Carson St, Pittsburgh, PA 15203"
              description="Fun spot with character. Late-night option after draft sessions. Made Yelp's best bars list recently. Not the place for a quiet conversation."
            />
            <SpotCard
              name="Bar 11"
              type="Bar"
              url="https://maps.google.com/?q=Bar+11+1101+Bradish+St+Pittsburgh+PA"
              address="1101 Bradish St, Pittsburgh, PA 15203"
              description="Slightly off Carson Street on Bradish. Easy to miss, which is part of the appeal. Locals like it because it's not overrun with the Carson Street crowd."
            />
          </div>
          <p className="text-sm font-bold text-muted mt-6 mb-2">More on the South Side:</p>
          <div className="grid gap-3">
            <SpotCard
              name="Tiki Lounge"
              type="Themed Bar"
              url="https://www.tikilounge412.com/"
              address="2003 E Carson St, Pittsburgh, PA 15203"
              description="Themed tiki bar on Carson Street since 2002. Still going strong. Tropical drinks, kitschy decor."
            />
            <SpotCard
              name="Dish Osteria"
              type="Upscale Italian"
              url="https://dishosteria.com/"
              address="128 S 17th St, Pittsburgh, PA 15203"
              description="Upscale Sicilian-Italian just off Carson Street. Nice date spot if you want something fancier."
            />
            <SpotCard
              name="La Palapa"
              type="Mexican"
              url="https://lapalapapgh.com/"
              address="2224 E Carson St, Pittsburgh, PA 15203"
              description="Mexican restaurant with solid margaritas. Good for groups."
            />
            <SpotCard
              name="Club Cafe"
              type="Live Music Venue"
              url="https://www.clubcafelive.com/"
              address="56 S 12th St, Pittsburgh, PA 15203"
              description="Live music venue reopened summer 2025 under new owners. Bar open Mon-Sat from 6 PM. 21+."
            />
            <SpotCard
              name="Smiling Moose"
              type="Dive Bar & Live Music"
              url="https://smiling-moose.com/"
              address="1306 E Carson St, Pittsburgh, PA 15203"
              description="Dive bar with live music and a scratch kitchen. The kind of place where you end up at 2 AM."
            />
          </div>
          <div className="grid gap-3 mt-3">
            <SpotCard
              name="Carson City Saloon"
              type="Sports Bar"
              neighborhood="Carson Street"
              status="closed"
              description="Had temporary closures in 2023 due to South Side safety issues. Now appears permanently closed per Yelp. Don't plan on going here."
            />
          </div>
        </section>

        {/* Breweries */}
        <section id="breweries" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl font-heading mb-2">Breweries Worth the Trip</h2>
          <p className="text-muted mb-4">
            Pittsburgh's craft beer scene is serious. These are slightly outside
            the draft footprint but absolutely worth the Uber ride.
          </p>
          <div className="grid gap-3">
            <SpotCard
              name="Church Brew Works"
              type="Brewery & Restaurant"
              neighborhood="Lawrenceville"
              url="https://churchbrew.com/"
              address="3525 Liberty Ave, Pittsburgh, PA 15201"
              description="A brewery inside a historic church. Brewing tanks where the altar used to be. One of the most unique dining spots in the entire country."
            />
            <SpotCard
              name="Grist House Craft Brewery"
              type="Brewery"
              neighborhood="Lawrenceville"
              url="https://gristhouse.com/"
              address="10 Sherman St, Millvale, PA 15209"
              description="Popular outdoor space with a great patio. If the weather cooperates (and in late April, it might), this is a perfect afternoon spot."
            />
            <SpotCard
              name="Pittsburgh Brewing Company"
              type="Brewery"
              neighborhood="Creighton (25 min from downtown)"
              url="https://pittsburghbrewing.com/"
              address="150 Ferry St, Creighton, PA 15030"
              description="Hosting the 'Official Pittsburgh Draft Watch Party' on April 23. GA $15, VIP $65, Premium VIP $250. Worth the drive if you want to watch picks without the downtown chaos."
            />
            <SpotCard
              name="Dancing Gnome Brewery"
              type="Brewery"
              neighborhood="Lawrenceville"
              url="https://dancinggnomebeer.com/"
              address="1025 Main St, Sharpsburg, PA 15215"
              description="Made Hop Culture's best breweries list. Known for outstanding IPAs. If you're a hop head, don't skip this one."
            />
          </div>
          <p className="text-sm font-bold text-muted mt-6 mb-2">More Lawrenceville breweries:</p>
          <div className="grid gap-3">
            <SpotCard
              name="Hop Farm Brewing"
              type="Brewery"
              neighborhood="Lawrenceville"
              url="https://hopfarmbrewingco.com/"
              address="5601 Butler St, Pittsburgh, PA 15201"
              description="#1 brewery on Yelp. Great beer, great patio."
            />
            <SpotCard
              name="Eleventh Hour Brewing"
              type="Brewery"
              neighborhood="Lawrenceville"
              url="https://www.11thhourbrews.com/"
              address="3711 Charlotte St, Pittsburgh, PA 15201"
              description="Small-batch brewery in Lawrenceville. Rotating taps, chill atmosphere."
            />
            <SpotCard
              name="Coven Brewing"
              type="Brewery"
              neighborhood="Lawrenceville"
              url="https://www.covenbrewingpgh.com/"
              address="4901 Butler St, Pittsburgh, PA 15201"
              description="Craft brewery with rotating food trucks. Good outdoor space."
            />
            <SpotCard
              name="Cinderlands Foederhouse"
              type="Brewery"
              neighborhood="Lawrenceville"
              url="https://www.cinderlands.com/"
              address="3705 Butler St, Pittsburgh, PA 15201"
              description="Belgian-style ales and mixed-fermentation beers. Not your typical brewery."
            />
            <SpotCard
              name="Lolev"
              type="Brewery"
              neighborhood="Lawrenceville"
              url="https://lolev.beer/"
              address="5247 Butler St, Pittsburgh, PA 15201"
              description="Huge space in a former 1912 Ford dealership. One of the best new brewery spaces in the city."
            />
          </div>
        </section>

        {/* Budget Eats */}
        <section id="budget" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl font-heading mb-2">Budget Eats Under $15</h2>
          <p className="text-muted mb-4">
            Not everyone wants to drop $50 on dinner. Here are quick, affordable
            options near the draft venues.
          </p>
          <div className="grid gap-3">
            <SpotCard
              name="Condado Tacos"
              type="Tacos"
              neighborhood="Market Square"
              url="https://condadotacos.com/"
              address="971 Liberty Ave, Pittsburgh, PA 15222"
              description="Build-your-own tacos starting around $5 each. Fill up for $12-15 easy."
            />
            <SpotCard
              name="Pamela's Diner"
              type="Diner"
              neighborhood="Strip District"
              url="https://pamelasdiner.com/"
              address="60 21st St, Pittsburgh, PA 15222"
              description="Breakfast and lunch under $12. Those famous pancakes are $9. Cash is king here."
            />
            <SpotCard
              name="The Yard"
              type="Casual"
              neighborhood="Market Square"
              url="https://www.theyardpgh.com/"
              address="404 Market St, Pittsburgh, PA 15222"
              description="Monster grilled cheese sandwiches and decent draft beer. Filling and affordable."
            />
            <SpotCard
              name="Pizzaiolo Primo"
              type="Pizza"
              neighborhood="Downtown"
              url="https://marketsquare.pizzaioloprimo.com/"
              address="3 Market Sq, Pittsburgh, PA 15222"
              description="Quick pizza near Point State Park. Slices and pies at regular Pittsburgh prices."
            />
            <SpotCard
              name="Peace, Love & Little Donuts"
              type="Donuts"
              neighborhood="Strip District"
              url="https://www.peaceloveandlittledonuts.com/"
              address="2101 Penn Ave, Pittsburgh, PA 15222"
              description="Mini donuts with creative flavors. $5-8 for a box. Instagram-friendly and delicious."
            />
            <SpotCard
              name="Sunseri's"
              type="Italian Deli"
              neighborhood="Strip District"
              url="https://www.sunserisinthestrip.com/"
              address="1906 Penn Ave, Pittsburgh, PA 15222"
              description="Known for bread and pepperoni rolls. Grab-and-go Pittsburgh classic. Under $10."
            />
          </div>
        </section>

        {/* Taste of the Draft */}
        <section id="taste" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl font-heading mb-2">
            Taste of the Draft (Tuesday, April 22)
          </h2>
          <p className="text-muted mb-4">
            The night before the draft kicks off, 20+ restaurants come together
            for the Taste of the Draft at the Tower at PNC Plaza. It's a charity
            food event benefiting GENYOUth (fighting student hunger). Tickets are
            $845 and it's a premium experience.
          </p>
          <div className="card-minimal p-4">
            <p className="font-bold">What you get:</p>
            <ul className="text-sm text-muted mt-2 space-y-1 list-disc pl-5">
              <li>Food from 20+ of Pittsburgh's top restaurants</li>
              <li>Celebrity chef appearances</li>
              <li>NFL player meet-and-greets</li>
              <li>All proceeds fight student hunger through GENYOUth</li>
            </ul>
            <p className="text-sm text-muted mt-3">
              This isn't a casual dinner. It's a high-end fundraiser. If you've
              got the budget and want to rub elbows with NFL folks the night
              before Round 1, it's a unique experience.
            </p>
          </div>
        </section>

        {/* Where Locals Actually Eat */}
        <section id="locals" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl font-heading mb-2">
            Where Locals Actually Eat (Skip Primanti Bros)
          </h2>
          <p className="text-muted mb-4">
            Look, Primanti Bros is fine. It's a Pittsburgh institution. But it's
            also the first thing every tourist guide tells you to eat, and the
            lines during draft weekend will be brutal. Here's where people who
            actually live here go instead.
          </p>
          <div className="grid gap-3">
            <SpotCard
              name="DiAnoia's Eatery"
              type="Italian"
              neighborhood="Strip District"
              url="https://dianoiaseatery.com/"
              address="2549 Penn Ave, Pittsburgh, PA 15222"
              description="This is where Pittsburghers take out-of-town guests when they want to impress them. The pasta is handmade. The sandwiches are perfect."
            />
            <SpotCard
              name="Gaucho Parrilla Argentina"
              type="Argentine Steakhouse"
              neighborhood="Strip District"
              url="https://www.eatgaucho.com/"
              address="146 6th St, Pittsburgh, PA 15222"
              description="Ask any local for their top 5 restaurants. Gaucho is on the list. Every time."
            />
            <SpotCard
              name="Church Brew Works"
              type="Brewery & Restaurant"
              neighborhood="Lawrenceville"
              url="https://churchbrew.com/"
              address="3525 Liberty Ave, Pittsburgh, PA 15201"
              description="Brewing beer inside a converted church. It's the kind of place you tell everyone about when you get home."
            />
            <SpotCard
              name="Bar Marco"
              type="Cocktails & Small Plates"
              neighborhood="Strip District"
              url="https://www.barmarcopgh.com/"
              address="2216 Penn Ave, Pittsburgh, PA 15222"
              description="Small, intimate, outstanding cocktails. Not a tourist trap. The kind of bar where the bartender actually knows what they're doing."
            />
            <SpotCard
              name="Altius"
              type="Fine Dining"
              neighborhood="Mt. Washington"
              url="https://altiuspgh.com/"
              address="1230 Grandview Ave, Pittsburgh, PA 15211"
              description="4.6 stars on TripAdvisor (845 reviews). Contemporary American with the best view in the city. This is where you go for a special night out."
            />
            <SpotCard
              name="Shiloh Gastro"
              type="Restaurant"
              neighborhood="Mt. Washington"
              url="https://www.shilohgastro.com/"
              address="123 Shiloh St, Pittsburgh, PA 15211"
              description="Near the Mon Incline. Not fancy, no view, but great food on a side street. Hidden gem that most visitors never find."
            />
          </div>
          <p className="text-sm text-muted mt-4">
            <strong>Pro tip:</strong> Ride the <a href="https://www.duquesneincline.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Duquesne Incline</a> or <a href="https://monongahelaincline.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Monongahela
            Incline</a> up to Mt. Washington for the best city views in America (USA
            Today said so, not us). Then eat at one of the restaurants up there.
            It's the most Pittsburgh thing you can do, and most draft visitors
            won't think of it.
          </p>
        </section>

        {/* Email capture - after restaurant listings */}
        <EmailCapture />

        {/* Cross-links */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-heading mb-2">
            Plan the rest of your draft weekend
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Now that you know where to eat, figure out when to be where and how
            to get there.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/schedule"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Draft Schedule
            </Link>
            <Link
              href="/parking-transportation"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Parking &amp; Transportation
            </Link>
            <Link
              href="/itinerary"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Day-by-Day Itinerary
            </Link>
          </div>
        </section>
      </article>

      <RelatedPages current="food" slugs={["neighborhoods", "schedule", "getting_around", "itinerary"]} />
    </>
  );
}
