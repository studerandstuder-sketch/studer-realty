import Head from "next/head";
import Link from "next/link";

export default function LiveFreelyPage() {
  return (
    <>
      <Head>
        <title>Live Freely | Studer International Realty</title>
        <meta
          name="description"
          content="Daily lifestyle fit: light, privacy, flow, and pride of ownership. A home you genuinely enjoy."
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
        <section className="hero" aria-label="Live Freely Hero">
          <div
            className="heroVideo"
            style={{
              backgroundImage: "url(/img/how-it-works/live-freely.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="heroOverlay" />

          <div className="container heroContent">
            <h1 className="heroTitle">Live Freely</h1>
            <p className="heroCities">Light · Privacy · Flow · Pride of Ownership</p>
            <p className="heroTagline">
              A home is not a spreadsheet. It’s where life happens.<br />
              We select properties you’ll love living in — <strong>every day</strong>.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="/#contact">Request a Private Call</a>
              <a className="btnGhost" href="/buying-living">Back to Buying &amp; Living</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <h2 className="h2">What We Mean by “Live Freely”</h2>
            <p className="lead">
              Luxury is not only finishes — it’s ease. It’s calm. It’s the way the home supports your day.
            </p>
            <p>
              We focus on daily livability: how the space feels in the morning, how it flows when you host,
              how private it is at night, and whether it still feels right months later.
            </p>
          </div>
        </section>

        <section className="sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">Lifestyle-First Criteria</h2>
              <p className="muted">The details that change everything.</p>
            </div>

            <div className="iconGrid">
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/usability.png)" }} aria-hidden="true" />
                Natural light &amp; orientation
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/usability.png)" }} aria-hidden="true" />
                Flow (arrival, living, sleeping)
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/usability.png)" }} aria-hidden="true" />
                Privacy (inside &amp; outside)
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/usability.png)" }} aria-hidden="true" />
                Noise, neighbors, street feel
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/timeless.png)" }} aria-hidden="true" />
                Pride of ownership over time
              </div>
              <div className="iconItem">
                <div className="iconBox" style={{ backgroundImage: "url(/img/icons/micro-location.png)" }} aria-hidden="true" />
                The block, not the zip code
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <h2 className="h2">What This Avoids</h2>
            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Homes that look impressive but feel inconvenient</li>
              <li>Layouts that don’t work for real life</li>
              <li>Beautiful design with low comfort (noise, heat, poor flow)</li>
              <li>“Luxury” that becomes maintenance or stress</li>
            </ul>

            <p className="quote" style={{ marginTop: 18 }}>
              The best home is the one you still love on an ordinary Tuesday.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">Continue the Framework</h2>
              <p className="muted">Live well — and keep your optionality.</p>
            </div>

            <div className="cards3">
              <Link className="card cardBuy" href="/buy-smart">
                <div className="cardBg" aria-hidden="true" />
                <div className="cardIcon" aria-hidden="true">01</div>
                <h3 className="h3">Buy Smart</h3>
                <p>Selection discipline, resale logic, downside protection.</p>
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
            <h2 className="h2">Let’s find the home that feels right.</h2>
            <p className="muted">Calm guidance. No pressure. Pure clarity.</p>
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
