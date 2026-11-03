import { useState } from 'react'

const projects = [
  {
    id: '01',
    type: 'WEB APPLICATION',
    title: 'Garage Management Platform',
    intro: 'Bringing workshop operations into one connected workspace.',
    description: 'A multi-location management platform concept focused on the everyday workflows of garage teams. The project is being developed with a core-first approach, with modules planned for operations, inventory, billing and reporting.',
    stack: ['React', 'JavaScript', 'Responsive UI'],
    status: 'In development',
    visual: 'garage',
    size: 'wide',
  },
  {
    id: '02',
    type: 'CORPORATE WEBSITE',
    title: 'Business Website Experience',
    intro: 'A clear, responsive digital presence for a technology business.',
    description: 'Professional website development and ongoing improvements, including responsive layouts, content updates, CMS maintenance and practical quality checks across key pages.',
    stack: ['HTML & CSS', 'JavaScript', 'CMS'],
    href: 'https://svaantech.com/',
    action: 'View live website',
    visual: 'corporate',
  },
  {
    id: '03',
    type: 'PERSONAL PROJECT',
    title: 'Developer Portfolio',
    intro: 'A focused space for sharing work and the way I build.',
    description: 'A React and Vite portfolio built to present my frontend experience, selected work and learning journey through a simple, considered interface.',
    stack: ['React', 'Vite', 'CSS'],
    href: 'https://sureshkumar-iota.vercel.app/',
    action: 'View current version',
    visual: 'portfolio',
  },
]

const skillGroups = [
  { name: 'Frontend', values: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
  { name: 'Platforms', values: ['WordPress', 'Shopify CMS'] },
  { name: 'Workflow', values: ['Git & GitHub', 'VS Code', 'Cursor', 'Antigravity', 'Figma'] },
]

function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function ProjectArtwork({ type }) {
  if (type === 'garage') return (
    <div className="artwork artwork-garage" aria-hidden="true">
      <div className="garage-orbit orbit-one" /><div className="garage-orbit orbit-two" />
      <div className="garage-screen">
        <div className="screen-head"><span className="screen-brand">WORKSPACE<span> / 01</span></span><span className="screen-dots">•••</span></div>
        <div className="screen-body"><aside><b>G.</b><i /><i /><i /><i /></aside><div className="screen-main"><small>OVERVIEW / MONDAY</small><strong>Workshop overview</strong><div className="screen-metrics"><i /><i /><i /></div><div className="screen-table"><i /><i /><i /><i /></div></div></div>
      </div>
      <span className="artwork-index">01 — OPERATIONS</span>
    </div>
  )
  if (type === 'corporate') return (
    <div className="artwork artwork-corporate" aria-hidden="true">
      <div className="corporate-grid" /><div className="corporate-glow glow-a" /><div className="corporate-glow glow-b" />
      <div className="corporate-type"><span>TECHNOLOGY / STRATEGY / GROWTH</span><b>Build what<br />moves <em>you.</em></b><i /><small>Digital experiences for what comes next.</small></div>
      <span className="artwork-index">02 — DIGITAL PRESENCE</span>
    </div>
  )
  return (
    <div className="artwork artwork-portfolio" aria-hidden="true">
      <div className="portfolio-frame"><div className="portfolio-top"><i /><i /><i /><span>MY / DIGITAL SPACE</span></div><div className="portfolio-inner"><small>HELLO, WORLD.</small><b>Code with<br /><em>intention.</em></b><div className="portfolio-rule" /><div className="portfolio-squares"><i /><i /><i /></div></div></div>
      <span className="artwork-index">03 — PERSONAL WORK</span>
    </div>
  )
}

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const closeMenu = () => setMenuOpen(false)
  const submitContact = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('Portfolio enquiry from ' + form.name)
    const body = encodeURIComponent('Name: ' + form.name + '\nEmail: ' + form.email + '\n\n' + form.message)
    window.location.href = 'mailto:sureshkumarmr2004@gmail.com?subject=' + subject + '&body=' + body
  }

  return (
    <div className={dark ? 'site theme-dark' : 'site theme-light'}>
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>SK<span>.</span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle colour theme"><span>{dark ? '☼' : '◐'}</span><small>{dark ? 'LIGHT' : 'DARK'}</small></button>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <Arrow diagonal /></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-meta"><span><i /> OPEN TO FRONTEND OPPORTUNITIES</span><span>WEB SOLUTIONS ENGINEER / INDIA</span></div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">HELLO, I'M SURESH KUMAR</p>
              <h1>I build<br /><em>for the web.</em></h1>
              <p className="hero-description">Frontend developer focused on turning ideas into clear, responsive and useful digital experiences with JavaScript and React.</p>
              <div className="hero-actions"><a className="button-primary" href="#projects">Explore my work <Arrow diagonal /></a><a className="text-link" href="#contact">Let's connect <Arrow /></a></div>
            </div>
            <div className="hero-visual" aria-label="Abstract frontend development composition">
              <div className="visual-grid" /><div className="visual-ring ring-a" /><div className="visual-ring ring-b" />
              <div className="code-card"><div className="code-card-top"><span>BUILD / ITERATE / REFINE</span><i>•••</i></div><div className="code-lines"><span><b>01</b><i className="code-purple">const</i> <i className="code-green">idea</i> = <i className="code-orange">'possible'</i></span><span><b>02</b><i className="code-purple">function</i> <i className="code-blue">build</i>() {'{'}</span><span><b>03</b>&nbsp;&nbsp;makeItUseful()</span><span><b>04</b>{'}'}</span><span><b>05</b><i className="code-green">// keep improving</i></span></div><div className="code-card-foot"><span>REACT + JAVASCRIPT</span><span className="live-dot" /> <span>IN PROGRESS</span></div></div>
              <div className="orbit-label label-one">THOUGHTFUL UI</div><div className="orbit-label label-two">CLEAN CODE ↗</div>
              <div className="hero-stamp">SK<span>®</span></div>
            </div>
          </div>
          <div className="hero-bottom"><span>01 / INTRODUCTION</span><span className="hero-bottom-line" /><a href="#about">SCROLL TO DISCOVER <b>↓</b></a><span>EST. 2024</span></div>
        </section>

        <section className="about-section" id="about"><div className="section-wrap">
          <div className="section-heading"><span>01 — ABOUT</span><span>A LITTLE CONTEXT</span></div>
          <div className="about-grid">
            <div className="about-statement"><p className="eyebrow">A DEVELOPER WHO STAYS CURIOUS</p><h2>Good work starts<br />with <em>good questions.</em></h2><div className="about-monogram">S<span>.</span>K</div></div>
            <div className="about-details"><p className="about-lead">I enjoy understanding a problem first, then building a practical solution that feels simple to use.</p><p>I'm a Web Solutions Engineer with experience in website development and maintenance. My day-to-day work has taught me to care about the details behind a reliable website — from responsive behaviour and clear navigation to updates and quality checks.</p><p>I'm growing deeper into frontend and web application development, with a focus on JavaScript and React. I learn best by building, testing and improving real projects.</p>
              <div className="about-facts"><div><small>EXPERIENCE</small><b>Since 2024</b></div><div><small>EDUCATION</small><b>B.Sc. Computer Science</b></div><div><small>FOCUS</small><b>Frontend development</b></div></div>
            </div>
          </div>
          <div className="toolkit"><div className="toolkit-intro"><span>THE TOOLKIT</span><p>Technologies I use across professional work and personal builds.</p></div><div className="toolkit-groups">{skillGroups.map(group => <div className="toolkit-row" key={group.name}><span>{group.name}</span><div>{group.values.map(value => <b key={value}>{value}</b>)}</div></div>)}</div></div>
        </div></section>

        <section className="projects-section" id="projects"><div className="section-wrap">
          <div className="section-heading"><span>02 — SELECTED PROJECTS</span><span>WORK IN PROGRESS &amp; BUILT</span></div>
          <div className="projects-intro"><h2>Ideas, shaped<br />into <em>experiences.</em></h2><p>A few projects that show what I work on, what I care about and how I keep learning through building.</p></div>
          <div className="project-list">{projects.map(project => <article className={'project project-' + project.visual + (project.size === 'wide' ? ' project-wide' : '')} key={project.id}>
            <ProjectArtwork type={project.visual} />
            <div className="project-info"><div className="project-overline"><span>{project.type}</span><span>{project.id} / 03</span></div><h3>{project.title}</h3><p className="project-intro">{project.intro}</p><p className="project-description">{project.description}</p><div className="project-foot"><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>{project.status ? <span className="project-status"><i /> {project.status}</span> : <a href={project.href} target="_blank" rel="noreferrer">{project.action} <Arrow diagonal /></a>}</div></div>
          </article>)}</div>
        </div></section>

        <section className="contact-section" id="contact"><div className="section-wrap">
          <div className="section-heading"><span>03 — CONTACT</span><span>HAVE A GOOD ONE IN MIND?</span></div>
          <div className="contact-grid"><div className="contact-copy"><p className="eyebrow">LET'S MAKE SOMETHING USEFUL</p><h2>Have a project<br />in <em>mind?</em></h2><p>Whether you're building a product, growing a team or looking for a frontend developer, I'd be glad to hear from you.</p><a className="email-link" href="mailto:sureshkumarmr2004@gmail.com">sureshkumarmr2004@gmail.com <Arrow diagonal /></a><div className="social-links"><a href="https://linkedin.com/in/suresh-kumar-m/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="https://github.com/Suresh4000/" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a></div></div>
            <form className="contact-form" onSubmit={submitContact}><label>YOUR NAME<input required value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} placeholder="Name" /></label><label>EMAIL ADDRESS<input required type="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label><label>YOUR MESSAGE<textarea required rows="3" value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} placeholder="Tell me a little about it..." /></label><button type="submit">Send an enquiry <Arrow diagonal /></button><small>Opens your email app with your message ready to send.</small></form>
          </div>
        </div></section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home">SK<span>.</span></a><p>Built with curiosity and code.</p><span>© {new Date().getFullYear()} SURESH KUMAR</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
