"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteSearch } from "@/components/ui/SiteSearch";

const navLinks = [
  { href: "/parking-transportation", label: "Parking" },
  { href: "/where-to-stay", label: "Hotels" },
  { href: "/bars-restaurants", label: "Food & Drink" },
  { href: "/schedule", label: "Schedule" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary-dark text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-heading text-xl font-bold tracking-tight">
            Pittsburgh Draft Guide
          </span>
          <span className="hidden sm:inline bg-accent/90 text-primary-dark text-xs font-bold px-2 py-0.5 rounded">
            2026
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <SiteSearch />
        </nav>

        {/* Mobile: search + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <SiteSearch />
          <button
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 px-4 py-2 bg-primary-dark/95 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 px-3 text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
