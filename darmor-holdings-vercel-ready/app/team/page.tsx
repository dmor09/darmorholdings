import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Darmor Holdings",
  description:
    "Meet the disciplined, owner-minded team behind Darmor Holdings.",
};

const disciplines = [
  {
    number: "01",
    title: "Investment",
    description:
      "Selective acquisitions grounded in market knowledge, sound underwriting, and a long-term view.",
  },
  {
    number: "02",
    title: "Operations",
    description:
      "Hands-on asset management focused on resilient performance and a high standard of execution.",
  },
  {
    number: "03",
    title: "Stewardship",
    description:
      "Owner-minded decision making that protects each property, partnership, and community we serve.",
  },
];

const owners = [
  {
    initials: "YK",
    name: "Yeno Konya",
    image: "/team/yeno-konya-enhanced.png",
    bio: "Yeno leads talent for Ramp’s product organization, with 140+ hires across Product, Product Operations, AI Operations, and Customer Experience. Previously, Yeno led product and design sourcing at Uber and conducted executive searches across finance, compliance, and legal at JW Michaels. Yeno holds a B.S. in Accounting from William Paterson University.",
  },
  {
    initials: "MB",
    name: "Michael Birch",
    image: "/team/michael-birch.jpeg",
    bio: "Michael is an experienced banking relationship manager with expertise in loan structuring, financial risk, corporate finance, and financial analysis. His work centers on building durable client relationships and navigating complex credit and risk decisions. Michael holds a B.A. in Economics from William Paterson University.",
  },
];

export default function TeamPage() {
  return (
    <main className="team-page">
      <header className="team-header">
        <nav className="nav" aria-label="Primary navigation">
          <a href="/#about">About Us</a>
          <a href="/#properties">Properties</a>
          <a href="/team" aria-current="page">Team</a>
          <a href="/#contact">Contact Us</a>
        </nav>

        <a className="brand" href="/" aria-label="Darmor Holdings home">
          <img src="/brand/darmor-holdings-logo-light.png" alt="Darmor Holdings" />
        </a>

        <span className="header-note">Private real estate company</span>
      </header>

      <section className="team-hero" aria-labelledby="team-title">
        <p className="eyebrow">Leadership</p>
        <h1 id="team-title">
          Our <em>co-owners.</em>
        </h1>
        <p className="team-hero__intro">
          Closely held. Owner operated. Built with a shared commitment to
          disciplined investing and enduring value.
        </p>
      </section>

      <section className="owner-grid" aria-label="Darmor Holdings co-owners">
        {owners.map((owner, index) => (
          <article className={`owner-card ${owner.image ? "owner-card--portrait" : ""}`} key={owner.name}>
            {owner.image ? (
              <img className="owner-card__portrait" src={owner.image} alt={`${owner.name}, co-owner of Darmor Holdings`} />
            ) : null}
            {owner.image ? <span className="owner-card__veil" aria-hidden="true" /> : null}
            <span className="owner-card__number">0{index + 1}</span>
            <span className="owner-card__initials" aria-hidden="true">{owner.initials}</span>
            <div className="owner-card__content">
              <h2>{owner.name}</h2>
              <p>Co-owner</p>
              {owner.bio ? <p className="owner-card__bio">{owner.bio}</p> : null}
            </div>
          </article>
        ))}
      </section>

      <section className="team-disciplines" aria-labelledby="disciplines-title">
        <div className="section-index section-index--light">What defines us</div>
        <div className="team-disciplines__main">
          <h2 id="disciplines-title">One team.<br /><em>One standard.</em></h2>
          <div className="discipline-list">
            {disciplines.map((discipline) => (
              <article className="discipline" key={discipline.title}>
                <span>{discipline.number}</span>
                <h3>{discipline.title}</h3>
                <p>{discipline.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="team-contact">
        <p>Work with Darmor Holdings</p>
        <a href="mailto:inquiries@darmorholdings.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
        <div className="team-contact__bottom">
          <img src="/brand/darmor-holdings-logo-light.png" alt="Darmor Holdings" />
          <span>© 2026 Darmor Holdings</span>
        </div>
      </footer>
    </main>
  );
}
