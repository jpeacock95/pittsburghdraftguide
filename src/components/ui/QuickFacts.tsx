interface QuickFactsProps {
  facts: string[];
}

export function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-8">
      <p className="text-xs font-bold uppercase tracking-wide text-accent mb-2">
        Quick Facts
      </p>
      <ul className="space-y-1.5">
        {facts.map((fact, i) => (
          <li key={i} className="text-sm text-foreground flex items-start gap-2">
            <span className="text-accent mt-0.5 flex-shrink-0">&#10003;</span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
