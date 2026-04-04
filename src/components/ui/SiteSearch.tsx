"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { SearchEntry } from "@/data/search-index";

export function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchData, setSearchData] = useState<SearchEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  // Lazy-load search index only when search is opened
  useEffect(() => {
    if (isOpen && searchData.length === 0) {
      import("@/data/search-index").then((mod) => {
        setSearchData(mod.searchIndex);
      });
    }
  }, [isOpen, searchData.length]);

  const results = query.length >= 2
    ? searchData.filter((entry) => {
        const q = query.toLowerCase();
        return (
          entry.title.toLowerCase().includes(q) ||
          entry.keywords.toLowerCase().includes(q) ||
          entry.snippet.toLowerCase().includes(q)
        );
      }).slice(0, 10)
    : [];

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

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

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      handleSelect(results[selectedIndex].href);
    }
  }

  const categoryColors: Record<string, string> = {
    "Restaurant / Bar": "text-blue-600 bg-blue-50",
    "Brewery": "text-amber-700 bg-amber-50",
    "Budget Eats": "text-green-600 bg-green-50",
    "Hotel": "text-purple-600 bg-purple-50",
    "Accommodation": "text-purple-600 bg-purple-50",
    "Attraction": "text-pink-600 bg-pink-50",
    "Event": "text-orange-600 bg-orange-50",
    "Transportation": "text-cyan-700 bg-cyan-50",
    "Parking": "text-slate-600 bg-slate-100",
    "Neighborhood": "text-teal-600 bg-teal-50",
    "Schedule": "text-indigo-600 bg-indigo-50",
    "Budget": "text-green-600 bg-green-50",
    "Itinerary": "text-indigo-600 bg-indigo-50",
    "Guide": "text-gray-600 bg-gray-100",
    "Blog": "text-gray-600 bg-gray-100",
    "Info": "text-gray-600 bg-gray-100",
    "Venue": "text-indigo-600 bg-indigo-50",
    "Closed": "text-red-600 bg-red-50",
    "Private Event": "text-amber-700 bg-amber-50",
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Search toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-md hover:bg-white/10 transition-colors"
        aria-label="Search this site"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </button>

      {/* Search overlay */}
      {isOpen && (
        <div className="fixed left-4 right-4 top-16 sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
          <div className="p-3">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search bars, hotels, parking, anything..."
              className="w-full px-3 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-gray-400"
            />
          </div>

          {/* Results */}
          {query.length >= 2 && (
            <div className="max-h-80 overflow-y-auto">
              {results.length > 0 ? (
                <ul ref={resultsRef} className="px-2 pb-2">
                  {results.map((result, i) => (
                    <li key={`${result.href}-${result.title}`}>
                      <button
                        onClick={() => handleSelect(result.href)}
                        className={`w-full text-left px-3 py-3 rounded-lg transition-colors ${i === selectedIndex ? "bg-gray-100" : "hover:bg-gray-50"}`}
                      >
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-gray-900">{result.title}</p>
                          {result.category && (
                            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap ${categoryColors[result.category] || "text-gray-600 bg-gray-100"}`}>
                              {result.category}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{result.snippet}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-6 text-center">
                  <p className="text-sm text-gray-500">No results for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-gray-400 mt-1">Try a restaurant name, hotel, neighborhood, or topic</p>
                </div>
              )}
            </div>
          )}

          {/* Hint when empty */}
          {query.length < 2 && (
            <div className="px-4 pb-4">
              <p className="text-xs text-gray-400">Try: <span className="text-gray-500">Primanti Bros, Hofbrauhaus, parking, free rides, bag policy, Cranberry hotels</span></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
