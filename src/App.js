import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import OpenClaw from './pages/OpenClaw';
import BruinLM from './pages/BruinLM';
import Contact from './pages/Contact';
import HomelabBlog from './pages/HomelabBlog';
import AIToolsBlog from './pages/AIToolsBlog';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/homelab" element={<HomelabBlog />} />
        <Route path="/blog/ai-tools" element={<AIToolsBlog />} />
        <Route path="/blog/bruinlm" element={require('./pages/BruinLM').default ? <BruinLM /> : null} />
        <Route path="/blog/openclaw" element={require('./pages/OpenClaw').default ? <OpenClaw /> : null} />
      </Routes>
    </Router>
  );
}

export default App;
