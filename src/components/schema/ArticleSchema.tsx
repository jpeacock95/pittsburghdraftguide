export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    image: image || "https://www.pittsburghdraftguide.com/og-image.jpg",
    author: {
      "@type": "Person",
      name: "Jordan Peacock",
      url: "https://www.pittsburghdraftguide.com/about",
      sameAs: [
        "https://www.peacockbookkeepingservices.com",
        "https://www.linkedin.com/in/jordanpeacockmba/",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Pittsburgh Draft Guide",
      url: "https://www.pittsburghdraftguide.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.pittsburghdraftguide.com/og-image.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
