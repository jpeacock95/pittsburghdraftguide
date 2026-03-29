import Link from "next/link";

export function AuthorByline() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 border-t border-border mt-12">
      <p className="text-sm text-muted text-center">
        Built by Jordan Peacock, Cranberry Township local.{" "}
        <Link
          href="/about"
          className="text-primary font-semibold hover:underline"
        >
          About this guide
        </Link>
      </p>
    </div>
  );
}
