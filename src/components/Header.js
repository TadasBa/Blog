// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'C:\\Univerity\\Portfolio\\my-blog\\src\\style.css';

function Header() {
  return (
    <header className="header">
      <h1>My Blog</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;
