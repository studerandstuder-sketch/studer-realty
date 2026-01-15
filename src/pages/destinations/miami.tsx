// src/pages/selected-homes/miami.tsx
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";

type Home = {
  id: string;
  title: string;
  subtitle: string;
  image: string; // put these in /public/img/selected-homes/miami/
  href?: string; // optional: link to detail page or external
  tags: string[]; // e.g. ["Waterfront", "Rental-ready"]
  framework?: string; // e.g. "Live · Rent · Resell"
  priceLabel?: string; // e.g. "From $2.9M" or "On request"
};

const miamiSelection: Home[] = [
 
{
  id: "miami-01",
  title: "Modern TownHome — Miami Beach",
  subtitle: "Rental · Modern · High desirability micro-location",
  image: "/img/selected-homes/miami/89-n-shore/01.webp",
  tags: ["Waterfront", "Lifestyle"],
  framework: "Live · Rent · Resell",
  priceLabel: "$1,475,000",
  href: "/selected-homes/miami/89-n-shore-dr-miami-beach",
},
{
  id: "miami-02",
  title: "New Build Modern — Shorecrest",
  subtitle: "2023 build · AirBnb Licensed · Easy operations · Strong resale logic",
  image: "/img/selected-homes/miami/741-ne-80th/01.webp",
  tags: ["New build", "Lifestyle", "Liquidity"],
  framework: "Live · Rent · Resell",
  priceLabel: "$2,695,000",
  href: "/selected-homes/miami/741-ne-80th-st-miami",
},
{
  id: "miami-03",
  title: "Bay View Condo — North Bay Village",
  subtitle: "High floor · Open bay views · Low-maintenance lifestyle",
  image: "/img/selected-homes/miami/7935-east-dr-803/01.webp",
  tags: ["Water views", "Condo", "Lifestyle"],
  framework: "Live · Rent · Resell",
  priceLabel: "$946,000",
  href: "/selected-homes/miami/7935-east-dr-apt-803-north-bay-village",
},
{
  id: "miami-04",
  title: "Modern Multi-Family — Miami Beach",
  subtitle: "Newer build · Income profile · Strong long-term optionality",
  image: "/img/selected-homes/miami/3909-garden/01.webp",
  tags: ["Multi-family", "Income", "Long-term hold"],
  framework: "Live · Rent · Resell",
  priceLabel: "$2,900,000",
  href: "/selected-homes/miami/3909-garden-ave-miami-beach",
},{
  id: "miami-05",
  title: "Waterfront Villa — Normandy Shores",
  subtitle: "Gated island · Private dock · Pool · Ocean access positioning",
  image: "/img/selected-homes/miami/970-s-shore/05.webp",
  tags: ["Waterfront", "Gated", "Boating"],
  framework: "Live · Rent · Resell",
  priceLabel: "$3,690,000",
  href: "/selected-homes/miami/970-s-shore-dr-miami-beach",
},

  // Add more homes (10–20 max keeps it premium)
];

export default function MiamiSelectedHomesPage() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollRail = (dir: "left" | "right") => {
    const el = railRef.current;
    if (!el) return;
    const amount = Math.min(560, el.clientWidth * 0.92);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const requestLink = (id: string) => `/contact?ref=${encodeURIComponent(id)}&city=miami`;

  return (
    <>
      <Head>
        <title>Curated Miami Homes | Studer Realty</title>
        <meta
          name="description"
          content="Curated Miami homes aligned with our framework: Live · Rent · Resell. Not an inventory — a selection."
        />
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
        <section className="section" style={{ paddingTop: 56 }}>
          <div className="container narrow">
            <div className="kicker">SELECTED HOMES</div>
            <h1 className="h1">Miami</h1>
            <p className="lead">
              Not an inventory. A <strong>curated selection</strong> aligned with{" "}
              <strong>Live · Rent · Resell</strong>.
            </p>

            <div className="heroActions">
              <Link className="btnGhost" href="/destinations/miami">
                ← Back to Miami
              </Link>
              <Link className="btnPrimary" href="/contact?city=miami">
                Request a private shortlist
              </Link>
            </div>

            <p className="muted heroNote">
              Off-market opportunities are shared privately after a short call.
            </p>
          </div>
        </section>

        {/* RAIL */}
        <section className="sectionAlt">
          <div className="container">
            <div className="railTop">
              <div>
                <div className="railTitle">CURATED SELECTION</div>
                <div className="railSubtitle">Swipe / scroll horizontally</div>
              </div>

              <div className="railNav">
                <button className="railBtn" onClick={() => scrollRail("left")} aria-label="Scroll left">
                  ‹
                </button>
                <button className="railBtn" onClick={() => scrollRail("right")} aria-label="Scroll right">
                  ›
                </button>
              </div>
            </div>

            <div ref={railRef} className="rail" role="list" aria-label="Curated Miami homes">
              {miamiSelection.map((h) => {
                const href = h.href ?? requestLink(h.id);
                return (
                  <a key={h.id} href={href} className="railCard" role="listitem">
                    <div className="railImg" style={{ backgroundImage: `url(${h.image})` }} />
                    <div className="railMeta">
                      <div className="railMetaTop">
                        <div className="railTagRow">
                          {h.tags.slice(0, 2).map((t) => (
                            <span key={t} className="pill">
                              {t}
                            </span>
                          ))}
                        </div>
                        {h.priceLabel ? <div className="railPrice">{h.priceLabel}</div> : null}
                      </div>

                      <div className="railName">{h.title}</div>
                      <div className="railSub">{h.subtitle}</div>

                      <div className="railFooter">
                        <div className="railFramework">{h.framework ?? "Live · Rent · Resell"}</div>
                        <div className="railCta">Explore →</div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Small note */}
            <div className="railNote">
              <span className="dot" aria-hidden="true" />
              Each card opens a private request link. If you prefer direct MLS links, we can switch.
            </div>
          </div>
        </section>

        {/* WHAT THIS IS */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">How This Selection Works</h2>
            <p className="lead">
              We only share homes that pass our Miami criteria — lifestyle fit, rental optionality when relevant, and
              clear resale logic.
            </p>
            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Micro-location first (liquidity beats novelty)</li>
              <li>Rules and constraints checked upfront (HOA / rental / compliance)</li>
              <li>Daily usability matters (light, flow, privacy)</li>
              <li>Exit logic is built-in from day one</li>
            </ul>

            <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btnPrimary" href="/contact?city=miami">
                Request a shortlist
              </Link>
              <Link className="btnGhost" href="/buying-living">
                Read the framework
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Local styles: safe even if your global CSS already exists. */}
      <style jsx>{`
        .kicker {
          letter-spacing: 0.18em;
          font-weight: 700;
          font-size: 12px;
          opacity: 0.85;
          margin-bottom: 10px;
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

        /* RAIL TOP */
        .railTop {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin: 6px 0 14px;
        }
        .railTitle {
          letter-spacing: 0.18em;
          font-weight: 800;
          font-size: 12px;
          opacity: 0.9;
        }
        .railSubtitle {
          font-size: 13px;
          opacity: 0.75;
          margin-top: 6px;
        }
        .railNav {
          display: flex;
          gap: 10px;
        }
        .railBtn {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.25);
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
        }

        /* RAIL */
        .rail {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 8px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .rail::-webkit-scrollbar {
          height: 8px;
        }
        .rail::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 10px;
        }

        .railCard {
          min-width: 320px;
          max-width: 320px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          text-decoration: none;
          color: inherit;
          scroll-snap-align: start;
          display: block;
        }

        .railImg {
          height: 196px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .railMeta {
          padding: 12px 14px 14px;
        }

        .railMetaTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }

        .railTagRow {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
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

        .railPrice {
          font-size: 12px;
          opacity: 0.75;
          white-space: nowrap;
        }

        .railName {
          font-weight: 800;
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .railSub {
          font-size: 13px;
          opacity: 0.75;
          line-height: 1.35;
          min-height: 36px;
        }

        .railFooter {
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .railFramework {
          font-size: 12px;
          opacity: 0.7;
        }

        .railCta {
          font-size: 13px;
          font-weight: 700;
          opacity: 0.9;
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
