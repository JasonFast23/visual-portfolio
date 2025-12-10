import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [showResume, setShowResume] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }, [isDark]);

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <header className="header">
        <h1>Jason Park</h1>
        <nav className="social-nav">
          <a href="mailto:jasonbruin23@ucla.edu" aria-label="Email" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/jason-park-123202259" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://github.com/JasonFast23" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <button onClick={() => setIsDark(!isDark)} className="theme-toggle" aria-label="Toggle theme">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </nav>
      </header>

      <section id="about" className="section">
        <div className="profile-container">
          <img src="/profile_pic.jpg" alt="Jason Park" className="profile-img" />
          <div className="about-text">
            <h2>Jason Park</h2>
            <p>
              I'm a computer science student at UCLA interested in building 
              practical software solutions. I enjoy working on full-stack 
              web applications and iOS development.
            </p>
            <button onClick={() => setShowResume(true)} className="resume-button">Resume</button>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-list">
          <ExperienceCard 
            title="Marketing Consultant"
            company="Feliks and Max Cube Camp"
            location="Cerritos, CA (Hybrid)"
            period="Jun 2024 - Present"
            description="Advise on social media strategy and content planning for personal brand growth. Analyze engagement metrics using Google Analytics to optimize content performance."
          />
          <ExperienceCard 
            title="Software Engineer Intern"
            company="For the Need Foundation"
            location="Simi Valley, CA (Hybrid)"
            period="Jul 2025 - Sep 2025"
            description="Developed JavaScript workflow to automate manual CRM excel data cleaning process—duplicate account merging, age corrections, contact validation. Configured Docker setup enabling non-technical staff to execute workflow with single button click."
          />
          <ExperienceCard 
            title="Software Engineer Intern"
            company="GoDaddy"
            location="Tempe, AZ (Remote)"
            period="Jun 2023 - Aug 2023"
            description="Built UI components (forms, toggles, modals) in React + TypeScript sandbox environment. Created Node.js/Python API routes to support mock dashboard features."
          />
          <ExperienceCard 
            title="Legal Intern"
            company="Law Offices of Edward Y. Lee"
            location="Los Angeles, CA (In-Person)"
            period="Jun 2022 - Sep 2022"
            description="Supported attorneys and paralegals with case file organization and document review. Assisted with digitizing physical files into the firm's document management system."
          />
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard 
            title="BruinLM"
            description="Collaborative study platform with AI-powered knowledge bases using RAG"
            tech={["React", "Node.js", "PostgreSQL"]}
            github="https://github.com/JasonFast23/bruinlm"
          />
          <ProjectCard 
            title="MoodMate"
            description="iOS emotion recognition app for autistic children"
            tech={["Swift", "SwiftUI", "UIKit"]}
            github="https://github.com/JasonFast23/moodmate"
          />
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-carousel">
          <div className="skills-track">
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              <span>Java</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
              <span>C/C++</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
              <span>TypeScript</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              <span>Java</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
              <span>C/C++</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
              <span>TypeScript</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Let's Connect!</h2>
        <form className="contact-form" action="https://formspree.io/f/xanyqpqe" method="POST">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="contact-input"
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="contact-input"
            required
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            className="contact-textarea"
            rows="6"
            required
          />
          <button type="submit" className="contact-submit">Submit</button>
        </form>
        <div className="contact-links-bottom">
          <a href="mailto:jasonbruin23@ucla.edu">Email</a>
          <a href="https://linkedin.com/in/jason-park-123202259" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/JasonFast23" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>

      {showResume && (
        <div className="modal-overlay" onClick={() => setShowResume(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowResume(false)}>×</button>
            <iframe 
              src="/Jason_Park_Resume.pdf" 
              className="pdf-viewer"
              title="Resume"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-tags">
        {tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <a href={github} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
    </div>
  );
}

function ExperienceCard({ title, company, location, period, description }) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>{title}</h3>
          <p className="company">{company} • {location}</p>
        </div>
        <span className="period">{period}</span>
      </div>
      <p className="description">{description}</p>
    </div>
  );
}

export default App;
