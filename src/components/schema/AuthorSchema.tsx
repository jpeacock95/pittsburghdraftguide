export function AuthorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jordan Peacock",
    jobTitle: "Owner, Peacock Bookkeeping Services LLC",
    description:
      "Cranberry Township resident, QuickBooks ProAdvisor, and builder of the Pittsburgh Draft Guide. Researched 27 Reddit threads, 70+ local businesses, and verified all information with local news sources.",
    url: "https://www.pittsburghdraftguide.com/about",
    sameAs: [
      "https://www.peacockbookkeepingservices.com",
      "https://www.linkedin.com/company/peacock-bookkeeping-services",
    ],
    knowsAbout: [
      "Pittsburgh",
      "Cranberry Township",
      "NFL Draft 2026",
      "Pittsburgh neighborhoods",
      "Pittsburgh parking and transit",
    ],
    homeLocation: {
      "@type": "Place",
      name: "Cranberry Township, PA",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cranberry Township",
        addressRegion: "PA",
        addressCountry: "US",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
