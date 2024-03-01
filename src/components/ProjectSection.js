import React from 'react'
import "../styles/ProjectSection.css"

function ProjectSection({ projectData }) {

  return (
    <div className="container">
        <div className="project-section">
            <div className="project-image">
                {window.innerWidth > 450 && <img src={projectData.imageUrl} alt={projectData.altText} className="image" />}
            </div>
            <div className="project-description">
                <h2>{projectData.name}</h2>
                <p>{projectData.description}</p>
                <div class="project-links">
                    { projectData.links.map(({ icon: Icon, link }, index) => (
                        <a href={link} target="_blank" rel="noopener noreferrer">{Icon && <Icon />}</a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectSection