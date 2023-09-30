import React from 'react';
import './works.css';

import projectsData from '../data';
import Project from './Project';

const Works = () => {
    return (
        <div className='works'>
            <h4>PROJECTS</h4>
            <div className='workRight'>
                <div className="box1">
                    {
                        projectsData.map((item) => (
                            <Project
                                key={item.title}
                                image={item.img}
                                title={item.title}
                                // about={item.about}
                                techStack={item.techStack}
                                liveLink={item.live}
                                githubLink={item.github}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Works;
