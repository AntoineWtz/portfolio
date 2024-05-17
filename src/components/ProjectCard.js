// ProjectCard.js
import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
    const { title, description, imageUrl, projectLink, codeLink } = project;

    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-links">
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">view project</a>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className={codeLink ? 'has-code' : ''}>
                        {codeLink ? 'view code' : 'secret code'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
