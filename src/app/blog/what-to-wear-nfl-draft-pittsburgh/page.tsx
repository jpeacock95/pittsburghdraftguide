import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "What to Wear to the NFL Draft in Pittsburgh",
  description:
    "What to wear to the 2026 NFL Draft in Pittsburgh. April weather is unpredictable - here's what to pack for 45-75 degree temperatures, rain, and a full day outside.",
};

const faqs = [
  {
    question: "What should I wear to the NFL Draft in Pittsburgh?",
    answer:
      "Dress in layers. April in Pittsburgh can swing from 45 to 75 degrees in a single day. Wear a t-shirt or jersey as your base, bring a hoodie or light jacket, and pack a rain poncho. Comfortable walking shoes are a must.",
  },
  {
    question: "Can I wear a jersey to the NFL Draft?",
    answer:
      "Absolutely. Jerseys are encouraged. You'll see every NFL team represented. Steelers gear is the most common, but wear whatever team you support. It's part of the fun.",
  },
  {
    question: "What shoes should I wear to the NFL Draft?",
    answer:
      "Worn-in sneakers or walking shoes. You'll cover 5-10 miles on your feet between Point State Park and Acrisure Stadium. Don't wear new shoes, heels, or sandals. Your feet will thank you.",
  },
  {
    question: "What can't I bring to the NFL Draft?",
    answer:
      "Bags must be clear and no larger than 12x6x12 inches. No backpacks, purses, or oversized bags. Small clutches (4.5x6.5 inches) are allowed. Check the NFL's clear bag policy before you pack.",
  },
];

export default function WhatToWearPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          {
            name: "What to Wear to the NFL Draft in Pittsburgh",
            href: "/blog/what-to-wear-nfl-draft-pittsburgh",
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
            / What to Wear to the NFL Draft
          </p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            What to Wear to the NFL Draft in Pittsburgh
          </h1>
          <p className="text-gray-300">
            April weather in Pittsburgh is unpredictable. Here's how to dress
            for 45-75 degree temperatures, possible rain, and a full day on
            your feet.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <div className="border-l-2 border-accent pl-5 mb-8">
          <p className="text-sm text-foreground">
            <strong>Quick answer:</strong> Layers. Pittsburgh in late April averages 45-65&#176;F. Rain is likely at least one of the three days. Wear comfortable shoes, bring a light rain jacket, and don't count on warm weather. Check the{" "}
            <a href="https://forecast.weather.gov/MapClick.php?CityName=Pittsburgh&state=PA" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">7-day forecast</a>{" "}
            the week before you go.
          </p>
        </div>

        {/* April weather reality */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Pittsburgh in April: Expect Everything
          </h2>
          <p className="text-muted mb-3">
            Here's the thing about April in Pittsburgh. It doesn't pick a
            season. You could get 75 degrees and sunshine on Thursday, then
            45 degrees and sideways rain on Friday. The 2026 NFL Draft runs
            April 23-25, and the 10-year average for late April sits around
            58 degrees. But averages don't mean much when the range is 40 to
            80.
          </p>
          <p className="text-muted">
            The draft is almost entirely outdoors. Point State Park, Acrisure
            Stadium, the Roberto Clemente Bridge. You'll be outside for 6-12
            hours. Dress wrong and you're miserable. Dress right and you
            won't even think about it.
          </p>
        </section>

        {/* Layers strategy */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            The Layer Strategy (This Is the Move)
          </h2>
          <p className="text-muted mb-4">
            Layers are the answer. Not one big coat. Not just a t-shirt.
            Layers you can add and remove as the day changes.
          </p>
          <div className="space-y-3">
            <div className="card-minimal p-4">
              <p className="font-semibold">Base: T-shirt or jersey</p>
              <p className="text-sm text-muted">
                Your team jersey works perfectly here. It's comfortable, it's
                fun, and it's the one place where wearing a jersey is 100%
                the right call. If you don't have a jersey, any comfortable
                t-shirt works.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">Mid layer: Hoodie or light jacket</p>
              <p className="text-sm text-muted">
                Something you can tie around your waist when it warms up.
                A zip-up hoodie is ideal because you can open it up without
                taking it off. Avoid bulky coats. You'll regret carrying
                them by noon.
              </p>
            </div>
            <div className="card-minimal p-4">
              <p className="font-semibold">Rain layer: Packable poncho</p>
              <p className="text-sm text-muted">
                A $5 disposable poncho from Target takes up zero space and
                saves your entire day if it rains. Umbrellas are annoying in
                crowds of 200,000+ people. Stick with the poncho.
              </p>
            </div>
          </div>
        </section>

        {/* Shoes */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Shoes: The Most Important Decision You'll Make
          </h2>
          <p className="text-muted mb-3">
            This isn't an exaggeration. You'll walk 5-10 miles during a full
            draft day. Point State Park to Acrisure Stadium is about a mile
            each way. Add in walking through the Draft Experience, exploring
            the fan zone, hitting restaurants, and getting to transit stops.
            It adds up fast.
          </p>
          <div className="border-l-2 border-accent pl-5 mb-4">
            <p className="font-bold text-foreground mb-2">Do NOT wear:</p>
            <ul className="text-muted space-y-1 list-disc pl-5 text-sm">
              <li>Brand new shoes (blisters by hour 3)</li>
              <li>Flip flops or sandals (your feet will hurt and get stepped on)</li>
              <li>Heels or dress shoes (you're walking on concrete and grass all day)</li>
              <li>Boots (too hot if it's warm, too heavy either way)</li>
            </ul>
          </div>
          <p className="text-muted">
            Wear broken-in sneakers or walking shoes. Running shoes work
            great. If rain's in the forecast, waterproof shoes are worth
            their weight in gold. Your feet will thank you around hour 8.
          </p>
        </section>

        {/* Clear bag policy */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            The Clear Bag Rule (Don't Get Turned Away)
          </h2>
          <p className="text-muted mb-3">
            The NFL enforces a strict clear bag policy at draft events.
            That means whatever you're wearing needs to work with a clear
            bag or no bag at all.
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
            <li>
              <strong>Allowed:</strong> Clear bags up to 12x6x12 inches, or
              small clutches no bigger than 4.5x6.5 inches
            </li>
            <li>
              <strong>Not allowed:</strong> Backpacks, purses, fanny packs
              (unless clear), camera bags, diaper bags
            </li>
          </ul>
          <p className="text-muted">
            Plan your outfit around this. Cargo shorts or pants with pockets
            work well. You'll need somewhere to put your phone, wallet, keys,
            and portable charger without relying on a bag. Check the{" "}
            <Link
              href="/schedule"
              className="text-primary font-semibold hover:underline"
            >
              full schedule and event details
            </Link>{" "}
            for more on bag policy specifics.
          </p>
        </section>

        {/* What NOT to wear */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            What NOT to Wear
          </h2>
          <ul className="space-y-2 text-muted list-disc pl-5">
            <li>
              <strong>Heavy winter coat.</strong> Even if it's 45 degrees in
              the morning, you'll be carrying it all day once it warms up.
              A hoodie is enough.
            </li>
            <li>
              <strong>Anything you can't fit in a clear bag.</strong> If you
              need to carry things, they go in your pockets or a clear bag.
              That's it.
            </li>
            <li>
              <strong>White shoes.</strong> Between grass, mud (if it rains),
              and 200,000+ people, your white shoes won't be white anymore.
            </li>
            <li>
              <strong>Anything you'd be upset to lose.</strong> You're in
              massive crowds. Things get dropped, stepped on, and left behind.
            </li>
          </ul>
        </section>

        {/* Quick packing list */}
        <section className="mb-14">
          <h2 className="text-2xl font-heading mb-4">
            Quick Packing Checklist
          </h2>
          <p className="text-muted mb-3">
            For the full list including phone chargers, sunscreen, and
            everything else, check the{" "}
            <Link
              href="/checklist"
              className="text-primary font-semibold hover:underline"
            >
              complete draft day checklist
            </Link>
            . Here's the clothing essentials:
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5">
            <li>Team jersey or comfortable t-shirt</li>
            <li>Zip-up hoodie or light jacket</li>
            <li>Packable rain poncho ($5 at Target)</li>
            <li>Broken-in sneakers or walking shoes</li>
            <li>Sunglasses and hat (if sunny)</li>
            <li>Pants or shorts with pockets</li>
            <li>Clear bag if you need to carry things</li>
          </ul>
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
            Ready to plan the rest of your trip?
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Clothes are just one piece. Get the full game plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/checklist"
              className="bg-accent hover:bg-accent-dark text-foreground font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Full Packing Checklist
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
