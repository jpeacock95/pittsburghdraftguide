"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function AnalyticsScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has("notrack")) {
      localStorage.setItem("notrack", "true");
      params.delete("notrack");
      const clean = params.toString()
        ? `${window.location.pathname}?${params}`
        : window.location.pathname;
      window.history.replaceState({}, "", clean);
      return;
    }

    if (params.has("track")) {
      localStorage.removeItem("notrack");
      params.delete("track");
      const clean = params.toString()
        ? `${window.location.pathname}?${params}`
        : window.location.pathname;
      window.history.replaceState({}, "", clean);
    }

    if (!localStorage.getItem("notrack")) {
      setEnabled(true);
    }
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GJ0PDB2N27"
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GJ0PDB2N27');
        `}
      </Script>
      <Script id="clarity-init" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "w5sbligkt7");
        `}
      </Script>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="683b54f5-fcff-4ec7-94ed-1b992587765b"
        strategy="lazyOnload"
      />
    </>
  );
}
