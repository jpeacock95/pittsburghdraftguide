"use client";

interface TrackedLinkProps {
  href: string;
  partner: "dante" | "peacock" | "affiliate";
  action: string; // e.g. "remax_profile", "calendly", "phone", "website", "email"
  page: string; // e.g. "about", "where-to-stay", "neighborhoods", "footer"
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackedLink({
  href,
  partner,
  action,
  page,
  children,
  className,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = () => {
    if (typeof window === "undefined") return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    // GA4 event
    if (typeof w.gtag === "function") {
      w.gtag("event", "partner_click", {
        partner_name: partner,
        click_action: action,
        source_page: page,
      });
    }

    // Umami event
    if (w.umami && typeof w.umami.track === "function") {
      w.umami.track(`${partner}_click`, {
        action: action,
        page: page,
      });
    }
  };

  // Add UTM params for Dante's RE/MAX links
  let trackedHref = href;
  if (partner === "dante" && href.includes("danteegizio.remax.com")) {
    const separator = href.includes("?") ? "&" : "?";
    trackedHref = `${href}${separator}utm_source=pittsburghdraftguide&utm_medium=referral&utm_campaign=draft2026&utm_content=${page}`;
  }

  return (
    <a
      href={trackedHref}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
