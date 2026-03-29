"use client";

import { useState } from "react";
import Link from "next/link";

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
          source: "inline",
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
      <section className="bg-green-50 border border-green-200 rounded-lg p-6 text-center my-8">
        <p className="font-bold text-green-900 text-lg">Your checklist is ready!</p>
        <p className="text-sm text-green-800 mt-2 mb-4">
          View it online or download the PDF to print and bring with you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/checklist"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors min-h-[44px]"
          >
            View Checklist Online
          </Link>
          <a
            href="/draft-weekend-checklist.pdf"
            download
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors min-h-[44px]"
          >
            Download PDF
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
      <div className="max-w-lg mx-auto text-center">
        <h3 className="font-bold text-lg mb-1">
          Free Draft Weekend Checklist
        </h3>
        <p className="text-sm text-muted mb-4">
          Everything you need to pack, plan, and know before you go. Enter your
          email and get instant access.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" title="Do not fill this field" />
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg text-base sm:text-sm text-foreground bg-white border border-border flex-1 min-w-0"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-accent hover:bg-accent-dark text-foreground font-bold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap disabled:opacity-50 min-h-[44px]"
          >
            {loading ? "Loading..." : "Get the Checklist"}
          </button>
        </form>
      </div>
    </section>
  );
}
