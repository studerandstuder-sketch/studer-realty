import Head from "next/head";
import Link from "next/link";

export default function RentSeamlesslyPage() {
  return (
    <>
      <Head>
        <title>Rent Seamlessly | Studer International Realty</title>
        <meta
          name="description"
          content="Income optionality with zero friction. We handle pricing, platforms, guests, cleaning, maintenance, and tenants."
        />
      </Head>

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
        <section className="hero" aria-label="Rent Seamlessly Hero">
          <div
            className="heroVideo"
            style={{
              backgroundImage: "url(/img/how-it-works/rent-seamlessly.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="heroOverlay" />

          <div className="container heroContent">
            <h1 className="heroTitle">Rent Seamlessly</h1>
            <p className="heroCities">Income Optionality · Zero Friction · Peace of Mind</p>
            <p className="heroTagline">
              Your home can generate income when you’re not using it — without turning into a second job.<br />
              We design the rental plan around <strong>simplicity</strong> and <strong>control</strong>.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="/#contact">Request a Private Call</a>
              <a className="btnGhost" href="/buying-living">Back to Buying &amp; Living</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <h2 className="h2">What “Rent Seamlessly” Means</h2>
            <p className="lead">
              Income is powerful — but only if it’s operationally clean. Our goal is simple: peace of mind.
            </p>
            <p>
              We evaluate rules first (HOA, city, building). Then we define the right rental mode
              (short-term, monthly, seasonal). Finally, we organize execution so everything runs smoothly.
            </p>
          </div>
        </section>

        <section className="sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">Operational Pillars</h2>
              <p className="muted">Everything should feel effortless.</p>
            </div>

            <div className="cards3">
              <div className="card">
                <div className="cardIcon" aria-hidden="true">01</div>
                <h3 className="h3">Rules &amp; Compliance</h3>
                <p>HOA, building policies, city rules — clarified upfront. No surprises.</p>
              </div>

              <div className="card">
                <div className="cardIcon" aria-hidden="true">02</div>
                <h3 className="h3">Pricing &amp; Positioning</h3>
                <p>Realistic pricing strategy, seasonality, and guest profile alignment.</p>
              </div>

              <div className="card">
                <div className="cardIcon" aria-hidden="true">03</div>
                <h3 className="h3">Execution</h3>
                <p>Cleaning, maintenance, guests/tenants, turnovers — handled with discipline.</p>
              </div>
            </div>
          </div>
        </sectionAlt>

        <section className="section">
          <div className="container narrow">
            <h2 className="h2">What This Avoids</h2>
            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Unexpected HOA or building restrictions</li>
              <li>Operational chaos, bad tenants, or poor reviews</li>
              <li>Over-optimistic income projections</li>
              <li>High revenue with high stress (not worth it)</li>
            </ul>

            <p className="quote" style={{ marginTop: 18 }}>
              Income optionality should feel quiet — not complicated.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">Continue the Framework</h2>
              <p className="muted">The same property must still feel right and stay liquid.</p>
            </div>

            <div className="cards3">
              <Link className="card cardBuy" href="/buy-smart">
                <div className="cardBg" aria-hidden="true" />
                <div className="cardIcon" aria-hidden="true">01</div>
                <h3 className="h3">Buy Smart</h3>
                <p>Selection discipline, resale logic, downside protection.</p>
                <div className="homeCta">Explore →</div>
              </Link>

              <Link className="card cardLive" href="/live-freely">
                <div className="cardBg" aria-hidden="true" />
                <div className="cardIcon" aria-hidden="true">02</div>
                <h3 className="h3">Live Freely</h3>
                <p>Daily lifestyle fit: light, privacy, flow, pride of ownership.</p>
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
            <h2 className="h2">Let’s make optionality effortless.</h2>
            <p className="muted">We’ll design a rental plan that fits your life — and your standards.</p>
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
