import React from 'react'

const Project = ({ image, title, about, techStack, liveLink, githubLink}) => {
    return (
        <div className="project">
            <img src={image} alt="image" />
            <p>{title}</p>
            <p>{about}</p>
            <div>
                {techStack.map((tech) => (
                    <p key={liveLink} className="techUes">{tech}</p>
                ))}
            </div>
            <div className="project-btn">
                <a href={githubLink} target='_blank'><button>github</button></a>
                <a href={liveLink} target='_blank'><button>live</button></a>
            </div>
        </div>
    )
}

export default Project
