import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? false : true;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }, [isDark]);

  const handleBlogClick = (blogPath) => {
    navigate(blogPath);
  };

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <header className="top-header">
        <nav className="top-nav">
          <Link to="/" className="top-nav-item">home</Link>
          <Link to="/projects" className="top-nav-item">projects</Link>
          <Link to="/blog" className="top-nav-item active">blog</Link>
          <Link to="/" className="top-nav-item">contact</Link>
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
      </header>

      <main className="main-content">
        <section className="section">
          <div className="blog-page-container">
            <div className="blog-page-header">
              <h1 className="blog-page-title">my blog.</h1>
            </div>

            <div className="blog-page-grid">
              <BlogCard 
                title="Christmas Special: When I got my First Homelab"
                description="This is the story of how cloud storage pricing pushed me into building a quiet, always-on homelab that now runs everything I care about."
                date="December 25, 2025"
                readTime="8 min read"
                tags={["Homelab", "Self-hosting", "Hardware", "Docker", "Linux", "Networking", "Storage", "Privacy", "Cost-Savings"]}
                onClick={() => handleBlogClick('/blog/homelab')}
              />
              
              <BlogCard 
                title="My Quest for the Most Cost-Effective AI Tools"
                description="A personal journey of testing and comparing free, cheap, and value-oriented AI tools to see if they can match my corporate setup."
                date="November 16, 2025"
                readTime="12 min read"
                tags={["Agentic AI", "Developer-Tools", "Coding Assistant", "Claude", "GPT-4", "Cursor", "GitHub Copilot", "Cost Comparison"]}
                onClick={() => handleBlogClick('/blog/ai-tools')}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

function BlogCard({ title, description, date, readTime, tags, onClick }) {
  return (
    <div className="blog-card-grid" onClick={onClick}>
      <div className="blog-card-content">
        <div className="blog-card-header">
          <h3 className="blog-card-title">{title}</h3>
          <div className="blog-card-meta">
            <span className="blog-card-date">{date}</span>
            <span className="blog-card-separator">•</span>
            <span className="blog-card-read-time">{readTime}</span>
          </div>
        </div>
        
        <p className="blog-card-description">{description}</p>
        
        <div className="blog-card-tags">
          {tags.slice(0, 4).map(tag => <span key={tag} className="blog-tag">{tag}</span>)}
          {tags.length > 4 && <span className="blog-tag">+{tags.length - 4}</span>}
        </div>

        <div className="blog-card-actions">
          <span className="blog-read-more">Read Article →</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;