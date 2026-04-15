import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pittsburghdraftguide.com";
  const now = new Date().toISOString();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/tickets-and-venue", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/parking-transportation", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/where-to-stay", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/bars-restaurants", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/schedule", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/faq", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/itinerary", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/watch-parties", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/things-to-do", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/neighborhoods", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/getting-around", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/cranberry-township", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/budget-guide", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/checklist", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/what-to-wear-nfl-draft-pittsburgh", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/nfl-draft-pittsburgh-rain-plan", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/nfl-draft-pittsburgh-kids-family", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog/picksburgh-music-crawl", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
