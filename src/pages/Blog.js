// src/pages/Blog.js
import React from 'react';

function Blog() {
  const posts = [
    { id: 1, title: 'My First Blog Post', date: 'September 2024' },
    { id: 2, title: 'Learning React Basics', date: 'October 2024' },
  ];

  return (
    <div>
      <h2>Blog Posts</h2>
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
