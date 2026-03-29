"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function EmailBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  // Don't show the banner at all on the checklist page (they're already there)
  if (pathname === "/checklist") return null;

  if (dismissed) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/jordan@peacockbookkeepingservices.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _honey: "",
          _subject: "New Draft Guide subscriber!",
          source: "banner",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-green-800 text-white border-t border-green-600 shadow-lg">
        <div className="max-w-4xl mx-auto px-3 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between gap-2">
          <p className="font-bold text-xs sm:text-sm flex-shrink-0">
            Your checklist is ready!
          </p>
          <div className="flex gap-2 flex-shrink-0">
            <Link
              href="/checklist"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold px-3 py-2.5 rounded-lg text-xs sm:text-sm transition-colors whitespace-nowrap min-h-[44px] flex items-center"
            >
              View Online
            </Link>
            <a
              href="/draft-weekend-checklist.pdf"
              download
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-3 py-2.5 rounded-lg text-xs sm:text-sm transition-colors whitespace-nowrap border border-white/30 min-h-[44px] flex items-center"
            >
              Download PDF
            </a>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-green-300 hover:text-white p-1.5 flex-shrink-0"
            aria-label="Dismiss"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary-dark text-white border-t border-white/20 shadow-lg">
      <div className="max-w-4xl mx-auto px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-sm">
              Free Draft Weekend Checklist
            </p>
            <p className="text-xs text-gray-300 hidden sm:block">
              Parking tips, packing list, and day-by-day plan.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" title="Do not fill this field" />
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2.5 rounded-lg text-base sm:text-sm text-foreground bg-white flex-1 sm:w-48 min-w-0"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-accent-dark text-foreground font-bold px-4 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap disabled:opacity-50 min-h-[44px]"
            >
              {loading ? "..." : "Get It Free"}
            </button>
          </form>
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-1.5 right-2 sm:static text-gray-400 hover:text-white p-1.5"
            aria-label="Dismiss"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
