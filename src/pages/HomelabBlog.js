import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomelabBlog = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? false : true;
  });

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

  return (

    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <header className="top-header">
        <div className="top-nav-container">
          <nav className="top-nav">
            <Link to="/" className="top-nav-item">home</Link>
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
        <section className="section">
          <Link to="/blog" className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Blog
          </Link>
          <div className="blog-post-container">
            <article className="blog-post-content">
              <img 
                src="/jetson.png"
                alt="Nvidia Jetson Orin Nano"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  margin: '0 auto 2rem auto',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
                }}
              />
              <h2>Setting Up Ollama Gemma 3 on the Nvidia Jetson Orin Nano</h2>
              <p>Over winter break, my dad gave me an Nvidia Jetson Orin Nano for Christmas. I was excited to finally gain hands-on experience with AI hardware, configuration, and deployment.</p>
              <p>He warned me upfront that the assembly would be manageable, but the software setup would feel long and tedious. He emphasized patience. That turned out to be accurate advice.</p>
              <h3>The Setup Process</h3>
              <p>The process involved configuring the Jetson's operating system, installing dependencies, setting up Ollama, then deploying the model.</p>
              <p>The hardware assembly itself felt straightforward. The challenge was the software configuration: installing the correct drivers, ensuring compatibility between components, working through dependency chains, and verifying that everything was properly configured before attempting to run a model.</p>
              
              <h3>Running the Model</h3>
              <p>Once the environment was configured, I ran my first local model:</p>
              <pre><code>ollama run gemma3:4b</code></pre>
              <p>This deployed Google's Gemma 3 model with 4 billion parameters—a relatively lightweight option suitable for the Jetson's hardware constraints.</p>
              <p>I used it as a personal chat assistant, asking general questions and testing its conversational capabilities. I wanted to evaluate performance and compare it against cloud-based models like Claude or GPT.</p>
              <h3>Performance Observations</h3>
              <p>The model worked, but the response latency was immediately noticeable. Compared to querying Claude or GPT through their APIs, the local model was significantly slower. Generation happened token by token at a visible pace.</p>
              <p>This wasn't surprising given the hardware limitations—the Jetson Orin Nano is an edge computing device optimized for efficiency and portability, not raw performance.</p>
              <p>Still, the model was ours. No API subscription costs. No per-token pricing. No dependency on external services. For experimentation, prototyping, or use cases where latency isn't critical, that independence has value.</p>
              <p>I wasn't building a production application, so the slower speed didn't matter. What mattered was understanding what local deployment actually entails—the constraints, the setup overhead, and the operational differences compared to calling an API.</p>
              
              <h3>Reflections on Local vs. Cloud AI</h3>
              <p>This experience clarified the practical distinctions between local and cloud-based AI deployment:</p>
              <ul>
                <li>Cloud models (Claude, GPT-4, etc.) offer speed, scalability, and minimal setup overhead. You pay for convenience and performance, but you're dependent on external infrastructure and ongoing costs.</li>
                <li>Local models offer control, privacy, and zero marginal cost per query. You pay upfront in hardware and setup time, and you're constrained by your device's computational resources.</li>
              </ul>
              <p>Neither is universally better. The right choice depends on the use case, budget, latency requirements, and data sensitivity.</p>
              <p>For my purposes—learning how local AI deployment works and gaining experience with edge hardware—the Jetson setup was exactly the right tool.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="contact-page-footer">
        <div className="contact-footer-content">
          <div className="contact-footer-text">
            <span>© 2026 jasonpark23.com</span>
          </div>
          <div className="contact-footer-links">
            <a href="https://linkedin.com/in/jason-park-123202259" target="_blank" rel="noopener noreferrer" className="contact-footer-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/jasonfast23" target="_blank" rel="noopener noreferrer" className="contact-footer-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:jason@example.com" className="contact-footer-icon" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m4 4 16 0 0 16-16 0z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomelabBlog;