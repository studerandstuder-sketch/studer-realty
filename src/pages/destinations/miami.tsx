// src/pages/destinations/miami.tsx
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
    priceLabel: "On request",
    href: "/selected-homes/miami/89-n-shore-dr-miami-beach",
  },
  {
    id: "miami-02",
    title: "New Build Modern — Shorecrest",
    subtitle: "2023 build · AirBnb Licensed · Easy operations · Strong resale logic",
    image: "/img/selected-homes/miami/741-ne-80th/01.webp",
    tags: ["New build", "Lifestyle", "Liquidity"],
    framework: "Live · Rent · Resell",
    priceLabel: "On request",
    href: "/selected-homes/miami/741-ne-80th-st-miami",
  },
  {
    id: "miami-03",
    title: "Bay View Condo — North Bay Village",
    subtitle: "High floor · Open bay views · Low-maintenance lifestyle",
    image: "/img/selected-homes/miami/7935-east-dr-803/01.webp",
    tags: ["Water views", "Condo", "Lifestyle"],
    framework: "Live · Rent · Resell",
    priceLabel: "On request",
    href: "/selected-homes/miami/7935-east-dr-apt-803-north-bay-village",
  },
  {
    id: "miami-04",
    title: "Modern Multi-Family — Miami Beach",
    subtitle: "Newer build · Income profile · Strong long-term optionality",
    image: "/img/selected-homes/miami/3909-garden/01.webp",
    tags: ["Multi-family", "Income", "Long-term hold"],
    framework: "Live · Rent · Resell",
    priceLabel: "On request",
    href: "/selected-homes/miami/3909-garden-ave-miami-beach",
  },
  {
    id: "miami-05",
    title: "Waterfront Villa — Normandy Shores",
    subtitle: "Gated island · Private dock · Pool · Ocean access positioning",
    image: "/img/selected-homes/miami/970-s-shore/05.webp",
    tags: ["Waterfront", "Gated", "Boating"],
    framework: "Live · Rent · Resell",
    priceLabel: "On request",
    href: "/selected-homes/miami/970-s-shore-dr-miami-beach",
  },
];

export default function MiamiCityPage() {
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
        <title>Miami | Studer Realty</title>
        <meta
          name="description"
          content="Miami: waterfront living, income optionality, and global liquidity. Live · Rent · Resell."
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
            <a href="/#contact" className="navCta">
              Private Call
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO VIDEO */}
        <section className="heroVideo">
          <video
            className="heroVideoEl"
            src="/video/hero-miami.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="heroVideoOverlay" />

          <div className="heroVideoContent">
            <div className="container narrow">
              <div className="kicker">DESTINATION</div>
              <h1 className="h1">Miami</h1>
<p className="lead">
  Waterfront living, global capital, and real optionality.
  <strong> Live · Rent · Resell</strong>.
</p>

<div className="whyInline">
  <p>
    Miami is not just Florida. It’s a global gateway. People buy here because
    they want to <strong>use</strong> the home, not just own it.
  </p>
  <p>
    When selection is disciplined, Miami can combine lifestyle value, rental
    optionality, and liquidity, with a buyer pool that is both domestic and
    international.
  </p>
</div>


              <div className="heroActions">
                <a className="btnPrimary" href="#selection">
                  View our Miami selection
                </a>
                <Link className="btnGhost" href="/contact">
                  Private call
                </Link>
              </div>

              <p className="muted heroNote">
                Not an inventory. A curated selection aligned with our framework.

              </p>
            </div>
          </div>
        </section>

        {/* CURATED SELECTION (embedded) */}
        <section className="sectionAlt" id="selection">
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

            <div className="railNote">
              <span className="dot" aria-hidden="true" />
              Off-market opportunities are shared privately after a short call.
            </div>

            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link className="btnPrimary" href="/contact?city=miami">
                Request a private shortlist
              </Link>
              <Link className="btnGhost" href="/buying-living">
                Read the framework
              </Link>
            </div>
          </div>
        </section>

        {/* HOW WE SELECT */}
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">How We Select in Miami</h2>
              <p className="muted">Calm selection, strong fundamentals, and built-in optionality.</p>
            </div>

            <div className="iconGrid">
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/micro-location.png)" }}
                  aria-hidden="true"
                />
                Prime micro-locations first
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/usability.png)" }}
                  aria-hidden="true"
                />
                Views, light, orientation
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/compliance.png)" }}
                  aria-hidden="true"
                />
                Rental rules verified upfront
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/timeless.png)" }}
                  aria-hidden="true"
                />
                HOA constraints checked early
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/optionality.png)" }}
                  aria-hidden="true"
                />
                Downside protection built-in
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/liquidity.png)" }}
                  aria-hidden="true"
                />
                Exit logic from day one
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO AVOID */}
        <section className="sectionAlt">
          <div className="container narrow">
            <h2 className="h2">Common Mistakes in Miami</h2>
            <p className="lead">Avoidable costs usually come from rushed decisions.</p>

            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Buying hype instead of fundamentals</li>
              <li>Ignoring HOA / rental restrictions until too late</li>
              <li>Overpaying for finishes instead of location and layout</li>
              <li>Confusing “new” with “desirable”</li>
              <li>No clear exit strategy</li>
            </ul>

            <p className="quote" style={{ marginTop: 18 }}>
              Selection discipline creates lifestyle and protects capital.
            </p>
          </div>
        </section>

        {/* OWNERSHIP REALITY */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">Owning in Miami: The Reality</h2>
            <p className="lead">No drama. Just clarity.</p>
            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Insurance and operating costs vary widely by property type</li>
              <li>Rental performance depends on rules, seasonality, and execution</li>
              <li>Liquidity is neighborhood-specific, micro-location wins</li>
              <li>Optionality is designed, not assumed</li>
            </ul>
          </div>
        </section>
      </main>

      <style jsx>{`
        .heroVideo {
          position: relative;
          min-height: 70vh;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .heroVideoEl {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
        }
        .heroVideoOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.7)
          );
        }
        .heroVideoContent {
          position: relative;
          padding: 88px 0 64px;
        }
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

        /* Buttons (fallback). If you already have .btnPrimary/.btnGhost globally, remove these. */
        :global(.btnPrimary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 999px;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.92);
          color: #000;
          font-weight: 700;
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
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.16);
        }
      `}</style>
    </>
  );
}
