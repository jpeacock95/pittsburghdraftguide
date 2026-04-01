/**
 * Submits an email to both FormSubmit (inbox notification) and Google Sheets (permanent storage).
 * If either one fails, the other still works. Both run in parallel.
 */

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/jordan@peacockbookkeepingservices.com";
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwnkTgIwyaU7aHXJN1YIVO2B0hg3zLS2yzJDyUnw7VWZHo_je_zZ1IoV68BSf0lGjzd7g/exec";

export async function submitEmail(email: string, source: string) {
  const results = await Promise.allSettled([
    // FormSubmit: sends you an email notification
    fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        email,
        _honey: "",
        _subject: "New Draft Guide subscriber!",
        source,
      }),
    }),

    // Google Sheets: permanent backup of every email
    GOOGLE_SHEETS_URL
      ? fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source }),
          mode: "no-cors",
        })
      : Promise.resolve(null),
  ]);

  // Return true if at least one succeeded
  return results.some(
    (r) => r.status === "fulfilled" && r.value !== null
  );
}
