import Link from "next/link";

export function AuthorByline() {
  return (
    <div className="bg-primary-dark/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-1.5">
        <p className="text-xs text-gray-400 text-center sm:text-right">
          By{" "}
          <Link
            href="/about"
            className="text-gray-300 hover:text-white font-medium"
          >
            Jordan Peacock
          </Link>
          , Cranberry Township local{" "}
          <span className="hidden sm:inline">·</span>{" "}
          <Link
            href="/about"
            className="text-gray-400 hover:text-white"
          >
            About this guide
          </Link>
        </p>
      </div>
    </div>
  );
}
