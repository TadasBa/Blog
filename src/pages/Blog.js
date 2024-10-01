// src/pages/Blog.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import backIcon from 'C:\\Univerity\\Portfolio\\my-blog\\src\\img\\back.svg'; // Import the image


function Blog() {
  const posts = [
    { id: 1, title: 'My First Blog Post', date: 'September 2024' },
    { id: 2, title: 'Learning React Basics', date: 'October 2024' },
  ];

  return (
    <div>
      <Link to="/" aria-label="Back">
        <img src={backIcon} alt="back" id="backIcon" />
        BACK
      </Link>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
