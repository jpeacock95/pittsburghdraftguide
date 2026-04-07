export interface SearchEntry {
  title: string;
  href: string;
  keywords: string;
  snippet: string;
  category?: string;
}

export const searchIndex: SearchEntry[] = [
  // ==========================================
  // BARS & RESTAURANTS - North Shore
  // ==========================================
  {
    title: "Tom's Watch Bar",
    href: "/bars-restaurants#north-shore",
    keywords: "toms watch bar sports bar north shore draft",
    snippet: "Sports bar right on the North Shore, walking distance from the draft stage.",
    category: "Restaurant / Bar",
  },
  {
    title: "North Shore Tavern",
    href: "/bars-restaurants#north-shore",
    keywords: "north shore tavern bar restaurant",
    snippet: "Bar and restaurant on the North Shore near Acrisure Stadium.",
    category: "Restaurant / Bar",
  },
  {
    title: "Jason Aldean's Kitchen + Bar",
    href: "/bars-restaurants#north-shore",
    keywords: "jason aldean kitchen bar country north shore",
    snippet: "Country bar and restaurant on the North Shore.",
    category: "Restaurant / Bar",
  },
  {
    title: "Shorty's Goodtimes Bar",
    href: "/bars-restaurants#north-shore",
    keywords: "shortys goodtimes bar entertainment north shore after party",
    snippet: "Bar and entertainment venue on the North Shore. After-party spot.",
    category: "Restaurant / Bar",
  },
  {
    title: "SugarBird",
    href: "/bars-restaurants#north-shore",
    keywords: "sugarbird restaurant north shore new",
    snippet: "New restaurant on the North Shore.",
    category: "Restaurant / Bar",
  },
  {
    title: "Southern Tier Brewery Pittsburgh",
    href: "/bars-restaurants#north-shore",
    keywords: "southern tier brewery north shore beer",
    snippet: "Brewery and restaurant on the North Shore.",
    category: "Restaurant / Bar",
  },
  {
    title: "Federal Galley",
    href: "/bars-restaurants#north-shore",
    keywords: "federal galley food hall north shore",
    snippet: "Food hall on the North Shore with multiple vendors.",
    category: "Restaurant / Bar",
  },
  {
    title: "Mike's Beer Bar",
    href: "/bars-restaurants#north-shore",
    keywords: "mikes beer bar north shore craft",
    snippet: "Beer bar on the North Shore.",
    category: "Restaurant / Bar",
  },
  {
    title: "City Works Restaurant & Bar",
    href: "/bars-restaurants#north-shore",
    keywords: "city works restaurant bar north shore",
    snippet: "Restaurant and bar on the North Shore.",
    category: "Restaurant / Bar",
  },
  {
    title: "Voodoo Brewing Co. (Permanently Closed)",
    href: "/bars-restaurants#north-shore",
    keywords: "voodoo brewing closed north shore brewery",
    snippet: "Permanently closed. Still shows on Google Maps but it's gone.",
    category: "Closed",
  },
  {
    title: "North Shore Saloon (Permanently Closed)",
    href: "/bars-restaurants#north-shore",
    keywords: "north shore saloon closed bar",
    snippet: "Permanently closed. Still shows in some search results.",
    category: "Closed",
  },
  // ==========================================
  // BARS & RESTAURANTS - Downtown
  // ==========================================
  {
    title: "Gaucho Parrilla Argentina",
    href: "/bars-restaurants#downtown",
    keywords: "gaucho parrilla argentina steakhouse downtown steak",
    snippet: "Argentine steakhouse downtown.",
    category: "Restaurant / Bar",
  },
  {
    title: "Proper Brick Oven and Tap Room",
    href: "/bars-restaurants#downtown",
    keywords: "proper brick oven tap room pizza craft beer downtown",
    snippet: "Pizza and craft beer downtown.",
    category: "Restaurant / Bar",
  },
  {
    title: "Butcher and the Rye",
    href: "/bars-restaurants#downtown",
    keywords: "butcher rye cocktails american downtown whiskey",
    snippet: "Cocktails and New American food downtown.",
    category: "Restaurant / Bar",
  },
  {
    title: "Bridges & Bourbon",
    href: "/bars-restaurants#downtown",
    keywords: "bridges bourbon cocktail bar downtown whiskey",
    snippet: "Cocktail bar and restaurant downtown.",
    category: "Restaurant / Bar",
  },
  {
    title: "Olive or Twist",
    href: "/bars-restaurants#downtown",
    keywords: "olive twist cocktail bar downtown",
    snippet: "Cocktail bar and restaurant downtown.",
    category: "Restaurant / Bar",
  },
  {
    title: "The Original Oyster House",
    href: "/bars-restaurants#downtown",
    keywords: "original oyster house seafood bar downtown market square",
    snippet: "Seafood and bar in Market Square. A Pittsburgh institution.",
    category: "Restaurant / Bar",
  },
  {
    title: "Condado Tacos",
    href: "/bars-restaurants#downtown",
    keywords: "condado tacos build your own market square downtown cheap",
    snippet: "Build-your-own tacos in Market Square. Budget-friendly.",
    category: "Restaurant / Bar",
  },
  {
    title: "Eddie Merlot's",
    href: "/bars-restaurants#downtown",
    keywords: "eddie merlots fine dining downtown steak",
    snippet: "Fine dining downtown.",
    category: "Restaurant / Bar",
  },
  {
    title: "Space Bar (Private Events Only)",
    href: "/bars-restaurants#downtown",
    keywords: "space bar market square private events cocktail molecular",
    snippet: "Booked for private NFL/corporate events during draft weekend. Not open to the public April 23-25.",
    category: "Private Event",
  },
  // ==========================================
  // BARS & RESTAURANTS - Strip District
  // ==========================================
  {
    title: "The PA Market",
    href: "/bars-restaurants#strip-district",
    keywords: "pa market food hall strip district",
    snippet: "Food hall in the Strip District.",
    category: "Restaurant / Bar",
  },
  {
    title: "Pamela's Diner",
    href: "/bars-restaurants#strip-district",
    keywords: "pamelas diner breakfast strip district pancakes crepes",
    snippet: "Famous diner in the Strip District. Known for crepe-style pancakes.",
    category: "Restaurant / Bar",
  },
  {
    title: "DiAnoia's Eatery",
    href: "/bars-restaurants#strip-district",
    keywords: "dianoias eatery italian strip district pasta",
    snippet: "Italian restaurant in the Strip District. Where locals actually eat.",
    category: "Restaurant / Bar",
  },
  {
    title: "Wigle Whiskey Distillery",
    href: "/bars-restaurants#strip-district",
    keywords: "wigle whiskey distillery tasting room strip district",
    snippet: "Distillery and tasting room in the Strip District.",
    category: "Restaurant / Bar",
  },
  {
    title: "Bar Marco",
    href: "/bars-restaurants#strip-district",
    keywords: "bar marco craft cocktails small plates strip district",
    snippet: "Craft cocktails and small plates in the Strip District.",
    category: "Restaurant / Bar",
  },
  {
    title: "Novo Asian Food Hall",
    href: "/bars-restaurants#strip-district",
    keywords: "novo asian food hall strip district",
    snippet: "Asian food hall in the Strip District.",
    category: "Restaurant / Bar",
  },
  // ==========================================
  // BARS & RESTAURANTS - South Side
  // ==========================================
  {
    title: "Hofbrauhaus Pittsburgh",
    href: "/bars-restaurants#south-side",
    keywords: "hofbrauhaus german beer hall south side carson street",
    snippet: "German beer hall on the South Side.",
    category: "Restaurant / Bar",
  },
  {
    title: "Pins Mechanical",
    href: "/bars-restaurants#south-side",
    keywords: "pins mechanical entertainment bar south side games pinball",
    snippet: "Entertainment bar on the South Side. Pinball, games, drinks.",
    category: "Restaurant / Bar",
  },
  {
    title: "Jack's Bar",
    href: "/bars-restaurants#south-side",
    keywords: "jacks bar south side carson street",
    snippet: "Bar on the South Side.",
    category: "Restaurant / Bar",
  },
  {
    title: "Acacia",
    href: "/bars-restaurants#south-side",
    keywords: "acacia cocktail bar south side",
    snippet: "Cocktail bar on the South Side.",
    category: "Restaurant / Bar",
  },
  {
    title: "Jekyl & Hyde",
    href: "/bars-restaurants#south-side",
    keywords: "jekyl hyde bar south side carson street",
    snippet: "Bar on the South Side.",
    category: "Restaurant / Bar",
  },
  {
    title: "Bar 11",
    href: "/bars-restaurants#south-side",
    keywords: "bar 11 south side",
    snippet: "Bar on the South Side.",
    category: "Restaurant / Bar",
  },
  {
    title: "Carson City Saloon (Permanently Closed)",
    href: "/bars-restaurants#south-side",
    keywords: "carson city saloon closed south side sports bar",
    snippet: "Permanently closed. Don't plan on going here.",
    category: "Closed",
  },
  // ==========================================
  // BARS & RESTAURANTS - Breweries
  // ==========================================
  {
    title: "Church Brew Works",
    href: "/bars-restaurants#breweries",
    keywords: "church brew works brewery restaurant lawrenceville church converted",
    snippet: "Brewery in a converted church in Lawrenceville.",
    category: "Brewery",
  },
  {
    title: "Grist House Craft Brewery",
    href: "/bars-restaurants#breweries",
    keywords: "grist house craft brewery lawrenceville",
    snippet: "Craft brewery in Lawrenceville.",
    category: "Brewery",
  },
  {
    title: "Pittsburgh Brewing Company",
    href: "/bars-restaurants#breweries",
    keywords: "pittsburgh brewing company iron city beer creighton",
    snippet: "Home of Iron City Beer. 25 min from downtown in Creighton.",
    category: "Brewery",
  },
  {
    title: "Dancing Gnome Brewery",
    href: "/bars-restaurants#breweries",
    keywords: "dancing gnome brewery lawrenceville ipa",
    snippet: "Brewery in Lawrenceville.",
    category: "Brewery",
  },
  // ==========================================
  // BARS & RESTAURANTS - Budget Eats
  // ==========================================
  {
    title: "Pizzaiolo Primo",
    href: "/bars-restaurants#budget",
    keywords: "pizzaiolo primo pizza downtown cheap budget",
    snippet: "Budget pizza downtown.",
    category: "Budget Eats",
  },
  {
    title: "Peace, Love & Little Donuts",
    href: "/bars-restaurants#budget",
    keywords: "peace love little donuts strip district snack",
    snippet: "Donuts in the Strip District.",
    category: "Budget Eats",
  },
  {
    title: "Sunseri's",
    href: "/bars-restaurants#budget",
    keywords: "sunseris italian deli strip district sandwich",
    snippet: "Italian deli in the Strip District.",
    category: "Budget Eats",
  },
  {
    title: "The Yard",
    href: "/bars-restaurants#budget",
    keywords: "the yard casual market square budget",
    snippet: "Casual spot in Market Square. Budget-friendly.",
    category: "Budget Eats",
  },
  {
    title: "Primanti Bros",
    href: "/bars-restaurants#locals",
    keywords: "primanti bros sandwich pittsburgh famous coleslaw fries",
    snippet: "Famous Pittsburgh sandwich shop. Locals say it's overrated but you have to try it once.",
    category: "Restaurant / Bar",
  },
  // ==========================================
  // BARS & RESTAURANTS - Where Locals Eat
  // ==========================================
  {
    title: "Altius",
    href: "/bars-restaurants#locals",
    keywords: "altius fine dining mt washington view",
    snippet: "Fine dining on Mt. Washington with the best view in Pittsburgh.",
    category: "Restaurant / Bar",
  },
  {
    title: "Shiloh Gastro",
    href: "/bars-restaurants#locals",
    keywords: "shiloh gastro mt washington restaurant",
    snippet: "Restaurant on Mt. Washington.",
    category: "Restaurant / Bar",
  },
  // ==========================================
  // BARS & RESTAURANTS - Taste of the Draft
  // ==========================================
  {
    title: "Taste of the Draft",
    href: "/bars-restaurants#taste",
    keywords: "taste of the draft charity event tower pnc plaza april 22 food tasting",
    snippet: "Charity food tasting event at Tower at PNC Plaza on April 22. $845/person.",
    category: "Event",
  },
  // ==========================================
  // WHERE TO STAY - Downtown Hotels
  // ==========================================
  {
    title: "Omni William Penn Hotel",
    href: "/where-to-stay#downtown-hotels",
    keywords: "omni william penn hotel downtown luxury expensive",
    snippet: "Luxury hotel downtown. $600-1,200+/night during draft weekend.",
    category: "Hotel",
  },
  {
    title: "Fairmont Pittsburgh",
    href: "/where-to-stay#downtown-hotels",
    keywords: "fairmont pittsburgh hotel downtown luxury",
    snippet: "Luxury hotel downtown. $700-1,500+/night during draft weekend.",
    category: "Hotel",
  },
  {
    title: "Drury Plaza Hotel",
    href: "/where-to-stay#downtown-hotels",
    keywords: "drury plaza hotel downtown",
    snippet: "Downtown hotel. $500+/night during draft weekend.",
    category: "Hotel",
  },
  // ==========================================
  // WHERE TO STAY - North Shore Hotels
  // ==========================================
  {
    title: "SpringHill Suites North Shore",
    href: "/where-to-stay#north-shore-hotels",
    keywords: "springhill suites north shore hotel marriott",
    snippet: "Hotel on the North Shore walking distance to Acrisure Stadium.",
    category: "Hotel",
  },
  {
    title: "Hyatt Place North Shore",
    href: "/where-to-stay#north-shore-hotels",
    keywords: "hyatt place north shore hotel",
    snippet: "Hotel on the North Shore. $800-1,500+/night during draft.",
    category: "Hotel",
  },
  {
    title: "The Landing Hotel at Rivers Casino",
    href: "/where-to-stay#north-shore-hotels",
    keywords: "landing hotel rivers casino north shore gambling",
    snippet: "Hotel at Rivers Casino on the North Shore. $400+/night.",
    category: "Hotel",
  },
  // ==========================================
  // WHERE TO STAY - T Line Hotels
  // ==========================================
  {
    title: "Sheraton at Station Square",
    href: "/where-to-stay#t-line-hotels",
    keywords: "sheraton station square hotel t line south shore",
    snippet: "Hotel at Station Square on the T Line. $300-500+/night.",
    category: "Hotel",
  },
  {
    title: "Hotels near South Hills Village T Station",
    href: "/where-to-stay#t-line-hotels",
    keywords: "south hills village hotel t line station park ride",
    snippet: "Hotels near the South Hills Village T Station. $150-250/night. Ride the T for free.",
    category: "Hotel",
  },
  // ==========================================
  // WHERE TO STAY - McKnight Road
  // ==========================================
  {
    title: "Red Roof Inn McKnight Road",
    href: "/where-to-stay#mcknight-road",
    keywords: "red roof inn mcknight road budget cheap hotel",
    snippet: "Budget hotel on McKnight Road. $80-120/night.",
    category: "Hotel",
  },
  {
    title: "Hampton Inn McKnight Road",
    href: "/where-to-stay#mcknight-road",
    keywords: "hampton inn mcknight road hotel",
    snippet: "Hotel on McKnight Road. $120-180/night.",
    category: "Hotel",
  },
  // ==========================================
  // WHERE TO STAY - Cranberry Township
  // ==========================================
  {
    title: "Hampton Inn Cranberry",
    href: "/where-to-stay#cranberry-township",
    keywords: "hampton inn cranberry township hotel",
    snippet: "Hotel in Cranberry Township. $120-160/night. 30-45 min from downtown.",
    category: "Hotel",
  },
  {
    title: "Courtyard by Marriott Cranberry",
    href: "/where-to-stay#cranberry-township",
    keywords: "courtyard marriott cranberry township hotel",
    snippet: "Hotel in Cranberry Township. $92-180/night.",
    category: "Hotel",
  },
  {
    title: "Hilton Garden Inn Cranberry",
    href: "/where-to-stay#cranberry-township",
    keywords: "hilton garden inn cranberry township hotel",
    snippet: "Hotel in Cranberry Township. $130-180/night.",
    category: "Hotel",
  },
  {
    title: "Home2 Suites Cranberry",
    href: "/where-to-stay#cranberry-township",
    keywords: "home2 suites hilton cranberry township hotel",
    snippet: "Extended stay hotel in Cranberry Township. $130-170/night.",
    category: "Hotel",
  },
  {
    title: "Best Western Cranberry",
    href: "/where-to-stay#cranberry-township",
    keywords: "best western cranberry township hotel budget",
    snippet: "Budget hotel in Cranberry Township. $100-150/night.",
    category: "Hotel",
  },
  // ==========================================
  // WHERE TO STAY - Airbnb
  // ==========================================
  {
    title: "Airbnb & VRBO Options",
    href: "/where-to-stay#airbnb-vrbo",
    keywords: "airbnb vrbo rental short term stay house apartment",
    snippet: "Whole-house rentals for groups. Suburban options can save money.",
    category: "Accommodation",
  },
  // ==========================================
  // THINGS TO DO - Attractions
  // ==========================================
  {
    title: "NFL Draft Experience (Free Fan Zone)",
    href: "/things-to-do#draft-experience",
    keywords: "draft experience fan zone point state park free games 40 yard dash field goal",
    snippet: "Free fan zone at Point State Park. 40-yard dash, field goal challenge, autographs, team displays.",
    category: "Attraction",
  },
  {
    title: "Draft Stage Concerts",
    href: "/things-to-do#concerts",
    keywords: "concert music steve aoki 2 chainz nelly wiz khalifa bret michaels kane brown kels live performance free $43 $46 plaza",
    snippet: "Free: Wiz Khalifa + Bret Michaels (Fri), Kane Brown (Sat). Ticketed at Plaza: Nelly ($43 Wed), Steve Aoki ($43 Thu), 2 Chainz ($46 Sat).",
    category: "Event",
  },
  {
    title: "Drone Show",
    href: "/things-to-do#concerts",
    keywords: "drone show light display night sky",
    snippet: "Drone light show after Day 2 of the draft.",
    category: "Event",
  },
  {
    title: "PicksBURGH 5K",
    href: "/things-to-do#5k-race",
    keywords: "picksburgh 5k race run saturday morning p3r north shore 16th street bridge point state park medal virtual",
    snippet: "Saturday 8 AM 5K race by P3R. North Shore to Point State Park via 16th Street Bridge. Commemorative shirt and medal. Virtual option available.",
    category: "Event",
  },
  {
    title: "Duquesne Incline",
    href: "/things-to-do#attractions",
    keywords: "duquesne incline mt washington view funicular trolley overlook",
    snippet: "Historic incline railway to Mt. Washington. Best view of Pittsburgh.",
    category: "Attraction",
  },
  {
    title: "Monongahela Incline",
    href: "/things-to-do#attractions",
    keywords: "monongahela incline mt washington funicular trolley",
    snippet: "Historic incline railway to Mt. Washington.",
    category: "Attraction",
  },
  {
    title: "Carnegie Science Center",
    href: "/things-to-do#attractions",
    keywords: "carnegie science center museum north shore kids family",
    snippet: "Science museum on the North Shore. Great for families.",
    category: "Attraction",
  },
  {
    title: "Andy Warhol Museum",
    href: "/things-to-do#attractions",
    keywords: "andy warhol museum art north shore",
    snippet: "Art museum on the North Shore dedicated to Andy Warhol.",
    category: "Attraction",
  },
  {
    title: "Phipps Conservatory",
    href: "/things-to-do#attractions",
    keywords: "phipps conservatory botanical garden oakland flowers",
    snippet: "Botanical garden in Oakland.",
    category: "Attraction",
  },
  {
    title: "National Aviary (Closed Thu-Fri)",
    href: "/things-to-do#attractions",
    keywords: "national aviary birds zoo north shore closed thursday friday",
    snippet: "Bird zoo on the North Shore. CLOSED Thursday and Friday during draft week.",
    category: "Attraction",
  },
  {
    title: "Steelers Hall of Honor Museum",
    href: "/things-to-do#attractions",
    keywords: "steelers hall honor museum football acrisure stadium",
    snippet: "Steelers museum at Acrisure Stadium.",
    category: "Attraction",
  },
  {
    title: "Randyland",
    href: "/things-to-do#attractions",
    keywords: "randyland art colorful free north side",
    snippet: "Free colorful outdoor art installation on the North Side.",
    category: "Attraction",
  },
  {
    title: "Cathedral of Learning",
    href: "/things-to-do#attractions",
    keywords: "cathedral learning university pittsburgh oakland tower",
    snippet: "Iconic tower at the University of Pittsburgh in Oakland.",
    category: "Attraction",
  },
  {
    title: "Kennywood",
    href: "/things-to-do#family-friendly",
    keywords: "kennywood amusement park rides roller coaster family kids",
    snippet: "Amusement park opening the same weekend as the draft.",
    category: "Attraction",
  },
  {
    title: "Children's Museum of Pittsburgh",
    href: "/things-to-do#family-friendly",
    keywords: "childrens museum pittsburgh kids family north shore",
    snippet: "Children's museum on the North Shore.",
    category: "Attraction",
  },
  {
    title: "Pittsburgh Zoo & Aquarium",
    href: "/things-to-do#family-friendly",
    keywords: "pittsburgh zoo aquarium animals kids family",
    snippet: "Zoo and aquarium about 7 miles from downtown.",
    category: "Attraction",
  },
  {
    title: "Gateway Clipper",
    href: "/things-to-do#non-football",
    keywords: "gateway clipper river cruise boat ferry three rivers",
    snippet: "River cruise on the three rivers.",
    category: "Attraction",
  },
  {
    title: "Mattress Factory",
    href: "/things-to-do#non-football",
    keywords: "mattress factory art museum contemporary north side",
    snippet: "Contemporary art museum on the North Side.",
    category: "Attraction",
  },
  // ==========================================
  // GETTING AROUND
  // ==========================================
  {
    title: "T Light Rail (Free Rides April 23-25)",
    href: "/getting-around#t-light-rail",
    keywords: "t light rail free ride transit train sheetz prt subway",
    snippet: "ALL T rides are free April 23-25. Sponsored by Sheetz and PRT.",
    category: "Transportation",
  },
  {
    title: "Football Flyer Bus Routes",
    href: "/getting-around#bus-routes",
    keywords: "football flyer bus prt route shuttle",
    snippet: "Special bus routes running during draft weekend.",
    category: "Transportation",
  },
  {
    title: "Walking Between Venues",
    href: "/getting-around#walking",
    keywords: "walk walking route roberto clemente bridge between venues distance",
    snippet: "Walking routes between Point State Park and Acrisure Stadium.",
    category: "Transportation",
  },
  {
    title: "Roberto Clemente Bridge",
    href: "/getting-around#bridges",
    keywords: "roberto clemente bridge 6th street pedestrian walking closed",
    snippet: "Closed to vehicles but open for pedestrians. Key walking route between draft venues.",
    category: "Transportation",
  },
  {
    title: "Uber & Lyft Tips",
    href: "/getting-around#rideshare",
    keywords: "uber lyft rideshare surge pricing tip",
    snippet: "Rideshare tips and surge pricing warnings for draft weekend.",
    category: "Transportation",
  },
  {
    title: "Gateway Clipper River Ferry",
    href: "/getting-around#river-ferry",
    keywords: "gateway clipper river ferry boat water taxi",
    snippet: "River ferry service during draft weekend.",
    category: "Transportation",
  },
  // ==========================================
  // PARKING & TRANSPORTATION
  // ==========================================
  {
    title: "Park-and-Ride Locations",
    href: "/parking-transportation#park-and-ride",
    keywords: "park ride lot bus t station free parking suburban",
    snippet: "Park-and-ride options from every direction. Best way to avoid downtown parking.",
    category: "Parking",
  },
  {
    title: "Ross Park & Ride",
    href: "/parking-transportation#park-and-ride",
    keywords: "ross park ride i-279 exit 5 north mall mccandless",
    snippet: "Park-and-ride from the north. I-279 Exit 5.",
    category: "Parking",
  },
  {
    title: "South Hills Village T Station",
    href: "/parking-transportation#park-and-ride",
    keywords: "south hills village t station park ride south",
    snippet: "Park-and-ride from the south. Take the T downtown for free.",
    category: "Parking",
  },
  {
    title: "Wilkinsburg Park & Ride",
    href: "/parking-transportation#park-and-ride",
    keywords: "wilkinsburg park ride east busway",
    snippet: "Park-and-ride from the east.",
    category: "Parking",
  },
  {
    title: "Road Closures & Bridge Closures",
    href: "/parking-transportation#road-closures",
    keywords: "road closure bridge closed i-279 fort pitt duquesne boulevard ramp detour",
    snippet: "Which bridges and roads are closed. 6 phases from March 28 through May 10.",
    category: "Transportation",
  },
  {
    title: "SpotHero Parking",
    href: "/parking-transportation#driving",
    keywords: "spothero parking app pre-book reserve garage downtown",
    snippet: "Pre-book parking through SpotHero. $10-35 suburban, $100+ downtown.",
    category: "Parking",
  },
  // ==========================================
  // SCHEDULE
  // ==========================================
  {
    title: "Draft Schedule (Round-by-Round Times)",
    href: "/schedule#schedule",
    keywords: "schedule time round 1 2 3 4 5 6 7 thursday friday saturday when start",
    snippet: "Thu Round 1 at 8PM, Fri Rounds 2-3 at 7PM, Sat Rounds 4-7 at 12PM.",
    category: "Schedule",
  },
  {
    title: "NFL OnePass App",
    href: "/schedule#onepass",
    keywords: "onepass app nfl register download phone mobile",
    snippet: "Download the NFL OnePass app. Required for some activities and entry.",
    category: "Info",
  },
  {
    title: "Bag Policy",
    href: "/schedule#bag-policy",
    keywords: "bag policy clear backpack purse what bring allowed prohibited",
    snippet: "Clear bag policy in effect. 12x6x12 clear bags only.",
    category: "Info",
  },
  {
    title: "Draft Theater at Acrisure Stadium",
    href: "/schedule#draft-theater",
    keywords: "draft theater acrisure stadium north shore picks selections indoor",
    snippet: "Where the picks are announced. On the North Shore at Acrisure Stadium.",
    category: "Venue",
  },
  // ==========================================
  // BUDGET GUIDE
  // ==========================================
  {
    title: "Budget Hotels ($80-180/night)",
    href: "/budget-guide#budget-hotels",
    keywords: "budget cheap hotel affordable mcknight cranberry robinson airport",
    snippet: "Budget hotels from $80/night. McKnight Road, Cranberry, Robinson.",
    category: "Budget",
  },
  {
    title: "Budget Eats Under $15",
    href: "/budget-guide#budget-eats",
    keywords: "budget cheap food eat affordable under 15 dollars",
    snippet: "Where to eat for under $15. Tacos, pizza, food halls.",
    category: "Budget",
  },
  {
    title: "Free Things to Do",
    href: "/budget-guide#free-things",
    keywords: "free things activities attractions no cost",
    snippet: "Everything you can do for free during draft weekend.",
    category: "Budget",
  },
  {
    title: "The $500 Draft Weekend (Sample Budget)",
    href: "/budget-guide#sample-budget",
    keywords: "sample budget 500 dollars plan cost total weekend",
    snippet: "Sample budget breakdown for doing draft weekend on $500.",
    category: "Budget",
  },
  // ==========================================
  // NEIGHBORHOODS
  // ==========================================
  {
    title: "North Shore Neighborhood",
    href: "/neighborhoods#north-shore",
    keywords: "north shore neighborhood acrisure stadium pnc park",
    snippet: "Where the Draft Theater is. Bars, restaurants, and stadiums.",
    category: "Neighborhood",
  },
  {
    title: "Downtown / Market Square",
    href: "/neighborhoods#downtown",
    keywords: "downtown market square ppg center point state park",
    snippet: "Heart of the city. Point State Park, Market Square, restaurants.",
    category: "Neighborhood",
  },
  {
    title: "Strip District",
    href: "/neighborhoods#strip-district",
    keywords: "strip district food shopping vendors market morning",
    snippet: "Pittsburgh's foodie neighborhood. 10-minute walk from the draft.",
    category: "Neighborhood",
  },
  {
    title: "South Side / Carson Street",
    href: "/neighborhoods#south-side",
    keywords: "south side carson street nightlife bars 80 bars",
    snippet: "80+ bars on Carson Street. Pittsburgh's nightlife capital.",
    category: "Neighborhood",
  },
  {
    title: "Lawrenceville",
    href: "/neighborhoods#lawrenceville",
    keywords: "lawrenceville butler street breweries hipster trendy",
    snippet: "Trendy neighborhood with breweries and restaurants.",
    category: "Neighborhood",
  },
  {
    title: "Mt. Washington",
    href: "/neighborhoods#mt-washington",
    keywords: "mt mount washington overlook view incline grandview",
    snippet: "Best views of Pittsburgh. Inclines, restaurants, Grandview Avenue.",
    category: "Neighborhood",
  },
  {
    title: "Station Square",
    href: "/neighborhoods#station-square",
    keywords: "station square south shore gateway clipper shops restaurants",
    snippet: "Shopping and restaurant area on the south shore. Gateway Clipper departure point.",
    category: "Neighborhood",
  },
  {
    title: "Oakland",
    href: "/neighborhoods#oakland",
    keywords: "oakland university pittsburgh carnegie museum phipps cathedral learning pitt",
    snippet: "University area. Carnegie Museum, Phipps Conservatory, Cathedral of Learning.",
    category: "Neighborhood",
  },
  // ==========================================
  // ITINERARY
  // ==========================================
  {
    title: "Wednesday Itinerary (Opening Night)",
    href: "/itinerary#wednesday",
    keywords: "wednesday april 22 opening night plan itinerary day",
    snippet: "Explore Strip District, Taste of the Draft, Nelly concert.",
    category: "Itinerary",
  },
  {
    title: "Thursday Itinerary (Round 1)",
    href: "/itinerary#thursday",
    keywords: "thursday april 23 round 1 plan itinerary day first",
    snippet: "Draft Experience, Round 1 picks at 8PM, Steve Aoki concert.",
    category: "Itinerary",
  },
  {
    title: "Friday Itinerary (Rounds 2-3)",
    href: "/itinerary#friday",
    keywords: "friday april 24 round 2 3 plan itinerary day",
    snippet: "Rounds 2-3 at 7PM. Drone show after.",
    category: "Itinerary",
  },
  {
    title: "Saturday Itinerary (Rounds 4-7)",
    href: "/itinerary#saturday",
    keywords: "saturday april 25 round 4 5 6 7 plan itinerary day last final",
    snippet: "Rounds 4-7 starting at 12PM. 2 Chainz concert. Last day.",
    category: "Itinerary",
  },
  // ==========================================
  // PAGES (general page-level results)
  // ==========================================
  {
    title: "Parking & Transportation Guide",
    href: "/parking-transportation",
    keywords: "parking transportation driving road closure bridge guide overview",
    snippet: "Complete guide to parking, driving, transit, and road closures.",
    category: "Guide",
  },
  {
    title: "Where to Stay Guide",
    href: "/where-to-stay",
    keywords: "hotel motel stay sleep room book accommodation guide",
    snippet: "Hotels from $80/night to $2,000+. By area and budget.",
    category: "Guide",
  },
  {
    title: "Bars & Restaurants Guide",
    href: "/bars-restaurants",
    keywords: "bars restaurants food drink eat guide overview all",
    snippet: "44 spots to eat and drink near both venues, organized by neighborhood.",
    category: "Guide",
  },
  {
    title: "Getting Around Guide",
    href: "/getting-around",
    keywords: "getting around transit transportation guide overview",
    snippet: "T light rail, buses, walking routes, rideshare, and river ferry.",
    category: "Guide",
  },
  {
    title: "Schedule & What to Expect",
    href: "/schedule",
    keywords: "schedule overview guide what expect",
    snippet: "Round-by-round times, gate hours, bag policy, concerts, and events.",
    category: "Guide",
  },
  {
    title: "Things to Do Guide",
    href: "/things-to-do",
    keywords: "things to do activities attractions guide overview",
    snippet: "Attractions, concerts, activities, and events beyond the picks.",
    category: "Guide",
  },
  {
    title: "FAQ",
    href: "/faq",
    keywords: "faq frequently asked questions help",
    snippet: "Answers to the 20 most-asked questions about the draft.",
    category: "Guide",
  },
  {
    title: "Day-by-Day Itinerary",
    href: "/itinerary",
    keywords: "itinerary plan schedule day by day hour",
    snippet: "Hour-by-hour plan for each day of draft weekend.",
    category: "Guide",
  },
  {
    title: "Draft Weekend on a Budget",
    href: "/budget-guide",
    keywords: "budget guide cheap affordable save money",
    snippet: "How to do draft weekend without going broke.",
    category: "Guide",
  },
  {
    title: "Checklist & What to Pack",
    href: "/checklist",
    keywords: "checklist pack bring clear bag portable charger rain jersey",
    snippet: "Everything to pack, download, and plan before you go.",
    category: "Guide",
  },
  {
    title: "Pittsburgh Neighborhoods Guide",
    href: "/neighborhoods",
    keywords: "neighborhoods areas explore where pittsburgh guide",
    snippet: "Where to explore beyond the draft venues.",
    category: "Guide",
  },
  {
    title: "From Cranberry Township",
    href: "/cranberry-township",
    keywords: "cranberry township northern suburbs park ride ross butler",
    snippet: "Park-and-ride options and transit from the northern suburbs.",
    category: "Guide",
  },
  {
    title: "What to Wear",
    href: "/blog/what-to-wear-nfl-draft-pittsburgh",
    keywords: "wear clothes outfit jersey layers dress code fashion",
    snippet: "What to wear to the NFL Draft in Pittsburgh.",
    category: "Blog",
  },
  {
    title: "Rain Plan",
    href: "/blog/nfl-draft-pittsburgh-rain-plan",
    keywords: "rain weather forecast umbrella poncho indoor backup plan wet",
    snippet: "What happens if it rains during draft weekend.",
    category: "Blog",
  },
  {
    title: "Kids & Family Guide",
    href: "/blog/nfl-draft-pittsburgh-kids-family",
    keywords: "kids family children stroller baby toddler child friendly activities",
    snippet: "Tips for bringing kids to the NFL Draft.",
    category: "Blog",
  },
  {
    title: "About This Guide",
    href: "/about",
    keywords: "about jordan peacock cranberry township who built contact local",
    snippet: "Who built this guide and why. Local perspective.",
    category: "Info",
  },
  // ==========================================
  // ENTERTAINMENT SERIES (April 2026 update)
  // ==========================================
  {
    title: "Wiz Khalifa (Friday Concert - FREE)",
    href: "/things-to-do#concerts",
    keywords: "wiz khalifa concert friday free entertainment series music rapper",
    snippet: "Wiz Khalifa performs Friday at the Draft Theater after the picks. Free with OnePass.",
    category: "Event",
  },
  {
    title: "Bret Michaels (Friday Concert - FREE)",
    href: "/things-to-do#concerts",
    keywords: "bret michaels concert friday free entertainment series music rock poison",
    snippet: "Bret Michaels performs Friday at the Draft Theater after the picks. Free with OnePass.",
    category: "Event",
  },
  {
    title: "Kane Brown (Saturday Concert - FREE)",
    href: "/things-to-do#concerts",
    keywords: "kane brown concert saturday free entertainment series music country headline",
    snippet: "Kane Brown headlines Saturday after the final picks. Free with OnePass.",
    category: "Event",
  },
  // ==========================================
  // NFL FILMS & NEW ATTRACTIONS
  // ==========================================
  {
    title: "The Football Town (NFL Films)",
    href: "/things-to-do#draft-experience",
    keywords: "football town nfl films pat mcafee kamins science center movie immersive rangos cinema",
    snippet: "NFL Films presentation narrated by Pat McAfee at Kamins Science Center. Free. Multiple showtimes daily.",
    category: "Attraction",
  },
  {
    title: "Hail Mary Throw",
    href: "/things-to-do#draft-experience",
    keywords: "hail mary throw pass deep ball point state park game",
    snippet: "Test your deep ball accuracy by throwing over defenders into a net at Point State Park.",
    category: "Attraction",
  },
  {
    title: "Long Snap Station",
    href: "/things-to-do#draft-experience",
    keywords: "long snap punt field goal snap combine",
    snippet: "Try your hand at punt and field goal snaps at Point State Park.",
    category: "Attraction",
  },
  {
    title: "NFL Museum & Super Bowl Rings",
    href: "/things-to-do#draft-experience",
    keywords: "nfl museum super bowl rings locker room hall fame busts heisman trophy",
    snippet: "Replica NFL locker room, all 59 Super Bowl rings, Hall of Fame busts, and the Heisman Trophy on the North Shore.",
    category: "Attraction",
  },
  {
    title: "Look Like A Pro Photo Station",
    href: "/things-to-do#draft-experience",
    keywords: "look like a pro photo station uniform body cast team jersey",
    snippet: "Step inside a body-cast mold with your favorite team's uniform for a photo.",
    category: "Attraction",
  },
  {
    title: "Pepsi Team Helmets",
    href: "/things-to-do#draft-experience",
    keywords: "pepsi team helmets oversized 32 teams photo op",
    snippet: "Oversized replicas of all 32 NFL team helmets. Great photo op.",
    category: "Attraction",
  },
  {
    title: "Bud Light Beer Hall",
    href: "/things-to-do#draft-experience",
    keywords: "bud light beer hall drinks bar 21 north shore",
    snippet: "Beer hall on the North Shore with photo ops. 21+ for drinks.",
    category: "Attraction",
  },
  {
    title: "Fan Viewing on Acrisure Stadium Field",
    href: "/things-to-do#draft-experience",
    keywords: "fan viewing acrisure stadium field rounds 1 2 3 watch blankets",
    snippet: "Watch Rounds 1-3 from the actual Acrisure Stadium field. Blankets allowed but must be in use.",
    category: "Attraction",
  },
  {
    title: "Play Football Field (Kids 6-14)",
    href: "/things-to-do#draft-experience",
    keywords: "play football field kids children clinics usa football flag 6 14 ages",
    snippet: "USA Football clinics for kids ages 6-14 on the field at Acrisure Stadium. First-come, first-served.",
    category: "Attraction",
  },
  // ==========================================
  // PRACTICAL INFO (April 2026 update)
  // ==========================================
  {
    title: "Cashless Event (Credit Cards Only)",
    href: "/things-to-do#draft-experience",
    keywords: "cashless cash free credit card only no cash american express payment",
    snippet: "The entire Draft Experience is cashless. No cash accepted. Credit cards only. American Express is the official partner.",
    category: "Info",
  },
  {
    title: "Water Bottles & Refill Stations",
    href: "/things-to-do#draft-experience",
    keywords: "water bottle refill station reusable empty free hydration",
    snippet: "Bring an empty reusable water bottle. Free refill stations are available inside the event.",
    category: "Info",
  },
  {
    title: "Umbrellas Are Banned",
    href: "/schedule",
    keywords: "umbrella banned prohibited items rain poncho jacket weather",
    snippet: "Umbrellas are on the NFL's prohibited items list. Bring a rain poncho or jacket instead.",
    category: "Info",
  },
  {
    title: "POGOH Bike Share",
    href: "/getting-around#bike-share",
    keywords: "pogoh bike share bicycle rental electric pedal station downtown north shore",
    snippet: "Pittsburgh's public bike-share with stations across Downtown and North Shore. Pedal and e-bikes via the POGOH app.",
    category: "Transportation",
  },
  {
    title: "Text NFLDRAFT for Help",
    href: "/getting-around",
    keywords: "help text nfldraft 69050 assistance fan services support",
    snippet: "Text NFLDRAFT to 69050 for on-site assistance. Or visit a Fan Services booth.",
    category: "Info",
  },
  // ==========================================
  // RESTAURANTS - North Shore (from "More..." paragraphs)
  // ==========================================
  {
    title: "SoHo Pittsburgh",
    href: "/bars-restaurants#north-shore",
    keywords: "soho pittsburgh restaurant bar north shore original",
    snippet: "The original North Shore restaurant. Been around since 2006.",
    category: "Restaurant / Bar",
  },
  {
    title: "Burgatory",
    href: "/bars-restaurants#north-shore",
    keywords: "burgatory burgers gourmet milkshakes north shore",
    snippet: "Gourmet burgers and milkshakes on the North Shore. Always a wait.",
    category: "Restaurant / Bar",
  },
  {
    title: "The Foundry Table & Tap",
    href: "/bars-restaurants#north-shore",
    keywords: "foundry table tap gastropub north shore dining",
    snippet: "Gastropub on the North Shore with multiple dining concepts.",
    category: "Restaurant / Bar",
  },
  {
    title: "Hyde Park Prime Steakhouse",
    href: "/bars-restaurants#north-shore",
    keywords: "hyde park prime steakhouse upscale north shore fine dining",
    snippet: "Upscale steakhouse on the North Shore. Make a reservation or forget it.",
    category: "Restaurant / Bar",
  },
  {
    title: "Bar Louie",
    href: "/bars-restaurants#north-shore",
    keywords: "bar louie gastrobar north shore casual",
    snippet: "Casual gastrobar on the North Shore.",
    category: "Restaurant / Bar",
  },
  // ==========================================
  // RESTAURANTS - Downtown (from "More..." paragraphs)
  // ==========================================
  {
    title: "The Warren Bar and Burrow",
    href: "/bars-restaurants#downtown",
    keywords: "warren bar burrow cocktails downtown sushi intimate",
    snippet: "Craft cocktails and sushi downtown. Intimate vibe.",
    category: "Restaurant / Bar",
  },
  {
    title: "Alta Via",
    href: "/bars-restaurants#downtown",
    keywords: "alta via italian market square downtown pasta",
    snippet: "Italian restaurant at Market Square. Handmade pasta, seasonal menu.",
    category: "Restaurant / Bar",
  },
  {
    title: "Gi-Jin",
    href: "/bars-restaurants#downtown",
    keywords: "gi jin asian fusion sushi hand rolls gin downtown",
    snippet: "Sushi, hand rolls, and gin bar downtown.",
    category: "Restaurant / Bar",
  },
  {
    title: "Vallozzi's",
    href: "/bars-restaurants#downtown",
    keywords: "vallozzis italian downtown family pizza pasta",
    snippet: "Family-owned Italian restaurant downtown. Solid pasta and pizza.",
    category: "Restaurant / Bar",
  },
  {
    title: "Puttery",
    href: "/bars-restaurants#downtown",
    keywords: "puttery mini golf bar entertainment downtown groups fun",
    snippet: "Indoor mini-golf bar downtown. Fun for groups.",
    category: "Restaurant / Bar",
  },
  {
    title: "Ritual House",
    href: "/bars-restaurants#downtown",
    keywords: "ritual house restaurant downtown omni william penn union trust",
    snippet: "Restaurant near the Omni William Penn in the Union Trust Building.",
    category: "Restaurant / Bar",
  },
  // ==========================================
  // RESTAURANTS - Strip District (from "More..." paragraphs)
  // ==========================================
  {
    title: "DeLuca's Diner",
    href: "/bars-restaurants#strip-district",
    keywords: "delucas diner breakfast strip district pancakes lunch",
    snippet: "Another breakfast legend in the Strip District. Since 1950.",
    category: "Restaurant / Bar",
  },
  {
    title: "Pennsylvania Macaroni Co.",
    href: "/bars-restaurants#strip-district",
    keywords: "pennsylvania macaroni co penn mac cheese pasta italian imports strip district",
    snippet: "Pittsburgh's #1 Italian imports store. Cheese and pasta since 1902.",
    category: "Restaurant / Bar",
  },
  {
    title: "Enrico Biscotti",
    href: "/bars-restaurants#strip-district",
    keywords: "enrico biscotti bakery artisan strip district pastries",
    snippet: "Artisan bakery in the Strip District. Traditional Italian pastries.",
    category: "Restaurant / Bar",
  },
  {
    title: "Kaya",
    href: "/bars-restaurants#strip-district",
    keywords: "kaya caribbean restaurant strip district tropical cocktails",
    snippet: "Caribbean-inspired restaurant in the Strip District.",
    category: "Restaurant / Bar",
  },
  // ==========================================
  // RESTAURANTS - South Side (from "More..." paragraphs)
  // ==========================================
  {
    title: "Tiki Lounge",
    href: "/bars-restaurants#south-side",
    keywords: "tiki lounge bar south side themed drinks cocktails carson street",
    snippet: "Themed tiki bar on the South Side. Open since 2002.",
    category: "Restaurant / Bar",
  },
  {
    title: "Dish Osteria",
    href: "/bars-restaurants#south-side",
    keywords: "dish osteria italian upscale dining south side",
    snippet: "Upscale Italian dining on the South Side.",
    category: "Restaurant / Bar",
  },
  {
    title: "La Palapa",
    href: "/bars-restaurants#south-side",
    keywords: "la palapa mexican margaritas south side carson street",
    snippet: "Mexican restaurant on the South Side. Solid margaritas.",
    category: "Restaurant / Bar",
  },
  {
    title: "Club Cafe",
    href: "/bars-restaurants#south-side",
    keywords: "club cafe live music venue south side concerts",
    snippet: "Live music venue on the South Side. Reopened summer 2025.",
    category: "Restaurant / Bar",
  },
  {
    title: "Smiling Moose",
    href: "/bars-restaurants#south-side",
    keywords: "smiling moose dive bar live music south side",
    snippet: "Dive bar with live music on the South Side.",
    category: "Restaurant / Bar",
  },
  // ==========================================
  // BREWERIES - Lawrenceville (from "More..." paragraphs)
  // ==========================================
  {
    title: "Hop Farm Brewing",
    href: "/bars-restaurants#breweries",
    keywords: "hop farm brewing lawrenceville craft beer yelp",
    snippet: "#1 brewery on Yelp in Lawrenceville.",
    category: "Brewery",
  },
  {
    title: "Eleventh Hour Brewing",
    href: "/bars-restaurants#breweries",
    keywords: "eleventh hour 11th hour brewing lawrenceville craft beer",
    snippet: "Craft brewery in Lawrenceville with a great taproom.",
    category: "Brewery",
  },
  {
    title: "Coven Brewing",
    href: "/bars-restaurants#breweries",
    keywords: "coven brewing lawrenceville craft beer butler street",
    snippet: "Brewery on Butler Street in Lawrenceville.",
    category: "Brewery",
  },
  {
    title: "Cinderlands Foederhouse",
    href: "/bars-restaurants#breweries",
    keywords: "cinderlands foederhouse belgian brewery lawrenceville",
    snippet: "Belgian-style foederbier in Lawrenceville.",
    category: "Brewery",
  },
  {
    title: "Lolev Beer",
    href: "/bars-restaurants#breweries",
    keywords: "lolev beer brewery lawrenceville huge space car dealership",
    snippet: "Huge brewery space in a former car dealership in Lawrenceville.",
    category: "Brewery",
  },
  // ==========================================
  // NEIGHBORHOODS PAGE SPOTS (not already indexed)
  // ==========================================
  {
    title: "Monterey Bay Fish Grotto",
    href: "/neighborhoods#mt-washington",
    keywords: "monterey bay fish grotto seafood mt washington view skyline",
    snippet: "Seafood atop Mt. Washington with skyline views. 1,077 TripAdvisor reviews.",
    category: "Restaurant / Bar",
  },
  {
    title: "Grand Concourse",
    href: "/neighborhoods#station-square",
    keywords: "grand concourse restaurant station square fine dining historic train station",
    snippet: "Fine dining inside a stunning historic train station at Station Square.",
    category: "Restaurant / Bar",
  },
  {
    title: "Texas de Brazil",
    href: "/neighborhoods#station-square",
    keywords: "texas de brazil brazilian steakhouse all you can eat station square",
    snippet: "All-you-can-eat Brazilian steakhouse at Station Square.",
    category: "Restaurant / Bar",
  },
  {
    title: "The Porch at Schenley",
    href: "/neighborhoods#oakland",
    keywords: "porch schenley restaurant oakland patio outdoor dining",
    snippet: "Restaurant at the edge of Schenley Park in Oakland. Good patio.",
    category: "Restaurant / Bar",
  },
  {
    title: "Carnegie Museum of Art + Natural History",
    href: "/neighborhoods#oakland",
    keywords: "carnegie museum art natural history dinosaurs gems oakland pittsburgh",
    snippet: "Two world-class museums in one building. Dinosaurs, gems, and fine art in Oakland.",
    category: "Attraction",
  },
  // ==========================================
  // NEW: PicksBURGH Events + Transit Updates
  // ==========================================
  {
    title: "PicksBURGH Music Crawl",
    href: "/blog/picksburgh-music-crawl",
    keywords: "picksburgh music crawl wednesday april 22 live music venues bars concerts night before draft guitar picks",
    snippet: "13 venues across Pittsburgh with live music the night before the draft. Free shows, jazz, metal, EDM, and commemorative guitar picks.",
    category: "Event",
  },
  {
    title: "Market Square Activations",
    href: "/things-to-do#market-square",
    keywords: "market square activations steelers bar mini golf blacksmithing photos free downtown",
    snippet: "Free activations at Market Square all 3 draft days. Steelers bar, mini golf, live blacksmithing, photo stations.",
    category: "Event",
  },
  {
    title: "Pitt Block Party at Arts Landing",
    href: "/things-to-do#pitt-block-party",
    keywords: "pitt block party arts landing free kids children family football museum cultural trust",
    snippet: "Free 3-day celebration at Arts Landing. Pitt Football museum, food trucks, children's activity zone. April 23-25, 9 AM-6 PM.",
    category: "Event",
  },
  {
    title: "Heinz Hall Garden & Open House",
    href: "/blog/picksburgh-music-crawl",
    keywords: "heinz hall garden open house classical music free downtown music crawl",
    snippet: "Free classical performances at Heinz Hall during the Music Crawl. 4-9 PM Wednesday.",
    category: "Event",
  },
  {
    title: "August Wilson Cultural Center",
    href: "/blog/picksburgh-music-crawl",
    keywords: "august wilson cultural center jazz funk r&b downtown music crawl",
    snippet: "R&B, funk, and jazz at the August Wilson Center during the Music Crawl. 5:30-8 PM.",
    category: "Event",
  },
  {
    title: "Con Alma Jazz Club",
    href: "/blog/picksburgh-music-crawl",
    keywords: "con alma jazz club international downtown music crawl",
    snippet: "International jazz at Con Alma during the Music Crawl. 7-10 PM.",
    category: "Event",
  },
  {
    title: "Park House",
    href: "/blog/picksburgh-music-crawl",
    keywords: "park house soul blues americana north side free music crawl",
    snippet: "Free soul, blues, and Americana at Park House on the North Side. 8-11 PM.",
    category: "Event",
  },
  {
    title: "Enclave South Side",
    href: "/blog/picksburgh-music-crawl",
    keywords: "enclave south side edm dj late night music crawl",
    snippet: "Late-night EDM at Enclave on the South Side. 10:30 PM-2 AM.",
    category: "Event",
  },
  {
    title: "Allegheny Station Closed",
    href: "/getting-around",
    keywords: "allegheny station closed t light rail north side station transit april",
    snippet: "Allegheny T Station is CLOSED April 22-25. Use North Side Station instead.",
    category: "Transit",
  },
  {
    title: "Gateway Clipper (FREE Ferry)",
    href: "/getting-around#river-ferry",
    keywords: "gateway clipper ferry boat free river shuttle north shore point state park station square",
    snippet: "Free riverboat shuttles between North Shore, Point State Park, and Station Square during draft weekend.",
    category: "Transit",
  },
  {
    title: "Beaver County Transit",
    href: "/getting-around#regional-transit",
    keywords: "beaver county transit bus express downtown $5 $10 day pass",
    snippet: "Express bus from Beaver County to Downtown. $5 each way or $10 unlimited day pass.",
    category: "Transit",
  },
  {
    title: "Parking Meter Rate Increase",
    href: "/parking-transportation",
    keywords: "parking meter rate increase $5 hour downtown north shore april",
    snippet: "Parking meters raised to $5/hour in Downtown and North Shore areas, April 22-27.",
    category: "Transit",
  },
  {
    title: "Pedestrian Pathway (Buskers & Street Performers)",
    href: "/getting-around#pedestrian-pathway",
    keywords: "pedestrian pathway buskers street performers photo installations wayfinding walk",
    snippet: "Nearly 100 buskers and street performers line the walking route between venues. Photo installations along the way.",
    category: "Transit",
  },
  {
    title: "Medical Services at the Draft",
    href: "/faq",
    keywords: "medical services ahn upmc hospital tent first aid emergency health",
    snippet: "AHN and UPMC have medical tents on site all 3 days. For emergencies call 911.",
    category: "Info",
  },
  {
    title: "Taste of the Draft with Andrew Zimmern",
    href: "/things-to-do#taste-of-draft",
    keywords: "taste of draft andrew zimmern chef food charity genyouth $845 tuesday",
    snippet: "Celebrity chef Andrew Zimmern hosts 20+ local chefs. $845/person. Benefits GENYOUth. April 22.",
    category: "Event",
  },
];
