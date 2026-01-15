import Head from "next/head";
import Link from "next/link";

type Fact = { label: string; value: string };

const sourceUrl =
  "https://www.bellesdemeures.com/annonces/vente/tt-2-tb-2-pl-361/247402145/";

const home = {
  slug: "villa-saint-barthelemy",
  title: "Villa Saint-Barthélemy - Grand Cul-de-Sac",
  area: "Saint-Barthélemy (Grand Cul-de-Sac)",
  priceLabel: "€ 7,600,000",
  tags: ["Grand Cul-de-Sac", "Sea view", "Green zone", "2019", "Expansion"],
  subtitle:
    "A contemporary 206 m² villa above Grand Cul-de-Sac with panoramic ocean and lagoon views, a heated overflow pool, and a protected green-zone setting designed to preserve privacy. Expansion potential adds meaningful upside for a guest house or additional rooms.",
  facts: [
    { label: "Living area", value: "206 m²" },
    { label: "Land", value: "1,500 m²" },
    { label: "Bedrooms", value: "3" },
    { label: "Build", value: "2019" },
    { label: "Pool", value: "Heated overflow" },
    { label: "Views", value: "Ocean + lagoon" },
    { label: "Setting", value: "Protected green zone" },
    { label: "Access", value: "4x4 recommended" },
    { label: "Parking", value: "Large private parking" },
    { label: "Upside", value: "Approx. +90 m² possible" },
  ] as Fact[],
  highlights: [
    "Protected green-zone hillside location helps preserve privacy and limits nearby construction",
    "Panoramic ocean and lagoon views over Grand Cul-de-Sac",
    "Heated overflow pool facing the ocean for true indoor-outdoor living",
    "Contemporary layout with en-suite bedrooms and terraces oriented to views",
    "Expansion potential (approx. +90 m²) supports guest house or additional rooms",
  ],
  framework: [
    {
      title: "Live",
      text:
        "A clean, modern St Barth base with view-driven daily living: terraces, pool, and a calm protected setting that supports real privacy.",
    },
    {
      title: "Rent",
      text:
        "Strong premium demand typically concentrates around view, privacy, and indoor-outdoor flow. A 3-bedroom layout with en-suites and pool presents well in high-season.",
    },
    {
      title: "Resell",
      text:
        "Protected zones and scarcity support long-term desirability. Expansion upside can widen buyer demand and improve value-per-square-meter positioning.",
    },
  ],
  // IMPORTANT:
  // Only upload and use photos you own rights to.
  // Place your images here:
  // /public/img/selected-homes/st-barth/villa-saint-barthelemy/
  gallery: [
    "/img/selected-homes/st-barth/villa-saint-barthelemy/01.webp",
    "/img/selected-homes/st-barth/villa-saint-barthelemy/02.webp",
    "/img/selected-homes/st-barth/villa-saint-barthelemy/03.webp",
    "/img/selected-homes/st-barth/villa-saint-barthelemy/04.webp",
    "/img/selected-homes/st-barth/villa-saint-barthelemy/05.webp",
    "/img/selected-homes/st-barth/villa-saint-barthelemy/06.webp",
    "/img/selected-homes/st-barth/villa-saint-barthelemy/07.webp",
    "/img/selected-homes/st-barth/villa-saint-barthelemy/08.webp",
    "/img/selected-homes/st-barth/villa-saint-barthelemy/09.webp",
  ],
  notes: [
    "Source is a public listing (Belles Demeures). Specs, availability, and pricing can change. Request the private package for verification.",
    "Photos on this page should be uploaded only if you own usage rights.",
  ],
};

export default function HomeDetailVillaSaintBarthelemy() {
  const ogImage =
    home.gallery?.[0] || "/img/selected-homes/st-barth/st-barth-01.webp";

  return (
    <>
      <Head>
        <title>{home.title} | Selected Homes St Barth | Studer Realty</title>
        <meta name="description" content={home.subtitle} />
        <meta
          property="og:title"
          content={`${home.title} | Selected Homes St Barth`}
        />
        <meta property="og:description" content={home.subtitle} />
        <meta property="og:image" content={ogImage} />
        <meta name="robots" content="index,follow" />
      </Head>

      <header className="header">
        <div className="container headerInner">
          <a
            className="logo"
            href="/"
            aria-label="Studer International Realty home"
          >
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
        {/* TOP */}
        <section className="section" style={{ paddingTop: 56 }}>
          <div className="container narrow">
            <div className="crumbs">
              <Link href="/destinations/st-barth#selection" className="crumbLink">
                ← Back to St Barth
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
                href={`/contact?city=st-barth&ref=${encodeURIComponent(home.slug)}`}
              >
                Request full details
              </Link>
              <a className="btnGhost" href={sourceUrl} target="_blank" rel="noreferrer">
                View source listing
              </a>
            </div>

            <div className="muted note">
              Source: public listing information. Photos on this page should be uploaded only if you own usage rights.
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="sectionAlt">
          <div className="container">
            <div className="gallery" aria-label="Property photo gallery">
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
                Request the full specs, exact legal situation, and a clean due diligence plan before committing.
              </div>

              <div className="actions" style={{ marginTop: 14 }}>
                <Link
                  className="btnPrimary"
                  href={`/contact?city=st-barth&ref=${encodeURIComponent(home.slug)}`}
                >
                  Request full details
                </Link>
                <Link className="btnGhost" href="/destinations/st-barth">
                  Explore St Barth
                </Link>
              </div>
            </div>

            <div className="muted note" style={{ marginTop: 12 }}>
              {home.notes.join(" ")}
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
