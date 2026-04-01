"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitEmail } from "@/lib/submitEmail";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await submitEmail(email, "inline");
    } catch {
      // Email capture failed silently, still redirect
    }
    setLoading(false);
    router.push("/checklist");
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
            aria-label="Email address"
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
