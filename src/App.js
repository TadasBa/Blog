import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './style.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';

function App() {
  useEffect(() => {
    // Create a div for the hover effect
    const hoverEffect = document.createElement('div');
    hoverEffect.classList.add('cursor-hover-effect');
    document.body.appendChild(hoverEffect);

    // Update the position of the effect based on mouse movement
    const updateHoverEffectPosition = (e) => {
      hoverEffect.style.left = `${e.pageX}px`; // Update left position
      hoverEffect.style.top = `${e.pageY}px`; // Update top position
    };

    document.addEventListener('mousemove', updateHoverEffectPosition);

    // Add active effect on mouse enter
    const handleMouseEnter = () => {
      hoverEffect.classList.add('active-effect');
    };

    // Remove active effect on mouse leave
    const handleMouseLeave = () => {
      hoverEffect.classList.remove('active-effect');
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', updateHoverEffectPosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.body.removeChild(hoverEffect); // Remove hover effect element
    };
  }, []);

  return (
    <Router>
      <div className="container">
        {/* Uncomment if you want to use the Header component */}
        {/* <header><Header /></header> */}
        <div className="main-content">
          <nav className="sidebar">
            <h1>Tadas Baltrūnas</h1>
            <h2>Software Engineering Student</h2>
            <ul>
              <li><Link to="/">ABOUT</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
              <li><Link to="/projects">PORTFOLIO</Link></li>
            </ul>
          </nav>
          <main className="content">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
