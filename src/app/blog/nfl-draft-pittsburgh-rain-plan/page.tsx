import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "NFL Draft Pittsburgh Rain Plan: What Happens If It Rains?",
  description:
    "What happens if it rains during the 2026 NFL Draft in Pittsburgh? The event is mostly outdoors. Here's the rain plan and how to prepare.",
};

const faqs = [
  {
    question: "Does the NFL Draft get cancelled if it rains?",
    answer:
      "No. The NFL Draft has never been cancelled for rain. Past drafts in Nashville (2019) and other outdoor cities ran through rain without stopping. The 2026 Pittsburgh draft will go on rain or shine.",
  },
  {
    question: "Is the NFL Draft in Pittsburgh indoors or outdoors?",
    answer:
      "Mostly outdoors. The main stage is at Point State Park (outdoor). The Draft Experience fan zone spans the North Shore and Roberto Clemente Bridge (outdoor). Some activities may be under tents, but plan for an outdoor event.",
  },
  {
    question: "What should I bring to the NFL Draft if it rains?",
    answer:
      "A packable rain poncho (better than an umbrella in big crowds), a waterproof phone case ($8-10 on Amazon), waterproof shoes if you have them, and a clear plastic bag to protect electronics. Skip the umbrella. You'll block everyone's view.",
  },
  {
    question: "Where can I take shelter near the NFL Draft if it rains?",
    answer:
      "Nearby options include bars and restaurants on the North Shore (check our bars and restaurants guide), the Allegheny T station (covered), and hotel lobbies downtown. The Cultural District on Penn Avenue also has covered walkways.",
  },
];

export default function RainPlanPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          {
            name: "NFL Draft Pittsburgh Rain Plan",
            href: "/blog/nfl-draft-pittsburgh-rain-plan",
          },
        ]}
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / NFL Draft Pittsburgh Rain Plan
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            NFL Draft Pittsburgh Rain Plan: What Happens If It Rains?
          </h1>
          <p className="text-gray-300">
            The draft is mostly outdoors. It doesn't stop for rain. Here's
            what you need to know and how to prepare.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* The short answer */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            The Short Answer: It Goes On. Rain or Shine.
          </h2>
          <p className="text-muted mb-3">
            The NFL Draft has never been cancelled for weather. Not once.
            The 2019 draft in Nashville saw rain on Day 2. Fans stood in it.
            The picks kept coming. The 2026 Pittsburgh draft will be exactly
            the same.
          </p>
          <p className="text-muted">
            There's no backup indoor venue. There's no rain delay. The main
            stage at Point State Park, the Draft Experience on the North
            Shore, and the Roberto Clemente Bridge walkway are all outdoor
            setups. If it rains, you get wet. That's the plan.
          </p>
        </section>

        {/* What to expect */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            What Rain Actually Looks Like at a Draft
          </h2>
          <p className="text-muted mb-3">
            Pittsburgh gets rain about 30% of April days. That doesn't mean
            all-day downpours. Most April rain in Pittsburgh comes in
            scattered showers. 20-30 minutes of rain, then it clears up.
            Sometimes it comes back. Sometimes it doesn't.
          </p>
          <p className="text-muted mb-3">
            The bigger issue isn't the rain itself. It's what rain does to
            an outdoor event with 200,000+ people:
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5">
            <li>Grass areas at Point State Park turn muddy fast</li>
            <li>Wait times for activities can actually drop (some people leave)</li>
            <li>The T light rail and buses get more crowded as people rush to leave</li>
            <li>Phone screens get hard to use with wet fingers</li>
            <li>Temperatures can drop 10-15 degrees when rain moves in</li>
          </ul>
        </section>

        {/* What to bring */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            What to Bring If Rain Is in the Forecast
          </h2>
          <div className="space-y-3">
            <div className="card-minimal p-4">
              <p className="font-semibold">Packable rain poncho</p>
              <p className="text-sm text-muted">
                $5 at Target or Walmart. Folds up to the size of your fist.
                Way better than an umbrella in a crowd. Umbrellas block
                sight lines and you'll annoy everyone around you. Buy 2
                in case one rips.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">Waterproof phone case</p>
              <p className="text-sm text-muted">
                $8-10 on Amazon. You'll be taking photos, checking the{" "}
                <Link
                  href="/schedule"
                  className="text-primary font-semibold hover:underline"
                >
                  draft schedule
                </Link>
                , and using maps all day. A wet phone is a dead phone. The
                case pays for itself 10 times over.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">Waterproof shoes (or old shoes you don't care about)</p>
              <p className="text-sm text-muted">
                If rain is likely, skip the nice sneakers. Wear shoes that
                can handle puddles and mud. Point State Park's grass areas
                won't drain well with hundreds of thousands of feet on them.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">Extra layer</p>
              <p className="text-sm text-muted">
                Rain drops the temperature. If it's 65 and sunny at noon,
                it could be 50 and raining by 3 PM. A hoodie or light
                jacket under your poncho keeps you comfortable.
              </p>
            </div>
          </div>
          <p className="text-muted mt-4">
            For the complete list, check the{" "}
            <Link
              href="/checklist"
              className="text-primary font-semibold hover:underline"
            >
              full draft day checklist
            </Link>
            .
          </p>
        </section>

        {/* Where to take shelter */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Where to Take Shelter If It Pours
          </h2>
          <p className="text-muted mb-4">
            If a real downpour hits and you need to duck inside, here are
            your closest options near the draft venues:
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5">
            <li>
              <strong>North Shore bars and restaurants.</strong> Burgatory,
              Southern Tier, Tequila Cowboy, and others are all within
              walking distance of Acrisure Stadium. Check our{" "}
              <Link
                href="/bars-restaurants"
                className="text-primary font-semibold hover:underline"
              >
                bars and restaurants guide
              </Link>{" "}
              for the full list.
            </li>
            <li>
              <strong>Allegheny T Station.</strong> The light rail station on
              the North Shore has covered areas. It's also your escape route
              if you decide to call it a day.
            </li>
            <li>
              <strong>Downtown hotel lobbies.</strong> The Omni William Penn,
              Renaissance, and Marriott City Center are all within a few
              blocks of Point State Park.
            </li>
            <li>
              <strong>Cultural District (Penn Avenue).</strong> Covered
              walkways and plenty of restaurants between 6th and 10th Streets.
            </li>
          </ul>
        </section>

        {/* Saturday tip */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Pro Tip: Saturday Is Your Safety Net
          </h2>
          <p className="text-muted mb-3">
            If weather is your biggest concern, Saturday (April 25) is the
            safest bet. It's the shortest draft day. Rounds 4-7 move fast.
            You can show up, catch the action, explore the Draft Experience
            with shorter lines, and leave before evening.
          </p>
          <p className="text-muted">
            Thursday night (Round 1) is the big show, but it's also the
            longest day and the biggest crowd. If rain is in the forecast
            for Thursday, Saturday gives you a backup plan with a shorter
            time commitment. Check the{" "}
            <Link
              href="/schedule"
              className="text-primary font-semibold hover:underline"
            >
              full schedule breakdown
            </Link>{" "}
            to plan your day.
          </p>
        </section>

        {/* FAQ section */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="card-minimal p-5"
              >
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-dark text-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-heading mb-2">
            Don't let rain ruin your trip.
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Plan ahead and you'll have a great time no matter what the
            weather does.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/checklist"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Draft Day Checklist
            </Link>
            <Link
              href="/bars-restaurants"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg border border-white/20 transition-colors text-sm"
            >
              Bars &amp; Restaurants
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
