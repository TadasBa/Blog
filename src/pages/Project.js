// src/pages/Project.js
import React from 'react';
import { useParams } from 'react-router-dom';
import 'C:\\Univerity\\Portfolio\\my-blog\\src\\project.css';
import { Link } from 'react-router-dom'; // Import the Link component
import backIcon from 'C:\\Univerity\\Portfolio\\my-blog\\src\\img\\back.svg'; // Import the image


const Project = () => {
  const { projectId } = useParams();

  // You can replace this with real project data based on projectId
  const projectData = {
    title: `Project ${projectId}`,
    description: `This is a detailed description of project ${projectId}.`,
    photos: [
      // Add paths to your images here
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
    tutorial: `This is the tutorial for project ${projectId}.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
  };

  return (
    <div className="project-details">
      <Link to="/Projects" aria-label="back">
        <img src={backIcon} alt="back" id="backIcon" />
        BACK
      </Link>
      <h1>{projectData.title}</h1>
      <div className="project-images">
        {projectData.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Project ${projectId}`} />
        ))}
      </div>
      <p>{projectData.description}</p>
      <h3>Tutorial:</h3>
      <p>{projectData.tutorial}</p>
      <h4>Tags:</h4>
      <div className="tags">
        {projectData.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Project;
