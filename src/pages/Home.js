import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();
  const [showResume, setShowResume] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? false : true;
  });
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleBlogClick = (blogPath) => {
    navigate(blogPath);
  };

  // Dynamically get the 2 most recent blog posts from Blog.js
  let blogPosts = [];
  try {
    // Blog.js exports a default Blog component, so we need to extract the blogPosts array logic here
    // For now, we duplicate the logic to keep the lists in sync
    blogPosts = [
      {
        id: 1,
        title: "Christmas Special: Setting up Ollama Gemma3 on the Jetson Orin Nano",
        description: "Slower than cloud APIs, but entirely ours.",
        date: "Janurary 4, 2026",
        dateSort: new Date("2026-01-04"),
        readTime: "4 min read",
        tags: ["Homelab", "Self-hosting", "Hardware"],
        path: "/blog/homelab"
      },
      {
        id: 2,
        title: "Building a Data Pipeline for a Nonprofit: When AI Isn't the Core Solution (But Still Adds Value)",
        description: "How I built a data pipeline for a nonprofit and learned that the best AI engineering sometimes means knowing when not to use AI.",
        date: "September 15, 2025",
        dateSort: new Date("2025-09-15"),
        readTime: "4 min read",
        tags: ["AI Engineering", "Internship", "Docker", "Data Pipeline"],
        path: "/blog/ai-tools"
      },
      {
        id: 3,
        title: "Building BruinLM: A Collective RAG System for UCLA Students",
        description: "During Fall quarter at UCLA, I built BruinLM—a personal agentic RAG system designed for students to upload course materials, search through them semantically, and interact with an AI agent trained on their collective knowledge base.",
        date: "December 4, 2025",
        dateSort: new Date("2025-12-04"),
        readTime: "6 min read",
        tags: ["RAG", "AI Engineering", "Collaboration", "UCLA"],
        path: "/blog/bruinlm"
      },
      {
        id: 4,
        title: "Setting Up OpenClaw: A Local AI Agent on AWS EC2",
        description: "How I set up OpenClaw (formerly Moltbot) on AWS EC2 to run a persistent, cloud-based automation agent with Discord and OpenAI integration.",
        date: "February 8, 2026",
        dateSort: new Date("2026-02-08"),
        readTime: "5 min read",
        tags: ["Automation", "Cloud", "AWS", "OpenClaw", "Discord", "OpenAI"],
        path: "/blog/openclaw"
      }
    ].sort((a, b) => b.dateSort - a.dateSort);
  } catch (e) {}
  const recentPosts = blogPosts.slice(0, 2);
  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <header className="top-header">
        <div className="top-nav-container">
          <nav className="top-nav">
            <a href="#about" className="top-nav-item active">home</a>
            <Link to="/projects" className="top-nav-item">projects</Link>
            <Link to="/blog" className="top-nav-item">blog</Link>
            <Link to="/contact" className="top-nav-item">contact</Link>
          </nav>
          <button onClick={() => setIsDark(!isDark)} className="top-theme-toggle" aria-label="Toggle theme">
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        </div>
      </header>

      <main className="main-content">
        <section id="about" className="section">
        <div className="about-container">
          <div className="about-text">
            <h2>Hi, I'm Jason</h2>
            <p className="description">
              AI engineer building RAG systems and multi-agent architectures.
            </p>
            <p className="subtitle">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Los Angeles, CA
            </p>
            <div className="cta-links">
              <button onClick={() => setShowResume(true)} className="resume-button">
                <span>Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </button>
              <a href="https://linkedin.com/in/jason-park-123202259" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/JasonFast23" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:jasonbruin23@ucla.edu" className="icon-link" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="about-image">
            <img src="/profile_pic.jpg" alt="Jason Park" className="profile-pic" />
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button 
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
        
        {activeTab === 'experience' ? (
          <div className="experience-list">
            <ExperienceCard 
              logo="/for-the-need-logo.png"
              title="AI Software Engineer Intern"
              company="For The Need Foundation"
              employmentType="Internship"
              location="Simi Valley, California, United States"
              locationType="Hybrid"
              period="Jul 2025 - Sep 2025"
              bullets={[
                "Built n8n JavaScript workflow to automate CRM data cleaning (duplicate merging, age updates, validation), replacing hours of manual Excel work per event with one-click execution",
                "Deployed workflow via Docker so staff could run data processing locally from their desktops"
              ]}
              skills={["Docker", "n8n", "+2 skills"]}
            />
            <ExperienceCard 
              logo="/2nd-godaddy-logo.png"
              logoClassName="godaddy-logo"
              title="Software Engineer Intern"
              company="GoDaddy"
              employmentType="Internship"
              location="Tempe, Arizona, United States"
              locationType="Remote"
              period="Jun 2023 - Aug 2023"
              bullets={[
                "Worked on sandbox projects, building small UI features and debugging frontend issues using React/TypeScript",
                "Created simple Node.js/Python API routes and learned development workflows (Git & code reviews)"
              ]}
              skills={["Git", "GitHub", "+8 skills"]}
            />
          </div>
        ) : (
          <div className="experience-list">
            <ExperienceCard 
              logo="/uclabruinslogo.png"
              logoClassName="ucla-logo"
              title="University of California, Los Angeles"
              company="Bachelor's in Computer Science and Linguistics"
              location="Los Angeles, CA"
              period="Sep 2024 - Jun 2026"
              description="Relevant Coursework: Data Structures & Algorithms, Software Engineering, Operating Systems, Computer Architecture, Databases, Machine Learning"
            />
          </div>
        )}
      </section>

      <section id="projects" className="section">
        <div className="featured-projects-header">
          <h2>featured projects</h2>
          <Link to="/projects" className="view-more-link">
            view more 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className="featured-projects-grid">
          <ProjectCard 
            title="AI RAG Eval"
            description="Evaluation framework for RAG systems with automated testing and performance metrics"
            tech={["Python", "aiohttp", "asyncio", "Claude API", "JSON", "Logging"]}
            github="https://github.com/JasonFast23/BruinLM-AI-Rag-Eval"
            image="/ai rag scale eval.png"
          />
          <ProjectCard 
            title="Multi-Agent Debate"
            description="Collaborative AI system where multiple agents engage in structured debates to reach consensus"
            tech={["JavaScript ES6+", "OpenAI API", "RESTful API", "HTML5 & CSS3"]}
            github="https://github.com/JasonFast23/multi-agent-debate"
            image="/ai historical debate.png"
          />
        </div>
      </section>

      <section id="blogs" className="section">
        <div className="featured-projects-header">
          <h2>recent posts</h2>
          <Link to="/blog" className="view-more-link">
            view more 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className="blogs-list">
          {recentPosts.map(post => (
            <div className="blog-card" key={post.id} onClick={() => handleBlogClick(post.path)}>
              <div className="blog-header">
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-meta">
                  <div className="blog-date">{post.date}</div>
                  <div className="blog-read-time">{post.readTime}</div>
                </div>
              </div>
              <p className="blog-description">{post.description}</p>
              <div className="blog-tags">
                {post.tags.slice(0, 3).map(tag => (
                  <span className="blog-tag" key={tag}>{tag}</span>
                ))}
                {post.tags.length > 3 && (
                  <span className="blog-tag">+{post.tags.length - 3}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-text">
            <span>© 2026 jasonpark23.com</span>
          </div>
          <div className="footer-links">
            <a href="https://linkedin.com/in/jason-park-123202259" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/JasonFast23" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:jasonbruin23@ucla.edu" className="footer-icon" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>


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
      </main>
    </div>
  );
}

function ProjectCard({ title, description, tech, github, image }) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer" className="view-repo-button">View Repository</a>
      </div>
    </div>
  );
}

function ExperienceCard({ logo, logoClassName, title, company, employmentType, location, locationType, period, duration, description, bullets, skills }) {
  return (
    <div className="experience-card">
      <div className="experience-main">
        {logo && (
          <div className={`experience-logo ${logoClassName || ''}`}>
            <img src={logo} alt={company} onError={(e) => e.target.style.display = 'none'} />
          </div>
        )}
        <div className="experience-content">
          <div className="experience-header">
            <div className="experience-title-section">
              <h3>{title}</h3>
              <p className="company-info">
                <span className="company-name">{company}</span>
                {employmentType && <span className="employment-type"> · {employmentType}</span>}
              </p>
              <p className="location-info">
                <span>{location}</span>
                {locationType && <span> · {locationType}</span>}
              </p>
            </div>
            <div className="experience-date-section">
              <p className="period-location">
                <span className="period">{period}</span>
                {duration && <span className="duration"> · {duration}</span>}
              </p>
            </div>
          </div>
          {bullets ? (
            <ul className="experience-bullets">
              {bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)}
            </ul>
          ) : description && (
            <p className="description">{description}</p>
          )}
          {skills && skills.length > 0 && (
            <div className="experience-skills">
              {skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;