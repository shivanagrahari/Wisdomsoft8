import { useEffect } from 'react'
import './ServicePage.css'

const servicePages = {
  '/services/custom-web-development': {
    title: 'Custom Web Development',
    intro: 'Websites that explain your value clearly and turn visitors into enquiries.',
    heroImage: 'https://blackcode.in/assets/web-development-hero-B8KaRdlw.png',
    implementationImage: 'https://blackcode.in/assets/web-development-process-real-D7-DQzaa.png',
    deliverHeading: 'A website built around your business goals.',
    deliverDescription:
      'We plan, design and develop responsive websites around the questions your customers ask, the trust they need and the action you want them to take.',
    deliverables: [
      'Website strategy, sitemap and page planning',
      'Responsive design for every screen size',
      'Lead forms, CRM connections and analytics',
      'Technical SEO, speed and launch support',
    ],
    valueHeading: 'Turn a first visit into a confident enquiry.',
    valueDescription:
      'A business website has only a few moments to make its purpose clear. Page structure, proof, performance and contact paths work together to help visitors find the right answer and take the next step.',
    outcomes: [
      'A stronger digital first impression',
      'Clearer paths to calls, forms and enquiries',
    ],
    steps: [
      'Map your audience and conversion journey.',
      'Design a credible interface and page hierarchy.',
      'Build, test and launch with tracking.',
    ],
    implementation:
      'A responsive website that earns trust and supports lead generation.',
    workHeading: 'How we work on website.',
    workCards: [
      {
        title: 'Shape the website story',
        description:
          'We organise your services, proof and calls to action around the questions customers ask before contacting you.',
      },
      {
        title: 'Review real customer journeys',
        description:
          'We validate important pages, mobile layouts and form paths before the site goes live.',
      },
      {
        title: 'Improve with live data',
        description:
          'Analytics shows where visitors engage, leave and convert, guiding future content improvements.',
      },
    ],
    cta: 'Have a website requirement?',
  },
  '/services/ecommerce-product-platforms': {
    title: 'E-commerce & Product Platforms',
    intro: 'Digital storefronts that make product discovery and checkout simple.',
    heroImage: 'https://blackcode.in/assets/ecommerce-hero-real-D1DXJTYF.png',
    implementationImage: 'https://blackcode.in/assets/ecommerce-process-real-BQQq-SoK.png',
    deliverHeading: 'Commerce experiences built to sell and scale.',
    deliverDescription:
      'We connect the customer-facing shop with product data, payments, orders and fulfilment, making the platform easier for customers to use and teams to operate.',
    deliverables: [
      'Catalogues, collections, filters and search',
      'Cart, secure payments and mobile checkout',
      'Order, inventory and fulfilment integrations',
      'Customer accounts and conversion tracking',
    ],
    valueHeading: 'Make buying easier from first browse to fulfilment.',
    valueDescription:
      'Commerce performance depends on more than attractive product pages. Customers need confidence in search, options, delivery and payment, while your team needs dependable order and stock workflows.',
    outcomes: [
      'Less friction at product and checkout stages',
      'Better connection between orders and operations',
    ],
    steps: [
      'Plan the browsing and buying journey.',
      'Connect products, payments and operations.',
      'Test checkout on real devices.',
    ],
    implementation:
      'A buying journey designed for discovery, confidence and repeat orders.',
    workHeading: 'How we work on e-commerce.',
    workCards: [
      {
        title: 'Organise product information',
        description:
          'We structure categories, filters, variants and product details around how people decide.',
      },
      {
        title: 'Test the checkout journey',
        description:
          'We review cart, payment and confirmation steps across devices and common scenarios.',
      },
      {
        title: 'Support operational handoff',
        description:
          'Order, stock and fulfilment requirements stay visible from planning through launch.',
      },
    ],
    cta: 'Have a e-commerce requirement?',
  },
  '/services/mobile-applications': {
    title: 'Mobile Application Development',
    intro: 'Mobile products that simplify important customer and workforce tasks.',
    heroImage: 'https://blackcode.in/assets/mobile-hero-real-R31wIm3b.png',
    implementationImage: 'https://blackcode.in/assets/mobile-process-real-C1r-yBCX.png',
    deliverHeading: 'Apps designed for real-world use.',
    deliverDescription:
      'We build focused mobile experiences for customers, staff and field teams, supported by secure APIs and a release plan that puts the right workflows first.',
    deliverables: [
      'MVP discovery and user-flow planning',
      'Customer, staff and field-team journeys',
      'Secure APIs and notifications',
      'Device testing and release preparation',
    ],
    valueHeading: "Put important tasks in users' hands.",
    valueDescription:
      'A mobile app needs to work in short, interrupted moments—not just look good in a demo. We focus on essential actions, clear feedback and reliable connections to the systems behind the app.',
    outcomes: [
      'Faster completion of high-value tasks',
      'A practical experience for users on the move',
    ],
    steps: [
      'Define the highest-value mobile tasks.',
      'Design screens for fast, simple use.',
      'Integrate, test and prepare release.',
    ],
    implementation:
      'Mobile journeys that are focused, intuitive and reliable in real use.',
    workHeading: 'How we work on mobile app.',
    workCards: [
      {
        title: 'Prioritise the first release',
        description:
          'We identify the smallest set of app workflows that creates meaningful value for users.',
      },
      {
        title: 'Prototype key screens',
        description:
          'Early interface reviews make navigation, language and actions easier to refine.',
      },
      {
        title: 'Test real device conditions',
        description:
          'We check important flows on the phones, networks and scenarios your users encounter.',
      },
    ],
    cta: 'Have a mobile app requirement?',
  },
  '/services/saas-application-development': {
    title: 'SaaS Application Development',
    intro: 'Subscription products with secure accounts, roles and room to grow.',
    heroImage: 'https://blackcode.in/assets/saas-hero-real-MchCnzxE.png',
    implementationImage: 'https://blackcode.in/assets/saas-process-real-BWLcuv8O.png',
    deliverHeading: 'Launch a focused SaaS product with confidence.',
    deliverDescription:
      'We help shape a valuable first release while building the foundations for tenants, permissions, administration and future subscription plans.',
    deliverables: [
      'MVP scope and workflow planning',
      'Multi-tenant accounts and user roles',
      'Subscription-ready foundations and admin tools',
      'Dashboards, reporting and scalable APIs',
    ],
    valueHeading: 'Build a product customers can adopt and grow with.',
    valueDescription:
      'SaaS delivery requires product thinking as well as software engineering. Account structure, permissions, onboarding and administration need to feel coherent from the first customer through future growth.',
    outcomes: [
      'A focused MVP with clear customer value',
      'Foundations for plans, roles and future releases',
    ],
    steps: [
      'Validate the product proposition.',
      'Build secure product foundations.',
      'Prepare the platform for growth.',
    ],
    implementation:
      'A subscription product designed to validate demand without blocking future scale.',
    workHeading: 'How we work on SaaS.',
    workCards: [
      {
        title: 'Define the customer workflow',
        description:
          'We turn the problem your product solves into a coherent first-use and repeat-use experience.',
      },
      {
        title: 'Plan tenant and role behaviour',
        description:
          'We clarify what each customer, user and administrator can see or manage.',
      },
      {
        title: 'Learn from early adoption',
        description:
          'Feedback and product usage guide the most valuable changes after launch.',
      },
    ],
    cta: 'Have a SaaS requirement?',
  },
  '/services/custom-erp-solutions': {
    title: 'Custom ERP Solutions',
    intro: 'Connected operational software for purchasing, inventory and reporting.',
    heroImage: 'https://blackcode.in/assets/erp-hero-real-DmgDLOny.png',
    implementationImage: 'https://blackcode.in/assets/erp-process-real-B-GlnTQS.png',
    deliverHeading: 'Bring essential business operations into one system.',
    deliverDescription:
      'We build ERP software around your actual workflows, removing duplicate work and giving teams clearer ownership, approvals and decision-ready information.',
    deliverables: [
      'Purchasing, inventory and supplier workflows',
      'Approvals, task ownership and audit history',
      'Role-based access and dashboards',
      'Custom management and finance reports',
    ],
    valueHeading: 'Replace fragmented operations with a connected view.',
    valueDescription:
      'ERP projects succeed when they reflect the real movement of work, stock, approvals and information. We focus on removing bottlenecks and giving decision-makers useful operational visibility.',
    outcomes: [
      'Less duplicate data entry across teams',
      'More reliable operational control and reporting',
    ],
    steps: [
      'Map your current operating processes.',
      'Build the essential modules.',
      'Deliver actionable reporting.',
    ],
    implementation:
      'Connected workflows that make daily operations easier to manage.',
    workHeading: 'How we work on ERP.',
    workCards: [
      {
        title: 'Map work before software',
        description:
          'We document the handoffs, exceptions and approvals that shape your actual process.',
      },
      {
        title: 'Introduce modules in priority order',
        description:
          'The most valuable workflows can be delivered first without overwhelming the team.',
      },
      {
        title: 'Use reports to improve operations',
        description:
          'Dashboards highlight status, exceptions and trends that deserve attention.',
      },
    ],
    cta: 'Have a ERP requirement?',
  },
  '/services/crm-systems': {
    title: 'Custom CRM Systems',
    intro: 'Lead and follow-up systems that give sales teams a clear next action.',
    heroImage: 'https://blackcode.in/assets/crm-hero-real-D03mAlAd.png',
    implementationImage: 'https://blackcode.in/assets/crm-process-real-BiSjZ-dc.png',
    deliverHeading: 'A CRM shaped around how your team sells.',
    deliverDescription:
      'We build custom CRM workflows around your lead sources, sales stages and responsibilities, giving every opportunity a complete history and clear ownership.',
    deliverables: [
      'Lead capture, assignment and sales stages',
      'Customer records and activity history',
      'Follow-up reminders, tasks and quotations',
      'Sales dashboards, permissions and reports',
    ],
    valueHeading: 'Give every opportunity a clear next action.',
    valueDescription:
      'Sales momentum drops when leads, notes and follow-ups sit in different places. A tailored CRM keeps context with the opportunity and helps managers understand the health of the pipeline.',
    outcomes: [
      'More consistent follow-up from the sales team',
      'A complete and searchable customer history',
    ],
    steps: [
      'Define your real sales process.',
      'Centralise customer activity.',
      'Improve pipeline visibility.',
    ],
    implementation:
      'A sales workspace that reduces guesswork and improves pipeline discipline.',
    workHeading: 'How we work on CRM.',
    workCards: [
      {
        title: 'Reflect your sales stages',
        description:
          'We shape fields, statuses and ownership around the process your team already follows.',
      },
      {
        title: 'Keep the next action visible',
        description:
          'Tasks, reminders and notes are designed to help reps move opportunities forward.',
      },
      {
        title: 'Review pipeline quality',
        description:
          'Reports reveal lead sources, stage movement and follow-up gaps that need attention.',
      },
    ],
    cta: 'Have a CRM requirement?',
  },
  '/services/custom-hrms': {
    title: 'Custom HRMS Software',
    intro: 'Clear people operations for employee records, attendance and leave.',
    heroImage: 'https://blackcode.in/assets/hrms-hero-real-C8-Xk4oW.png',
    implementationImage: 'https://blackcode.in/assets/hrms-process-real-C2EwMc8n.png',
    deliverHeading: 'Make everyday HR administration simpler.',
    deliverDescription:
      'We create HRMS systems around your policies and approval paths, so employees can self-serve while HR keeps accurate records and control.',
    deliverables: [
      'Employee profiles, documents and onboarding',
      'Attendance, leave and approval workflows',
      'Employee self-service and permissions',
      'Payroll inputs and HR reporting',
    ],
    valueHeading: 'Make people operations clearer for employees and HR.',
    valueDescription:
      'Employee records, leave and attendance work best when everyone has one reliable place to act. A tailored HRMS reduces routine coordination while keeping approvals and information controlled.',
    outcomes: [
      'Less manual work for routine HR requests',
      'More accurate employee, leave and attendance records',
    ],
    steps: [
      'Review people processes and policies.',
      'Build self-service workflows.',
      'Support accurate HR administration.',
    ],
    implementation:
      'Practical HR workflows that balance self-service with policy control.',
    workHeading: 'How we work on HRMS.',
    workCards: [
      {
        title: 'Translate policy into workflows',
        description:
          'We map leave, attendance and approval rules before building the employee experience.',
      },
      {
        title: 'Design employee self-service',
        description:
          'Employees can access the right records and requests without exposing sensitive HR information.',
      },
      {
        title: 'Maintain record quality',
        description:
          'Clear permissions and reporting help HR keep information current and auditable.',
      },
    ],
    cta: 'Have a HRMS requirement?',
  },
  '/services/digital-marketing-seo': {
    title: 'Digital Marketing & SEO',
    intro: 'Search and campaign foundations that bring more qualified visitors.',
    heroImage: 'https://blackcode.in/assets/seo-hero-real-B4LG3Be0.png',
    implementationImage: 'https://blackcode.in/assets/seo-process-real-VoR7I0vf.png',
    deliverHeading: 'Visibility connected to measurable business results.',
    deliverDescription:
      'We improve the pages, search foundations and tracking needed to understand which activity brings relevant visitors and enquiries—not just traffic.',
    deliverables: [
      'Technical SEO reviews and priority fixes',
      'Search-intent and content direction',
      'Campaign landing pages and conversion improvements',
      'Analytics, events and performance reporting',
    ],
    valueHeading: 'Connect visibility with qualified business demand.',
    valueDescription:
      'Traffic is only valuable when it reaches the right audience and gives them a clear reason to act. SEO, landing pages and measurement need to work as one connected acquisition journey.',
    outcomes: [
      'Better alignment between search intent and page content',
      'Clearer evidence of which activity creates enquiries',
    ],
    steps: [
      'Identify high-value search opportunities.',
      'Strengthen pages and conversion tracking.',
      'Use results to guide the next improvement.',
    ],
    implementation:
      'A search and campaign foundation built around qualified demand.',
    workHeading: 'How we work on SEO.',
    workCards: [
      {
        title: 'Understand search intent',
        description:
          'We identify what prospective customers are looking for and the content needed to meet that need.',
      },
      {
        title: 'Improve conversion paths',
        description:
          'Landing pages and calls to action are refined to make the next step obvious.',
      },
      {
        title: 'Measure meaningful activity',
        description:
          'Tracking focuses on enquiries, calls and the signals that help evaluate marketing performance.',
      },
    ],
    cta: 'Have a SEO requirement?',
  },
  '/services/performance-security': {
    title: 'Performance & Security',
    intro: 'Practical improvements for faster, safer and more dependable digital products.',
    heroImage: 'https://blackcode.in/assets/security-hero-real-BshukN3H.png',
    implementationImage: 'https://blackcode.in/assets/security-process-real-BWvJDg-1.png',
    deliverHeading: 'Protect confidence in your website or application.',
    deliverDescription:
      'We review speed, stability and security together, then focus on the technical improvements that reduce avoidable risk and create a better user experience.',
    deliverables: [
      'Page speed and application performance reviews',
      'Security hardening and access controls',
      'Reliability, backup and deployment checks',
      'Monitoring and technical health guidance',
    ],
    valueHeading: 'Protect the experience customers and teams depend on.',
    valueDescription:
      'Speed, reliability and security are connected business concerns. A slow, unstable or poorly protected product can affect trust long before a major incident occurs.',
    outcomes: [
      'A faster and more dependable user experience',
      'Reduced exposure to avoidable technical risk',
    ],
    steps: [
      'Assess performance, stability and risk.',
      'Implement the priority improvements.',
      'Establish ongoing health checks.',
    ],
    implementation:
      'Prioritised technical improvements that strengthen confidence and reliability.',
    workHeading: 'How we work on performance and security.',
    workCards: [
      {
        title: 'Identify the highest-impact risks',
        description:
          'We review performance bottlenecks, access practices and reliability weaknesses in context.',
      },
      {
        title: 'Fix and verify improvements',
        description:
          'Changes are tested against the behaviour and environments that matter to your users.',
      },
      {
        title: 'Establish healthy habits',
        description:
          'Monitoring and release checks help preserve performance and security over time.',
      },
    ],
    cta: 'Have a performance and security requirement?',
  },
  '/services/maintenance-long-term-support': {
    title: 'Maintenance & Long-Term Support',
    intro: 'Structured support that keeps your website or software useful after launch.',
    heroImage: 'https://blackcode.in/assets/support-hero-real-DCp12NS_.png',
    implementationImage: 'https://blackcode.in/assets/support-process-real-DehHtF1p.png',
    deliverHeading: 'A dependable rhythm for product care and improvement.',
    deliverDescription:
      'We manage fixes, updates, performance checks and planned enhancements through a clear support process so your product stays secure, reliable and aligned with the business.',
    deliverables: [
      'Routine updates, backups and health checks',
      'Issue investigation and release support',
      'Performance and security maintenance',
      'Feature enhancements and product planning',
    ],
    valueHeading: 'Keep your product useful after the initial launch.',
    valueDescription:
      'Websites and software change with the business using them. A visible support process keeps small issues from becoming urgent and makes room for practical, planned improvements.',
    outcomes: [
      'A predictable process for fixes and updates',
      'A product that stays aligned with changing needs',
    ],
    steps: [
      'Set a clear support and priority rhythm.',
      'Maintain the product proactively.',
      'Plan the most useful enhancements.',
    ],
    implementation:
      'Ongoing care that keeps software stable, current and useful.',
    workHeading: 'How we work on support.',
    workCards: [
      {
        title: 'Agree how support works',
        description:
          'We establish clear priorities, communication and ownership for support requests.',
      },
      {
        title: 'Maintain proactively',
        description:
          'Updates, checks and small fixes are addressed before avoidable disruption builds up.',
      },
      {
        title: 'Plan future improvements',
        description:
          'Regular reviews turn feedback and business priorities into a manageable enhancement roadmap.',
      },
    ],
    cta: 'Have a support requirement?',
  },
}

const strengths = [
  ['Designed around users', 'Clear journeys for daily use.'],
  ['Focused on outcomes', 'Useful activity visibility.'],
  ['Ready to perform', 'Reliable, scalable foundations.'],
  ['Built with care', 'Thoughtful quality checks.'],
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-8" />
    </svg>
  )
}

export default function ServicePage({ pathname }) {
  const service = servicePages[pathname]

  useEffect(() => {
    if (!service) {
      return undefined
    }

    const previousTitle = document.title
    document.title = `${service.title} | Kingdomsoft`

    return () => {
      document.title = previousTitle
    }
  }, [service])

  if (!service) {
    return null
  }

  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero-inner">
          <div className="service-hero-copy">
            <p className="service-eyebrow service-eyebrow--light">KINGDOMSOFT SERVICES</p>
            <h1>{service.title}</h1>
            <p className="service-hero-intro">{service.intro}</p>
            <a className="service-button" href="/contact">
              Discuss your requirement <ArrowIcon />
            </a>
          </div>
          <figure className="service-hero-figure">
            <img src={service.heroImage} alt={`${service.title} service`} />
            <figcaption>
              <span className="service-caption-icon" aria-hidden="true">
                <CheckIcon />
              </span>
              Built around measurable business value
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="service-deliver section-pad">
        <div className="service-content-shell service-deliver-grid">
          <div className="service-section-copy">
            <p className="service-eyebrow">WHAT WE DELIVER</p>
            <h2>{service.deliverHeading}</h2>
            <p>{service.deliverDescription}</p>
          </div>
          <div className="service-deliverables">
            {service.deliverables.map((item) => (
              <article className="service-deliverable" key={item}>
                <CheckIcon />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-insights">
        <div className="service-content-shell service-insights-grid">
          <div className="service-strengths">
            {strengths.map(([title, description], index) => (
              <article className="service-strength" key={title}>
                <span className={`service-strength-icon service-strength-icon--${index + 1}`} aria-hidden="true">
                  <CheckIcon />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="service-value">
            <p className="service-eyebrow">WHY IT MATTERS</p>
            <h2>{service.valueHeading}</h2>
            <p>{service.valueDescription}</p>
            <ul>
              {service.outcomes.map((outcome) => (
                <li key={outcome}>
                  <CheckIcon />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-approach section-pad">
        <div className="service-content-shell service-approach-grid">
          <div className="service-approach-copy">
            <p className="service-eyebrow">OUR APPROACH</p>
            <h2>A clear path from requirement to release.</h2>
            <ol>
              {service.steps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <figure className="service-implementation">
            <figcaption>
              <p className="service-eyebrow service-eyebrow--light">IMPLEMENTATION FOCUS</p>
              <p>{service.implementation}</p>
            </figcaption>
            <img
              src={service.implementationImage}
              alt={`${service.title} implementation`}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="service-working section-pad">
        <div className="service-content-shell">
          <div className="service-working-heading">
            <p className="service-eyebrow">WORKING TOGETHER</p>
            <h2>{service.workHeading}</h2>
          </div>
          <div className="service-work-grid">
            {service.workCards.map((card) => (
              <article className="service-work-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="service-content-shell service-cta-inner">
          <h2>{service.cta}</h2>
          <a className="service-button service-button--dark" href="/contact">
            Start a conversation <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  )
}
