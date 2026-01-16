import Head from "next/head";
import Link from "next/link";

type Fact = { label: string; value: string };

const zillowUrl =
  "https://www.zillow.com/homedetails/3909-Garden-Ave-Miami-Beach-FL-33140/2070598953_zpid/";

const home = {
  slug: "3909-garden-ave-miami-beach",
  title: "3909 Garden Ave",
  area: "Miami Beach, FL 33140",
  priceLabel: "$2,500,000",
  tags: ["Multi-family", "Income", "Newer build", "Lifestyle"],
  subtitle:
    "Modern multi-family asset in Miami Beach positioned as a clean income play with a strong long-term hold and resale narrative.",
  facts: [
    { label: "Type", value: "Quadruplex" },
    { label: "Beds", value: "8" },
    { label: "Baths", value: "8" },
    { label: "Interior", value: "5,500 sqft" },
    { label: "Year built", value: "2022" },
    { label: "Market", value: "Miami Beach" },
  ] as Fact[],
  highlights: [
    "Multi-family format supports diversified cash-flow profile",
    "Newer construction reduces near-term capex risk vs older inventory",
    "Miami Beach location with durable long-term rental demand drivers",
    "Clean story for resale: modern product, strong utility, income angle",
  ],
  framework: [
    {
      title: "Live",
      text:
        "Owner use optionality depending on unit mix and your strategy, while retaining an income-producing structure.",
    },
    {
      title: "Rent",
      text:
        "Multi-family by design. Good operational flexibility, subject to city rules and lease structure.",
    },
    {
      title: "Resell",
      text:
        "A newer multi-family asset in Miami Beach tends to keep buyer interest when pricing, income and condition align.",
    },
  ],
  // Upload only images you own rights to.
  // Folder: /public/img/selected-homes/miami/3909-garden/
  gallery: [
    "/img/selected-homes/miami/3909-garden/01.webp",
    "/img/selected-homes/miami/3909-garden/02.webp",
    "/img/selected-homes/miami/3909-garden/03.webp",
    "/img/selected-homes/miami/3909-garden/04.webp",
    "/img/selected-homes/miami/3909-garden/05.webp",
    "/img/selected-homes/miami/3909-garden/06.webp",
  ],
  notes: [
    "Public listing data can vary across portals. Request the private package for full MLS details and financials.",
    "Verify leases, rental rules, unit mix, permits, and any claims during due diligence.",
  ],
};

export default function HomeDetail3909GardenAve() {
  const ogImage = home.gallery?.[0] || "/img/selected-homes/miami/miami-08.webp";

  return (
    <>
      <Head>
        <title>{home.title} | Selected Homes Miami | Studer Realty</title>
        <meta name="description" content={home.subtitle} />
        <meta property="og:title" content={`${home.title} | Selected Homes Miami`} />
        <meta property="og:description" content={home.subtitle} />
        <meta property="og:image" content={ogImage} />
        <meta name="robots" content="index,follow" />
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
        {/* TOP */}
        <section className="section" style={{ paddingTop: 56 }}>
          <div className="container narrow">
            <div className="crumbs">
              <Link href="/selected-homes/miami" className="crumbLink">
                ← Back to Miami selection
              </Link>
            </div>

            <div className="kicker">SELECTED HOME</div>

            <div className="titleRow">
              <div>
                <h1 className="h1">{home.title}</h1>
                <div className="subline">{home.area}</div>
              </div>

              <div className="priceBox">
                <div className="priceLabel">Asking</div>
                <div className="price">{home.priceLabel}</div>
              </div>
            </div>

            <p className="lead">{home.subtitle}</p>

            <div className="pillRow">
              {home.tags.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>

            <div className="actions">
              <Link
                className="btnPrimary"
                href={`/#contact`}
              >
                Request full details
              </Link>
              <a className="btnGhost" href={zillowUrl} target="_blank" rel="noreferrer">
                View on Zillow
              </a>
            </div>

            <div className="muted note">
              Source: public listing information. Photos shown here must be media you own rights to.
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="sectionAlt">
          <div className="container">
            <div className="gallery">
              {home.gallery.map((src) => (
                <div key={src} className="imgCard">
                  <div className="img" style={{ backgroundImage: `url(${src})` }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACTS */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">Key Facts</h2>
            <div className="facts">
              {home.facts.map((f) => (
                <div key={f.label} className="fact">
                  <div className="factLabel">{f.label}</div>
                  <div className="factValue">{f.value}</div>
                </div>
              ))}
            </div>

            <div className="hr" />

            <h2 className="h2">Why It Made the Selection</h2>
            <ul className="bullets">
              {home.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* FRAMEWORK */}
        <section className="sectionAlt">
          <div className="container narrow">
            <div className="kicker">LIVE · RENT · RESELL</div>
            <h2 className="h2">Framework Fit</h2>

            <div className="cards3">
              {home.framework.map((b) => (
                <div key={b.title} className="card">
                  <div className="cardTitle">{b.title}</div>
                  <div className="cardText">{b.text}</div>
                </div>
              ))}
            </div>

            <div className="hr" />

            <div className="noteBox">
              <div className="noteTitle">Next step</div>
              <div className="noteText">
                Request the private package for MLS sheet, rent roll, expenses, and a clean due diligence plan.
              </div>

              <div className="actions" style={{ marginTop: 14 }}>
                <Link
                  className="btnPrimary"
                  href={`/#contact`}
                >
                  Request full details
                </Link>
                <Link className="btnGhost" href="/destinations/miami">
                  Explore Miami
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Same styles as your other Miami listing pages */}
      <style jsx>{`
        .kicker {
          letter-spacing: 0.18em;
          font-weight: 800;
          font-size: 12px;
          opacity: 0.9;
          margin-bottom: 10px;
        }
        .crumbs { margin-bottom: 10px; }
        .crumbLink { text-decoration: none; opacity: 0.75; }

        .titleRow {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-end;
          flex-wrap: wrap;
        }
        .subline { opacity: 0.8; margin-top: 6px; }

        .priceBox {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 14px;
          padding: 10px 12px;
          min-width: 170px;
          text-align: right;
        }
        .priceLabel { font-size: 12px; opacity: 0.7; }
        .price { font-weight: 900; font-size: 18px; margin-top: 4px; }

        .pillRow {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 14px;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 999px;
          font-size: 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.18);
          opacity: 0.9;
          white-space: nowrap;
        }

        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 18px;
        }
        .note { margin-top: 12px; font-size: 13px; opacity: 0.7; }

        .gallery {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 12px;
        }
        .imgCard {
          grid-column: span 6;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
        }
        .img {
          height: 260px;
          background-size: cover;
          background-position: center;
        }
        @media (max-width: 820px) {
          .imgCard { grid-column: span 12; }
          .img { height: 220px; }
        }

        .facts {
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .fact {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.02);
          border-radius: 14px;
          padding: 10px 12px;
        }
        .factLabel { font-size: 12px; opacity: 0.7; }
        .factValue { font-weight: 900; margin-top: 4px; }
        @media (max-width: 640px) {
          .facts { grid-template-columns: 1fr; }
        }

        .hr {
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          margin: 18px 0;
        }

        .bullets { margin-top: 12px; padding-left: 18px; opacity: 0.86; }
        .bullets li { margin: 8px 0; }

        .cards3 {
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .card {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.22);
          border-radius: 18px;
          padding: 14px;
        }
        .cardTitle { font-weight: 900; margin-bottom: 8px; }
        .cardText { opacity: 0.8; line-height: 1.5; font-size: 14px; }
        @media (max-width: 900px) {
          .cards3 { grid-template-columns: 1fr; }
        }

        .noteBox {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.02);
          border-radius: 18px;
          padding: 14px;
        }
        .noteTitle { font-weight: 900; margin-bottom: 6px; }
        .noteText { opacity: 0.8; line-height: 1.5; }

        :global(.btnPrimary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 999px;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.92);
          color: #000;
          font-weight: 900;
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
          font-weight: 900;
          border: 1px solid rgba(255, 255, 255, 0.16);
        }
      `}</style>
    </>
  );
}
