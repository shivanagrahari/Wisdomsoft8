import { useEffect, useState } from 'react'
import './CompanyPages.css'

const projectTypes = [
  'Website',
  'Mobile app',
  'CRM',
  'HRMS / HRM',
  'ERP',
  'E-commerce platform',
  'Custom software',
  'Other / Not sure yet',
]

const quickAnswers = [
  {
    question: 'How soon will you get back to me?',
    answer: 'Our team usually responds within one business day.',
  },
  {
    question: 'Can you help define the scope?',
    answer: 'Yes. We’ll discuss your goals and recommend a practical approach.',
  },
  {
    question: 'Do you support projects after launch?',
    answer: 'We offer ongoing maintenance and support for delivered projects.',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4l3 2" />
    </svg>
  )
}

function WorkIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="3" y="6" width="14" height="11" rx="2" />
      <path d="M7 6V4h6v2M3 10h14m-9 0v2h4v-2" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M16 8.5c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 1 1 12 0Z" />
      <circle cx="10" cy="8" r="2" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
      <path d="m3.5 6 6.5 5 6.5-5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6 3H4a1 1 0 0 0-1 1c0 7.2 5.8 13 13 13a1 1 0 0 0 1-1v-2l-4-2-2 2a11 11 0 0 1-5-5l2-2-2-4Z" />
    </svg>
  )
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 15V4m-4 4 4-4 4 4M5 14v5h14v-5" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m3 9 14-6-5 14-2.5-5.5L3 9Z" />
      <path d="M9.5 11.5 17 3" />
    </svg>
  )
}

function PageTitle({ title }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | Kingdomsoft`

    return () => {
      document.title = previousTitle
    }
  }, [title])

  return null
}

const careerBenefits = [
  {
    icon: 'growth',
    title: 'Room to grow',
    description: 'Build your skills in a supportive, growth-focused environment.',
  },
  {
    icon: 'work',
    title: 'Meaningful work',
    description: 'Contribute to useful products and projects across industries.',
  },
  {
    icon: 'team',
    title: 'Teamwork that matters',
    description: 'Share ideas and solve problems with a collaborative team.',
  },
  {
    icon: 'learn',
    title: 'Keep learning',
    description: 'Take on new challenges and keep developing your craft.',
  },
]

function BenefitIcon({ type }) {
  if (type === 'work') {
    return <WorkIcon />
  }

  if (type === 'team') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M3.5 19v-1.5a5.5 5.5 0 0 1 11 0V19Zm12.2-6.2a4.5 4.5 0 0 1 4.8 4.5V19h-4" />
      </svg>
    )
  }

  if (type === 'learn') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v17H7.5A3.5 3.5 0 0 0 4 22Zm0 0V22m4-15h8m-8 4h6" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 17 6-6 4 4 8-9M15 6h6v6" />
      <path d="M4 21h16" />
    </svg>
  )
}

export function CareersPage() {
  const [selectedFile, setSelectedFile] = useState('')
  const [fileError, setFileError] = useState('')
  const [applicationStatus, setApplicationStatus] = useState('')

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    setFileError('')
    setApplicationStatus('')

    if (!file) {
      setSelectedFile('')
      return
    }

    const extension = file.name.split('.').pop()?.toLowerCase()
    if (!['pdf', 'doc', 'docx'].includes(extension)) {
      setSelectedFile('')
      setFileError('Choose a PDF, DOC or DOCX file.')
      event.target.value = ''
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setSelectedFile('')
      setFileError('The maximum file size is 10 MB.')
      event.target.value = ''
      return
    }

    setSelectedFile(file.name)
  }

  const handleApplicationSubmit = (event) => {
    event.preventDefault()
    setApplicationStatus(
      'Online applications are not connected yet. Please email your CV and application details to info@Kingdomsoft.in.',
    )
  }

  return (
    <main className="company-page careers-page">
      <PageTitle title="Careers" />
      <section className="careers-hero">
        <div className="company-content-shell careers-hero-inner">
          <p className="company-eyebrow company-eyebrow--light">CAREERS AT KINGDOMSOFT</p>
          <h1>Careers at Kingdomsoft</h1>
          <p>
            We are always looking for talented individuals to join our team and
            grow together.
          </p>
        </div>
        <div className="careers-hero-orbit careers-hero-orbit--one" aria-hidden="true" />
        <div className="careers-hero-orbit careers-hero-orbit--two" aria-hidden="true" />
      </section>

      <section className="career-benefits-section">
        <div className="company-content-shell">
          <div className="career-section-heading">
            <h2>Why Join Us</h2>
          </div>
          <div className="career-benefit-grid">
            {careerBenefits.map((benefit, index) => (
              <article className="career-benefit-card" key={benefit.title}>
                <span className={`career-benefit-icon career-benefit-icon--${index + 1}`}>
                  <BenefitIcon type={benefit.icon} />
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-application-section" id="career-application">
        <div className="company-content-shell career-application-card">
          <div className="career-application-heading">
            <h2>Apply for a Position</h2>
            <p>
              Tell us a little about yourself and the role you’re looking for.
              Our team will review your application and get back to you.
            </p>
          </div>
          <form className="company-form career-form" onSubmit={handleApplicationSubmit}>
            <div className="company-form-grid">
              <label>
                Full Name
                <input name="fullName" type="text" placeholder="Full Name" required />
              </label>
              <label>
                Email Address
                <input name="email" type="email" placeholder="Email Address" required />
              </label>
              <label>
                Mobile Number
                <input name="phone" type="tel" placeholder="Mobile Number" required />
              </label>
              <label>
                Current Location
                <input name="location" type="text" placeholder="Current Location" required />
              </label>
              <label>
                Highest Qualification
                <input name="qualification" type="text" placeholder="Highest Qualification" required />
              </label>
              <label>
                Position Applying For
                <input name="position" type="text" placeholder="Position Applying For" required />
              </label>
              <label>
                Total Experience
                <input name="experience" type="text" placeholder="Total Experience" required />
              </label>
              <label>
                Expected Salary
                <input name="salary" type="text" placeholder="Expected Salary" />
              </label>
              <label className="company-form-full">
                Brief Introduction or Career Summary
                <textarea
                  name="summary"
                  placeholder="Brief Introduction or Career Summary"
                  rows="4"
                  required
                />
              </label>
            </div>
            <label className="career-file-label">
              <span className="career-upload-icon"><UploadIcon /></span>
              <span className="career-upload-copy">
                <strong>Attach your CV or resume</strong>
                <span>PDF, DOC or DOCX · Maximum file size 10 MB</span>
                {selectedFile && <span className="career-file-name">{selectedFile}</span>}
                {fileError && <span className="company-form-error">{fileError}</span>}
              </span>
              <span className="career-file-button">Browse files</span>
              <input
                aria-label="Attach your CV or resume"
                accept=".pdf,.doc,.docx"
                name="resume"
                type="file"
                onChange={handleFileChange}
              />
            </label>
            <p className="company-form-note">
              This form does not upload applications to a server. After completing
              it, email your CV and details to{' '}
              <a href="mailto:info@Kingdomsoft.in">info@Kingdomsoft.in</a>.
            </p>
            <button className="company-button company-button--dark" type="submit">
              Submit Application <ArrowIcon />
            </button>
            {applicationStatus && (
              <p className="company-form-status" role="status">{applicationStatus}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

function ContactDetails() {
  return (
    <aside className="contact-details-card">
      <p className="company-eyebrow">CONTACT DETAILS</p>
      <h2>We’re here to help.</h2>
      <p className="contact-details-intro">
        Have a project in mind or need a little direction? Reach out and we’ll
        connect you with the right team.
      </p>
      <div className="contact-detail-list">
        <a
          className="contact-detail"
          href="https://maps.google.com/?q=4th+Floor+Nandanvan+Park+Karvenagar+Pune"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-detail-icon"><PinIcon /></span>
          <span>
            <small>VISIT OUR OFFICE</small>
            <strong>4th Floor, Nandanvan Park,<br />Karvenagar, Pune</strong>
          </span>
          <ArrowIcon />
        </a>
        <a className="contact-detail" href="tel:9370778309">
          <span className="contact-detail-icon"><PhoneIcon /></span>
          <span>
            <small>CALL OUR TEAM</small>
            <strong>9370778309</strong>
          </span>
          <ArrowIcon />
        </a>
        <a className="contact-detail" href="mailto:info@Kingdomsoft.in">
          <span className="contact-detail-icon"><MailIcon /></span>
          <span>
            <small>EMAIL US</small>
            <strong>info@Kingdomsoft.in</strong>
          </span>
          <ArrowIcon />
        </a>
      </div>
      <div className="contact-office-hours">
        <span className="contact-detail-icon"><ClockIcon /></span>
        <span>
          <small>OFFICE HOURS</small>
          <strong>Mon–Fri, 9:00 AM–6:00 PM</strong>
          <span>Saturday, 10:00 AM–3:00 PM · Sunday closed</span>
        </span>
      </div>
      <div className="contact-socials">
        <p>Connect with us</p>
        <div>
          <a href="https://www.linkedin.com/in/black-code-97a8103aa" aria-label="LinkedIn">in</a>
          <a href="https://www.instagram.com/blackcode_technology" aria-label="Instagram">◎</a>
          <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
          <a href="https://x.com/" aria-label="X">𝕏</a>
        </div>
      </div>
    </aside>
  )
}

export function ContactPage() {
  const [description, setDescription] = useState('')
  const [inquiryStatus, setInquiryStatus] = useState('')

  const handleInquirySubmit = (event) => {
    event.preventDefault()
    setInquiryStatus(
      'This site does not send inquiries to a server yet. Please email info@Kingdomsoft.in or call 9370778309.',
    )
  }

  return (
    <main className="company-page contact-page">
      <PageTitle title="Contact Us" />
      <section className="contact-hero">
        <div className="company-content-shell contact-hero-inner">
          <div className="contact-hero-copy">
            <p className="company-eyebrow company-eyebrow--light">
              <span className="contact-eyebrow-dot" />
              LET’S TALK ABOUT YOUR PROJECT
            </p>
            <h1>
              Good work starts
              <br />
              <span>with a conversation.</span>
            </h1>
            <p>
              Tell us what you’re planning. Our team will help you map the right
              solution, scope, and next steps.
            </p>
            <div className="contact-hero-points">
              <span><ClockIcon />Replies within one business day</span>
              <span><WorkIcon />Web, mobile &amp; business software</span>
            </div>
          </div>
          <div className="contact-hero-art" aria-hidden="true">
            <span className="contact-orbit contact-orbit--outer" />
            <span className="contact-orbit contact-orbit--middle" />
            <span className="contact-orbit contact-orbit--inner" />
            <span className="contact-orbit-dot contact-orbit-dot--one" />
            <span className="contact-orbit-dot contact-orbit-dot--two" />
            <span className="contact-orbit-dot contact-orbit-dot--three" />
            <span className="contact-orbit-center">BC</span>
          </div>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="company-content-shell contact-content-grid">
          <div className="contact-sidebar">
            <ContactDetails />
            <section className="contact-faq-card">
              <p className="company-eyebrow">A FEW QUICK ANSWERS</p>
              <h2>Before we connect</h2>
              <div className="contact-faq-list">
                {quickAnswers.map((item) => (
                  <article key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <section className="contact-inquiry-card">
            <div className="contact-inquiry-heading">
              <span className="contact-inquiry-icon"><SendIcon /></span>
              <div>
                <p className="company-eyebrow">PROJECT INQUIRY</p>
                <h2>Tell us what you need</h2>
                <p>Share a few details and we’ll take it from here.</p>
              </div>
            </div>
            <form className="company-form contact-inquiry-form" onSubmit={handleInquirySubmit}>
              <div className="company-form-grid">
                <label>
                  Full name
                  <input name="fullname" type="text" placeholder="e.g. Aanya Sharma" required />
                </label>
                <label>
                  Work email
                  <input name="email" type="email" placeholder="you@company.com" required />
                </label>
                <label>
                  Phone number
                  <input name="phone" type="tel" placeholder="10-digit mobile number" required />
                </label>
                <label>
                  Location
                  <input name="location" type="text" placeholder="City or region" required />
                </label>
                <label className="company-form-full">
                  Project interest
                  <select name="projectType" defaultValue="" required>
                    <option value="" disabled>Select the kind of project you have in mind</option>
                    {projectTypes.map((projectType) => (
                      <option key={projectType}>{projectType}</option>
                    ))}
                  </select>
                </label>
                <label className="company-form-full">
                  Briefly describe your requirement
                  <textarea
                    name="description"
                    placeholder="What are you looking to build? Add goals, features, or a timeline if you know them."
                    maxLength={1000}
                    rows="5"
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value)
                      setInquiryStatus('')
                    }}
                    required
                  />
                  <span className="contact-character-count">{description.length}/1,000 characters</span>
                </label>
              </div>
              <div className="contact-form-footer">
                <p className="company-form-note">
                  Your details are only used to respond to your inquiry.
                </p>
                <button className="company-button company-button--dark" type="submit">
                  Send project inquiry <ArrowIcon />
                </button>
              </div>
              {inquiryStatus && (
                <p className="company-form-status" role="status">{inquiryStatus}</p>
              )}
            </form>
          </section>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="company-content-shell">
          <div className="contact-map-heading">
            <div>
              <p className="company-eyebrow">FIND US</p>
              <h2>Visit our Pune office</h2>
            </div>
            <a
              className="contact-map-link"
              href="https://maps.google.com/?q=4th+Floor+Nandanvan+Park+Karvenagar+Pune"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps <ArrowIcon />
            </a>
          </div>
          <iframe
            className="contact-map-frame"
            title="Map to Kingdomsoft's Pune office"
            src="https://maps.google.com/maps?q=4th%20Floor%20Nandanvan%20Park%20Karvenagar%20Pune&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  )
}
