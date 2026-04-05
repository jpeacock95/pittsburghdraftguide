"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { submitEmail } from "@/lib/submitEmail";
import { unlockChecklist, isChecklistUnlocked } from "@/components/ui/ChecklistGate";

export function EmailBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [checklistUnlocked, setChecklistUnlocked] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check sessionStorage on mount for previous dismissal
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("banner_dismissed")) {
        setDismissed(true);
      }
      setChecklistUnlocked(isChecklistUnlocked());
    }
  }, []);

  // Clear email field when navigating between pages
  useEffect(() => {
    setEmail("");
  }, [pathname]);

  function dismiss() {
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("banner_dismissed", "1");
    }
  }

  if (dismissed) return null;

  // On /checklist page: show green PDF banner only if email was submitted
  if (pathname === "/checklist") {
    if (!checklistUnlocked) return null; // Don't show PDF banner if not unlocked
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-green-800 text-white border-t border-green-600 shadow-lg">
        <div className="max-w-4xl mx-auto px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between gap-2">
          <p className="font-bold text-xs sm:text-sm flex-1">
            Want to print this? Grab the PDF.
          </p>
          <a
            href="/pdg-checklist-9f3a7e2d.pdf"
            download
            className="bg-white text-green-800 hover:bg-green-50 font-bold px-4 py-2.5 rounded-lg text-xs sm:text-sm transition-colors whitespace-nowrap min-h-[44px] flex items-center flex-shrink-0"
          >
            Download PDF
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="text-green-300 hover:text-white p-3 flex-shrink-0"
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

  // On all other pages: show blue email capture banner
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await submitEmail(email, "banner");
    } catch {
      // Email capture failed silently, still redirect
    }
    unlockChecklist();
    setLoading(false);
    router.push("/checklist");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary-dark text-white border-t border-white/20 shadow-lg">
      <div className="max-w-4xl mx-auto px-3 py-2 sm:px-4 sm:py-2.5">
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
              aria-label="Email address"
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
            type="button"
            onClick={dismiss}
            className="absolute top-1 right-1 sm:static text-gray-400 hover:text-white p-3"
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
