import Head from "next/head";
import Link from "next/link";

type Fact = { label: string; value: string };

const zillowUrl =
  "https://www.zillow.com/homedetails/89-N-Shore-Dr-Miami-Beach-FL-33141/331699078_zpid/";

const home = {
  slug: "89-n-shore-dr-miami-beach",
  title: "89 N Shore Dr",
  area: "Miami Beach, FL 33141",
  priceLabel: "$1,475,000",
  tags: ["Lifestyle", "Townhome", "Gated", "Low HOA"],
  subtitle:
    "Modern 4-story townhome at Iris on the Bay with rooftop terrace and balconies. Walkable to beach and recreation.",
  facts: [
    { label: "Beds", value: "4" },
    { label: "Baths", value: "4" },
    { label: "Interior", value: "2,504 sqft" },
    { label: "Year built", value: "2019" },
    { label: "Parking", value: "2-car garage" },
    { label: "Community", value: "Gated with pool" },
  ] as Fact[],
  highlights: [
    "Rooftop terrace + 3 balconies",
    "Private elevator, impact windows and doors",
    "Full-floor office and generous storage",
    "Boat slips available (community)",
    "Easy operations and strong resale liquidity for the product type",
  ],
  framework: [
    {
      title: "Live",
      text:
        "Walkable, low-friction lifestyle with rooftop outdoor space and a functional layout for daily living.",
    },
    {
      title: "Rent",
      text:
        "Good optionality: newer construction features, gated community, and a format that tends to rent well in Miami Beach when rules allow.",
    },
    {
      title: "Resell",
      text:
        "Clean, modern townhome product with strong usability and location adjacency typically supports liquidity.",
    },
  ],
  // IMPORTANT:
  // Do not use Zillow photos here. Upload images you own the rights to.
  // Put them in: /public/img/selected-homes/miami/89-n-shore/
  gallery: [
    "/img/selected-homes/miami/89-n-shore/01.webp",
    "/img/selected-homes/miami/89-n-shore/02.webp",
    "/img/selected-homes/miami/89-n-shore/03.webp",
    "/img/selected-homes/miami/89-n-shore/04.webp",
    "/img/selected-homes/miami/89-n-shore/05.webp",
    "/img/selected-homes/miami/89-n-shore/06.webp",
    "/img/selected-homes/miami/89-n-shore/07.webp",
    "/img/selected-homes/miami/89-n-shore/08.webp",
    "/img/selected-homes/miami/89-n-shore/09.webp",
    "/img/selected-homes/miami/89-n-shore/10.webp",
  ],
  notes: [
    "If you want the full MLS sheet and disclosures, request privately.",
    "We can also provide rental rule checks (HOA, city) before you move forward.",
  ],
};

export default function HomeDetail() {
  const ogImage = home.gallery?.[0] || "/img/selected-homes/miami/miami-01.jpg";

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
                <div className="priceLabel">Price</div>
                <div className="price">{home.priceLabel}</div>
              </div>
            </div>

            <p className="lead">{home.subtitle}</p>

            <div className="pillRow">
              {home.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
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
              Source: public listing information. Photos shown on this page should be uploaded only if you own usage rights.
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
                If you want the MLS sheet, disclosures, and a rental rule check, request the private details and we will
                send the full package.
              </div>

              <div className="actions" style={{ marginTop: 14 }}>
                <Link
                  className="btnPrimary"
                  href={`#contact`}
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

      <style jsx>{`
        .kicker {
          letter-spacing: 0.18em;
          font-weight: 800;
          font-size: 12px;
          opacity: 0.9;
          margin-bottom: 10px;
        }
        .crumbs {
          margin-bottom: 10px;
        }
        .crumbLink {
          text-decoration: none;
          opacity: 0.75;
        }
        .titleRow {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-end;
          flex-wrap: wrap;
        }
        .subline {
          opacity: 0.8;
          margin-top: 6px;
        }
        .priceBox {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 14px;
          padding: 10px 12px;
          min-width: 160px;
          text-align: right;
        }
        .priceLabel {
          font-size: 12px;
          opacity: 0.7;
        }
        .price {
          font-weight: 900;
          font-size: 18px;
          margin-top: 4px;
        }
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
        .note {
          margin-top: 12px;
          font-size: 13px;
          opacity: 0.7;
        }

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
          .imgCard {
            grid-column: span 12;
          }
          .img {
            height: 220px;
          }
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
        .factLabel {
          font-size: 12px;
          opacity: 0.7;
        }
        .factValue {
          font-weight: 900;
          margin-top: 4px;
        }
        @media (max-width: 640px) {
          .facts {
            grid-template-columns: 1fr;
          }
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
        .cardTitle {
          font-weight: 900;
          margin-bottom: 8px;
        }
        .cardText {
          opacity: 0.8;
          line-height: 1.5;
          font-size: 14px;
        }
        @media (max-width: 900px) {
          .cards3 {
            grid-template-columns: 1fr;
          }
        }

        .noteBox {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.02);
          border-radius: 18px;
          padding: 14px;
        }
        .noteTitle {
          font-weight: 900;
          margin-bottom: 6px;
        }
        .noteText {
          opacity: 0.8;
          line-height: 1.5;
        }

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
