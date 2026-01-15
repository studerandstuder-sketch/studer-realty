// src/pages/rentals/brazil/villa-bianca-buzios.tsx
import Head from "next/head";
import Link from "next/link";

type Fact = { label: string; value: string };

const sourceUrl =
  "https://www.airbnb.com/rooms/1212968858939250571?viralityEntryPoint=1&s=76";

const rental = {
  slug: "villa-bianca-buzios",
  title: "Villa Bianca — Búzios",
  area: "João Fernandes, Armação dos Búzios - RJ",
  priceLabel: "Check availability",
  tags: ["Rental", "Pool", "Sea view", "Guest favorite"],
  subtitle:
    "A high-standard villa in João Fernandes, one of Búzios’s most charming beaches, designed for effortless stays with family and friends. Strong indoor-outdoor flow, pool, and a clean hosting setup.",
  facts: [
    { label: "Type", value: "Entire home" },
    { label: "Guests", value: "11" },
    { label: "Bedrooms", value: "5" },
    { label: "Beds", value: "6" },
    { label: "Bathrooms", value: "5.5" },
    { label: "Location", value: "João Fernandes · Búzios" },
    { label: "Beach", value: "~600 m to João Fernandes Beach" },
    { label: "Wi-Fi", value: "Fast Wi-Fi (247 Mbps)" },
    { label: "Check-in", value: "Self check-in (lockbox)" },
    { label: "Note", value: "Water and electricity paid separately" },
  ] as Fact[],
  highlights: [
    "Guest favorite (top-ranked listing profile)",
    "Pool on-site and sea/ocean view",
    "5 bedrooms with ensuite configuration described in listing",
    "Integrated social area with island kitchen, dining, and TV room",
    "Suites opened based on reservation guest count (per host’s notes)",
  ],
  stayFit: [
    {
      title: "Lifestyle",
      text:
        "João Fernandes is a high-end area with easy beach access and a calm, premium Búzios feel. Great for short stays and long weekends.",
    },
    {
      title: "Hosting",
      text:
        "Designed for groups: 11 guests, multiple suites, and an integrated social core. Pool + outdoor time is the center of the experience.",
    },
    {
      title: "Practical",
      text:
        "Self check-in via lockbox and fast Wi-Fi support a low-friction stay. Utilities billed separately, so budget accordingly.",
    },
  ],
  // IMPORTANT:
  // Do not reuse Airbnb photos unless you have usage rights.
  // Upload your own images and place them here:
  // /public/img/rentals/brazil/villa-bianca/
  gallery: [
    "/img/selected-homes/brazil/villa-bianca/01.avif",
    "/img/selected-homes/brazil/villa-bianca/02.avif",
    "/img/selected-homes/brazil/villa-bianca/03.avif",
    "/img/selected-homes/brazil/villa-bianca/04.avif",
    "/img/selected-homes/brazil/villa-bianca/05.avif",
  ],
};

export default function RentalVillaBianca() {
  const ogImage = rental.gallery?.[0] || "/img/rentals/brazil/brazil-rental-01.webp";

  return (
    <>
      <Head>
        <title>{rental.title} | Brazil Rentals | Studer Realty</title>
        <meta name="description" content={rental.subtitle} />
        <meta property="og:title" content={`${rental.title} | Brazil Rentals`} />
        <meta property="og:description" content={rental.subtitle} />
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
              <Link href="/destinations/brazil#rentals" className="crumbLink">
                ← Back to Rio · Búzios
              </Link>
            </div>

            <div className="kicker">RENTAL</div>

            <div className="titleRow">
              <div>
                <h1 className="h1">{rental.title}</h1>
                <div className="subline">{rental.area}</div>
              </div>

              <div className="priceBox">
                <div className="priceLabel">Rate</div>
                <div className="price">{rental.priceLabel}</div>
              </div>
            </div>

            <p className="lead">{rental.subtitle}</p>

            <div className="pillRow">
              {rental.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="actions">
              <Link
                className="btnPrimary"
                href={`/contact?city=brazil&ref=${encodeURIComponent(rental.slug)}&type=rental`}
              >
                Request dates and quote
              </Link>
              <a className="btnGhost" href={sourceUrl} target="_blank" rel="noreferrer">
                View on Airbnb
              </a>
            </div>

            <div className="muted note">
              Source: public listing information (Airbnb). Photos on this page should be uploaded only if you own usage rights.
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="sectionAlt">
          <div className="container">
            <div className="gallery">
              {rental.gallery.map((src) => (
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
              {rental.facts.map((f) => (
                <div key={f.label} className="fact">
                  <div className="factLabel">{f.label}</div>
                  <div className="factValue">{f.value}</div>
                </div>
              ))}
            </div>

            <div className="hr" />

            <h2 className="h2">Why This Rental</h2>
            <ul className="bullets">
              {rental.highlights.map((h) => (
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
              {rental.stayFit.map((b) => (
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
                Send your dates and guest count. We will confirm availability, total cost, and key house rules and fees.
              </div>

              <div className="actions" style={{ marginTop: 14 }}>
                <Link
                  className="btnPrimary"
                  href={`/contact?city=brazil&ref=${encodeURIComponent(rental.slug)}&type=rental`}
                >
                  Request dates and quote
                </Link>
                <Link className="btnGhost" href="/destinations/brazil">
                  Explore Rio · Búzios
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
