// pages/buying-living.tsx
// Replace your current buying-living file (the one you uploaded) with THIS.
// Your current file has App Router metadata + next/link only; this version matches your Pages Router + header style from index.tsx.
// (Your current uploaded version is here: :contentReference[oaicite:0]{index=0})

import Head from "next/head";
import Link from "next/link";

export default function BuyingLivingPage() {
  return (
    <>
      <Head>
        <title>Buying & Living | Studer International Realty</title>
        <meta
          name="description"
          content="We buy like it’s for us — a calm, selective approach focused on long-term desirability, daily lifestyle fit, and smart optionality."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* SAME HEADER AS HOMEPAGE */}
      <header className="header">
        <div className="container headerInner">
          <a className="logo" href="/" aria-label="Studer International Realty home">
            <img
              src="/logo/studer-white.png"
              alt="Studer International Realty"
              className="logoImg"
            />
          </a>

          <nav className="nav">
            <a href="/#lifestyle">Lifestyle</a>
            <a href="/#homes">Selected Homes</a>
            <a href="/#concierge">Concierge</a>
            <a href="/#community">Community</a>
            <a href="/#contact" className="navCta">
              Private Call
            </a>
          </nav>
        </div>
      </header>

<main>
  {/* HERO VIDEO (same structure as homepage) */}
  <section className="hero" aria-label="Buying & Living Hero">
    <video
      className="heroVideo"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/img/fallback-hero.jpg"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>

    <div className="heroOverlay" />

    <div className="container heroContent">
      <h1 className="heroTitle">Buying &amp; Living</h1>

      <p className="heroCities">
        Live · Rent · Resell
      </p>

      <p className="heroTagline">
        We buy like it’s for us.<br />
        A home you enjoy with family and friends.<br />
        An asset that performs over time.
      </p>

      <div className="heroActions">
        <a className="btnPrimary" href="/#contact">
          Request a Private Call
        </a>
        <a className="btnGhost" href="/">
          Back to Home
        </a>
      </div>
    </div>

    <div className="heroScrollHint" aria-hidden="true">
      <span />
    </div>
  </section>


        {/* OUR PHILOSOPHY */}
<section className="section">
  <div className="container narrow">
    <h2 className="h2">Our Philosophy</h2>

    <p className="lead">
      Most real estate mistakes don’t come from bad intentions — they come from rushed decisions,
      emotional pressure, or trend-driven thinking.
    </p>

    <p>
      We take the opposite approach. We evaluate every property as if we were going to live in it
      ourselves, with our own family — focusing on comfort, daily flow, light, privacy, and long-term
      desirability.
    </p>

    <p>
      But life evolves. Plans change. And good real estate must adapt.
    </p>

    <p>
      That’s why we never analyze a property from a single angle. We always advise based on
      <strong> three non-negotiable criteria</strong>.
    </p>
  </div>
</section>

<section className="section">
  <div className="container narrow">
    <h2 className="h2">Three Criteria. No Compromise.</h2>

    <h3 className="h3">1. Live in it — as if it were ours</h3>
    <p>
      We first ask a simple question: would we be happy living here every day with our family?
      If the answer is no, we don’t recommend it.
    </p>

    <h3 className="h3">2. Rent it — like an investment</h3>
    <p>
      Even when the intention is to live in the property, we always evaluate its rental potential,
      realistic income, and operational simplicity — to preserve flexibility and peace of mind.
    </p>

    <h3 className="h3">3. Resell it — like a capital gain strategy</h3>
    <p>
      Finally, we analyze resale logic: long-term desirability, liquidity, and exit potential.
      Because buying well also means being able to sell well, for any reason.
    </p>

    <p className="quote">
      One property. Live like a home. Rent like an investment. Resell like a real asset.
    </p>
  </div>
</section>


        {/* WHAT WE LOOK FOR */}
        <section className="sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">What We Look For</h2>
              <p className="muted">
                Clear fundamentals. Timeless desirability. Daily lifestyle fit. Built-in optionality.
              </p>
            </div>

            <div className="iconGrid">
              <div className="iconItem">
                <div className="iconBox"
style={{ backgroundImage: "url(/img/icons/micro-location.png)" }}
 aria-hidden="true" />
                Prime micro-locations
              </div>

              <div className="iconItem">
                <div className="iconBox"
style={{ backgroundImage: "url(/img/icons/timeless.png)" }}
 aria-hidden="true" />
                Timeless desirability
              </div>

              <div className="iconItem">
                <div className="iconBox"
style={{ backgroundImage: "url(/img/icons/usability.png)" }}
 aria-hidden="true" />
                Daily usability (light, flow, privacy)
              </div>

              <div className="iconItem">
                <div className="iconBox"
style={{ backgroundImage: "url(/img/icons/liquidity.png)" }}
 aria-hidden="true" />
                Liquidity &amp; exit logic
              </div>

              <div className="iconItem">
                <div className="iconBox"
style={{ backgroundImage: "url(/img/icons/optionality.png)" }}
 aria-hidden="true" />
                Optionality: Live · Rent · Resell
              </div>

              <div className="iconItem">
                <div className="iconBox"
style={{ backgroundImage: "url(/img/icons/compliance.png)" }}
 aria-hidden="true" />
                Clean constraints (HOA / rules / compliance)
              </div>
            </div>
          </div>
        </section>

        {/* WHAT THIS AVOIDS */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">What This Avoids</h2>
            <p className="lead">
              This approach protects you from common (and expensive) mistakes.
            </p>

            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Buying based on hype or social-media appeal</li>
              <li>Overpaying for finishes instead of fundamentals</li>
              <li>Homes that look great once — but live poorly every day</li>
              <li>Properties that become difficult to resell or rent</li>
              <li>Restrictions discovered too late (HOA, building, city rules)</li>
            </ul>

            <p className="quote" style={{ marginTop: 18 }}>
              Calm selection beats rushed decisions.
            </p>
          </div>
        </section>

        {/* FULL PACKAGE */}
        <section className="sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">A Full, Integrated Package</h2>
<p className="muted">
  Our goal is to help our members own assets they truly enjoy, that perform with peace of mind,
  and that grow their global portfolio over the years.
</p>
            </div>

<div className="cards3">

  {/* SELECTION & STRATEGY */}
  <div className="card">
    <div
      className="cardBg"
      style={{ backgroundImage: "url(/img/package/selection-strategy.png)" }}
      aria-hidden="true"
    />
    <div className="cardIcon" aria-hidden="true">01</div>
    <h3 className="h3">Selection &amp; Strategy</h3>
    <p>
      A curated search aligned with your lifestyle goals, usage plan, and long-term value
      logic — not volume.
    </p>
  </div>

  {/* NEGOTIATION & STRUCTURE */}
  <div className="card">
    <div
      className="cardBg"
      style={{ backgroundImage: "url(/img/package/negotiation-structure.png)" }}
      aria-hidden="true"
    />
    <div className="cardIcon" aria-hidden="true">02</div>
    <h3 className="h3">Negotiation &amp; Structure</h3>
    <p>
      Clean offers, calm negotiation, and careful protection of your interests — including
      timelines, contingencies, and execution.
    </p>
  </div>

  {/* OPERATIONS & OPTIONALITY */}
  <div className="card">
    <div
      className="cardBg"
      style={{ backgroundImage: "url(/img/package/operations-optionality.png)" }}
      aria-hidden="true"
    />
    <div className="cardIcon" aria-hidden="true">03</div>
    <h3 className="h3">Operations &amp; Optionality</h3>
    <p>
      When relevant: rental strategy, management coordination, and lifestyle support so your
      home stays effortless.
    </p>
  </div>

</div>
          </div>
        </section>

{/* 3 EXTENSIONS */}
<section className="section">
  <div className="container">
    <div className="sectionHeader">
      <h2 className="h2">One Framework. Three Dimensions.</h2>
      <p className="muted">Explore the three pillars behind our approach.</p>
    </div>

    <div className="cards3">

      {/* BUY SMART */}
      <Link className="card cardBuy" href="/buy-smart">
        <div className="cardBg" aria-hidden="true" />
        <div className="cardIcon" aria-hidden="true">01</div>
        <h3 className="h3">Buy Smart</h3>
        <p>Selection discipline, resale logic, downside protection.</p>
        <div className="homeCta">Explore →</div>
      </Link>

      {/* LIVE IN IT */}
      <Link className="card cardLive" href="/live-in-it">
        <div className="cardBg" aria-hidden="true" />
        <div className="cardIcon" aria-hidden="true">02</div>
        <h3 className="h3">Live in It</h3>
        <p>Daily lifestyle fit: light, privacy, flow, pride of ownership.</p>
        <div className="homeCta">Explore →</div>
      </Link>

      {/* RENT WHEN UNUSED */}
      <Link className="card cardRent" href="/rent-when-unused">
        <div className="cardBg" aria-hidden="true" />
        <div className="cardIcon" aria-hidden="true">03</div>
        <h3 className="h3">Rent When Unused</h3>
        <p>Optionality without friction: rules, operations, smart monetization.</p>
        <div className="homeCta">Explore →</div>
      </Link>

    </div>
  </div>
</section>


        {/* CTA */}
        <section className="finalCta">
          <div className="container narrow">
            <h2 className="h2">Private, calm guidance.</h2>
            <p className="muted">
              If this approach resonates, let’s define your lifestyle goals, usage plan, and timeline — and
              build a clear strategy.
            </p>

            <div className="finalActions">
              <a className="btnPrimary" href="/#contact">
                Request a Private Call
              </a>
              <a
                className="btnGhost"
                href="https://wa.me/13058420528"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <div className="finePrint">Studer International Realty · Miami · Worldwide</div>
          </div>
        </section>

        {/* SAME FOOTER LINKS STYLE */}
        <footer className="footer">
          <div className="container footerInner">
            <div className="footerBrand">STUDER</div>
            <div className="footerLinks">
              <a href="/#lifestyle">Lifestyle</a>
              <a href="/#homes">Selected Homes</a>
              <a href="/#concierge">Concierge</a>
              <a href="/#community">Community</a>
              <a href="/#contact">Contact</a>
            </div>
            <div className="footerLegal">
              © {new Date().getFullYear()} Studer International Realty. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
