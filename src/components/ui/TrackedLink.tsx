"use client";

interface TrackedLinkProps {
  href: string;
  eventName: string; // e.g. "dante_remax_button_click", "peacock_calendly_click"
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackedLink({
  href,
  eventName,
  children,
  className,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    const isOutbound = e.currentTarget.target === "_blank"
      || e.currentTarget.href.startsWith("tel:")
      || e.currentTarget.href.startsWith("mailto:");

    // GA4 event
    if (typeof w.gtag === "function") {
      w.gtag("event", eventName, {
        link_url: href,
        transport_type: "beacon",
      });
    }

    // Umami event
    if (w.umami && typeof w.umami.track === "function") {
      w.umami.track(eventName, { link_url: href });
    }

    // For internal links, brief delay so events fire before navigating
    if (!isOutbound) {
      const destination = trackedHref;
      e.preventDefault();
      setTimeout(() => {
        window.location.href = destination;
      }, 150);
    }
  };

  // Add UTM params for Dante's RE/MAX links
  let trackedHref = href;
  if (eventName.startsWith("dante_remax") && href.includes("danteegizio.remax.com")) {
    const separator = href.includes("?") ? "&" : "?";
    trackedHref = `${href}${separator}utm_source=pittsburghdraftguide&utm_medium=referral&utm_campaign=draft2026&utm_content=${eventName}`;
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
