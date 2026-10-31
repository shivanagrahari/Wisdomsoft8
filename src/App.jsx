import { useEffect, useRef, useState } from 'react'
import AboutUs from './AboutUs.jsx'
import { CareersPage, ContactPage } from './CompanyPages.jsx'
import ServicePage from './ServicePage.jsx'
import './App.css'

const services = [
  {
    tag: 'WEB',
    title: 'Custom Web Development',
    icon: 'monitor',
    description:
      'Professional, conversion-focused websites that make your brand easy to trust and contact.',
    href: '/services/custom-web-development',
  },
  {
    tag: 'SHOP',
    title: 'E-commerce & Product Platforms',
    icon: 'shopping-bag',
    description:
      'Easy-to-manage product experiences designed for discovery, checkout and repeat sales.',
    href: '/services/ecommerce-product-platforms',
  },
  {
    tag: 'APP',
    title: 'Mobile Applications',
    icon: 'smartphone',
    description:
      'Practical mobile products for customers, operations teams and field staff.',
    href: '/services/mobile-applications',
  },
  {
    tag: 'SAAS',
    title: 'SaaS Application Development',
    icon: 'cloud-cog',
    description:
      'Subscription products with multi-tenant architecture, permissions and room to grow.',
    href: '/services/saas-application-development',
  },
  {
    tag: 'ERP',
    title: 'Custom ERP Solutions',
    icon: 'boxes',
    description:
      'Connected operational systems built around purchasing, inventory, finance and reporting.',
    href: '/services/custom-erp-solutions',
  },
  {
    tag: 'CRM',
    title: 'CRM Systems',
    icon: 'users-round',
    description:
      'Lead, customer and follow-up systems that give sales teams a clear next action.',
    href: '/services/crm-systems',
  },
  {
    tag: 'HR',
    title: 'Custom HRMS',
    icon: 'user-round-cog',
    description:
      'Clear people operations for employee records, attendance, leave and payroll inputs.',
    href: '/services/custom-hrms',
  },
  {
    tag: 'GROW',
    title: 'Digital Marketing & SEO',
    icon: 'chart-no-axes-combined',
    description:
      'Campaign-ready landing pages and search foundations built for qualified traffic.',
    href: '/services/digital-marketing-seo',
  },
  {
    tag: 'FAST',
    title: 'Performance & Security',
    icon: 'shield-check',
    description:
      'Improve stability, speed and security before small technical issues become business risks.',
    href: '/services/performance-security',
  },
  {
    tag: 'CARE',
    title: 'Maintenance & Long-Term Support',
    icon: 'wrench',
    description:
      'Keep your digital product healthy with structured improvements and dependable support.',
    href: '/services/maintenance-long-term-support',
  },
]

const companyLinks = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Careers', '/careers'],
  ['Contact', '/contact'],
]

const servicesByTitle = Object.fromEntries(
  services.map((service) => [service.title, service]),
)

const servicesMenuColumns = [
  {
    title: 'DIGITAL PRODUCTS',
    items: [
      'Custom Web Development',
      'E-commerce & Product Platforms',
      'Mobile Applications',
    ],
  },
  {
    title: 'BUSINESS SYSTEMS',
    items: [
      'SaaS Application Development',
      'Custom ERP Solutions',
      'CRM Systems',
      'Custom HRMS',
    ],
  },
  {
    title: 'GROWTH & SUPPORT',
    items: [
      'Digital Marketing & SEO',
      'Performance & Security',
      'Maintenance & Long-Term Support',
    ],
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  )
}

const serviceIconShapes = {
  monitor: [
    ['rect', { width: 20, height: 14, x: 2, y: 3, rx: 2 }],
    ['line', { x1: 8, x2: 16, y1: 21, y2: 21 }],
    ['line', { x1: 12, x2: 12, y1: 17, y2: 21 }],
  ],
  'shopping-bag': [
    ['path', { d: 'M16 10a4 4 0 0 1-8 0' }],
    ['path', { d: 'M3.103 6.034h17.794' }],
    ['path', { d: 'M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z' }],
  ],
  smartphone: [
    ['rect', { width: 14, height: 20, x: 5, y: 2, rx: 2, ry: 2 }],
    ['path', { d: 'M12 18h.01' }],
  ],
  'cloud-cog': [
    ['path', { d: 'm10.852 19.772-.383.924' }],
    ['path', { d: 'm13.148 14.228.383-.923' }],
    ['path', { d: 'M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923' }],
    ['path', { d: 'm13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544' }],
    ['path', { d: 'm14.772 15.852.923-.383' }],
    ['path', { d: 'm14.772 18.148.923.383' }],
    ['path', { d: 'M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2' }],
    ['path', { d: 'm9.228 15.852-.923-.383' }],
    ['path', { d: 'm9.228 18.148-.923.383' }],
  ],
  boxes: [
    ['path', { d: 'M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z' }],
    ['path', { d: 'm7 16.5-4.74-2.85' }],
    ['path', { d: 'm7 16.5 5-3' }],
    ['path', { d: 'M7 16.5v5.17' }],
    ['path', { d: 'M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z' }],
    ['path', { d: 'm17 16.5-5-3' }],
    ['path', { d: 'm17 16.5 4.74-2.85' }],
    ['path', { d: 'M17 16.5v5.17' }],
    ['path', { d: 'M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z' }],
    ['path', { d: 'M12 8 7.26 5.15' }],
    ['path', { d: 'm12 8 4.74-2.85' }],
    ['path', { d: 'M12 13.5V8' }],
  ],
  'users-round': [
    ['path', { d: 'M18 21a8 8 0 0 0-16 0' }],
    ['circle', { cx: 10, cy: 8, r: 5 }],
    ['path', { d: 'M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3' }],
  ],
  'user-round-cog': [
    ['path', { d: 'm14.305 19.53.923-.382' }],
    ['path', { d: 'm15.228 16.852-.923-.383' }],
    ['path', { d: 'm16.852 15.228-.383-.923' }],
    ['path', { d: 'm16.852 20.772-.383.924' }],
    ['path', { d: 'm19.148 15.228.383-.923' }],
    ['path', { d: 'm19.53 21.696-.382-.924' }],
    ['path', { d: 'M2 21a8 8 0 0 1 10.434-7.62' }],
    ['path', { d: 'm20.772 16.852.924-.383' }],
    ['path', { d: 'm20.772 19.148.924.383' }],
    ['circle', { cx: 10, cy: 8, r: 5 }],
    ['circle', { cx: 18, cy: 18, r: 3 }],
  ],
  'chart-no-axes-combined': [
    ['path', { d: 'M12 16v5' }],
    ['path', { d: 'M16 14.639V21' }],
    ['path', { d: 'M20 10.656V21' }],
    ['path', { d: 'm22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15' }],
    ['path', { d: 'M4 18.463V21' }],
    ['path', { d: 'M8 14.656V21' }],
  ],
  'shield-check': [
    ['path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' }],
    ['path', { d: 'm9 12 2 2 4-4' }],
  ],
  wrench: [
    ['path', { d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z' }],
  ],
}

function ServiceIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {serviceIconShapes[name].map(([tag, attributes], index) => {
        const Shape = tag
        return <Shape {...attributes} key={index} />
      })}
    </svg>
  )
}

function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? ' brand--footer' : ''}`}
      href="/"
      aria-label="Kingdomsoft home"
    >
      <img
        className="brand-logo"
        src="/logo%20kingdomsoft%20new.png"
        alt="Kingdomsoft"
      />
    </a>
  )
}

function Navbar({
  aboutPage = false,
  servicePage = false,
  careersPage = false,
  contactPage = false,
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesItemRef = useRef(null)

  const closeMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  const toggleMenu = () => {
    setMenuOpen((open) => !open)
    setServicesOpen(false)
  }

  useEffect(() => {
    if (!servicesOpen) {
      return undefined
    }

    const closeOnOutsidePointerDown = (event) => {
      if (!servicesItemRef.current?.contains(event.target)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener('click', closeOnOutsidePointerDown)
    return () => document.removeEventListener('click', closeOnOutsidePointerDown)
  }, [servicesOpen])

  useEffect(() => {
    if (!menuOpen && !servicesOpen) {
      return undefined
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen, servicesOpen])

  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Main navigation">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <ul
          className={`nav-links${menuOpen ? ' nav-links--open' : ''}${servicesOpen ? ' nav-links--services-open' : ''}`}
          id="primary-navigation"
        >
          <li>
            <a className={`nav-link${!aboutPage && !servicePage ? ' nav-link--active' : ''}`} href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className={`nav-link${aboutPage ? ' nav-link--active' : ''}`} href="/about" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li
            ref={servicesItemRef}
            className={`nav-item nav-item--services${servicesOpen ? ' nav-item--services-open' : ''}`}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') {
                setServicesOpen(true)
              }
            }}
          >
            <button
              className={`nav-link nav-link--services${servicePage ? ' nav-link--active' : ''}${servicesOpen ? ' nav-link--services-open' : ''}`}
              type="button"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
              onClick={(event) => {
                if (event.nativeEvent.pointerType === 'mouse' && servicesOpen) {
                  return
                }

                setServicesOpen((open) => !open)
              }}
            >
              Services <span className="services-chevron" aria-hidden="true">⌄</span>
            </button>
            {servicesOpen && (
              <div
                id="services-dropdown"
                className="services-dropdown"
                role="menu"
                aria-label="Services menu"
              >
                {servicesMenuColumns.map((column) => (
                  <div className="services-dropdown-column" key={column.title}>
                    <h3>{column.title}</h3>
                    <ul>
                      {column.items.map((item) => (
                        <li key={item}>
                          <a href={servicesByTitle[item].href} onClick={closeMenu}>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
          <li>
            <a className={`nav-link${careersPage ? ' nav-link--active' : ''}`} href="/careers" onClick={closeMenu}>
              Careers
            </a>
          </li>
          <li>
            <a className={`nav-link${contactPage ? ' nav-link--active' : ''}`} href="/contact" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-stage">
        <div className="hero-copy">
          <p className="hero-kicker">Build what your business needs next</p>
          <h1>From your first website to the systems behind your growth.</h1>
          <p className="hero-description">
            Kingdomsoft designs, develops and supports digital products that help
            businesses sell, operate and scale with clarity.
          </p>
          <div className="hero-actions">
            <a className="button button--hero-primary" href="/contact">
              Start a project <ArrowIcon />
            </a>
            <a className="button button--hero-secondary" href="#what-we-do">
              Explore what we do
            </a>
          </div>
          <div className="hero-proof-points" aria-label="How we work">
            {['Business-first scope', 'Clear milestones', 'Support that continues'].map((point) => (
              <span key={point}>
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" />
                  <path d="m5.5 8 1.7 1.7L10.8 6" />
                </svg>
                {point}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-label="Kingdomsoft digital products">
          <div className="hero-visual-panels" aria-hidden="true">
            <span className="hero-backdrop-card hero-backdrop-card--one" />
            <span className="hero-backdrop-card hero-backdrop-card--two" />
            <span className="hero-backdrop-card hero-backdrop-card--three" />
            <span className="hero-backdrop-card hero-backdrop-card--four" />
          </div>
          <div className="hero-feature-card">
            <p className="hero-feature-eyebrow">WISDOMSOFT / BUILD</p>
            <strong>
              Websites
              <br />
              E-Commerce
              <br />
              <em>SaaS products</em>
            </strong>
            <div className="hero-feature-tags" aria-label="Solutions">
              <span>CRM</span>
              <span>HRMS</span>
              <span>ERP</span>
              <span>AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services-section section-pad" id="what-we-do">
      <div className="page-shell">
        <div className="section-heading section-heading--split">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>The digital work your business cannot afford to get wrong.</h2>
          <p className="section-intro">
            Choose one focused service or connect several into one complete
            operating system.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <a
              className="service-card"
              key={service.tag}
              href={service.href}
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <ServiceIcon name={service.icon} />
                </span>
                <span className="service-tag">{service.tag}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">
                Discover <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    ['10', 'Specialised Services'],
    ['01', 'Connected Business Systems'],
    ['100%', 'Custom-Built Solutions'],
    ['∞', 'Room For Your Next Stage'],
  ]

  return (
    <section className="stats-section" aria-label="Kingdomsoft at a glance">
      <div className="stats-grid page-shell">
        {stats.map(([number, label]) => (
          <div className="stat-item" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    ['01', 'Discover', 'Align on goals, users and the right first release.'],
    ['02', 'Design', 'Turn ideas into a clear product and delivery plan.'],
    ['03', 'Build & support', 'Create, launch and improve with confidence.'],
  ]

  return (
    <section className="process-section section-pad">
      <div className="page-shell process-layout">
        <div className="process-copy">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>Focused delivery, without unnecessary complexity.</h2>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <article className="process-card" key={number}>
              <div className="process-card-top">
                <span className={`process-icon process-icon--${number}`} aria-hidden="true" />
                <span className="process-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner page-shell">
        <div className="contact-copy">
          <p className="eyebrow eyebrow--light">HAVE A PROJECT IN MIND?</p>
          <h2>Let’s make it useful, fast and built to last.</h2>
          <p>
            Tell us a little about what you’re building. We’ll help you find the
            right next step.
          </p>
          <a className="contact-email" href="mailto:info@Kingdomsoft.in">
            info@Kingdomsoft.in <ArrowIcon />
          </a>
        </div>
        <form
          className="contact-form"
          action="mailto:info@Kingdomsoft.in"
          method="post"
          encType="text/plain"
        >
          <div className="form-row">
            <label>
              Full name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" placeholder="you@company.com" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone number
              <input name="phone" type="tel" placeholder="+91" />
            </label>
            <label>
              City or location
              <input name="location" type="text" placeholder="City / location" />
            </label>
          </div>
          <label>
            Project interest
            <select name="project" defaultValue="" required>
              <option value="" disabled>Choose a project type</option>
              <option>Website</option>
              <option>Mobile app</option>
              <option>CRM</option>
              <option>HRMS / HRM</option>
              <option>ERP</option>
              <option>E-commerce platform</option>
              <option>Custom software</option>
              <option>Other / not sure</option>
            </select>
          </label>
          <label>
            Project requirement
            <textarea
              name="requirement"
              placeholder="Tell us what you want to build"
              rows="3"
              required
            />
          </label>
          <button className="button button--gold form-submit" type="submit">
            Send enquiry <ArrowIcon />
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer({ aboutPage = false, servicePage = false }) {
  return (
    <footer className="site-footer">
      <div className="footer-main page-shell">
        <div className="footer-about">
          <Brand footer />
          <p>
            Kingdomsoft delivers web applications, e-commerce platforms, mobile
            apps and business software for modern teams.
          </p>
          <div className="social-links" aria-label="Kingdomsoft social media">
            <a href="https://www.linkedin.com/in/blackcode-t-97a8103aa" aria-label="Kingdomsoft on LinkedIn">in</a>
          </div>
        </div>
        <nav className="footer-links" aria-label="Company links">
          <h2>Company</h2>
          {companyLinks.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </nav>
        <nav className="footer-links" aria-label="Service links">
          <h2>Services</h2>
          {services.slice(0, 5).map((service) => (
            <a href={service.href} key={service.tag}>
              {service.title === 'E-commerce & Product Platforms'
                ? 'E-commerce Platforms'
                : service.title}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p><span aria-hidden="true">⌖</span>4th Floor, Nandanvan Park,<br />Karvenagar, Pune</p>
          <a href="tel:9370778309"><span aria-hidden="true">⌕</span>9370778309</a>
          <a href="mailto:info@Kingdomsoft.in"><span aria-hidden="true">✉</span>info@Kingdomsoft.in</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Kingdomsoft. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const aboutPage = pathname === '/about'
  const servicePage = services.some((service) => service.href === pathname)
  const careersPage = pathname === '/careers'
  const contactPage = pathname === '/contact'

  return (
    <>
      <Navbar
        aboutPage={aboutPage}
        servicePage={Boolean(servicePage)}
        careersPage={careersPage}
        contactPage={contactPage}
      />
      {careersPage ? (
        <CareersPage />
      ) : contactPage ? (
        <ContactPage />
      ) : servicePage ? (
        <ServicePage pathname={pathname} />
      ) : (
        <main className={aboutPage ? 'about-main' : undefined}>
          {aboutPage ? (
            <AboutUs />
          ) : (
            <>
              <Hero />
              <Services />
              <Stats />
              <Process />
              <Contact />
            </>
          )}
        </main>
      )}
      <Footer aboutPage={aboutPage} servicePage={Boolean(servicePage)} />
      <a
        className="whatsapp-link"
        href="https://wa.me/919370778309?text=Hello%20Kingdomsoft%2C%20I%20would%20like%20to%20discuss%20my%20project."
        aria-label="Chat with Kingdomsoft on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.7Z" />
          <path d="M9 8.5c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.8 1.2 1.5 2 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.5.4-1.1.6-1.8.5-1-.1-2.3-.7-3.7-1.9-1.2-1-2.1-2.4-2.3-3.4-.2-.9 0-1.6.4-2.2.3-.3.5-.5.7-.5Z" />
        </svg>
      </a>
    </>
  )
}

export default App
