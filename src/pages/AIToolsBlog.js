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
              <div className="blog-post-meta">
                <h1 className="blog-post-title">My Quest for the Most Cost-Effective AI Tools</h1>
                <div className="blog-post-date">November 16, 2025</div>
                <div className="blog-tags">
                  <span className="blog-tag">Agentic AI</span>
                  <span className="blog-tag">Developer-Tools</span>
                  <span className="blog-tag">Coding Assistant</span>
                  <span className="blog-tag">Claude</span>
                  <span className="blog-tag">GPT-4</span>
                  <span className="blog-tag">Cursor</span>
                  <span className="blog-tag">GitHub Copilot</span>
                  <span className="blog-tag">Cost Comparison</span>
                </div>
              </div>
            </header>

      <article className="blog-post-content">
        <p className="blog-post-intro">
          A personal journey of testing and comparing free, cheap, and value-oriented AI tools to see if they can match my corporate setup.
        </p>

        <h2>The Corporate AI Paradise</h2>
        <p>
          At my internship, I have access to the dream setup: GitHub Copilot, ChatGPT Enterprise, Claude Pro, and a 
          handful of other premium AI tools. The company pays hundreds of dollars per month for my access, and honestly, 
          it's spoiled me. Code completion that actually works, conversations that don't hit usage limits, and models 
          that can handle complex reasoning tasks without breaking a sweat.
        </p>

        <p>
          But as a college student with a part-time income, replicating this setup at home would cost more than my 
          monthly rent. So I set out on a mission: find the most cost-effective AI tools that could give me 80% of 
          the capability at 20% of the cost.
        </p>

        <h2>The Testing Framework</h2>
        <p>
          I created a standardized testing approach across five categories:
        </p>

        <ul>
          <li><strong>Code Generation:</strong> Building a React component from scratch</li>
          <li><strong>Code Refactoring:</strong> Improving existing messy code</li>
          <li><strong>Debugging:</strong> Finding and fixing bugs in broken code</li>
          <li><strong>Documentation:</strong> Writing comprehensive docs for a complex function</li>
          <li><strong>Architecture Advice:</strong> High-level system design recommendations</li>
        </ul>

        <p>
          Each tool would be tested with the same prompts, and I'd rate them on accuracy, speed, context awareness, 
          and overall usefulness.
        </p>

        <h2>The Contenders</h2>

        <h3>Tier 1: Premium Options</h3>
        <ul>
          <li><strong>GitHub Copilot ($10/month):</strong> The gold standard for code completion</li>
          <li><strong>ChatGPT Plus ($20/month):</strong> GPT-4 access with higher limits</li>
          <li><strong>Claude Pro ($20/month):</strong> Anthropic's premium offering</li>
          <li><strong>Cursor Pro ($20/month):</strong> AI-powered IDE with Claude integration</li>
        </ul>

        <h3>Tier 2: Budget-Friendly</h3>
        <ul>
          <li><strong>Perplexity Pro ($20/month):</strong> AI search with coding capabilities</li>
          <li><strong>You.com ($15/month):</strong> Multi-model access at lower cost</li>
          <li><strong>Poe ($20/month):</strong> Multiple AI models in one subscription</li>
        </ul>

        <h3>Tier 3: Free Options</h3>
        <ul>
          <li><strong>ChatGPT Free:</strong> Limited GPT-3.5 access</li>
          <li><strong>Claude.ai Free:</strong> Limited Claude 3 Sonnet access</li>
          <li><strong>Google Bard:</strong> Free but often inconsistent</li>
          <li><strong>Bing Chat:</strong> GPT-4 powered, but limited context</li>
          <li><strong>Phind:</strong> Developer-focused free AI</li>
        </ul>

        <h2>The Surprising Results</h2>

        <h3>Best Overall Value: Claude.ai Free + Cursor Free</h3>
        <p>
          This combination shocked me. Claude's free tier gives you enough daily usage for most tasks, and its 
          reasoning ability is exceptional. Combined with Cursor's free tier (which includes basic AI code completion), 
          I could replicate about 70% of my corporate setup for $0/month.
        </p>

        <h3>Best Budget Premium: You.com Pro</h3>
        <p>
          At $15/month, You.com gives you access to GPT-4, Claude, and several other models. The interface isn't as 
          polished as ChatGPT Plus, but the model variety more than makes up for it. Plus, the search integration 
          is genuinely useful for finding up-to-date documentation.
        </p>

        <h3>Most Surprising Disappointment: GitHub Copilot Standalone</h3>
        <p>
          Without the context of other AI tools, Copilot felt limited. It's amazing for autocomplete and simple 
          functions, but struggles with complex reasoning or architectural discussions. For $10/month, I expected more.
        </p>

        <h2>The Real Game Changer: Local Models</h2>
        <p>
          Halfway through my testing, I discovered the world of local AI models. Using Ollama, I could run Llama 2, 
          Code Llama, and other models directly on my laptop. The setup was more complex, but the benefits were huge:
        </p>

        <ul>
          <li>Completely private - no data leaves my machine</li>
          <li>No usage limits or monthly costs</li>
          <li>Offline capability</li>
          <li>Customizable for specific use cases</li>
        </ul>

        <p>
          The catch? You need decent hardware (16GB+ RAM recommended) and the models aren't quite as capable as 
          GPT-4 or Claude Pro. But for many coding tasks, they're surprisingly good.
        </p>

        <h2>My Final Setup</h2>
        <p>
          After two months of testing, here's what I settled on:
        </p>

        <ul>
          <li><strong>Primary:</strong> Claude.ai Free for complex reasoning and architecture</li>
          <li><strong>Coding:</strong> Cursor Free + local Code Llama for autocomplete</li>
          <li><strong>Research:</strong> Perplexity Free for finding documentation</li>
          <li><strong>Fallback:</strong> ChatGPT Free when I hit Claude's daily limits</li>
          <li><strong>Total cost:</strong> $0/month</li>
        </ul>

        <h3>When I Need More Power</h3>
        <p>
          For major projects or when deadlines are tight, I'll subscribe to You.com Pro for a month. At $15, it's 
          cheaper than the alternatives and gives me access to premium models when I need them.
        </p>

        <h2>Lessons Learned</h2>

        <h3>1. Free Tiers Are Better Than Expected</h3>
        <p>
          The major AI companies are in an arms race for users, and that benefits us. The free tiers of Claude, 
          ChatGPT, and others are genuinely useful for most development tasks.
        </p>

        <h3>2. Diversity Beats Power</h3>
        <p>
          Having access to multiple models (even if they're not the latest) is often more valuable than having 
          unlimited access to one premium model. Different models excel at different tasks.
        </p>

        <h3>3. Local Models Are Underrated</h3>
        <p>
          The privacy, offline capability, and zero ongoing costs make local models compelling for many use cases. 
          The gap in capability is shrinking rapidly.
        </p>

        <h3>4. Context Is King</h3>
        <p>
          Tools like Cursor that can see your entire codebase provide much better suggestions than general-purpose 
          chatbots, even if the underlying model is less powerful.
        </p>

        <h2>The Three-Month Update</h2>
        <p>
          It's been three months since I switched to my budget setup, and I'm honestly surprised by how little I 
          miss the premium tools. My productivity hasn't dropped significantly, and I've learned to be more 
          intentional about when and how I use AI assistance.
        </p>

        <p>
          The biggest adjustment was learning to break down complex problems into smaller chunks that fit within 
          free tier limitations. Ironically, this has made me a better problem-solver overall.
        </p>

        <h2>Recommendations by Budget</h2>

        <h3>$0/month (Student Budget)</h3>
        <ul>
          <li>Claude.ai Free</li>
          <li>ChatGPT Free</li>
          <li>Cursor Free</li>
          <li>Local Ollama setup</li>
        </ul>

        <h3>$15/month (Tight Budget)</h3>
        <ul>
          <li>You.com Pro</li>
          <li>Cursor Free</li>
          <li>Local models for offline work</li>
        </ul>

        <h3>$35/month (Comfortable Budget)</h3>
        <ul>
          <li>Claude Pro</li>
          <li>GitHub Copilot</li>
          <li>Keep free alternatives as backups</li>
        </ul>

        <h2>The Future of Budget AI</h2>
        <p>
          The landscape is changing rapidly. Open-source models are getting better, local hardware is getting cheaper, 
          and companies are finding new ways to monetize AI beyond subscription fees. I expect the gap between free 
          and premium tools to continue shrinking.
        </p>

        <p>
          My advice? Start with free tools and upgrade incrementally. You might be surprised by how far you can get 
          without spending a dime.
        </p>

        <p className="blog-post-outro">
          <em>What's your experience with budget-friendly AI tools? I'm always looking for new options to test - 
          let me know what you've discovered!</em>
        </p>
      </article>
          </div>
        </section>
      </main>

      <footer className="contact-page-footer">
        <div className="contact-footer-content">
          <div className="contact-footer-text">
            <span>© 2026 jasonpark.com</span>
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