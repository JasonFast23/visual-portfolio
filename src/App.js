import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
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
      </Routes>
    </Router>
  );
}

export default App;
