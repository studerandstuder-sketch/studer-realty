// src/pages/selected-homes/aspen/centre-ville-aspen-luxe.tsx
import Head from "next/head";
import Link from "next/link";

type Fact = { label: string; value: string };

const sourceUrl =
  "https://www.airbnb.fr/rooms/1258841507841582452?viralityEntryPoint=1&s=76&source_impression_id=p3_1768491024_P3CdLaQ4fDAcybxQ";

const home = {
  slug: "centre-ville-aspen-luxe",
  title: "Centre-Ville Aspen - Luxe",
  area: "Aspen, Colorado (Downtown core)",
  priceLabel: "Check availability",
  tags: ["Aspen Core", "Luxury", "Walkable", "Fire pit", "Guest favorite"],
  subtitle:
    "A downtown Aspen entire home designed for premium stays, with a strong hosting setup, mountain views, and a private outdoor fire pit. Steps from Main Street, dining, boutiques, and ski access.",
  facts: [
    { label: "Type", value: "Entire home" },
    { label: "Guests", value: "10" },
    { label: "Bedrooms", value: "5" },
    { label: "Beds", value: "5" },
    { label: "Bathrooms", value: "3" },
    { label: "Highlights", value: "Fire pit · Mountain views · Walkable" },
    { label: "Self check-in", value: "Keypad" },
    { label: "Parking", value: "Private driveway (3-4 vehicles)" },
    { label: "Location", value: "2-minute walk to Main Street (per listing)" },
  ] as Fact[],
  highlights: [
    "Aspen Core location with a short walk to Main Street, dining, boutiques, and ski access",
    "Fire pit outdoor setup built for winter and year-round evenings",
    "Five-bedroom layout positioned for groups and multi-family stays",
    "Private driveway for 3-4 vehicles (rare perk in downtown Aspen)",
    "Guest favorite with strong rating profile (per listing)",
  ],
  framework: [
    {
      title: "Stay",
      text:
        "Downtown positioning makes the trip effortless: walk to restaurants, shopping, lifts, and cultural spots without planning around transport.",
    },
    {
      title: "Host",
      text:
        "A five-bedroom plan plus a strong social core supports premium hosting. Fire pit evenings and indoor-outdoor flow drive the experience.",
    },
    {
      title: "Enjoy",
      text:
        "Mountain views, designer feel, and private outdoor moments. Built for memorable stays in peak season and shoulder season alike.",
    },
  ],
  // IMPORTANT:
  // Do not reuse Airbnb photos unless you have usage rights.
  // Upload your own images and place them here:
  // /public/img/selected-homes/aspen/centre-ville-aspen-luxe/
  gallery: [
    "/img/selected-homes/aspen/centre-ville-aspen-luxe/01.avif",
    "/img/selected-homes/aspen/centre-ville-aspen-luxe/02.avif",
    "/img/selected-homes/aspen/centre-ville-aspen-luxe/03.avif",
    "/img/selected-homes/aspen/centre-ville-aspen-luxe/04.avif",
    "/img/selected-homes/aspen/centre-ville-aspen-luxe/05.avif",
    "/img/selected-homes/aspen/centre-ville-aspen-luxe/06.avif",
    "/img/selected-homes/aspen/centre-ville-aspen-luxe/07.avif",
    "/img/selected-homes/aspen/centre-ville-aspen-luxe/08.avif",
    "/img/selected-homes/aspen/centre-ville-aspen-luxe/09.avif",
  ],
};

export default function HomeDetailAspenCentreVilleLuxe() {
  const ogImage = home.gallery?.[0] || "/img/selected-homes/aspen/aspen-01.webp";

  return (
    <>
      <Head>
        <title>{home.title} | Selected Homes Aspen | Studer Realty</title>
        <meta name="description" content={home.subtitle} />
        <meta property="og:title" content={`${home.title} | Selected Homes Aspen`} />
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
              <Link href="/destinations/aspen#selection" className="crumbLink">
                ← Back to Aspen
              </Link>
            </div>

            <div className="kicker">SELECTED HOME</div>

            <div className="titleRow">
              <div>
                <h1 className="h1">{home.title}</h1>
                <div className="subline">{home.area}</div>
              </div>

              <div className="priceBox">
                <div className="priceLabel">Rate</div>
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
                Request dates and quote
              </Link>
              <a className="btnGhost" href={sourceUrl} target="_blank" rel="noreferrer">
                View on Airbnb
              </a>
            </div>

            <div className="muted note">
              Source: public listing information (Airbnb). Specs can change. Photos on this page should be uploaded only if you own usage rights.
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

        {/* STAY FIT */}
        <section className="sectionAlt">
          <div className="container narrow">
            <div className="kicker">STAY · HOST · ENJOY</div>
            <h2 className="h2">Stay Fit</h2>

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
                Send your dates and guest count. We will confirm availability, total cost, and any key rules or fees.
              </div>

              <div className="actions" style={{ marginTop: 14 }}>
                <Link
                  className="btnPrimary"
                  href={`/#contact`}
                >
                  Request dates and quote
                </Link>
                <Link className="btnGhost" href="/destinations/aspen">
                  Explore Aspen
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
