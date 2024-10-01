// src/pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'C:\\Univerity\\Portfolio\\my-blog\\src\\projects.css';
import backIcon from 'C:\\Univerity\\Portfolio\\my-blog\\src\\img\\back.svg'; // Import the image


const Projects = () => {
  const projectList = [
    { id: 1, title: '3D Platformer Game in Unity', description: 'Description for Project 1', tags: ['HTML', 'CSS'] },
    { id: 2, title: 'POP3 Server with SQLite Database', description: 'Description for Project 2', tags: ['JavaScript'] },
    { id: 3, title: 'Mobile App PANTRY', description: 'Description for Project 3', tags: ['React', 'Node.js'] },
    { id: 4, title: 'Blog Creation using GitHub Pages', description: 'Description for Project 4', tags: ['React', 'Node.js'] },
    { id: 5, title: 'Mobile App Wireframing with Figma', description: 'Description for Project 5', tags: ['React', 'Node.js'] },
  ];

  return (
    <div className="projects-container">
      <header>
      <Link to="/" aria-label="Back">
        <img src={backIcon} alt="back" id="backIcon" />
        BACK
      </Link>
        <h1>My Projects</h1>
      </header>
      {projectList.map((project) => (
        <Link to={`/projects/${project.id}`} className="project-link" key={project.id}>
          <div className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
