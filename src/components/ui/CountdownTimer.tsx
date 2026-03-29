"use client";

import { useState, useEffect } from "react";

const DRAFT_START = new Date("2026-04-23T20:00:00-04:00"); // 8 PM ET, Round 1

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) {
    return (
      <div className="bg-accent/20 border border-accent/40 rounded-lg px-4 py-3 text-center">
        <p className="text-lg font-bold text-accent">The Draft Is Happening Now!</p>
        <p className="text-sm text-gray-300">April 23-25 at Point State Park &amp; Acrisure Stadium</p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3">
      <p className="text-xs text-gray-400 text-center mb-2 uppercase tracking-wide font-semibold">
        Countdown to Round 1
      </p>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.days}</p>
          <p className="text-xs text-gray-400">Days</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.hours}</p>
          <p className="text-xs text-gray-400">Hours</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.minutes}</p>
          <p className="text-xs text-gray-400">Min</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-accent">{timeLeft.seconds}</p>
          <p className="text-xs text-gray-400">Sec</p>
        </div>
      </div>
    </div>
  );
}

function getTimeLeft() {
  const now = new Date();
  const total = DRAFT_START.getTime() - now.getTime();

  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}
