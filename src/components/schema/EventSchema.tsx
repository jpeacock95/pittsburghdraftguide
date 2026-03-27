export function EventSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "2026 NFL Draft",
    description:
      "The 2026 NFL Draft takes place in Pittsburgh, PA at Point State Park and the North Shore near Acrisure Stadium. Free entry with NFL OnePass registration.",
    startDate: "2026-04-23T20:00:00-04:00",
    endDate: "2026-04-25T18:00:00-04:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Point State Park & North Shore",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Point State Park",
        addressLocality: "Pittsburgh",
        addressRegion: "PA",
        postalCode: "15222",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "National Football League",
      url: "https://www.nfl.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Free entry with NFL OnePass app registration",
    },
    image: "https://pittsburghdraftguide.com/og-image.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
