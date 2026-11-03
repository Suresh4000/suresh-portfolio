import { useState } from 'react'

const skills = [
  { group: 'Frontend', items: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'] },
  { group: 'Web & CMS', items: ['WordPress', 'Shopify CMS', 'Responsive Design', 'Website Maintenance'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Cursor', 'Antigravity', 'Figma'] },
]

const projects = [
  {
    number: '01',
    type: 'Web application · In development',
    title: 'Bay View Garage Management System',
    description: 'A multi-location garage management platform planned to bring day-to-day workshop operations into one place, with a focus on core workflows first.',
    tags: ['React', 'Web Application', 'Multi-location'],
    status: 'In development',
  },
  {
    number: '02',
    type: 'Corporate website · Work experience',
    title: 'SVaaN Global Tech',
    description: 'Contributed to the company website and ongoing website development and maintenance work, including responsive checks and content updates.',
    tags: ['Web Development', 'Responsive UI', 'Website Maintenance'],
    link: 'https://svaantech.com/',
    linkLabel: 'Visit website',
  },
  {
    number: '03',
    type: 'Personal project',
    title: 'Portfolio Website',
    description: 'A personal space to present my frontend skills, practical work, and the web experiences I build as I continue growing as a developer.',
    tags: ['React', 'Vite', 'CSS'],
    link: 'https://sureshkumar-iota.vercel.app/',
    linkLabel: 'View current portfolio',
  },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [dark, setDark] = useState(false)
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
    <div className={dark ? 'site dark' : 'site'}>
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>SK<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle colour theme">{dark ? '☀' : '◐'}</button>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <Arrow diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> WEB SOLUTIONS ENGINEER <span className="eyebrow-line" /></div>
            <h1>Building thoughtful<br /><em>digital experiences.</em></h1>
            <p className="hero-lead">I'm Suresh Kumar — a frontend developer focused on JavaScript, React, and creating responsive websites and useful web applications.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <Arrow /></a>
              <a className="text-link" href="#contact">Let's discuss a project <Arrow diagonal /></a>
            </div>
            <div className="hero-meta">
              <span>BASED IN INDIA</span><span>·</span><span>OPEN TO OPPORTUNITIES</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract decorative graphic">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-core"><span>SK</span><i>✳</i></div>
            <div className="art-label label-top">DESIGN <b>+</b> DEVELOPMENT</div>
            <div className="art-label label-bottom">LEARN · BUILD · IMPROVE</div>
            <span className="art-cross cross-one">＋</span><span className="art-cross cross-two">✳</span>
          </div>
          <a className="scroll-note" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-band">
          <div className="section-wrap band-inner"><span>WHAT I CARE ABOUT</span><p>Clear interfaces. Useful functionality. <strong>Experiences that work for people.</strong></p><span className="band-mark">✳</span></div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Developer by practice.<br /><em>Curious by nature.</em></h2></div>
          <div className="about-grid">
            <p className="about-statement">I enjoy turning ideas into clean, accessible, and responsive web experiences.</p>
            <div className="about-detail">
              <p>I'm a Web Solutions Engineer at SVaaN Global Tech, where I work on website development and maintenance. My day-to-day experience has helped me build a practical foundation in frontend development, responsive layouts, and solving real website issues.</p>
              <p>I'm currently deepening my React and JavaScript skills and working towards building more complete web applications.</p>
              <div className="quick-facts"><div><span>EDUCATION</span><strong>B.Sc. Computer Science</strong></div><div><span>FOCUS</span><strong>Frontend Development</strong></div></div>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="experience">
          <div className="section-heading"><span className="section-index">02 / EXPERIENCE</span><h2>Learning through<br /><em>real work.</em></h2></div>
          <div className="timeline">
            <div className="timeline-date">2024 — PRESENT</div>
            <div className="timeline-main"><div className="timeline-title"><h3>Web Solutions Engineer</h3><span className="current-pill">CURRENT</span></div><p className="company">SVaaN Global Tech</p><p>Working across website development and maintenance, supporting responsive experiences, website updates, and practical quality checks.</p><ul><li>Work with frontend technologies including HTML, CSS, JavaScript, and React.</li><li>Maintain and update websites, including CMS-based platforms.</li><li>Check responsive layouts, navigation, and forms across screen sizes.</li></ul></div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading projects-heading"><span className="section-index">03 / SELECTED WORK</span><h2>Things I've worked on<br /><em>and am building.</em></h2><p>A mix of practical website work and personal application development. Project status is shown clearly.</p></div>
            <div className="project-list">
              {projects.map((project) => <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-info"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                <div className="project-action">{project.status && <span className="project-status">{project.status}</span>}{project.link && <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow diagonal /></a>}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading"><span className="section-index">04 / TOOLKIT</span><h2>Tools for the<br /><em>work at hand.</em></h2></div>
          <div className="skills-layout"><p className="skills-intro">The technologies and tools I use in my current work and learning journey.</p><div className="skill-groups">{skills.map(group => <div className="skill-group" key={group.group}><h3>{group.group}</h3><div className="skill-chips">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-wrap">
            <div className="section-heading"><span className="section-index">05 / CONTACT</span><h2>Have an idea?<br /><em>Let's make it real.</em></h2><p>Whether you're a recruiter, a team looking for a frontend developer, or have a website project in mind, I'd be glad to hear from you.</p><a className="email-link" href="mailto:sureshkumarmr2004@gmail.com">sureshkumarmr2004@gmail.com <Arrow diagonal /></a></div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>Your name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Name" /></label>
              <label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com" /></label>
              <label>How can I help?<textarea required rows="4" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell me a little about it..." /></label>
              <button className="button button-light" type="submit">Start a conversation <Arrow diagonal /></button>
              <span className="form-note">This opens your email app with the message prepared.</span>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home">SK<span>.</span></a><span>Designed & built with care.</span><div className="social-links"><a href="https://github.com/Suresh4000/" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a><a href="https://linkedin.com/in/suresh-kumar-m/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a></div><span className="copyright">© {new Date().getFullYear()} Suresh Kumar</span></footer>
    </div>
  )
}

export default App