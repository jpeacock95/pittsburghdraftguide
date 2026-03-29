export function LastUpdated({ date }: { date: string }) {
  return (
    <span className="block text-xs text-gray-400 mt-2">
      Last updated: {date}
    </span>
  );
}
