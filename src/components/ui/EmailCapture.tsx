"use client";

import { useState } from "react";

export function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
          _autoresponse: "Thanks for grabbing the Draft Weekend Checklist!\n\nDownload your PDF here:\nhttps://www.pittsburghdraftguide.com/draft-weekend-checklist.pdf\n\nOr view the full checklist online:\nhttps://www.pittsburghdraftguide.com/checklist\n\nKey links:\n- Parking Guide: https://www.pittsburghdraftguide.com/parking-transportation\n- Where to Stay: https://www.pittsburghdraftguide.com/where-to-stay\n- Day-by-Day Itinerary: https://www.pittsburghdraftguide.com/itinerary\n- Bars & Restaurants: https://www.pittsburghdraftguide.com/bars-restaurants\n\nHave an amazing draft weekend!\n- Pittsburgh Draft Guide (built by Peacock Bookkeeping Services, Cranberry Township PA)",
          source: "inline",
        }),
      });
      setSubmitted(true);
      try { localStorage.setItem("checklist_subscribed", "1"); } catch {}
    } catch {
      setSubmitted(true);
      try { localStorage.setItem("checklist_subscribed", "1"); } catch {}
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <section className="bg-green-50 border border-green-200 rounded-lg p-6 text-center my-8">
        <p className="font-bold text-green-900 text-lg">You're in!</p>
        <p className="text-sm text-green-800 mt-2 mb-3">
          Here's your Draft Weekend Checklist. Bookmark it and check it the
          night before you head to Pittsburgh.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <a
            href="/checklist"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            View Checklist
          </a>
          <a
            href="/draft-weekend-checklist.pdf"
            download
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Download PDF
          </a>
        </div>
        <p className="text-xs text-green-700 mt-3">
          We also sent the PDF link to your email. The PDF download stays
          available at the bottom of every page.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
      <div className="max-w-lg mx-auto text-center">
        <h3 className="font-bold text-lg mb-1">
          Get the Draft Weekend Checklist
        </h3>
        <p className="text-sm text-muted mb-4">
          Everything you need to pack, plan, and know before you go. Drop your
          email and get instant access to the checklist.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" title="Do not fill this field" />
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2.5 rounded-lg text-sm text-foreground bg-white border border-border flex-1 min-w-0"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-accent hover:bg-accent-dark text-foreground font-bold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Me the Checklist"}
          </button>
        </form>
      </div>
    </section>
  );
}
