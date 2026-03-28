type ListItem = {
  name: string;
  description: string;
  url?: string;
};

export function ItemListSchema({
  name,
  items,
}: {
  name: string;
  items: ListItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "LocalBusiness",
        name: item.name,
        description: item.description,
        ...(item.url && { url: item.url }),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
