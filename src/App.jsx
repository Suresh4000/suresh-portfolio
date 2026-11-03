import { useState } from 'react'

const projects = [
  { number: '01', category: 'WEB APPLICATION', title: 'Garage Management Platform', description: 'A multi-location garage management system in development, focused on organising workshop operations through a single web application.', tags: ['React', 'JavaScript', 'Application UI'], status: 'In development', visual: 'garage' },
  { number: '02', category: 'WEBSITE + CRM', title: 'Business Website & CRM', description: 'A Next.js website integrated with CRM functionality, bringing the public-facing website and customer management experience together.', tags: ['Next.js', 'CRM Integration', 'JavaScript'], visual: 'business' },
  { number: '03', category: 'CONSTRUCTION / PROPERTY', title: 'Construction & Property Website', description: 'A WordPress website for a construction and property business, presenting its services and property-related information in a clear structure.', tags: ['WordPress', 'CMS', 'Responsive Layout'], visual: 'portfolio' },
  { number: '04', category: 'PRODUCT WEBSITE', title: 'Door Accessories Website', description: 'A WordPress website focused on showcasing a range of door accessories and making product information easy for visitors to explore.', tags: ['WordPress', 'Product Catalogue', 'Content Management'], visual: 'business' },
  { number: '05', category: 'CORPORATE WEBSITE', title: 'Business Website Experience', description: 'Website development and maintenance covering responsive presentation, content updates, CMS changes and routine quality checks.', tags: ['HTML', 'CSS', 'JavaScript', 'WordPress'], href: 'https://svaantech.com/', action: 'View website', visual: 'business' },
  { number: '06', category: 'PERSONAL PROJECT', title: 'Developer Portfolio', description: 'A React and Vite portfolio built to present my frontend skills, selected work and ongoing development journey.', tags: ['React', 'Vite', 'CSS'], href: 'https://sureshkumar-iota.vercel.app/', action: 'View current version', visual: 'portfolio' },
]

const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'WordPress', 'Shopify CMS', 'Git & GitHub']

function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function WindowDots() {
  return <span className="window-dots"><i /><i /><i /></span>
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="A visual preview of frontend work">
      <div className="art-shape shape-pink" />
      <div className="art-shape shape-yellow" />
      <div className="art-browser browser-back">
        <div className="browser-bar"><WindowDots /><span>PROJECT / INTERFACE</span></div>
        <div className="browser-content">
          <div className="mini-sidebar"><b>SK.</b><i /><i /><i /><i /></div>
          <div className="mini-main"><span className="mini-kicker">BUILD / TEST / IMPROVE</span><b>Ideas into<br />interfaces.</b><div className="mini-lines"><i /><i /><i /></div><div className="mini-pills"><i /><i /><i /></div></div>
        </div>
      </div>
      <div className="floating-code">
        <div className="code-heading"><WindowDots /><span>App.jsx</span><span>REACT</span></div>
        <div className="code-content">
          <p><b>01</b> <i>const</i> <em>build</em> = () =&gt; {'{'}</p>
          <p><b>02</b> &nbsp; solveProblems()</p>
          <p><b>03</b> &nbsp; createExperiences()</p>
          <p><b>04</b> {'}'}</p>
          <p><b>05</b> <strong>// keep learning</strong></p>
        </div>
      </div>
      <div className="art-caption caption-left">THOUGHTFUL INTERFACES</div>
      <div className="art-caption caption-right">MADE TO WORK ↗</div>
      <span className="art-spark">✳</span>
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'garage') return (
    <div className="project-visual garage-visual">
      <div className="garage-ui">
        <div className="mock-top"><b>WORKSPACE</b><span>OVERVIEW　 INVENTORY　 REPORTS</span><WindowDots /></div>
        <div className="mock-body"><aside><b>G.</b><i /><i /><i /><i /></aside><div className="mock-content"><small>MONDAY / OVERVIEW</small><h4>Workshop overview</h4><div className="mock-stats"><i /><i /><i /></div><div className="mock-table"><i /><i /><i /><i /></div></div></div>
      </div>
      <span className="visual-note">OPERATIONS / 01</span>
    </div>
  )
  if (type === 'business') return (
    <div className="project-visual business-visual">
      <div className="business-copy"><small>TECHNOLOGY / STRATEGY</small><b>Build what<br />moves <em>you.</em></b><span>Digital experiences for what comes next.</span></div>
      <div className="business-orb" /><span className="visual-note">DIGITAL PRESENCE</span>
    </div>
  )
  return (
    <div className="project-visual portfolio-visual">
      <div className="portfolio-window"><div className="mock-top"><b>MY PORTFOLIO</b><WindowDots /></div><div className="portfolio-copy"><small>HELLO, WORLD.</small><b>Code with<br /><em>intention.</em></b><div className="portfolio-line" /><div className="portfolio-blocks"><i /><i /><i /></div></div></div>
      <span className="visual-note">WEB EXPERIENCE</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const closeMenu = () => setMenuOpen(false)
  const submitContact = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('Portfolio enquiry from ' + form.name)
    const body = encodeURIComponent('Name: ' + form.name + '\\nEmail: ' + form.email + '\\n\\n' + form.message)
    window.location.href = 'mailto:sureshkumarmr2004@gmail.com?subject=' + subject + '&body=' + body
  }

  return (
    <div className="site">
      <aside className="floating-socials" aria-label="Social links">
        <a href="https://github.com/Suresh4000/" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.0 0 4.29-2.61 5.23-5.1 5.5.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>
        </a>
        <a href="https://linkedin.com/in/suresh-kumar-m/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.4h3.8v11.3H3.3V9.4Zm6.2 0h3.6V11h.1c.5-.9 1.7-2 3.6-2 3.9 0 4.6 2.5 4.6 5.7v6h-3.8v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.5V9.4Z"/></svg>
        </a>
        <a href="mailto:sureshkumarmr2004@gmail.com" aria-label="Email" title="Email">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.5 5.5h17A1.5 1.5 0 0 1 22 7v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17V7a1.5 1.5 0 0 1 1.5-1.5Zm8.5 7.1 7.5-5.2h-15l7.5 5.2Zm0 2.1L4 9.1V17h16V9.1l-8 5.6Z"/></svg>
        </a>
      </aside>
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>suresh<span>.</span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <Arrow diagonal /></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <div className="hero-topline"><span><i /> WEB SOLUTIONS ENGINEER</span><span>BASED IN INDIA · SINCE 2024</span></div>
            <div className="hero-grid">
              <HeroArtwork />
              <div className="hero-copy">
                <p className="eyebrow">HELLO, I'M SURESH KUMAR</p>
                <h1>Building for<br />the <em>better web.</em></h1>
                <p className="hero-description">I create responsive websites and thoughtful frontend experiences with JavaScript and React.</p>
                <div className="hero-actions"><a className="button-primary" href="#projects">Explore my work <Arrow diagonal /></a><a className="hero-link" href="#about">A little about me <Arrow /></a></div>
              </div>
            </div>
            <div className="hero-bottom"><span>FRONTEND DEVELOPMENT / DIGITAL EXPERIENCES</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap">
            <div className="section-label"><span>01 / ABOUT</span><span>THE PERSON BEHIND THE PIXELS</span></div>
            <div className="about-layout">
              <div className="about-heading"><p className="eyebrow">A DEVELOPER WHO STAYS CURIOUS</p><h2>Good ideas<br />deserve <em>good execution.</em></h2><div className="about-mark">S<span>.</span>K</div></div>
              <div className="about-copy"><p className="about-lead">I like turning real problems into digital experiences that feel clear, useful and easy to navigate.</p><p>I'm a Web Solutions Engineer with hands-on experience in website development and maintenance. My work has helped me build a practical eye for responsive layouts, content structure, usability and the details that keep websites reliable.</p><p>I'm now focused on growing as a frontend developer, building with JavaScript and React, and learning through real projects, testing and iteration.</p><div className="about-facts"><div><small>EXPERIENCE</small><b>Since 2024</b></div><div><small>EDUCATION</small><b>B.Sc. Computer Science</b></div><div><small>FOCUS</small><b>Frontend / React</b></div></div></div>
            </div>
            <div className="skills-band"><div><span className="eyebrow">TOOLS I WORK WITH</span><p>A growing toolkit for building on the web.</p></div><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-label"><span>02 / SELECTED PROJECTS</span><span>EXPLORATIONS & BUILDS</span></div>
            <div className="projects-heading"><h2>Work with<br /><em>purpose.</em></h2><p>A mix of web applications and business websites, built with different tools to solve different needs.</p></div>
            <div className="project-grid">{projects.map(project => <article className={'project-card project-' + project.visual} key={project.number}>
              <ProjectVisual type={project.visual} />
              <div className="project-info"><div className="project-meta"><span>{project.category}</span><span>{project.number} / 06</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.status ? <span className="project-status"><i />{project.status}</span> : project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.action} <Arrow diagonal /></a> : null}</div></div>
            </article>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap">
            <div className="section-label"><span>03 / CONTACT</span><span>HAVE SOMETHING IN MIND?</span></div>
            <div className="contact-layout"><div className="contact-copy"><p className="eyebrow">LET'S START A CONVERSATION</p><h2>Let's make<br />something <em>matter.</em></h2><p>Have a project, an opportunity or an idea you'd like to discuss? I'd be happy to hear from you.</p><a className="contact-email" href="mailto:sureshkumarmr2004@gmail.com">sureshkumarmr2004@gmail.com <Arrow diagonal /></a><div className="social-links"><a href="https://linkedin.com/in/suresh-kumar-m/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="https://github.com/Suresh4000/" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a></div></div>
              <form className="contact-form" onSubmit={submitContact}><label>YOUR NAME<input required value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} placeholder="Name" /></label><label>EMAIL ADDRESS<input required type="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label><label>YOUR MESSAGE<textarea required rows="3" value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} placeholder="Tell me a little about it..." /></label><button type="submit">Send an enquiry <Arrow diagonal /></button><small>Opens your email app with your message ready to send.</small></form>
            </div>
            <footer className="footer"><a className="brand" href="#home">suresh<span>.</span></a><span>DESIGNED & BUILT WITH CURIOSITY</span><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} SURESH KUMAR</small></footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
