import { useState } from 'react'

const skills = [
  { label: 'Frontend', items: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { label: 'Platforms', items: ['WordPress', 'Shopify CMS'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Cursor', 'Antigravity', 'Figma'] },
]

const projects = [
  {
    number: '01',
    category: 'PRODUCT · IN DEVELOPMENT',
    title: 'Bay View Garage',
    subtitle: 'A management platform for modern workshops.',
    description: 'Planning a multi-location garage management system, starting with the core workflows that help workshop teams organise their day-to-day operations.',
    tags: ['React', 'Web application', 'Multi-location'],
    status: 'In development',
    visual: 'garage',
  },
  {
    number: '02',
    category: 'PROFESSIONAL EXPERIENCE',
    title: 'SVaaN Global Tech',
    subtitle: 'Building and maintaining the company web presence.',
    description: 'Contribute to website development and ongoing maintenance, with attention to responsive layouts, content updates and practical quality checks.',
    tags: ['Web development', 'Responsive UI', 'CMS'],
    href: 'https://svaantech.com/',
    action: 'Visit website',
    visual: 'svaan',
  },
  {
    number: '03',
    category: 'PERSONAL PROJECT',
    title: 'Personal portfolio',
    subtitle: 'A home for my work, experiments and progress.',
    description: 'A React-based portfolio focused on presenting my frontend experience, selected work and the direction I am growing towards.',
    tags: ['React', 'Vite', 'CSS'],
    href: 'https://sureshkumar-iota.vercel.app/',
    action: 'View current site',
    visual: 'portfolio',
  },
]

function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function ProjectVisual({ type }) {
  if (type === 'garage') return (
    <div className="visual visual-garage" aria-hidden="true">
      <div className="visual-window"><div className="window-top"><i /><i /><i /><span>WORKSHOP / OVERVIEW</span></div><div className="garage-ui"><div className="garage-side"><b>BV.</b><i /><i /><i /><i /></div><div className="garage-main"><span className="ui-kicker">GOOD MORNING</span><b>Workshop overview</b><div className="ui-stats"><i /><i /><i /></div><div className="ui-lines"><i /><i /><i /></div></div></div></div>
      <span className="visual-caption">WORKSHOP OPERATIONS / 01</span>
    </div>
  )
  if (type === 'svaan') return (
    <div className="visual visual-svaan" aria-hidden="true">
      <div className="svaan-orb orb-a" /><div className="svaan-orb orb-b" /><span className="svaan-word">SVaaN<span>.</span></span><span className="svaan-caption">TECHNOLOGY &amp; STRATEGY</span><div className="svaan-grid" />
    </div>
  )
  return (
    <div className="visual visual-portfolio" aria-hidden="true">
      <div className="portfolio-browser"><div className="browser-bar"><i /><i /><i /><span> s-kumar / portfolio</span></div><div className="browser-content"><span>HELLO, I'M SURESH</span><b>Building digital<br /><em>experiences.</em></b><i className="browser-line" /><div className="browser-blocks"><i /><i /><i /></div></div></div>
      <span className="visual-caption">PERSONAL SPACE / 03</span>
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
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:sureshkumarmr2004@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className={dark ? 'site theme-dark' : 'site theme-light'}>
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>suresh<span className="brand-dot">.</span><span className="brand-mark">/ portfolio</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['About', 'Experience', 'Work', 'Skills'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle colour theme"><span>{dark ? '☼' : '◐'}</span><small>{dark ? 'LIGHT' : 'DARK'}</small></button>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <Arrow diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-main">
            <div className="availability"><span className="availability-dot" /> AVAILABLE FOR THE RIGHT OPPORTUNITY</div>
            <p className="hero-overline">WEB SOLUTIONS ENGINEER <span>·</span> FRONTEND DEVELOPER</p>
            <h1>Ideas into<br /><span>digital reality<span className="lime-period">.</span></span></h1>
            <div className="hero-bottom">
              <p className="hero-description">I'm Suresh Kumar, a frontend developer who enjoys building thoughtful web experiences with JavaScript, React and a sharp eye for the details.</p>
              <div className="hero-links"><a className="primary-link" href="#work">Explore selected work <Arrow diagonal /></a><a className="secondary-link" href="#contact">Get in touch <Arrow /></a></div>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract interactive-inspired visual">
            <div className="art-grid" /><div className="art-ring ring-one" /><div className="art-ring ring-two" />
            <div className="art-center"><span className="art-bracket">&lt;</span><span>SK</span><span className="art-bracket">/&gt;</span></div>
            <div className="art-chip chip-top"><i /> REACT / JAVASCRIPT</div>
            <div className="art-chip chip-bottom">DESIGNING <span>×</span> BUILDING</div>
            <span className="art-coordinate">09°N · 78°E</span>
          </div>
          <div className="hero-foot"><span>BASED IN INDIA</span><span className="foot-line" /><span>SCROLL TO EXPLORE <b>↓</b></span><span className="hero-index">01 — 05</span></div>
        </section>

        <div className="ticker" aria-label="Areas of focus"><div className="ticker-track">{Array.from({ length: 2 }).map((_, i) => <span key={i}>FRONTEND DEVELOPMENT <b>✳</b> REACT &amp; JAVASCRIPT <b>✳</b> RESPONSIVE EXPERIENCES <b>✳</b> CONTINUOUS LEARNING <b>✳</b></span>)}</div></div>

        <section className="section-wrap about-section" id="about">
          <div className="section-topline"><span>01 / A LITTLE ABOUT ME</span><span>THE PERSON BEHIND THE PIXELS</span></div>
          <div className="about-layout"><h2>Curiosity is<br />part of the <em>process.</em></h2><div className="about-copy"><p className="about-lead">I like understanding how things work, then making them work better for the people using them.</p><p>I'm a Web Solutions Engineer at SVaaN Global Tech. My work spans website development and maintenance, responsive UI checks and solving everyday website issues. Alongside that, I'm building my skills in React and JavaScript to move further into frontend and web application development.</p><div className="about-facts"><div><span>EDUCATION</span><b>B.Sc. Computer Science</b></div><div><span>FOCUS</span><b>Frontend &amp; React</b></div><div><span>APPROACH</span><b>Learn by building</b></div></div></div></div>
        </section>

        <section className="experience-section" id="experience"><div className="section-wrap">
          <div className="section-topline"><span>02 / EXPERIENCE</span><span>GROWTH THROUGH REAL WORK</span></div>
          <div className="experience-layout"><h2>Where I've<br /><em>been building.</em></h2><article className="experience-card"><div className="experience-meta"><span>2024 — PRESENT</span><span className="current-label"><i /> CURRENT ROLE</span></div><h3>Web Solutions Engineer</h3><p className="experience-company">SVaaN Global Tech <Arrow diagonal /></p><p className="experience-description">Working across website development and maintenance, supporting responsive experiences, website updates and practical quality checks.</p><ul><li>Build and update website interfaces using frontend technologies.</li><li>Maintain CMS-based websites and support content and platform updates.</li><li>Test responsive layouts, navigation and forms across screen sizes.</li></ul><div className="experience-tags"><span>HTML &amp; CSS</span><span>JavaScript</span><span>React</span><span>CMS</span></div></article></div>
        </div></section>

        <section className="work-section" id="work"><div className="section-wrap">
          <div className="section-topline"><span>03 / SELECTED WORK</span><span>A FEW THINGS I'VE WORKED ON</span></div>
          <div className="work-heading"><h2>Made with intent.<br /><em>Built to be useful.</em></h2><p>A selection of professional website work and personal projects. Each one represents a different part of my learning and development journey.</p></div>
          <div className="project-grid">{projects.map(project => <article className={`project-card project-${project.visual}`} key={project.number}>
            <ProjectVisual type={project.visual} />
            <div className="project-content"><div className="project-meta"><span>{project.category}</span><span>{project.number} / 03</span></div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><div className="project-bottom"><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.status ? <span className="project-status">{project.status}</span> : <a href={project.href} target="_blank" rel="noreferrer">{project.action} <Arrow diagonal /></a>}</div></div>
          </article>)}</div>
        </div></section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-topline"><span>04 / MY TOOLKIT</span><span>TOOLS I WORK WITH &amp; LEARN</span></div>
          <div className="skills-layout"><h2>The right tool<br />for the <em>job.</em></h2><div className="skills-content"><p>My toolkit keeps evolving. These are the technologies and tools I currently use across work and personal projects.</p>{skills.map(group => <div className="skill-row" key={group.label}><span>{group.label}</span><div>{group.items.map(item => <b key={item}>{item}</b>)}</div></div>)}</div></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-wrap">
          <div className="contact-copy"><div className="section-topline"><span>05 / YOUR TURN</span><span>LET'S CONNECT</span></div><h2>Have something<br />in <em>mind?</em></h2><p>I'm open to connecting with teams, recruiters and people building useful things for the web. Tell me what you're working on.</p><a className="contact-email" href="mailto:sureshkumarmr2004@gmail.com">sureshkumarmr2004@gmail.com <Arrow diagonal /></a></div>
          <form className="contact-form" onSubmit={submitContact}><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="How should I call you?" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>A little about your idea<textarea required rows="3" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="What's on your mind?" /></label><button type="submit">Send an enquiry <Arrow diagonal /></button><span className="form-note">Opens your email app with your message ready to send.</span></form>
        </div></section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home">suresh<span className="brand-dot">.</span></a><span className="footer-note">Designed with curiosity. Built with code.</span><div className="footer-socials"><a href="https://github.com/Suresh4000/" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a><a href="https://linkedin.com/in/suresh-kumar-m/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a></div><span className="copyright">© {new Date().getFullYear()} SURESH KUMAR</span></footer>
    </div>
  )
}

export default App
