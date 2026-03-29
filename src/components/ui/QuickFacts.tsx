interface QuickFactsProps {
  facts: string[];
}

export function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <div className="border-l-2 border-accent pl-5 py-2 mb-8">
      <p className="label mb-3">
        At a Glance
      </p>
      <ul className="space-y-2">
        {facts.map((fact, i) => (
          <li key={i} className="text-sm text-foreground leading-relaxed">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
