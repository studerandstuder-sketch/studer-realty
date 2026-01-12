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
        {/* HERO (quiet, editorial) */}
        <section className="section" style={{ paddingTop: 56 }}>
          <div className="container narrow">
            <h1 className="h1">Buying &amp; Living</h1>
            <p className="lead">
              <strong>We buy like it’s for us.</strong> This philosophy guides every recommendation we make.
              It’s designed to protect lifestyle, capital, and long-term optionality — without compromise.
            </p>
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
              We take the opposite approach. Every property is evaluated as if we were going to live in it
              ourselves — with the same standards we would apply for our own family.
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
                <div className="iconBox" aria-hidden="true" />
                Prime micro-locations
              </div>

              <div className="iconItem">
                <div className="iconBox" aria-hidden="true" />
                Timeless desirability
              </div>

              <div className="iconItem">
                <div className="iconBox" aria-hidden="true" />
                Daily usability (light, flow, privacy)
              </div>

              <div className="iconItem">
                <div className="iconBox" aria-hidden="true" />
                Liquidity &amp; exit logic
              </div>

              <div className="iconItem">
                <div className="iconBox" aria-hidden="true" />
                Optionality: Live · Rent · Resell
              </div>

              <div className="iconItem">
                <div className="iconBox" aria-hidden="true" />
                Clean constraints (HOA / rules / compliance)
              </div>
            </div>
          </div>
        </sectionAlt>

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
              <p className="muted">Buying well is only one part of the equation.</p>
            </div>

            <div className="cards3">
              <div className="card">
                <div className="cardIcon" aria-hidden="true">01</div>
                <h3 className="h3">Selection &amp; Strategy</h3>
                <p>
                  A curated search aligned with your lifestyle goals, usage plan, and long-term value
                  logic — not volume.
                </p>
              </div>

              <div className="card">
                <div className="cardIcon" aria-hidden="true">02</div>
                <h3 className="h3">Negotiation &amp; Structure</h3>
                <p>
                  Clean offers, calm negotiation, and careful protection of your interests — including
                  timelines, contingencies, and execution.
                </p>
              </div>

              <div className="card">
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
              <Link className="card" href="/buy-smart">
                <div className="cardIcon" aria-hidden="true">01</div>
                <h3 className="h3">Buy Smart</h3>
                <p>Selection discipline, resale logic, downside protection.</p>
                <div className="homeCta">Explore →</div>
              </Link>

              <Link className="card" href="/live-in-it">
                <div className="cardIcon" aria-hidden="true">02</div>
                <h3 className="h3">Live in It</h3>
                <p>Daily lifestyle fit: light, privacy, flow, pride of ownership.</p>
                <div className="homeCta">Explore →</div>
              </Link>

              <Link className="card" href="/rent-when-unused">
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
