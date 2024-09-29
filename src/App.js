import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './style.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import githubIcon from './img/github.svg'; // Import the image
import emailIcon from './img/email.svg'; // Import the image
import linkedinIcon from './img/linkedin.svg'; // Import the image

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
        <div className="main-content">
          <nav className="sidebar">
            <div className="main-headers">
              <h1>Tadas Baltrūnas</h1>
              <h3>Software Developer & Student</h3>
              <h4>Passionate about coding and continuous learning in tech.</h4>
              <br></br>
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
              </ul>
              <div className="social-icons">
                <a href="https://github.com/TadasBa" target="_blank" aria-label="GitHub">
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="mailto:tadas@baltrunas.lt" target="_blank" aria-label="Email">
                    <img src={emailIcon}  alt="Email" />
                </a>
                <a href="https://www.linkedin.com/in/tadasba/" target="_blank" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </div>

            </div>
          </nav>
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
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
