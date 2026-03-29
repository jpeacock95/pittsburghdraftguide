"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchEntry {
  title: string;
  href: string;
  keywords: string;
  snippet: string;
}

const searchIndex: SearchEntry[] = [
  {
    title: "Parking & Transportation",
    href: "/parking-transportation",
    keywords: "parking park ride drive car garage road closure bridge I-279 I-376 north shore lot SpotHero",
    snippet: "Where to park, park-and-ride options, road closures, and pricing.",
  },
  {
    title: "Where to Stay",
    href: "/where-to-stay",
    keywords: "hotel motel Airbnb stay sleep room book reservation downtown cranberry south hills T line Sheraton Marriott Hampton",
    snippet: "Hotels from $120/night in Cranberry to $2,000 downtown.",
  },
  {
    title: "Bars & Restaurants",
    href: "/bars-restaurants",
    keywords: "food eat drink bar restaurant brewery north shore strip district south side lawrenceville Primanti station burgatory",
    snippet: "44 spots to eat and drink near both venues, by neighborhood.",
  },
  {
    title: "Schedule & What to Expect",
    href: "/schedule",
    keywords: "schedule time round 1 2 3 4 5 6 7 thursday friday saturday start gate hours OnePass bag policy concert Steve Aoki 2 Chainz Nelly drone",
    snippet: "Round-by-round times, gate hours, bag policy, and concerts.",
  },
  {
    title: "FAQ",
    href: "/faq",
    keywords: "question answer free tickets cost money kids family rain weather wheelchair accessible OnePass app register",
    snippet: "Answers to the 20 most-asked questions about the draft.",
  },
  {
    title: "Getting Around",
    href: "/getting-around",
    keywords: "T light rail bus PRT transit walk bridge Roberto Clemente Gateway Clipper rideshare Uber Lyft free ride Sheetz",
    snippet: "Free T rides, buses, walking routes, and rideshare tips.",
  },
  {
    title: "From Cranberry Township",
    href: "/cranberry-township",
    keywords: "cranberry township northern suburbs park ride Ross Park Mall bus 279 Butler transit Zelienople",
    snippet: "Park-and-ride options and transit from the northern suburbs.",
  },
  {
    title: "Day-by-Day Itinerary",
    href: "/itinerary",
    keywords: "itinerary plan day thursday friday saturday morning afternoon evening where go what do",
    snippet: "Hour-by-hour plan for each day of draft weekend.",
  },
  {
    title: "Things to Do",
    href: "/things-to-do",
    keywords: "things do attractions Duquesne Incline Point State Park fountain Heinz museum Andy Warhol Strip District Phipps 5K race",
    snippet: "Attractions, activities, and events beyond the picks.",
  },
  {
    title: "Budget Guide",
    href: "/budget-guide",
    keywords: "budget cheap free money save cost affordable low price",
    snippet: "How to do draft weekend without going broke.",
  },
  {
    title: "Checklist",
    href: "/checklist",
    keywords: "checklist pack bring clear bag portable charger battery rain jacket poncho shoes layers sunscreen water bottle jersey",
    snippet: "Everything to pack, download, and plan before you go.",
  },
  {
    title: "Pittsburgh Neighborhoods",
    href: "/neighborhoods",
    keywords: "neighborhood north shore strip district south side lawrenceville shadyside mount washington station square downtown",
    snippet: "Where to explore beyond the draft venues.",
  },
  {
    title: "Draft Weekend on a Budget",
    href: "/budget-guide",
    keywords: "budget cheap affordable free money save cost dollar",
    snippet: "Hotels, food, and transit tips for doing it cheap.",
  },
  {
    title: "What to Wear",
    href: "/blog/what-to-wear-nfl-draft-pittsburgh",
    keywords: "wear clothes outfit jersey layers dress code",
    snippet: "What to wear to the NFL Draft in Pittsburgh.",
  },
  {
    title: "Rain Plan",
    href: "/blog/nfl-draft-pittsburgh-rain-plan",
    keywords: "rain weather forecast umbrella poncho indoor backup plan",
    snippet: "What happens if it rains during draft weekend.",
  },
  {
    title: "Kids & Family Guide",
    href: "/blog/nfl-draft-pittsburgh-kids-family",
    keywords: "kids family children stroller baby toddler child friendly",
    snippet: "Tips for bringing kids to the NFL Draft.",
  },
  {
    title: "About This Guide",
    href: "/about",
    keywords: "about Jordan Peacock Cranberry Township who built contact",
    snippet: "Who built this guide and why.",
  },
];

export function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = query.length >= 2
    ? searchIndex.filter((entry) => {
        const q = query.toLowerCase();
        return (
          entry.title.toLowerCase().includes(q) ||
          entry.keywords.toLowerCase().includes(q) ||
          entry.snippet.toLowerCase().includes(q)
        );
      })
    : [];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  function handleSelect(href: string) {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Search toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-white/10 transition-colors"
        aria-label="Search this site"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </button>

      {/* Search overlay */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
          <div className="p-3">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search (parking, hotels, food...)"
              className="w-full px-3 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-gray-400"
            />
          </div>

          {/* Results */}
          {query.length >= 2 && (
            <div className="max-h-80 overflow-y-auto">
              {results.length > 0 ? (
                <ul className="px-2 pb-2">
                  {results.map((result) => (
                    <li key={result.href}>
                      <button
                        onClick={() => handleSelect(result.href)}
                        className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <p className="text-sm font-semibold text-gray-900">{result.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{result.snippet}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-6 text-center">
                  <p className="text-sm text-gray-500">No results for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-gray-400 mt-1">Try: parking, hotels, food, schedule, free transit</p>
                </div>
              )}
            </div>
          )}

          {/* Hint when empty */}
          {query.length < 2 && (
            <div className="px-4 pb-4">
              <p className="text-xs text-gray-400">Popular: <span className="text-gray-500">parking, free transit, hotels, restaurants, bag policy, checklist</span></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
