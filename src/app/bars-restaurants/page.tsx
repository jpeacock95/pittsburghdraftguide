import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Where to Eat & Drink: NFL Draft Pittsburgh",
  description:
    "Best restaurants and bars near the NFL Draft in Pittsburgh. North Shore, Strip District, Downtown, and South Side spots organized by neighborhood.",
};

function SpotCard({
  name,
  type,
  neighborhood,
  description,
  url,
}: {
  name: string;
  type: string;
  neighborhood?: string;
  description: string;
  url?: string;
}) {
  return (
    <div className="bg-surface border border-border rounded-lg p-4">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">
          {name}
        </a>
      ) : (
        <p className="font-bold">{name}</p>
      )}
      <p className="text-xs text-muted mt-0.5">
        {type}
        {neighborhood && <> &middot; {neighborhood}</>}
      </p>
      <p className="text-sm text-muted mt-2">{description}</p>
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

      {/* Hero */}
      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Bars &amp; Restaurants
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
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

        <Image
          src="/sports-bar.png"
          alt="Pittsburgh sports bar during draft weekend"
          width={800}
          height={450}
          className="rounded-lg w-full h-auto mb-8"
        />

        {/* North Shore */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
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
              description="Steps from Acrisure Stadium and PNC Park. Massive video walls everywhere. Built for exactly this kind of event. You won't miss a single pick."
            />
            <SpotCard
              name="North Shore Tavern"
              type="Bar & Restaurant"
              url="https://northshoretavern.com/"
              description="Directly across from PNC Park on Federal Street. Laid-back atmosphere, solid food, and it's going to be the epicenter of draft foot traffic."
            />
            <SpotCard
              name="Jason Aldean's Kitchen + Bar"
              type="Country Bar & Restaurant"
              url="https://jasonaldeansbar.com/pittsburgh/"
              description="Country-themed restaurant with outdoor seating and huge video walls. Jason Aldean is performing at Rivers Casino on draft eve, so this place will be packed all weekend."
            />
            <SpotCard
              name="Shorty's Goodtimes Bar"
              type="Bar & Entertainment"
              url="https://www.shortysx.com/"
              description="Retro-gaming bar hosting the official draft after-parties. Steve Aoki on draft eve, Nelly after Day 1, 2 Chainz after Day 2. This is THE nightlife spot of draft weekend."
            />
            <SpotCard
              name="Southern Tier Brewery Pittsburgh"
              type="Brewery & Restaurant"
              url="https://pittsburgh.stbcbeer.com/"
              description="Indoor/outdoor seating, good beer, solid food. Dogs allowed on the patio. 4-minute walk to PNC Park. Great spot to kill time between draft rounds."
            />
            <SpotCard
              name="Federal Galley"
              type="Food Hall"
              url="https://www.federalgalley.org/"
              description="4 restaurant concepts under one roof plus a full bar. Happy hour Tue-Fri 4:30-6:30pm with half-off drafts, cocktails, and wine. Perfect if your group can't agree on what to eat."
            />
            <SpotCard
              name="Mike's Beer Bar"
              type="Beer Bar"
              url="https://mikesbeerbar.com/"
              description="500+ beers and 80 rotating taps. Next to PNC Park. Open daily 11am-midnight. If you're serious about craft beer, this is your spot."
            />
            <SpotCard
              name="City Works Restaurant & Bar"
              type="Restaurant & Bar"
              url="https://www.cityworksrestaurant.com/locations/pittsburgh/"
              description="Modern American menu with 90 craft beers on tap. Lunch, happy hour, dinner, and late night. Beer-forward with real food."
            />
          </div>
          <p className="text-sm text-muted mt-4">
            <strong>Also on the North Shore:</strong> SoHo Pittsburgh (the
            original North Shore restaurant), Burgatory (gourmet burgers), The
            Foundry Table &amp; Tap (multiple dining concepts), Hyde Park Prime
            Steakhouse (upscale), Bar Louie (casual gastrobar), and Shorty's
            Pins x Pints (bowling + drinks, 0.25 mi from Acrisure).
          </p>
        </section>

        {/* Downtown */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
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
              description="4.5 stars on TripAdvisor with 833 reviews. Argentine grill that's consistently rated one of Pittsburgh's best restaurants. Worth the wait."
            />
            <SpotCard
              name="Proper Brick Oven and Tap Room"
              type="Pizza & Craft Beer"
              url="https://properpgh.com/"
              description="4.5 stars on TripAdvisor with 725 reviews. Brick oven pizza and an excellent craft beer selection. Near Point State Park."
            />
            <SpotCard
              name="Butcher and the Rye"
              type="Cocktails & New American"
              url="https://butcherandtherye.com/"
              description="Craft cocktails and a whiskey list that'll make your head spin. New American menu. Popular with foodies and the cocktail crowd."
            />
            <SpotCard
              name="Bridges & Bourbon"
              type="Cocktail Bar & Restaurant"
              url="https://www.bridgesandbourbonpgh.com/"
              description="High-end cocktail bar with a full restaurant menu. Upscale but not stuffy. One of the best bars downtown."
            />
            <SpotCard
              name="Olive or Twist"
              type="Cocktail Bar & Restaurant"
              url="https://www.olive-twist.com/"
              description="Premier cocktail bar on 6th Street. Hosting the YinzerMOB Draft Party on Saturday ($100, 2nd floor). Great drinks any night."
            />
            <SpotCard
              name="The Original Oyster House"
              type="Seafood & Bar"
              url="http://www.originaloysterhousepittsburgh.com/"
              description="The oldest restaurant in Pittsburgh, right on Market Square. A landmark. Tourists love it, and honestly, the fish sandwiches are legit."
            />
            <SpotCard
              name="Condado Tacos"
              type="Build-Your-Own Tacos"
              url="https://condadotacos.com/"
              description="Market Square location. Build your own tacos, solid margaritas. Casual, affordable, and great for groups."
            />
            <SpotCard
              name="Eddie Merlot's"
              type="Fine Dining"
              url="https://www.eddiemerlots.com/pittsburgh/"
              description="Prime aged beef and seafood. They've built dedicated NFL Draft landing pages on their website. They're ready for you."
            />
          </div>
          <p className="text-sm text-muted mt-4">
            <strong>More downtown options:</strong> The Warren Bar and Burrow
            (craft cocktails), Alta Via at Market Square (Italian), Gi-Jin
            (Asian fusion), Vallozzi's (Italian), Puttery (mini-golf bar),
            Ritual House (near Omni William Penn Hotel), The Yard (monster
            grilled cheese), and Pizzaiolo Primo (quick pizza).
          </p>
        </section>

        {/* Strip District */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
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
              description="European-inspired market on two floors. Cocktail bars, food vendors, wine garden. 14,000 square feet. This is Pittsburgh's best food hall experience."
            />
            <SpotCard
              name="Pamela's Diner"
              type="Diner / Breakfast"
              url="https://pamelasdiner.com/"
              description="#1 on TripAdvisor for the Strip District with 1,029 reviews. Famous for thin, crispy pancakes. Pittsburgh's favorite diner. Expect a long line draft weekend."
            />
            <SpotCard
              name="DiAnoia's Eatery"
              type="Italian"
              url="https://dianoiaseatery.com/"
              description="1,200+ Yelp reviews. Italian market and restaurant on Penn Ave. One of the best Italian spots in the city. Fresh pasta, incredible sandwiches."
            />
            <SpotCard
              name="Wigle Whiskey Distillery"
              type="Distillery & Tasting Room"
              url="https://wiglewhiskey.com/"
              description="Local craft whiskey with a tasting room right in the Strip. A unique Pittsburgh experience you won't get anywhere else."
            />
            <SpotCard
              name="Bar Marco"
              type="Craft Cocktails & Small Plates"
              url="https://www.barmarcopgh.com/"
              description="Some of the best bartenders in the city. Small plates, craft cocktails, and a vibe that feels more Brooklyn than Pittsburgh. In the best way."
            />
            <SpotCard
              name="Novo Asian Food Hall"
              type="Asian Food Hall"
              url="https://novoasianfoodhall.com/"
              description="Sushi, pho, spring rolls, pancit from multiple vendors. Great variety under one roof at 1931 Smallman Street."
            />
          </div>
          <p className="text-sm text-muted mt-4">
            <strong>More in the Strip:</strong> DeLuca's Diner (another
            breakfast legend), Pennsylvania Macaroni Co. (cheese and pasta since
            1902), Sunseri's (bread and pepperoni rolls), Enrico Biscotti
            (artisan bakery), Kaya (Caribbean-inspired), Peace Love &amp; Little
            Donuts (mini donuts), and Reyna Foods (authentic Latin).
          </p>
        </section>

        {/* South Side */}
        <Image
          src="/south-side.png"
          alt="South Side Carson Street nightlife in Pittsburgh"
          width={800}
          height={450}
          className="rounded-lg w-full h-auto mb-8"
        />
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
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
              description="Authentic German beer hall with live music. Huge space, great food, and an experience that out-of-towners love. Expect a wait but it's worth it."
            />
            <SpotCard
              name="Pins Mechanical"
              type="Entertainment Bar"
              url="https://www.pinsbar.com/locations/pittsburgh/"
              description="Pinball, duckpin bowling, and craft drinks. Fun group activity that isn't just sitting at a bar. Good for larger groups."
            />
            <SpotCard
              name="Jack's Bar"
              type="Bar"
              url="https://jacksbar.shop/"
              description="#1 on TripAdvisor for South Side bars. 'Best bar in all of the Southside flats.' Great atmosphere, solid food, good drinks. A local favorite."
            />
            <SpotCard
              name="Acacia"
              type="Cocktail Bar"
              url="https://acaciacocktails.com/"
              description="Craft cocktails and a more upscale vibe than most of Carson Street. If you want good drinks without the college bar energy, this is it."
            />
            <SpotCard
              name="Jekyl & Hyde"
              type="Bar"
              url="https://www.jekylandhydepgh.com/"
              description="Made Yelp's best bars list for March 2026. Fun spot with character. Late-night option after draft sessions."
            />
            <SpotCard
              name="Bar 11"
              type="Bar"
              url="https://maps.google.com/?q=Bar+11+1101+Bradish+St+Pittsburgh+PA"
              description="Slightly off the main Carson Street strip on Bradish. 'Favorite place we visited,' says Discover the Burgh. A hidden gem."
            />
          </div>
          <p className="text-sm text-muted mt-4">
            <strong>More on the South Side:</strong> Tiki Lounge (themed tiki
            bar since 2002), The Library on Carson (themed bar), Dish (upscale
            dining), La Palapa (Mexican), Carson City Saloon (sports bar), Club
            Cafe (live music), and Linx (Pittsburgh's newest nightspot).
          </p>
        </section>

        {/* Breweries */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Breweries Worth the Trip</h2>
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
              description="A brewery inside a historic church. Brewing tanks where the altar used to be. One of the most unique dining spots in the entire country."
            />
            <SpotCard
              name="Grist House Craft Brewery"
              type="Brewery"
              neighborhood="Lawrenceville"
              url="https://gristhouse.com/"
              description="Popular outdoor space with a great patio. If the weather cooperates (and in late April, it might), this is a perfect afternoon spot."
            />
            <SpotCard
              name="Pittsburgh Brewing Company"
              type="Brewery"
              neighborhood="Creighton (25 min from downtown)"
              url="https://pittsburghbrewing.com/"
              description="Hosting the 'Official Pittsburgh Draft Watch Party' on April 23. GA $15, VIP $65, Premium VIP $250. Worth the drive if you want to watch picks without the downtown chaos."
            />
            <SpotCard
              name="Dancing Gnome Brewery"
              type="Brewery"
              neighborhood="Lawrenceville"
              url="https://dancinggnomebeer.com/"
              description="Made Hop Culture's best breweries list. Known for outstanding IPAs. If you're a hop head, don't skip this one."
            />
          </div>
          <p className="text-sm text-muted mt-4">
            <strong>More Lawrenceville breweries:</strong> Hop Farm Brewing
            (#1 on Yelp), Eleventh Hour Brewing, Coven Brewing, Cinderlands
            Foederhouse (Belgian-style), and Lolev (huge space in a former car
            dealership).
          </p>
        </section>

        {/* Budget Eats */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Budget Eats Under $15</h2>
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
              description="Build-your-own tacos starting around $5 each. Fill up for $12-15 easy."
            />
            <SpotCard
              name="Pamela's Diner"
              type="Diner"
              neighborhood="Strip District"
              url="https://pamelasdiner.com/"
              description="Breakfast and lunch under $12. Those famous pancakes are $9. Cash is king here."
            />
            <SpotCard
              name="The Yard"
              type="Casual"
              neighborhood="Market Square"
              url="https://www.theyardpgh.com/"
              description="Monster grilled cheese sandwiches and decent draft beer. Filling and affordable."
            />
            <SpotCard
              name="Pizzaiolo Primo"
              type="Pizza"
              neighborhood="Downtown"
              url="https://marketsquare.pizzaioloprimo.com/"
              description="Quick pizza near Point State Park. Slices and pies at regular Pittsburgh prices."
            />
            <SpotCard
              name="Peace, Love & Little Donuts"
              type="Donuts"
              neighborhood="Strip District"
              url="https://www.peaceloveandlittledonuts.com/"
              description="Mini donuts with creative flavors. $5-8 for a box. Instagram-friendly and delicious."
            />
            <SpotCard
              name="Sunseri's"
              type="Italian Deli"
              neighborhood="Strip District"
              url="https://www.sunserisinthestrip.com/"
              description="Known for bread and pepperoni rolls. Grab-and-go Pittsburgh classic. Under $10."
            />
          </div>
        </section>

        {/* Taste of the Draft */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
            Taste of the Draft (Tuesday, April 22)
          </h2>
          <p className="text-muted mb-4">
            The night before the draft kicks off, 20+ restaurants come together
            for the Taste of the Draft at the Tower at PNC Plaza. It's a charity
            food event benefiting GENYOUth (fighting student hunger). Tickets are
            $845 and it's a premium experience.
          </p>
          <div className="bg-surface border border-border rounded-lg p-4">
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
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
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
              description="This is where Pittsburghers take out-of-town guests when they want to impress them. The pasta is handmade. The sandwiches are perfect."
            />
            <SpotCard
              name="Gaucho Parrilla Argentina"
              type="Argentine Steakhouse"
              neighborhood="Strip District"
              url="https://www.eatgaucho.com/"
              description="Ask any local for their top 5 restaurants. Gaucho is on the list. Every time."
            />
            <SpotCard
              name="Church Brew Works"
              type="Brewery & Restaurant"
              neighborhood="Lawrenceville"
              url="https://churchbrew.com/"
              description="Brewing beer inside a converted church. It's the kind of place you tell everyone about when you get home."
            />
            <SpotCard
              name="Bar Marco"
              type="Cocktails & Small Plates"
              neighborhood="Strip District"
              url="https://www.barmarcopgh.com/"
              description="Small, intimate, outstanding cocktails. Not a tourist trap. The kind of bar where the bartender actually knows what they're doing."
            />
            <SpotCard
              name="Altius"
              type="Fine Dining"
              neighborhood="Mt. Washington"
              url="https://altiuspgh.com/"
              description="4.6 stars on TripAdvisor (845 reviews). Contemporary American with the best view in the city. This is where you go for a special night out."
            />
            <SpotCard
              name="Shiloh Gastro"
              type="Restaurant"
              neighborhood="Mt. Washington"
              url="https://www.shilohgastro.com/"
              description="Near the Mon Incline. Not fancy, no view, but great food on a side street. Hidden gem that most visitors never find."
            />
          </div>
          <p className="text-sm text-muted mt-4">
            <strong>Pro tip:</strong> Ride the Duquesne Incline or Monongahela
            Incline up to Mt. Washington for the best city views in America (USA
            Today said so, not us). Then eat at one of the restaurants up there.
            It's the most Pittsburgh thing you can do, and most draft visitors
            won't think of it.
          </p>
        </section>

        {/* Cross-links */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-2">
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
    </>
  );
}
