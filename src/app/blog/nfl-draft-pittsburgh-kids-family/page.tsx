import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Bringing Kids to the NFL Draft in Pittsburgh",
  description:
    "Is the 2026 NFL Draft in Pittsburgh family-friendly? Yes. Here's what kids can do at the Draft Experience, nearby attractions, and tips for families.",
};

const faqs = [
  {
    question: "Is the NFL Draft family-friendly?",
    answer:
      "Yes. The Draft Experience is designed for all ages. Kids can run the 40-yard dash, try the field goal challenge, visit the autograph stage, and explore interactive exhibits. It's all free with general admission.",
  },
  {
    question: "Can I bring a stroller to the NFL Draft?",
    answer:
      "Strollers are allowed but expect big crowds, especially Thursday and Friday. The Draft Experience areas are mostly flat and accessible. Saturday is the least crowded day and easiest for strollers.",
  },
  {
    question: "What's the best day to bring kids to the NFL Draft?",
    answer:
      "Saturday, April 25. It's the shortest day (Rounds 4-7), the crowds are smaller, and lines for Draft Experience activities are much shorter. Kids won't have to wait as long for the 40-yard dash or autograph stage.",
  },
  {
    question: "What else can families do near the NFL Draft in Pittsburgh?",
    answer:
      "Carnegie Science Center is on the North Shore (walking distance from the draft). The Children's Museum is nearby. The National Aviary is open Saturday and Sunday. Pittsburgh Zoo is a 15-minute drive. Kennywood amusement park opens the same weekend.",
  },
];

export default function KidsFamilyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          {
            name: "Bringing Kids to the NFL Draft in Pittsburgh",
            href: "/blog/nfl-draft-pittsburgh-kids-family",
          },
        ]}
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Bringing Kids to the NFL Draft
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Bringing Kids to the NFL Draft in Pittsburgh
          </h1>
          <p className="text-gray-300">
            The draft is one of the best free family events you'll find.
            Here's what kids can do, where else to go, and how to make it
            work with little ones.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Draft Experience for kids */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            The Draft Experience Is Built for Kids
          </h2>
          <p className="text-muted mb-3">
            The Draft Experience is the NFL's free fan zone that runs
            alongside the actual draft. It's huge. And it's packed with
            stuff kids love. Everything here is free with general admission
            (which is also free).
          </p>
          <div className="space-y-3">
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold">40-Yard Dash</p>
              <p className="text-sm text-muted">
                Kids can run the same 40-yard dash the prospects run at the
                Combine. They get timed and everything. This is usually the
                longest line, so hit it early in the day.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold">Field Goal Challenge</p>
              <p className="text-sm text-muted">
                Kick a field goal through real uprights. Sized for all ages.
                Kids go absolutely nuts for this one.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold">Autograph Stage</p>
              <p className="text-sm text-muted">
                Current and former NFL players sign autographs at scheduled
                times throughout the event. Check the{" "}
                <Link
                  href="/schedule"
                  className="text-primary font-semibold hover:underline"
                >
                  draft schedule
                </Link>{" "}
                for specific times once they're announced.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold">Interactive Exhibits</p>
              <p className="text-sm text-muted">
                Past drafts have featured a Lombardi Trophy photo op, a
                helmet display from all 32 teams, and hands-on football
                drills. Pittsburgh's setup will likely be the biggest yet.
              </p>
            </div>
          </div>
        </section>

        {/* Nearby family attractions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Family Attractions Near the Draft
          </h2>
          <p className="text-muted mb-4">
            Pittsburgh has a ton for families beyond the draft itself.
            Some of these are walking distance from the venues. Check our{" "}
            <Link
              href="/things-to-do"
              className="text-primary font-semibold hover:underline"
            >
              full things to do guide
            </Link>{" "}
            for even more options.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-3 font-semibold">Attraction</th>
                  <th className="text-left p-3 font-semibold">Distance</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3">Carnegie Science Center</td>
                  <td className="p-3">0.5 miles</td>
                  <td className="p-3 text-muted">
                    On the North Shore. Walk from Acrisure Stadium. SportsWorks
                    exhibit is perfect for draft weekend.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Children's Museum</td>
                  <td className="p-3">0.7 miles</td>
                  <td className="p-3 text-muted">
                    Also on the North Shore. Great for ages 2-10. Indoor, so
                    it's a good rain backup.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">National Aviary</td>
                  <td className="p-3">0.8 miles</td>
                  <td className="p-3 text-muted">
                    The only standalone aviary in the US. Open Saturday and
                    Sunday. CLOSED Thursday and Friday.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Pittsburgh Zoo</td>
                  <td className="p-3">15 min drive</td>
                  <td className="p-3 text-muted">
                    In Highland Park. About 6 miles from downtown. Uber or
                    drive.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Kennywood</td>
                  <td className="p-3">20 min drive</td>
                  <td className="p-3 text-muted">
                    Classic amusement park. Opens for the 2026 season the
                    same weekend as the draft. About 12 miles east.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips for families */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Tips for Families at the Draft
          </h2>
          <ul className="space-y-3 text-muted list-disc pl-5">
            <li>
              <strong>Go Saturday.</strong> Smallest crowds, shortest lines,
              quickest day. Thursday night is electric but overwhelming for
              little kids. Saturday is the sweet spot.
            </li>
            <li>
              <strong>Arrive early.</strong> The Draft Experience opens before
              the actual picks start. Get there when gates open and you'll
              hit the 40-yard dash and field goal challenge with minimal
              wait.
            </li>
            <li>
              <strong>Strollers work, but barely.</strong> They're allowed,
              but navigating through 200,000+ people with a stroller is
              tough. If your kid can walk, let them walk. If you need the
              stroller, Saturday is much easier.
            </li>
            <li>
              <strong>Clear bag policy applies to diaper bags too.</strong>{" "}
              The NFL's bag rules don't make exceptions. Use a clear bag
              for diapers, snacks, and supplies. Check the{" "}
              <Link
                href="/checklist"
                className="text-primary font-semibold hover:underline"
              >
                draft day checklist
              </Link>{" "}
              for the full bag policy.
            </li>
            <li>
              <strong>Bring snacks.</strong> Food lines get long. Kids get
              hungry. Pack snacks in your clear bag to avoid a meltdown
              while you're waiting 30 minutes for chicken tenders.
            </li>
            <li>
              <strong>Set a meeting spot.</strong> Cell service gets
              unreliable with this many people in one area. Pick a visible
              landmark as your family's meeting point in case you get
              separated.
            </li>
            <li>
              <strong>Hearing protection for babies and toddlers.</strong>{" "}
              It gets loud. The main stage has massive speakers. If you have
              a baby or toddler, bring ear protection. You can grab baby
              ear muffs on Amazon for about $15.
            </li>
          </ul>
        </section>

        {/* Best day breakdown */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Which Day Is Best for Families?
          </h2>
          <div className="space-y-3">
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold">Thursday (April 23) - Round 1</p>
              <p className="text-sm text-muted">
                The biggest crowd. The most energy. Also the most chaotic.
                Great for older kids (10+) who can handle long waits and big
                crowds. Tough for toddlers and young kids.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="font-semibold">Friday (April 24) - Rounds 2-3</p>
              <p className="text-sm text-muted">
                Still crowded but less intense than Thursday. A solid middle
                ground. Draft Experience lines are shorter than Day 1.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="font-semibold text-amber-900">
                Saturday (April 25) - Rounds 4-7 (Best for families)
              </p>
              <p className="text-sm text-amber-800">
                Smallest crowd. Shortest lines. The day moves fast. You can
                do the full Draft Experience in 2-3 hours without insane
                waits. This is the day for young kids, strollers, and
                families who want to enjoy it without the chaos.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-surface border border-border rounded-lg p-5"
              >
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-2">
            Plan your family's draft weekend.
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Get the full schedule, packing list, and everything else you
            need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/things-to-do"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Things to Do
            </Link>
            <Link
              href="/schedule"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Draft Schedule
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
