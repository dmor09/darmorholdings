const properties = [
  {
    number: "01",
    name: "36 Division Ave",
    type: "Multifamily",
    location: "Garfield, New Jersey",
    image: "/images/residences.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__image" aria-hidden="true" />
        <div className="hero__veil" aria-hidden="true" />

        <header className="site-header">
          <nav className="nav" aria-label="Primary navigation">
            <a href="#about">About Us</a>
            <a href="#properties">Properties</a>
            <a href="/team">Team</a>
            <a href="#contact">Contact Us</a>
          </nav>

          <a className="brand" href="#top" aria-label="Darmor Holdings home">
            <img
              src="/brand/darmor-holdings-logo-light.png"
              alt="Darmor Holdings"
            />
          </a>

          <span className="header-note">Private real estate company</span>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Built for the long view</p>
          <h1 id="hero-title">
            Enduring
            <br />
            <em>places.</em>
          </h1>
        </div>

        <div className="hero__footer">
          <p>We acquire, operate and steward exceptional real estate.</p>
          <a href="#properties" className="explore-link">
            <span>Explore our portfolio</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="statement" id="about" aria-labelledby="statement-title">
        <div className="section-index">01 / Philosophy</div>
        <div className="statement__copy">
          <p className="kicker">Quiet conviction. Lasting value.</p>
          <h2 id="statement-title">
            Real estate measured
            <br />
            in <em>generations.</em>
          </h2>
          <p className="statement__body">
            Darmor Holdings is a privately held real estate company focused on
            high-quality assets in enduring markets. We invest with discipline,
            operate with care, and hold with purpose.
          </p>
        </div>
        <div className="statement__signature" aria-label="Darmor Holdings">
          <img src="/brand/darmor-holdings-logo.png" alt="Darmor Holdings" />
        </div>
      </section>

      <section className="portfolio" id="properties" aria-labelledby="portfolio-title">
        <div className="portfolio__heading">
          <div>
            <div className="section-index section-index--light">02 / Portfolio</div>
            <h2 id="portfolio-title">Selected property</h2>
          </div>
          <p>A multifamily investment selected for enduring residential demand.</p>
        </div>

        <div className="property-list">
          {properties.map((property) => (
            <article className="property" key={property.name}>
              <div className="property__media">
                <img src={property.image} alt={`${property.name} — ${property.type} property`} />
              </div>
              <div className="property__meta">
                <span>{property.number}</span>
                <h3>{property.name}</h3>
                <span>{property.type}</span>
                <span>{property.location}</span>
                <span className="property__arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" aria-labelledby="approach-title">
        <div className="section-index">03 / Approach</div>
        <div className="approach__main">
          <h2 id="approach-title">
            Patient capital.
            <br />
            <em>Active ownership.</em>
          </h2>
          <div className="approach__grid">
            <p>
              Our perspective is simple: acquire selectively, improve
              thoughtfully, and remain accountable for every outcome.
            </p>
            <div className="principles">
              <div><span>01</span><strong>Discipline</strong></div>
              <div><span>02</span><strong>Stewardship</strong></div>
              <div><span>03</span><strong>Durability</strong></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact__top">
          <div className="section-index section-index--light">04 / Contact</div>
          <p>New York · United States</p>
        </div>
        <div className="contact__main">
          <p>Investment and partnership inquiries</p>
          <a href="mailto:inquiries@darmorholdings.com">
            inquiries@darmorholdings.com <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact__brand">
          <div className="footer-logo">
            <img src="/brand/darmor-holdings-logo-light.png" alt="Darmor Holdings" />
          </div>
          <span>Private real estate investment</span>
          <span>© 2026 Darmor Holdings</span>
        </div>
      </footer>
    </main>
  );
}
