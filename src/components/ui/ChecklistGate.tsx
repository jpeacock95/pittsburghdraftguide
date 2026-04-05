"use client";

import { useState, useEffect } from "react";
import { submitEmail } from "@/lib/submitEmail";

const STORAGE_KEY = "checklist_unlocked";

export function ChecklistGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUnlocked(localStorage.getItem(STORAGE_KEY) === "1");
      setChecked(true);
    }
  }, []);

  // Don't render gated content until we've checked localStorage (prevents flash)
  if (!checked) return null;
  if (unlocked) return <>{children}</>;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await submitEmail(email, "checklist_gate");
    } catch {
      // Still unlock even if submission fails — don't block the user
    }

    localStorage.setItem(STORAGE_KEY, "1");
    setLoading(false);
    setUnlocked(true);
  }

  return (
    <div className="relative">
      {/* Blurred preview of gated content */}
      <div className="max-h-[300px] overflow-hidden relative" aria-hidden="true">
        <div className="blur-[6px] pointer-events-none select-none">
          {children}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
      </div>

      {/* Email gate */}
      <div className="relative -mt-8 max-w-lg mx-auto px-4">
        <div className="bg-surface border-2 border-accent/40 rounded-xl p-6 sm:p-8 shadow-lg text-center">
          <div className="text-3xl mb-3">📋</div>
          <h3 className="font-heading text-xl sm:text-2xl mb-2">
            Get the Full Checklist
          </h3>
          <p className="text-sm text-muted mb-5">
            Enter your email to unlock the complete packing list, bag policy,
            day-of checklist, key times, transit info, and printable PDF.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              title="Do not fill this field"
            />
            <input
              type="email"
              required
              placeholder="your@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg text-base sm:text-sm text-foreground bg-white border border-border flex-1 min-w-0 min-h-[44px]"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-accent-dark text-foreground font-bold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap disabled:opacity-50 min-h-[44px]"
            >
              {loading ? "Unlocking..." : "Unlock Checklist"}
            </button>
          </form>
          <p className="text-xs text-muted mt-3">
            No spam. Just the checklist. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Call this from any component to check if the checklist is unlocked */
export function isChecklistUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === "1";
}

/** Call this after a successful email submission to unlock the checklist */
export function unlockChecklist() {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, "1");
  }
}
