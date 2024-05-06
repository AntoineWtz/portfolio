// Projects.js

import React from 'react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import portfolio from '../img/img-project/portfolio.png';
import beecloon from '../img/img-project/beecloon.png';
import opus from '../img/img-project/opus.png';
import maison_ayele from '../img/img-project/maison_ayele.png';
import plateformeacc from '../img/img-project/plateformeacc.png';
import '../styles/Projects.css';

const Projects = () => {
  const initialProjectsToShow = 3;
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React. CSS effects, animations, responsive.',
      imageUrl: portfolio,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 2,
      title: 'Bee Cloon - E-commerce',
      description: 'An e-commerce web application built with PHP and Wordpres. Pack building feature, click and collect.',
      imageUrl: beecloon,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 3,
      title: 'Opus Musiques - Media',
      description: 'Web media for music lovers. Built with Laravel and Tailwind. Backend management, user authentication.',
      imageUrl: opus,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 4,
      title: 'Maison Ayele',
      description: 'Fixing out of stock issues on the website and adding new features. Built with PHP and Wordpress.',
      imageUrl: maison_ayele,
      projectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    },
    {
      id: 5,
      title: 'Plateforme Accompagnement',
      description: 'A diary of artists and events that accompany and support Réunionese authors. Built with PHP and Wordpress.',
      imageUrl: plateformeacc,
      rojectLink: 'lien_vers_le_projet',
      codeLink: 'lien_vers_le_code_source'
    }
  ];

  const handleReadMore = () => {
    setProjectsToShow(projectsToShow + 3);
  };

  return (
    <section className="projects">
      <h2>Work</h2>
      <p className='section-infos'>Here are some of the personal and corporate projects I've enjoyed doing.</p>
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
