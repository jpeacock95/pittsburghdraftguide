"use client";

import { useState } from "react";

export function EmailBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-sm">You're in! Here's your checklist:</p>
          </div>
          <a
            href="/checklist"
            className="bg-accent hover:bg-accent-dark text-foreground font-bold px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            View Checklist
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-green-300 hover:text-white p-1 ml-2"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary-dark text-white border-t border-white/20 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center gap-3">
        <div className="flex-1 text-center sm:text-left">
          <p className="font-bold text-sm">
            Get the Draft Weekend Checklist
          </p>
          <p className="text-xs text-gray-300">
            Parking tips, packing list, and day-by-day plan. Yours instantly.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded-lg text-sm text-foreground bg-white flex-1 sm:w-56 min-w-0"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-accent hover:bg-accent-dark text-foreground font-bold px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap disabled:opacity-50"
          >
            {loading ? "..." : "Send It"}
          </button>
        </form>
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 sm:static text-gray-400 hover:text-white p-1"
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
