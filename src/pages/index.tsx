import Head from "next/head";
import { useEffect, useState } from "react";

type FeaturedHome = {
  title: string;
  location: string;
  priceLabel: string;
  tags: string[];
  image: string; // local path in /public/img or remote URL
  href: string;  // e.g. /homes/slug (we'll create these pages later)
};

const featuredHomes: FeaturedHome[] = [
  {
    title: "Luxurious Modern House",
    location: "Miami · New Built",
    priceLabel: "$2,490,000",
    tags: ["Live", "Rent", "Resell"],
    image: "/img/homes/miami-house.jpeg",
    href: "/homes/luxurious-penthouse-miami"
  },
  {
    title: "Luxurious Furnished Apartment",
    location: "Paris · Eiffel Tower / Seine View",
    priceLabel: "$5,000 / month",
    tags: ["Live", "Rent", "Resell"],
    image: "/img/homes/paris-apartment.jpg",
    href: "/homes/luxurious-furnished-apt-paris"
  },
  {
    title: "Bay View House",
    location: "Búzios · João Fernandes",
    priceLabel: "$500 / day",
    tags: ["Live", "Rent", "Resell"],
    image: "/img/homes/buzios-house.jpg",
    href: "/homes/bay-view-house-buzios"
  }
];

const destinations = [
  { name: "Miami", href: "/destinations/miami", image: "/img/Miami.png" },
  { name: "Paris", href: "/destinations/paris", image: "/img/Paris.png" },
  { name: "Aspen", href: "/destinations/aspen", image: "/img/Aspen.png" },
  { name: "St Barth", href: "/destinations/st-barth", image: "/img/St%20Barth.png" },
  { name: "Dubai", href: "/destinations/dubai", image: "/img/Dubai.png" },
  { name: "Rio · Búzios", href: "/destinations/brazil", image: "/img/Buzios.png" }
];

export default function HomePage() {
  type ConciergeItem = {
    id: string;
    title: string;
    description: string;
    icon: string; // small image in the square
  };

  const conciergeItems: ConciergeItem[] = [
    {
      id: "property-management",
      title: "Property Management",
      description:
        "End-to-end oversight: operations, vendors, reporting, and owner peace of mind — handled with discretion.",
      icon: "/img/concierge/property-management.png",
    },
    {
      id: "rentals-airbnb",
      title: "Rentals & Airbnb",
      description:
        "Short-term or monthly strategy, pricing, guests, cleaning, and calendar management — optimized and fully managed.",
      icon: "/img/concierge/rentals-airbnb.png",
    },
    {
      id: "cleaning-maintenance",
      title: "Cleaning & Maintenance",
      description:
        "Reliable teams, scheduled upkeep, rapid fixes, and standards that protect the home and the lifestyle.",
      icon: "/img/concierge/cleaning-maintenance.png",
    },
    {
      id: "boats-yachts",
      title: "Boats & Yachts",
      description:
        "From a simple day on the water to a full yacht experience — booking, logistics, and recommendations.",
      icon: "/img/concierge/boats-yachts.png",
    },
    {
      id: "luxury-cars",
      title: "Luxury Cars",
      description:
        "Car sourcing, rentals, delivery, and concierge coordination — seamless, on-brand, and on time.",
      icon: "/img/concierge/luxury-cars.png",
    },
    {
      id: "private-jets",
      title: "Private Jets & Experiences",
      description:
        "Private aviation coordination and tailored experiences — one contact, calm execution.",
      icon: "/img/concierge/private-jets.png",
    },
  ];

  const [activeConcierge, setActiveConcierge] = useState<ConciergeItem | null>(null);

  useEffect(() => {
    if (!activeConcierge) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveConcierge(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeConcierge]);


return (
    <>
      <Head>
        <title>STUDER — A Life Between Worlds</title>
        <meta
          name="description"
          content="A lifestyle real estate club: live anywhere, earn while you’re away, we handle the rest."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            <a href="#lifestyle">Lifestyle</a>
            <a href="#homes">Selected Homes</a>
            <a href="#concierge">Concierge</a>
            <a href="#community">Community</a>
            <a href="#contact" className="navCta">Private Call</a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-label="Hero">
        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/fallback-hero.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        <div className="heroOverlay" />

        <div className="container heroContent">
          <h1 className="heroTitle">A Life Between Worlds</h1>
          <p className="heroCities">
            Miami · Paris · Aspen · St Barth · Dubai · Rio · Búzios
          </p>

          <p className="heroTagline">
            Live anywhere.<br />
            Earn while you’re away.<br />
            We handle the rest.
          </p>

          <div className="heroActions">
            <a className="btnPrimary" href="#lifestyle">
              Enter the Lifestyle
            </a>
            <a className="btnGhost" href="#homes">
              View Selected Homes
            </a>
          </div>
        </div>

        <div className="heroScrollHint" aria-hidden="true">
          <span />
        </div>
      </section>

<section className="section" id="lifestyle">
  <div className="container narrow">
    <h2 className="h2">We Buy Like It’s For Us</h2>
    <p className="lead">
      We select homes as if we were going to live in them — in the best locations,
      with lasting desirability.
    </p>

    <div className="manifestoGrid">
      {/* LIVE IN IT */}
      <a
        href="/buying-living"
        className="manifestoItem imageCard"
        style={{
          backgroundImage: "url(/img/live-in-it.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          position: "relative",
          minHeight: 260,
          borderRadius: 18,
          overflow: "hidden",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          className="imageOverlay"
          style={{
            position: "absolute",
            inset: 0,
            padding: 22,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "rgba(0,0,0,0.45)",
          }}
        >
          <h3 className="h3">Live in it</h3>
          <p>A home you are proud of. A place that feels right.</p>
        </div>
      </a>

      {/* RENT WHEN UNUSED */}
      <a
        href="/buying-living"
        className="manifestoItem imageCard"
        style={{
          backgroundImage: "url(/img/rent-when-unused.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          position: "relative",
          minHeight: 260,
          borderRadius: 18,
          overflow: "hidden",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          className="imageOverlay"
          style={{
            position: "absolute",
            inset: 0,
            padding: 22,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "rgba(0,0,0,0.45)",
          }}
        >
          <h3 className="h3">Rent it when unused</h3>
          <p>Short-term or monthly — optimized and fully managed.</p>
        </div>
      </a>

      {/* RESELL WITH CONFIDENCE */}
      <a
        href="/buying-living"
        className="manifestoItem imageCard"
        style={{
          backgroundImage: "url(/img/resell-with-confidence.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          position: "relative",
          minHeight: 260,
          borderRadius: 18,
          overflow: "hidden",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          className="imageOverlay"
          style={{
            position: "absolute",
            inset: 0,
            padding: 22,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "rgba(0,0,0,0.45)",
          }}
        >
          <h3 className="h3">Resell with confidence</h3>
          <p>Always liquid. Always desirable. Built for long-term value.</p>
        </div>
      </a>
    </div>

    <p className="quote">One property. Three uses. No compromise.</p>
  </div>
</section>


<section className="sectionAlt">
  <div className="container">
    <div className="sectionHeader">
      <h2 className="h2">How It Works</h2>
      <p className="muted">
        A lifestyle-first approach with income optionality — and zero friction.
      </p>
    </div>

    {/* 🔽 THIS WAS MISSING */}
    <div className="cards3">

      <a className="card cardBuy" href="/buy-smart">
        <div className="cardBg" aria-hidden="true" />
        <div className="cardIcon" aria-hidden="true">01</div>
        <h3 className="h3">Buy Smart</h3>
        <p>Prime locations only. Homes designed to last and stay desirable.</p>
        <div className="homeCta">Explore →</div>
      </a>

      <a className="card cardLive" href="/live-freely">
        <div className="cardBg" aria-hidden="true" />
        <div className="cardIcon" aria-hidden="true">02</div>
        <h3 className="h3">Live Freely</h3>
        <p>Use your home anytime — seasons, weekends, or months at a time.</p>
        <div className="homeCta">Explore →</div>
      </a>

      <a className="card cardRent" href="/rent-seamlessly">
        <div className="cardBg" aria-hidden="true" />
        <div className="cardIcon" aria-hidden="true">03</div>
        <h3 className="h3">Rent Seamlessly</h3>
        <p>We handle pricing, platforms, guests, cleaning, maintenance, and tenants.</p>
        <div className="homeCta">Explore →</div>
      </a>

    </div>
  </div>
</section>


      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Homes Without Borders</h2>
            <p className="muted">Not destinations. Homes.</p>
          </div>

          <div className="destGrid">
{destinations.map((d) => (
  <a key={d.name} className="destCard" href={d.href}>
    <div
      className="destMedia"
      style={{
        backgroundImage: `url(${d.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-hidden="true"
    />
    <div className="destMeta">
      <div className="destName">{d.name}</div>
      <div className="destTag">Live · Rent · Resell</div>
    </div>
  </a>
))}
          </div>
        </div>
      </section>

      <section className="sectionAlt" id="homes">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Selected Homes</h2>
            <p className="muted">Curated opportunities — never volume.</p>
          </div>

          <div className="homesGrid">
            {featuredHomes.map((h) => (
              <a key={h.href} className="homeCard" href={h.href}>
                <div
                  className="homeImage"
                  style={{ backgroundImage: `url(${h.image})` }}
                  aria-hidden="true"
                />
                <div className="homeBody">
                  <div className="homeTop">
                    <div>
                      <div className="homeTitle">{h.title}</div>
                      <div className="homeLoc">{h.location}</div>
                    </div>
                    <div className="homePrice">{h.priceLabel}</div>
                  </div>

                  <div className="homeTags">
                    {h.tags.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>

                  <div className="homeCta">View Home →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="concierge">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Everything Is Handled</h2>
            <p className="muted">One contact. No friction.</p>
          </div>

<div className="iconGrid">
  {conciergeItems.map((item) => (
    <div
      key={item.id}
      className="iconItem"
      role="button"
      tabIndex={0}
      onClick={() => setActiveConcierge(item)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setActiveConcierge(item);
      }}
      style={{ cursor: "pointer" }}
      aria-label={`Open details: ${item.title}`}
    >
      <div
        className="iconBox"
        style={{ backgroundImage: `url(${item.icon})` }}
        aria-hidden="true"
      />
      {item.title}
    </div>
  ))}
</div>


        </div>
      </section>

{activeConcierge && (
  <div
    onClick={() => setActiveConcierge(null)}
    role="presentation"
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 18,
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-label={activeConcierge.title}
      style={{
        width: "min(980px, 100%)",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(12,12,12,0.92)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: 18,
          padding: 18,
        }}
      >
        <div
          style={{
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.04)",
            overflow: "hidden",
            minHeight: 280,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: 14,
              backgroundImage: `url(${activeConcierge.icon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
            aria-hidden="true"
          />
        </div>

        <div style={{ padding: "6px 6px 6px 0" }}>
          <h3 className="h2" style={{ marginBottom: 8 }}>
            {activeConcierge.title}
          </h3>

          <p className="muted" style={{ marginTop: 0, lineHeight: 1.6 }}>
            {activeConcierge.description}
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
            <a className="btnPrimary" href="#contact" onClick={() => setActiveConcierge(null)}>
              Private Call
            </a>
            <button className="btnGhost" onClick={() => setActiveConcierge(null)} type="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}



<section className="sectionAlt" id="community">
  <div className="container">
    <div className="community">
      <div>
        <h2 className="h2">Not Clients. Members.</h2>
        <p className="lead">
          Studer International Realty is a community of like-minded owners who value freedom, discretion,
          and long-term thinking.
        </p>
        <p className="muted">We don’t sell volume. We curate lifestyles.</p>

        <div className="communityActions">
          <a className="btnPrimary" href="#contact">Apply to Join</a>
          <a className="btnGhost" href="#homes">Explore Homes</a>
        </div>
      </div>

      <div className="communityMedia" aria-hidden="true">
        <img
          src="/img/community/member-card-james-smith.png"
          alt=""
          className="memberCard"
        />
      </div>
    </div>
  </div>
</section>


      <section className="finalCta" id="contact">
        <div className="container narrow">
          <h2 className="h2">Own homes you love. Let them work for you.</h2>
          <p className="muted">
            Schedule a private call — we’ll define your lifestyle goals, usage plan, and income strategy.
          </p>

          <div className="finalActions">
            <a className="btnPrimary" href="mailto:studerrealtyllc@gmail.com">
              Schedule a Private Call
            </a>
            <a className="btnGhost" href="https://wa.me/13058420528" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>

          <div className="finePrint">Studer Realty LLC · Miami · Worldwide</div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerBrand">STUDER</div>
          <div className="footerLinks">
            <a href="#lifestyle">Lifestyle</a>
            <a href="#homes">Selected Homes</a>
            <a href="#concierge">Concierge</a>
            <a href="#community">Community</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footerLegal">
            © {new Date().getFullYear()} Studer Realty LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
