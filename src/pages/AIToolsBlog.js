import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AIToolsBlog = () => {
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
            <header className="blog-post-header">
            </header>
            <article className="blog-post-content">
              <img 
                src="/fortheneed-intern.jpg"
                alt="For the Need Intern"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  margin: '0 auto 2rem auto',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
                }}
              />
              <h2>Building a Data Pipeline for a Nonprofit: When AI Isn't the Core Solution (But Still Adds Value)</h2>
              <p>During my internship at For the Need Foundation, I was tasked with solving a recurring data management problem. My supervisor, Allie, spent over an hour each week manually cleaning donor records exported from their NEON ONE CRM system. The sheets contained hundreds of entries with duplicates, formatting inconsistencies, and data errors that needed correction before being re-imported.</p>
              
              <h3>Initial Approach: API Integration</h3>
              <p>My first instinct was to connect n8n directly to NEON ONE's API. The plan was straightforward: authenticate using client credentials, pull the data, process it, then push it back.</p>
              <p>The authentication failed consistently. Despite testing various client ID and secret combinations over several days, I couldn't establish a connection. After a week of troubleshooting, I recognized this approach wasn't viable within my timeline and pivoted.</p>
              <h3>The Local Processing Solution</h3>
              <p>I revisited Allie's workflow description. She mentioned exporting sheets to her desktop before making edits—a detail that suggested an alternative path. If I could process files at the local level, I wouldn't need CRM API access at all.</p>
              <p>I designed a new n8n workflow using Python to monitor a designated download folder, process incoming spreadsheet files, clean the data based on predefined rules, and export a finalized version. I configured Allie's browser to save CRM exports directly to this folder, creating a seamless handoff point.</p>
                            <img 
                              src="/n8n workflow.png"
                              alt="n8n workflow screenshot"
                              style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                margin: '2rem auto',
                                borderRadius: '12px',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
                              }}
                            />
              <p>The challenge: n8n's cloud platform couldn't access local filesystems by default. This required a different infrastructure approach.</p>
              <h3>Docker Implementation</h3>
              <p>I containerized the solution using Docker with a local n8n instance, mounting it to Allie's downloads directory. This gave the workflow direct access to exported files.</p>
              <p>After configuring the container and migrating my Python automation, I ran a test with an actual export containing hundreds of donor records—emails, phone numbers, birthdays, addresses. The workflow processed everything in two to three seconds.</p>
              <p>I scheduled a demonstration with Allie to present the solution.</p>
              <h3>The AI Consideration</h3>
              <p>Before continuing, I should address the AI component—or initially, the lack of one.</p>
              <p>I'd wanted to leverage language models for this project. It seemed like a natural fit for data cleaning and transformation. I tested the approach using GPT-4o-mini and GPT-4o, processing sample sheets through the APIs.</p>
              <p>The economics didn't work.  The sheets were too large, and the token costs scaled poorly. Even accounting for more capable models like Claude Opus or Sonnet, the recurring API expenses would have been unreasonable for a nonprofit operating on limited resources.</p>
              <p>Deterministic Python code turned out to be more cost-effective and appropriate for the task. This was a straightforward data cleaning problem with well-defined rules.</p>
              <p>Still, I saw an opportunity to integrate AI meaningfully.</p>
              <h3>Adding a RAG Interface</h3>
              
              <p>While refactoring the Python workflow, I thought of a genuine use case for AI—a query interface.</p>
              <p>I implemented a local RAG system that operated on a subset of the data: records that had been modified or flagged during processing. Rather than forcing Allie and Julie to parse through filtered spreadsheets manually, they could query the system in natural language: "Show me new duplicate birthdays" or "Which entries were updated this week?"</p>
              <p>The RAG setup ran entirely locally using a vector database for relevant CRM information and a retrieval system for conversational interaction. No API costs, no external dependencies, no ongoing fees.</p>
              
              <h3>Deployment and Handoff</h3>
              <p>During my final presentation with Allie, I set up the Docker environment on her workstation, demonstrated the workflow execution process, and walked through the RAG query interface. After confirming that it worked, Allie tasked me with that setting up the same automation system for her co-worker, Julie.</p>
              <p>Both installations included local n8n accounts and configured Docker containers.</p>
              <h3>Reflection on Tooling Decisions</h3>
              
              
              <p>The internship was a lesson in engineering judgment. I realized that AI for automation problems isn't always warranted. The question isn't "Can AI solve this?" but rather "Is AI the most appropriate solution given the constraints and requirements?"</p>
              <p>In this case, AI played a supporting role rather than a central one.</p>
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
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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

export default AIToolsBlog;