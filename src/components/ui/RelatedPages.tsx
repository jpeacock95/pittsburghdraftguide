import Link from "next/link";

interface RelatedPage {
  href: string;
  title: string;
  desc: string;
}

const allPages: Record<string, RelatedPage> = {
  parking: { href: "/parking-transportation", title: "Parking & Transit", desc: "Where to park, free T rides, and road closures." },
  hotels: { href: "/where-to-stay", title: "Where to Stay", desc: "Hotels from $120/night, plus Airbnb alternatives." },
  food: { href: "/bars-restaurants", title: "Bars & Restaurants", desc: "44 spots to eat and drink near both venues." },
  schedule: { href: "/schedule", title: "Draft Schedule", desc: "Round times, gate hours, bag policy, and what to bring." },
  checklist: { href: "/checklist", title: "Draft Checklist", desc: "Everything to pack, download, and plan before you go." },
  budget: { href: "/budget-guide", title: "Budget Guide", desc: "How to do draft weekend without emptying your wallet." },
  neighborhoods: { href: "/neighborhoods", title: "Neighborhoods", desc: "8 neighborhoods to explore beyond the draft venues." },
  getting_around: { href: "/getting-around", title: "Getting Around", desc: "Every way to move between the two venues." },
  itinerary: { href: "/itinerary", title: "Day-by-Day Itinerary", desc: "A 4-day plan from Wednesday to Saturday." },
  faq: { href: "/faq", title: "FAQ", desc: "21 answers from Reddit threads and local knowledge." },
  cranberry: { href: "/cranberry-township", title: "From Cranberry", desc: "Park-and-ride options from the northern suburbs." },
  watch_parties: { href: "/watch-parties", title: "Watch Parties", desc: "17 verified watch parties across Pittsburgh for draft weekend." },
  music_crawl: { href: "/blog/picksburgh-music-crawl", title: "PicksBURGH Music Crawl", desc: "13 venues, live music, and guitar picks the night before the draft." },
};

interface RelatedPagesProps {
  current: string;
  slugs: string[];
}

export function RelatedPages({ current, slugs }: RelatedPagesProps) {
  const pages = slugs
    .filter((s) => s !== current)
    .map((s) => allPages[s])
    .filter(Boolean)
    .slice(0, 4);

  if (pages.length === 0) return null;

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <hr />
      <p className="label mb-4">Continue Reading</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group block"
          >
            <p className="font-heading text-lg group-hover:text-accent transition-colors">{page.title}</p>
            <p className="text-sm text-muted mt-1 leading-relaxed">{page.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
