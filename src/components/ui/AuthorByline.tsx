import { TrackedLink } from "@/components/ui/TrackedLink";

export function AuthorByline() {
  return (
    <div className="border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <p className="text-xs text-muted text-center sm:text-right tracking-wide">
          By{" "}
          <TrackedLink
            href="/about"
            eventName="peacock_byjordan_header_click"
            className="text-foreground hover:text-accent font-medium transition-colors"
          >
            Jordan Peacock
          </TrackedLink>
          , Cranberry Township local{" "}
          <span className="hidden sm:inline text-border">&middot;</span>{" "}
          <TrackedLink
            href="/about"
            eventName="peacock_aboutguide_header_click"
            className="text-muted hover:text-accent transition-colors"
          >
            About this guide
          </TrackedLink>
        </p>
      </div>
    </div>
  );
}
