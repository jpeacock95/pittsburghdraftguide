"use client";

import { useState } from "react";

export function FeedbackWidget() {
  const [voted, setVoted] = useState(false);
  const [vote, setVote] = useState<"yes" | "no" | null>(null);

  async function handleVote(value: "yes" | "no") {
    setVote(value);
    setVoted(true);

    try {
      await fetch(
        "https://formsubmit.co/ajax/jordan@peacockbookkeepingservices.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            feedback: value,
            page: typeof window !== "undefined" ? window.location.pathname : "",
            _subject: `Draft Guide feedback: ${value}`,
          }),
        }
      );
    } catch {
      // Silent fail — don't disrupt the user
    }
  }

  if (voted) {
    return (
      <div className="text-center py-6">
        <p className="text-sm text-muted">
          {vote === "yes"
            ? "Glad it helped! Share it with someone who needs it."
            : "Thanks for the honesty. We're working on making it better."}
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-6 border-t border-border mt-8">
      <p className="text-sm font-semibold mb-3">Was this guide helpful?</p>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => handleVote("yes")}
          className="px-5 py-2 bg-green-50 border border-green-200 rounded-lg text-sm font-semibold text-green-800 hover:bg-green-100 transition-colors"
        >
          👍 Yes
        </button>
        <button
          onClick={() => handleVote("no")}
          className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
        >
          👎 Not really
        </button>
      </div>
    </div>
  );
}
