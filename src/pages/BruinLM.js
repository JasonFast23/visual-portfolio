
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BruinLM = () => {
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
                src="/bruinLM-title.png"
                alt="BruinLM Title"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  margin: '0 auto 2rem auto',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
                }}
              />
              <h2>Building BruinLM: A Collective RAG System for UCLA Students</h2>
              
              <section>
                <p>During Fall quarter at UCLA, I built BruinLM—a personal agentic RAG system designed for students to upload course materials, search through them semantically, and interact with an AI agent trained on their collective knowledge base. The project started as an experiment with n8n workflows, evolved into a full-stack web application for my CS35L Software Construction class, and became a lesson in both RAG architecture and collaborative development.</p>
                <p>The concept was straightforward: create a system where UCLA students could upload PDFs of lecture notes, textbooks, and study materials into a centralized database. Anyone could benefit from the collective knowledge—searching across documents uploaded by others while maintaining their own private chat sessions. Think NotebookLM, but collaborative.</p>
                <h3>From n8n to Code</h3>
                                <img 
                                  src="/rag agent.png"
                                  alt="RAG Agent Workflow"
                                  style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto',
                                    margin: '2rem auto',
                                    borderRadius: '12px',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
                                  }}
                                />
                <p>My first rag agent setup on n8n used OpenAI's text-embedding-3-small model, Supabase for data storage, and PostgreSQL for memory management. I tested different methods for ingesting PDFs—drag-and-drop uploads, direct URL imports, even email ingestion. I also added Cohere's re-ranking API and metadata filtering to improve retrieval accuracy.</p>
                <p>When I enrolled in a Software Construction class and learned we'd need to build a web application as our final project, I saw an opportunity to use my n8n prototype.</p>
                
                <h3>The Technical Stack</h3>
                                <img 
                                  src="/exampleclass.png"
                                  alt="Example Class Screenshot"
                                  style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto',
                                    margin: '2rem auto',
                                    borderRadius: '12px',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
                                  }}
                                />
                <p>The backend handles document ingestion, embedding generation, and retrieval. Here's how it works:</p>
                <ul>
                  <li><strong>Document Processing:</strong> Users upload PDFs through the web interface. The backend extracts text, chunks it into manageable segments, and sends each chunk to OpenAI's API for embedding generation using text-embedding-3-small.</li>
                  <li><strong>Storage:</strong> Supabase (built on PostgreSQL) stores the embeddings alongside document metadata—course name, upload date, user ID. This metadata becomes critical later for filtering and re-ranking results.</li>
                  <li><strong>Retrieval:</strong> When a user asks a question, the system generates an embedding for the query, performs a similarity search against the stored embeddings, retrieves the most relevant chunks, and feeds them into GPT-4o-mini as context for response generation.</li>
                </ul>
                <p>The frontend is built in React with components for file uploads, chat input, and PDF viewing. The chat interface connects to the backend via WebSocket for real-time interaction with the agent.</p>
                <h3>RAG Methods and Performance Tradeoffs</h3>
                <p>While building BruinLM, I learned that there were multiple RAG approach I could use.</p>
                <p>I initially experimented with agentic RAG—where the system doesn't just retrieve and respond, but can plan multi-step queries, call tools, and refine its search strategy dynamically. This felt like the cutting-edge approach.</p>
                <p>At the same time, my Algorithms and Complexity class taught me how to use Big O notation and time complexity analysis to measure the performance of different RAG strategies.</p>
                <p>I realized Agentic RAG has variable time complexity that scales with the number of tool calls and the amount of data being processed. If the agent decides it needs to search multiple times, rewrite queries, or analyze documents iteratively, the response time becomes unpredictable—especially as the document corpus grows.</p>
                <p>I found that Semantic search had more consistent performance. You generate one embedding, run one similarity search, retrieve a fixed number of top results, and generate a response. The time complexity seemed more predictable and scaled better with dataset size.</p>
                <p>Given that I was using GPT-4o-mini—a cost-efficient model—and targeting a use case where students expect reasonably fast responses during study sessions, semantic search was the more appropriate choice.</p>
                <p>I also integrated techniques I'd learned from n8n experimentation: re-ranking using Cohere's API to improve result relevance, and metadata filtering to allow users to narrow searches by course or document type. These additions improved accuracy without sacrificing the speed benefits of semantic search.</p>
                
                <h3>The Presentation and the Question</h3>
                <p>I presented BruinLM in class at the end of the quarter. The app was fully functional—students could upload PDFs, search semantically across the collective database, and chat with an agent that drew from everyone's uploaded materials while maintaining private conversation threads.</p>
                <p>During Q&A, someone asked: "How is this different from NotebookLM?"</p>
                <p>I explained that BruinLM is collaborative in the sense that you can benefit from PDFs uploaded by other students, not just your own.</p>
                <p>Still, the question stuck with me long after the presentation ended.</p>
                <p>I realized I'd undersold the core value proposition in the presentation. I'd focused on the technical implementation—semantic search, embeddings, RAG architecture—when I should have led with the collaborative angle. The whole point of BruinLM wasn't just to build another document chat interface. It was to create a collective intelligence system where each user's uploads improve the experience for everyone else.</p>
                
                
              </section>
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

export default BruinLM;
