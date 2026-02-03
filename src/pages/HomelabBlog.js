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
                <h1 className="blog-post-title">Christmas Special: When I got my First Homelab</h1>
                <div className="blog-post-date">December 25, 2025</div>
                <div className="blog-tags">
                  <span className="blog-tag">Homelab</span>
                  <span className="blog-tag">Self-hosting</span>
                  <span className="blog-tag">Hardware</span>
                  <span className="blog-tag">Docker</span>
                  <span className="blog-tag">Linux</span>
                  <span className="blog-tag">Networking</span>
                  <span className="blog-tag">Storage</span>
                  <span className="blog-tag">Privacy</span>
                  <span className="blog-tag">Cost-Savings</span>
                </div>
              </div>
            </header>

      <article className="blog-post-content">
        <p className="blog-post-intro">
          This is the story of how cloud storage pricing pushed me into building a quiet, always-on homelab that now runs everything I care about.
        </p>

        <h2>The Catalyst: My Cloud Storage Bill</h2>
        <p>
          It was a cold December morning when I opened my Google Drive invoice for the month. $29.99 for 2TB of storage. Again. 
          I stared at my screen, calculating how much I'd spent on cloud storage over the past year. Nearly $360 just for storing 
          my photos, documents, and random files that I "might need someday."
        </p>

        <p>
          That's when it hit me - I was essentially renting a computer in someone else's data center to hold my stuff. 
          What if I could just... own that computer?
        </p>

        <h2>The Research Rabbit Hole</h2>
        <p>
          Like any good engineer, I dove headfirst into research. YouTube became my university, with channels like 
          TechnoTim, NetworkChuck, and Craft Computing becoming my daily entertainment. I learned about NAS systems, 
          Proxmox, Docker containers, and the magical world of self-hosting.
        </p>

        <p>
          The more I learned, the more I realized that cloud storage was just the tip of the iceberg. People were running 
          their own Netflix (Plex/Jellyfin), their own Google Photos (PhotoPrism/Immich), their own Dropbox (Nextcloud), 
          and even their own smart home hubs (Home Assistant). The possibilities were endless.
        </p>

        <h2>Building My First Lab</h2>
        <p>
          After weeks of research and analysis paralysis, I finally pulled the trigger on my first homelab build:
        </p>

        <ul>
          <li><strong>CPU:</strong> Intel i5-12400 (6-core, low power consumption)</li>
          <li><strong>RAM:</strong> 32GB DDR4 (because RAM is cheap and Docker loves it)</li>
          <li><strong>Storage:</strong> 1TB NVMe SSD for the OS + 2x 4TB WD Red drives in RAID 1</li>
          <li><strong>Case:</strong> Fractal Design Node 202 (compact and whisper quiet)</li>
          <li><strong>OS:</strong> Proxmox VE (because virtualization is the way)</li>
        </ul>

        <p>
          Total cost: around $800. Less than three years of my Google Drive subscription, and I'd own it forever.
        </p>

        <h2>The Christmas Miracle</h2>
        <p>
          I spent Christmas Eve setting everything up. While my family was wrapping presents downstairs, I was in my room 
          carefully installing Proxmox, creating VMs, and setting up my first Docker containers. By midnight, I had:
        </p>

        <ul>
          <li>Nextcloud running for file storage and sync</li>
          <li>Immich handling all my photos with AI-powered face recognition</li>
          <li>Jellyfin streaming my movie collection</li>
          <li>Pi-hole blocking ads network-wide</li>
          <li>Home Assistant controlling my smart lights</li>
        </ul>

        <p>
          Christmas morning felt different. While my family was opening presents, I was showing them how our internet was 
          now ad-free, how they could access their files from anywhere, and how I could stream movies without buffering. 
          My mom's reaction when she saw her photos automatically organized by date and face was priceless.
        </p>

        <h2>Six Months Later: The Results</h2>
        <p>
          Fast forward to today, and my homelab has grown into something beautiful:
        </p>

        <ul>
          <li><strong>Storage:</strong> 8TB of usable space (way more than I ever had in the cloud)</li>
          <li><strong>Services:</strong> 20+ Docker containers running everything from password management to monitoring</li>
          <li><strong>Uptime:</strong> 99.7% (better than some cloud providers I've used)</li>
          <li><strong>Cost:</strong> ~$15/month in electricity (compared to $30/month for cloud storage alone)</li>
          <li><strong>Learning:</strong> Immeasurable. I've learned more about networking, Linux, and system administration in six months than in years of development work.</li>
        </ul>

        <h2>What I'd Do Differently</h2>
        <p>
          If I were starting over today, here's what I'd change:
        </p>

        <ul>
          <li><strong>Start smaller:</strong> A simple Raspberry Pi 4 with external storage would have been a great starter</li>
          <li><strong>Plan for expansion:</strong> I should have bought a case with more drive bays from the beginning</li>
          <li><strong>Network properly:</strong> Invest in a managed switch and proper network monitoring from day one</li>
          <li><strong>Backup strategy:</strong> Set up automated off-site backups immediately (I learned this the hard way)</li>
        </ul>

        <h2>The Unexpected Benefits</h2>
        <p>
          Beyond the cost savings, my homelab has given me something I didn't expect: peace of mind. I control my data. 
          I know where it is, who has access to it, and how it's being used. No more worrying about terms of service 
          changes or privacy policies.
        </p>

        <p>
          It's also made me a better developer. Understanding how services actually run, how networking works, and how 
          to troubleshoot complex systems has made me more valuable in my day job.
        </p>

        <h2>Should You Build a Homelab?</h2>
        <p>
          If you're curious about technology, enjoy learning, and want more control over your digital life, absolutely. 
          Start small - even a Raspberry Pi can teach you a lot. The rabbit hole is deep, but it's one of the most 
          rewarding technical journeys you can take.
        </p>

        <p>
          Just be warned: once you start self-hosting, it's hard to stop. My family now jokes that I'm running a 
          "data center" in my bedroom. They're not entirely wrong.
        </p>

        <p className="blog-post-outro">
          <em>Have questions about homelab setups or want to share your own journey? Feel free to reach out - I love 
          talking about this stuff!</em>
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