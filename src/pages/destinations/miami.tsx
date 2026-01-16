// src/pages/selected-homes/miami.tsx
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";

import { miamiSelection } from "@/data/selectedHomes";

export default function MiamiSelectedHomesPage() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollRail = (dir: "left" | "right") => {
    const el = railRef.current;
    if (!el) return;
    const amount = Math.min(560, el.clientWidth * 0.92);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const requestLink = (id: string) => `/contact?ref=${encodeURIComponent(id)}&city=miami`;

  const hasSelection = miamiSelection.length > 0;

  return (
    <>
      <Head>
        <title>Miami | Selected Homes | Studer Realty</title>
        <meta
          name="description"
          content="Miami: curated homes aligned with Live · Rent · Resell. Not an inventory, a selection."
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
            poster="/img/posters/miami.jpg"
            disablePictureInPicture
  >
    <source src="/video/Hero-Miami.mp4" type="video/mp4" />
  </video>

          <div className="heroVideoOverlay" />

          <div className="heroVideoContent">
            <div className="container narrow">
              <div className="kicker">SELECTED HOMES</div>
              <h1 className="h1">Miami</h1>

              <p className="lead">
                Not an inventory. A <strong>curated selection</strong> aligned with{" "}
                <strong>Live · Rent · Resell</strong>.
              </p>

              <div className="whyInline">
                <p>
                  We select homes as if we were going to live in them. Location, light, and daily
                  usability first.
                </p>
                <p>
                  Optional rental income is a bonus, not the strategy. The strategy is liquidity and
                  long-term desirability.
                </p>
              </div>

              <div className="heroActions">
                <a className="btnPrimary" href="#selection">
                  View the selection
                </a>
               <Link className="btnGhost" href="/#contact">
                  Private call
                </Link>
              </div>

              <p className="muted heroNote">
                Off-market opportunities are shared privately after a short call.
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
                <button className="railBtn" onClick={() => scrollRail("left")} aria-label="Scroll left">
                  ‹
                </button>
                <button className="railBtn" onClick={() => scrollRail("right")} aria-label="Scroll right">
                  ›
                </button>
              </div>
            </div>

            {hasSelection ? (
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
            ) : (
              <div className="emptySelection">
                <div className="emptyTitle">Private selection</div>
                <div className="emptyText">
                  We share Miami opportunities privately after a short call. Tell us your lifestyle
                  goals and budget range and we will curate a shortlist.
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
                  <Link className="btnPrimary" href="/#contact">
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
                  Each card opens a private request link. If you prefer direct MLS links, we can switch.
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
                  <Link className="btnPrimary" href="/#contact">
                    Request a shortlist
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
              <h2 className="h2">How We Select in Miami</h2>
              <p className="muted">Micro-location, usability, and clean resale logic.</p>
            </div>

            <div className="iconGrid">
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/micro-location.png)" }}
                  aria-hidden="true"
                />
                Micro-location first
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/usability.png)" }}
                  aria-hidden="true"
                />
                Light, flow, and privacy
              </div>
              <div className="iconItem">
                <div
                  className="iconBox"
                  style={{ backgroundImage: "url(/img/icons/compliance.png)" }}
                  aria-hidden="true"
                />
                HOA and rental rules checked
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
                Optionality designed upfront
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
            <h2 className="h2">Common Mistakes in Miami</h2>
            <p className="lead">Avoidable costs usually come from rushed decisions.</p>

            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Buying views without checking constraints (HOA, flood, docks, rentals)</li>
              <li>Over-optimizing for short-term rental without a long-term plan</li>
              <li>Ignoring daily usability (noise, parking, light, privacy)</li>
              <li>Choosing novelty over fundamentals and resale positioning</li>
              <li>No clean operations plan when you are away</li>
            </ul>

            <p className="quote" style={{ marginTop: 18 }}>
              Liquidity is designed. Micro-location beats novelty.
            </p>
          </div>
        </section>

        {/* OWNERSHIP REALITY */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">Owning in Miami: The Reality</h2>
            <p className="lead">No drama. Just clarity.</p>

            <ul style={{ marginTop: 14, paddingLeft: 18 }}>
              <li>Insurance and flood strategy matters</li>
              <li>Rental outcomes depend on rules and execution</li>
              <li>Liquidity is micro-location specific</li>
              <li>Optionality is designed, not assumed</li>
            </ul>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* HERO VIDEO (this is the missing piece in your current Miami file) */
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
/* HERO VIDEO (missing in Miami right now) */
.heroVideo{
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.heroVideoEl{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
}

.heroVideoOverlay{
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.70)
  );
}

.heroVideoContent{
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

        /* Buttons fallback. If you already have .btnPrimary/.btnGhost globally, remove these. */
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
