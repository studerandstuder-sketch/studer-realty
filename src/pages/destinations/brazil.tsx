import Head from "next/head";
import Link from "next/link";

export default function BrazilDestinationPage() {
  return (
    <>
      <Head>
        <title>Rio · Búzios | Studer International Realty</title>
        <meta
          name="description"
          content="Rio and Búzios, curated: lifestyle-first homes with optional rental income, handled end-to-end."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

      <main>
        {/* HERO */}
        <section className="heroDest" aria-label="Rio and Búzios hero">
          <div
            className="heroMedia"
            style={{
              backgroundImage: "url(/img/Buzios.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            aria-hidden="true"
          />
          <div className="heroOverlay" aria-hidden="true" />

          <div className="container heroContent">
            <div className="kicker">DESTINATION</div>
            <h1 className="heroTitle">Rio · Búzios</h1>
            <p className="heroSubtitle">
              A lifestyle corridor between city energy and coastal calm. Curated homes, discreet execution,
              and optional rental income when you are away.
            </p>

            <div className="heroActions">
              <Link className="btnGhost" href="/">
                ← Back home
              </Link>
              <Link className="btnPrimary" href="/contact?city=brazil">
                Request a private shortlist
              </Link>
            </div>

            <p className="muted heroNote">
              We share on-market and off-market opportunities privately after a short call.
            </p>
          </div>
        </section>

        {/* WHY HERE */}
        <section className="section" style={{ paddingTop: 56 }}>
          <div className="container narrow">
            <h2 className="h2">Why Rio · Búzios</h2>
            <p className="lead">
              Two complementary lifestyles. Rio for culture, convenience, and proximity. Búzios for beaches,
              privacy, and long weekends that feel like a reset.
            </p>

            <div className="cards2">
              <div className="cardInfo">
                <div className="cardTitle">Rio</div>
                <div className="cardText">
                  City living with iconic scenery. We prioritize security, light, and practical layouts that
                  work year-round.
                </div>
              </div>

              <div className="cardInfo">
                <div className="cardTitle">Búzios</div>
                <div className="cardText">
                  Coastal homes chosen for privacy, views, and easy operations. Ideal for family usage and
                  rental optionality when unused.
                </div>
              </div>
            </div>

            <div className="hr" />

            <ul className="bullets">
              <li>Lifestyle first: views, light, privacy, and flow</li>
              <li>Operational reality checked: staff, maintenance, access, seasonality</li>
              <li>Rental optionality when relevant, aligned with rules and strategy</li>
              <li>Resale logic built in from day one</li>
            </ul>

            <div className="actionsRow">
              <Link className="btnPrimary" href="/contact?city=brazil">
                Request a shortlist
              </Link>
              <Link className="btnGhost" href="/buying-living">
                Read the framework
              </Link>
            </div>
          </div>
        </section>

        {/* SELECTED HOMES CTA */}
        <section className="sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">Selected Homes</h2>
              <p className="muted">Curated opportunities, never volume.</p>
            </div>

            <div className="miniGrid">
              <a className="miniCard" href="/contact?city=brazil&ref=rio-01">
                <div
                  className="miniImg"
                  style={{ backgroundImage: "url(/img/Buzios.png)" }}
                  aria-hidden="true"
                />
                <div className="miniMeta">
                  <div className="miniTitle">Bay View Home</div>
                  <div className="miniSub">Búzios · João Fernandes</div>
                  <div className="miniTag">Live · Rent · Resell</div>
                </div>
              </a>

              <a className="miniCard" href="/contact?city=brazil&ref=rio-02">
                <div
                  className="miniImg"
                  style={{ backgroundImage: "url(/img/Buzios.png)" }}
                  aria-hidden="true"
                />
                <div className="miniMeta">
                  <div className="miniTitle">City Apartment</div>
                  <div className="miniSub">Rio · Prime location</div>
                  <div className="miniTag">Live · Resell</div>
                </div>
              </a>

              <a className="miniCard" href="/contact?city=brazil&ref=rio-03">
                <div
                  className="miniImg"
                  style={{ backgroundImage: "url(/img/Buzios.png)" }}
                  aria-hidden="true"
                />
                <div className="miniMeta">
                  <div className="miniTitle">Weekend Villa</div>
                  <div className="miniSub">Búzios · Privacy + views</div>
                  <div className="miniTag">Live · Rent · Resell</div>
                </div>
              </a>
            </div>

            <div className="railNote">
              <span className="dot" aria-hidden="true" />
              Prefer a direct list? We keep it private to protect discretion and avoid noise.
            </div>
          </div>
        </section>

        {/* CONCIERGE CTA */}
        <section className="section" id="concierge-brazil">
          <div className="container narrow">
            <h2 className="h2">Concierge, Locally Executed</h2>
            <p className="lead">
              We manage the friction: maintenance, staffing, check-ins, owners reporting, and rental operations when
              aligned with your strategy.
            </p>

            <div className="cards3">
              <div className="cardInfo">
                <div className="cardTitle">Property Management</div>
                <div className="cardText">
                  Vendors, maintenance schedules, preventive care, and calm execution while you are away.
                </div>
              </div>
              <div className="cardInfo">
                <div className="cardTitle">Rentals</div>
                <div className="cardText">
                  Strategy, positioning, guest flow, cleaning, and standards that protect the asset.
                </div>
              </div>
              <div className="cardInfo">
                <div className="cardTitle">Experiences</div>
                <div className="cardText">
                  Boats, drivers, chefs, and local planning. One point of contact, handled discreetly.
                </div>
              </div>
            </div>

            <div className="actionsRow">
              <Link className="btnPrimary" href="/contact?city=brazil">
                Private call
              </Link>
              <a className="btnGhost" href="https://wa.me/13058420528" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .kicker {
          letter-spacing: 0.18em;
          font-weight: 700;
          font-size: 12px;
          opacity: 0.85;
          margin-bottom: 10px;
        }

        .heroDest {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .heroMedia {
          position: absolute;
          inset: 0;
          transform: scale(1.02);
          filter: saturate(1.05);
        }
        .heroOverlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
        }
        .heroContent {
          position: relative;
          padding: 96px 0 56px;
        }
        .heroTitle {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 900;
          margin: 10px 0 10px;
          line-height: 1.05;
        }
        .heroSubtitle {
          max-width: 720px;
          opacity: 0.86;
          line-height: 1.6;
          margin: 0;
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

        .hr {
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          margin: 18px 0;
        }

        .bullets {
          margin-top: 12px;
          padding-left: 18px;
          opacity: 0.86;
        }
        .bullets li {
          margin: 8px 0;
        }

        .cards2 {
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .cards3 {
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 900px) {
          .cards2 {
            grid-template-columns: 1fr;
          }
          .cards3 {
            grid-template-columns: 1fr;
          }
        }

        .cardInfo {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.22);
          border-radius: 18px;
          padding: 14px;
        }
        .cardTitle {
          font-weight: 900;
          margin-bottom: 8px;
        }
        .cardText {
          opacity: 0.8;
          line-height: 1.55;
          font-size: 14px;
        }

        .actionsRow {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .sectionHeader {
          margin-bottom: 14px;
        }

        .miniGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 900px) {
          .miniGrid {
            grid-template-columns: 1fr;
          }
        }

        .miniCard {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .miniImg {
          height: 180px;
          background-size: cover;
          background-position: center;
        }
        .miniMeta {
          padding: 12px 14px 14px;
        }
        .miniTitle {
          font-weight: 800;
          margin-bottom: 6px;
        }
        .miniSub {
          font-size: 13px;
          opacity: 0.75;
          line-height: 1.35;
        }
        .miniTag {
          margin-top: 10px;
          font-size: 12px;
          opacity: 0.7;
        }

        .railNote {
          margin-top: 14px;
          font-size: 13px;
          opacity: 0.7;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.35);
          display: inline-block;
        }

        /* Buttons fallback (if your global CSS already defines these, you can delete these globals) */
        :global(.btnPrimary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 999px;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.92);
          color: #000;
          font-weight: 800;
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
          font-weight: 800;
          border: 1px solid rgba(255, 255, 255, 0.16);
        }
      `}</style>
    </>
  );
}
