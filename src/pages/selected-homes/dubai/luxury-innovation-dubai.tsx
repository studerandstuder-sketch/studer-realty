import Head from "next/head";
import Link from "next/link";

type Fact = { label: string; value: string };

const sourceUrl =
  "https://www.realtor.com/international/ae/dubai-dubai-310104833534/";

const home = {
  slug: "luxury-innovation-dubai",
  title: "Luxury Innovation Residence — Dubai",
  area: "Dubai, United Arab Emirates",
  priceLabel: "On request",
  tags: ["Dubai", "Luxury", "Contemporary", "Innovation"],
  subtitle:
    "A high-end contemporary residence in Dubai, defined by modern architecture, advanced amenities, and a lifestyle-oriented layout. Designed for premium living, hosting, and long-term positioning in one of the world’s most dynamic luxury markets.",
  facts: [
    { label: "Property type", value: "Luxury residence" },
    { label: "Architecture", value: "Contemporary" },
    { label: "Setting", value: "Prime Dubai location" },
    { label: "Layout", value: "Open-plan living" },
    { label: "Amenities", value: "High-end features" },
    { label: "Market", value: "International luxury" },
  ] as Fact[],
  highlights: [
    "Modern architectural language aligned with Dubai’s premium standards",
    "Designed for lifestyle-driven living and entertaining",
    "Strong positioning within Dubai’s international luxury market",
    "High-quality finishes and contemporary materials throughout",
    "Appeals to both end-users and global investors seeking exposure to Dubai",
  ],
  framework: [
    {
      title: "Live",
      text:
        "A refined Dubai base offering comfort, technology, and modern design, suitable for full-time living or extended stays.",
    },
    {
      title: "Rent",
      text:
        "Dubai’s premium rental market rewards turnkey, contemporary residences with strong amenities and architectural appeal.",
    },
    {
      title: "Resell",
      text:
        "Dubai’s liquidity and international buyer pool support resale potential, particularly for modern properties aligned with current lifestyle expectations.",
    },
  ],
  // IMPORTANT:
  // Upload only images you own rights to.
  // Suggested path:
  // /public/img/selected-homes/dubai/luxury-innovation-dubai/
  gallery: [
    "/img/selected-homes/dubai/luxury-innovation-dubai/01.jpg",
    "/img/selected-homes/dubai/luxury-innovation-dubai/02.jpg",
    "/img/selected-homes/dubai/luxury-innovation-dubai/03.jpg",
    "/img/selected-homes/dubai/luxury-innovation-dubai/04.jpg",
    "/img/selected-homes/dubai/luxury-innovation-dubai/05.jpg",
    "/img/selected-homes/dubai/luxury-innovation-dubai/06.jpg",
  ],
  notes: [
    "Source is a public international listing (Realtor.com). Specifications, pricing, and availability may change.",
    "Photos on this page should be uploaded only if you own usage rights.",
  ],
};

export default function HomeDetailLuxuryInnovationDubai() {
  const ogImage =
    home.gallery?.[0] || "/img/selected-homes/dubai/dubai-01.webp";

  return (
    <>
      <Head>
        <title>{home.title} | Selected Homes Dubai | Studer Realty</title>
        <meta name="description" content={home.subtitle} />
        <meta
          property="og:title"
          content={`${home.title} | Selected Homes Dubai`}
        />
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
              <Link href="/destinations/dubai#selection" className="crumbLink">
                ← Back to Dubai
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
                href={`/contact?city=dubai&ref=${encodeURIComponent(home.slug)}`}
              >
                Request full details
              </Link>
              <a className="btnGhost" href={sourceUrl} target="_blank" rel="noreferrer">
                View source listing
              </a>
            </div>

            <div className="muted note">
              Source: public international listing. Photos on this page should be uploaded only if you own usage rights.
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
                Request the full specs, legal structure, and positioning strategy before committing.
              </div>

              <div className="actions" style={{ marginTop: 14 }}>
                <Link
                  className="btnPrimary"
                  href={`/contact?city=dubai&ref=${encodeURIComponent(home.slug)}`}
                >
                  Request full details
                </Link>
                <Link className="btnGhost" href="/destinations/dubai">
                  Explore Dubai
                </Link>
              </div>
            </div>

            <div className="muted note" style={{ marginTop: 12 }}>
              {home.notes.join(" ")}
            </div>
          </div>
        </section>
      </main>

      {/* CSS is intentionally identical to Beaugrenelle / St-Barth pages */}
    </>
  );
}
