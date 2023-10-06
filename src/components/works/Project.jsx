import React from 'react'

const Project = ({ image, title, about, techStack, liveLink, githubLink}) => {
    return (
        <div key={liveLink} className="project">
            <img src={image} alt="project-img" />
            <p>{title}</p>
            <p>{about}</p>
            <div>
                {techStack.map((tech, index) => (
                    <p key={index} className="techUes">{tech}</p>
                ))}
            </div>
            <div className="project-btn">
                <a href={githubLink} target='_blank'  rel="noopener noreferrer" ><button>github</button></a>
                <a href={liveLink} target='_blank'  rel="noopener noreferrer" ><button>live</button></a>
            </div>
        </div>
    )
}

export default Project
