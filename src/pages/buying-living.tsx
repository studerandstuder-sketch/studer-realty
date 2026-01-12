// app/buying-living/page.jsx
// If you use the Pages Router instead: put this in /pages/buying-living.jsx

import Link from "next/link";

export const metadata = {
  title: "Buying & Living | Studer Realty",
  description:
    "We buy like it’s for us — a calm, selective approach focused on long-term desirability, daily lifestyle fit, and smart optionality.",
};

export default function BuyingLivingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="section hero" id="buying-living">
        <div className="container narrow">
          <p className="kicker">Studer Realty</p>
          <h1 className="h1">Buying &amp; Living</h1>
          <p className="lead">
            <strong>We buy like it’s for us.</strong> A calm, selective approach focused on long-term
            desirability, daily lifestyle fit, and smart optionality.
          </p>

          <div className="actions">
            <Link className="btn" href="/contact">
              Request a Conversation
            </Link>
            <Link className="btn btnOutline" href="/services">
              Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container narrow">
          <h2 className="h2">A simple framework</h2>
          <p className="lead">
            Most mistakes happen when decisions are rushed, emotional, or influenced by trends. This
            framework keeps things clear: buy with intelligence, live with pride, and keep flexibility.
          </p>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="section">
        <div className="container narrow">
          <div className="cards3">
            <div className="card">
              <div className="cardIcon" aria-hidden="true">
                01
              </div>
              <h3 className="h3">Buy Smart</h3>
              <p>
                Select with discipline. Protect downside. Optimize long-term value and resale logic —
                without chasing hype.
              </p>
              <Link className="textLink" href="/buy-smart">
                Explore Buy Smart →
              </Link>
            </div>

            <div className="card">
              <div className="cardIcon" aria-hidden="true">
                02
              </div>
              <h3 className="h3">Live in It</h3>
              <p>
                A home should feel right in real life — not only in photos. Daily flow, privacy, light, and
                lifestyle fit matter.
              </p>
              <Link className="textLink" href="/live-in-it">
                Explore Live in It →
              </Link>
            </div>

            <div className="card">
              <div className="cardIcon" aria-hidden="true">
                03
              </div>
              <h3 className="h3">Rent When Unused</h3>
              <p>
                Keep the lifestyle, add smart optionality. Buy with flexibility in mind so the home can be
                responsibly monetized when you’re away.
              </p>
              <Link className="textLink" href="/rent-when-unused">
                Explore Rent When Unused →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section">
        <div className="container narrow">
          <h2 className="h2">What you can expect</h2>
          <div className="cards2">
            <div className="card">
              <h3 className="h3">Calm, selective decision-making</h3>
              <p>
                No pressure. No noise. We focus on fundamentals and long-term desirability — and we say no
                when it doesn’t meet the standard.
              </p>
            </div>

            <div className="card">
              <h3 className="h3">Discretion and clarity</h3>
              <p>
                Clean communication, transparent guidance, and careful negotiation — with your interests
                protected at every step.
              </p>
            </div>

            <div className="card">
              <h3 className="h3">International perspective</h3>
              <p>
                Many clients buy across borders. We keep the process structured and coordinate with your
                advisors when needed.
              </p>
            </div>

            <div className="card">
              <h3 className="h3">A property that fits your life</h3>
              <p>
                A good purchase isn’t only a “good deal.” It’s a home you’ll actually use, enjoy, and feel
                proud of — with optionality built in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container narrow">
          <div className="card ctaCard">
            <h2 className="h2">Let’s align your plan</h2>
            <p className="lead">
              Tell me your target city, lifestyle goals, and timeline. I’ll help you build a clear strategy
              — and only pursue properties that make sense.
            </p>
            <div className="actions">
              <Link className="btn" href="/contact">
                Request a Conversation
              </Link>
              <Link className="btn btnOutline" href="/locations/miami">
                Explore Miami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
