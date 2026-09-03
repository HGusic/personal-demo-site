import './App.css'

const education = [
  {
    school: 'The University of Texas at Dallas',
    degrees: [
      {
        name: 'M.S. in Computer Science',
        detail: 'Focus in Data Science & Artificial Intelligence',
        dates: 'May 2021 — August 2022',
      },
      {
        name: 'B.S. in Computer Science',
        detail: 'Magna Cum Laude · Academic Excellence Scholar',
        dates: 'August 2018 — May 2021',
      },
    ],
  },
  {
    school: 'Amazon Web Services',
    degrees: [
      {
        name: 'AWS Solutions Architect Associate',
        dates: 'July 2026',
      },
    ],
  },
]

const experience = [
  {
    company: 'Fujitsu',
    role: 'Software Development Engineer III',
    location: 'Dallas, Texas',
    dates: 'January 2025 — June 2026',
  },
  {
    company: 'Fujitsu',
    role: 'Software Development Engineer II',
    location: 'Dallas, Texas',
    dates: 'August 2022 — January 2025',
  },
]

const projects = [
  {
    title: 'RAG for EU4',
    description:
      'Ask questions about Europa Universalis 4 strategy game using the wiki — type a question in your browser instead of searching pages yourself. Built with a wiki ingestion pipeline, retrieval-augmented generation, and a Dockerized local stack.',
    tech: 'Python · RAG · Docker · Ollama',
    href: 'https://github.com/HGusic/eu4-RAG',
  },
  {
    title: 'Job Application Agent',
    description:
      'Personal application auto-filler that allows a user to quickly auto fill job applications. Uses rule-based mapping for most fields that can be expanded as used. Ollama is used to auto fill essay questions such as "Tell me about yourself" or "Why do you want to work here".',
    tech: 'Python · Playwright · LangChain · Ollama',
    href: 'https://github.com/HGusic/job-app-agent',
  },
  {
    title: 'Weather REST Service',
    description:
      'Desktop weather app that shows accurate results for any U.S. location by city name or zip code. Calls The Weather Channel REST APIs, parses JSON with GSON into Java objects, and presents results in a Swing UI.',
    tech: 'Java · GSON · Swing · REST APIs',
    href: 'https://github.com/HGusic/weather-rest-service',
  },
]

function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="#top">
          Software Engineer
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1 className="hero-name">Haris</h1>
          <p className="hero-lead">
            I build reliable systems, solutions, and data driven tools.
          </p>
          <div className="hero-actions">
            <a
              className="button"
              href="https://github.com/HGusic"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button-ghost"
              href="https://www.linkedin.com/in/harisgusic123"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            Software engineer with ~4 years of experience at one of the
            world’s largest network services providers. Led teams on multiple
            projects delivering reliable systems across the full software
            development lifecycle. Passionate about personal projects to expand
            my knowledge base.
          </p>

          <div className="about-experience">
            <h3>Experience</h3>
            <ul className="exp-list">
              {experience.map((job) => (
                <li key={`${job.company}-${job.role}`} className="exp-item">
                  <div className="exp-top">
                    <div>
                      <h4>{job.role}</h4>
                      <p className="exp-meta">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <span className="exp-dates">{job.dates}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-education">
            <h3>Education</h3>
            <ul className="edu-list">
              {education.map((item) => (
                <li key={item.school} className="edu-item">
                  <h4>{item.school}</h4>
                  <ul className="edu-degrees">
                    {item.degrees.map((degree) => (
                      <li key={degree.name} className="edu-degree-row">
                        <div className="edu-degree-text">
                          <span className="edu-degree">{degree.name}</span>
                          {degree.detail ? (
                            <span className="edu-degree-detail">{degree.detail}</span>
                          ) : null}
                        </div>
                        <span className="edu-dates">{degree.dates}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.title} className="project">
                <div className="project-body">
                  <div className="project-top">
                    <h3>{project.title}</h3>
                    {project.href !== '#' ? (
                      <a
                        className="button project-button"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View on GitHub
                      </a>
                    ) : null}
                  </div>
                  <p>{project.description}</p>
                  <span className="tech">{project.tech}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Open to interesting problems and collaborations.</p>
          <ul className="contact-list">
            <li>
              <a href="mailto:harisgusic.cs@gmail.com">harisgusic.cs@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/HGusic" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/harisgusic123"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Haris</p>
      </footer>
    </div>
  )
}

export default App
