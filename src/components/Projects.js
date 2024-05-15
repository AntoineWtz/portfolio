// Projects.js

import React from 'react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import portfolio from '../img/img-project/portfolio.png';
import beaulieu from '../img/img-project/gite-beaulieu.png';
import beecloon from '../img/img-project/beecloon.png';
import opus from '../img/img-project/opus.png';
import todolist from '../img/img-project/todolist.png';
import maison_ayele from '../img/img-project/maison_ayele.png';
import quiz from '../img/img-project/quiz-app.png';
import systemik from '../img/img-project/systemikrh.png';
import '../styles/Projects.css';

const Projects = () => {
  const initialProjectsToShow = 3;
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      description: 'My personal portfolio website built with React. CSS effects, animations, responsive.',
      imageUrl: portfolio,
      projectLink: 'https://antoinewtz.github.io/portfolio-react/',
      codeLink: 'https://github.com/AntoineWtz/portfolio-react'
    },
    {
      id: 2,
      title: 'Gîte du Beaulieu',
      description: 'A booking web application for a cottage. Built with Laravel and Tailwind. Custom booking form, calendar, admin panel.',
      imageUrl: beaulieu,
      projectLink: 'https://www.gitedubeaulieu.fr/'
    },
    {
      id: 3,
      title: 'ToDo List',
      description: 'A simple todo list web application like Trello built with React. Add, delete tasks, drag and drop.',
      imageUrl: todolist,
      projectLink: 'https://antoinewtz.github.io/todolist-react/',
      codeLink: 'https://github.com/AntoineWtz/todolist-react'
    },
    {
      id: 4,
      title: 'Bee Cloon',
      description: 'An e-commerce web application built with PHP and Wordpres. Pack building feature, click and collect.',
      imageUrl: beecloon,
      projectLink: 'https://beecloon.crowdaa.net/'
    },
    {
      id: 5,
      title: 'Maison Ayele',
      description: 'Fixing out of stock issues on the website and adding new features. Built with PHP and Wordpress.',
      imageUrl: maison_ayele,
      projectLink: 'https://maisonayele.com/'
    },
    {
      id: 6,
      title: 'Systemik RH - HR',
      description: 'A web-based management and training application for human resources. Some CSS and JS frontend.',
      imageUrl: systemik,
      projectLink: 'https://systemik-rh.fr/'
    },
    {
      id: 7,
      title: 'Quiz App',
      description: 'Quiz App built with Angular, TriviaDB API and friends @asutorizu @cpck & @gawele',
      imageUrl: quiz,
      projectLink: 'https://antoinewtz.github.io/quiz-app/',
      codeLink: 'https://github.com/AntoineWtz/quiz-app'
    },
    {
      id: 8,
      title: 'Opus Musiques',
      description: 'Web media for music lovers. Built with Laravel and Tailwind. Backend management, user authentication.',
      imageUrl: opus,
      projectLink: 'http://www.opus-musiques.fr/',
      codeLink: 'https://github.com/AntoineWtz/opus-perso'
    },
  ];

  const handleReadMore = () => {
    setProjectsToShow(projectsToShow + 3);
  };

  return (
    <section id="projects" className="projects">
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
