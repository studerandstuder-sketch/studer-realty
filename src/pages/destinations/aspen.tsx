// src/pages/destinations/aspen.tsx
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";

import { aspenSelection } from "@/data/selectedHomes";

export default function AspenCityPage() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollRail = (dir: "left" | "right") => {
    const el = railRef.current;
    if (!el) return;
    const amount = Math.min(560, el.clientWidth * 0.92);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const requestLink = (id: string) => `/contact?ref=${encodeURIComponent(id)}&city=aspen`;

  const hasSelection = aspenSelection.length > 0;

  return (
    <>
      <Head>
        <title>Aspen | Studer Realty</title>
        <meta
          name="description"
          content="Aspen: scarcity, lifestyle, and long-term desirability. Curated homes aligned with Live · Rent · Resell."
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
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/img/posters/aspen.jpg"
    disablePictureInPicture
  >
    <source src="/video/Hero-Aspen.mp4" type="video/mp4" />
  </video>
          <div className="heroVideoOverlay" />

          <div className="heroVideoContent">
            <div className="container narrow">
              <div className="kicker">DESTINATION</div>
              <h1 className="h1">Aspen</h1>

              <p className="lead">
                Scarcity, lifestyle, and long-term desirability.
                <strong> Live · Rent · Resell</strong>.
              </p>

              {/* Why Aspen inside the video */}
              <div className="whyInline">
                <p>
                  Aspen is a scarcity market. Value holds when you buy the right micro-location,
                  with daily usability and a clean rental story when you are away.
                </p>
                <p>
                  We focus on homes that work in real life: walkability, access, views, and layouts
                  that stay desirable across cycles and seasons.
                </p>
              </div>

              <div className="heroActions">
                <a className="btnPrimary" href="#selection">
                  View our Aspen selection
                </a>
                <Link className="btnGhost" href="/contact?city=aspen">
                  Private call
                </Link>
              </div>

              <p className="muted heroNote">
                Not an inventory. A curated selection aligned with our framework.
              </p>
            </div>
          </div>
        </section>

        {/* CURATED SELECTION */}
        <section className="sectionAlt" id="selection">
          <div className="container">
            <div className="railTop">
              <div>
                <div className="railTitle">CURATED SELECTION</div>
                <div className="railSubtitle">Swipe / scroll horizontally</div>
              </div>

              <div className="railNav">
                <button
                  className="railBtn"
                  onClick={() => scrollRail("left")}
                  aria-label="Scroll left"
                >
                  ‹
                </button>
                <button
                  className="railBtn"
                  onClick={() => scrollRail("right")}
                  aria-label="Scroll right"
                >
                  ›
                </button>
              </div>
            </div>

            {hasSelection ? (
              <div ref={railRef} className="rail" role="list" aria-label="Curated Aspen homes">
                {aspenSelection.map((h) => {
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
            ) : (
              <div className="emptySelection">
                <div className="emptyTitle">Private selection</div>
                <div className="emptyText">
                  We share Aspen opportunities privately after a short call.
                  Tell us your lifestyle goals, budget range, and timeline and we will curate a shortlist.
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
                  <Link className="btnPrimary" href="/contact?city=aspen">
                    Request a private shortlist
                  </Link>
                  <Link className="btnGhost" href="/buying-living">
                    Read the framework
                  </Link>
                </div>
              </div>
            )}

            {hasSelection ? (
              <>
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
                  <Link className="btnPrimary" href="/contact?city=aspen">
                    Request a private shortlist
                  </Link>
                  <Link className="btnGhost" href="/buying-living">
                    Read the framework
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </section>

        {/* HOW WE SELECT */}
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">How We Select in Aspen</h2>
              <p className="muted">Scarcity is real. Selection discipline matters.</p>
            </div>

            <div className="iconGrid">
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/micro-location.png)" }}
                  aria-hidden="true"
                />
                Walkability and access
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/usability.png)" }}
                  aria-hidden="true"
                />
                Daily usability and flow
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/timeless.png)" }}
                  aria-hidden="true"
                />
                Timeless layout over trends
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/optionality.png)" }}
                  aria-hidden="true"
                />
                Rental optionality when unused
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/compliance.png)" }}
                  aria-hidden="true"
                />
                HOA rules and short-term rental clarity
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/liquidity.png)" }}
                  aria-hidden="true"
                />
                Resale logic from day one
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO AVOID */}
        <section className="sectionAlt">
          <div className="container narrow">
            <h2 className="h2">Common Mistakes in Aspen</h2>
            <p className="lead">In scarcity markets, small mistakes are expensive.</p>

            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Buying a beautiful home with weak usability in winter</li>
              <li>Ignoring HOA and rental constraints</li>
              <li>Overpaying for finishes while missing the micro-location premium</li>
              <li>No plan for operations: snow, maintenance, staffing</li>
              <li>Assuming rental performance without a real execution plan</li>
            </ul>

            <p className="quote" style={{ marginTop: 18 }}>
              The best Aspen purchases feel obvious in daily life and obvious on resale.
            </p>
          </div>
        </section>

        {/* OWNERSHIP REALITY */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">Owning in Aspen: The Reality</h2>
            <p className="lead">Lifestyle, operations, and long-term optionality.</p>

            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Operations matter: winter access, snow, maintenance rhythm</li>
              <li>Scarcity protects value when fundamentals are right</li>
              <li>Liquidity favors clean layouts and proven micro-locations</li>
              <li>Optionality is designed, not assumed</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Styles follow the same pattern as your Brazil/Paris pages */}
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

        .whyInline {
          margin-top: 18px;
          max-width: 720px;
          font-size: 15px;
          line-height: 1.6;
          opacity: 0.85;
        }
        .whyInline p + p {
          margin-top: 10px;
        }

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

        .emptySelection {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.22);
          border-radius: 18px;
          padding: 18px;
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }
        .emptyTitle {
          font-weight: 800;
          margin-bottom: 8px;
        }
        .emptyText {
          opacity: 0.8;
          line-height: 1.6;
          font-size: 14px;
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
