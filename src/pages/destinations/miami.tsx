// src/pages/destinations/miami.tsx
import Head from "next/head";
import Link from "next/link";

export default function MiamiCityPage() {
  return (
    <>
<Head>
  <title>Miami | Studer Realty</title>
  <meta
    name="description"
    content="Miami — waterfront living, income optionality, and global liquidity. Live · Rent · Resell."
  />
</Head>

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
      <a href="/#contact" className="navCta">Private Call</a>
    </nav>
  </div>
</header>

      {/* Keep your global header/nav consistent:
          If your site already has a Layout/Header component, wrap this page with it.
          If not, your existing header (in _app or a shared layout) will still show. */}

      <main>
        {/* HERO VIDEO */}
        <section className="heroVideo">
          <video
            className="heroVideoEl"
            src="/video/hero-miami.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="heroVideoOverlay" />

          <div className="heroVideoContent">
            <div className="container narrow">
              <div className="kicker">CITIES</div>
              <h1 className="h1">Miami</h1>
              <p className="lead">
                Waterfront living, global capital, and real optionality —{" "}
                <strong>Live · Rent · Resell</strong>.
              </p>

              <div className="heroActions">
                <Link className="btnPrimary" href="/selected-homes/miami">
                  View our Miami selection
                </Link>
                <Link className="btnGhost" href="/contact">
                  Private call
                </Link>
              </div>

              <p className="muted heroNote">
                Not an inventory. A curated selection aligned with our framework.
              </p>
            </div>
          </div>
        </section>

        {/* WHY MIAMI */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">Why Miami</h2>
            <p className="lead">
              Miami is not just Florida — it’s a global gateway. People buy here
              because they want to <strong>use</strong> the home, not just own it.
            </p>
            <p>
              When selection is disciplined, Miami can combine lifestyle value,
              rental optionality, and liquidity — with a buyer pool that is both
              domestic and international.
            </p>
          </div>
        </section>

        {/* LIVE · RENT · RESELL */}
        <section className="sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">One Property. Three Uses.</h2>
              <p className="muted">How the framework applies in Miami.</p>
            </div>


.cardBg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.35;
  z-index: 0;
}

/* Miami images */
.cardLive .cardBg {
  background-image: url("/img/live-in-it.png");
}

.cardRent .cardBg {
  background-image: url("/img/rent-when-unused.png");
}

.cardResell .cardBg {
  background-image: url("/img/resell-with-confidence.png");
}

/* Keep content above image */
.card > *:not(.cardBg) {
  position: relative;
  z-index: 1;
}

          </div>
        </section>

        {/* HOW WE SELECT */}
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">How We Select in Miami</h2>
              <p className="muted">
                Calm selection, strong fundamentals, and built-in optionality.
              </p>
            </div>

            <div className="iconGrid">
              <div className="iconItem">
<div
  className="iconBox"
  style={{ backgroundImage: "url(/img/icons/micro-location.png)" }}
  aria-hidden="true"
/>
                Prime micro-locations first
              </div>
              <div className="iconItem">
<div
  className="iconBox"
  style={{ backgroundImage: "url(/img/icons/usability.png)" }}
  aria-hidden="true"
/>
                Views, light, orientation
              </div>
              <div className="iconItem">
<div
  className="iconBox"
  style={{ backgroundImage: "url(/img/icons/compliance.png)" }}
  aria-hidden="true"
/>
                Rental rules verified upfront
              </div>
              <div className="iconItem">
<div
  className="iconBox"
  style={{ backgroundImage: "url(/img/icons/timeless.png)" }}
  aria-hidden="true"
/>
                HOA constraints checked early
              </div>
              <div className="iconItem">
<div
  className="iconBox"
  style={{ backgroundImage: "url(/img/icons/optionality.png)" }}
  aria-hidden="true"
/>
                Downside protection built-in
              </div>
              <div className="iconItem">
<div
  className="iconBox"
  style={{ backgroundImage: "url(/img/icons/liquidity.png)" }}
  aria-hidden="true"
/>
                Exit logic from day one
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO AVOID */}
        <section className="sectionAlt">
          <div className="container narrow">
            <h2 className="h2">Common Mistakes in Miami</h2>
            <p className="lead">Avoidable costs usually come from rushed decisions.</p>

            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Buying hype instead of fundamentals</li>
              <li>Ignoring HOA / rental restrictions until too late</li>
              <li>Overpaying for finishes instead of location and layout</li>
              <li>Confusing “new” with “desirable”</li>
              <li>No clear exit strategy</li>
            </ul>

            <p className="quote" style={{ marginTop: 18 }}>
              Selection discipline creates lifestyle and protects capital.
            </p>
          </div>
        </section>

        {/* OWNERSHIP REALITY */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">Owning in Miami — The Reality</h2>
            <p className="lead">No drama. Just clarity.</p>
            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Insurance and operating costs vary widely by property type</li>
              <li>Rental performance depends on rules, seasonality, and execution</li>
              <li>Liquidity is neighborhood-specific — micro-location wins</li>
              <li>Optionality is designed, not assumed</li>
            </ul>
          </div>
        </section>

        {/* CURATED LINK */}
        <section className="sectionAlt">
          <div className="container narrow" style={{ textAlign: "center" }}>
            <h2 className="h2">Curated Miami Homes</h2>
            <p className="muted">
              A selection aligned with Live · Rent · Resell — updated regularly.
              Off-market opportunities available privately.
            </p>

            <div style={{ marginTop: 16, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="btnPrimary" href="/selected-homes/miami">
                View our Miami selection
              </Link>
              <Link className="btnGhost" href="/contact">
                Request a private shortlist
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal CSS so the hero video works even if your global styles don’t include it yet.
          If you already have similar hero styles, you can remove this block. */}
      <style jsx>{`
        .heroVideo {
          position: relative;
          min-height: 70vh;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .heroVideoEl {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
        }
        .heroVideoOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.7)
          );
        }
        .heroVideoContent {
          position: relative;
          padding: 88px 0 64px;
        }
        .kicker {
          letter-spacing: 0.18em;
          font-weight: 700;
          font-size: 12px;
          opacity: 0.85;
          margin-bottom: 10px;
        }
        .heroActions {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .heroNote {
          margin-top: 12px;
        }
        /* Buttons (fallback). If you already have .btnPrimary/.btnGhost globally, remove these. */
        :global(.btnPrimary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 999px;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.92);
          color: #000;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        :global(.btnGhost) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 999px;
          text-decoration: none;
          background: rgba(0, 0, 0, 0.25);
          color: rgba(255, 255, 255, 0.92);
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.16);
        }
      `}</style>
    </>
  );
}
