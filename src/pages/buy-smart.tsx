import Head from "next/head";
import Link from "next/link";

export default function BuySmartPage() {
  return (
    <>
      <Head>
        <title>Buy Smart | Studer International Realty</title>
        <meta
          name="description"
          content="Selection discipline, resale logic, and downside protection. We buy like it’s for us — and we buy smart."
        />
      </Head>

      {/* SAME HEADER AS MAIN SITE */}
      <header className="header">
        <div className="container headerInner">
          <a className="logo" href="/" aria-label="Studer International Realty home">
            <img src="/logo/studer-white.png" alt="Studer International Realty" className="logoImg" />
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

      <main>
        {/* HERO (reuses your existing card image) */}
        <section className="hero" aria-label="Buy Smart Hero">
          <div
            className="heroVideo"
            style={{
              backgroundImage: "url(/img/how-it-works/buy-smart.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="heroOverlay" />

          <div className="container heroContent">
            <h1 className="heroTitle">Buy Smart</h1>
            <p className="heroCities">Selection · Downside Protection · Resale Logic</p>
            <p className="heroTagline">
              We don’t buy “nice”. We buy <strong>desirable</strong> — across cycles.<br />
              Real estate should be a <strong>real asset</strong>, never a liability.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="/#contact">Request a Private Call</a>
              <a className="btnGhost" href="/buying-living">Back to Buying &amp; Living</a>
            </div>
          </div>
        </section>

        {/* CORE PRINCIPLES */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">What “Buy Smart” Means</h2>
            <p className="lead">
              Buying smart is not about finding a deal — it’s about buying a property that stays desirable,
              stays liquid, and protects your capital when markets shift.
            </p>

            <p>
              We filter aggressively. We avoid fragile assets. And we choose properties that make sense
              even if your plans change.
            </p>
          </div>
        </section>

        {/* WHAT WE LOOK FOR */}
        <section className="sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">Smart Selection Criteria</h2>
              <p className="muted">Desirability first. Always.</p>
            </div>

            <div className="iconGrid">
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/micro-location.png)" }} aria-hidden="true" />
                Micro-location over everything
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/timeless.png)" }} aria-hidden="true" />
                Timeless appeal, not trends
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/liquidity.png)" }} aria-hidden="true" />
                Liquidity &amp; resale depth
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/compliance.png)" }} aria-hidden="true" />
                Clean constraints &amp; rules
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/optionality.png)" }} aria-hidden="true" />
                Optionality (Live · Rent · Resell)
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/usability.png)" }} aria-hidden="true" />
                Livability that lasts
              </div>
            </div>
          </div>
        </sectionAlt>

        {/* WHAT WE AVOID */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">What This Avoids</h2>
            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Overpaying for finishes instead of fundamentals</li>
              <li>Fragile assets with narrow resale audiences</li>
              <li>Homes that “photograph well” but live poorly</li>
              <li>Restrictions discovered too late (HOA, rentals, zoning)</li>
              <li>Emotional buying without a clear exit strategy</li>
            </ul>

            <p className="quote" style={{ marginTop: 18 }}>
              Buy like you may have to sell. That’s how you protect capital.
            </p>
          </div>
        </section>

        {/* NEXT PAGES */}
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">Continue the Framework</h2>
              <p className="muted">The same property must work in real life — and in numbers.</p>
            </div>

            <div className="cards3">
              <Link className="card cardLive" href="/live-freely">
                <div className="cardBg" aria-hidden="true" />
                <div className="cardIcon" aria-hidden="true">02</div>
                <h3 className="h3">Live Freely</h3>
                <p>Daily lifestyle fit: light, privacy, flow, pride of ownership.</p>
                <div className="homeCta">Explore →</div>
              </Link>

              <Link className="card cardRent" href="/rent-seamlessly">
                <div className="cardBg" aria-hidden="true" />
                <div className="cardIcon" aria-hidden="true">03</div>
                <h3 className="h3">Rent Seamlessly</h3>
                <p>Optionality without friction: rules, operations, smart monetization.</p>
                <div className="homeCta">Explore →</div>
              </Link>

              <Link className="card" href="/buying-living">
                <div className="cardIcon" aria-hidden="true">↩</div>
                <h3 className="h3">Buying &amp; Living</h3>
                <p>The philosophy behind our selection process.</p>
                <div className="homeCta">Back →</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="finalCta">
          <div className="container narrow">
            <h2 className="h2">Let’s buy smart — calmly.</h2>
            <p className="muted">If you want real selection discipline and a clean strategy, we’ll guide you.</p>
            <div className="finalActions">
              <a className="btnPrimary" href="/#contact">Request a Private Call</a>
              <a className="btnGhost" href="https://wa.me/13058420528" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

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
            <div className="footerLegal">© {new Date().getFullYear()} Studer International Realty.</div>
          </div>
        </footer>
      </main>
    </>
  );
}
