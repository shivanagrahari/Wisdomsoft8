import { useEffect } from 'react'
import teamPhoto from './assets/about-team.png'
import './AboutUs.css'

const principles = [
  {
    title: 'Clarity Before Complexity',
    description: 'We believe simple systems outperform complex ones in the long run.',
    mark: '01',
  },
  {
    title: 'Architecture Matters',
    description: 'A strong foundation ensures performance, security, and scalability.',
    mark: '02',
  },
  {
    title: 'Business Context First',
    description: 'Technology decisions should support real-world workflows.',
    mark: '03',
  },
  {
    title: 'Sustainability Over Speed',
    description: 'We value long-term stability over short-term delivery pressure.',
    mark: '04',
  },
]

const approach = [
  {
    title: 'Understand the need',
    description:
      'We begin by learning your workflows, priorities, and what success should look like.',
  },
  {
    title: 'Build with clarity',
    description:
      'We shape a practical solution with clear decisions, regular feedback, and careful execution.',
  },
  {
    title: 'Support what comes next',
    description:
      'We plan for the next stage too, so your product can adapt as your business changes.',
  },
]

function AboutUs() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'About Us | Kingdomsoft'

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-rings" aria-hidden="true" />
        <div className="about-hero-content">
          <span className="about-hero-label">ABOUT KINGDOMSOFT</span>
          <h1>More Than Code. A Thoughtful Technology Company.</h1>
          <p>
            Kingdomsoft was created with a simple belief — software should solve
            real problems, not create new ones.
          </p>
        </div>
      </section>

      <section className="about-story about-section">
        <div className="about-container about-story-grid">
          <div className="about-story-copy">
            <p className="about-eyebrow">PURPOSEFUL TECHNOLOGY</p>
            <h2>Our Story</h2>
            <p>
              Kingdomsoft started with a simple goal: build meaningful digital
              systems that make everyday work clearer, easier, and more
              connected. We approach each challenge with structure and a focus
              on the people who will use the product.
            </p>
            <p>
              Today, we bring that same care to business software, websites,
              and custom applications. We value dependable architecture,
              thoughtful user experiences, and solutions that can grow with the
              business behind them.
            </p>
            <div className="about-story-points">
              <span><i aria-hidden="true">✓</i> Built around real workflows</span>
              <span><i aria-hidden="true">✓</i> Designed to grow with you</span>
            </div>
          </div>
          <figure className="about-story-visual">
            <img
              src={teamPhoto}
              alt="A collaborative software team working together around a laptop"
            />
            <figcaption>
              <strong>Good technology starts with understanding people.</strong>
              <span>Thoughtful work. Practical outcomes.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="about-thinking about-section">
        <div className="about-container">
          <h2>How We Think</h2>
          <div className="about-thinking-grid">
            {principles.map((principle) => (
              <article className="about-thinking-card" key={principle.title}>
                <span className="about-card-mark" aria-hidden="true">
                  {principle.mark}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container">
          <h2>Let’s Build Something Great Together</h2>
          <p>
            Have an idea for a website, ERP, or SaaS product? Let Kingdomsoft
            bring it to life.
          </p>
          <a className="about-cta-button" href="/contact">
            Start Your Project <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="about-culture about-section">
        <div className="about-container">
          <h2>Our Culture</h2>
          <p>
            We operate with a mindset of ownership, accountability, and respect
            for craftsmanship. Every engineer at Kingdomsoft treats projects as
            long-term products, not temporary assignments.
          </p>
          <p>
            We encourage continuous learning, thoughtful decision-making, and
            open communication. Our culture prioritizes calm execution,
            realistic timelines, and honest feedback — both internally and
            with clients.
          </p>
        </div>
      </section>

      <section className="about-trust">
        <div className="about-container">
          <h2>Building Trust Through Process</h2>
          <p>
            Trust is built through consistency. We focus on clear
            documentation, predictable delivery, and transparent communication
            throughout every engagement.
          </p>
          <p>
            Our clients value us not only for technical skill, but for our
            ability to think ahead, anticipate challenges, and design systems
            that grow gracefully with their business.
          </p>
        </div>
      </section>

      <section className="about-approach about-section">
        <div className="about-container">
          <p className="about-eyebrow">WORKING WITH KINGDOMSOFT</p>
          <h2>Good Work Starts With a Clear Partnership</h2>
          <p className="about-approach-intro">
            From the first conversation through launch and beyond, we keep the
            work focused on your goals and the people who rely on your systems.
          </p>
          <div className="about-approach-grid">
            {approach.map((step, index) => (
              <article className="about-approach-card" key={step.title}>
                <span className="about-approach-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
