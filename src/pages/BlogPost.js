// src/pages/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import backIcon from 'C:\\Univerity\\Portfolio\\my-blog\\src\\img\\back.svg'; // Import the image
import { Link } from 'react-router-dom';
import 'C:\\Univerity\\Portfolio\\my-blog\\src\\blog.css';

// Define your blog posts with custom content here
const blogPosts = [
  {
    id: 1,
    title: 'My First Blog Post',
    date: 'September 2024',
    content: (
      <>
        <p>This is my very first blog post! I'm sharing my journey of learning web development.</p>
        <p>More detailed content can go here...</p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Learning React Basics',
    date: 'October 2024',
    content: (
      <>
        <p>In this post, I dive into the basics of React, explaining components, state, and props.</p>
        <p>Content about React setup, usage, and more details here...</p>
      </>
    ),
  },
  // Add more blog posts as needed
];

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-details">
      <Link to="/blog-page" aria-label="Back"> {/* Updated route */}
        <img src={backIcon} alt="back" id="backIcon" />
        BACK
      </Link>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div className="blog-content">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;
