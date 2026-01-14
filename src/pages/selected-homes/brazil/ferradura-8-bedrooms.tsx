import Head from "next/head";
import Link from "next/link";

type Fact = { label: string; value: string };

// Public source listing (Zap Imóveis)
const sourceUrl =
  "https://www.zapimoveis.com.br/imovel/venda-casa-8-quartos-mobiliado-ferradura-armacao-dos-buzios-rj-520m2-id-2795004214/?source=ranking%2Crp";

const home = {
  slug: "ferradura-8-bedrooms-buzios",
  title: "Ferradura 8-Bedroom Villa",
  area: "Ferradura, Armação dos Búzios – RJ",
  priceLabel: "R$ 8,500,000",
  tags: ["Luxury", "Ferradura", "Eight suites"],
  subtitle:
    "Spacious villa in Ferradura with 8 bedrooms, abundant space and easy access to the bay and amenities — ideal for lifestyle living, rental optionality, and future resale positioning.",
  facts: [
    { label: "Area", value: "≈ 520 m²" },
    { label: "Beds", value: "8" },
    { label: "Suites", value: "8" },
    { label: "Baths", value: "≈ 11" },
    { label: "Parking", value: "8 vagas" },
    { label: "Location", value: "Ferradura · Armação dos Búzios" },
    { label: "Beach", value: "Nearby Ferradura bay" },
  ] as Fact[],
  highlights: [
    "Eight spacious suites with privacy and flow",
    "Large indoor and outdoor living spaces",
    "Close proximity to Ferradura bay and local amenities",
    "Layout suited for year-round lifestyle or seasonal rental",
    "Strong long-term appeal in Búzios luxury segment",
  ],
  framework: [
    {
      title: "Live",
      text:
        "A villa with scale and flexibility: generous living spaces, suites, and social areas positioned for daily comfort and entertaining.",
    },
    {
      title: "Rent",
      text:
        "High bedroom count and finishes support premium rental strategies when aligned with platform rules and onsite operations.",
    },
    {
      title: "Resell",
      text:
        "Ferradura remains one of Búzios’s most sought-after segments; scale and layout support longer-term liquidity relative to standing inventory.",
    },
  ],
  gallery: [
    "/img/selected-homes/brazil/ferradura-8-bedrooms/01.webp",
    "/img/selected-homes/brazil/ferradura-8-bedrooms/02.webp",
    "/img/selected-homes/brazil/ferradura-8-bedrooms/03.webp",
    "/img/selected-homes/brazil/ferradura-8-bedrooms/04.webp",
    "/img/selected-homes/brazil/ferradura-8-bedrooms/05.webp",
  ],
  notes: [
    "Public listing info is summary only; request full due diligence for exact specs, bedrooms, baths, and taxes.",
  ],
};

export default function HomeDetailFerradura8Bedrooms() {
  const ogImage =
    home.gallery[0] || "/img/selected-homes/brazil/brazil-01.webp";

  return (
    <>
      <Head>
        <title>{home.title} | Selected Homes Brazil | Studer Realty</title>
        <meta name="description" content={home.subtitle} />
        <meta property="og:title" content={`${home.title} | Selected Homes Brazil`} />
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
        {/* Top Section */}
        <section className="section" style={{ paddingTop: 56 }}>
          <div className="container narrow">
            <div className="crumbs">
              <Link href="/destinations/brazil#selection" className="crumbLink">
                ← Back to Búzios selection
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
                <span key={t} className="pill">{t}</span>
              ))}
            </div>

            <div className="actions">
              <Link
                className="btnPrimary"
                href={`/contact?city=brazil&ref=${encodeURIComponent(home.slug)}`}
              >
                Request full details
              </Link>
              <a className="btnGhost" href={sourceUrl} target="_blank" rel="noreferrer">
                View source listing
              </a>
            </div>

            <div className="muted note">
              Source: public listing information. Photos on this page require usage rights.
            </div>
          </div>
        </section>

        {/* Gallery */}
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

        {/* Facts */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">Key Facts</h2>
            <div className="facts">
              {home.facts.map((f) => (
                <div key={f.label} className="fact">
                  <div className="factLabel">{f.label}</div>
                  <div class="factValue">{f.value}</div>
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

        {/* Framework */}
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
                Request the MLS sheet, full floor plans, and due-diligence package to evaluate.
              </div>

              <div className="actions" style={{ marginTop: 14 }}>
                <Link
                  className="btnPrimary"
                  href={`/contact?city=brazil&ref=${encodeURIComponent(home.slug)}`}
                >
                  Request full details
                </Link>
                <Link className="btnGhost" href="/destinations/brazil">
                  Explore Rio · Búzios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Styles – same as your other selected-home pages */}
      <style jsx>{`
        /* same CSS as your Miami/Brazil selected home template */
        /* … */
      `}</style>
    </>
  );
}
