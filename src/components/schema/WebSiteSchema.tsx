export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pittsburgh Draft Guide",
    url: "https://www.pittsburghdraftguide.com",
    description:
      "The ultimate guide to the 2026 NFL Draft in Pittsburgh. Parking, hotels, restaurants, schedule, and everything you need for April 23-25.",
    publisher: {
      "@type": "Organization",
      name: "Peacock Bookkeeping Services LLC",
      url: "https://www.peacockbookkeepingservices.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cranberry Township",
        addressRegion: "PA",
        addressCountry: "US",
      },
    },
    author: {
      "@type": "Person",
      name: "Jordan Peacock",
      url: "https://www.pittsburghdraftguide.com/about",
    },
    dateModified: "2026-03-31",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
