// Projects.js

import React from 'react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import opus from '../img/img-project/opus.png';
import '../styles/Projects.css';

const Projects = () => {
  const initialProjectsToShow = 3; // Nombre initial de projets à afficher
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React.',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 2,
      title: 'E-commerce App',
      description: 'An e-commerce web application built with Laravel and Vue.js.',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    // Ajoute d'autres projets ici
    {
      id: 3,
      title: 'Opus Musiques',
      description: 'Media and blog website built with Laravel and Angular',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description 4',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description 5',
      imageUrl: opus,
      rojectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description 6',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'opqkidfshgiqehv giqejng iovqunghiopqv erhj,giop q,erghiopqurghnqeirg herio,guhvqneiorghureniovgherfdgdfgfdg dfgdfg sdf gdfgdf gdfgdf g f gdfg g dfgdf gdfiuwvxgh er',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 8,
      title: 'Project 8',
      description: 'Description 8',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 9,
      title: 'Project 9',
      description: 'Description 9',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 10,
      title: 'Project 10',
      description: 'Description 10',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    }
  ];

  const handleReadMore = () => {
    setProjectsToShow(projectsToShow + 3);
  };

  return (
    <section className="projects">
      <h2>WORK</h2>
      <div className="project-cards">
        {projects.slice(0, projectsToShow).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {projectsToShow < projects.length && (
        <button className="read-more-btn" onClick={handleReadMore}>
          Load more
        </button>
      )}
    </section>
  );
};

export default Projects;
