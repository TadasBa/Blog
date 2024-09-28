// src/pages/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    { id: 1, name: 'Project 1', description: 'Description of project 1.' },
    { id: 2, name: 'Project 2', description: 'Description of project 2.' },
  ];

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
