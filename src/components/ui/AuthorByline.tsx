import Link from "next/link";

export function AuthorByline() {
  return (
    <div className="border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <p className="text-xs text-muted text-center sm:text-right tracking-wide">
          By{" "}
          <Link
            href="/about"
            className="text-foreground hover:text-accent font-medium transition-colors"
          >
            Jordan Peacock
          </Link>
          , Cranberry Township local{" "}
          <span className="hidden sm:inline text-border">&middot;</span>{" "}
          <Link
            href="/about"
            className="text-muted hover:text-accent transition-colors"
          >
            About this guide
          </Link>
        </p>
      </div>
    </div>
  );
}
